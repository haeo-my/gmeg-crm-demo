const DEMO_EMAIL = "demo@gmeg.local";
const DEMO_PASSWORD = "demo1234@";
const TODAY = new Date("2026-04-02");

const STORAGE_KEYS = {
  session: "gmeg.session.v2",
  leads: "gmeg.leads.v2",
  crm: "gmeg.crm.v2",
  logs: "gmeg.logs.v2",
  admin: "gmeg.admin.v2",
};

const defaultLeads = [
  {
    id: 1,
    company: "Saigon Beverage Distribution",
    country: "Vietnam",
    city: "Ho Chi Minh",
    type: "Distributor",
    source: "Yellow Pages",
    fit: 91,
    status: "검토중",
    website: "saigonbev.vn",
    email: "sales@saigonbev.vn",
    phone: "+84-28-3111-2200",
    contactPerson: "Tran Anh",
    fitSummary: "맥주·음료 유통 카테고리와 직접 일치하고, 연락 가능한 정보가 잘 확보된 고적합 후보입니다.",
    fitBreakdown: [
      { label: "산업 적합성", score: 25, max: 25 },
      { label: "역할 적합성", score: 18, max: 20 },
      { label: "지역 적합성", score: 15, max: 15 },
      { label: "연락 가능성", score: 14, max: 15 },
      { label: "중복 여부", score: 9, max: 10 },
    ],
  },
  {
    id: 2,
    company: "Hanoi Retail Drinks Group",
    country: "Vietnam",
    city: "Hanoi",
    type: "Retail Buyer",
    source: "Web Search",
    fit: 84,
    status: "발굴됨",
    website: "hrdg.vn",
    email: "partner@hrdg.vn",
    phone: "+84-24-5222-1000",
    contactPerson: "Le Minh",
    fitSummary: "리테일 유통망이 강하고 구매 역할이 명확해 전시 방문 전환 가능성이 높습니다.",
    fitBreakdown: [
      { label: "산업 적합성", score: 22, max: 25 },
      { label: "역할 적합성", score: 18, max: 20 },
      { label: "지역 적합성", score: 14, max: 15 },
      { label: "연락 가능성", score: 12, max: 15 },
      { label: "중복 여부", score: 8, max: 10 },
    ],
  },
  {
    id: 3,
    company: "Mekong Hotel Supply",
    country: "Vietnam",
    city: "Can Tho",
    type: "Hotel/F&B",
    source: "Kompass",
    fit: 78,
    status: "발굴됨",
    website: "mekongsupply.vn",
    email: "info@mekongsupply.vn",
    phone: "+84-292-311-8899",
    contactPerson: "Pham Linh",
    fitSummary: "호텔·F&B 공급 경험은 있으나 맥주 전문성은 중간 수준이라 2차 검토가 필요한 후보입니다.",
    fitBreakdown: [
      { label: "산업 적합성", score: 18, max: 25 },
      { label: "역할 적합성", score: 16, max: 20 },
      { label: "지역 적합성", score: 13, max: 15 },
      { label: "연락 가능성", score: 12, max: 15 },
      { label: "중복 여부", score: 19, max: 25 },
    ],
  },
  {
    id: 4,
    company: "Vietnam Premium Imports",
    country: "Vietnam",
    city: "Da Nang",
    type: "Importer",
    source: "Yellow Pages",
    fit: 88,
    status: "검토중",
    website: "vpi.vn",
    email: "import@vpi.vn",
    phone: "+84-236-700-4411",
    contactPerson: "Nguyen Ha",
    fitSummary: "수입 중심 포지션이 명확하고, 지역 커버리지가 좋아 VIP 바이어 후보로 적합합니다.",
    fitBreakdown: [
      { label: "산업 적합성", score: 24, max: 25 },
      { label: "역할 적합성", score: 17, max: 20 },
      { label: "지역 적합성", score: 14, max: 15 },
      { label: "연락 가능성", score: 13, max: 15 },
      { label: "중복 여부", score: 20, max: 25 },
    ],
  },
  {
    id: 5,
    company: "Asia Beverage Chain",
    country: "Vietnam",
    city: "Ho Chi Minh",
    type: "Retail Buyer",
    source: "Exhibition Directory",
    fit: 81,
    status: "발굴됨",
    website: "abchain.vn",
    email: "buyer@abchain.vn",
    phone: "+84-28-7444-1001",
    contactPerson: "Vu Khoa",
    fitSummary: "전시회 디렉토리 기반으로 찾은 리테일 체인 후보로, 후속 접촉 우선순위가 높은 편입니다.",
    fitBreakdown: [
      { label: "산업 적합성", score: 21, max: 25 },
      { label: "역할 적합성", score: 17, max: 20 },
      { label: "지역 적합성", score: 15, max: 15 },
      { label: "연락 가능성", score: 11, max: 15 },
      { label: "중복 여부", score: 17, max: 25 },
    ],
  },
  {
    id: 6,
    company: "Hoang Minh Horeca Partners",
    country: "Vietnam",
    city: "Hanoi",
    type: "Hotel/F&B",
    source: "Kompass",
    fit: 82,
    status: "검토중",
    website: "hmhoreca.vn",
    email: "biz@hmhoreca.vn",
    phone: "+84-24-7888-3111",
    contactPerson: "Do Huyen",
    fitSummary: "호텔 구매 채널 강점이 있어 VIP 바이어 초청 대상에 포함할 만합니다.",
    fitBreakdown: [
      { label: "산업 적합성", score: 20, max: 25 },
      { label: "역할 적합성", score: 18, max: 20 },
      { label: "지역 적합성", score: 14, max: 15 },
      { label: "연락 가능성", score: 12, max: 15 },
      { label: "중복 여부", score: 18, max: 25 },
    ],
  },
  {
    id: 7,
    company: "Blue Delta Import Co.",
    country: "Vietnam",
    city: "Hai Phong",
    type: "Importer",
    source: "Yellow Pages",
    fit: 86,
    status: "발굴됨",
    website: "bluedelta.vn",
    email: "trade@bluedelta.vn",
    phone: "+84-225-812-2233",
    contactPerson: "Mai Phuc",
    fitSummary: "수입 중심 기업이며 연락처가 명확해 빠르게 CRM 전환이 가능한 후보입니다.",
    fitBreakdown: [
      { label: "산업 적합성", score: 23, max: 25 },
      { label: "역할 적합성", score: 17, max: 20 },
      { label: "지역 적합성", score: 13, max: 15 },
      { label: "연락 가능성", score: 13, max: 15 },
      { label: "중복 여부", score: 20, max: 25 },
    ],
  },
  {
    id: 8,
    company: "Sunrise F&B Procurement",
    country: "Vietnam",
    city: "Nha Trang",
    type: "Hotel/F&B",
    source: "Web Search",
    fit: 83,
    status: "발굴됨",
    website: "sunrisefnb.vn",
    email: "procurement@sunrisefnb.vn",
    phone: "+84-258-422-5011",
    contactPerson: "Lan Chi",
    fitSummary: "호텔 F&B 조달 역할이 명확하고 연락처가 확인돼 1차 접촉 가치가 높습니다.",
    fitBreakdown: [
      { label: "산업 적합성", score: 20, max: 25 },
      { label: "역할 적합성", score: 18, max: 20 },
      { label: "지역 적합성", score: 14, max: 15 },
      { label: "연락 가능성", score: 13, max: 15 },
      { label: "중복 여부", score: 18, max: 25 },
    ],
  },
];

