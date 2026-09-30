alter table public.partner_references
  add column if not exists assigned_to uuid references public.partner_profiles(user_id) on delete set null;

alter table public.partner_references
  add column if not exists management_notes text;

drop policy if exists "Partners read their references" on public.partner_references;
create policy "Partners read their references"
  on public.partner_references for select
  to authenticated
  using (
    (select auth.uid()) = user_id
    or (select auth.uid()) = assigned_to
  );

drop function if exists public.get_admin_references();
create function public.get_admin_references()
returns table (
  reference_id bigint,
  user_id uuid,
  owner_name text,
  owner_email text,
  owner_role text,
  owner_leader_id uuid,
  assigned_to uuid,
  assignee_name text,
  assignee_email text,
  assignee_role text,
  client_name text,
  client_phone text,
  postal_code text,
  product text,
  status text,
  source text,
  notes text,
  management_notes text,
  created_at timestamptz
)
language sql
security definer
set search_path = ''
stable
as $$
  select
    reference.id,
    reference.user_id,
    profile.full_name,
    user_account.email::text,
    profile.role,
    profile.leader_id,
    reference.assigned_to,
    assignee.full_name,
    assignee_account.email::text,
    assignee.role,
    reference.client_name,
    reference.client_phone,
    reference.postal_code,
    reference.product,
    reference.status,
    reference.source,
    reference.notes,
    reference.management_notes,
    reference.created_at
  from public.partner_references reference
  join public.partner_profiles profile on profile.user_id = reference.user_id
  join auth.users user_account on user_account.id = reference.user_id
  left join public.partner_profiles assignee on assignee.user_id = reference.assigned_to
  left join auth.users assignee_account on assignee_account.id = reference.assigned_to
  where exists (
    select 1
    from public.partner_profiles administrator
    where administrator.user_id = (select auth.uid())
      and administrator.role = 'admin'
  )
  order by reference.created_at desc;
$$;

create or replace function public.update_admin_reference(
  p_reference_id bigint,
  p_assigned_to uuid,
  p_status text,
  p_management_notes text
)
returns void
language plpgsql
security definer
set search_path = ''
as $$
begin
  if not exists (
    select 1
    from public.partner_profiles administrator
    where administrator.user_id = (select auth.uid())
      and administrator.role = 'admin'
  ) then
    raise exception 'Admin access required.';
  end if;

  if p_status is null or p_status not in (
    'Recebida',
    'Em contacto',
    'Proposta',
    'Venda',
    'Em validação',
    'Venda validada',
    'Comissão disponível'
  ) then
    raise exception 'Invalid reference status.';
  end if;

  if p_assigned_to is not null and not exists (
    select 1
    from public.partner_profiles assignee
    where assignee.user_id = p_assigned_to
      and assignee.role in ('admin', 'consultor', 'leader')
  ) then
    raise exception 'Invalid reference assignee.';
  end if;

  update public.partner_references
  set
    assigned_to = p_assigned_to,
    status = p_status,
    management_notes = nullif(trim(coalesce(p_management_notes, '')), ''),
    updated_at = now()
  where id = p_reference_id;

  if not found then
    raise exception 'Reference not found.';
  end if;
end;
$$;

revoke all on function public.get_admin_references() from public;
revoke all on function public.update_admin_reference(bigint, uuid, text, text) from public;
grant execute on function public.get_admin_references() to authenticated;
grant execute on function public.update_admin_reference(bigint, uuid, text, text) to authenticated;
