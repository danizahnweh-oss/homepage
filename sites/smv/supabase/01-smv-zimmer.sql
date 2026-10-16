-- In einem eigenen Supabase-Projekt im SQL Editor einmal ausführen.
-- Zeiten werden als lokale Schulzeit (Europe/Berlin) eingegeben und als timestamptz gespeichert.
create table if not exists public.smv_admins (email text primary key);
create table if not exists public.bookings (
  id uuid primary key default gen_random_uuid(),
  series_id uuid,
  user_id uuid not null references auth.users(id) on delete cascade,
  requester_email text not null,
  purpose text not null check (char_length(purpose) between 1 and 140),
  start_at timestamptz not null,
  end_at timestamptz not null,
  status text not null default 'pending' check (status in ('pending','approved','rejected','cancelled')),
  created_at timestamptz not null default now(),
  decided_at timestamptz,
  check (end_at > start_at)
);
create index if not exists idx_bookings_start on public.bookings(start_at);
create index if not exists idx_bookings_user_start on public.bookings(user_id,start_at);
create index if not exists idx_bookings_status_created on public.bookings(status,created_at);
create index if not exists idx_bookings_series on public.bookings(series_id);
alter table public.smv_admins enable row level security;
alter table public.bookings enable row level security;
revoke all on public.smv_admins from anon, authenticated;
revoke all on public.bookings from anon, authenticated;
grant select on public.bookings to authenticated;

create or replace function public.is_admin() returns boolean
language sql security definer stable set search_path = '' as $$
 select exists(select 1 from public.smv_admins where lower(email)=lower(auth.jwt()->>'email'));
$$;
grant execute on function public.is_admin() to authenticated;
create policy "Own bookings or administrator" on public.bookings for select to authenticated
 using (user_id=auth.uid() or public.is_admin());

create or replace function public.occupied_slots(p_from timestamptz,p_to timestamptz)
returns table(start_at timestamptz,end_at timestamptz)
language plpgsql security definer stable set search_path = '' as $$
begin
 if p_to<=p_from or p_to>p_from+interval '62 days' then raise exception 'Ungültiger Zeitraum'; end if;
 return query select b.start_at,b.end_at from public.bookings b
 where b.status='approved' and b.start_at<p_to and b.end_at>p_from order by b.start_at;
end;
$$;
grant execute on function public.occupied_slots(timestamptz,timestamptz) to anon,authenticated;

create or replace function public.create_booking(
 p_start timestamp without time zone,p_end timestamp without time zone,p_purpose text,
 p_weekly boolean default false,p_until date default null,p_direct boolean default false
) returns uuid language plpgsql security definer set search_path = '' as $$
declare v_id uuid := gen_random_uuid(); v_start timestamp; v_end timestamp; v_n integer; v_tzstart timestamptz; v_tzend timestamptz; v_email text;
begin
 if auth.uid() is null then raise exception 'Bitte anmelden'; end if;
 v_email := auth.jwt()->>'email';
 if v_email is null then raise exception 'E-Mail-Adresse fehlt'; end if;
 if p_direct and not coalesce(public.is_admin(),false) then raise exception 'Keine Adminberechtigung'; end if;
 if p_purpose is null or char_length(trim(p_purpose)) not between 1 and 140 then raise exception 'Bitte einen kurzen Zweck angeben'; end if;
 if p_end<=p_start or p_end>p_start+interval '2 hours' or p_end<p_start+interval '30 minutes' then raise exception 'Buchungen dauern 30 bis 120 Minuten'; end if;
 if extract(isodow from p_start) not between 1 and 5 or p_start::time<time '08:00' or p_end::time>time '18:00' or p_start::date<>p_end::date then raise exception 'Nur Montag bis Freitag von 8 bis 18 Uhr buchbar'; end if;
 if extract(minute from p_start) not in (0,30) or extract(second from p_start)<>0 then raise exception 'Beginn nur zur vollen oder halben Stunde'; end if;
 if p_weekly and (p_until is null or p_until<p_start::date or p_until>p_start::date+364) then raise exception 'Abo-Ende muss innerhalb von 52 Wochen liegen'; end if;
 if not p_weekly then p_until:=p_start::date; end if;
 perform pg_catalog.pg_advisory_xact_lock(726371);
 for v_n in 0..52 loop
  v_start:=p_start+v_n*interval '7 days';v_end:=p_end+v_n*interval '7 days';
  exit when v_start::date>p_until;
  v_tzstart:=v_start at time zone 'Europe/Berlin';v_tzend:=v_end at time zone 'Europe/Berlin';
  if v_tzstart<=now() then raise exception 'Der Termin muss in der Zukunft liegen'; end if;
  if exists(select 1 from public.bookings b where b.status='approved' and b.start_at<v_tzend and b.end_at>v_tzstart) then raise exception 'Mindestens ein Termin ist bereits belegt'; end if;
  insert into public.bookings(series_id,user_id,requester_email,purpose,start_at,end_at,status)
  values(case when p_weekly then v_id else null end,auth.uid(),v_email,trim(p_purpose),v_tzstart,v_tzend,case when p_direct then 'approved' else 'pending' end);
 end loop;
 return v_id;
end;
$$;
grant execute on function public.create_booking(timestamp,timestamp,text,boolean,date,boolean) to authenticated;

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

-- NACH der ersten Anmeldung die Administratoren durch eine berechtigte Person ergänzen:
-- insert into public.smv_admins(email) values ('admin@schule.de');
