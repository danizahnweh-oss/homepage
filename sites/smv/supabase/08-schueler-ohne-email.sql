-- Einmalig im SQL Editor ausführen. Bestehende Konten/Buchungen bleiben erhalten.
-- Einmalig ausführen. Behebt die Rechteprüfung; löscht keine Buchungen.
begin;
create or replace function public.decide_booking(p_id uuid,p_action text,p_series boolean default false)
returns integer language plpgsql security definer set search_path = '' as $$
declare v public.bookings%rowtype; n integer; v_admin boolean;
begin
 if auth.uid() is null then raise exception 'Bitte anmelden'; end if;
 if p_id is null or p_action is null or p_action not in ('approve','reject','cancel') or p_series is null then raise exception 'Ungültige Entscheidung'; end if;
 perform pg_catalog.pg_advisory_xact_lock(726371);
 select * into v from public.bookings where id=p_id for update;
 if not found then raise exception 'Termin nicht gefunden'; end if;
 v_admin := coalesce(public.is_admin(),false);
 if p_action in ('approve','reject') and not v_admin then raise exception 'Nur Admins können Anfragen entscheiden'; end if;
 if p_action='cancel' and not (v_admin or v.user_id=auth.uid()) then raise exception 'Keine Berechtigung'; end if;
 if p_action='approve' then
  if exists(select 1 from public.bookings b where (b.id=v.id or (p_series and v.series_id is not null and b.series_id=v.series_id)) and b.status='pending' and exists(
   select 1 from public.bookings taken where taken.status='approved' and taken.start_at<b.end_at and taken.end_at>b.start_at)) then
    raise exception 'Mindestens ein Termin ist inzwischen belegt';
  end if;
  update public.bookings b set status='approved',decided_at=now() where
   (b.id=v.id or (p_series and v.series_id is not null and b.series_id=v.series_id)) and b.status='pending';
 elsif p_action='reject' then
  update public.bookings b set status='rejected',decided_at=now() where
   (b.id=v.id or (p_series and v.series_id is not null and b.series_id=v.series_id)) and b.status='pending';
 elsif p_action='cancel' then
  update public.bookings b set status='cancelled',decided_at=now() where
   (b.id=v.id or (p_series and v.series_id is not null and b.series_id=v.series_id)) and b.status in ('pending','approved');
 end if;
 get diagnostics n=row_count;
 if n=0 then raise exception 'Dieser Termin wurde bereits bearbeitet'; end if;
 return n;
end;
$$;
revoke all on function public.decide_booking(uuid,text,boolean) from public, anon;
grant execute on function public.decide_booking(uuid,text,boolean) to authenticated;

revoke execute on function public.is_admin() from public, anon;
grant execute on function public.is_admin() to authenticated;
revoke execute on function public.create_booking_with_name(timestamp,timestamp,text,text,boolean,date,boolean) from public, anon;
grant execute on function public.create_booking_with_name(timestamp,timestamp,text,text,boolean,date,boolean) to authenticated;
revoke execute on function public.create_booking(timestamp,timestamp,text,boolean,date,boolean) from public, anon, authenticated;
commit;

begin;

create table if not exists public.student_accounts (
 user_id uuid primary key references auth.users(id) on delete cascade,
 login_name text not null check (char_length(login_name) between 3 and 60),
 name_key text not null unique,
 created_at timestamptz not null default now()
);
alter table public.student_accounts enable row level security;
revoke all on public.student_accounts from public,anon,authenticated;
grant select,insert,update,delete on public.student_accounts to service_role;
alter table public.bookings alter column requester_email drop not null;

create or replace function public.is_admin() returns boolean
language sql security definer stable set search_path = '' as $$
 select auth.uid() is not null
 and not exists(select 1 from public.student_accounts s where s.user_id=auth.uid())
 and exists(select 1 from auth.users u join public.smv_admins a on lower(a.email)=lower(u.email) where u.id=auth.uid() and u.email_confirmed_at is not null);
$$;
revoke all on function public.is_admin() from public,anon;
grant execute on function public.is_admin() to authenticated;

create or replace function public.my_student_account()
returns table(login_name text) language sql security definer stable set search_path = '' as $$
 select s.login_name from public.student_accounts s where s.user_id=auth.uid();
$$;
revoke all on function public.my_student_account() from public,anon;
grant execute on function public.my_student_account() to authenticated;

create or replace function public.list_student_accounts()
returns table(user_id uuid,login_name text,created_at timestamptz)
language plpgsql security definer stable set search_path = '' as $$
begin
 if auth.uid() is null or not coalesce(public.is_admin(),false) then raise exception 'Keine Adminberechtigung'; end if;
 return query select s.user_id,s.login_name,s.created_at from public.student_accounts s order by s.login_name;
end;
$$;
revoke all on function public.list_student_accounts() from public,anon;
grant execute on function public.list_student_accounts() to authenticated;

