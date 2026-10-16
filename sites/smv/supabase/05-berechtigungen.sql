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
