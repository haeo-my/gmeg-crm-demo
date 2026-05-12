/* =========================
   Data
========================= */
const DEFAULT_COMPANIES = [
  {
    id: 1,
    name: "호치민 섬유수출협회",
    country: "베트남",
    industry: "섬유/패션",
    type: "바이어",
    bizNo: "VN-0012345",
    homepage: "vitas.org.vn",
    contact: "Nguyen Thi Lan",
    email: "lan@vitas.org.vn",
    phone: "+84-28-3930-4765",
    contactVerified: "2025-11-10",
    trustLevel: "high",
    salesStatus: "긍정 검토",
    attendStatus: "신청 예정",
    assignee: "이하정",
    exhibition: "KIBEX2026",
    memo: "2024 KIBEX 참관 이력 있음. 2026 참가 의향 확인 완료.",
    aiSummary: "AI 요약: 가격 민감도 있으나 반응은 긍정적. 2주 내 견적 후속 추천.",
    aiAction: "견적서 + 부스 위치 제안 메일 발송",
    tags: ["VIP", "재참가가능"],
    iconClass: "ic-1",
    logs: [
      { id: 1, date: "2026-03-15", type: "전화", author: "이하정", content: "2026 KIBEX 참가 의향 확인. 긍정적 반응.", action: "견적서 발송 예정" },
      { id: 2, date: "2026-02-20", type: "이메일", author: "이수진", content: "전시회 소개 자료 발송", action: "회신 대기" }
    ],
    yearHistory: [
      { year: 2024, attended: true, boothSize: "9m²", contractAmt: 2700000, discount: 10, status: "참가완료" },
      { year: 2025, attended: false, boothSize: "-", contractAmt: 0, discount: 0, status: "미참가" }
    ]
  },
  {
    id: 2,
    name: "Hanoi Fashion Co.",
    country: "베트남",
    industry: "패션/의류",
    type: "바이어",
    bizNo: "VN-0098321",
    homepage: "hanoifashion.vn",
    contact: "Tran Van Minh",
    email: "minh@hanoifashion.vn",
    phone: "+84-24-3825-6600",
    contactVerified: "2025-06-01",
    trustLevel: "low",
    salesStatus: "미응답",
    attendStatus: "미정",
    assignee: "이수진",
    exhibition: "KIBEX2026",
    memo: "6개월 이상 연락 두절. 재컨택 필요.",
    aiSummary: "AI 요약: 최근 반응 없음. 담당자 변경 가능성 검토 필요.",
    aiAction: "전화 재컨택 후 홈페이지 정보 확인",
    tags: ["재컨택필요"],
    iconClass: "ic-2",
    logs: [
      { id: 1, date: "2025-12-10", type: "이메일", author: "이수진", content: "참가 안내 발송 - 미응답", action: "재발송 필요" }
    ],
    yearHistory: [
      { year: 2024, attended: true, boothSize: "18m²", contractAmt: 5400000, discount: 5, status: "참가완료" },
      { year: 2025, attended: true, boothSize: "18m²", contractAmt: 5800000, discount: 0, status: "참가완료" }
    ]
  },
  {
    id: 3,
    name: "삼성물산 패션부문",
    country: "한국",
    industry: "패션/유통",
    type: "참가업체",
    bizNo: "KR-1234567890",
    homepage: "samsungfashion.com",
    contact: "박지원",
    email: "jiwon.park@samsung.com",
    phone: "02-2255-1234",
    contactVerified: "2026-01-20",
    trustLevel: "high",
    salesStatus: "긍정 검토",
    attendStatus: "신청 완료",
    assignee: "이하정",
    exhibition: "KIBEX2026",
    memo: "프리미엄 부스 협의 중. 위치 선호도 확인 완료.",
    aiSummary: "AI 요약: 참가 확정 가능성 높음. 운영 협의 단계 진입.",
    aiAction: "계약서 발송 및 운영 미팅 일정 확정",
    tags: ["대기업", "VIP"],
    iconClass: "ic-3",
    logs: [
      { id: 1, date: "2026-04-01", type: "미팅", author: "이하정", content: "부스 위치 및 규모 최종 협의", action: "계약서 발송" },
      { id: 2, date: "2026-03-10", type: "전화", author: "이하정", content: "참가 확정 의사 확인", action: "신청서 접수" }
    ],
    yearHistory: [
      { year: 2023, attended: true, boothSize: "36m²", contractAmt: 10800000, discount: 15, status: "참가완료" },
      { year: 2024, attended: true, boothSize: "36m²", contractAmt: 11000000, discount: 10, status: "참가완료" },
      { year: 2025, attended: true, boothSize: "54m²", contractAmt: 16200000, discount: 10, status: "참가완료" }
    ]
  },
  {
    id: 4,
    name: "PT Moda Indonesia",
    country: "인도네시아",
    industry: "섬유/제조",
    type: "바이어",
    bizNo: "ID-778899001",
    homepage: "modaindonesia.co.id",
    contact: "Sari Dewi",
    email: "sari@modaindonesia.co.id",
    phone: "+62-21-5551-2345",
    contactVerified: "2026-02-14",
    trustLevel: "medium",
    salesStatus: "일반 검토",
    attendStatus: "미정",
    assignee: "최민준",
    exhibition: "KIBEX2026",
    memo: "인도네시아 섬유협회 소개. 초회 컨택 단계.",
    aiSummary: "AI 요약: 신규 유입. 참가 적합도 보통, 추가 정보 필요.",
    aiAction: "제품 카테고리 확인 후 맞춤 제안",
    tags: ["신규"],
    iconClass: "ic-4",
    logs: [
      { id: 1, date: "2026-03-20", type: "이메일", author: "최민준", content: "KIBEX 2026 소개 자료 발송", action: "회신 확인" }
    ],
    yearHistory: []
  },
  {
    id: 5,
    name: "LF Corporation",
    country: "한국",
    industry: "패션/유통",
    type: "참가업체",
    bizNo: "KR-9876543210",
    homepage: "lf.co.kr",
    contact: "정수현",
    email: "sh.jung@lf.co.kr",
    phone: "02-3440-5678",
    contactVerified: "2025-09-15",
    trustLevel: "medium",
    salesStatus: "부정 반응",
    attendStatus: "참가 취소",
    assignee: "이수진",
    exhibition: "KIBEX2026",
    memo: "2025 참가 후 비용 대비 효과 부족으로 이탈. 재설득 전략 필요.",
    aiSummary: "AI 요약: 이탈위험 높음. ROI 자료 기반 재접촉 필요.",
    aiAction: "성과 데이터 정리 후 재설득 미팅 제안",
    tags: ["이탈위험", "재설득필요"],
    iconClass: "ic-5",
    logs: [
      { id: 1, date: "2025-11-30", type: "전화", author: "이수진", content: "2026 참가 의향 확인 - 예산 문제로 부정적", action: "ROI 자료 준비 후 재컨택" }
    ],
    yearHistory: [
      { year: 2024, attended: true, boothSize: "27m²", contractAmt: 8100000, discount: 5, status: "참가완료" },
      { year: 2025, attended: true, boothSize: "27m²", contractAmt: 8500000, discount: 0, status: "참가완료" }
    ]
  },
  {
    id: 6,
    name: "Thai Textile Association",
    country: "태국",
    industry: "섬유",
    type: "바이어",
    bizNo: "TH-5566778899",
    homepage: "thaitextile.or.th",
    contact: "Somchai Pradit",
    email: "somchai@thaitextile.or.th",
    phone: "+66-2-713-5492",
    contactVerified: "2026-04-05",
    trustLevel: "high",
    salesStatus: "긍정 검토",
    attendStatus: "신청 예정",
    assignee: "최민준",
    exhibition: "KIBEX2026",
    memo: "협회 단체 참가 협의 중. 5개사 이상 동반 예정.",
    aiSummary: "AI 요약: 단체 참가 가능성 높음. 패키지 제안 유지 필요.",
    aiAction: "단체 참가 조건표 전달",
    tags: ["단체참가", "신규"],
    iconClass: "ic-6",
    logs: [
      { id: 1, date: "2026-04-10", type: "이메일", author: "최민준", content: "단체 참가 패키지 제안서 발송", action: "회의 일정 조율" },
      { id: 2, date: "2026-03-28", type: "전화", author: "최민준", content: "초회 컨택 - 매우 긍정적 반응", action: "제안서 준비" }
    ],
    yearHistory: []
  }
];

const DEFAULT_EXHIBITIONS = [
  { id: "KIBEX2026", name: "KIBEX 2026", date: "2026-09-10", endDate: "2026-09-13", venue: "KINTEX 1홀", status: "준비중" },
  { id: "KIMF2026", name: "KIMF 2026", date: "2026-11-05", endDate: "2026-11-08", venue: "COEX B홀", status: "준비중" },
  { id: "KIBEX2025", name: "KIBEX 2025", date: "2025-09-11", endDate: "2025-09-14", venue: "KINTEX 1홀", status: "완료" }
];

const STORAGE_KEYS = {
  companies: "gmeg_companies_multi_view_v1",
  widgets: "gmeg_dashboard_widgets_multi_view_v1",
  settings: "gmeg_settings_multi_view_v1",
  dashboardMode: "gmeg_dashboard_mode_v1",
  companyView: "gmeg_company_view_v1",
  calendarView: "gmeg_calendar_view_v1",
  logsView: "gmeg_logs_view_v1",
  historyView: "gmeg_history_view_v1",
  settingsTab: "gmeg_settings_tab_v1",
  calendarMonth: "gmeg_calendar_month_v1"
};

const WIDGET_DEFINITIONS = {
  kpi: { title: "KPI 카드", defaultSize: "xl" },
  brief: { title: "오늘의 우선 업무", defaultSize: "m" },
  schedule: { title: "다가오는 일정", defaultSize: "m" },
  aiBrief: { title: "AI 브리프", defaultSize: "m" },
  recentLogs: { title: "최근 상담 로그", defaultSize: "l" },
  risk: { title: "이탈위험 기업", defaultSize: "l" },
  yearly: { title: "연도별 참가 이력 요약", defaultSize: "m" },
  statusChart: { title: "협의 상태 분포", defaultSize: "m" }
};