const defaultCRM = [
  {
    id: 101,
    company: "K-Vina Trading",
    country: "Vietnam",
    city: "Ho Chi Minh",
    category: "Importer",
    owner: "하정",
    collaborators: ["박지훈"],
    status: "후속 협의중",
    lastContact: "2026-03-29",
    nextAction: "견적서 발송",
    nextActionDate: "2026-04-03",
    fit: 87,
    email: "contact@kvina.vn",
    phone: "+84-28-4000-2200",
    address: "District 1, Ho Chi Minh",
    contactPerson: "Le An",
    source: "Yellow Pages",
    linkedLeadId: 1,
    notes: "수입·유통 겸업. VIP 바이어 초청 대상.",
    history: [
      { year: 2023, status: "방문", booth: 0, discount: 0, stopReason: "" },
      { year: 2024, status: "참가", booth: 1, discount: 5, stopReason: "" },
      { year: 2025, status: "참가", booth: 2, discount: 5, stopReason: "" },
      { year: 2026, status: "검토중", booth: 2, discount: 10, stopReason: "" },
    ],
    comms: [
      { date: "2026-03-29", author: "하정", type: "이메일", memo: "부스 방문 제안 메일 발송", action: "견적서 발송", nextDate: "2026-04-03" },
      { date: "2026-03-21", author: "박지훈", type: "전화", memo: "맥주 수입 품목 확장 계획 확인", action: "VIP 바이어 초청 검토", nextDate: "2026-04-05" },
    ],
  },
  {
    id: 102,
    company: "River Retail Buyers",
    country: "Vietnam",
    city: "Hanoi",
    category: "Retail Buyer",
    owner: "하정",
    collaborators: ["김민지"],
    status: "신규",
    lastContact: "2026-03-27",
    nextAction: "1차 접촉 예정",
    nextActionDate: "2026-04-02",
    fit: 80,
    email: "buyer@riverretail.vn",
    phone: "+84-24-5000-8822",
    address: "Hanoi Old Quarter",
    contactPerson: "Minh Tu",
    source: "Web Search",
    linkedLeadId: 2,
    notes: "리테일 채널 테스트용으로 접촉 예정.",
    history: [
      { year: 2024, status: "방문", booth: 0, discount: 0, stopReason: "" },
      { year: 2025, status: "미참가", booth: 0, discount: 0, stopReason: "ROI 불명확" },
      { year: 2026, status: "검토중", booth: 1, discount: 0, stopReason: "" },
    ],
    comms: [
      { date: "2026-03-27", author: "하정", type: "CRM 저장", memo: "바이어 후보를 CRM에 등록", action: "1차 접촉 예정", nextDate: "2026-04-02" },
    ],
  },
  {
    id: 103,
    company: "Golden Hop Imports",
    country: "Vietnam",
    city: "Da Nang",
    category: "Importer",
    owner: "하정",
    collaborators: ["박서준"],
    status: "초청 확정",
    lastContact: "2026-03-25",
    nextAction: "VIP 초청장 발송",
    nextActionDate: "2026-04-04",
    fit: 92,
    email: "ceo@goldenhop.vn",
    phone: "+84-236-777-9900",
    address: "Hai Chau, Da Nang",
    contactPerson: "Ngoc Pham",
    source: "Kompass",
    linkedLeadId: 4,
    notes: "수입 포트폴리오 다양. VIP 응대 필요.",
    history: [
      { year: 2023, status: "참가", booth: 1, discount: 0, stopReason: "" },
      { year: 2024, status: "참가", booth: 2, discount: 5, stopReason: "" },
      { year: 2025, status: "참가", booth: 2, discount: 10, stopReason: "" },
      { year: 2026, status: "참가", booth: 3, discount: 10, stopReason: "" },
    ],
    comms: [
      { date: "2026-03-25", author: "하정", type: "전화", memo: "VIP 바이어 초청 의사 확인", action: "VIP 초청장 발송", nextDate: "2026-04-04" },
      { date: "2026-03-18", author: "박서준", type: "미팅", memo: "수입 주류 카테고리 확장 논의", action: "세부 일정 확정", nextDate: "2026-04-06" },
    ],
  },
  {
    id: 104,
    company: "Urban Drinks Wholesale",
    country: "Vietnam",
    city: "Hanoi",
    category: "Distributor",
    owner: "하정",
    collaborators: [],
    status: "장기 미접촉",
    lastContact: "2026-03-15",
    nextAction: "재접촉 필요",
    nextActionDate: "2026-04-02",
    fit: 89,
    email: "hello@urbanwholesale.vn",
    phone: "+84-24-6111-9900",
    address: "Thanh Xuan, Hanoi",
    contactPerson: "Thanh Vu",
    source: "Yellow Pages",
    linkedLeadId: 7,
    notes: "우선순위 높지만 접촉 공백 발생.",
    history: [
      { year: 2024, status: "참가", booth: 1, discount: 0, stopReason: "" },
      { year: 2025, status: "미참가", booth: 0, discount: 0, stopReason: "일정 중복" },
      { year: 2026, status: "검토중", booth: 1, discount: 5, stopReason: "" },
    ],
    comms: [
      { date: "2026-03-15", author: "하정", type: "이메일", memo: "참가 제안서 발송 후 미회신", action: "재접촉 필요", nextDate: "2026-04-02" },
    ],
  },
];

