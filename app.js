const partnerNavItems = [
  { id: "dashboard", label: "Dashboard", icon: "dashboard" },
  { id: "nova", label: "Nova Referência", icon: "plus" },
  { id: "referencias", label: "Minhas Referências", icon: "list" },
  { id: "vendas", label: "Minhas Vendas", icon: "sales" },
  { id: "carteira", label: "Carteira", icon: "wallet" },
  { id: "formacao", label: "Formação", icon: "book" },
  { id: "materiais", label: "Materiais", icon: "files" },
  { id: "equipa", label: "Minha Equipa", icon: "users" },
  { id: "perfil", label: "Perfil", icon: "user" },
  { id: "ajuda", label: "Ajuda", icon: "help" }
];

const adminNavItems = [
  { id: "admin", label: "Visão Geral", icon: "dashboard" },
  { id: "admin-parceiros", label: "Parceiros", icon: "users" },
  { id: "admin-referencias", label: "Referências", icon: "list" },
  { id: "admin-vendas", label: "Vendas", icon: "sales" },
  { id: "perfil", label: "Perfil", icon: "user" },
  { id: "ajuda", label: "Ajuda", icon: "help" }
];

const mobilePartnerNavItems = ["dashboard", "nova", "referencias", "carteira", "equipa"];
const mobileAdminNavItems = ["admin", "admin-parceiros", "admin-referencias", "admin-vendas", "perfil"];

const storageKeys = {
  profile: "partnerProfileDemoV2",
  references: "partnerReferencesDemoV2"
};

const profiles = {
  referenciador: {
    label: "Referenciador",
    short: "Referência",
    ownRate: 10,
    teamRate: 0,
    description: "Recomenda clientes e recebe 10 € por cada venda validada.",
    unlocked: ["Link pessoal", "QR code", "Acompanhamento de estados"]
  },
  consultor: {
    label: "Consultor",
    short: "Venda própria",
    ownRate: 25,
    teamRate: 0,
    description: "Faz as próprias vendas depois de formação e recebe 25 € por venda validada.",
    unlocked: ["Simulações", "Nova venda", "Formação avançada"]
  },
  leader: {
    label: "Leader",
    short: "Equipa",
    ownRate: 25,
    teamRate: 5,
    description: "Vende como Consultor e recebe +5 € por venda validada da equipa.",
    unlocked: ["Dashboard de equipa", "Comissão Leader", "Acompanhamento de Consultores"]
  },
  admin: {
    label: "Admin",
    short: "Operação",
    ownRate: 0,
    teamRate: 0,
    description: "Acompanha toda a rede, produção, vendas e comissões numa visão consolidada.",
    unlocked: ["Visão global", "Todos os parceiros", "Todas as referências"]
  }
};

const statuses = [
  "Recebida",
  "Em contacto",
  "Proposta",
  "Venda",
  "Em validação",
  "Venda validada",
  "Comissão disponível"
];

const validatedStatuses = new Set(["Venda validada", "Comissão disponível"]);
const pendingStatuses = new Set(["Venda", "Em validação"]);

const seedReferences = [
  { id: "REF-1048", client: "Carlos R.", product: "Telecom", status: "Comissão disponível", date: "2026-09-29", source: "Link pessoal", owner: "me" },
  { id: "REF-1047", client: "Maria S.", product: "Energia", status: "Comissão disponível", date: "2026-09-29", source: "QR code", owner: "me" },
  { id: "REF-1046", client: "Sofia L.", product: "Telecom", status: "Venda validada", date: "2026-09-28", source: "Formulário manual", owner: "me" },
  { id: "REF-1045", client: "Rui F.", product: "Ambos", status: "Em validação", date: "2026-09-27", source: "Link pessoal", owner: "me" },
  { id: "REF-1044", client: "Ana P.", product: "Energia", status: "Proposta", date: "2026-09-26", source: "Formulário manual", owner: "me" },
  { id: "REF-1043", client: "João M.", product: "Telecom", status: "Em contacto", date: "2026-09-26", source: "QR code", owner: "me" },
  { id: "REF-1042", client: "Marta V.", product: "Energia", status: "Venda validada", date: "2026-09-24", source: "Link pessoal", owner: "me" },
  { id: "REF-1041", client: "Nuno A.", product: "Telecom", status: "Comissão disponível", date: "2026-09-22", source: "Recomendação", owner: "me" },
  { id: "REF-1040", client: "Inês T.", product: "Ambos", status: "Venda", date: "2026-09-20", source: "Formulário manual", owner: "me" },
  { id: "REF-1039", client: "Paulo G.", product: "Energia", status: "Recebida", date: "2026-09-19", source: "Link pessoal", owner: "me" },
  { id: "REF-1038", client: "Bruno C.", product: "Telecom", status: "Venda validada", date: "2026-09-18", source: "QR code", owner: "me" },
  { id: "REF-1037", client: "Helena D.", product: "Ambos", status: "Comissão disponível", date: "2026-09-16", source: "Link pessoal", owner: "me" },
  { id: "REF-1036", client: "Tiago N.", product: "Telecom", status: "Proposta", date: "2026-09-14", source: "Recomendação", owner: "me" },
  { id: "REF-1035", client: "Laura E.", product: "Energia", status: "Venda validada", date: "2026-09-12", source: "Link pessoal", owner: "me" }
];

const demoTeamMembers = [
  { name: "João Almeida", role: "Consultor", sales: 12, pipeline: 7, conversion: 54, lastSale: "2026-09-29" },
  { name: "Maria Costa", role: "Consultora", sales: 8, pipeline: 5, conversion: 49, lastSale: "2026-09-28" },
  { name: "Pedro Silva", role: "Consultor", sales: 7, pipeline: 4, conversion: 46, lastSale: "2026-09-26" },
  { name: "Ana Martins", role: "Consultora", sales: 5, pipeline: 6, conversion: 39, lastSale: "2026-09-24" }
];

const demoAdminPartners = [
  { userId: "admin", name: "Gonçalo Ribeiro", email: "admin@maisvalor.pt", phone: "912 345 678", region: "Nacional", role: "admin", leaderId: null, leaderName: "", references: 0, sales: 0, pipeline: 0, conversion: 0, commission: 0, createdAt: "2026-01-08", lastActivity: null },
  { userId: "leader-1", name: "João Almeida", email: "joao@maisvalor.pt", phone: "913 221 450", region: "Norte", role: "leader", leaderId: null, leaderName: "", references: 18, sales: 12, pipeline: 6, conversion: 67, commission: 300, createdAt: "2026-02-14", lastActivity: "2026-09-29" },
  { userId: "consultor-1", name: "Maria Costa", email: "maria@maisvalor.pt", phone: "914 781 230", region: "Centro", role: "consultor", leaderId: "leader-1", leaderName: "João Almeida", references: 14, sales: 8, pipeline: 6, conversion: 57, commission: 200, createdAt: "2026-03-09", lastActivity: "2026-09-29" },
  { userId: "consultor-2", name: "Pedro Silva", email: "pedro@maisvalor.pt", phone: "916 334 920", region: "Lisboa", role: "consultor", leaderId: "leader-1", leaderName: "João Almeida", references: 11, sales: 7, pipeline: 4, conversion: 64, commission: 175, createdAt: "2026-04-18", lastActivity: "2026-09-28" },
  { userId: "referenciador-1", name: "Ana Martins", email: "ana@maisvalor.pt", phone: "918 604 115", region: "Sul", role: "referenciador", leaderId: "leader-1", leaderName: "João Almeida", references: 9, sales: 5, pipeline: 4, conversion: 56, commission: 50, createdAt: "2026-05-27", lastActivity: "2026-09-27" }
];

const demoAdminReferences = seedReferences.map((reference, index) => {
  const owners = demoAdminPartners.slice(1);
  const owner = owners[index % owners.length];
  return {
    ...reference,
    databaseId: index + 1,
    ownerId: owner.userId,
    ownerName: owner.name,
    ownerEmail: owner.email,
    ownerRole: owner.role,
    ownerLeaderId: owner.leaderId,
    assignedTo: null,
    assigneeName: "",
    assigneeEmail: "",
    assigneeRole: "",
    clientPhone: `91${String(2000000 + index * 7131).padStart(7, "0")}`,
    postalCode: `${4000 + index * 37}-${String(120 + index).padStart(3, "0")}`,
    notes: "",
    managementNotes: ""
  };
});

const trainingModules = [
  { title: "Onboarding rápido", level: "Base", duration: "12 min", progress: 100, body: "Como funciona o modelo, regras de contacto e uso correto da plataforma." },
  { title: "Telecom: qualificação", level: "Consultor", duration: "18 min", progress: 72, body: "Perguntas certas para identificar oportunidade sem recolher dados sensíveis." },
  { title: "Energia: proposta simples", level: "Consultor", duration: "20 min", progress: 45, body: "Como explicar poupança, faturação e próximos passos ao cliente." },
  { title: "Gestão de equipa", level: "Leader", duration: "24 min", progress: 30, body: "Ritmo semanal, acompanhamento de pipeline e leitura de conversão." }
];

const materialCards = [
  { title: "Script de WhatsApp", type: "Mensagem", body: "Texto curto para pedir autorização de contacto antes de submeter a referência." },
  { title: "Cartão digital", type: "Imagem", body: "Peça visual para partilhar em redes sociais e grupos locais." },
  { title: "Pitch de 60 segundos", type: "Vídeo", body: "Estrutura para apresentar Telecom e Energia sem parecer venda agressiva." }
];

const demoWalletHistory = [
  { date: "2026-09-29", description: "Carlos R. · Telecom", amount: 10, status: "Disponível" },
  { date: "2026-09-29", description: "Maria S. · Energia", amount: 10, status: "Disponível" },
  { date: "2026-09-28", description: "Sofia L. · Telecom", amount: 10, status: "A validar" },
  { date: "2026-09-24", description: "Marta V. · Energia", amount: 10, status: "Validada" },
  { date: "2026-09-22", description: "Pagamento processado", amount: -120, status: "Pago" }
];

