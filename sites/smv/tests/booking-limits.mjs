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
await db.exec(readFileSync('supabase/11-buchungslimits.sql','utf8'));
async function request(start,end,weekly=false,until=null){return db.query("select public.create_booking_with_name($1::timestamp,$2::timestamp,'SMV-Sitzung','Forged',$3,$4::date)",[start,end,weekly,until]);}
async function reset(){await db.exec('delete from public.bookings');await login(student,'internal@students.invalid');}
async function count(){return (await db.query('select count(*)::int as n from public.bookings')).rows[0].n;}
await reset();
await request('2030-01-07 08:05','2030-01-07 08:50');
await rejects("select public.create_booking_with_name('2030-01-07 08:05','2030-01-07 09:35','SMV-Sitzung','Forged')",[],/bereits eine offene Anfrage/);assert.equal(await count(),1);
await request('2030-01-07 08:50','2030-01-07 09:35');await request('2030-01-07 09:35','2030-01-07 09:55');
await rejects("select public.create_booking_with_name('2030-01-08 08:05','2030-01-08 08:50','SMV-Sitzung','Forged')",[],/3 Buchungsanfragen pro Stunde/);
await reset();
await db.query(`insert into public.bookings(user_id,requester_name,purpose,start_at,end_at,status,created_at) select $1,'Testperson A','SMV-Sitzung','2030-01-07 08:05+01'::timestamptz,'2030-01-07 08:50+01'::timestamptz,'cancelled',now()-interval '2 hours' from generate_series(1,9)`,[student]);
await request('2030-01-08 08:05','2030-01-08 08:50');
await rejects("select public.create_booking_with_name('2030-01-09 08:05','2030-01-09 08:50','SMV-Sitzung','Forged')",[],/10 Buchungsanfragen/);
await reset();
await db.query(`insert into public.bookings(user_id,requester_name,purpose,start_at,end_at,status,created_at) select $1,'Testperson A','SMV-Sitzung','2030-01-07 08:05+01'::timestamptz,'2030-01-07 08:50+01'::timestamptz,'pending',now()-interval '2 days' from generate_series(1,5)`,[student]);
await rejects("select public.create_booking_with_name('2030-01-08 08:05','2030-01-08 08:50','SMV-Sitzung','Forged')",[],/5 offene Anfragen/);
await reset();await request('2030-01-07 09:35','2030-01-07 09:55',true,'2030-01-21');assert.equal(await count(),3);
await request('2030-01-08 09:35','2030-01-08 09:55');await request('2030-01-09 09:35','2030-01-09 09:55');assert.equal(await count(),5);
await rejects("select public.create_booking_with_name('2030-01-10 09:35','2030-01-10 09:55','SMV-Sitzung','Forged')",[],/3 Buchungsanfragen/);
await reset();await request('2030-01-14 09:35','2030-01-14 09:55');
await rejects("select public.create_booking_with_name('2030-01-07 09:35','2030-01-07 09:55','SMV-Sitzung','Forged',true,'2030-01-21')",[],/bereits eine offene Anfrage/);assert.equal(await count(),1);
await reset();await login(admin,'admin@test.invalid');for(let i=0;i<12;i++)await request('2030-01-07 09:35','2030-01-07 09:55');assert.equal(await count(),12);
console.log('PASS: per-student hourly/daily/open limits, cancelled requests count, overlap rejection, one quota per series, atomic rollback, admins exempt');
await db.close();