const DEFAULT_WIDGET_STATE = [
  { key: "kpi", visible: true, size: "xl" },
  { key: "brief", visible: true, size: "m" },
  { key: "schedule", visible: true, size: "m" },
  { key: "aiBrief", visible: true, size: "m" },
  { key: "recentLogs", visible: true, size: "l" },
  { key: "risk", visible: true, size: "l" },
  { key: "yearly", visible: false, size: "m" },
  { key: "statusChart", visible: false, size: "m" }
];

const DEFAULT_SETTINGS = {
  users: {
    inviteEnabled: true,
    roleEditable: true,
    deleteRestricted: true
  },
  dashboard: {
    personalBrief: true,
    pmView: true,
    saveLayout: true
  },
  ai: {
    aiSummary: true,
    aiScoring: true,
    aiActionRecommend: true
  },
  data: {
    duplicateRule: "기업명+홈페이지",
    staleDays: 180,
    trustMode: "자동"
  },
  mail: {
    senderName: "GMEG CRM",
    defaultSignature: "Best regards,\nGMEG Team",
    aiDraftEnabled: true
  },
  upload: {
    allowCsv: true,
    allowXlsx: true,
    duplicateCheckOnUpload: true
  }
};

/* =========================
   State
========================= */
let companies = JSON.parse(localStorage.getItem(STORAGE_KEYS.companies) || "null") || DEFAULT_COMPANIES;
let exhibitions = DEFAULT_EXHIBITIONS;
let currentUser = "이하정";
let currentPage = "dashboard";
let selectedCompany = null;
let modalTab = "info";
let dashboardEditing = false;
let dashboardWidgets = JSON.parse(localStorage.getItem(STORAGE_KEYS.widgets) || "null") || DEFAULT_WIDGET_STATE;
let settingsState = JSON.parse(localStorage.getItem(STORAGE_KEYS.settings) || "null") || DEFAULT_SETTINGS;

let dashboardMode = localStorage.getItem(STORAGE_KEYS.dashboardMode) || "brief";
let companyViewMode = localStorage.getItem(STORAGE_KEYS.companyView) || "table";
let calendarViewMode = localStorage.getItem(STORAGE_KEYS.calendarView) || "month";
let logsViewMode = localStorage.getItem(STORAGE_KEYS.logsView) || "timeline";
let historyViewMode = localStorage.getItem(STORAGE_KEYS.historyView) || "yearly";
let settingsTab = localStorage.getItem(STORAGE_KEYS.settingsTab) || "users";

let calendarState = JSON.parse(localStorage.getItem(STORAGE_KEYS.calendarMonth) || "null") || {
  year: 2026,
  month: 8
};

let filters = {
  q: "",
  country: "전체",
  type: "전체",
  sales: "전체",
  assignee: "전체"
};

let uploadState = {
  rawRows: [],
  headers: [],
  mappedRows: [],
  previewRows: [],
  duplicates: [],
  newRows: []
};

let currentMapping = {
  name: "",
  country: "",
  industry: "",
  type: "",
  contact: "",
  email: "",
  phone: "",
  homepage: "",
  memo: ""
};

/* =========================
   DOM
========================= */
const contentEl = document.getElementById("content");
const pageTitleEl = document.getElementById("pageTitle");
const pageSubtitleEl = document.getElementById("pageSubtitle");
const topbarActionsEl = document.getElementById("topbarActions");
const riskBadgeEl = document.getElementById("riskBadge");

const companyModalEl = document.getElementById("companyModal");
const companyModalHeaderEl = document.getElementById("companyModalHeader");
const companyModalTabsEl = document.getElementById("companyModalTabs");
const companyModalBodyEl = document.getElementById("companyModalBody");

const addModalEl = document.getElementById("addModal");
const widgetModalEl = document.getElementById("widgetModal");
const widgetModalBodyEl = document.getElementById("widgetModalBody");
const mappingModalEl = document.getElementById("mappingModal");
const mappingModalBodyEl = document.getElementById("mappingModalBody");
const toastEl = document.getElementById("toast");

/* =========================
   Helpers
========================= */
function saveCompanies() {
  localStorage.setItem(STORAGE_KEYS.companies, JSON.stringify(companies));
}
function saveWidgets() {
  localStorage.setItem(STORAGE_KEYS.widgets, JSON.stringify(dashboardWidgets));
}
function saveSettings() {
  localStorage.setItem(STORAGE_KEYS.settings, JSON.stringify(settingsState));
}
function saveViewModes() {
  localStorage.setItem(STORAGE_KEYS.dashboardMode, dashboardMode);
  localStorage.setItem(STORAGE_KEYS.companyView, companyViewMode);
  localStorage.setItem(STORAGE_KEYS.calendarView, calendarViewMode);
  localStorage.setItem(STORAGE_KEYS.logsView, logsViewMode);
  localStorage.setItem(STORAGE_KEYS.historyView, historyViewMode);
  localStorage.setItem(STORAGE_KEYS.settingsTab, settingsTab);
  localStorage.setItem(STORAGE_KEYS.calendarMonth, JSON.stringify(calendarState));
}
function showToast(message) {
  toastEl.textContent = message;
  toastEl.classList.add("show");
  setTimeout(() => toastEl.classList.remove("show"), 1800);
}
function moneyShort(number) {
  if (!number || number === 0) return "-";
  if (number >= 100000000) return `₩${(number / 100000000).toFixed(1)}억`;
  return `₩${Math.round(number / 10000)}만`;
}
function badgeClass(label) {
  if (["긍정 검토", "신청 완료", "참가완료", "참가"].includes(label)) return "badge-green";
  if (["일반 검토", "신청 예정", "미팅", "이메일", "전화"].includes(label)) return "badge-blue";
  if (["미응답", "확인 필요"].includes(label)) return "badge-orange";
  if (["부정 반응", "참가 취소"].includes(label)) return "badge-red";
  if (["바이어"].includes(label)) return "badge-purple";
  if (["참가업체"].includes(label)) return "badge-pink";
  return "badge-gray";
}
function badge(label) {
  return `<span class="badge ${badgeClass(label)}">${label}</span>`;
}
function trustBadge(level) {
  const map = {
    high: { cls: "trust-high", text: "높음" },
    medium: { cls: "trust-medium", text: "보통" },
    low: { cls: "trust-low", text: "낮음" }
  };
  return `<span class="trust ${map[level].cls}">신뢰도 ${map[level].text}</span>`;
}
function companyIcon(company) {
  return `<div class="company-icon ${company.iconClass || "ic-1"}">${company.name[0]}</div>`;
}
function tagClass(tag) {
  if (["이탈위험", "재설득필요"].includes(tag)) return "tag-red";
  if (["VIP", "대기업"].includes(tag)) return "tag-yellow";
  if (["신규", "네트워크", "단체참가"].includes(tag)) return "tag-purple";
  return "tag-blue";
}
function tagHtml(tag) {
  return `<span class="tag ${tagClass(tag)}">#${tag}</span>`;
}
function ddayHtml(dateStr) {
  const today = new Date();
  const target = new Date(dateStr);
  const diff = Math.ceil((target - today) / 86400000);
  if (diff < 0) return `<span class="dday done">완료</span>`;
  if (diff < 60) return `<span class="dday soon">D-${diff}</span>`;
  return `<span class="dday">D-${diff}</span>`;
}
function companyExists(name, homepage) {
  return companies.some(c =>
    (name && c.name.trim().toLowerCase() === name.trim().toLowerCase()) ||
    (homepage && c.homepage.trim().toLowerCase() === homepage.trim().toLowerCase())
  );
}
function getAllLogs() {
  return companies.flatMap(c => c.logs.map(log => ({ ...log, companyName: c.name, companyId: c.id })));
}

/* =========================
   Navigation
========================= */
const PAGE_META = {
  dashboard: { title: "대시보드", subtitle: "오늘 확인해야 할 CRM 현황과 우선 업무" },
  companies: { title: "기업 DB", subtitle: "기업 등록, 조회, 필터링과 히스토리를 관리합니다." },
  calendar: { title: "전시 캘린더", subtitle: "월간 캘린더, 타임라인, 리스트 보기로 일정을 확인합니다." },
  uploads: { title: "파일 업로드", subtitle: "기존 기업 목록 파일을 업로드하고 CRM에 반영합니다." },
  settings: { title: "설정", subtitle: "사용자, 대시보드, AI, 데이터, 메일, 업로드 설정을 관리합니다." }
};

function setActiveNav(page) {
  document.querySelectorAll(".nav-item").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.page === page);
  });
}
function setPageMeta(page) {
  pageTitleEl.textContent = PAGE_META[page].title;
  pageSubtitleEl.textContent = PAGE_META[page].subtitle;
}
function navigate(page) {
  currentPage = page;
  setActiveNav(page);
  setPageMeta(page);
  renderTopbarActions();
  renderPage();
}
function updateRiskBadge() {
  const count = companies.filter(c => c.salesStatus === "부정 반응" || c.tags.includes("이탈위험")).length;
  if (count > 0) {
    riskBadgeEl.style.display = "";
    riskBadgeEl.textContent = count;
  } else {
    riskBadgeEl.style.display = "none";
  }
}

/* =========================
   Topbar
========================= */
function renderTopbarActions() {
  if (currentPage === "dashboard") {
    topbarActionsEl.innerHTML = `
      <button class="btn-icon" id="alarmBtn">🔔</button>
      <button class="btn btn-ghost" id="widgetAddBtn">위젯 추가</button>
      <button class="btn btn-ghost" id="widgetResetBtn">기본 복원</button>
      <button class="btn btn-primary" id="editDashboardBtn">${dashboardEditing ? "편집 완료" : "대시보드 편집"}</button>
      <button class="btn btn-primary" id="openAddBtn">+ 기업 등록</button>
    `;
    document.getElementById("alarmBtn").onclick = () => showToast("알림 기능은 추후 확장 가능합니다.");
    document.getElementById("widgetAddBtn").onclick = openWidgetModal;
    document.getElementById("widgetResetBtn").onclick = resetWidgets;
    document.getElementById("editDashboardBtn").onclick = toggleDashboardEdit;
    document.getElementById("openAddBtn").onclick = openAddModal;
    return;
  }

  if (currentPage === "companies") {
    topbarActionsEl.innerHTML = `
      <button class="btn-icon" id="alarmBtn">🔔</button>
      <button class="btn btn-ghost" id="goUploadBtn">엑셀 업로드</button>
      <button class="btn btn-primary" id="openAddBtn">+ 기업 등록</button>
    `;
    document.getElementById("alarmBtn").onclick = () => showToast("알림 기능은 추후 확장 가능합니다.");
    document.getElementById("goUploadBtn").onclick = () => navigate("uploads");
    document.getElementById("openAddBtn").onclick = openAddModal;
    return;
  }

  if (currentPage === "uploads") {
    topbarActionsEl.innerHTML = `
      <button class="btn-icon" id="alarmBtn">🔔</button>
      <button class="btn btn-primary" id="openUploadBtn">파일 선택</button>
    `;
    document.getElementById("alarmBtn").onclick = () => showToast("알림 기능은 추후 확장 가능합니다.");
    document.getElementById("openUploadBtn").onclick = () => {
      const input = document.getElementById("uploadFileInput");
      if (input) input.click();
    };
    return;
  }

  topbarActionsEl.innerHTML = `<button class="btn-icon" id="alarmBtn">🔔</button>`;
  document.getElementById("alarmBtn").onclick = () => showToast("알림 기능은 추후 확장 가능합니다.");
}