const money = new Intl.NumberFormat("pt-PT", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0
});

const number = new Intl.NumberFormat("pt-PT");

const initialProfile = loadProfile();

const state = {
  profile: initialProfile,
  route: "dashboard",
  references: loadReferences(),
  teamMembers: demoTeamMembers,
  adminPartners: initialProfile === "admin" ? demoAdminPartners : [],
  adminReferences: initialProfile === "admin" ? demoAdminReferences : [],
  mode: "demo",
  session: null,
  account: null,
  statusFilter: "Todos",
  search: "",
  adminSearch: "",
  adminRoleFilter: "Todos",
  adminStatusFilter: "Todos",
  selectedAdminReferenceId: null
};

let lastRenderedRoute = null;

const view = document.querySelector("#view");
const pageTitle = document.querySelector("#pageTitle");
const sectionEyebrow = document.querySelector("#sectionEyebrow");
const profileSelect = document.querySelector("#profileSelect");
const toast = document.querySelector("#toast");
const appShell = document.querySelector("#appShell");
const authScreen = document.querySelector("#authScreen");
const authMessage = document.querySelector("#authMessage");
const loginForm = document.querySelector("#loginForm");
const invitePasswordForm = document.querySelector("#invitePasswordForm");
const accountControl = document.querySelector("#accountControl");

function icon(name) {
  return `<svg aria-hidden="true"><use href="#icon-${name}"></use></svg>`;
}

function accountName() {
  return state.account?.full_name || "Gonçalo Ribeiro";
}

function accountFirstName() {
  return accountName().trim().split(/\s+/)[0] || "Parceiro";
}

function accountEmail() {
  return state.account?.email || "goncalo.demo@maisvalor.pt";
}

function accountPhone() {
  return state.account?.phone || (state.mode === "cloud" ? "Por preencher" : "912 345 678");
}

function personalLink() {
  const slug = state.account?.personal_slug || "goncalo123";
  return `https://maisvalor.pt/r/${slug}`;
}

function displayPersonalLink() {
  return personalLink().replace(/^https?:\/\//, "");
}

function joinDate() {
  const value = state.account?.created_at;
  if (!value) return "setembro de 2026";
  return new Intl.DateTimeFormat("pt-PT", { month: "long", year: "numeric" }).format(new Date(value));
}

function loadProfile() {
  const saved = localStorage.getItem(storageKeys.profile);
  return profiles[saved] ? saved : "leader";
}

function loadReferences() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKeys.references) || "null");
    return Array.isArray(saved) && saved.length ? saved : seedReferences;
  } catch {
    return seedReferences;
  }
}

function saveReferences() {
  if (state.mode === "cloud") return;
  localStorage.setItem(storageKeys.references, JSON.stringify(state.references));
}

function activeNavItems() {
  return state.profile === "admin" ? adminNavItems : partnerNavItems;
}

function routeFromHash() {
  const hash = window.location.hash.replace("#", "");
  const items = activeNavItems();
  return items.some((item) => item.id === hash) ? hash : items[0].id;
}

function navigate(route) {
  window.location.hash = route;
  if (state.route === route) {
    render();
  }
}

function setProfile(profileId) {
  if (!profiles[profileId]) return;
  if (state.mode === "cloud") {
    showToast("O perfil é gerido pela equipa de operações.");
    return;
  }
  state.profile = profileId;
  state.adminPartners = profileId === "admin" ? demoAdminPartners : [];
  state.adminReferences = profileId === "admin" ? demoAdminReferences : [];
  localStorage.setItem(storageKeys.profile, profileId);
  profileSelect.value = profileId;
  showToast(`Perfil demo alterado para ${profiles[profileId].label}.`);
  render();
}

function slugStatus(status) {
  return `status-${status
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ç/g, "c")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")}`;
}

function statusPill(status) {
  return `<span class="status-pill ${slugStatus(status)}">${status}</span>`;
}

function productPill(product) {
  return `<span class="product-pill">${product}</span>`;
}

function profileRate() {
  return profiles[state.profile].ownRate;
}

function roleLabel(role) {
  return profiles[role]?.label || "Parceiro";
}

function rowCommission(row) {
  if (!validatedStatuses.has(row.status)) return 0;
  return profileRate();
}

function computeMetrics() {
  const ownValidated = state.references.filter((row) => validatedStatuses.has(row.status)).length;
  const ownPending = state.references.filter((row) => pendingStatuses.has(row.status)).length;
  const availableValidated = state.references.filter((row) => row.status === "Comissão disponível").length;
  const teamSales = state.profile === "leader" ? state.teamMembers.reduce((sum, member) => sum + member.sales, 0) : 0;
  const ownRate = profileRate();
  const teamBonus = teamSales * profiles[state.profile].teamRate;

  return {
    references: state.references.length,
    validated: ownValidated,
    conversion: Math.round((ownValidated / state.references.length) * 100),
    pending: ownPending * ownRate,
    available: availableValidated * ownRate,
    earned: ownValidated * ownRate + teamBonus,
    teamSales,
    teamBonus
  };
}

function renderShell() {
  const items = activeNavItems();
  const mobileIds = state.profile === "admin" ? mobileAdminNavItems : mobilePartnerNavItems;
  const links = items
    .map((item) => navLink(item))
    .join("");
  document.querySelector("#sideNav").innerHTML = links;
  document.querySelector("#mobileMenuList").innerHTML = links;
  document.querySelector("#mobileNav").innerHTML = mobileIds
    .map((id) => items.find((item) => item.id === id))
    .map((item) => `<a href="#${item.id}" class="${state.route === item.id ? "active" : ""}">${icon(item.icon)}<span>${item.label.replace("Minhas ", "").replace("Nova ", "+ ")}</span></a>`)
    .join("");

  const sidebarLink = document.querySelector("#sidebarPersonalLink");
  const sidebarCopy = document.querySelector("#sidebarCopyLink");
  document.querySelector("#personalLinkCard").hidden = state.profile === "admin";
  document.querySelector("#newReferenceAction").hidden = state.profile === "admin";
  sidebarLink.textContent = displayPersonalLink();
  sidebarCopy.dataset.copy = personalLink();
}

function syncAccountUi() {
  const cloudMode = state.mode === "cloud";
  profileSelect.disabled = cloudMode;
  document.querySelector("#profileSwitchLabel").textContent = cloudMode ? "Perfil" : "Perfil demo";
  accountControl.hidden = !cloudMode;

  if (cloudMode) {
    document.querySelector("#accountName").textContent = accountName();
    document.querySelector("#accountEmail").textContent = accountEmail();
    document.querySelector("#accountAvatar").textContent = accountFirstName().slice(0, 1).toUpperCase();
  }
}

function navLink(item) {
  return `
    <a class="nav-link ${state.route === item.id ? "active" : ""}" href="#${item.id}">
      ${icon(item.icon)}
      <span>${item.label}</span>
    </a>
  `;
}

function render() {
  const nextRoute = routeFromHash();
  const routeChanged = lastRenderedRoute !== nextRoute;
  state.route = nextRoute;
  const items = activeNavItems();
  const current = items.find((item) => item.id === state.route) || items[0];
  pageTitle.textContent = current.label;
  sectionEyebrow.textContent = state.profile === "admin"
    ? `Admin · ${state.mode === "cloud" ? "Visão global protegida" : "Demo operacional"}`
    : `Perfil ${profiles[state.profile].label} · ${state.mode === "cloud" ? "Conta individual" : "Demo operacional"}`;
  profileSelect.value = state.profile;
  syncAccountUi();
  renderShell();

  const renderers = {
    dashboard: renderDashboard,
    nova: renderNewReference,
    referencias: renderReferences,
    vendas: renderSales,
    carteira: renderWallet,
    formacao: renderTraining,
    materiais: renderMaterials,
    equipa: renderTeam,
    perfil: renderProfile,
    ajuda: renderHelp,
    admin: renderAdminDashboard,
    "admin-parceiros": renderAdminPartners,
    "admin-referencias": renderAdminReferences,
    "admin-vendas": renderAdminSales
  };

  view.innerHTML = renderers[state.route]();
  bindViewEvents();
  if (routeChanged) {
    window.scrollTo(0, 0);
  }
  lastRenderedRoute = state.route;
  view.focus({ preventScroll: true });
}