const defaultLogs = [
  { id: 201, date: "2026-03-29", type: "이메일", company: "K-Vina Trading", author: "하정", memo: "부스 방문 제안 메일 발송" },
  { id: 202, date: "2026-03-27", type: "CRM 저장", company: "River Retail Buyers", author: "System", memo: "바이어 리드를 CRM에 저장" },
  { id: 203, date: "2026-03-25", type: "전화", company: "Golden Hop Imports", author: "하정", memo: "VIP 바이어 초청 의사 확인" },
  { id: 204, date: "2026-03-15", type: "이메일", company: "Urban Drinks Wholesale", author: "하정", memo: "참가 제안서 발송 후 미회신" },
];

const defaultAdmin = {
  users: [
    { name: "하정", role: "운영총괄" },
    { name: "박지훈", role: "세일즈" },
    { name: "김민지", role: "데이터/마케팅" },
    { name: "박서준", role: "관리자" },
  ],
  statuses: ["신규", "1차 접촉", "후속 협의중", "초청 확정", "장기 미접촉", "보류"],
  stopReasons: ["예산 축소", "일정 중복", "ROI 불명확", "경쟁 전시 이동"],
};

const state = {
  session: null,
  currentPage: "dashboard",
  detailTab: "info",
  selectedCompanyId: null,
  selectedLeadId: null,
  leadSearch: "",
  sourceFilter: "all",
  leads: [],
  crm: [],
  logs: [],
  admin: { users: [], statuses: [], stopReasons: [] },
};

