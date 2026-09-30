import { createClient } from "https://esm.sh/@supabase/supabase-js@2.117.2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const allowedRoles = new Set(["referenciador", "consultor", "leader"]);
const appInviteUrl = "https://goncaloribeiro11.github.io/projeto-mais-valor/?invite=1";

function jsonResponse(payload: Record<string, unknown>, status = 200) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

Deno.serve(async (request) => {
  if (request.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (request.method !== "POST") {
    return jsonResponse({ error: "Método não permitido." }, 405);
  }

  try {
    const authorization = request.headers.get("Authorization") || "";
    const token = authorization.replace(/^Bearer\s+/i, "");
    if (!token) {
      return jsonResponse({ error: "Sessão em falta." }, 401);
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
    if (!supabaseUrl || !serviceRoleKey) {
      return jsonResponse({ error: "Configuração do servidor incompleta." }, 500);
    }

    const adminClient = createClient(supabaseUrl, serviceRoleKey, {
      auth: { autoRefreshToken: false, persistSession: false },
    });

    const { data: userData, error: userError } = await adminClient.auth.getUser(token);
    if (userError || !userData.user) {
      return jsonResponse({ error: "Sessão inválida." }, 401);
    }

    const { data: callerProfile, error: profileError } = await adminClient
      .from("partner_profiles")
      .select("role")
      .eq("user_id", userData.user.id)
      .single();

    if (profileError || callerProfile?.role !== "admin") {
      return jsonResponse({ error: "Admin access required." }, 403);
    }

    const body = await request.json();
    const email = String(body.email || "").trim().toLowerCase();
    const fullName = String(body.fullName || "").trim().slice(0, 120);
    const role = String(body.role || "referenciador").trim().toLowerCase();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return jsonResponse({ error: "Indica um endereço de email válido." }, 400);
    }
    if (!allowedRoles.has(role)) {
      return jsonResponse({ error: "Perfil de parceiro inválido." }, 400);
    }

    const { data: invitation, error: invitationError } = await adminClient.auth.admin.inviteUserByEmail(email, {
      data: {
        full_name: fullName || email.split("@")[0],
        invited_role: role,
      },
      redirectTo: appInviteUrl,
    });

    if (invitationError || !invitation.user) {
      return jsonResponse({ error: invitationError?.message || "Não foi possível enviar o convite." }, 400);
    }

    const profileUpdates: Record<string, string> = { role };
    if (fullName) profileUpdates.full_name = fullName;

    const { error: updateError } = await adminClient
      .from("partner_profiles")
      .update(profileUpdates)
      .eq("user_id", invitation.user.id);

    if (updateError) {
      return jsonResponse({ error: "O convite foi criado, mas o perfil não ficou concluído." }, 500);
    }

    return jsonResponse({
      ok: true,
      email,
      role,
      userId: invitation.user.id,
    }, 201);
  } catch (error) {
    return jsonResponse({ error: error instanceof Error ? error.message : "Erro inesperado." }, 500);
  }
});