function toggleDashboardEdit() {
  dashboardEditing = !dashboardEditing;
  renderTopbarActions();
  renderPage();
}
function resetWidgets() {
  dashboardWidgets = JSON.parse(JSON.stringify(DEFAULT_WIDGET_STATE));
  saveWidgets();
  renderPage();
  showToast("기본 위젯 레이아웃으로 복원했습니다.");
}

/* =========================
   Widget Controls
========================= */
function getVisibleWidgets() {
  return dashboardWidgets.filter(w => w.visible);
}
function moveWidget(key, direction) {
  const index = dashboardWidgets.findIndex(w => w.key === key);
  if (index === -1) return;
  const target = direction === "up" ? index - 1 : index + 1;
  if (target < 0 || target >= dashboardWidgets.length) return;
  const temp = dashboardWidgets[index];
  dashboardWidgets[index] = dashboardWidgets[target];
  dashboardWidgets[target] = temp;
  saveWidgets();
  renderPage();
}
function hideWidget(key) {
  const widget = dashboardWidgets.find(w => w.key === key);
  if (!widget) return;
  widget.visible = false;
  saveWidgets();
  renderPage();
}
function restoreWidget(key) {
  const widget = dashboardWidgets.find(w => w.key === key);
  if (!widget) return;
  widget.visible = true;
  saveWidgets();
  renderPage();
  closeWidgetModal();
  showToast("위젯을 다시 추가했습니다.");
}
function cycleWidgetSize(key) {
  const widget = dashboardWidgets.find(w => w.key === key);
  if (!widget) return;
  const order = ["s", "m", "l", "xl"];
  const current = order.indexOf(widget.size || "m");
  widget.size = order[(current + 1) % order.length];
  saveWidgets();
  renderPage();
}
function widgetShell(key, innerHtml) {
  const widget = dashboardWidgets.find(w => w.key === key);
  const size = widget?.size || WIDGET_DEFINITIONS[key].defaultSize || "m";

  return `
    <div class="widget-shell size-${size} ${dashboardEditing ? "editing" : ""}" data-widget="${key}">
      <div class="widget-tools">
        <button class="widget-tool-btn" onclick="cycleWidgetSize('${key}')" title="크기 변경">□</button>
        <button class="widget-tool-btn" onclick="moveWidget('${key}', 'up')" title="위로">↑</button>
        <button class="widget-tool-btn" onclick="moveWidget('${key}', 'down')" title="아래로">↓</button>
        <button class="widget-tool-btn" onclick="hideWidget('${key}')" title="숨기기">–</button>
      </div>
      ${innerHtml}
    </div>
  `;
}

/* =========================
   Dashboard Modes
========================= */
function setDashboardMode(mode) {
  dashboardMode = mode;
  saveViewModes();
  renderPage();
}
function renderDashboardModeTabs() {
  return `
    <div class="view-tabs">
      <button class="view-tab-btn ${dashboardMode === "brief" ? "active" : ""}" onclick="setDashboardMode('brief')">브리프</button>
      <button class="view-tab-btn ${dashboardMode === "operational" ? "active" : ""}" onclick="setDashboardMode('operational')">운영</button>
      <button class="view-tab-btn ${dashboardMode === "pm" ? "active" : ""}" onclick="setDashboardMode('pm')">PM</button>
    </div>
  `;
}

/* =========================
   Dashboard Widgets
========================= */
function renderKpiWidget() {
  const totalCompanies = companies.length;
  const riskyCompanies = companies.filter(c => c.salesStatus === "부정 반응" || c.tags.includes("이탈위험")).length;
  const appliedCompanies = companies.filter(c => c.attendStatus === "신청 완료").length;
  const totalRev = companies.reduce((sum, c) => {
    const recent = c.yearHistory[c.yearHistory.length - 1];
    return sum + (recent?.contractAmt || 0);
  }, 0);

  return widgetShell("kpi", `
    <div class="kpi-grid">
      <div class="kpi-card">
        <div class="kpi-icon-wrap" style="background:var(--purple-light);color:var(--purple)">🏢</div>
        <div class="kpi-value">${totalCompanies}</div>
        <div class="kpi-label">전체 기업</div>
        <div class="kpi-trend neutral">통합 DB</div>
      </div>
      <div class="kpi-card">
        <div class="kpi-icon-wrap" style="background:var(--red-bg);color:var(--red)">⚠</div>
        <div class="kpi-value">${riskyCompanies}</div>
        <div class="kpi-label">이탈위험 기업</div>
        <div class="kpi-trend down">즉시 대응 필요</div>
      </div>
      <div class="kpi-card">
        <div class="kpi-icon-wrap" style="background:var(--green-bg);color:var(--green)">✓</div>
        <div class="kpi-value">${appliedCompanies}</div>
        <div class="kpi-label">신청 완료</div>
        <div class="kpi-trend">KIBEX 2026</div>
      </div>
      <div class="kpi-card">
        <div class="kpi-icon-wrap" style="background:var(--blue-bg);color:var(--blue)">₩</div>
        <div class="kpi-value" style="font-size:22px">${moneyShort(totalRev)}</div>
        <div class="kpi-label">최근 계약 총액</div>
        <div class="kpi-trend neutral">참가기업 합산</div>
      </div>
    </div>
  `);
}

function renderBriefWidget() {
  const myList = companies.filter(c => c.assignee === currentUser);
  const urgent = myList.filter(c =>
    ["미응답", "확인 필요"].includes(c.salesStatus) ||
    c.tags.some(tag => ["재컨택필요", "이탈위험", "재설득필요"].includes(tag))
  );

  return widgetShell("brief", `
    <div class="card compact-card">
      <div class="card-header">
        <span class="card-title">📋 오늘의 우선 업무</span>
        <span class="text-xs">${myList.length}개 담당</span>
      </div>
      <div class="card-body">
        ${
          urgent.length === 0
            ? `<div class="empty"><div class="empty-text">즉시 처리할 액션이 없습니다.</div></div>`
            : urgent.slice(0, 5).map(c => `
              <div class="brief-item" onclick="openCompany(${c.id})">
                <div class="brief-icon" style="background:var(--red-bg);color:var(--red)">!</div>
                <div style="flex:1;min-width:0;">
                  <div class="brief-name">${c.name}</div>
                  <div class="brief-sub">${c.aiAction}</div>
                  <div class="brief-sub">담당: ${c.assignee}</div>
                </div>
                ${badge(c.salesStatus)}
              </div>
            `).join("")
        }
      </div>
    </div>
  `);
}

function renderScheduleWidget() {
  const upcoming = exhibitions
    .filter(e => new Date(e.date) > new Date())
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .slice(0, 5);

  return widgetShell("schedule", `
    <div class="card compact-card">
      <div class="card-header">
        <span class="card-title">📅 일정</span>
      </div>
      <div class="card-body">
        ${upcoming.map(e => `
          <div class="brief-item" style="cursor:default;">
            <div class="brief-icon" style="background:var(--purple-light);color:var(--purple)">📆</div>
            <div style="flex:1;">
              <div class="brief-name">${e.name}</div>
              <div class="brief-sub">${e.date}</div>
            </div>
            ${ddayHtml(e.date)}
          </div>
        `).join("")}
      </div>
    </div>
  `);
}