function clone(data) {
  return JSON.parse(JSON.stringify(data));
}

function loadData() {
  state.session = JSON.parse(localStorage.getItem(STORAGE_KEYS.session) || "null");
  state.leads = JSON.parse(localStorage.getItem(STORAGE_KEYS.leads) || "null") || clone(defaultLeads);
  state.crm = JSON.parse(localStorage.getItem(STORAGE_KEYS.crm) || "null") || clone(defaultCRM);
  state.logs = JSON.parse(localStorage.getItem(STORAGE_KEYS.logs) || "null") || clone(defaultLogs);
  state.admin = JSON.parse(localStorage.getItem(STORAGE_KEYS.admin) || "null") || clone(defaultAdmin);
  if (!state.selectedCompanyId && state.crm.length) state.selectedCompanyId = state.crm[0].id;
}

function saveData() {
  localStorage.setItem(STORAGE_KEYS.session, JSON.stringify(state.session));
  localStorage.setItem(STORAGE_KEYS.leads, JSON.stringify(state.leads));
  localStorage.setItem(STORAGE_KEYS.crm, JSON.stringify(state.crm));
  localStorage.setItem(STORAGE_KEYS.logs, JSON.stringify(state.logs));
  localStorage.setItem(STORAGE_KEYS.admin, JSON.stringify(state.admin));
}

function daysBetween(dateString) {
  const target = new Date(dateString);
  return Math.floor((TODAY - target) / (1000 * 60 * 60 * 24));
}

function statusClass(status) {
  if (status === "초청 확정" || status === "참가") return "green";
  if (status === "장기 미접촉" || status === "미참가") return "red";
  if (status === "신규" || status === "검토중" || status === "1차 접촉") return "yellow";
  return "";
}

function setSession(user) {
  state.session = user;
  saveData();
  updateView();
}

function clearSession() {
  state.session = null;
  saveData();
  updateView();
}

function updateView() {
  const loginView = document.getElementById("loginView");
  const appView = document.getElementById("appView");
  const welcomeText = document.getElementById("welcomeText");

  if (state.session) {
    loginView.classList.add("hidden");
    appView.classList.remove("hidden");
    welcomeText.textContent = `${state.session.name}님`;
    renderAll();
    showPage(state.currentPage);
  } else {
    loginView.classList.remove("hidden");
    appView.classList.add("hidden");
  }
}

function showPage(pageName) {
  state.currentPage = pageName;
  document.querySelectorAll(".nav-tab").forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.page === pageName);
  });

  const pages = ["dashboardPage", "buyersPage", "crmPage", "detailPage", "exhibitionPage", "logsPage", "adminPage"];
  pages.forEach((id) => document.getElementById(id).classList.add("hidden"));

  const targetMap = {
    dashboard: "dashboardPage",
    buyers: "buyersPage",
    crm: "crmPage",
    detail: "detailPage",
    exhibition: "exhibitionPage",
    logs: "logsPage",
    admin: "adminPage",
  };
  document.getElementById(targetMap[pageName]).classList.remove("hidden");
}

function renderAll() {
  renderDashboard();
  renderAlerts();
  renderLeads();
  renderCRM();
  renderLogs();
  renderAdmin();
  if (state.selectedCompanyId) renderDetail();
}

