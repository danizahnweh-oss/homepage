-- Erweitert die bestehenden Schülerbuchungen um alle drei Pausen.
-- Bestehende Buchungen bleiben erhalten. Auch zusammenhängende Zeiten über Pausen sind buchbar.
begin;
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
  raise exception 'Nur Schulstunden und Pausen von Montag bis Freitag sind buchbar';
 end if;
 if p_start::time not in (time '08:05',time '08:50',time '09:35',time '09:55',time '10:40',time '11:25',time '11:45',time '12:30',time '13:15',time '13:30',time '14:15',time '15:00',time '15:45')
    or p_end::time not in (time '08:50',time '09:35',time '09:55',time '10:40',time '11:25',time '11:45',time '12:30',time '13:15',time '13:30',time '14:15',time '15:00',time '15:45',time '16:30') then
  raise exception 'Bitte ganze Schulstunden oder Pausen auswählen';
 end if;
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
revoke all on function public.create_booking_with_name(timestamp,timestamp,text,text,boolean,date,boolean) from public,anon;
grant execute on function public.create_booking_with_name(timestamp,timestamp,text,text,boolean,date,boolean) to authenticated;

commit;
