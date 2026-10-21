import {pathToFileURL} from 'node:url';
import {readFileSync} from 'node:fs';
import assert from 'node:assert/strict';
const {PGlite}=await import(process.env.SMV_PGLITE_MODULE?pathToFileURL(process.env.SMV_PGLITE_MODULE).href:'@electric-sql/pglite');
const db=new PGlite();
await db.exec(`create role anon;create role authenticated;create role service_role bypassrls;create schema auth;create table auth.users(id uuid primary key,email text,email_confirmed_at timestamptz);grant usage on schema auth to anon,authenticated;
create function auth.uid() returns uuid language sql stable as $$select nullif(current_setting('request.jwt.claim.sub',true),'')::uuid$$;
create function auth.jwt() returns jsonb language sql stable as $$select coalesce(nullif(current_setting('request.jwt.claims',true),''),'{}')::jsonb$$;`);
for(const name of ['01-smv-zimmer.sql','02-name-fuer-buchungen.sql','03-schulstunden.sql','04-admin-benachrichtigungen.sql','08-schueler-ohne-email.sql','09-pausen-buchbar.sql'])await db.exec(readFileSync('supabase/'+name,'utf8'));
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
// All breaks, combinations, weekly bookings, exact boundaries and conflicts.
await login(student,'internal@students.invalid');
for(const [start,end] of [['09:35','09:55'],['11:25','11:45'],['13:15','13:30'],['08:50','10:40']]) {
 await db.query("select public.create_booking_with_name($1::timestamp,$2::timestamp,'SMV-Sitzung','Forged')",['2030-01-08 '+start,'2030-01-08 '+end]);
}
await db.query("select public.create_booking_with_name('2030-01-09 09:35','2030-01-09 09:55','SMV-Sitzung','Forged',true,'2030-01-23')");
assert.equal((await db.query("select count(*)::int as n from public.bookings where series_id is not null")).rows[0].n,3);
for(const [start,end] of [['2030-01-08 09:36','2030-01-08 09:55'],['2030-01-08 09:35','2030-01-08 09:54'],['2030-01-08 07:00','2030-01-08 08:50'],['2030-01-08 15:45','2030-01-08 17:00'],['2030-01-12 09:35','2030-01-12 09:55'],['2030-01-08 09:55','2030-01-08 09:35'],['2030-01-08 09:35','2030-01-09 09:55']]) {
 await rejects("select public.create_booking_with_name($1::timestamp,$2::timestamp,'SMV-Sitzung','Test')",[start,end]);
}
await rejects("select public.create_booking_with_name('2030-01-08 09:35','2030-01-08 09:55','SMV-Sitzung','Test',false,null,true)",[],/Adminberechtigung/);
await login(admin,'admin@test.invalid');
await db.query("select public.create_booking_with_name('2030-01-10 09:35','2030-01-10 09:55','SMV-Sitzung','Admin',false,null,true)");
await login(student,'internal@students.invalid');
await rejects("select public.create_booking_with_name('2030-01-10 08:50','2030-01-10 10:40','SMV-Sitzung','Test')",[],/belegt/);
assert.equal((await db.query("select count(*)::int as n from public.bookings where user_id=$1 and (requester_email is not null or requester_name<>'Testperson A')",[student])).rows[0].n,0);
await login(admin,'admin@test.invalid');
console.log('PASS: three breaks, spanning breaks, weekly breaks, exact boundaries, school days, conflict detection and student restrictions');
await db.query('update auth.users set email_confirmed_at=null where id=$1',[admin]);assert.equal((await db.query('select public.is_admin() as admin')).rows[0].admin,false);
await login(null);await rejects('select * from public.list_student_accounts()',[],/Adminberechtigung/);
const grants=(await db.query("select has_function_privilege('anon','public.claim_student_registration(text,text)','execute') as anon,has_function_privilege('service_role','public.claim_student_registration(text,text)','execute') as service")).rows[0];assert.equal(grants.anon,false);assert.equal(grants.service,true);
for(let i=0;i<6;i++){const r=await db.query('select public.claim_student_registration($1,$2) as allowed',['a'.repeat(64),'b'.repeat(64)]);assert.equal(r.rows[0].allowed,i<5);}
console.log('PASS: profile/booking privacy, canonical names, no student email, RLS isolation, protected admin list and verified admins, rate limits and RPC permissions');
// Retention operates on SMV students only; the scheduler is not installed in this isolated DB.
await db.exec("alter table auth.users add column created_at timestamptz not null default now();alter table auth.users add column last_sign_in_at timestamptz;");
await db.exec(readFileSync('supabase/10-loeschfrist-ein-jahr.sql','utf8').split('-- Benötigt Supabase Cron.')[0]);
const stale='55555555-5555-5555-5555-555555555555',never='66666666-6666-6666-6666-666666666666',recent='77777777-7777-7777-7777-777777777777';
await db.exec(`insert into auth.users(id,email,created_at,last_sign_in_at) values
 ('${stale}','stale@students.invalid',now()-interval '2 years',now()-interval '1 year 1 day'),
 ('${never}','never@students.invalid',now()-interval '1 year 1 day',null),
 ('${recent}','recent@students.invalid',now()-interval '2 years',now()-interval '1 day');
 insert into public.student_accounts(user_id,login_name,name_key) values('${stale}','Stale','stale'),('${never}','Never','never'),('${recent}','Recent','recent');
 update auth.users set created_at=now()-interval '3 years',last_sign_in_at=now()-interval '2 years' where id in ('${admin}','${old}');
 insert into public.bookings(user_id,requester_name,purpose,start_at,end_at) values
 ('${recent}','Recent','SMV-Sitzung',now()-interval '1 year 2 days',now()-interval '1 year 1 day'),
 ('${recent}','Recent','SMV-Sitzung',now()-interval '1 year'+interval '1 day',now()-interval '1 year'+interval '2 days');`);
await db.exec('set role authenticated');await rejects('select public.purge_expired_smv_data()',[],/permission/);await db.exec('reset role');
await db.query('select public.purge_expired_smv_data()');
for(const id of [stale,never])assert.equal((await db.query('select count(*)::int as n from auth.users where id=$1',[id])).rows[0].n,0);
for(const id of [admin,old,recent])assert.equal((await db.query('select count(*)::int as n from auth.users where id=$1',[id])).rows[0].n,1);
assert.equal((await db.query('select count(*)::int as n from public.bookings where user_id=$1',[recent])).rows[0].n,1);
console.log('PASS: one-year booking and inactivity retention, creation fallback, recent logins retained, unrelated app/admin accounts protected, cleanup RPC restricted');
await db.close();
