import {pathToFileURL} from 'node:url';
import {readFileSync} from 'node:fs';
import assert from 'node:assert/strict';
const {PGlite}=await import(process.env.SMV_PGLITE_MODULE?pathToFileURL(process.env.SMV_PGLITE_MODULE).href:'@electric-sql/pglite');
const db=new PGlite();
await db.exec(`create role anon;create role authenticated;create role service_role bypassrls;create schema auth;create table auth.users(id uuid primary key,email text,email_confirmed_at timestamptz);grant usage on schema auth to anon,authenticated;
create function auth.uid() returns uuid language sql stable as $$select nullif(current_setting('request.jwt.claim.sub',true),'')::uuid$$;
create function auth.jwt() returns jsonb language sql stable as $$select coalesce(nullif(current_setting('request.jwt.claims',true),''),'{}')::jsonb$$;`);
for(const name of ['01-smv-zimmer.sql','02-name-fuer-buchungen.sql','03-schulstunden.sql','04-admin-benachrichtigungen.sql','08-schueler-ohne-email.sql'])await db.exec(readFileSync('supabase/'+name,'utf8'));
const student='11111111-1111-1111-1111-111111111111',other='22222222-2222-2222-2222-222222222222',admin='33333333-3333-3333-3333-333333333333',old='44444444-4444-4444-4444-444444444444';
await db.exec(`insert into auth.users values('${student}','internal@students.invalid',now()),('${other}','other@students.invalid',now()),('${admin}','admin@test.invalid',now()),('${old}','old@test.invalid',now());insert into public.smv_admins values('admin@test.invalid'),('internal@students.invalid');insert into public.student_accounts(user_id,login_name,name_key) values('${student}','Testperson A','testperson a'),('${other}','Testperson B','testperson b');`);
async function login(id,email){await db.query("select set_config('request.jwt.claim.sub',$1,false),set_config('request.jwt.claims',$2,false)",[id||'',JSON.stringify(email?{email}: {})])}
async function rejects(sql,params=[],pattern){try{await db.query(sql,params);assert.fail('Expected rejection')}catch(e){if(e.code==='ERR_ASSERTION')throw e;if(pattern)assert.match(e.message,pattern)}}
await login(student,'admin@test.invalid');assert.equal((await db.query('select public.is_admin() as admin')).rows[0].admin,false);
await db.query("select public.create_booking_with_name('2030-01-07 08:05','2030-01-07 08:50','SMV-Sitzung','Forged Other Name')");
const booking=(await db.query('select * from public.bookings')).rows[0];assert.equal(booking.requester_name,'Testperson A');assert.equal(booking.requester_email,null);assert.equal(booking.status,'pending');
await rejects("select public.create_booking_with_name('2030-01-07 09:55','2030-01-07 10:40','SMV-Sitzung','Test',false,null,true)",[],/Adminberechtigung/);
await rejects('select * from public.list_student_accounts()',[],/Adminberechtigung/);
assert.equal((await db.query('select * from public.my_student_account()')).rows[0].login_name,'Testperson A');
await db.exec('set role authenticated');await rejects('select * from public.student_accounts',[],/permission/);assert.equal((await db.query('select count(*)::int as n from public.bookings')).rows[0].n,1);await db.exec('reset role');
await login(other,'other@students.invalid');await db.exec('set role authenticated');assert.equal((await db.query('select count(*)::int as n from public.bookings')).rows[0].n,0);await db.exec('reset role');
await login(old,'old@test.invalid');await rejects("select public.create_booking_with_name('2030-01-07 10:40','2030-01-07 11:25','SMV-Sitzung','Test')",[],/Schülerkonto/);
await login(admin,'admin@test.invalid');assert.equal((await db.query('select public.is_admin() as admin')).rows[0].admin,true);assert.equal((await db.query('select * from public.list_student_accounts()')).rows.length,2);
await db.query("select public.create_booking_with_name('2030-01-07 11:45','2030-01-07 12:30','SMV-Sitzung','Admin entry',false,null,true)");
assert.equal((await db.query("select requester_email from public.bookings where status='approved'")).rows[0].requester_email,'admin@test.invalid');
await db.query('update auth.users set email_confirmed_at=null where id=$1',[admin]);assert.equal((await db.query('select public.is_admin() as admin')).rows[0].admin,false);
await login(null);await rejects('select * from public.list_student_accounts()',[],/Adminberechtigung/);
const grants=(await db.query("select has_function_privilege('anon','public.claim_student_registration(text,text)','execute') as anon,has_function_privilege('service_role','public.claim_student_registration(text,text)','execute') as service")).rows[0];assert.equal(grants.anon,false);assert.equal(grants.service,true);
for(let i=0;i<6;i++){const r=await db.query('select public.claim_student_registration($1,$2) as allowed',['a'.repeat(64),'b'.repeat(64)]);assert.equal(r.rows[0].allowed,i<5);}
console.log('PASS: profile/booking privacy, canonical names, no student email, RLS isolation, protected admin list and verified admins, rate limits and RPC permissions');
await db.close();
