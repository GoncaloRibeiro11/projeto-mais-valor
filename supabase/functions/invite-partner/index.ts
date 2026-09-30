import { createSupabaseContext } from "npm:@supabase/server@^1";

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
    const { data: context, error: authError } = await createSupabaseContext(request, {
      auth: "user",
    });
    const userId = context?.userClaims?.id;
    if (authError || !context || !userId) {
      return jsonResponse({ error: "Sessão inválida." }, authError?.status || 401);
    }

    const { data: callerProfile, error: profileError } = await context.supabase
      .from("partner_profiles")
      .select("role")
      .eq("user_id", userId)
      .single();

    if (profileError) {
      console.error("Unable to load caller profile", profileError);
      return jsonResponse({ error: "Não foi possível validar o perfil administrativo." }, 500);
    }
    if (callerProfile?.role !== "admin") {
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

    const { data: invitation, error: invitationError } = await context.supabaseAdmin.auth.admin.inviteUserByEmail(email, {
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

    const { error: updateError } = await context.supabaseAdmin
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