function renderDashboard() {
  document.getElementById("totalLeadsStat").textContent = state.leads.length;
  document.getElementById("highFitStat").textContent = state.leads.filter((lead) => lead.fit >= 80).length;
  document.getElementById("crmCountStat").textContent = state.crm.length;
  document.getElementById("followUpStat").textContent = state.crm.filter((item) => item.nextActionDate && daysBetween(item.nextActionDate) <= 1).length;

  const topLeads = [...state.leads].sort((a, b) => b.fit - a.fit).slice(0, 5);
  document.getElementById("topLeadsList").innerHTML = topLeads.map((lead) => `
    <div class="list-card">
      <div class="list-card-head">
        <div>
          <div class="list-card-title">${lead.company}</div>
          <div class="list-card-meta">${lead.country} · ${lead.city} · ${lead.type} · ${lead.source}</div>
        </div>
        <span class="score-badge">${lead.fit}점</span>
      </div>
    </div>
  `).join("");

  const recentLogs = [...state.logs].slice(0, 5);
  document.getElementById("recentActivityList").innerHTML = recentLogs.map((log) => `
    <div class="list-card">
      <div class="list-card-title">${log.company}</div>
      <div class="list-card-meta">${log.date} · ${log.type} · ${log.memo}</div>
    </div>
  `).join("");
}

function renderAlerts() {
  const contactToday = state.crm.filter((item) => item.status === "신규").length;
  const followUp = state.crm.filter((item) => item.nextActionDate && daysBetween(item.nextActionDate) <= 3).length;
  const longNoContact = state.crm.filter((item) => daysBetween(item.lastContact) >= 7).length;
  const recentSaved = state.logs.filter((log) => log.type === "CRM 저장").length;

  document.getElementById("alertContactToday").textContent = contactToday;
  document.getElementById("alertFollowUp").textContent = followUp;
  document.getElementById("alertLongNoContact").textContent = longNoContact;
  document.getElementById("alertRecentSaved").textContent = recentSaved;
}

function renderLeads() {
  const keyword = state.leadSearch.trim().toLowerCase();
  const filtered = state.leads.filter((lead) => {
    const matchKeyword = [lead.company, lead.city, lead.type].join(" ").toLowerCase().includes(keyword);
    const matchSource = state.sourceFilter === "all" || lead.source === state.sourceFilter;
    return matchKeyword && matchSource;
  });

  document.getElementById("leadTableBody").innerHTML = filtered.map((lead) => {
    const alreadySaved = state.crm.some((item) => item.company === lead.company);
    return `
      <div class="table-row buyer-grid">
        <div>
          <div class="row-title">${lead.company}</div>
          <div class="row-sub">${lead.contactPerson} · ${lead.email}</div>
        </div>
        <div>${lead.country} · ${lead.city}</div>
        <div>${lead.type}</div>
        <div>${lead.source}</div>
        <div><span class="score-badge">${lead.fit}점</span></div>
        <div class="row-action">
          <button class="inline-btn secondary fit-btn" data-id="${lead.id}">근거 보기</button>
          <button class="inline-btn save-btn" data-id="${lead.id}" ${alreadySaved ? "disabled" : ""}>${alreadySaved ? "저장됨" : "CRM 저장"}</button>
        </div>
      </div>
    `;
  }).join("");

  document.querySelectorAll(".fit-btn").forEach((btn) => {
    btn.addEventListener("click", () => openFitModal(Number(btn.dataset.id)));
  });
  document.querySelectorAll(".save-btn").forEach((btn) => {
    btn.addEventListener("click", () => saveLeadToCRM(Number(btn.dataset.id)));
  });
}

function renderCRM() {
  document.getElementById("crmTableBody").innerHTML = state.crm.map((item) => `
    <div class="table-row crm-grid">
      <div>
        <div class="row-title">${item.company}</div>
        <div class="row-sub">적합성 ${item.fit}점 · ${item.category}</div>
      </div>
      <div>${item.country}</div>
      <div>${item.owner}</div>
      <div><span class="status-badge ${statusClass(item.status)}">${item.status}</span></div>
      <div>${item.lastContact}</div>
      <div>${item.nextAction || "-"}</div>
      <div class="row-action">
        <button class="inline-btn secondary detail-btn" data-id="${item.id}">상세</button>
      </div>
    </div>
  `).join("");

  document.querySelectorAll(".detail-btn").forEach((btn) => {
    btn.addEventListener("click", () => openCompanyDetail(Number(btn.dataset.id)));
  });
}