function renderDashboard() {
  const metrics = computeMetrics();
  const profile = profiles[state.profile];
  const recent = state.references.slice(0, 5);

  return `
    <div class="dashboard-grid">
      <div class="stack">
        <section class="hero-panel">
          <div>
            <span class="eyebrow">Bom trabalho, ${escapeHtml(accountFirstName())}</span>
            <h2>${profile.description}</h2>
            <p>Resumo em tempo real de referências, vendas, carteira e produção. Os valores seguem as regras atuais: Referenciador 10 €, Consultor 25 € e Leader +5 € por venda validada da equipa.</p>
            <div class="hero-actions">
              <a class="primary-button" href="#nova" data-route="nova">${icon("plus")}Referenciar cliente</a>
              <a class="secondary-button" href="#materiais" data-route="materiais">${icon("share")}Partilhar link</a>
            </div>
          </div>
          <div class="hero-stats">
            <div class="hero-stat">
              <strong>${money.format(metrics.earned)}</strong>
              <span>Total ganho no mês</span>
            </div>
            <div class="hero-stat">
              <strong>${metrics.conversion}%</strong>
              <span>Conversão validada</span>
            </div>
          </div>
        </section>

        ${renderMetricGrid(metrics)}

        <section class="card chart-card">
          <div class="section-head">
            <div>
              <span class="eyebrow">Produção mensal</span>
              <h2>Referências e vendas validadas</h2>
            </div>
            <a class="secondary-button" href="#vendas" data-route="vendas">${icon("sales")}Ver vendas</a>
          </div>
          <div class="chart-wrap">${renderLineChart()}</div>
        </section>

        <section class="card">
          <div class="section-head">
            <div>
              <span class="eyebrow">Ações rápidas</span>
              <h2>O que precisas mais vezes</h2>
            </div>
          </div>
          <div class="quick-grid">
            ${quickAction("nova", "plus", "Referenciar cliente", "Nome, telefone e autorização.")}
            ${quickAction("referencias", "list", "Acompanhar estados", "Recebida até comissão disponível.")}
            ${quickAction("carteira", "wallet", "Ver carteira", "Disponível, pendente e histórico.")}
            ${quickAction("formacao", "book", "Continuar formação", "Desbloquear evolução de perfil.")}
          </div>
        </section>
      </div>

      <aside class="stack">
        <section class="card share-panel">
          <div class="section-head">
            <div>
              <span class="eyebrow">Partilha</span>
              <h2>Link e QR pessoal</h2>
            </div>
          </div>
          <div class="share-card">
            <img src="assets/qr-demo.svg" alt="QR code demo do link pessoal">
            <div>
              <strong>${escapeHtml(displayPersonalLink())}</strong>
              <p>Ideal para loja, cartão digital, WhatsApp e redes sociais.</p>
              <button class="secondary-button" type="button" data-copy="${escapeAttribute(personalLink())}">${icon("copy")}Copiar</button>
            </div>
          </div>
        </section>

        <section class="card">
          <div class="section-head">
            <div>
              <span class="eyebrow">Pipeline</span>
              <h2>Estados das referências</h2>
            </div>
          </div>
          <div class="status-list">${renderStatusSummary()}</div>
        </section>

        <section class="card">
          <div class="section-head">
            <div>
              <span class="eyebrow">Atividade recente</span>
              <h2>Últimas referências</h2>
            </div>
          </div>
          <div class="timeline">
            ${recent.length ? recent.map((row, index) => timelineRow(row, index)).join("") : '<p class="muted-copy">Ainda não existem referências nesta conta.</p>'}
          </div>
        </section>

        ${renderProfileProgressCard(metrics)}
      </aside>
    </div>
  `;
}

function renderMetricGrid(metrics) {
  const cards = [
    { label: "Referências", value: number.format(metrics.references), detail: "+4 nos últimos 7 dias", icon: "list", tone: "" },
    { label: "Vendas validadas", value: number.format(metrics.validated), detail: `${metrics.conversion}% de conversão`, icon: "sales", tone: "indigo" },
    { label: "Disponível", value: money.format(metrics.available), detail: "Pronto para pagamento", icon: "wallet", tone: "" },
    { label: "A validar", value: money.format(metrics.pending), detail: "Instalação ou validação", icon: "check", tone: "amber" }
  ];

  if (state.profile === "leader") {
    cards[3] = { label: "Bónus equipa", value: money.format(metrics.teamBonus), detail: `${metrics.teamSales} vendas da equipa`, icon: "users", tone: "amber" };
  }

  return `
    <section class="metric-grid">
      ${cards
        .map(
          (card) => `
          <article class="metric-card ${card.tone}">
            <div class="metric-top">
              <small>${card.label}</small>
              <span class="metric-icon">${icon(card.icon)}</span>
            </div>
            <strong>${card.value}</strong>
            <span class="metric-trend">${card.detail}</span>
          </article>
        `
        )
        .join("")}
    </section>
  `;
}

function renderLineChart() {
  const refs = [4, 6, 7, 9, 12, 14, state.references.length];
  const sales = [1, 2, 3, 4, 5, 7, computeMetrics().validated];
  return `
    <svg viewBox="0 0 640 230" role="img" aria-label="Gráfico de referências e vendas validadas">
      <defs>
        <linearGradient id="areaFill" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stop-color="#119e01" stop-opacity="0.22"/>
          <stop offset="100%" stop-color="#119e01" stop-opacity="0"/>
        </linearGradient>
      </defs>
      <g stroke="#dce7ea" stroke-width="1">
        <line x1="34" y1="38" x2="612" y2="38"/>
        <line x1="34" y1="88" x2="612" y2="88"/>
        <line x1="34" y1="138" x2="612" y2="138"/>
        <line x1="34" y1="188" x2="612" y2="188"/>
      </g>
      ${areaPath(refs, "#119e01", "areaFill")}
      ${polyline(refs, "#119e01")}
      ${polyline(sales, "#168fc5")}
      <g fill="#69777c" font-size="12" font-family="Inter, system-ui">
        <text x="34" y="218">Semana 1</text>
        <text x="206" y="218">Semana 2</text>
        <text x="380" y="218">Semana 3</text>
        <text x="552" y="218">Hoje</text>
      </g>
      <g font-size="12" font-weight="800" font-family="Inter, system-ui">
        <circle cx="434" cy="24" r="5" fill="#119e01"/><text x="446" y="29" fill="#3c3a3b">Referências</text>
        <circle cx="544" cy="24" r="5" fill="#168fc5"/><text x="556" y="29" fill="#3c3a3b">Vendas</text>
      </g>
    </svg>
  `;
}

function chartPoints(values) {
  const max = Math.max(...values, 1);
  const left = 34;
  const width = 578;
  return values.map((value, index) => {
    const x = left + (index / (values.length - 1)) * width;
    const y = 190 - (value / max) * 145;
    return [Math.round(x), Math.round(y)];
  });
}

function polyline(values, color) {
  const points = chartPoints(values);
  return `
    <polyline points="${points.map((point) => point.join(",")).join(" ")}" fill="none" stroke="${color}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    ${points.map(([x, y]) => `<circle cx="${x}" cy="${y}" r="5" fill="#ffffff" stroke="${color}" stroke-width="3"/>`).join("")}
  `;
}

function areaPath(values, color, fillId) {
  const points = chartPoints(values);
  const first = points[0];
  const last = points[points.length - 1];
  return `
    <path d="M ${first[0]} 190 L ${points.map((point) => point.join(" ")).join(" L ")} L ${last[0]} 190 Z" fill="url(#${fillId})"/>
  `;
}

function quickAction(route, iconName, title, body) {
  return `
    <a class="quick-action" href="#${route}" data-route="${route}">
      ${icon(iconName)}
      <strong>${title}</strong>
      <span>${body}</span>
    </a>
  `;
}

function renderStatusSummary() {
  return statuses
    .map((status) => {
      const count = state.references.filter((row) => row.status === status).length;
      const width = Math.max(8, Math.round((count / Math.max(state.references.length, 1)) * 100));
      return `
        <div class="status-row">
          <div>
            <strong>${status}</strong>
            <span>${count} processo${count === 1 ? "" : "s"}</span>
            <div class="progress"><span style="width: ${width}%"></span></div>
          </div>
          ${statusPill(status)}
        </div>
      `;
    })
    .join("");
}

function timelineRow(row, index) {
  return `
    <div class="timeline-row">
      <span class="timeline-dot">${index + 1}</span>
      <div>
        <strong>${row.client} · ${row.product}</strong>
        <span>${row.source} · ${formatDate(row.date)}</span>
      </div>
      ${statusPill(row.status)}
    </div>
  `;
}

function renderProfileProgressCard(metrics) {
  if (state.profile === "referenciador") {
    return `
      <section class="card">
        <span class="eyebrow">Progressão</span>
        <h2>Ganhar mais por venda</h2>
        <p>Com a formação de Consultor, cada venda validada passa de 10 € para 25 €.</p>
        <button class="secondary-button" type="button" data-profile-set="consultor">${icon("book")}Ver perfil Consultor</button>
      </section>
    `;
  }

  if (state.profile === "consultor") {
    return `
      <section class="card">
        <span class="eyebrow">Próximo passo</span>
        <h2>Construir equipa</h2>
        <p>O perfil Leader acrescenta 5 € por cada venda validada feita pela equipa.</p>
        <button class="secondary-button" type="button" data-profile-set="leader">${icon("users")}Ver perfil Leader</button>
      </section>
    `;
  }

  return `
    <section class="card">
      <span class="eyebrow">Equipa Leader</span>
      <h2>${metrics.teamSales} vendas de equipa</h2>
      <p>Bónus acumulado de ${money.format(metrics.teamBonus)} com base em ${profiles.leader.teamRate} € por venda validada.</p>
      <a class="secondary-button" href="#equipa" data-route="equipa">${icon("users")}Abrir equipa</a>
    </section>
  `;
}

function adminReferenceCommission(reference) {
  if (!validatedStatuses.has(reference.status)) return 0;
  const ownCommission = reference.ownerRole === "referenciador" ? 10 : reference.ownerRole === "admin" ? 0 : 25;
  const leaderBonus = reference.ownerLeaderId ? 5 : 0;
  return ownCommission + leaderBonus;
}

function computeAdminMetrics() {
  const partners = state.adminPartners.filter((partner) => partner.role !== "admin");
  const validated = state.adminReferences.filter((reference) => validatedStatuses.has(reference.status));
  const pending = state.adminReferences.filter((reference) => pendingStatuses.has(reference.status));
  return {
    partners: partners.length,
    references: state.adminReferences.length,
    validated: validated.length,
    pending: pending.length,
    conversion: state.adminReferences.length ? Math.round((validated.length / state.adminReferences.length) * 100) : 0,
    commissions: validated.reduce((total, reference) => total + adminReferenceCommission(reference), 0)
  };
}

