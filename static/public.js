const translations = {
  zh: {
    pageTitle: "Fim 公开缺陷",
    languageSwitch: "语言切换",
    countInitial: "缺陷展示",
    sidebarAria: "Fim 展示导航",
    brandTagline: "移动应用缺陷发现",
    navOverview: "概览",
    navInsights: "洞察",
    navBugs: "缺陷详情",
    sidebarIntro: "Fim 自动探索移动应用界面，沉淀可复现、可审核、可公开展示的真实缺陷样本。",
    paperEyebrow: "相关论文",
    paperLinkLabel: "在 arXiv 上查看论文 ↗",
    heroEyebrow: "Fim 展示",
    heroTitle: "自动探索移动应用缺陷，保留可复现证据。",
    heroIntro: "从自动探索到人工审核，Fim 将移动应用缺陷整理成可追踪、可复现、可交流的证据链。",
    distributionEyebrow: "数据分布",
    distributionTitle: "审核缺陷类型分布",
    categoriesEyebrow: "分类浏览",
    categoriesTitle: "按类型、优先级和状态浏览",
    detailsEyebrow: "缺陷详情",
    detailsTitle: "缺陷详情",
    filtersAria: "缺陷筛选",
    filterType: "缺陷类型",
    allTypes: "全部类型",
    filterConfirmed: "作者确认",
    all: "全部",
    confirmedYes: "已确认",
    confirmedNo: "未确认",
    filterResolved: "修复状态",
    resolvedYes: "已解决",
    resolvedNo: "未解决",
    paperDataset: "论文数据集",
    isstaOnly: "仅看 ISSTA 论文缺陷（{count}）",
    yes: "是",
    no: "否",
    none: "无",
    unknown: "未知",
    unknownApp: "未知应用",
    typeCrash: "崩溃",
    typeLogic: "逻辑",
    typeUi: "界面",
    severityHigh: "高",
    severityMedium: "中",
    severityLow: "低",
    severityUnrated: "未评级",
    categoryAll: "全部已审核缺陷",
    categorySubmitted: "已提交缺陷单",
    categoryCrash: "崩溃类缺陷",
    categoryLogic: "逻辑类缺陷",
    categoryUi: "界面类缺陷",
    categoryHigh: "高优先级缺陷",
    categoryMedium: "中优先级缺陷",
    categoryLow: "低优先级缺陷",
    categoryConfirmed: "作者已确认",
    categoryResolved: "已解决",
    categoryOpen: "尚未解决",
    categorySelected: "已选择缺陷",
    previewFallback: "打开卡片查看复现证据。",
    summaryReviewed: "审核缺陷",
    summarySubmitted: "已提交缺陷单",
    summaryConfirmed: "作者确认",
    summaryResolved: "已解决",
    summaryHigh: "高优先级",
    summaryApps: "覆盖应用",
    chartNoTypes: "暂无类型数据。",
    chartTypeComposition: "类型构成",
    chartTypeAria: "按缺陷类型统计",
    chartIssueProgress: "缺陷单进展",
    submitted: "已提交",
    authorConfirmed: "作者确认",
    resolved: "已解决",
    priority: "优先级",
    fixStatus: "修复状态",
    unresolved: "未解决",
    severity: "严重级别",
    chartSeverityAria: "按严重级别统计",
    topApps: "高频应用",
    cardIssueStatus: "缺陷单状态",
    cardRuntimeError: "运行异常",
    cardBehaviorError: "行为错误",
    cardDisplayIssue: "显示问题",
    cardAuthorFeedback: "作者反馈",
    noMatches: "没有匹配的缺陷，请切换分类或筛选条件。",
    bugScreenshot: "缺陷截图",
    issueSubmitted: "已提交缺陷单",
    issueNotSubmitted: "未提交缺陷单",
    authorConfirmedFull: "作者已确认",
    authorNotConfirmed: "作者未确认",
    expand: "展开",
    noTrace: "暂无复现轨迹。",
    step: "步骤 {index}",
    unknownAction: "未知操作",
    detailAria: "缺陷详情",
    evidencePackage: "Fim 证据包",
    close: "关闭",
    authorConfirmation: "作者确认：{value}",
    bugInfo: "缺陷信息",
    packageName: "包名",
    version: "版本",
    expected: "预期",
    actual: "实际",
    sourceCode: "源码",
    reproductionTrace: "复现轨迹",
    currentCount: "当前展示 {count} 个",
    matchingHint: "{category} · 当前匹配 {count} 个已审核缺陷",
  },
  en: {
    pageTitle: "Fim Public Bugs",
    languageSwitch: "Language",
    countInitial: "Bug showcase",
    sidebarAria: "Fim showcase navigation",
    brandTagline: "Mobile app bug discovery",
    navOverview: "Overview",
    navInsights: "Insights",
    navBugs: "Bug details",
    sidebarIntro: "Fim automatically explores mobile app interfaces and preserves reproducible, reviewed, publicly accessible real-world bug samples.",
    paperEyebrow: "Related paper",
    paperLinkLabel: "Read on arXiv ↗",
    heroEyebrow: "Fim Showcase",
    heroTitle: "Explore mobile app bugs automatically and preserve reproducible evidence.",
    heroIntro: "From automated exploration to manual review, Fim organizes mobile app bugs into traceable, reproducible evidence packages.",
    distributionEyebrow: "Data distribution",
    distributionTitle: "Reviewed bugs by type",
    categoriesEyebrow: "Browse categories",
    categoriesTitle: "Browse by type, priority, and status",
    detailsEyebrow: "Bug details",
    detailsTitle: "Bug details",
    filtersAria: "Bug filters",
    filterType: "Bug type",
    allTypes: "All types",
    filterConfirmed: "Author confirmation",
    all: "All",
    confirmedYes: "Confirmed",
    confirmedNo: "Not confirmed",
    filterResolved: "Resolution status",
    resolvedYes: "Resolved",
    resolvedNo: "Unresolved",
    paperDataset: "Paper dataset",
    isstaOnly: "ISSTA paper bugs only ({count})",
    yes: "Yes",
    no: "No",
    none: "None",
    unknown: "Unknown",
    unknownApp: "Unknown app",
    typeCrash: "Crash",
    typeLogic: "Logic",
    typeUi: "UI",
    severityHigh: "High",
    severityMedium: "Medium",
    severityLow: "Low",
    severityUnrated: "Unrated",
    categoryAll: "All reviewed bugs",
    categorySubmitted: "Submitted issues",
    categoryCrash: "Crash bugs",
    categoryLogic: "Logic bugs",
    categoryUi: "UI bugs",
    categoryHigh: "High-priority bugs",
    categoryMedium: "Medium-priority bugs",
    categoryLow: "Low-priority bugs",
    categoryConfirmed: "Author-confirmed",
    categoryResolved: "Resolved",
    categoryOpen: "Unresolved",
    categorySelected: "Selected bugs",
    previewFallback: "Open the card to view reproduction evidence.",
    summaryReviewed: "Reviewed bugs",
    summarySubmitted: "Submitted issues",
    summaryConfirmed: "Author-confirmed",
    summaryResolved: "Resolved",
    summaryHigh: "High priority",
    summaryApps: "Apps covered",
    chartNoTypes: "No bug type data available.",
    chartTypeComposition: "Type breakdown",
    chartTypeAria: "Bugs by type",
    chartIssueProgress: "Issue progress",
    submitted: "Submitted",
    authorConfirmed: "Author-confirmed",
    resolved: "Resolved",
    priority: "Priority",
    fixStatus: "Resolution status",
    unresolved: "Unresolved",
    severity: "Severity",
    chartSeverityAria: "Bugs by severity",
    topApps: "Most affected apps",
    cardIssueStatus: "Issue status",
    cardRuntimeError: "Runtime error",
    cardBehaviorError: "Behavior error",
    cardDisplayIssue: "Display issue",
    cardAuthorFeedback: "Author feedback",
    noMatches: "No matching bugs. Try another category or filter.",
    bugScreenshot: "Bug screenshot",
    issueSubmitted: "Issue submitted",
    issueNotSubmitted: "Issue not submitted",
    authorConfirmedFull: "Author-confirmed",
    authorNotConfirmed: "Not author-confirmed",
    expand: "Expand",
    noTrace: "No reproduction trace available.",
    step: "Step {index}",
    unknownAction: "Unknown action",
    detailAria: "Bug details",
    evidencePackage: "Fim evidence package",
    close: "Close",
    authorConfirmation: "Author confirmed: {value}",
    bugInfo: "Bug information",
    packageName: "Package",
    version: "Version",
    expected: "Expected",
    actual: "Actual",
    sourceCode: "Source",
    reproductionTrace: "Reproduction trace",
    currentCount: "Showing {count} bugs",
    matchingHint: "{category} · {count} reviewed bugs match",
  },
};

