-- Optional installieren; aktiviert KEINEN Zeitplan und löscht KEINE Daten.
-- Erst nach Festlegung der Löschfrist ausdrücklich über purge_expired_bookings ausführen.
create or replace function public.preview_expired_bookings(p_before timestamptz)
returns bigint language plpgsql security definer set search_path = '' as $$
begin
 if auth.uid() is null or not coalesce(public.is_admin(),false) then raise exception 'Keine Adminberechtigung'; end if;
 if p_before is null or p_before>now() then raise exception 'Stichtag muss in der Vergangenheit liegen'; end if;
 return (select count(*) from public.bookings b where b.end_at<p_before
 and not exists(select 1 from public.bookings future where b.series_id is not null and future.series_id=b.series_id and future.end_at>=now()));
end;
$$;
create or replace function public.purge_expired_bookings(p_before timestamptz,p_confirm boolean default false)
returns integer language plpgsql security definer set search_path = '' as $$
declare n integer;
begin
 if auth.uid() is null or not coalesce(public.is_admin(),false) then raise exception 'Keine Adminberechtigung'; end if;
 if p_confirm is distinct from true then raise exception 'Löschung ausdrücklich bestätigen'; end if;
 if p_before is null or p_before>now() then raise exception 'Stichtag muss in der Vergangenheit liegen'; end if;
 perform pg_catalog.pg_advisory_xact_lock(726371);
 delete from public.bookings b where b.end_at<p_before
 and not exists(select 1 from public.bookings future where b.series_id is not null and future.series_id=b.series_id and future.end_at>=now());
 get diagnostics n=row_count;
 return n;
end;
$$;
revoke all on function public.preview_expired_bookings(timestamptz) from public,anon;
revoke all on function public.purge_expired_bookings(timestamptz,boolean) from public,anon;
grant execute on function public.preview_expired_bookings(timestamptz) to authenticated;
grant execute on function public.purge_expired_bookings(timestamptz,boolean) to authenticated;