function renderAdminDashboard() {
  const metrics = computeAdminMetrics();
  const recent = state.adminReferences.slice(0, 6);
  const partnerRoles = ["referenciador", "consultor", "leader"];

  return `
    <div class="stack">
      <section class="hero-panel admin-hero">
        <div>
          <span class="eyebrow">Controlo da operação</span>
          <h2>Visão consolidada de toda a rede.</h2>
          <p>Parceiros, referências, vendas validadas e comissões num único painel protegido. Os dados são lidos diretamente do Supabase.</p>
          <div class="hero-actions">
            <a class="primary-button" href="#admin-parceiros" data-route="admin-parceiros">${icon("users")}Ver parceiros</a>
            <a class="secondary-button" href="#admin-referencias" data-route="admin-referencias">${icon("list")}Abrir referências</a>
          </div>
        </div>
        <div class="hero-stats">
          <div class="hero-stat"><strong>${metrics.conversion}%</strong><span>Conversão global</span></div>
          <div class="hero-stat"><strong>${money.format(metrics.commissions)}</strong><span>Comissões estimadas</span></div>
        </div>
      </section>

      <section class="metric-grid">
        ${adminMetricCard("Parceiros", number.format(metrics.partners), "Contas operacionais", "users", "")}
        ${adminMetricCard("Referências", number.format(metrics.references), `${metrics.pending} em venda ou validação`, "list", "indigo")}
        ${adminMetricCard("Vendas validadas", number.format(metrics.validated), `${metrics.conversion}% de conversão`, "sales", "")}
        ${adminMetricCard("Comissões", money.format(metrics.commissions), "Inclui bónus Leader", "wallet", "amber")}
      </section>

      <div class="dashboard-grid admin-dashboard-grid">
        <section class="table-card admin-table">
          <div class="section-head">
            <div>
              <span class="eyebrow">Atividade recente</span>
              <h2>Últimas referências da rede</h2>
            </div>
            <a class="secondary-button" href="#admin-referencias" data-route="admin-referencias">Ver todas</a>
          </div>
          <div class="table-wrap">
            ${recent.length ? renderAdminReferenceTable(recent, false) : renderAdminEmpty("Ainda não existem referências na rede.")}
          </div>
        </section>

        <aside class="stack">
          <section class="card">
            <div class="section-head">
              <div>
                <span class="eyebrow">Composição</span>
                <h2>Perfis da rede</h2>
              </div>
            </div>
            <div class="status-list">
              ${partnerRoles.map((role) => {
                const count = state.adminPartners.filter((partner) => partner.role === role).length;
                const width = Math.max(8, Math.round((count / Math.max(metrics.partners, 1)) * 100));
                return `<div class="status-row"><div><strong>${roleLabel(role)}</strong><span>${count} conta${count === 1 ? "" : "s"}</span><div class="progress"><span style="width:${width}%"></span></div></div><span class="role-pill">${count}</span></div>`;
              }).join("")}
            </div>
          </section>
          <section class="card">
            <span class="eyebrow">Acesso protegido</span>
            <h2>Área exclusiva de Admin</h2>
            <p>As consultas globais são executadas no servidor e só devolvem dados quando a conta autenticada tem o perfil Admin.</p>
          </section>
        </aside>
      </div>
    </div>
  `;
}

function adminMetricCard(label, value, detail, iconName, tone) {
  return `
    <article class="metric-card ${tone}">
      <div class="metric-top"><small>${label}</small><span class="metric-icon">${icon(iconName)}</span></div>
      <strong>${value}</strong>
      <span class="metric-trend">${detail}</span>
    </article>
  `;
}

function filteredAdminPartners() {
  const search = state.adminSearch.trim().toLowerCase();
  return state.adminPartners.filter((partner) => {
    const matchesRole = state.adminRoleFilter === "Todos" || partner.role === state.adminRoleFilter;
    const haystack = `${partner.name} ${partner.email} ${partner.region} ${partner.leaderName}`.toLowerCase();
    return matchesRole && (!search || haystack.includes(search));
  });
}

function renderAdminPartners() {
  const rows = filteredAdminPartners();
  const roleFilters = ["Todos", "referenciador", "consultor", "leader", "admin"];
  return `
    <div class="stack">
      <section class="form-card admin-invite-card">
        <div class="section-head">
          <div>
            <span class="eyebrow">Novo acesso</span>
            <h2>Convidar parceiro</h2>
            <p>O parceiro recebe um link seguro por email e cria a própria palavra-passe.</p>
          </div>
          <span class="role-pill">Só Admin</span>
        </div>
        <form class="invite-partner-form" id="invitePartnerForm">
          <div class="invite-form-grid">
            <div class="field">
              <label for="inviteEmail">Email</label>
              <input id="inviteEmail" name="email" type="email" autocomplete="off" required placeholder="parceiro@empresa.pt">
            </div>
            <div class="field">
              <label for="inviteFullName">Nome <small>(opcional)</small></label>
              <input id="inviteFullName" name="fullName" type="text" autocomplete="off" maxlength="120" placeholder="Nome do parceiro">
            </div>
            <div class="field">
              <label for="inviteRole">Perfil</label>
              <select id="inviteRole" name="role" required>
                <option value="referenciador">Referenciador · 10 €</option>
                <option value="consultor">Consultor · 25 €</option>
                <option value="leader">Leader · 25 € + 5 € equipa</option>
              </select>
            </div>
          </div>
          <div class="form-actions">
            <button class="primary-button" type="submit">${icon("plus")}Enviar convite</button>
          </div>
        </form>
      </section>

      <section class="table-card admin-table">
        <div class="section-head">
          <div>
            <span class="eyebrow">Rede completa</span>
            <h2>Parceiros e desempenho</h2>
            <p>Consulta perfis, responsáveis, produção e comissão própria estimada.</p>
          </div>
          <span class="role-pill">${rows.length} resultados</span>
        </div>
        <div class="filter-bar">
          ${roleFilters.map((role) => `<button class="chip ${state.adminRoleFilter === role ? "active" : ""}" type="button" data-admin-role-filter="${role}">${role === "Todos" ? role : roleLabel(role)}</button>`).join("")}
        </div>
        <input class="search-input" id="adminSearch" value="${escapeAttribute(state.adminSearch)}" placeholder="Pesquisar por nome, email, região ou Leader" aria-label="Pesquisar parceiros">
        <div class="table-wrap">
          ${rows.length ? `
            <table>
              <thead><tr><th>Parceiro</th><th>Perfil</th><th>Leader</th><th>Referências</th><th>Vendas</th><th>Conversão</th><th>Comissão própria</th><th>Atividade</th></tr></thead>
              <tbody>${rows.map((partner) => `
                <tr>
                  <td><strong>${escapeHtml(partner.name)}</strong><span class="cell-subtitle">${escapeHtml(partner.email)}</span></td>
                  <td><span class="role-pill">${roleLabel(partner.role)}</span></td>
                  <td>${escapeHtml(partner.leaderName || "-")}</td>
                  <td>${partner.references}</td>
                  <td><strong>${partner.sales}</strong></td>
                  <td>${partner.conversion}%</td>
                  <td><strong>${money.format(partner.commission)}</strong></td>
                  <td>${partner.lastActivity ? formatDate(partner.lastActivity) : "-"}</td>
                </tr>
              `).join("")}</tbody>
            </table>
          ` : renderAdminEmpty("Nenhum parceiro corresponde aos filtros.")}
        </div>
      </section>
    </div>
  `;
}

function filteredAdminReferences() {
  const search = state.adminSearch.trim().toLowerCase();
  return state.adminReferences.filter((reference) => {
    const matchesStatus = state.adminStatusFilter === "Todos" || reference.status === state.adminStatusFilter;
    const haystack = `${reference.id} ${reference.ownerName} ${reference.ownerEmail} ${reference.assigneeName || ""} ${reference.assigneeEmail || ""} ${reference.client} ${reference.clientPhone} ${reference.postalCode} ${reference.product} ${reference.source}`.toLowerCase();
    return matchesStatus && (!search || haystack.includes(search));
  });
}

function selectedAdminReference() {
  return state.adminReferences.find((reference) => String(reference.databaseId) === String(state.selectedAdminReferenceId)) || null;
}

function adminAssignablePartners() {
  return state.adminPartners.filter((partner) => ["admin", "consultor", "leader"].includes(partner.role));
}

function renderAdminReferenceManager(reference) {
  const assignees = adminAssignablePartners();
  return `
    <section class="form-card reference-manager" id="referenceManager">
      <div class="section-head">
        <div>
          <span class="eyebrow">Gestão da referência</span>
          <h2>${escapeHtml(reference.id)} · ${escapeHtml(reference.client)}</h2>
          <p>Atribui o tratamento comercial, atualiza o estado e regista o próximo passo.</p>
        </div>
        <button class="secondary-button" type="button" data-close-reference-manager>Fechar</button>
      </div>

      <div class="reference-summary-grid">
        <div><span>Referenciada por</span><strong>${escapeHtml(reference.ownerName)}</strong><small>${roleLabel(reference.ownerRole)}</small></div>
        <div><span>Contacto</span><strong>${escapeHtml(reference.clientPhone)}</strong><small>${escapeHtml(reference.postalCode)}</small></div>
        <div><span>Produto</span><strong>${escapeHtml(reference.product)}</strong><small>${escapeHtml(reference.source)}</small></div>
        <div><span>Entrada</span><strong>${formatDate(reference.date)}</strong><small>${escapeHtml(reference.status)}</small></div>
      </div>

      ${reference.notes ? `<div class="reference-origin-note"><span>Notas enviadas pelo parceiro</span><p>${escapeHtml(reference.notes)}</p></div>` : ""}

      <form id="adminReferenceForm">
        <input type="hidden" name="referenceId" value="${escapeAttribute(reference.databaseId)}">
        <div class="form-grid">
          <div class="field">
            <label for="adminReferenceAssignee">Responsável comercial</label>
            <select id="adminReferenceAssignee" name="assignedTo">
              <option value="">Sem responsável atribuído</option>
              ${assignees.map((partner) => `
                <option value="${escapeAttribute(partner.userId)}" ${reference.assignedTo === partner.userId ? "selected" : ""}>${escapeHtml(partner.name)} · ${roleLabel(partner.role)}</option>
              `).join("")}
            </select>
            <small>Admin, Consultor ou Leader podem receber o tratamento.</small>
          </div>
          <div class="field">
            <label for="adminReferenceStatus">Estado</label>
            <select id="adminReferenceStatus" name="status" required>
              ${statuses.map((status) => `<option value="${escapeAttribute(status)}" ${reference.status === status ? "selected" : ""}>${escapeHtml(status)}</option>`).join("")}
            </select>
            <small>A validação da venda continua sob controlo do Admin.</small>
          </div>
          <div class="field full">
            <label for="adminReferenceNotes">Notas operacionais</label>
            <textarea id="adminReferenceNotes" name="managementNotes" maxlength="2000" placeholder="Ex.: Contactar novamente amanhã depois das 18h.">${escapeHtml(reference.managementNotes || "")}</textarea>
          </div>
        </div>
        <div class="form-actions">
          <button class="primary-button" type="submit">${icon("check")}Guardar alterações</button>
          <button class="secondary-button" type="button" data-close-reference-manager>Cancelar</button>
        </div>
      </form>
    </section>
  `;
}

