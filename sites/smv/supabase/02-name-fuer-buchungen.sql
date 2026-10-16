-- Einmalig im SQL Editor des bestehenden Supabase-Projekts ausführen.
-- Bestehende Buchungen bleiben erhalten; bei ihnen ist der Name zunächst leer.
alter table public.bookings add column if not exists requester_name text;

create or replace function public.create_booking_with_name(
 p_start timestamp without time zone,p_end timestamp without time zone,p_purpose text,p_name text,
 p_weekly boolean default false,p_until date default null,p_direct boolean default false
) returns uuid language plpgsql security definer set search_path = '' as $$
declare v_id uuid := gen_random_uuid(); v_start timestamp; v_end timestamp; v_n integer; v_tzstart timestamptz; v_tzend timestamptz; v_email text;
begin
 if auth.uid() is null then raise exception 'Bitte anmelden'; end if;
 v_email := auth.jwt()->>'email';
 if v_email is null then raise exception 'E-Mail-Adresse fehlt'; end if;
 if p_direct and not public.is_admin() then raise exception 'Keine Adminberechtigung'; end if;
 if p_purpose is null or char_length(trim(p_purpose)) not between 1 and 140 then raise exception 'Bitte einen kurzen Zweck angeben'; end if;
 if p_name is null or char_length(trim(p_name)) not between 1 and 100 then raise exception 'Bitte einen Namen angeben (maximal 100 Zeichen)'; end if;
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
  insert into public.bookings(series_id,user_id,requester_email,requester_name,purpose,start_at,end_at,status)
  values(case when p_weekly then v_id else null end,auth.uid(),v_email,trim(p_name),trim(p_purpose),v_tzstart,v_tzend,case when p_direct then 'approved' else 'pending' end);
 end loop;
 return v_id;
end;
$$;
grant execute on function public.create_booking_with_name(timestamp,timestamp,text,text,boolean,date,boolean) to authenticated;