function initialLanguage() {
  try {
    return localStorage.getItem("fim-language-v2") === "zh" ? "zh" : "en";
  } catch {
    return "en";
  }
}

const state = {
  bugs: [],
  filtered: [],
  selectedId: "",
  activeCategory: "all",
  isstaOnly: false,
  language: initialLanguage(),
  englishContent: {},
};

const els = {
  list: document.querySelector("#public-list"),
  detail: document.querySelector("#public-detail"),
  typeFilter: document.querySelector("#type-filter"),
  confirmedFilter: document.querySelector("#confirmed-filter"),
  resolvedFilter: document.querySelector("#resolved-filter"),
  isstaFilter: document.querySelector("#issta-filter"),
  languageSwitch: document.querySelector("#language-switch"),
  count: document.querySelector("#public-count"),
  summary: document.querySelector("#public-summary"),
  chart: document.querySelector("#public-chart"),
  categories: document.querySelector("#public-categories"),
};

function t(key, variables = {}) {
  const dictionary = translations[state.language] || translations.zh;
  let value = dictionary[key] ?? translations.zh[key] ?? key;
  Object.entries(variables).forEach(([name, replacement]) => {
    value = value.replaceAll(`{${name}}`, String(replacement));
  });
  return value;
}

function requireElement(element, name) {
  if (!element) throw new Error(`Missing required element: ${name}`);
  return element;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function boolText(value) {
  return value ? t("yes") : t("no");
}

function linkOrText(url, fallback = t("none")) {
  if (!url) return escapeHtml(fallback);
  return `<a href="${escapeHtml(url)}" target="_blank" rel="noreferrer">${escapeHtml(url)}</a>`;
}

function typeLabel(type) {
  return {
    crash: t("typeCrash"),
    logic_error: t("typeLogic"),
    ui_error: t("typeUi"),
  }[type] || type || t("unknown");
}

function severityLabel(severity) {
  return {
    high: t("severityHigh"),
    medium: t("severityMedium"),
    low: t("severityLow"),
  }[severity] || severity || t("severityUnrated");
}

function categoryLabel(category) {
  return {
    all: t("categoryAll"),
    public_issues: t("categorySubmitted"),
    type_crash: t("categoryCrash"),
    type_logic_error: t("categoryLogic"),
    type_ui_error: t("categoryUi"),
    severity_high: t("categoryHigh"),
    severity_medium: t("categoryMedium"),
    severity_low: t("categoryLow"),
    status_confirmed: t("categoryConfirmed"),
    status_resolved: t("categoryResolved"),
    status_open: t("categoryOpen"),
  }[category] || t("categorySelected");
}

function categoryOf(item, category) {
  if (category === "all") return true;
  if (category === "public_issues") return Boolean(item.public?.issue_submitted);
  if (category.startsWith("type_")) return item.bug?.type === category.replace("type_", "");
  if (category.startsWith("severity_")) return item.bug?.severity === category.replace("severity_", "");
  if (category === "status_confirmed") return Boolean(item.public?.author_confirmed);
  if (category === "status_resolved") return Boolean(item.public?.resolved);
  if (category === "status_open") return !item.public?.resolved;
  return true;
}

function isIsstaPaperBug(item) {
  return item.bug?.source === "usefulness_evaluation"
    || item.bug?.scenario_type === "usefulness_evaluation"
    || item.id?.startsWith("usefulness_");
}

function localizedBugText(item, field) {
  const original = field === "public_note" ? item.public?.public_note : item.bug?.[field];
  if (state.language !== "en") return original || "";
  return state.englishContent[item.id]?.[field] ?? original ?? "";
}

function localizedThought(item, index) {
  const original = item.trace?.[index]?.thought || "";
  if (state.language !== "en") return original;
  return state.englishContent[item.id]?.thoughts?.[index] ?? original;
}

function firstScreenshot(item) {
  const step = (item.trace || []).find((entry) => entry?.page?.screenshot_url);
  return step?.page?.screenshot_url || "";
}

function previewText(item) {
  return localizedBugText(item, "public_note")
    || localizedBugText(item, "actual")
    || localizedBugText(item, "expected")
    || item.app?.summary
    || t("previewFallback");
}

async function loadEnglishContent() {
  const response = await fetch("data/public_bugs_en.json");
  if (!response.ok) throw new Error(`Failed to load English bug content (${response.status})`);
  state.englishContent = await response.json();
}

async function loadPublicBugs() {
  if (window.FIM_PUBLIC_BUGS) {
    state.bugs = window.FIM_PUBLIC_BUGS.bugs || [];
  } else {
    const res = await fetch("data/public_bugs.json");
    const data = await res.json();
    state.bugs = data.bugs || [];
  }
  await loadEnglishContent();
  populateTypeFilter();
  applyFilters();
}

function populateTypeFilter() {
  requireElement(els.typeFilter, "type-filter");
  const types = [...new Set(state.bugs.map((item) => item.bug?.type).filter(Boolean))].sort();
  const currentValue = els.typeFilter.value || "all";
  els.typeFilter.innerHTML = `<option value="all">${escapeHtml(t("allTypes"))}</option>` + types.map((type) => {
    return `<option value="${escapeHtml(type)}">${escapeHtml(typeLabel(type))}</option>`;
  }).join("");
  els.typeFilter.value = types.includes(currentValue) ? currentValue : "all";
}

function applyFilters() {
  requireElement(els.typeFilter, "type-filter");
  requireElement(els.confirmedFilter, "confirmed-filter");
  requireElement(els.resolvedFilter, "resolved-filter");
  const type = els.typeFilter.value;
  const confirmed = els.confirmedFilter.value;
  const resolved = els.resolvedFilter.value;
  state.filtered = state.bugs.filter((item) => {
    const publicInfo = item.public || {};
    const haystack = [
      item.app?.app_name,
      item.app?.package_name,
      item.bug?.type,
      item.bug?.severity,
      item.bug?.description,
      item.bug?.actual,
      publicInfo.github_url,
    ].join(" ").toLowerCase();
    const confirmedOk = confirmed === "all" || (confirmed === "yes") === Boolean(publicInfo.author_confirmed);
    const resolvedOk = resolved === "all" || (resolved === "yes") === Boolean(publicInfo.resolved);
    const typeOk = type === "all" || item.bug?.type === type;
    const isstaOk = !state.isstaOnly || isIsstaPaperBug(item);
    return confirmedOk && resolvedOk && typeOk && isstaOk && categoryOf(item, state.activeCategory);
  });
  if (state.selectedId && !state.filtered.some((item) => item.id === state.selectedId)) state.selectedId = "";
  render();
}

function setCategory(category) {
  state.activeCategory = category;
  state.selectedId = "";
  applyFilters();
  document.querySelector("#bugs")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function countWhere(predicate) {
  return state.bugs.filter(predicate).length;
}

function renderSummary() {
  requireElement(els.summary, "public-summary");
  const appCount = new Set(state.bugs.map((item) => item.app?.package_name || item.app?.app_name || item.id)).size;
  const high = countWhere((item) => item.bug?.severity === "high");
  const resolved = countWhere((item) => item.public?.resolved);
  const submitted = countWhere((item) => item.public?.issue_submitted);
  const confirmed = countWhere((item) => item.public?.author_confirmed);
  els.summary.innerHTML = `
    <button type="button" data-category="all"><strong>${escapeHtml(state.bugs.length)}</strong><span>${escapeHtml(t("summaryReviewed"))}</span></button>
    <button type="button" data-category="public_issues"><strong>${escapeHtml(submitted)}</strong><span>${escapeHtml(t("summarySubmitted"))}</span></button>
    <button type="button" data-category="status_confirmed"><strong>${escapeHtml(confirmed)}</strong><span>${escapeHtml(t("summaryConfirmed"))}</span></button>
    <button type="button" data-category="status_resolved"><strong>${escapeHtml(resolved)}</strong><span>${escapeHtml(t("summaryResolved"))}</span></button>
    <button type="button" data-category="severity_high"><strong>${escapeHtml(high)}</strong><span>${escapeHtml(t("summaryHigh"))}</span></button>
    <button type="button" data-category="all"><strong>${escapeHtml(appCount)}</strong><span>${escapeHtml(t("summaryApps"))}</span></button>
  `;
  els.summary.querySelectorAll("button[data-category]").forEach((button) => {
    button.addEventListener("click", () => setCategory(button.dataset.category));
  });
}

function renderChart() {
  requireElement(els.chart, "public-chart");
  const typeBars = [
    { key: "type_logic_error", label: t("typeLogic"), value: countWhere((item) => item.bug?.type === "logic_error") },
    { key: "type_ui_error", label: t("typeUi"), value: countWhere((item) => item.bug?.type === "ui_error") },
    { key: "type_crash", label: t("typeCrash"), value: countWhere((item) => item.bug?.type === "crash") },
  ].filter((item) => item.value > 0);
  const severityBars = [
    { key: "severity_high", label: t("severityHigh"), value: countWhere((item) => item.bug?.severity === "high") },
    { key: "severity_medium", label: t("severityMedium"), value: countWhere((item) => item.bug?.severity === "medium") },
    { key: "severity_low", label: t("severityLow"), value: countWhere((item) => item.bug?.severity === "low") },
  ].filter((item) => item.value > 0);
  const topApps = [...state.bugs.reduce((map, item) => {
    const key = item.app?.app_name || item.app?.package_name || t("unknownApp");
    map.set(key, (map.get(key) || 0) + 1);
    return map;
  }, new Map()).entries()]
    .sort((left, right) => right[1] - left[1])
    .slice(0, 5)
    .map(([label, value]) => ({ label, value }));
  const resolved = countWhere((item) => item.public?.resolved);
  const confirmed = countWhere((item) => item.public?.author_confirmed);
  const submitted = countWhere((item) => item.public?.issue_submitted);
  const open = Math.max(0, state.bugs.length - resolved);
  const screenshots = state.bugs.reduce((total, item) => total + (item.trace || []).filter((step) => step?.page?.screenshot_url).length, 0);
  const avgSteps = state.bugs.length ? Math.round(state.bugs.reduce((total, item) => total + (item.trace || []).length, 0) / state.bugs.length) : 0;
  if (!typeBars.length) {
    els.chart.innerHTML = `<div class="public-empty-state">${escapeHtml(t("chartNoTypes"))}</div>`;
    return;
  }
  const renderBars = (bars, label) => {
    const max = Math.max(...bars.map((bar) => bar.value), 1);
    return `
      <div class="public-bar-chart" role="img" aria-label="${escapeHtml(label)}">
        ${bars.map((bar) => `
          <button class="public-bar-row" type="button" data-category="${escapeHtml(bar.key)}">
            <span class="public-bar-label">${escapeHtml(bar.label)}</span>
            <span class="public-bar-track"><span style="width: ${Math.max(8, (bar.value / max) * 100)}%"></span></span>
            <strong>${escapeHtml(bar.value)}</strong>
          </button>
        `).join("")}
      </div>
    `;
  };
  const total = Math.max(state.bugs.length, 1);
  const high = countWhere((item) => item.bug?.severity === "high");
  const highPct = Math.round((high / total) * 100);
  const resolvedPct = Math.round((resolved / total) * 100);
  const confirmedPct = Math.round((confirmed / total) * 100);
  els.chart.innerHTML = `
    <div class="public-data-grid">
      <section class="public-data-card public-data-card-wide">
        <div class="public-mini-head"><span>${escapeHtml(t("chartTypeComposition"))}</span><strong>${escapeHtml(state.bugs.length)}</strong></div>
        ${renderBars(typeBars, t("chartTypeAria"))}
      </section>
      <section class="public-data-card">
        <div class="public-mini-head"><span>${escapeHtml(t("chartIssueProgress"))}</span><strong>${escapeHtml(submitted)}</strong></div>
        <div class="public-status-stack">
          <button type="button" data-category="public_issues"><span>${escapeHtml(t("submitted"))}</span><strong>${escapeHtml(submitted)}</strong></button>
          <button type="button" data-category="status_confirmed"><span>${escapeHtml(t("authorConfirmed"))}</span><strong>${escapeHtml(confirmed)}</strong></button>
          <button type="button" data-category="status_resolved"><span>${escapeHtml(t("resolved"))}</span><strong>${escapeHtml(resolved)}</strong></button>
        </div>
      </section>
      <section class="public-data-card">
        <div class="public-mini-head"><span>${escapeHtml(t("priority"))}</span><strong>${escapeHtml(highPct)}%</strong></div>
        <div class="public-radial" style="--value: ${highPct}">
          <span>${escapeHtml(high)}</span>
          <em>${escapeHtml(t("severityHigh"))}</em>
        </div>
      </section>
      <section class="public-data-card">
        <div class="public-mini-head"><span>${escapeHtml(t("fixStatus"))}</span><strong>${escapeHtml(resolvedPct)}%</strong></div>
        <div class="public-status-stack">
          <button type="button" data-category="status_resolved"><span>${escapeHtml(t("resolved"))}</span><strong>${escapeHtml(resolved)}</strong></button>
          <button type="button" data-category="status_open"><span>${escapeHtml(t("unresolved"))}</span><strong>${escapeHtml(open)}</strong></button>
          <button type="button" data-category="status_confirmed"><span>${escapeHtml(t("authorConfirmed"))}</span><strong>${escapeHtml(confirmed)}</strong></button>
        </div>
      </section>
      <section class="public-data-card public-data-card-wide">
        <div class="public-mini-head"><span>${escapeHtml(t("severity"))}</span><strong>${escapeHtml(severityBars.length)}</strong></div>
        ${renderBars(severityBars, t("chartSeverityAria"))}
      </section>
      <section class="public-data-card">
        <div class="public-mini-head"><span>${escapeHtml(t("topApps"))}</span><strong>${escapeHtml(topApps.length)}</strong></div>
        <div class="public-top-list">
          ${topApps.map((app, index) => `<div><span>${escapeHtml(index + 1)}. ${escapeHtml(app.label)}</span><strong>${escapeHtml(app.value)}</strong></div>`).join("")}
        </div>
      </section>
    </div>
  `;
  els.chart.querySelectorAll("button[data-category]").forEach((button) => {
    button.addEventListener("click", () => setCategory(button.dataset.category));
  });
}

function categoryItems() {
  return [
    { key: "public_issues", title: t("submitted"), value: countWhere((item) => item.public?.issue_submitted), note: t("cardIssueStatus") },
    { key: "type_crash", title: t("typeCrash"), value: countWhere((item) => item.bug?.type === "crash"), note: t("cardRuntimeError") },
    { key: "type_logic_error", title: t("typeLogic"), value: countWhere((item) => item.bug?.type === "logic_error"), note: t("cardBehaviorError") },
    { key: "type_ui_error", title: t("typeUi"), value: countWhere((item) => item.bug?.type === "ui_error"), note: t("cardDisplayIssue") },
    { key: "status_confirmed", title: t("confirmedYes"), value: countWhere((item) => item.public?.author_confirmed), note: t("cardAuthorFeedback") },
    { key: "status_open", title: t("unresolved"), value: countWhere((item) => !item.public?.resolved), note: t("fixStatus") },
  ];
}

function renderCategories() {
  requireElement(els.categories, "public-categories");
  els.categories.innerHTML = categoryItems().map((item) => {
    const active = state.activeCategory === item.key ? "active" : "";
    return `
      <button class="public-category ${active}" type="button" data-category="${escapeHtml(item.key)}">
        <span>${escapeHtml(item.note)}</span>
        <strong>${escapeHtml(item.title)}</strong>
        <em>${escapeHtml(item.value)}</em>
      </button>
    `;
  }).join("");
  els.categories.querySelectorAll("button[data-category]").forEach((button) => {
    button.addEventListener("click", () => setCategory(button.dataset.category));
  });
}

function renderList() {
  requireElement(els.list, "public-list");
  if (!state.filtered.length) {
    els.list.innerHTML = `<div class="public-empty-state">${escapeHtml(t("noMatches"))}</div>`;
    return;
  }
  els.list.innerHTML = state.filtered.map((item) => {
    const publicInfo = item.public || {};
    const selected = item.id === state.selectedId ? "selected" : "";
    const screenshot = firstScreenshot(item);
    return `
      <article class="public-card ${selected}" data-id="${escapeHtml(item.id)}" tabindex="0">
        <div class="public-card-visual">
          ${screenshot ? `<img src="${escapeHtml(screenshot)}" alt="${escapeHtml(item.app?.app_name || t("bugScreenshot"))}">` : `<span>${escapeHtml(typeLabel(item.bug?.type)).slice(0, 2)}</span>`}
        </div>
        <div class="public-card-content">
          <div class="public-card-kicker">
            <span>${escapeHtml(item.app?.app_name || item.app?.package_name || t("unknownApp"))}</span>
            <span>${escapeHtml(typeLabel(item.bug?.type))}</span>
          </div>
          <h3>${escapeHtml(localizedBugText(item, "description") || item.id)}</h3>
          <p>${escapeHtml(previewText(item))}</p>
          <div class="public-card-footer">
            <span class="public-chip ${escapeHtml(item.bug?.severity || "")}">${escapeHtml(severityLabel(item.bug?.severity))}</span>
            <span class="public-chip ${publicInfo.issue_submitted ? "confirmed" : ""}">${escapeHtml(publicInfo.issue_submitted ? t("issueSubmitted") : t("issueNotSubmitted"))}</span>
            <span class="public-chip ${publicInfo.author_confirmed ? "confirmed" : ""}">${escapeHtml(publicInfo.author_confirmed ? t("authorConfirmedFull") : t("authorNotConfirmed"))}</span>
            <span class="public-chip ${publicInfo.resolved ? "resolved" : "open"}">${escapeHtml(publicInfo.resolved ? t("resolved") : t("unresolved"))}</span>
          </div>
        </div>
      </article>
    `;
  }).join("");
  els.list.querySelectorAll(".public-card").forEach((card) => {
    const open = () => {
      state.selectedId = card.dataset.id;
      renderList();
      renderDetail();
    };
    card.addEventListener("click", open);
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        open();
      }
    });
  });
}

