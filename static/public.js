const state = {
  bugs: [],
  filtered: [],
  selectedId: "",
  activeCategory: "all",
};

const els = {
  list: document.querySelector("#public-list"),
  detail: document.querySelector("#public-detail"),
  typeFilter: document.querySelector("#type-filter"),
  confirmedFilter: document.querySelector("#confirmed-filter"),
  resolvedFilter: document.querySelector("#resolved-filter"),
  count: document.querySelector("#public-count"),
  summary: document.querySelector("#public-summary"),
  chart: document.querySelector("#public-chart"),
  categories: document.querySelector("#public-categories"),
};

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
  return value ? "是" : "否";
}

function linkOrText(url, fallback = "无") {
  if (!url) return escapeHtml(fallback);
  return `<a href="${escapeHtml(url)}" target="_blank" rel="noreferrer">${escapeHtml(url)}</a>`;
}

function typeLabel(type) {
  return {
    crash: "崩溃",
    logic_error: "逻辑",
    ui_error: "界面",
  }[type] || type || "未知";
}

function severityLabel(severity) {
  return {
    high: "高",
    medium: "中",
    low: "低",
  }[severity] || severity || "未评级";
}

function categoryLabel(category) {
  return {
    all: "全部已审核缺陷",
    public_issues: "已提交缺陷单",
    type_crash: "崩溃类缺陷",
    type_logic_error: "逻辑类缺陷",
    type_ui_error: "界面类缺陷",
    severity_high: "高优先级缺陷",
    severity_medium: "中优先级缺陷",
    severity_low: "低优先级缺陷",
    status_confirmed: "作者已确认",
    status_resolved: "已解决",
    status_open: "尚未解决",
  }[category] || "已选择缺陷";
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

function firstScreenshot(item) {
  const step = (item.trace || []).find((entry) => entry?.page?.screenshot_url);
  return step?.page?.screenshot_url || "";
}

function previewText(item) {
  return item.public?.public_note || item.bug?.actual || item.bug?.expected || item.app?.summary || "打开卡片查看复现证据。";
}

async function loadPublicBugs() {
  if (window.FIM_PUBLIC_BUGS) {
    state.bugs = window.FIM_PUBLIC_BUGS.bugs || [];
    populateTypeFilter();
    applyFilters();
    return;
  }
  const res = await fetch("data/public_bugs.json");
  const data = await res.json();
  state.bugs = data.bugs || [];
  populateTypeFilter();
  applyFilters();
}

function populateTypeFilter() {
  requireElement(els.typeFilter, "type-filter");
  const types = [...new Set(state.bugs.map((item) => item.bug?.type).filter(Boolean))].sort();
  els.typeFilter.innerHTML = '<option value="all">全部类型</option>' + types.map((type) => {
    return `<option value="${escapeHtml(type)}">${escapeHtml(typeLabel(type))}</option>`;
  }).join("");
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
    return confirmedOk && resolvedOk && typeOk && categoryOf(item, state.activeCategory);
  });
  if (state.selectedId && !state.filtered.some((item) => item.id === state.selectedId)) state.selectedId = "";
  render();
}