function renderAiBriefWidget() {
  const checkCount = companies.filter(c => c.trustLevel !== "high" || c.salesStatus === "확인 필요").length;
  const noResponseCount = companies.filter(c => c.salesStatus === "미응답").length;
  const targets = companies.filter(c => c.salesStatus !== "신청 완료").slice(0, 3);

  return widgetShell("aiBrief", `
    <div class="card compact-card">
      <div class="card-header">
        <span class="card-title">🤖 AI 브리프</span>
        <span class="text-xs">정리 · 추천</span>
      </div>
      <div class="card-body">
        <div class="brief-item" style="cursor:default;">
          <div class="brief-icon" style="background:var(--purple-light);color:var(--purple)">AI</div>
          <div style="flex:1;">
            <div class="brief-name">오늘의 요약</div>
            <div class="brief-sub">확인 필요 데이터 ${checkCount}건, 미응답 기업 ${noResponseCount}건</div>
          </div>
        </div>
        ${targets.map(c => `
          <div class="brief-item" onclick="openCompany(${c.id})">
            <div class="brief-icon" style="background:var(--purple-light);color:var(--purple)">→</div>
            <div style="flex:1;">
              <div class="brief-name">${c.name}</div>
              <div class="brief-sub">${c.aiSummary}</div>
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  `);
}

function renderRecentLogsWidget() {
  const recentLogs = getAllLogs()
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 5);

  return widgetShell("recentLogs", `
    <div class="card compact-card">
      <div class="card-header">
        <span class="card-title">📝 최근 상담 로그</span>
        <span class="text-xs">${recentLogs.length}건</span>
      </div>
      <div class="card-body">
        ${recentLogs.map(log => `
          <div class="brief-item" onclick="openCompany(${log.companyId})">
            <div class="brief-icon" style="background:var(--blue-bg);color:var(--blue)">✎</div>
            <div style="flex:1;">
              <div class="brief-name">${log.companyName}</div>
              <div class="brief-sub">${log.type} · ${log.date}</div>
              <div class="brief-sub">${log.action}</div>
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  `);
}

function renderRiskWidget() {
  const riskList = companies.filter(c => c.salesStatus === "부정 반응" || c.tags.includes("이탈위험")).slice(0, 5);

  return widgetShell("risk", `
    <div class="card compact-card">
      <div class="card-header">
        <span class="card-title">🚨 이탈위험 기업</span>
        <span class="text-xs" style="color:var(--red)">${riskList.length}건</span>
      </div>
      <div class="card-body">
        ${
          riskList.length === 0
            ? `<div class="empty"><div class="empty-text">이탈위험 기업 없음</div></div>`
            : riskList.map(c => `
              <div class="brief-item" onclick="openCompany(${c.id})">
                ${companyIcon(c)}
                <div style="flex:1;">
                  <div class="brief-name">${c.name}</div>
                  <div class="brief-sub">${c.aiAction}</div>
                  <div class="brief-sub">${c.assignee} · ${c.country}</div>
                </div>
                ${badge(c.salesStatus)}
              </div>
            `).join("")
        }
      </div>
    </div>
  `);
}

function renderYearlyWidget() {
  const currentYearApplied = companies.filter(c => c.attendStatus === "신청 완료").length;
  const previousJoined = companies.filter(c => c.yearHistory.some(y => y.year === 2025 && y.attended)).length;

  return widgetShell("yearly", `
    <div class="card compact-card">
      <div class="card-header">
        <span class="card-title">📚 연도별 참가 이력 요약</span>
      </div>
      <div class="card-body">
        <div class="brief-item" style="cursor:default;">
          <div class="brief-icon" style="background:var(--green-bg);color:var(--green)">26</div>
          <div style="flex:1;">
            <div class="brief-name">2026 진행</div>
            <div class="brief-sub">신청 완료 ${currentYearApplied}개</div>
          </div>
        </div>
        <div class="brief-item" style="cursor:default;">
          <div class="brief-icon" style="background:var(--blue-bg);color:var(--blue)">25</div>
          <div style="flex:1;">
            <div class="brief-name">2025 이력</div>
            <div class="brief-sub">작년 참가 ${previousJoined}개</div>
          </div>
        </div>
      </div>
    </div>
  `);
}

function renderStatusChartWidget() {
  const statuses = ["긍정 검토", "일반 검토", "미응답", "부정 반응", "확인 필요"];
  const colors = {
    "긍정 검토": "var(--green)",
    "일반 검토": "var(--blue)",
    "미응답": "var(--orange)",
    "부정 반응": "var(--red)",
    "확인 필요": "var(--purple)"
  };

  return widgetShell("statusChart", `
    <div class="card compact-card">
      <div class="card-header">
        <span class="card-title">📊 협의 상태 분포</span>
        <span class="text-xs">전체 ${companies.length}개</span>
      </div>
      <div class="card-body">
        ${statuses.map(status => {
          const count = companies.filter(c => c.salesStatus === status).length;
          const width = companies.length ? (count / companies.length) * 100 : 0;
          return `
            <div class="progress-row">
              ${badge(status)}
              <div class="progress-bar-wrap">
                <div class="progress-bar-fill" style="width:${width}%;background:${colors[status]}"></div>
              </div>
              <span class="progress-count">${count}</span>
            </div>
          `;
        }).join("")}
      </div>
    </div>
  `);
}

function renderDashboardByMode() {
  const widgetRenderMap = {
    kpi: renderKpiWidget,
    brief: renderBriefWidget,
    schedule: renderScheduleWidget,
    aiBrief: renderAiBriefWidget,
    recentLogs: renderRecentLogsWidget,
    risk: renderRiskWidget,
    yearly: renderYearlyWidget,
    statusChart: renderStatusChartWidget
  };

  let visibleKeys;
  if (dashboardMode === "brief") {
    visibleKeys = ["kpi", "brief", "schedule", "aiBrief"];
  } else if (dashboardMode === "operational") {
    visibleKeys = ["kpi", "recentLogs", "risk", "statusChart"];
  } else {
    visibleKeys = ["kpi", "risk", "yearly", "statusChart"];
  }

  const ordered = dashboardWidgets.filter(w => w.visible && visibleKeys.includes(w.key));

  let html = `
    <div class="section-gap flex-between">
      <div>${renderDashboardModeTabs()}</div>
      <div class="text-xs">보기 모드 전환 가능</div>
    </div>
    <div class="widget-board">
  `;

  ordered.forEach(widget => {
    html += widgetRenderMap[widget.key]();
  });

  html += `</div>`;
  return html;
}

function renderDashboard() {
  return renderDashboardByMode();
}

/* =========================
   Company View Modes
========================= */
function setCompanyView(mode) {
  companyViewMode = mode;
  saveViewModes();
  renderPage();
}
function renderCompanyViewTabs() {
  return `
    <div class="view-tabs">
      <button class="view-tab-btn ${companyViewMode === "table" ? "active" : ""}" onclick="setCompanyView('table')">표</button>
      <button class="view-tab-btn ${companyViewMode === "card" ? "active" : ""}" onclick="setCompanyView('card')">카드</button>
      <button class="view-tab-btn ${companyViewMode === "board" ? "active" : ""}" onclick="setCompanyView('board')">보드</button>
    </div>
  `;
}
function getFilteredCompanies() {
  return companies.filter(c => {
    const q = filters.q.toLowerCase();
    const searchPass =
      !q ||
      c.name.toLowerCase().includes(q) ||
      c.contact.toLowerCase().includes(q) ||
      c.industry.toLowerCase().includes(q) ||
      c.email.toLowerCase().includes(q);

    return searchPass
      && (filters.country === "전체" || c.country === filters.country)
      && (filters.type === "전체" || c.type === filters.type)
      && (filters.sales === "전체" || c.salesStatus === filters.sales)
      && (filters.assignee === "전체" || c.assignee === filters.assignee);
  });
}
function renderCompanyTable(filtered) {
  return `
    <div class="card">
      <div class="table-wrap">
        <table class="data-table" id="companyTable">
          <thead>
            <tr>
              <th>기업 정보</th>
              <th>국가</th>
              <th>유형</th>
              <th>협의상태</th>
              <th>참가상태</th>
              <th>담당직원</th>
              <th>신뢰도</th>
              <th>태그</th>
              <th>AI 요약</th>
            </tr>
          </thead>
          <tbody>
            ${
              filtered.length === 0
                ? `<tr><td colspan="9"><div class="empty"><div class="empty-text">검색 결과가 없습니다.</div></div></td></tr>`
                : filtered.map(c => `
                  <tr data-id="${c.id}">
                    <td>
                      <div class="company-cell">
                        ${companyIcon(c)}
                        <div>
                          <div class="company-name">${c.name}</div>
                          <div class="company-sub">${c.contact} · ${c.industry}</div>
                        </div>
                      </div>
                    </td>
                    <td>${c.country}</td>
                    <td>${badge(c.type)}</td>
                    <td>${badge(c.salesStatus)}</td>
                    <td>${badge(c.attendStatus)}</td>
                    <td>${c.assignee}</td>
                    <td>${trustBadge(c.trustLevel)}</td>
                    <td><div style="display:flex;gap:4px;flex-wrap:wrap;">${c.tags.slice(0,2).map(tagHtml).join("")}</div></td>
                    <td>${c.aiSummary}</td>
                  </tr>
                `).join("")
            }
          </tbody>
        </table>
      </div>
    </div>
  `;
}
function renderCompanyCards(filtered) {
  return `
    <div class="card-view-grid">
      ${filtered.map(c => `
        <div class="company-card" onclick="openCompany(${c.id})">
          <div class="company-card-top">
            ${companyIcon(c)}
            <div style="min-width:0;">
              <div class="company-name">${c.name}</div>
              <div class="company-sub">${c.country} · ${c.industry}</div>
            </div>
          </div>
          <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:10px;">
            ${badge(c.type)}
            ${badge(c.salesStatus)}
            ${badge(c.attendStatus)}
          </div>
          <div class="brief-sub" style="margin-bottom:8px;">${c.aiSummary}</div>
          <div style="display:flex;gap:4px;flex-wrap:wrap;">${c.tags.map(tagHtml).join("")}</div>
        </div>
      `).join("")}
    </div>
  `;
}
function renderCompanyBoard(filtered) {
  const columns = ["일반 검토", "긍정 검토", "신청 예정", "신청 완료", "부정 반응"];
  return `
    <div class="board-columns">
      ${columns.map(status => `
        <div class="board-column">
          <div class="board-column-title">${status}</div>
          ${filtered.filter(c => c.salesStatus === status || c.attendStatus === status).map(c => `
            <div class="board-card" onclick="openCompany(${c.id})">
              <div class="company-name">${c.name}</div>
              <div class="company-sub">${c.country} · ${c.assignee}</div>
              <div style="margin-top:8px;display:flex;gap:4px;flex-wrap:wrap;">
                ${badge(c.type)}
                ${trustBadge(c.trustLevel)}
              </div>
            </div>
          `).join("") || `<div class="empty" style="padding:20px 10px;"><div class="empty-sub">데이터 없음</div></div>`}
        </div>
      `).join("")}
    </div>
  `;
}
function renderCompaniesPage() {
  const countries = ["전체", ...new Set(companies.map(c => c.country))];
  const assignees = ["전체", ...new Set(companies.map(c => c.assignee))];
  const filtered = getFilteredCompanies();

  let viewHtml = "";
  if (companyViewMode === "table") viewHtml = renderCompanyTable(filtered);
  if (companyViewMode === "card") viewHtml = renderCompanyCards(filtered);
  if (companyViewMode === "board") viewHtml = renderCompanyBoard(filtered);

  return `
    <div class="card section-gap" style="overflow:hidden;">
      <div class="filter-bar">
        <div class="search-wrap">
          <span class="search-icon">⌕</span>
          <input class="search-input" id="searchInput" placeholder="기업명, 담당자, 산업군 검색..." value="${filters.q}">
        </div>
        <select class="filter-select" id="countryFilter">
          ${countries.map(c => `<option value="${c}" ${c === filters.country ? "selected" : ""}>${c === "전체" ? "국가: 전체" : c}</option>`).join("")}
        </select>
        <select class="filter-select" id="typeFilter">
          ${["전체", "바이어", "참가업체", "고객"].map(t => `<option value="${t}" ${t === filters.type ? "selected" : ""}>${t === "전체" ? "유형: 전체" : t}</option>`).join("")}
        </select>
        <select class="filter-select" id="salesFilter">
          ${["전체", "긍정 검토", "일반 검토", "미응답", "부정 반응", "확인 필요"].map(s => `<option value="${s}" ${s === filters.sales ? "selected" : ""}>${s === "전체" ? "상태: 전체" : s}</option>`).join("")}
        </select>
        <select class="filter-select" id="assigneeFilter">
          ${assignees.map(a => `<option value="${a}" ${a === filters.assignee ? "selected" : ""}>${a === "전체" ? "담당: 전체" : a}</option>`).join("")}
        </select>
        <span class="filter-count">${filtered.length}개 기업</span>
      </div>
    </div>

    <div class="section-gap flex-between">
      <div>${renderCompanyViewTabs()}</div>
      <div class="text-xs">보기 방식 전환 가능</div>
    </div>

    ${viewHtml}
  `;
}

function bindCompaniesPageEvents() {
  const searchInput = document.getElementById("searchInput");
  const countryFilter = document.getElementById("countryFilter");
  const typeFilter = document.getElementById("typeFilter");
  const salesFilter = document.getElementById("salesFilter");
  const assigneeFilter = document.getElementById("assigneeFilter");

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      filters.q = e.target.value;
      renderPage();
    });
  }
  if (countryFilter) {
    countryFilter.addEventListener("change", (e) => {
      filters.country = e.target.value;
      renderPage();
    });
  }
  if (typeFilter) {
    typeFilter.addEventListener("change", (e) => {
      filters.type = e.target.value;
      renderPage();
    });
  }
  if (salesFilter) {
    salesFilter.addEventListener("change", (e) => {
      filters.sales = e.target.value;
      renderPage();
    });
  }
  if (assigneeFilter) {
    assigneeFilter.addEventListener("change", (e) => {
      filters.assignee = e.target.value;
      renderPage();
    });
  }

  document.querySelectorAll("#companyTable tbody tr[data-id]").forEach(row => {
    row.addEventListener("click", () => openCompany(parseInt(row.dataset.id, 10)));
  });
}