function kv(label, value) {
  return `<dt>${escapeHtml(label)}</dt><dd>${value || escapeHtml(t("none"))}</dd>`;
}

function collapsibleKv(label, rawValue, limit = 180) {
  const value = String(rawValue || "");
  if (!value) return kv(label, "");
  const escaped = escapeHtml(value);
  if (value.length <= limit) return kv(label, escaped);
  const preview = escapeHtml(`${value.slice(0, limit)}...`);
  return `
    <dt>${escapeHtml(label)}</dt>
    <dd>
      <details class="public-collapse">
        <summary>
          <span class="public-collapse-preview">${preview}</span>
          <span class="public-collapse-more">${escapeHtml(t("expand"))}</span>
        </summary>
        <p>${escaped}</p>
      </details>
    </dd>
  `;
}

function renderTrace(item) {
  const trace = item.trace;
  if (!trace?.length) return `<div class="public-empty-state">${escapeHtml(t("noTrace"))}</div>`;
  return `
    <div class="public-trace">
      ${trace.map((step, index) => {
    const page = step.page || {};
    const op = step.operation || {};
    return `
          <article class="public-trace-card">
            ${page.screenshot_url ? `<img src="${escapeHtml(page.screenshot_url)}" alt="step ${escapeHtml(step.step_index)}">` : ""}
            <div class="public-trace-body">
              <div class="public-trace-head">
                <strong>${escapeHtml(t("step", { index: step.step_index }))}</strong>
                <span>${escapeHtml(op.action_name || t("unknownAction"))}</span>
              </div>
              <p>${escapeHtml(localizedThought(item, index))}</p>
            </div>
          </article>
        `;
  }).join("")}
    </div>
  `;
}