function setCategory(category) {
  state.activeCategory = category;
  state.selectedId = "";
  applyFilters();
  document.querySelector("#bugs")?.scrollIntoView({behavior: "smooth", block: "start"});
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
    <button type="button" data-category="all"><strong>${escapeHtml(state.bugs.length)}</strong><span>审核缺陷</span></button>
    <button type="button" data-category="public_issues"><strong>${escapeHtml(submitted)}</strong><span>已提交缺陷单</span></button>
    <button type="button" data-category="status_confirmed"><strong>${escapeHtml(confirmed)}</strong><span>作者确认</span></button>
    <button type="button" data-category="status_resolved"><strong>${escapeHtml(resolved)}</strong><span>已解决</span></button>
    <button type="button" data-category="severity_high"><strong>${escapeHtml(high)}</strong><span>高优先级</span></button>
    <button type="button" data-category="all"><strong>${escapeHtml(appCount)}</strong><span>覆盖应用</span></button>
  `;
  els.summary.querySelectorAll("button[data-category]").forEach((button) => {
    button.addEventListener("click", () => setCategory(button.dataset.category));
  });
}

function renderChart() {
  requireElement(els.chart, "public-chart");
  const typeBars = [
    {key: "type_logic_error", label: "逻辑", value: countWhere((item) => item.bug?.type === "logic_error")},
    {key: "type_ui_error", label: "界面", value: countWhere((item) => item.bug?.type === "ui_error")},
    {key: "type_crash", label: "崩溃", value: countWhere((item) => item.bug?.type === "crash")},
  ].filter((item) => item.value > 0);
  const severityBars = [
    {key: "severity_high", label: "高", value: countWhere((item) => item.bug?.severity === "high")},
    {key: "severity_medium", label: "中", value: countWhere((item) => item.bug?.severity === "medium")},
    {key: "severity_low", label: "低", value: countWhere((item) => item.bug?.severity === "low")},
  ].filter((item) => item.value > 0);
  const topApps = [...state.bugs.reduce((map, item) => {
    const key = item.app?.app_name || item.app?.package_name || "未知应用";
    map.set(key, (map.get(key) || 0) + 1);
    return map;
  }, new Map()).entries()]
    .sort((left, right) => right[1] - left[1])
    .slice(0, 5)
    .map(([label, value]) => ({label, value}));
  const resolved = countWhere((item) => item.public?.resolved);
  const confirmed = countWhere((item) => item.public?.author_confirmed);
  const submitted = countWhere((item) => item.public?.issue_submitted);
  const open = Math.max(0, state.bugs.length - resolved);
  const screenshots = state.bugs.reduce((total, item) => total + (item.trace || []).filter((step) => step?.page?.screenshot_url).length, 0);
  const avgSteps = state.bugs.length ? Math.round(state.bugs.reduce((total, item) => total + (item.trace || []).length, 0) / state.bugs.length) : 0;
  if (!typeBars.length) {
    els.chart.innerHTML = '<div class="public-empty-state">暂无类型数据。</div>';
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
        <div class="public-mini-head"><span>类型构成</span><strong>${escapeHtml(state.bugs.length)}</strong></div>
        ${renderBars(typeBars, "按缺陷类型统计")}
      </section>
      <section class="public-data-card">
        <div class="public-mini-head"><span>缺陷单进展</span><strong>${escapeHtml(submitted)}</strong></div>
        <div class="public-status-stack">
          <button type="button" data-category="public_issues"><span>已提交</span><strong>${escapeHtml(submitted)}</strong></button>
          <button type="button" data-category="status_confirmed"><span>作者确认</span><strong>${escapeHtml(confirmed)}</strong></button>
          <button type="button" data-category="status_resolved"><span>已解决</span><strong>${escapeHtml(resolved)}</strong></button>
        </div>
      </section>
      <section class="public-data-card">
        <div class="public-mini-head"><span>优先级</span><strong>${escapeHtml(highPct)}%</strong></div>
        <div class="public-radial" style="--value: ${highPct}">
          <span>${escapeHtml(high)}</span>
          <em>高</em>
        </div>
      </section>
      <section class="public-data-card">
        <div class="public-mini-head"><span>修复状态</span><strong>${escapeHtml(resolvedPct)}%</strong></div>
        <div class="public-status-stack">
          <button type="button" data-category="status_resolved"><span>已解决</span><strong>${escapeHtml(resolved)}</strong></button>
          <button type="button" data-category="status_open"><span>未解决</span><strong>${escapeHtml(open)}</strong></button>
          <button type="button" data-category="status_confirmed"><span>作者确认</span><strong>${escapeHtml(confirmed)}</strong></button>
        </div>
      </section>
      <section class="public-data-card public-data-card-wide">
        <div class="public-mini-head"><span>严重级别</span><strong>${escapeHtml(severityBars.length)}</strong></div>
        ${renderBars(severityBars, "按严重级别统计")}
      </section>
      <section class="public-data-card">
        <div class="public-mini-head"><span>高频应用</span><strong>${escapeHtml(topApps.length)}</strong></div>
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
    {key: "public_issues", title: "已提交", value: countWhere((item) => item.public?.issue_submitted), note: "缺陷单状态"},
    {key: "type_crash", title: "崩溃", value: countWhere((item) => item.bug?.type === "crash"), note: "运行异常"},
    {key: "type_logic_error", title: "逻辑", value: countWhere((item) => item.bug?.type === "logic_error"), note: "行为错误"},
    {key: "type_ui_error", title: "界面", value: countWhere((item) => item.bug?.type === "ui_error"), note: "显示问题"},
    {key: "status_confirmed", title: "已确认", value: countWhere((item) => item.public?.author_confirmed), note: "作者反馈"},
    {key: "status_open", title: "未解决", value: countWhere((item) => !item.public?.resolved), note: "修复状态"},
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
    els.list.innerHTML = '<div class="public-empty-state">没有匹配的缺陷，请切换分类或筛选条件。</div>';
    return;
  }
  els.list.innerHTML = state.filtered.map((item) => {
    const publicInfo = item.public || {};
    const selected = item.id === state.selectedId ? "selected" : "";
    const screenshot = firstScreenshot(item);
    return `
      <article class="public-card ${selected}" data-id="${escapeHtml(item.id)}" tabindex="0">
        <div class="public-card-visual">
          ${screenshot ? `<img src="${escapeHtml(screenshot)}" alt="${escapeHtml(item.app?.app_name || "缺陷截图")}">` : `<span>${escapeHtml(typeLabel(item.bug?.type)).slice(0, 2)}</span>`}
        </div>
        <div class="public-card-content">
          <div class="public-card-kicker">
            <span>${escapeHtml(item.app?.app_name || item.app?.package_name || "未知应用")}</span>
            <span>${escapeHtml(typeLabel(item.bug?.type))}</span>
          </div>
          <h3>${escapeHtml(item.bug?.description || item.id)}</h3>
          <p>${escapeHtml(previewText(item))}</p>
          <div class="public-card-footer">
            <span class="public-chip ${escapeHtml(item.bug?.severity || "")}">${escapeHtml(severityLabel(item.bug?.severity))}</span>
            <span class="public-chip ${publicInfo.issue_submitted ? "confirmed" : ""}">${publicInfo.issue_submitted ? "已提交缺陷单" : "未提交缺陷单"}</span>
            <span class="public-chip ${publicInfo.author_confirmed ? "confirmed" : ""}">${publicInfo.author_confirmed ? "作者已确认" : "作者未确认"}</span>
            <span class="public-chip ${publicInfo.resolved ? "resolved" : "open"}">${publicInfo.resolved ? "已解决" : "未解决"}</span>
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
  return `<dt>${escapeHtml(label)}</dt><dd>${value || "无"}</dd>`;
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
          <span class="public-collapse-more">展开</span>
        </summary>
        <p>${escaped}</p>
      </details>
    </dd>
  `;
}

function renderTrace(trace) {
  if (!trace?.length) return '<div class="public-empty-state">暂无复现轨迹。</div>';
  return `
    <div class="public-trace">
      ${trace.map((step) => {
        const page = step.page || {};
        const op = step.operation || {};
        return `
          <article class="public-trace-card">
            ${page.screenshot_url ? `<img src="${escapeHtml(page.screenshot_url)}" alt="step ${escapeHtml(step.step_index)}">` : ""}
            <div class="public-trace-body">
              <div class="public-trace-head">
                <strong>步骤 ${escapeHtml(step.step_index)}</strong>
                <span>${escapeHtml(op.action_name || "未知操作")}</span>
              </div>
              <p>${escapeHtml(step.thought || "")}</p>
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
    <article class="public-detail-card" role="dialog" aria-modal="true" aria-label="缺陷详情">
      <div class="public-modal-bar">
        <span>Fim 证据包</span>
        <button class="public-close" type="button" aria-label="关闭详情">关闭</button>
      </div>
      <div class="public-detail-scroll">
        <div class="public-detail-head">
          <span>${escapeHtml(item.app?.app_name || item.app?.package_name || "未知应用")}</span>
          <h2>${escapeHtml(item.bug?.description || item.id)}</h2>
          <div class="public-card-footer">
            <span class="public-chip ${escapeHtml(item.bug?.severity || "")}">${escapeHtml(severityLabel(item.bug?.severity))}</span>
            <span class="public-chip">${escapeHtml(typeLabel(item.bug?.type))}</span>
            <span class="public-chip ${publicInfo.author_confirmed ? "confirmed" : ""}">作者确认：${boolText(publicInfo.author_confirmed)}</span>
            <span class="public-chip ${publicInfo.resolved ? "resolved" : "open"}">${publicInfo.resolved ? "已解决" : "未解决"}</span>
          </div>
        </div>

        <section class="public-detail-section">
          <h3>缺陷信息</h3>
          <dl class="public-kv">
          ${kv("包名", escapeHtml(item.app?.package_name || ""))}
          ${kv("版本", escapeHtml([item.app?.version_name, item.app?.version_code].filter(Boolean).join(" / ")))}
          ${kv("预期", escapeHtml(item.bug?.expected || ""))}
          ${collapsibleKv("实际", item.bug?.actual || "")}
          ${kv("源码", linkOrText(item.app?.source_code_url))}
          </dl>
        </section>

        <section class="public-detail-section">
          <h3>复现轨迹</h3>
          ${renderTrace(item.trace)}
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
  els.count.textContent = `当前展示 ${state.filtered.length} 个`;
  const bugsHint = document.querySelector("#bugs .public-section-head p");
  if (bugsHint) {
    bugsHint.textContent = `${categoryLabel(state.activeCategory)} · 当前匹配 ${state.filtered.length} 个已审核缺陷`;
  }
  renderSummary();
  renderChart();
  renderCategories();
  renderList();
  renderDetail();
}

els.typeFilter?.addEventListener("change", () => {
  state.activeCategory = "all";
  applyFilters();
});
els.confirmedFilter?.addEventListener("change", applyFilters);
els.resolvedFilter?.addEventListener("change", applyFilters);

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
    target.scrollIntoView({behavior: "smooth", block: "start"});
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