/* =========================
   Calendar Views
========================= */
function setCalendarView(mode) {
  calendarViewMode = mode;
  saveViewModes();
  renderPage();
}
function renderCalendarViewTabs() {
  return `
    <div class="view-tabs">
      <button class="view-tab-btn ${calendarViewMode === "month" ? "active" : ""}" onclick="setCalendarView('month')">월간 캘린더</button>
      <button class="view-tab-btn ${calendarViewMode === "timeline" ? "active" : ""}" onclick="setCalendarView('timeline')">타임라인</button>
      <button class="view-tab-btn ${calendarViewMode === "list" ? "active" : ""}" onclick="setCalendarView('list')">리스트</button>
    </div>
  `;
}
function changeCalendarMonth(offset) {
  let y = calendarState.year;
  let m = calendarState.month + offset;
  if (m < 0) { y -= 1; m = 11; }
  if (m > 11) { y += 1; m = 0; }
  calendarState = { year: y, month: m };
  saveViewModes();
  renderPage();
}
function getCalendarEvents() {
  const exhibitionEvents = exhibitions.map(e => ({ date: e.date, title: e.name, type: "전시" }));
  const logEvents = getAllLogs().map(log => ({ date: log.date, title: `${log.companyName} ${log.type}`, type: "컨택" }));
  return [...exhibitionEvents, ...logEvents];
}
function renderCalendarMonthView() {
  const year = calendarState.year;
  const month = calendarState.month;
  const firstDay = new Date(year, month, 1);
  const lastDate = new Date(year, month + 1, 0).getDate();
  const startWeekday = firstDay.getDay();
  const events = getCalendarEvents();
  const monthTitle = `${year}년 ${month + 1}월`;

  const weekdays = ["일", "월", "화", "수", "목", "금", "토"];
  let cells = [];

  for (let i = 0; i < startWeekday; i++) {
    cells.push(`<div class="calendar-day"></div>`);
  }

  for (let day = 1; day <= lastDate; day++) {
    const dateKey = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    const dayEvents = events.filter(ev => ev.date === dateKey).slice(0, 3);
    cells.push(`
      <div class="calendar-day">
        <div class="day-number">${day}</div>
        <div class="day-events">
          ${dayEvents.map(ev => `<div class="day-event">${ev.title}</div>`).join("")}
        </div>
      </div>
    `);
  }

  return `
    <div class="card">
      <div class="card-header">
        <div class="calendar-nav">
          <button class="btn btn-ghost btn-sm" onclick="changeCalendarMonth(-1)">←</button>
          <span class="calendar-month-title">${monthTitle}</span>
          <button class="btn btn-ghost btn-sm" onclick="changeCalendarMonth(1)">→</button>
        </div>
      </div>
      <div class="card-body">
        <div class="calendar-grid-month">
          ${weekdays.map(day => `<div class="calendar-weekday">${day}</div>`).join("")}
          ${cells.join("")}
        </div>
      </div>
    </div>
  `;
}
function renderCalendarTimelineView() {
  const events = getCalendarEvents().sort((a, b) => new Date(a.date) - new Date(b.date));
  return `
    <div class="card">
      <div class="card-header">
        <span class="card-title">전체 활동 타임라인</span>
      </div>
      <div class="card-body">
        ${events.map(ev => `
          <div class="timeline-item">
            <span class="timeline-date">${ev.date}</span>
            <div class="timeline-dot" style="background:${ev.type === "전시" ? "#7c5cff" : "#3b82f6"}"></div>
            <span class="timeline-content">
              ${ev.title}
              <span class="timeline-tag" style="color:${ev.type === "전시" ? "#7c5cff" : "#3b82f6"};background:${ev.type === "전시" ? "#7c5cff15" : "#3b82f615"}">${ev.type}</span>
            </span>
          </div>
        `).join("")}
      </div>
    </div>
  `;
}
function renderCalendarListView() {
  const events = getCalendarEvents().sort((a, b) => new Date(a.date) - new Date(b.date));
  return `
    <div class="card">
      <div class="card-header">
        <span class="card-title">일정 리스트</span>
      </div>
      <div class="card-body">
        ${events.map(ev => `
          <div class="brief-item" style="cursor:default;">
            <div class="brief-icon" style="background:${ev.type === "전시" ? "var(--purple-light)" : "var(--blue-bg)"};color:${ev.type === "전시" ? "var(--purple)" : "var(--blue)"}">${ev.type === "전시" ? "📅" : "✎"}</div>
            <div style="flex:1;">
              <div class="brief-name">${ev.title}</div>
              <div class="brief-sub">${ev.date} · ${ev.type}</div>
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  `;
}
function renderCalendarPage() {
  let body = "";
  if (calendarViewMode === "month") body = renderCalendarMonthView();
  if (calendarViewMode === "timeline") body = renderCalendarTimelineView();
  if (calendarViewMode === "list") body = renderCalendarListView();

  return `
    <div class="section-gap flex-between">
      <div>${renderCalendarViewTabs()}</div>
      <div class="text-xs">보기 방식 전환 가능</div>
    </div>
    ${body}
  `;
}

/* =========================
   Upload
========================= */
function renderUploadsPage() {
  return `
    <div class="card section-gap">
      <div class="card-header">
        <span class="card-title">📁 기업 목록 업로드</span>
        <span class="text-xs">CSV / XLSX 지원</span>
      </div>
      <div class="card-body">
        <div class="upload-dropzone">
          <div class="upload-title">기존 기업 목록 파일을 업로드하세요</div>
          <div class="upload-sub">CSV 또는 XLSX 파일을 업로드하면 컬럼 매핑 후 CRM에 반영할 수 있습니다.</div>
          <div class="upload-actions">
            <button class="btn btn-primary" onclick="document.getElementById('uploadFileInput').click()">파일 선택</button>
            <button class="btn btn-ghost" onclick="downloadSampleCsv()">샘플 CSV 다운로드</button>
          </div>
          <input class="upload-hidden-input" type="file" id="uploadFileInput" accept=".csv,.xlsx,.xls" />
        </div>
      </div>
    </div>

    <div class="upload-summary section-gap">
      <div class="summary-box">
        <div class="summary-label">업로드 행 수</div>
        <div class="summary-value">${uploadState.rawRows.length}</div>
      </div>
      <div class="summary-box">
        <div class="summary-label">신규 데이터</div>
        <div class="summary-value">${uploadState.newRows.length}</div>
      </div>
      <div class="summary-box">
        <div class="summary-label">중복 의심</div>
        <div class="summary-value">${uploadState.duplicates.length}</div>
      </div>
    </div>

    <div class="grid-2">
      <div class="card">
        <div class="card-header">
          <span class="card-title">업로드 미리보기</span>
        </div>
        <div class="card-body">
          ${
            uploadState.previewRows.length === 0
              ? `<div class="empty"><div class="empty-text">아직 업로드된 파일이 없습니다.</div></div>`
              : `
                <div class="table-wrap">
                  <table class="data-table">
                    <thead>
                      <tr>
                        <th>기업명</th>
                        <th>국가</th>
                        <th>유형</th>
                        <th>담당자</th>
                        <th>이메일</th>
                      </tr>
                    </thead>
                    <tbody>
                      ${uploadState.previewRows.map(row => `
                        <tr>
                          <td>${row.name || "-"}</td>
                          <td>${row.country || "-"}</td>
                          <td>${row.type || "-"}</td>
                          <td>${row.contact || "-"}</td>
                          <td>${row.email || "-"}</td>
                        </tr>
                      `).join("")}
                    </tbody>
                  </table>
                </div>
              `
          }
        </div>
      </div>

      <div class="card">
        <div class="card-header">
          <span class="card-title">업로드 결과</span>
        </div>
        <div class="card-body">
          <div class="brief-item" style="cursor:default;">
            <div class="brief-icon" style="background:var(--green-bg);color:var(--green)">N</div>
            <div style="flex:1;">
              <div class="brief-name">신규 등록 가능</div>
              <div class="brief-sub">${uploadState.newRows.length}건</div>
            </div>
          </div>
          <div class="brief-item" style="cursor:default;">
            <div class="brief-icon" style="background:var(--orange-bg);color:var(--orange)">D</div>
            <div style="flex:1;">
              <div class="brief-name">중복 의심</div>
              <div class="brief-sub">${uploadState.duplicates.length}건</div>
            </div>
          </div>
          <div style="margin-top:12px;display:flex;gap:8px;flex-wrap:wrap;">
            <button class="btn btn-primary" onclick="commitUploadRows()" ${uploadState.newRows.length === 0 ? "disabled" : ""}>신규 데이터 등록</button>
            <button class="btn btn-ghost" onclick="clearUploadState()">업로드 초기화</button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function bindUploadEvents() {
  const input = document.getElementById("uploadFileInput");
  if (!input) return;
  input.addEventListener("change", async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    await readUploadFile(file);
  });
}