function renderDetail() {
  requireElement(els.detail, "public-detail");
  const item = state.bugs.find((bug) => bug.id === state.selectedId);
  if (!item) {
    els.detail.classList.remove("open");
    els.detail.innerHTML = "";
    return;
  }
  const publicInfo = item.public || {};
  els.detail.classList.add("open");
  els.detail.innerHTML = `
    <div class="public-modal-backdrop" data-close-detail></div>
    <article class="public-detail-card" role="dialog" aria-modal="true" aria-label="${escapeHtml(t("detailAria"))}">
      <div class="public-modal-bar">
        <span>${escapeHtml(t("evidencePackage"))}</span>
        <button class="public-close" type="button" aria-label="${escapeHtml(t("close"))}">${escapeHtml(t("close"))}</button>
      </div>
      <div class="public-detail-scroll">
        <div class="public-detail-head">
          <span>${escapeHtml(item.app?.app_name || item.app?.package_name || t("unknownApp"))}</span>
          <h2>${escapeHtml(localizedBugText(item, "description") || item.id)}</h2>
          <div class="public-card-footer">
            <span class="public-chip ${escapeHtml(item.bug?.severity || "")}">${escapeHtml(severityLabel(item.bug?.severity))}</span>
            <span class="public-chip">${escapeHtml(typeLabel(item.bug?.type))}</span>
            <span class="public-chip ${publicInfo.author_confirmed ? "confirmed" : ""}">${escapeHtml(t("authorConfirmation", { value: boolText(publicInfo.author_confirmed) }))}</span>
            <span class="public-chip ${publicInfo.resolved ? "resolved" : "open"}">${escapeHtml(publicInfo.resolved ? t("resolved") : t("unresolved"))}</span>
          </div>
        </div>

        <section class="public-detail-section">
          <h3>${escapeHtml(t("bugInfo"))}</h3>
          <dl class="public-kv">
          ${kv(t("packageName"), escapeHtml(item.app?.package_name || ""))}
          ${kv(t("version"), escapeHtml([item.app?.version_name, item.app?.version_code].filter(Boolean).join(" / ")))}
          ${kv(t("expected"), escapeHtml(localizedBugText(item, "expected")))}
          ${collapsibleKv(t("actual"), localizedBugText(item, "actual"))}
          ${kv(t("sourceCode"), linkOrText(item.app?.source_code_url))}
          ${kv("Issue", linkOrText(publicInfo.github_url || item.app?.issue_tracker_url))}
          </dl>
        </section>

        <section class="public-detail-section">
          <h3>${escapeHtml(t("reproductionTrace"))}</h3>
          ${renderTrace(item)}
        </section>
      </div>
    </article>
  `;
  const close = () => {
    state.selectedId = "";
    render();
  };
  els.detail.querySelector(".public-close")?.addEventListener("click", close);
  els.detail.querySelector("[data-close-detail]")?.addEventListener("click", close);
}

