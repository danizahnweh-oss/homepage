-- Installiert die gewünschte Jahresfrist. Die Installation selbst löscht keine Daten.
-- Tägliche Bereinigung um 02:15 UTC, nur Schülerkonten dieser Anwendung.
begin;
create or replace function public.purge_expired_smv_data()
returns jsonb language plpgsql security definer set search_path = '' as $$
declare v_bookings integer; v_accounts integer;
begin
 perform pg_catalog.pg_advisory_xact_lock(726371);
 delete from public.bookings where end_at < now()-interval '1 year';
 get diagnostics v_bookings=row_count;
 delete from auth.users u
 where exists(select 1 from public.student_accounts s where s.user_id=u.id)
 and not exists(select 1 from public.smv_admins a where lower(a.email)=lower(u.email))
 and coalesce(u.last_sign_in_at,u.created_at) < now()-interval '1 year';
 get diagnostics v_accounts=row_count;
 return jsonb_build_object('expired_bookings_deleted',v_bookings,'inactive_student_accounts_deleted',v_accounts);
end;
$$;
revoke all on function public.purge_expired_smv_data() from public,anon,authenticated;
grant execute on function public.purge_expired_smv_data() to service_role;
commit;
-- Benötigt Supabase Cron. Der Aufruf plant erst den nächsten Lauf ein.
create extension if not exists pg_cron;
select cron.schedule('smv-yearly-retention','15 2 * * *','select public.purge_expired_smv_data();');