async function readUploadFile(file) {
  const fileName = file.name.toLowerCase();

  if (fileName.endsWith(".csv")) {
    const text = await file.text();
    const rows = parseCsv(text);
    prepareUpload(rows);
    return;
  }

  if (fileName.endsWith(".xlsx") || fileName.endsWith(".xls")) {
    const buffer = await file.arrayBuffer();
    const workbook = XLSX.read(buffer, { type: "array" });
    const firstSheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[firstSheetName];
    const json = XLSX.utils.sheet_to_json(sheet, { defval: "" });
    prepareUpload(json);
    return;
  }

  showToast("CSV 또는 XLSX 파일만 업로드할 수 있습니다.");
}

function parseCsv(text) {
  const lines = text.split(/\r?\n/).filter(Boolean);
  if (lines.length === 0) return [];
  const headers = lines[0].split(",").map(h => h.trim());

  return lines.slice(1).map(line => {
    const values = line.split(",").map(v => v.trim());
    const row = {};
    headers.forEach((header, index) => {
      row[header] = values[index] || "";
    });
    return row;
  });
}

function prepareUpload(rows) {
  if (!rows || rows.length === 0) {
    showToast("파일에 데이터가 없습니다.");
    return;
  }

  uploadState.rawRows = rows;
  uploadState.headers = Object.keys(rows[0] || {});
  currentMapping = guessMapping(uploadState.headers);
  openMappingModal();
}

function guessMapping(headers) {
  const findHeader = (keywords) => headers.find(h =>
    keywords.some(k => h.toLowerCase().includes(k))
  ) || "";

  return {
    name: findHeader(["기업", "회사", "company", "name"]),
    country: findHeader(["국가", "country"]),
    industry: findHeader(["산업", "업종", "industry", "category"]),
    type: findHeader(["유형", "type"]),
    contact: findHeader(["담당", "대표", "contact", "manager"]),
    email: findHeader(["mail", "email", "이메일"]),
    phone: findHeader(["전화", "phone", "tel"]),
    homepage: findHeader(["홈페이지", "website", "site", "url"]),
    memo: findHeader(["메모", "비고", "memo", "note"])
  };
}

function openMappingModal() {
  renderMappingModal();
  mappingModalEl.classList.add("open");
}

function closeMappingModal() {
  mappingModalEl.classList.remove("open");
}

function renderMappingModal() {
  const headers = uploadState.headers;

  const selectHtml = (field, label) => `
    <div class="mapping-item">
      <div class="mapping-label">${label}</div>
      <select class="form-select mapping-select" data-field="${field}">
        <option value="">선택 안 함</option>
        ${headers.map(h => `<option value="${h}" ${currentMapping[field] === h ? "selected" : ""}>${h}</option>`).join("")}
      </select>
    </div>
  `;

  mappingModalBodyEl.innerHTML = `
    <div class="mapping-grid">
      ${selectHtml("name", "기업명")}
      ${selectHtml("country", "국가")}
      ${selectHtml("industry", "산업군")}
      ${selectHtml("type", "유형")}
      ${selectHtml("contact", "담당자")}
      ${selectHtml("email", "이메일")}
      ${selectHtml("phone", "전화번호")}
      ${selectHtml("homepage", "홈페이지")}
      ${selectHtml("memo", "메모")}
    </div>
  `;

  document.querySelectorAll(".mapping-select").forEach(select => {
    select.addEventListener("change", (e) => {
      currentMapping[e.target.dataset.field] = e.target.value;
    });
  });
}

function applyMapping() {
  if (!currentMapping.name) {
    showToast("기업명 컬럼은 반드시 지정해야 합니다.");
    return;
  }

  const mapped = uploadState.rawRows.map(row => ({
    name: currentMapping.name ? row[currentMapping.name] : "",
    country: currentMapping.country ? row[currentMapping.country] : "",
    industry: currentMapping.industry ? row[currentMapping.industry] : "",
    type: currentMapping.type ? row[currentMapping.type] : "바이어",
    contact: currentMapping.contact ? row[currentMapping.contact] : "",
    email: currentMapping.email ? row[currentMapping.email] : "",
    phone: currentMapping.phone ? row[currentMapping.phone] : "",
    homepage: currentMapping.homepage ? row[currentMapping.homepage] : "",
    memo: currentMapping.memo ? row[currentMapping.memo] : ""
  }));

  uploadState.mappedRows = mapped;
  uploadState.previewRows = mapped.slice(0, 8);
  uploadState.duplicates = mapped.filter(row => companyExists(row.name, row.homepage));
  uploadState.newRows = mapped.filter(row => !companyExists(row.name, row.homepage));

  closeMappingModal();
  navigate("uploads");
  showToast("컬럼 매핑을 적용했습니다.");
}

function commitUploadRows() {
  if (uploadState.newRows.length === 0) {
    showToast("등록할 신규 데이터가 없습니다.");
    return;
  }

  const newCompanies = uploadState.newRows.map((row, index) => ({
    id: Date.now() + index,
    name: row.name || "미정",
    country: row.country || "미정",
    industry: row.industry || "-",
    type: row.type || "바이어",
    bizNo: "-",
    homepage: row.homepage || "-",
    contact: row.contact || "-",
    email: row.email || "-",
    phone: row.phone || "-",
    contactVerified: new Date().toISOString().slice(0, 10),
    trustLevel: "medium",
    salesStatus: "일반 검토",
    attendStatus: "미정",
    assignee: currentUser,
    exhibition: "KIBEX2026",
    memo: row.memo || "-",
    aiSummary: "AI 요약: 업로드된 신규 데이터. 기본 검수 필요.",
    aiAction: "기본 정보 확인 후 첫 컨택 진행",
    tags: ["업로드신규"],
    iconClass: "ic-1",
    logs: [],
    yearHistory: []
  }));

  companies = [...newCompanies, ...companies];
  saveCompanies();
  clearUploadState(false);
  renderPage();
  updateRiskBadge();
  showToast(`${newCompanies.length}개 기업을 등록했습니다.`);
}

function clearUploadState(showMessage = true) {
  uploadState = {
    rawRows: [],
    headers: [],
    mappedRows: [],
    previewRows: [],
    duplicates: [],
    newRows: []
  };
  currentMapping = {
    name: "",
    country: "",
    industry: "",
    type: "",
    contact: "",
    email: "",
    phone: "",
    homepage: "",
    memo: ""
  };
  if (showMessage) showToast("업로드 상태를 초기화했습니다.");
  if (currentPage === "uploads") renderPage();
}

function downloadSampleCsv() {
  const csv = [
    "기업명,국가,산업군,유형,담당자,이메일,전화번호,홈페이지,메모",
    "Sample Textile Co,베트남,섬유/패션,바이어,Nguyen Van A,sample@example.com,+84-111-222-3333,sample.vn,샘플 메모"
  ].join("\n");

  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "gmeg_sample_upload.csv";
  a.click();
  URL.revokeObjectURL(url);
}

/* =========================
   Settings
========================= */
function renderSettingsPage() {
  return `
    <div class="settings-layout">
      <div class="settings-side">
        <button class="settings-tab-btn ${settingsTab === "users" ? "active" : ""}" onclick="changeSettingsTab('users')">사용자·권한</button>
        <button class="settings-tab-btn ${settingsTab === "dashboard" ? "active" : ""}" onclick="changeSettingsTab('dashboard')">대시보드</button>
        <button class="settings-tab-btn ${settingsTab === "ai" ? "active" : ""}" onclick="changeSettingsTab('ai')">AI 설정</button>
        <button class="settings-tab-btn ${settingsTab === "data" ? "active" : ""}" onclick="changeSettingsTab('data')">데이터 설정</button>
        <button class="settings-tab-btn ${settingsTab === "mail" ? "active" : ""}" onclick="changeSettingsTab('mail')">메일 설정</button>
        <button class="settings-tab-btn ${settingsTab === "upload" ? "active" : ""}" onclick="changeSettingsTab('upload')">업로드 설정</button>
      </div>

      <div class="settings-content">
        ${renderSettingsTabContent()}
      </div>
    </div>
  `;
}