function render() {
  requireElement(els.count, "public-count");
  requireElement(els.isstaFilter, "issta-filter");
  els.count.textContent = t("currentCount", { count: state.filtered.length });
  const isstaCount = countWhere(isIsstaPaperBug);
  els.isstaFilter.textContent = t("isstaOnly", { count: isstaCount });
  els.isstaFilter.setAttribute("aria-pressed", String(state.isstaOnly));
  const bugsHint = document.querySelector("#bugs .public-section-head p");
  if (bugsHint) {
    bugsHint.textContent = t("matchingHint", {
      category: categoryLabel(state.activeCategory),
      count: state.filtered.length,
    });
  }
  renderSummary();
  renderChart();
  renderCategories();
  renderList();
  renderDetail();
}

function applyStaticTranslations() {
  document.documentElement.lang = state.language === "en" ? "en" : "zh-CN";
  document.title = t("pageTitle");
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });
  document.querySelector(".public-sidebar")?.setAttribute("aria-label", t("sidebarAria"));
  document.querySelector(".public-bug-filters")?.setAttribute("aria-label", t("filtersAria"));
  els.languageSwitch?.setAttribute("aria-label", t("languageSwitch"));
  els.languageSwitch?.querySelectorAll("button[data-language]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.language === state.language));
  });
}

