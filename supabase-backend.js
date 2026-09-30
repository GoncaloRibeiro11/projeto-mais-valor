(function createPartnerBackend() {
  const config = window.PARTNER_SUPABASE_CONFIG || {};
  const configured = Boolean(
    config.url &&
      config.publishableKey &&
      /^https:\/\//.test(config.url) &&
      !config.url.includes("SEU-PROJETO")
  );

  let client = null;

  function getClient() {
    if (!configured) {
      throw new Error("A ligação ao Supabase ainda não está configurada.");
    }

    if (!client) {
      client = window.supabase.createClient(config.url, config.publishableKey, {
        auth: {
          persistSession: true,
          autoRefreshToken: true,
          detectSessionInUrl: true
        }
      });
    }

    return client;
  }

  function throwIfError(error) {
    if (error) throw error;
  }

  function abbreviateName(name) {
    const parts = String(name || "").trim().split(/\s+/).filter(Boolean);
    if (!parts.length) return "Cliente";
    if (parts.length === 1) return parts[0];
    return `${parts[0]} ${parts[parts.length - 1].slice(0, 1).toUpperCase()}.`;
  }

  function mapReference(row) {
    return {
      databaseId: row.id,
      id: `REF-${String(1000 + Number(row.id)).padStart(4, "0")}`,
      client: abbreviateName(row.client_name),
      product: row.product,
      status: row.status,
      date: row.created_at.slice(0, 10),
      source: row.source,
      owner: "me"
    };
  }

  async function init() {
    if (!configured) return null;
    const { data, error } = await getClient().auth.getSession();
    throwIfError(error);
    return data.session;
  }

  async function signIn(email, password) {
    const { data, error } = await getClient().auth.signInWithPassword({ email, password });
    throwIfError(error);
    return data.session;
  }

  async function signOut() {
    const { error } = await getClient().auth.signOut({ scope: "local" });
    throwIfError(error);
  }

  async function updatePassword(password) {
    const { data, error } = await getClient().auth.updateUser({ password });
    throwIfError(error);
    return data.user;
  }

  async function invitePartner(invitation) {
    const { data, error } = await getClient().functions.invoke("invite-partner", {
      body: invitation
    });

    if (error) {
      let message = error.message;
      if (error.context instanceof Response) {
        try {
          const payload = await error.context.clone().json();
          message = payload.error || payload.message || message;
        } catch {
          // Keep the original function error when the response is not JSON.
        }
      }
      throw new Error(message);
    }

    return data;
  }

  async function loadAccount() {
    const supabaseClient = getClient();
    const { data: userData, error: userError } = await supabaseClient.auth.getUser();
    throwIfError(userError);

    const { data: profile, error: profileError } = await supabaseClient
      .from("partner_profiles")
      .select("user_id, full_name, phone, region, role, personal_slug, leader_id, created_at")
      .eq("user_id", userData.user.id)
      .single();
    throwIfError(profileError);

    return {
      ...profile,
      email: userData.user.email || ""
    };
  }

  async function loadReferences() {
    const { data, error } = await getClient()
      .from("partner_references")
      .select("id, client_name, product, status, source, created_at")
      .order("created_at", { ascending: false });
    throwIfError(error);
    return data.map(mapReference);
  }

  async function createReference(reference) {
    const { data: userData, error: userError } = await getClient().auth.getUser();
    throwIfError(userError);

    const { data, error } = await getClient()
      .from("partner_references")
      .insert({
        user_id: userData.user.id,
        client_name: reference.clientName,
        client_phone: reference.clientPhone,
        postal_code: reference.postalCode,
        product: reference.product,
        source: reference.source,
        consent_given: reference.consent,
        notes: reference.notes || null
      })
      .select("id, client_name, product, status, source, created_at")
      .single();
    throwIfError(error);
    return mapReference(data);
  }

  async function loadTeam() {
    const { data, error } = await getClient().rpc("get_my_team_summary");
    throwIfError(error);
    return data.map((member) => ({
      name: member.full_name,
      role: member.role === "leader" ? "Leader" : member.role === "consultor" ? "Consultor" : "Referenciador",
      sales: Number(member.sales || 0),
      pipeline: Number(member.pipeline || 0),
      conversion: Number(member.conversion || 0),
      lastSale: member.last_sale || null
    }));
  }

  async function loadAdminData() {
    const supabaseClient = getClient();
    const [partnersResult, referencesResult] = await Promise.all([
      supabaseClient.rpc("get_admin_partners_summary"),
      supabaseClient.rpc("get_admin_references")
    ]);
    throwIfError(partnersResult.error);
    throwIfError(referencesResult.error);

    return {
      partners: partnersResult.data.map((partner) => ({
        userId: partner.user_id,
        name: partner.full_name,
        email: partner.email || "",
        phone: partner.phone || "",
        region: partner.region || "",
        role: partner.role,
        leaderId: partner.leader_id,
        leaderName: partner.leader_name || "",
        references: Number(partner.total_references || 0),
        sales: Number(partner.validated_sales || 0),
        pipeline: Number(partner.pipeline || 0),
        conversion: Number(partner.conversion || 0),
        commission: Number(partner.estimated_commission || 0),
        createdAt: partner.created_at,
        lastActivity: partner.last_activity
      })),
      references: referencesResult.data.map((reference) => ({
        databaseId: reference.reference_id,
        id: `REF-${String(1000 + Number(reference.reference_id)).padStart(4, "0")}`,
        ownerId: reference.user_id,
        ownerName: reference.owner_name,
        ownerEmail: reference.owner_email || "",
        ownerRole: reference.owner_role,
        ownerLeaderId: reference.owner_leader_id,
        assignedTo: reference.assigned_to,
        assigneeName: reference.assignee_name || "",
        assigneeEmail: reference.assignee_email || "",
        assigneeRole: reference.assignee_role || "",
        client: reference.client_name,
        clientPhone: reference.client_phone,
        postalCode: reference.postal_code,
        product: reference.product,
        status: reference.status,
        date: reference.created_at.slice(0, 10),
        source: reference.source,
        notes: reference.notes || "",
        managementNotes: reference.management_notes || ""
      }))
    };
  }

  async function updateAdminReference(reference) {
    const { error } = await getClient().rpc("update_admin_reference", {
      p_reference_id: Number(reference.referenceId),
      p_assigned_to: reference.assignedTo || null,
      p_status: reference.status,
      p_management_notes: reference.managementNotes || null
    });
    throwIfError(error);
  }

  window.partnerBackend = {
    configured,
    init,
    signIn,
    signOut,
    updatePassword,
    invitePartner,
    loadAccount,
    loadReferences,
    createReference,
    loadTeam,
    loadAdminData,
    updateAdminReference
  };
})();