function renderSettingsTabContent() {
  if (settingsTab === "users") {
    return `
      <div class="settings-group">
        <div class="settings-group-title">사용자 및 권한 관리</div>
        ${settingsItem("관리자 초대 허용", "관리자만 구성원 초대 가능", settingsState.users.inviteEnabled, "users", "inviteEnabled")}
        ${settingsItem("역할 수정 허용", "관리자가 직급/권한 변경 가능", settingsState.users.roleEditable, "users", "roleEditable")}
        ${settingsItem("삭제 권한 제한", "삭제는 관리자만 가능", settingsState.users.deleteRestricted, "users", "deleteRestricted")}
      </div>
    `;
  }

  if (settingsTab === "dashboard") {
    return `
      <div class="settings-group">
        <div class="settings-group-title">대시보드 설정</div>
        ${settingsItem("개인 브리프 표시", "사용자별 우선 업무 위젯 표시", settingsState.dashboard.personalBrief, "dashboard", "personalBrief")}
        ${settingsItem("PM 관점 위젯 표시", "전체 KPI 및 위험 기업 위젯 표시", settingsState.dashboard.pmView, "dashboard", "pmView")}
        ${settingsItem("레이아웃 저장", "위젯 위치/크기 저장 허용", settingsState.dashboard.saveLayout, "dashboard", "saveLayout")}
      </div>
    `;
  }

  if (settingsTab === "ai") {
    return `
      <div class="settings-group">
        <div class="settings-group-title">AI 기능 설정</div>
        ${settingsItem("AI 요약 사용", "기업별 AI 요약문 표시", settingsState.ai.aiSummary, "ai", "aiSummary")}
        ${settingsItem("AI 점수 사용", "적합도/우선순위 평가에 AI 사용", settingsState.ai.aiScoring, "ai", "aiScoring")}
        ${settingsItem("AI 액션 추천", "다음 액션 추천 표시", settingsState.ai.aiActionRecommend, "ai", "aiActionRecommend")}
      </div>
    `;
  }

  if (settingsTab === "data") {
    return `
      <div class="settings-group">
        <div class="settings-group-title">데이터 품질 관리</div>

        <div class="settings-item">
          <div class="settings-item-info">
            <div class="settings-item-title">중복 판단 기준</div>
            <div class="settings-item-sub">중복 기업 판단 규칙</div>
          </div>
          <select class="form-select" style="width:220px;" onchange="updateSelectSetting('data','duplicateRule', this.value)">
            <option value="기업명+홈페이지" ${settingsState.data.duplicateRule === "기업명+홈페이지" ? "selected" : ""}>기업명 + 홈페이지</option>
            <option value="기업명만" ${settingsState.data.duplicateRule === "기업명만" ? "selected" : ""}>기업명만</option>
            <option value="이메일만" ${settingsState.data.duplicateRule === "이메일만" ? "selected" : ""}>이메일만</option>
          </select>
        </div>

        <div class="settings-item">
          <div class="settings-item-info">
            <div class="settings-item-title">신뢰도 기준 일수</div>
            <div class="settings-item-sub">몇 일이 지나면 확인 필요로 볼지</div>
          </div>
          <input class="form-input" style="width:120px;" type="number" value="${settingsState.data.staleDays}" onchange="updateNumberSetting('data','staleDays', this.value)">
        </div>

        <div class="settings-item">
          <div class="settings-item-info">
            <div class="settings-item-title">신뢰도 모드</div>
            <div class="settings-item-sub">자동 계산 또는 수동 지정</div>
          </div>
          <select class="form-select" style="width:160px;" onchange="updateSelectSetting('data','trustMode', this.value)">
            <option value="자동" ${settingsState.data.trustMode === "자동" ? "selected" : ""}>자동</option>
            <option value="수동" ${settingsState.data.trustMode === "수동" ? "selected" : ""}>수동</option>
          </select>
        </div>
      </div>
    `;
  }

  if (settingsTab === "mail") {
    return `
      <div class="settings-group">
        <div class="settings-group-title">메일 발송 설정</div>

        <div class="settings-item">
          <div class="settings-item-info">
            <div class="settings-item-title">발신자 이름</div>
            <div class="settings-item-sub">메일 기본 발신자명</div>
          </div>
          <input class="form-input" style="width:220px;" value="${settingsState.mail.senderName}" onchange="updateTextSetting('mail','senderName', this.value)">
        </div>

        <div class="settings-item">
          <div class="settings-item-info">
            <div class="settings-item-title">기본 서명</div>
            <div class="settings-item-sub">메일 하단 기본 서명</div>
          </div>
          <textarea class="form-textarea" style="width:280px;min-height:80px;" onchange="updateTextSetting('mail','defaultSignature', this.value)">${settingsState.mail.defaultSignature}</textarea>
        </div>

        ${settingsItem("AI 메일 초안 사용", "AI가 메일 예시문 작성", settingsState.mail.aiDraftEnabled, "mail", "aiDraftEnabled")}
      </div>
    `;
  }

  if (settingsTab === "upload") {
    return `
      <div class="settings-group">
        <div class="settings-group-title">업로드 설정</div>
        ${settingsItem("CSV 업로드 허용", "CSV 파일 업로드 가능", settingsState.upload.allowCsv, "upload", "allowCsv")}
        ${settingsItem("XLSX 업로드 허용", "엑셀 파일 업로드 가능", settingsState.upload.allowXlsx, "upload", "allowXlsx")}
        ${settingsItem("업로드 중복검사", "업로드 시 기존 DB와 중복 비교", settingsState.upload.duplicateCheckOnUpload, "upload", "duplicateCheckOnUpload")}
      </div>
    `;
  }

  return "";
}

function settingsItem(title, sub, isOn, group, key) {
  return `
    <div class="settings-item">
      <div class="settings-item-info">
        <div class="settings-item-title">${title}</div>
        <div class="settings-item-sub">${sub}</div>
      </div>
      <div class="toggle ${isOn ? "on" : ""}" onclick="toggleSetting('${group}','${key}')"></div>
    </div>
  `;
}

function changeSettingsTab(tab) {
  settingsTab = tab;
  saveViewModes();
  renderPage();
}
function toggleSetting(group, key) {
  settingsState[group][key] = !settingsState[group][key];
  saveSettings();
  renderPage();
  showToast("설정을 변경했습니다.");
}
function updateSelectSetting(group, key, value) {
  settingsState[group][key] = value;
  saveSettings();
  showToast("설정을 저장했습니다.");
}
function updateNumberSetting(group, key, value) {
  settingsState[group][key] = Number(value);
  saveSettings();
  showToast("설정을 저장했습니다.");
}
function updateTextSetting(group, key, value) {
  settingsState[group][key] = value;
  saveSettings();
  showToast("설정을 저장했습니다.");
}

/* =========================
   Company Modal Views
========================= */
function setLogsView(mode) {
  logsViewMode = mode;
  saveViewModes();
  renderCompanyModal();
}
function setHistoryView(mode) {
  historyViewMode = mode;
  saveViewModes();
  renderCompanyModal();
}
function renderLogsViewTabs() {
  return `
    <div class="view-tabs">
      <button class="view-tab-btn ${logsViewMode === "timeline" ? "active" : ""}" onclick="setLogsView('timeline')">타임라인</button>
      <button class="view-tab-btn ${logsViewMode === "list" ? "active" : ""}" onclick="setLogsView('list')">리스트</button>
    </div>
  `;
}
function renderHistoryViewTabs() {
  return `
    <div class="view-tabs">
      <button class="view-tab-btn ${historyViewMode === "yearly" ? "active" : ""}" onclick="setHistoryView('yearly')">연도별</button>
      <button class="view-tab-btn ${historyViewMode === "compare" ? "active" : ""}" onclick="setHistoryView('compare')">비교</button>
    </div>
  `;
}

function openCompany(id) {
  selectedCompany = companies.find(c => c.id === id);
  modalTab = "info";
  renderCompanyModal();
  companyModalEl.classList.add("open");
}
function closeCompanyModal() {
  companyModalEl.classList.remove("open");
  selectedCompany = null;
}
function switchModalTab(tab) {
  modalTab = tab;
  renderCompanyModal();
}