function renderDetail() {
  const company = state.crm.find((item) => item.id === state.selectedCompanyId);
  if (!company) return;

  document.getElementById("detailCompanyName").textContent = company.company;
  document.getElementById("detailCompanyMeta").textContent = `${company.category} · ${company.country} ${company.city} · GMEG 담당 ${company.owner}`;
  document.getElementById("detailTagRow").innerHTML = `
    <span class="status-badge ${statusClass(company.status)}">${company.status}</span>
    <span class="chip">최근 연락 ${company.lastContact}</span>
    <span class="chip">다음 액션 ${company.nextActionDate || "미정"}</span>
  `;

  document.getElementById("detailInfoTab").innerHTML = `
    <div class="info-grid">
      <div class="info-item"><label>회사명</label><p>${company.company}</p></div>
      <div class="info-item"><label>카테고리</label><p>${company.category}</p></div>
      <div class="info-item"><label>기업 담당자</label><p>${company.contactPerson}</p></div>
      <div class="info-item"><label>GMEG 담당</label><p>${company.owner}</p></div>
      <div class="info-item"><label>이메일</label><p>${company.email}</p></div>
      <div class="info-item"><label>전화</label><p>${company.phone}</p></div>
      <div class="info-item"><label>주소</label><p>${company.address}</p></div>
      <div class="info-item"><label>유입 출처</label><p>${company.source}</p></div>
    </div>
    <div class="analytics-card"><h4>메모</h4><div class="analysis-note">${company.notes || "메모 없음"}</div></div>
  `;

  document.getElementById("detailContactsTab").innerHTML = `
    <div class="info-grid">
      <div class="info-item"><label>기업 측 담당자</label><p>${company.contactPerson}</p></div>
      <div class="info-item"><label>주담당</label><p>${company.owner}</p></div>
      <div class="info-item"><label>협업 담당자</label><p>${company.collaborators.length ? company.collaborators.join(", ") : "없음"}</p></div>
      <div class="info-item"><label>현재 상태</label><p>${company.status}</p></div>
    </div>
  `;

  document.getElementById("detailCommTab").innerHTML = `
    <div class="comm-topbar">
      <div class="empty-text">담당자가 바뀌어도 이어서 볼 수 있는 커뮤니케이션 기록입니다.</div>
      <button id="openCommModalBtn" class="btn btn-primary">커뮤니케이션 추가</button>
    </div>
    <div class="comm-log">
      ${company.comms.map((comm) => {
        const typeClass = comm.type === "이메일" ? "email" : comm.type === "전화" ? "phone" : comm.type === "미팅" ? "meeting" : "kakao";
        return `
          <div class="comm-item ${typeClass}">
            <div class="comm-meta"><span>${comm.date}</span><span>${comm.author}</span><span>${comm.type}</span></div>
            <div class="comm-body">${comm.memo}</div>
            <div class="comm-action">→ ${comm.action || "후속 액션 없음"}${comm.nextDate ? ` · ${comm.nextDate}` : ""}</div>
          </div>
        `;
      }).join("")}
    </div>
  `;

  document.getElementById("openCommModalBtn").addEventListener("click", openCommModal);

  document.getElementById("detailHistoryTab").innerHTML = `
    <div class="history-list">
      ${company.history.map((item) => `
        <div class="history-row">
          <div class="history-year">${item.year}</div>
          <div class="history-bar">
            <div class="history-pill ${item.status === "참가" ? "join" : item.status === "미참가" ? "stop" : "pending"}">
              <span>${item.status}</span>
              <span>${item.booth ? `부스 ${item.booth}` : ""} ${item.discount ? `· 할인 ${item.discount}%` : ""} ${item.stopReason ? `· ${item.stopReason}` : ""}</span>
            </div>
          </div>
        </div>
      `).join("")}
    </div>
  `;

  const discountData = company.history.filter((item) => item.discount || item.discount === 0);
  const boothData = company.history.filter((item) => item.booth || item.booth === 0);
  const maxDiscount = Math.max(...discountData.map((item) => item.discount), 1);
  const maxBooth = Math.max(...boothData.map((item) => item.booth), 1);

  document.getElementById("detailAnalyticsTab").innerHTML = `
    <div class="analytics-grid">
      <div class="analytics-card">
        <h4>할인율 추이</h4>
        <div class="bar-wrap">
          ${discountData.map((item) => `
            <div class="bar-item">
              <div class="bar-label">${item.year}</div>
              <div class="bar-track"><div class="bar-fill green" style="width:${(item.discount / maxDiscount) * 100 || 4}%">${item.discount}%</div></div>
              <div class="bar-val">${item.discount}%</div>
            </div>
          `).join("")}
        </div>
      </div>
      <div class="analytics-card">
        <h4>부스 규모 변화</h4>
        <div class="bar-wrap">
          ${boothData.map((item) => `
            <div class="bar-item">
              <div class="bar-label">${item.year}</div>
              <div class="bar-track"><div class="bar-fill blue" style="width:${(item.booth / maxBooth) * 100 || 4}%">${item.booth}</div></div>
              <div class="bar-val">${item.booth}</div>
            </div>
          `).join("")}
        </div>
      </div>
    </div>
    <div class="analytics-card top-gap">
      <h4>해석</h4>
      <div class="analysis-note">할인율과 부스 규모 변화를 통해 재참가 패턴과 이탈 가능성을 빠르게 파악할 수 있습니다.</div>
    </div>
  `;

  switchDetailTab(state.detailTab);
}

