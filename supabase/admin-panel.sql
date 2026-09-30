alter table public.partner_profiles
  drop constraint if exists partner_profiles_role_check;

alter table public.partner_profiles
  add constraint partner_profiles_role_check
  check (role in ('referenciador', 'consultor', 'leader', 'admin'));

create or replace function public.get_admin_partners_summary()
returns table (
  user_id uuid,
  full_name text,
  email text,
  phone text,
  region text,
  role text,
  leader_id uuid,
  leader_name text,
  total_references bigint,
  validated_sales bigint,
  pipeline bigint,
  conversion integer,
  estimated_commission numeric,
  created_at timestamptz,
  last_activity date
)
language sql
security definer
set search_path = ''
stable
as $$
  select
    profile.user_id,
    profile.full_name,
    user_account.email::text,
    profile.phone,
    profile.region,
    profile.role,
    profile.leader_id,
    leader.full_name as leader_name,
    count(reference.id) as total_references,
    count(reference.id) filter (where reference.status in ('Venda validada', 'Comissão disponível')) as validated_sales,
    count(reference.id) filter (where reference.status not in ('Venda validada', 'Comissão disponível')) as pipeline,
    case
      when count(reference.id) = 0 then 0
      else round(
        100.0 * count(reference.id) filter (where reference.status in ('Venda validada', 'Comissão disponível'))
        / count(reference.id)
      )::integer
    end as conversion,
    coalesce(sum(
      case
        when reference.status not in ('Venda validada', 'Comissão disponível') then 0
        when profile.role = 'referenciador' then 10
        when profile.role in ('consultor', 'leader') then 25
        else 0
      end
    ), 0)::numeric as estimated_commission,
    profile.created_at,
    (max(reference.created_at))::date as last_activity
  from public.partner_profiles profile
  join auth.users user_account on user_account.id = profile.user_id
  left join public.partner_profiles leader on leader.user_id = profile.leader_id
  left join public.partner_references reference on reference.user_id = profile.user_id
  where exists (
    select 1
    from public.partner_profiles administrator
    where administrator.user_id = (select auth.uid())
      and administrator.role = 'admin'
  )
  group by
    profile.user_id,
    profile.full_name,
    user_account.email,
    profile.phone,
    profile.region,
    profile.role,
    profile.leader_id,
    leader.full_name,
    profile.created_at
  order by validated_sales desc, profile.full_name;
$$;

create or replace function public.get_admin_references()
returns table (
  reference_id bigint,
  user_id uuid,
  owner_name text,
  owner_email text,
  owner_role text,
  owner_leader_id uuid,
  client_name text,
  client_phone text,
  postal_code text,
  product text,
  status text,
  source text,
  notes text,
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
    reference.client_name,
    reference.client_phone,
    reference.postal_code,
    reference.product,
    reference.status,
    reference.source,
    reference.notes,
    reference.created_at
  from public.partner_references reference
  join public.partner_profiles profile on profile.user_id = reference.user_id
  join auth.users user_account on user_account.id = reference.user_id
  where exists (
    select 1
    from public.partner_profiles administrator
    where administrator.user_id = (select auth.uid())
      and administrator.role = 'admin'
  )
  order by reference.created_at desc;
$$;

revoke all on function public.get_admin_partners_summary() from public;
revoke all on function public.get_admin_references() from public;
grant execute on function public.get_admin_partners_summary() to authenticated;
grant execute on function public.get_admin_references() to authenticated;