function setLanguage(language) {
  state.language = language === "en" ? "en" : "zh";
  try {
    localStorage.setItem("fim-language-v2", state.language);
  } catch {
    // The language still changes when storage is unavailable.
  }
  applyStaticTranslations();
  populateTypeFilter();
  render();
}

els.typeFilter?.addEventListener("change", () => {
  state.activeCategory = "all";
  applyFilters();
});
els.confirmedFilter?.addEventListener("change", applyFilters);
els.resolvedFilter?.addEventListener("change", applyFilters);
els.isstaFilter?.addEventListener("click", () => {
  state.isstaOnly = !state.isstaOnly;
  state.selectedId = "";
  applyFilters();
});
els.languageSwitch?.querySelectorAll("button[data-language]").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.language));
});

applyStaticTranslations();
loadPublicBugs().catch((error) => {
  els.list.innerHTML = `<div class="public-empty-state">${escapeHtml(error.message)}</div>`;
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && state.selectedId) {
    state.selectedId = "";
    render();
  }
});

const sideNavLinks = [...document.querySelectorAll(".public-side-nav a[href^='#']")];

function setActiveSection(sectionId) {
  sideNavLinks.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${sectionId}`);
  });
}

sideNavLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href")?.slice(1);
    const target = targetId ? document.getElementById(targetId) : null;
    if (!target) return;
    event.preventDefault();
    setActiveSection(targetId);
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", `#${targetId}`);
  });
});

const sectionObserver = new IntersectionObserver((entries) => {
  const visible = entries
    .filter((entry) => entry.isIntersecting)
    .sort((left, right) => right.intersectionRatio - left.intersectionRatio)[0];
  if (visible?.target?.id) {
    setActiveSection(visible.target.id);
  }
}, {
  root: null,
  rootMargin: "-25% 0px -55% 0px",
  threshold: [0.08, 0.2, 0.45, 0.7],
});

["overview", "insights", "bugs"].forEach((id) => {
  const section = document.getElementById(id);
  if (section) sectionObserver.observe(section);
});