function switchDetailTab(tabName) {
  state.detailTab = tabName;
  document.querySelectorAll(".detail-tab-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.tab === tabName);
  });
  const map = {
    info: "detailInfoTab",
    contacts: "detailContactsTab",
    comm: "detailCommTab",
    history: "detailHistoryTab",
    analytics: "detailAnalyticsTab",
  };
  Object.values(map).forEach((id) => document.getElementById(id).classList.add("hidden"));
  document.getElementById(map[tabName]).classList.remove("hidden");
}

function renderLogs() {
  document.getElementById("logTableBody").innerHTML = state.logs.map((log) => `
    <div class="table-row log-grid">
      <div>${log.date}</div>
      <div>${log.type}</div>
      <div>${log.company}</div>
      <div>${log.author}</div>
      <div>${log.memo}</div>
    </div>
  `).join("");
}

function renderAdmin() {
  document.getElementById("adminUsersList").innerHTML = state.admin.users.map((user) => `
    <div class="list-card">
      <div class="list-card-head">
        <div>
          <div class="list-card-title">${user.name}</div>
          <div class="list-card-meta">${user.role}</div>
        </div>
      </div>
    </div>
  `).join("");

  document.getElementById("statusCodeList").innerHTML = state.admin.statuses.map((status) => `<span class="chip">${status}</span>`).join("");
  document.getElementById("stopReasonList").innerHTML = state.admin.stopReasons.map((reason) => `<span class="chip">${reason}</span>`).join("");
}

function openFitModal(leadId) {
  const lead = state.leads.find((item) => item.id === leadId);
  if (!lead) return;
  document.getElementById("fitModalTitle").textContent = `${lead.company} · ${lead.fit}점`;
  document.getElementById("fitModalSummary").textContent = lead.fitSummary;
  document.getElementById("fitModalBreakdown").innerHTML = lead.fitBreakdown.map((item) => `
    <div class="score-row">
      <div class="score-row-top"><span>${item.label}</span><strong>${item.score}/${item.max}</strong></div>
      <div class="score-track"><div class="score-fill" style="width:${(item.score / item.max) * 100}%"></div></div>
    </div>
  `).join("");
  document.getElementById("fitModal").classList.remove("hidden");
}

function closeFitModal() {
  document.getElementById("fitModal").classList.add("hidden");
}

function openCommModal() {
  document.getElementById("commModal").classList.remove("hidden");
}

function closeCommModal() {
  document.getElementById("commModal").classList.add("hidden");
}

function saveLeadToCRM(leadId) {
  const lead = state.leads.find((item) => item.id === leadId);
  if (!lead) return;
  if (state.crm.some((item) => item.company === lead.company)) {
    alert("이미 CRM에 저장된 기업입니다.");
    return;
  }

  const newCompany = {
    id: Date.now(),
    company: lead.company,
    country: lead.country,
    city: lead.city,
    category: lead.type,
    owner: "하정",
    collaborators: [],
    status: "신규",
    lastContact: "2026-04-02",
    nextAction: "1차 접촉 예정",
    nextActionDate: "2026-04-03",
    fit: lead.fit,
    email: lead.email,
    phone: lead.phone,
    address: `${lead.city}, ${lead.country}`,
    contactPerson: lead.contactPerson,
    source: lead.source,
    linkedLeadId: lead.id,
    notes: "바이어 리드에서 CRM으로 전환된 신규 기업입니다.",
    history: [
      { year: 2025, status: "방문", booth: 0, discount: 0, stopReason: "" },
      { year: 2026, status: "검토중", booth: 1, discount: 0, stopReason: "" },
    ],
    comms: [
      { date: "2026-04-02", author: "System", type: "CRM 저장", memo: "바이어 리드를 CRM에 저장", action: "1차 접촉 예정", nextDate: "2026-04-03" },
    ],
  };

  state.crm.unshift(newCompany);
  lead.status = "CRM 저장";
  state.logs.unshift({
    id: Date.now() + 1,
    date: "2026-04-02",
    type: "CRM 저장",
    company: lead.company,
    author: "System",
    memo: "바이어 리드를 CRM에 저장",
  });
  state.selectedCompanyId = newCompany.id;
  saveData();
  renderAll();
  showPage("crm");
}

