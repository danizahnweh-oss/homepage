-- Einmalig im SQL Editor ausführen, nachdem 03-schulstunden.sql installiert ist.
-- Eine Benachrichtigung pro Anfrage, auch bei einem Wochenabo.
create table if not exists public.booking_notifications (
  id uuid primary key default gen_random_uuid(),
  booking_id uuid not null unique references public.bookings(id) on delete cascade,
  status text not null default 'pending' check (status in ('pending','sending','sent')),
  sent_at timestamptz,
  created_at timestamptz not null default now()
);
alter table public.booking_notifications enable row level security;
revoke all on public.booking_notifications from public, anon, authenticated;
grant select, update on public.booking_notifications to service_role;

create or replace function public.queue_booking_notification()
returns trigger language plpgsql security definer set search_path = '' as $$
begin
 if new.status = 'pending' and (
   new.series_id is null or not exists (
     select 1 from public.bookings b where b.series_id = new.series_id and b.id <> new.id
   )
 ) then
   insert into public.booking_notifications(booking_id) values (new.id);
 end if;
 return new;
end;
$$;
revoke all on function public.queue_booking_notification() from public, anon, authenticated;
drop trigger if exists queue_booking_notification_on_insert on public.bookings;
create trigger queue_booking_notification_on_insert
 after insert on public.bookings
 for each row execute function public.queue_booking_notification();