function renderAdminReferences() {
  const rows = filteredAdminReferences();
  const selectedReference = selectedAdminReference();
  return `
    <div class="stack">
      ${selectedReference ? renderAdminReferenceManager(selectedReference) : ""}
      <section class="table-card admin-table">
        <div class="section-head">
          <div>
            <span class="eyebrow">Pipeline global</span>
            <h2>Todas as referências</h2>
            <p>Consulta quem referenciou, atribui um responsável comercial e acompanha o trabalho.</p>
          </div>
          <span class="role-pill">${rows.length} resultados</span>
        </div>
        <div class="filter-bar">
          ${["Todos", ...statuses].map((status) => `<button class="chip ${state.adminStatusFilter === status ? "active" : ""}" type="button" data-admin-status-filter="${status}">${status}</button>`).join("")}
        </div>
        <input class="search-input" id="adminSearch" value="${escapeAttribute(state.adminSearch)}" placeholder="Pesquisar referência, parceiro, responsável, cliente, telefone ou produto" aria-label="Pesquisar referências globais">
        <div class="table-wrap">
          ${rows.length ? renderAdminReferenceTable(rows, true) : renderAdminEmpty("Nenhuma referência corresponde aos filtros.")}
        </div>
      </section>
    </div>
  `;
}

function renderAdminReferenceTable(rows, showContact) {
  return `
    <table>
      <thead><tr><th>Referência</th><th>Referenciada por</th><th>Responsável</th><th>Cliente</th>${showContact ? "<th>Contacto</th>" : ""}<th>Produto</th><th>Estado</th><th>Data</th><th>Comissão</th><th>Ação</th></tr></thead>
      <tbody>${rows.map((reference) => `
        <tr>
          <td><strong>${escapeHtml(reference.id)}</strong></td>
          <td><strong>${escapeHtml(reference.ownerName)}</strong><span class="cell-subtitle">${roleLabel(reference.ownerRole)}</span></td>
          <td>${reference.assigneeName ? `<strong>${escapeHtml(reference.assigneeName)}</strong><span class="cell-subtitle">${roleLabel(reference.assigneeRole)}</span>` : `<span class="unassigned-label">Por atribuir</span>`}</td>
          <td>${escapeHtml(reference.client)}</td>
          ${showContact ? `<td><strong>${escapeHtml(reference.clientPhone)}</strong><span class="cell-subtitle">${escapeHtml(reference.postalCode)}</span></td>` : ""}
          <td>${productPill(reference.product)}</td>
          <td>${statusPill(reference.status)}</td>
          <td>${formatDate(reference.date)}</td>
          <td><strong>${adminReferenceCommission(reference) ? money.format(adminReferenceCommission(reference)) : "-"}</strong></td>
          <td><button class="secondary-button table-action-button" type="button" data-manage-reference="${escapeAttribute(reference.databaseId)}">Gerir</button></td>
        </tr>
      `).join("")}</tbody>
    </table>
  `;
}

function renderAdminSales() {
  const metrics = computeAdminMetrics();
  const rows = state.adminReferences.filter((reference) => ["Venda", "Em validação", "Venda validada", "Comissão disponível"].includes(reference.status));
  const available = state.adminReferences.filter((reference) => reference.status === "Comissão disponível").reduce((total, reference) => total + adminReferenceCommission(reference), 0);
  return `
    <div class="stack">
      <section class="metric-grid">
        ${adminMetricCard("Vendas validadas", number.format(metrics.validated), `${metrics.conversion}% da rede`, "sales", "")}
        ${adminMetricCard("Em validação", number.format(state.adminReferences.filter((reference) => reference.status === "Em validação").length), "A aguardar confirmação", "check", "indigo")}
        ${adminMetricCard("Comissões estimadas", money.format(metrics.commissions), "Produção validada", "wallet", "amber")}
        ${adminMetricCard("Disponível", money.format(available), "Pronto para pagamento", "wallet", "")}
      </section>
      <section class="table-card admin-table">
        <div class="section-head">
          <div><span class="eyebrow">Produção global</span><h2>Vendas e validações</h2></div>
        </div>
        <div class="table-wrap">${rows.length ? renderAdminReferenceTable(rows, false) : renderAdminEmpty("Ainda não existem vendas na rede.")}</div>
      </section>
    </div>
  `;
}

function renderAdminEmpty(message) {
  return `<div class="empty-inline">${escapeHtml(message)}</div>`;
}

function renderNewReference() {
  return `
    <div class="split">
      <section class="form-card">
        <div class="section-head">
          <div>
            <span class="eyebrow">Fluxo essencial</span>
            <h2>Nova referência</h2>
          </div>
        </div>
        <form id="referenceForm">
          <div class="form-grid">
            <div class="field">
              <label for="clientName">Nome do cliente</label>
              <input id="clientName" name="clientName" autocomplete="name" required placeholder="Ex.: Ana Pereira">
            </div>
            <div class="field">
              <label for="clientPhone">Telefone</label>
              <input id="clientPhone" name="clientPhone" inputmode="tel" required placeholder="Ex.: 912 345 678">
            </div>
            <div class="field">
              <label for="postalCode">Código postal</label>
              <input id="postalCode" name="postalCode" inputmode="numeric" required placeholder="Ex.: 4700-000">
            </div>
            <div class="field">
              <label for="source">Origem</label>
              <select id="source" name="source">
                <option>Formulário manual</option>
                <option>Link pessoal</option>
                <option>QR code</option>
                <option>Recomendação</option>
              </select>
            </div>
            <div class="field full">
              <span class="option-label">Interesse</span>
              <div class="option-grid">
                ${productOption("Telecom", "wifi", "Internet, TV, móvel ou pacote familiar.", true)}
                ${productOption("Energia", "zap", "Luz, gás ou oportunidade de poupança.", false)}
                ${productOption("Ambos", "check", "Cliente quer comparar Telecom e Energia.", false)}
              </div>
            </div>
            <label class="consent field full">
              <input type="checkbox" name="consent" required>
              <span>O cliente autorizou ser contactado sobre serviços de Telecomunicações e/ou Energia.</span>
            </label>
            <div class="field full">
              <label for="notes">Notas internas</label>
              <textarea id="notes" name="notes" placeholder="Ex.: Prefere contacto depois das 18h."></textarea>
            </div>
          </div>
          <div class="form-actions">
            <button class="primary-button" type="submit">${icon("plus")}Enviar referência</button>
            <a class="secondary-button" href="#referencias" data-route="referencias">${icon("list")}Ver referências</a>
          </div>
        </form>
      </section>

      <aside class="stack">
        <section class="card">
          <span class="eyebrow">Dados mínimos</span>
          <h2>Menos fricção, mais segurança</h2>
          <p>Este fluxo recolhe apenas nome, telefone, código postal, interesse e autorização de contacto. Dados sensíveis ficam fora da referência inicial.</p>
          <div class="notice">Depois de enviada, a referência entra como Recebida e pode ser acompanhada no pipeline.</div>
        </section>
        <section class="card">
          <span class="eyebrow">Comissão do perfil atual</span>
          <h2>${money.format(profileRate())} por venda validada</h2>
          <p>${profiles[state.profile].description}</p>
        </section>
      </aside>
    </div>
  `;
}

function productOption(product, iconName, body, checked) {
  return `
    <label class="option-card">
      <input type="radio" name="product" value="${product}" ${checked ? "checked" : ""}>
      <strong>${icon(iconName)}${product}</strong>
      <small>${body}</small>
    </label>
  `;
}

function renderReferences() {
  const rows = filteredReferences();
  return `
    <section class="table-card">
      <div class="section-head">
        <div>
          <span class="eyebrow">Pipeline de parceiro</span>
          <h2>Minhas referências</h2>
        </div>
        <a class="primary-button" href="#nova" data-route="nova">${icon("plus")}Nova referência</a>
      </div>
      <div class="filter-bar">
        ${["Todos", ...statuses].map((status) => `<button class="chip ${state.statusFilter === status ? "active" : ""}" type="button" data-status-filter="${status}">${status}</button>`).join("")}
      </div>
      <input class="search-input" id="referenceSearch" value="${escapeHtml(state.search)}" placeholder="Pesquisar por cliente, produto ou origem" aria-label="Pesquisar referências">
      <div class="table-wrap">
        ${rows.length ? renderReferenceTable(rows) : renderNoRows()}
      </div>
    </section>
  `;
}

function filteredReferences() {
  const search = state.search.trim().toLowerCase();
  return state.references.filter((row) => {
    const matchesStatus = state.statusFilter === "Todos" || row.status === state.statusFilter;
    const haystack = `${row.client} ${row.product} ${row.source} ${row.id}`.toLowerCase();
    const matchesSearch = !search || haystack.includes(search);
    return matchesStatus && matchesSearch;
  });
}

function renderReferenceTable(rows) {
  return `
    <table>
      <thead>
        <tr>
          <th>Referência</th>
          <th>Cliente</th>
          <th>Produto</th>
          <th>Estado</th>
          <th>Origem</th>
          <th>Data</th>
          <th>Comissão</th>
        </tr>
      </thead>
      <tbody>
        ${rows
          .map(
            (row) => `
              <tr>
                <td><strong>${row.id}</strong></td>
                <td>${row.client}</td>
                <td>${productPill(row.product)}</td>
                <td>${statusPill(row.status)}</td>
                <td>${row.source}</td>
                <td>${formatDate(row.date)}</td>
                <td><strong>${rowCommission(row) ? money.format(rowCommission(row)) : "-"}</strong></td>
              </tr>
            `
          )
          .join("")}
      </tbody>
    </table>
  `;
}