function renderCompanyModal() {
  const c = selectedCompany;
  if (!c) return;

  companyModalHeaderEl.innerHTML = `
    <div class="modal-title-row">
      <div class="modal-icon-large ${c.iconClass}">${c.name[0]}</div>
      <div>
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:6px;flex-wrap:wrap;">
          <h2 style="font-size:20px;font-weight:800;letter-spacing:-0.4px;">${c.name}</h2>
          ${trustBadge(c.trustLevel)}
        </div>
        <div style="display:flex;gap:6px;flex-wrap:wrap;">
          ${badge(c.type)}
          ${badge(c.salesStatus)}
          ${badge(c.attendStatus)}
          ${c.tags.map(tagHtml).join("")}
        </div>
      </div>
    </div>
    <button class="modal-close" onclick="closeCompanyModal()">✕</button>
  `;

  companyModalTabsEl.innerHTML = `
    <button class="modal-tab ${modalTab === "info" ? "active" : ""}" onclick="switchModalTab('info')">기본 정보</button>
    <button class="modal-tab ${modalTab === "logs" ? "active" : ""}" onclick="switchModalTab('logs')">상담 로그 (${c.logs.length})</button>
    <button class="modal-tab ${modalTab === "history" ? "active" : ""}" onclick="switchModalTab('history')">연도별 이력</button>
  `;

  if (modalTab === "info") {
    companyModalBodyEl.innerHTML = `
      <div class="detail-grid">
        <div class="detail-box"><div class="detail-label">기업명</div><div class="detail-value">${c.name}</div></div>
        <div class="detail-box"><div class="detail-label">국가</div><div class="detail-value">${c.country}</div></div>
        <div class="detail-box"><div class="detail-label">산업군</div><div class="detail-value">${c.industry}</div></div>
        <div class="detail-box"><div class="detail-label">유형</div><div class="detail-value">${c.type}</div></div>
        <div class="detail-box"><div class="detail-label">홈페이지</div><div class="detail-value">${c.homepage}</div></div>
        <div class="detail-box"><div class="detail-label">사업자번호</div><div class="detail-value">${c.bizNo}</div></div>
        <div class="detail-box"><div class="detail-label">담당자</div><div class="detail-value">${c.contact}</div></div>
        <div class="detail-box"><div class="detail-label">이메일</div><div class="detail-value">${c.email}</div></div>
        <div class="detail-box"><div class="detail-label">전화번호</div><div class="detail-value">${c.phone}</div></div>
        <div class="detail-box"><div class="detail-label">내부 담당</div><div class="detail-value">${c.assignee}</div></div>
        <div class="detail-box full"><div class="detail-label">AI 요약</div><div class="detail-value">${c.aiSummary}</div></div>
        <div class="detail-box full"><div class="detail-label">AI 추천 액션</div><div class="detail-value">${c.aiAction}</div></div>
        <div class="detail-box full"><div class="detail-label">메모</div><div class="detail-value">${c.memo}</div></div>
      </div>
    `;
    return;
  }

  if (modalTab === "logs") {
    let logsHtml = "";
    if (logsViewMode === "timeline") {
      logsHtml = c.logs.map(log => `
        <div class="log-item">
          <div class="log-dot ${c.iconClass}">${log.type[0]}</div>
          <div class="log-content">
            <div class="log-meta">
              <div class="log-type-label">${log.type} · ${log.author}</div>
              <div class="log-date">${log.date}</div>
            </div>
            <div class="log-text">${log.content}</div>
            <div class="log-action">다음 액션: ${log.action}</div>
          </div>
        </div>
      `).join("");
    } else {
      logsHtml = `
        <div class="table-wrap">
          <table class="data-table">
            <thead>
              <tr>
                <th>날짜</th>
                <th>유형</th>
                <th>작성자</th>
                <th>내용</th>
                <th>다음 액션</th>
              </tr>
            </thead>
            <tbody>
              ${c.logs.map(log => `
                <tr>
                  <td>${log.date}</td>
                  <td>${log.type}</td>
                  <td>${log.author}</td>
                  <td>${log.content}</td>
                  <td>${log.action}</td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      `;
    }

    companyModalBodyEl.innerHTML = `
      <div class="log-form-card">
        <div class="flex-between" style="margin-bottom:12px;">
          <div class="log-form-title" style="margin-bottom:0;">새 상담 로그 추가</div>
          ${renderLogsViewTabs()}
        </div>
        <div class="form-grid">
          <div class="form-group">
            <label class="form-label">접촉 유형</label>
            <select class="form-select" id="newLogType">
              <option value="전화">전화</option>
              <option value="이메일">이메일</option>
              <option value="미팅">미팅</option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">날짜</label>
            <input class="form-input" id="newLogDate" type="date" />
          </div>
          <div class="form-group full">
            <label class="form-label">상담 내용</label>
            <textarea class="form-textarea" id="newLogContent"></textarea>
          </div>
          <div class="form-group full">
            <label class="form-label">다음 액션</label>
            <input class="form-input" id="newLogAction" type="text" />
          </div>
        </div>
        <div style="margin-top:12px;display:flex;justify-content:flex-end;">
          <button class="btn btn-primary btn-sm" onclick="addLogToCompany(${c.id})">상담 로그 저장</button>
        </div>
      </div>

      ${logsHtml}
    `;
    return;
  }

  if (modalTab === "history") {
    let historyHtml = "";
    if (historyViewMode === "yearly") {
      historyHtml = c.yearHistory.length === 0
        ? `<div class="empty"><div class="empty-text">연도별 참가 이력이 없습니다.</div></div>`
        : c.yearHistory.map(item => `
          <div class="year-row">
            <div class="year-badge">${item.year}</div>
            <div style="flex:1;">
              <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:6px;">
                ${badge(item.status)}
                ${badge(item.attended ? "참가" : "미참가")}
              </div>
              <div class="brief-sub">부스 규모: ${item.boothSize}</div>
              <div class="brief-sub">계약 금액: ${moneyShort(item.contractAmt)}</div>
              <div class="brief-sub">할인 조건: ${item.discount}%</div>
            </div>
          </div>
        `).join("");
    } else {
      const participatedCount = c.yearHistory.filter(y => y.attended).length;
      const avgContract = c.yearHistory.length
        ? Math.round(c.yearHistory.reduce((sum, y) => sum + (y.contractAmt || 0), 0) / c.yearHistory.length)
        : 0;
      const latest = c.yearHistory[c.yearHistory.length - 1];

      historyHtml = `
        <div class="compare-grid">
          <div class="compare-box">
            <div class="compare-title">참가 횟수</div>
            <div class="compare-value">${participatedCount}</div>
          </div>
          <div class="compare-box">
            <div class="compare-title">평균 계약 금액</div>
            <div class="compare-value">${moneyShort(avgContract)}</div>
          </div>
          <div class="compare-box">
            <div class="compare-title">최근 상태</div>
            <div class="compare-value" style="font-size:18px;">${latest ? latest.status : "-"}</div>
          </div>
        </div>

        <div class="section-gap"></div>

        <div class="table-wrap">
          <table class="data-table">
            <thead>
              <tr>
                <th>연도</th>
                <th>참가 여부</th>
                <th>부스 규모</th>
                <th>계약 금액</th>
                <th>할인</th>
                <th>상태</th>
              </tr>
            </thead>
            <tbody>
              ${c.yearHistory.map(item => `
                <tr>
                  <td>${item.year}</td>
                  <td>${item.attended ? "참가" : "미참가"}</td>
                  <td>${item.boothSize}</td>
                  <td>${moneyShort(item.contractAmt)}</td>
                  <td>${item.discount}%</td>
                  <td>${item.status}</td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      `;
    }

    companyModalBodyEl.innerHTML = `
      <div class="flex-between section-gap">
        <div class="card-title">연도별 참가 이력</div>
        ${renderHistoryViewTabs()}
      </div>
      ${historyHtml}
    `;
  }
}

function addLogToCompany(companyId) {
  const type = document.getElementById("newLogType").value;
  const date = document.getElementById("newLogDate").value;
  const content = document.getElementById("newLogContent").value.trim();
  const action = document.getElementById("newLogAction").value.trim();

  if (!date || !content || !action) {
    showToast("상담 로그 항목을 모두 입력해주세요.");
    return;
  }

  const company = companies.find(c => c.id === companyId);
  company.logs.unshift({
    id: Date.now(),
    date,
    type,
    author: currentUser,
    content,
    action
  });

  saveCompanies();
  renderCompanyModal();
  if (currentPage === "dashboard" || currentPage === "companies") renderPage();
  showToast("상담 로그를 저장했습니다.");
}

/* =========================
   Add Company
========================= */
function openAddModal() {
  addModalEl.classList.add("open");
}
function closeAddModal() {
  addModalEl.classList.remove("open");
}
function saveNewCompany() {
  const name = document.getElementById("addName").value.trim();
  const country = document.getElementById("addCountry").value.trim();
  const industry = document.getElementById("addIndustry").value.trim();
  const type = document.getElementById("addType").value;
  const manager = document.getElementById("addManager").value.trim();
  const assignee = document.getElementById("addAssignee").value.trim();
  const email = document.getElementById("addEmail").value.trim();
  const phone = document.getElementById("addPhone").value.trim();
  const memo = document.getElementById("addMemo").value.trim();

  if (!name || !country) {
    showToast("기업명과 국가는 필수입니다.");
    return;
  }

  companies.unshift({
    id: Date.now(),
    name,
    country,
    industry: industry || "-",
    type,
    bizNo: "-",
    homepage: "-",
    contact: manager || "-",
    email: email || "-",
    phone: phone || "-",
    contactVerified: new Date().toISOString().slice(0, 10),
    trustLevel: "medium",
    salesStatus: "일반 검토",
    attendStatus: "미정",
    assignee: assignee || currentUser,
    exhibition: "KIBEX2026",
    memo: memo || "-",
    aiSummary: "AI 요약: 신규 등록 기업. 기본 정보 검토 필요.",
    aiAction: "카테고리 확인 후 첫 컨택 진행",
    tags: ["신규"],
    iconClass: "ic-1",
    logs: [],
    yearHistory: []
  });

  saveCompanies();
  closeAddModal();
  renderPage();
  updateRiskBadge();
  showToast("기업을 등록했습니다.");
}

/* =========================
   Widget Modal
========================= */
function openWidgetModal() {
  widgetModalBodyEl.innerHTML = `
    <div class="grid-2">
      ${dashboardWidgets
        .filter(w => !w.visible)
        .map(w => `
          <div class="detail-box">
            <div class="detail-label">숨긴 위젯</div>
            <div class="detail-value" style="margin-bottom:10px;">${WIDGET_DEFINITIONS[w.key].title}</div>
            <button class="btn btn-primary btn-sm" onclick="restoreWidget('${w.key}')">다시 추가</button>
          </div>
        `).join("") || `<div class="empty" style="grid-column:1/-1;"><div class="empty-text">숨겨진 위젯이 없습니다.</div></div>`}
    </div>
  `;
  widgetModalEl.classList.add("open");
}
function closeWidgetModal() {
  widgetModalEl.classList.remove("open");
}

/* =========================
   Render
========================= */
function renderPage() {
  updateRiskBadge();

  if (currentPage === "dashboard") {
    contentEl.innerHTML = renderDashboard();
    return;
  }

  if (currentPage === "companies") {
    contentEl.innerHTML = renderCompaniesPage();
    bindCompaniesPageEvents();
    return;
  }

  if (currentPage === "calendar") {
    contentEl.innerHTML = renderCalendarPage();
    return;
  }

  if (currentPage === "uploads") {
    contentEl.innerHTML = renderUploadsPage();
    bindUploadEvents();
    return;
  }

  if (currentPage === "settings") {
    contentEl.innerHTML = renderSettingsPage();
  }
}

/* =========================
   Events
========================= */
function bindSidebarEvents() {
  document.querySelectorAll(".nav-item").forEach(btn => {
    btn.addEventListener("click", () => navigate(btn.dataset.page));
  });
}

function bindModalEvents() {
  document.getElementById("closeCompanyModalBtn").addEventListener("click", closeCompanyModal);
  document.getElementById("closeAddModalBtn").addEventListener("click", closeAddModal);
  document.getElementById("cancelAddBtn").addEventListener("click", closeAddModal);
  document.getElementById("saveAddBtn").addEventListener("click", saveNewCompany);

  document.getElementById("closeWidgetModalBtn").addEventListener("click", closeWidgetModal);
  document.getElementById("closeWidgetFooterBtn").addEventListener("click", closeWidgetModal);

  document.getElementById("closeMappingModalBtn").addEventListener("click", closeMappingModal);
  document.getElementById("cancelMappingBtn").addEventListener("click", closeMappingModal);
  document.getElementById("applyMappingBtn").addEventListener("click", applyMapping);

  companyModalEl.addEventListener("click", (e) => {
    if (e.target === companyModalEl) closeCompanyModal();
  });

  addModalEl.addEventListener("click", (e) => {
    if (e.target === addModalEl) closeAddModal();
  });

  widgetModalEl.addEventListener("click", (e) => {
    if (e.target === widgetModalEl) closeWidgetModal();
  });

  mappingModalEl.addEventListener("click", (e) => {
    if (e.target === mappingModalEl) closeMappingModal();
  });
}

/* =========================
   Init
========================= */
function init() {
  setActiveNav(currentPage);
  setPageMeta(currentPage);
  bindSidebarEvents();
  bindModalEvents();
  renderTopbarActions();
  renderPage();
}

init();

/* =========================
   Global
========================= */
window.navigate = navigate;
window.openCompany = openCompany;
window.closeCompanyModal = closeCompanyModal;
window.switchModalTab = switchModalTab;
window.addLogToCompany = addLogToCompany;

window.moveWidget = moveWidget;
window.hideWidget = hideWidget;
window.restoreWidget = restoreWidget;
window.cycleWidgetSize = cycleWidgetSize;

window.setDashboardMode = setDashboardMode;
window.setCompanyView = setCompanyView;
window.setCalendarView = setCalendarView;
window.setLogsView = setLogsView;
window.setHistoryView = setHistoryView;

window.changeCalendarMonth = changeCalendarMonth;

window.changeSettingsTab = changeSettingsTab;
window.toggleSetting = toggleSetting;
window.updateSelectSetting = updateSelectSetting;
window.updateNumberSetting = updateNumberSetting;
window.updateTextSetting = updateTextSetting;

window.downloadSampleCsv = downloadSampleCsv;
window.commitUploadRows = commitUploadRows;
window.clearUploadState = clearUploadState;