create table if not exists public.student_registration_limits (
 bucket text primary key, window_start timestamptz not null, attempts integer not null
);
alter table public.student_registration_limits enable row level security;
revoke all on public.student_registration_limits from public,anon,authenticated;
-- Called only by the registration Edge Function, never by a browser.
create or replace function public.claim_student_registration(p_name_hash text,p_ip_hash text)
returns boolean language plpgsql security definer set search_path = '' as $$
declare v_bucket text; v_limit integer; v_attempts integer;
begin
 if p_name_hash is null or p_name_hash !~ '^[a-f0-9]{64}$' or p_ip_hash is null or p_ip_hash !~ '^[a-f0-9]{64}$' then raise exception 'Ungültiger Rate-Limit-Schlüssel'; end if;
 perform pg_catalog.pg_advisory_xact_lock(726372);
 delete from public.student_registration_limits where window_start<now()-interval '2 hours';
 for v_bucket,v_limit in select * from (values ('global',500),('ip:'||p_ip_hash,120),('name:'||p_name_hash,5)) limits(bucket,cap) loop
  insert into public.student_registration_limits(bucket,window_start,attempts) values(v_bucket,date_trunc('hour',now()),1)
  on conflict(bucket) do update set
   attempts=case when student_registration_limits.window_start=date_trunc('hour',now()) then student_registration_limits.attempts+1 else 1 end,
   window_start=date_trunc('hour',now()) returning attempts into v_attempts;
  if v_attempts>v_limit then return false; end if;
 end loop;
 return true;
end;
$$;
revoke all on function public.claim_student_registration(text,text) from public,anon,authenticated;
grant execute on function public.claim_student_registration(text,text) to service_role;
create or replace function public.create_booking_with_name(
 p_start timestamp without time zone,p_end timestamp without time zone,p_purpose text,p_name text,
 p_weekly boolean default false,p_until date default null,p_direct boolean default false
) returns uuid language plpgsql security definer set search_path = '' as $$
declare v_id uuid := gen_random_uuid(); v_start timestamp; v_end timestamp; v_n integer; v_tzstart timestamptz; v_tzend timestamptz; v_email text; v_student_name text;
begin
 if auth.uid() is null then raise exception 'Bitte anmelden'; end if;
 select s.login_name into v_student_name from public.student_accounts s where s.user_id=auth.uid();
 if v_student_name is not null then
  v_email := null; p_name := v_student_name;
 elsif public.is_admin() then
  v_email := auth.jwt()->>'email';
 else raise exception 'Bitte ein Schülerkonto mit Anmeldenamen verwenden';
 end if;
 if p_direct is null or p_weekly is null then raise exception 'Ungültige Buchungsoptionen'; end if;
 if p_start is null or p_end is null then raise exception 'Bitte einen Zeitraum angeben'; end if;
 if p_direct and not public.is_admin() then raise exception 'Keine Adminberechtigung'; end if;
 if p_purpose is null or p_purpose not in ('SMV-Sitzung','Arbeitsgruppe / Projekt','Veranstaltung vorbereiten','Sonstige Raumnutzung') then raise exception 'Bitte einen vorgegebenen Buchungszweck auswählen'; end if;
 if p_name is null or char_length(trim(p_name)) not between 1 and 100 then raise exception 'Bitte einen Namen angeben (maximal 100 Zeichen)'; end if;
 if p_end<=p_start or p_start::date<>p_end::date or extract(isodow from p_start) not between 1 and 5 then
  raise exception 'Nur Schulstunden von Montag bis Freitag sind buchbar';
 end if;
 if p_start::time not in (time '08:05',time '08:50',time '09:55',time '10:40',time '11:45',time '12:30',time '13:30',time '14:15',time '15:00',time '15:45')
    or p_end::time not in (time '08:50',time '09:35',time '10:40',time '11:25',time '12:30',time '13:15',time '14:15',time '15:00',time '15:45',time '16:30') then
  raise exception 'Bitte ganze Schulstunden auswählen';
 end if;
 if not exists (
  select 1 from (values
   (time '08:05',time '09:35'),
   (time '09:55',time '11:25'),
   (time '11:45',time '13:15'),
   (time '13:30',time '16:30')
  ) as block(start_time,end_time)
  where p_start::time>=block.start_time and p_end::time<=block.end_time
 ) then raise exception 'Eine Buchung darf keine Pause überbrücken'; end if;
 if p_weekly and (p_until is null or p_until<p_start::date or p_until>p_start::date+364) then raise exception 'Abo-Ende muss innerhalb von 52 Wochen liegen'; end if;
 if not p_weekly then p_until:=p_start::date; end if;
 perform pg_catalog.pg_advisory_xact_lock(726371);
 for v_n in 0..52 loop
  v_start:=p_start+v_n*interval '7 days';v_end:=p_end+v_n*interval '7 days';
  exit when v_start::date>p_until;
  v_tzstart:=v_start at time zone 'Europe/Berlin';v_tzend:=v_end at time zone 'Europe/Berlin';
  if v_tzstart<=now() then raise exception 'Der Termin muss in der Zukunft liegen'; end if;
  if exists(select 1 from public.bookings b where b.status='approved' and b.start_at<v_tzend and b.end_at>v_tzstart) then raise exception 'Mindestens ein Termin ist bereits belegt'; end if;
  insert into public.bookings(series_id,user_id,requester_email,requester_name,purpose,start_at,end_at,status)
  values(case when p_weekly then v_id else null end,auth.uid(),v_email,trim(p_name),trim(p_purpose),v_tzstart,v_tzend,case when p_direct then 'approved' else 'pending' end);
 end loop;
 return v_id;
end;
$$;
grant execute on function public.create_booking_with_name(timestamp,timestamp,text,text,boolean,date,boolean) to authenticated;

commit;