function renderNoRows() {
  return `
    <div class="empty-state">
      <div>
        <h2>Sem resultados</h2>
        <p>Experimenta limpar a pesquisa ou mudar o filtro de estado.</p>
      </div>
    </div>
  `;
}

function renderSales() {
  const salesRows = state.references.filter((row) => ["Venda", "Em validação", "Venda validada", "Comissão disponível"].includes(row.status));
  const metrics = computeMetrics();
  return `
    <div class="stack">
      <section class="metric-grid">
        <article class="metric-card">
          <div class="metric-top"><small>Vendas próprias</small><span class="metric-icon">${icon("sales")}</span></div>
          <strong>${metrics.validated}</strong>
          <span class="metric-trend">${money.format(profileRate())} por venda validada</span>
        </article>
        <article class="metric-card indigo">
          <div class="metric-top"><small>Em validação</small><span class="metric-icon">${icon("check")}</span></div>
          <strong>${state.references.filter((row) => row.status === "Em validação").length}</strong>
          <span class="metric-trend">A aguardar confirmação</span>
        </article>
        <article class="metric-card amber">
          <div class="metric-top"><small>Pipeline ativo</small><span class="metric-icon">${icon("list")}</span></div>
          <strong>${state.references.filter((row) => !validatedStatuses.has(row.status)).length}</strong>
          <span class="metric-trend">Ainda com potencial</span>
        </article>
        <article class="metric-card">
          <div class="metric-top"><small>Valor estimado</small><span class="metric-icon">${icon("wallet")}</span></div>
          <strong>${money.format(metrics.earned + metrics.pending)}</strong>
          <span class="metric-trend">Ganho + pendente</span>
        </article>
      </section>

      <section class="table-card">
        <div class="section-head">
          <div>
            <span class="eyebrow">Vendas e validações</span>
            <h2>Minhas vendas</h2>
          </div>
          <a class="secondary-button" href="#nova" data-route="nova">${icon("plus")}Criar oportunidade</a>
        </div>
        <div class="table-wrap">${renderReferenceTable(salesRows)}</div>
      </section>
    </div>
  `;
}

function renderWallet() {
  const metrics = computeMetrics();
  const rows = state.mode === "cloud"
    ? state.references
        .filter((row) => ["Venda", "Em validação", "Venda validada", "Comissão disponível"].includes(row.status))
        .map((row) => ({
          date: row.date,
          description: `${row.client} · ${row.product}`,
          amount: validatedStatuses.has(row.status) ? profileRate() : 0,
          status: row.status
        }))
    : demoWalletHistory.map((row) => ({
        ...row,
        amount: row.amount > 0 && profileRate() !== 10 ? profileRate() : row.amount
      }));

  return `
    <div class="stack">
      <section class="metric-grid">
        <article class="metric-card">
          <div class="metric-top"><small>Saldo disponível</small><span class="metric-icon">${icon("wallet")}</span></div>
          <strong>${money.format(metrics.available)}</strong>
          <span class="metric-trend">Comissões prontas</span>
        </article>
        <article class="metric-card amber">
          <div class="metric-top"><small>A validar</small><span class="metric-icon">${icon("check")}</span></div>
          <strong>${money.format(metrics.pending)}</strong>
          <span class="metric-trend">A aguardar operador</span>
        </article>
        <article class="metric-card indigo">
          <div class="metric-top"><small>Total ganho</small><span class="metric-icon">${icon("sales")}</span></div>
          <strong>${money.format(metrics.earned)}</strong>
          <span class="metric-trend">Inclui perfil atual</span>
        </article>
        <article class="metric-card">
          <div class="metric-top"><small>Próximo pagamento</small><span class="metric-icon">${icon("bell")}</span></div>
          <strong>05/10</strong>
          <span class="metric-trend">Ciclo mensal</span>
        </article>
      </section>

      <div class="split">
        <section class="card">
          <span class="eyebrow">Pagamento</span>
          <h2>Pedido de levantamento</h2>
          <p>O botão simula a experiência de carteira. Em produção, este fluxo validaria IBAN, limite mínimo e calendário de pagamento.</p>
          <button class="primary-button" type="button" data-payout>${icon("wallet")}Pedir pagamento</button>
        </section>
        <section class="card">
          <span class="eyebrow">Regras atuais</span>
          <h2>${profiles[state.profile].label}</h2>
          <p>${profiles[state.profile].description}</p>
          ${state.profile === "leader" ? `<div class="notice">A comissão Leader é separada das vendas próprias: ${money.format(profiles.leader.teamRate)} por venda validada da equipa.</div>` : ""}
        </section>
      </div>

      <section class="table-card">
        <div class="section-head">
          <div>
            <span class="eyebrow">Movimentos</span>
            <h2>Histórico da carteira</h2>
          </div>
        </div>
        <div class="wallet-list">
          ${rows.length ? rows
            .map(
              (row) => `
                <div class="wallet-row">
                  <div>
                    <strong>${row.description}</strong>
                    <span>${formatDate(row.date)} · ${row.status}</span>
                  </div>
                  <strong>${row.amount >= 0 ? "+" : ""}${money.format(row.amount)}</strong>
                </div>
              `
            )
            .join("") : '<div class="empty-inline">Ainda não existem movimentos nesta conta.</div>'}
        </div>
      </section>
    </div>
  `;
}

function renderTraining() {
  return `
    <div class="stack">
      <section class="hero-panel">
        <div>
          <span class="eyebrow">Formação</span>
          <h2>Progressão clara: Referenciador, Consultor e Leader.</h2>
          <p>O objetivo é desbloquear mais autonomia sem complicar o modelo. Cada módulo tem progresso demo e serve para mostrar a jornada de evolução.</p>
          <div class="hero-actions">
            <button class="primary-button" type="button" data-profile-set="consultor">${icon("book")}Percurso Consultor</button>
            <button class="secondary-button" type="button" data-profile-set="leader">${icon("users")}Percurso Leader</button>
          </div>
        </div>
        <div class="hero-stats">
          <div class="hero-stat"><strong>4</strong><span>Módulos ativos</span></div>
          <div class="hero-stat"><strong>62%</strong><span>Progresso médio</span></div>
        </div>
      </section>

      <section class="module-grid">
        ${trainingModules
          .map(
            (module) => `
              <article class="module-card">
                <span class="role-pill">${module.level}</span>
                <h3>${module.title}</h3>
                <p>${module.body}</p>
                <div class="module-meta"><span>${module.duration}</span><span>${module.progress}% concluído</span></div>
                <div class="progress"><span style="width:${module.progress}%"></span></div>
              </article>
            `
          )
          .join("")}
      </section>
    </div>
  `;
}

function renderMaterials() {
  return `
    <div class="stack">
      <section class="split">
        <article class="card">
          <span class="eyebrow">Material principal</span>
          <h2>Cartão digital de partilha</h2>
          <p>Uma peça simples para explicar que o cliente pode pedir contacto para Telecomunicações, Energia ou ambos.</p>
          <img class="partner-card" src="assets/partner-card.svg" alt="Cartão digital de parceiro">
        </article>
        <article class="card">
          <span class="eyebrow">Link pessoal</span>
          <h2>Partilhar sem perder atribuição</h2>
          <div class="share-card">
            <img src="assets/qr-demo.svg" alt="QR code demo do link pessoal">
            <div>
              <p>Qualquer lead submetida por este link fica associada à tua conta de parceiro.</p>
              <div class="link-box">
                <code>${escapeHtml(personalLink())}</code>
                <button class="icon-button" type="button" data-copy="${escapeAttribute(personalLink())}" aria-label="Copiar link">${icon("copy")}</button>
              </div>
            </div>
          </div>
        </article>
      </section>

      <section class="material-grid">
        ${materialCards
          .map(
            (card) => `
              <article class="material-card">
                <span class="role-pill">${card.type}</span>
                <h3>${card.title}</h3>
                <p>${card.body}</p>
                <div class="material-meta"><span>Demo</span><span>Pronto a usar</span></div>
                <button class="secondary-button" type="button" data-copy="${escapeAttribute(card.title)}">${icon("copy")}Copiar referência</button>
              </article>
            `
          )
          .join("")}
      </section>
    </div>
  `;
}

function renderTeam() {
  if (state.profile !== "leader") {
    return `
      <section class="empty-state">
        <div>
          <span class="eyebrow">Minha Equipa</span>
          <h2>Área desbloqueada no perfil Leader</h2>
          <p>O Leader acompanha Consultores e recebe 5 € por venda validada da equipa. A evolução de perfil é validada pela equipa de operações.</p>
          ${state.mode === "demo" ? `<button class="primary-button" type="button" data-profile-set="leader">${icon("users")}Ver como Leader</button>` : ""}
        </div>
      </section>
    `;
  }

  const metrics = computeMetrics();
  return `
    <div class="stack">
      <section class="hero-panel">
        <div>
          <span class="eyebrow">Leader</span>
          <h2>Equipa com ${metrics.teamSales} vendas validadas este mês.</h2>
          <p>O bónus Leader é calculado apenas sobre produção real da equipa: ${metrics.teamSales} × 5 € = ${money.format(metrics.teamBonus)}.</p>
        </div>
        <div class="hero-stats">
          <div class="hero-stat"><strong>${money.format(metrics.teamBonus)}</strong><span>Comissão Leader</span></div>
          <div class="hero-stat"><strong>${state.teamMembers.length}</strong><span>Consultores ativos</span></div>
        </div>
      </section>

      <section class="table-card">
        <div class="section-head">
          <div>
            <span class="eyebrow">Produção da equipa</span>
            <h2>Consultores acompanhados</h2>
          </div>
        </div>
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Consultor</th>
                <th>Perfil</th>
                <th>Vendas</th>
                <th>Pipeline</th>
                <th>Conversão</th>
                <th>Bónus Leader</th>
                <th>Última venda</th>
              </tr>
            </thead>
            <tbody>
              ${state.teamMembers.length ? state.teamMembers
                .map(
                  (member) => `
                    <tr>
                      <td><strong>${member.name}</strong></td>
                      <td>${member.role}</td>
                      <td>${member.sales}</td>
                      <td>${member.pipeline}</td>
                      <td>${member.conversion}%</td>
                      <td><strong>${money.format(member.sales * profiles.leader.teamRate)}</strong></td>
                      <td>${member.lastSale ? formatDate(member.lastSale) : "-"}</td>
                    </tr>
                  `
                )
                .join("") : '<tr><td colspan="7">Ainda não existem parceiros associados a esta equipa.</td></tr>'}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  `;
}