function openCompanyDetail(companyId) {
  state.selectedCompanyId = companyId;
  state.detailTab = "info";
  renderDetail();
  showPage("detail");
}

function saveCommunication() {
  const company = state.crm.find((item) => item.id === state.selectedCompanyId);
  if (!company) return;

  const type = document.getElementById("commTypeInput").value;
  const author = document.getElementById("commAuthorInput").value.trim() || "하정";
  const memo = document.getElementById("commMemoInput").value.trim();
  const nextAction = document.getElementById("commNextActionInput").value.trim();
  const nextDate = document.getElementById("commNextDateInput").value;

  if (!memo) {
    alert("메모를 입력해줘.");
    return;
  }

  const newComm = {
    date: "2026-04-02",
    author,
    type,
    memo,
    action: nextAction,
    nextDate,
  };

  company.comms.unshift(newComm);
  company.lastContact = "2026-04-02";
  if (nextAction) company.nextAction = nextAction;
  if (nextDate) company.nextActionDate = nextDate;
  if (company.status === "장기 미접촉") company.status = "1차 접촉";

  state.logs.unshift({
    id: Date.now(),
    date: "2026-04-02",
    type,
    company: company.company,
    author,
    memo,
  });

  document.getElementById("commMemoInput").value = "";
  document.getElementById("commNextActionInput").value = "";
  document.getElementById("commNextDateInput").value = "";

  saveData();
  closeCommModal();
  renderAll();
  showPage("detail");
  switchDetailTab("comm");
}

function handleLogin(email, password) {
  const loginError = document.getElementById("loginError");
  if (email === DEMO_EMAIL && password === DEMO_PASSWORD) {
    loginError.textContent = "";
    setSession({ name: "하정", email: DEMO_EMAIL });
  } else {
    loginError.textContent = "이메일 또는 비밀번호가 올바르지 않습니다.";
  }
}

function resetDemoData() {
  if (!confirm("데모 데이터를 초기화할까?")) return;
  const session = state.session;
  state.leads = clone(defaultLeads);
  state.crm = clone(defaultCRM);
  state.logs = clone(defaultLogs);
  state.admin = clone(defaultAdmin);
  state.selectedCompanyId = state.crm[0].id;
  state.detailTab = "info";
  state.session = session;
  saveData();
  renderAll();
  showPage("dashboard");
}

function bindEvents() {
  document.getElementById("loginForm").addEventListener("submit", (event) => {
    event.preventDefault();
    handleLogin(
      document.getElementById("emailInput").value.trim(),
      document.getElementById("passwordInput").value.trim()
    );
  });

  document.getElementById("demoStartBtn").addEventListener("click", () => {
    document.getElementById("emailInput").value = DEMO_EMAIL;
    document.getElementById("passwordInput").value = DEMO_PASSWORD;
    handleLogin(DEMO_EMAIL, DEMO_PASSWORD);
  });

  document.getElementById("logoutBtn").addEventListener("click", clearSession);
  document.querySelectorAll(".nav-tab").forEach((tab) => {
    tab.addEventListener("click", () => showPage(tab.dataset.page));
  });

  document.querySelectorAll(".detail-tab-btn").forEach((btn) => {
    btn.addEventListener("click", () => switchDetailTab(btn.dataset.tab));
  });

  document.getElementById("leadSearchInput").addEventListener("input", (event) => {
    state.leadSearch = event.target.value;
    renderLeads();
  });

  document.getElementById("sourceFilter").addEventListener("change", (event) => {
    state.sourceFilter = event.target.value;
    renderLeads();
  });

  document.getElementById("backToCRMBtn").addEventListener("click", () => showPage("crm"));
  document.getElementById("closeFitModalBtn").addEventListener("click", closeFitModal);
  document.getElementById("fitModal").addEventListener("click", (event) => {
    if (event.target.id === "fitModal") closeFitModal();
  });
  document.getElementById("closeCommModalBtn").addEventListener("click", closeCommModal);
  document.getElementById("cancelCommBtn").addEventListener("click", closeCommModal);
  document.getElementById("saveCommBtn").addEventListener("click", saveCommunication);
  document.getElementById("commModal").addEventListener("click", (event) => {
    if (event.target.id === "commModal") closeCommModal();
  });
  document.getElementById("resetDemoBtn").addEventListener("click", resetDemoData);
}

function init() {
  loadData();
  bindEvents();
  updateView();
  showPage("dashboard");
}

init();