function renderProfile() {
  const metrics = computeMetrics();
  if (state.profile === "admin") {
    return `
      <div class="stack">
        <section class="hero-panel admin-hero">
          <div>
            <span class="eyebrow">Conta administrativa</span>
            <h2>${escapeHtml(accountName())}</h2>
            <p>Esta conta tem acesso à visão consolidada da rede. O acesso global é validado no servidor antes de qualquer dado ser devolvido.</p>
          </div>
          <div class="hero-stats">
            <div class="hero-stat"><strong>${state.adminPartners.length}</strong><span>Contas visíveis</span></div>
            <div class="hero-stat"><strong>${state.adminReferences.length}</strong><span>Referências visíveis</span></div>
          </div>
        </section>
        <section class="split">
          <article class="card">
            <span class="eyebrow">Identificação</span>
            <h2>${escapeHtml(accountName())}</h2>
            <p>${escapeHtml(accountEmail())} · Admin desde ${joinDate()}.</p>
            <span class="role-pill">Admin</span>
          </article>
          <article class="card">
            <span class="eyebrow">Segurança</span>
            <h2>Privilégios no servidor</h2>
            <p>A interface não usa uma chave privada. As funções do Supabase confirmam o perfil Admin em cada consulta global.</p>
          </article>
        </section>
      </div>
    `;
  }
  return `
    <div class="stack">
      <section class="profile-grid">
        ${Object.entries(profiles)
          .map(
            ([id, profile]) => `
              <article class="profile-tile ${state.profile === id ? "active" : ""}">
                <span class="role-pill">${profile.label}</span>
                <h3>${profile.ownRate ? money.format(profile.ownRate) : "-"} por venda</h3>
                <p>${profile.description}</p>
                <div class="module-meta">
                  ${profile.unlocked.map((item) => `<span>${item}</span>`).join("")}
                </div>
                ${state.mode === "cloud"
                  ? `<span class="profile-state">${state.profile === id ? "Perfil ativo" : "Gerido pela operação"}</span>`
                  : `<button class="secondary-button" type="button" data-profile-set="${id}">${state.profile === id ? "Perfil ativo" : "Ver demo"}</button>`}
              </article>
            `
          )
          .join("")}
      </section>

      <section class="split">
        <article class="card">
          <span class="eyebrow">${state.mode === "cloud" ? "Conta individual" : "Conta demo"}</span>
          <h2>${escapeHtml(accountName())}</h2>
          <p>Parceiro desde ${joinDate()} · ${escapeHtml(state.account?.region || "Zona Norte")} · Perfil atual: ${profiles[state.profile].label}</p>
          <div class="status-list">
            <div class="status-row"><div><strong>Email</strong><span>${escapeHtml(accountEmail())}</span></div>${statusPill("Venda validada")}</div>
            <div class="status-row"><div><strong>Telefone</strong><span>${escapeHtml(accountPhone())}</span></div>${statusPill("Comissão disponível")}</div>
            <div class="status-row"><div><strong>Link pessoal</strong><span>${escapeHtml(displayPersonalLink())}</span></div><button class="icon-button" type="button" data-copy="${escapeAttribute(personalLink())}" aria-label="Copiar link">${icon("copy")}</button></div>
          </div>
        </article>
        <article class="card">
          <span class="eyebrow">Resumo financeiro</span>
          <h2>${money.format(metrics.earned)} ganhos este mês</h2>
          <p>${money.format(metrics.available)} disponíveis · ${money.format(metrics.pending)} a validar.</p>
          <a class="primary-button" href="#carteira" data-route="carteira">${icon("wallet")}Abrir carteira</a>
        </article>
      </section>
    </div>
  `;
}

function renderHelp() {
  const faqs = [
    ["Quando ganho comissão?", "Quando a venda fica validada. Até lá, aparece como venda, em validação ou pendente."],
    ["Que dados devo recolher?", "Na referência inicial, apenas nome, telefone, código postal, interesse e autorização de contacto."],
    ["O Leader ganha por recrutar?", "Não. O bónus Leader existe apenas quando a equipa tem vendas validadas."],
    ["Posso partilhar o meu link?", "Sim. O link e QR pessoal garantem que a origem fica atribuída ao parceiro certo."],
    ["Como passo a Consultor?", "Completando formação e validação interna. A equipa de operações atualiza o perfil depois da aprovação."]
  ];

  return `
    <div class="stack">
      <section class="card">
        <span class="eyebrow">Ajuda</span>
        <h2>Regras simples para a rede crescer bem</h2>
        <p>Esta área reúne as dúvidas essenciais do parceiro e reduz contacto manual com a operação.</p>
      </section>
      <section class="help-grid">
        ${faqs
          .map(
            ([title, body]) => `
              <article class="help-card">
                <h3>${title}</h3>
                <p>${body}</p>
              </article>
            `
          )
          .join("")}
      </section>
    </div>
  `;
}

function bindViewEvents() {
  const form = document.querySelector("#referenceForm");
  if (form) {
    form.addEventListener("submit", handleReferenceSubmit);
  }

  const search = document.querySelector("#referenceSearch");
  if (search) {
    search.addEventListener("input", (event) => {
      state.search = event.target.value;
      render();
      const nextSearch = document.querySelector("#referenceSearch");
      if (nextSearch) {
        nextSearch.focus();
        nextSearch.selectionStart = nextSearch.selectionEnd = nextSearch.value.length;
      }
    });
  }

  const adminSearch = document.querySelector("#adminSearch");
  if (adminSearch) {
    adminSearch.addEventListener("input", (event) => {
      state.adminSearch = event.target.value;
      render();
      const nextSearch = document.querySelector("#adminSearch");
      if (nextSearch) {
        nextSearch.focus();
        nextSearch.selectionStart = nextSearch.selectionEnd = nextSearch.value.length;
      }
    });
  }

  const invitePartnerForm = document.querySelector("#invitePartnerForm");
  if (invitePartnerForm) {
    invitePartnerForm.addEventListener("submit", handlePartnerInvite);
  }

  const adminReferenceForm = document.querySelector("#adminReferenceForm");
  if (adminReferenceForm) {
    adminReferenceForm.addEventListener("submit", handleAdminReferenceUpdate);
  }
}

async function handlePartnerInvite(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const button = form.querySelector('[type="submit"]');
  const formData = new FormData(form);

  if (state.mode !== "cloud" || state.profile !== "admin") {
    showToast("Os convites só estão disponíveis na conta Admin autenticada.");
    return;
  }

  button.disabled = true;
  button.textContent = "A enviar...";

  try {
    const invitation = await window.partnerBackend.invitePartner({
      email: String(formData.get("email") || "").trim(),
      fullName: String(formData.get("fullName") || "").trim(),
      role: String(formData.get("role") || "referenciador")
    });
    const adminData = await window.partnerBackend.loadAdminData();
    state.adminPartners = adminData.partners;
    state.adminReferences = adminData.references;
    render();
    showToast(`Convite enviado para ${invitation.email}.`);
  } catch (error) {
    showToast(friendlyError(error));
    button.disabled = false;
    button.innerHTML = `${icon("plus")}Enviar convite`;
  }
}

async function handleAdminReferenceUpdate(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const button = form.querySelector('[type="submit"]');
  const formData = new FormData(form);
  const referenceId = Number(formData.get("referenceId"));
  const assignedTo = String(formData.get("assignedTo") || "") || null;
  const status = String(formData.get("status") || "Recebida");
  const managementNotes = String(formData.get("managementNotes") || "").trim();

  if (state.profile !== "admin") {
    showToast("Esta operação está disponível apenas para o Admin.");
    return;
  }

  button.disabled = true;
  button.textContent = "A guardar...";

  try {
    if (state.mode === "cloud") {
      await window.partnerBackend.updateAdminReference({
        referenceId,
        assignedTo,
        status,
        managementNotes
      });
      const adminData = await window.partnerBackend.loadAdminData();
      state.adminPartners = adminData.partners;
      state.adminReferences = adminData.references;
    } else {
      const reference = state.adminReferences.find((item) => Number(item.databaseId) === referenceId);
      const assignee = state.adminPartners.find((partner) => partner.userId === assignedTo);
      if (reference) {
        reference.assignedTo = assignedTo;
        reference.assigneeName = assignee?.name || "";
        reference.assigneeEmail = assignee?.email || "";
        reference.assigneeRole = assignee?.role || "";
        reference.status = status;
        reference.managementNotes = managementNotes;
      }
    }

    state.selectedAdminReferenceId = referenceId;
    render();
    showToast("Referência atualizada com sucesso.");
  } catch (error) {
    showToast(friendlyError(error));
    button.disabled = false;
    button.innerHTML = `${icon("check")}Guardar alterações`;
  }
}

async function handleReferenceSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const submitButton = form.querySelector('[type="submit"]');
  const formData = new FormData(form);
  const clientName = String(formData.get("clientName") || "").trim();
  const client = abbreviateName(clientName);
  const product = String(formData.get("product") || "Telecom");
  const source = String(formData.get("source") || "Formulário manual");
  const nextId = `REF-${1049 + state.references.length}`;

  submitButton.disabled = true;
  submitButton.textContent = "A enviar...";

  try {
    const newReference = state.mode === "cloud"
      ? await window.partnerBackend.createReference({
          clientName,
          clientPhone: String(formData.get("clientPhone") || "").trim(),
          postalCode: String(formData.get("postalCode") || "").trim(),
          product,
          source,
          consent: formData.get("consent") === "on",
          notes: String(formData.get("notes") || "").trim()
        })
      : {
          id: nextId,
          client,
          product,
          status: "Recebida",
          date: new Date().toISOString().slice(0, 10),
          source,
          owner: "me"
        };

    state.references.unshift(newReference);
    saveReferences();
    state.statusFilter = "Todos";
    state.search = "";
    showToast("Referência enviada e adicionada ao pipeline.");
    navigate("referencias");
  } catch (error) {
    showToast(friendlyError(error));
    submitButton.disabled = false;
    submitButton.innerHTML = `${icon("plus")}Enviar referência`;
  }
}

function abbreviateName(name) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (!parts.length) return "Cliente";
  if (parts.length === 1) return parts[0];
  return `${parts[0]} ${parts[parts.length - 1].slice(0, 1).toUpperCase()}.`;
}

function formatDate(value) {
  return new Intl.DateTimeFormat("pt-PT", { day: "2-digit", month: "2-digit" }).format(new Date(`${value}T00:00:00`));
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function escapeAttribute(value) {
  return escapeHtml(value).replace(/'/g, "&#039;");
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timeout);
  showToast.timeout = setTimeout(() => toast.classList.remove("show"), 2600);
}

function friendlyError(error) {
  const message = String(error?.message || error || "Ocorreu um erro inesperado.");
  const knownErrors = [
    [/invalid login credentials/i, "Email ou palavra-passe incorretos."],
    [/email not confirmed/i, "Confirma primeiro o email recebido."],
    [/user already registered/i, "Já existe uma conta com este email."],
    [/already.*registered|already.*exists/i, "Já existe uma conta ou convite para este email."],
    [/not authorized|forbidden|admin access required/i, "Esta operação está disponível apenas para o Admin."],
    [/invitation.*rate|rate limit/i, "Aguarda alguns minutos antes de enviar outro convite."],
    [/password should be at least/i, "A palavra-passe precisa de pelo menos 8 caracteres."],
    [/failed to fetch/i, "Não foi possível contactar o Supabase. Verifica a ligação à internet."]
  ];
  const match = knownErrors.find(([pattern]) => pattern.test(message));
  return match ? match[1] : message;
}

function setAuthMessage(message, isError = false) {
  authMessage.textContent = message;
  authMessage.classList.toggle("error", isError);
}

function showAuthScreen(message = "") {
  appShell.hidden = true;
  authScreen.hidden = false;
  loginForm.hidden = false;
  invitePasswordForm.hidden = true;
  setAuthMessage(message);
}

function showInvitePasswordScreen(session) {
  state.session = session;
  appShell.hidden = true;
  authScreen.hidden = false;
  loginForm.hidden = true;
  invitePasswordForm.hidden = false;
  setAuthMessage("O convite foi validado. Define agora a tua palavra-passe.");
  document.querySelector("#invitePassword")?.focus();
}

function isInviteFlow() {
  const query = new URLSearchParams(window.location.search);
  const hash = new URLSearchParams(window.location.hash.replace(/^#/, ""));
  return query.get("invite") === "1" || hash.get("type") === "invite";
}

function showApplication() {
  authScreen.hidden = true;
  appShell.hidden = false;
  render();
}

async function enterCloudMode(session) {
  state.session = session;
  const account = await window.partnerBackend.loadAccount();
  state.account = account;
  state.profile = profiles[account.role] ? account.role : "referenciador";

  if (state.profile === "admin") {
    const adminData = await window.partnerBackend.loadAdminData();
    state.adminPartners = adminData.partners;
    state.adminReferences = adminData.references;
    state.references = [];
    state.teamMembers = [];
  } else {
    state.references = await window.partnerBackend.loadReferences();
    state.teamMembers = state.profile === "leader" ? await window.partnerBackend.loadTeam() : [];
    state.adminPartners = [];
    state.adminReferences = [];
  }

  state.mode = "cloud";
  state.statusFilter = "Todos";
  state.search = "";
  state.adminSearch = "";
  state.adminRoleFilter = "Todos";
  state.adminStatusFilter = "Todos";
  state.selectedAdminReferenceId = null;
  const requestedRoute = window.location.hash.replace("#", "");
  if (!activeNavItems().some((item) => item.id === requestedRoute)) {
    window.history.replaceState(null, "", `#${activeNavItems()[0].id}`);
  }
  showApplication();
}

function bindAuthEvents() {
  loginForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const button = event.currentTarget.querySelector('[type="submit"]');
    const formData = new FormData(event.currentTarget);
    button.disabled = true;
    button.textContent = "A entrar...";
    setAuthMessage("");

    try {
      const session = await window.partnerBackend.signIn(
        String(formData.get("email") || "").trim(),
        String(formData.get("password") || "")
      );
      await enterCloudMode(session);
    } catch (error) {
      setAuthMessage(friendlyError(error), true);
    } finally {
      button.disabled = false;
      button.textContent = "Entrar";
    }
  });

  invitePasswordForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const button = event.currentTarget.querySelector('[type="submit"]');
    const formData = new FormData(event.currentTarget);
    const password = String(formData.get("password") || "");
    const passwordConfirm = String(formData.get("passwordConfirm") || "");

    if (password.length < 8) {
      setAuthMessage("A palavra-passe precisa de pelo menos 8 caracteres.", true);
      return;
    }
    if (password !== passwordConfirm) {
      setAuthMessage("As palavras-passe não coincidem.", true);
      return;
    }

    button.disabled = true;
    button.textContent = "A criar...";
    setAuthMessage("");

    try {
      await window.partnerBackend.updatePassword(password);
      window.history.replaceState(null, "", window.location.pathname);
      await enterCloudMode(state.session);
      showToast("Palavra-passe criada. A tua conta está pronta.");
    } catch (error) {
      setAuthMessage(friendlyError(error), true);
      button.disabled = false;
      button.textContent = "Criar palavra-passe";
    }
  });
}

async function handleSignOut(button) {
  button.disabled = true;
  try {
    await window.partnerBackend.signOut();
    state.session = null;
    state.account = null;
    state.references = [];
    state.teamMembers = [];
    state.adminPartners = [];
    state.adminReferences = [];
    state.selectedAdminReferenceId = null;
    state.mode = "demo";
    showAuthScreen("Sessão terminada com segurança.");
  } catch (error) {
    showToast(friendlyError(error));
    button.disabled = false;
  }
}

async function bootstrap() {
  bindAuthEvents();

  if (!window.partnerBackend.configured) {
    state.mode = "demo";
    showApplication();
    return;
  }

  appShell.hidden = true;
  authScreen.hidden = false;
  setAuthMessage("A verificar sessão...");

  try {
    const session = await window.partnerBackend.init();
    if (session) {
      if (isInviteFlow()) {
        showInvitePasswordScreen(session);
      } else {
        await enterCloudMode(session);
      }
    } else {
      showAuthScreen(isInviteFlow() ? "O convite expirou ou já foi utilizado. Pede ao Admin um novo convite." : "");
    }
  } catch (error) {
    showAuthScreen();
    setAuthMessage(friendlyError(error), true);
  }
}

document.addEventListener("click", (event) => {
  const routeButton = event.target.closest("[data-route]");
  if (routeButton) {
    event.preventDefault();
    navigate(routeButton.dataset.route);
    return;
  }

  const copyButton = event.target.closest("[data-copy]");
  if (copyButton) {
    event.preventDefault();
    const text = copyButton.dataset.copy;
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(text).then(
        () => showToast("Copiado para a área de transferência."),
        () => showToast("Não consegui copiar automaticamente neste browser.")
      );
    } else {
      showToast("Copia manualmente: " + text);
    }
    return;
  }

  const filterButton = event.target.closest("[data-status-filter]");
  if (filterButton) {
    state.statusFilter = filterButton.dataset.statusFilter;
    render();
    return;
  }

  const adminRoleFilter = event.target.closest("[data-admin-role-filter]");
  if (adminRoleFilter) {
    state.adminRoleFilter = adminRoleFilter.dataset.adminRoleFilter;
    render();
    return;
  }

  const adminStatusFilter = event.target.closest("[data-admin-status-filter]");
  if (adminStatusFilter) {
    state.adminStatusFilter = adminStatusFilter.dataset.adminStatusFilter;
    render();
    return;
  }

  const manageReferenceButton = event.target.closest("[data-manage-reference]");
  if (manageReferenceButton) {
    state.selectedAdminReferenceId = manageReferenceButton.dataset.manageReference;
    if (state.route !== "admin-referencias") {
      navigate("admin-referencias");
    } else {
      render();
    }
    document.querySelector("#referenceManager")?.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  const closeReferenceManagerButton = event.target.closest("[data-close-reference-manager]");
  if (closeReferenceManagerButton) {
    state.selectedAdminReferenceId = null;
    render();
    return;
  }

  const profileButton = event.target.closest("[data-profile-set]");
  if (profileButton) {
    setProfile(profileButton.dataset.profileSet);
    return;
  }

  const payoutButton = event.target.closest("[data-payout]");
  if (payoutButton) {
    showToast(state.mode === "cloud" ? "Pedido recebido. A operação irá validar o pagamento." : "Pedido de pagamento demo registado.");
    return;
  }

  const signOutButton = event.target.closest("[data-sign-out]");
  if (signOutButton) {
    handleSignOut(signOutButton);
  }
});

window.addEventListener("hashchange", render);

profileSelect.addEventListener("change", (event) => {
  setProfile(event.target.value);
});

bootstrap();
