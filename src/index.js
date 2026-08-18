// ============================================================
// MOSS New API Pricing Worker V2
// - /pricing only
// - fetches full /api/pricing list in browser
// - renders ALL models on one page
// - no pagination
// - preserves New API top header by overlaying below it
// ============================================================

const GLOBAL_CSS = String.raw`
#moss-pricing-app {
  --m-bg: #f7f9fc;
  --m-panel: rgba(255,255,255,.88);
  --m-panel-strong: #ffffff;
  --m-border: rgba(17,24,39,.08);
  --m-border-2: rgba(17,24,39,.13);
  --m-text: #111827;
  --m-muted: #6b7280;
  --m-muted-2: #9ca3af;
  --m-accent: #6d7cff;
  --m-accent-soft: rgba(109,124,255,.08);
  --m-green: #18a96b;

  position: fixed;
  inset: 64px 0 0 0;
  z-index: 30;
  overflow-y: auto;
  overflow-x: hidden;
  overscroll-behavior: contain;

  background:
    radial-gradient(900px 430px at 50% -130px, rgba(98,113,255,.10), transparent 70%),
    var(--m-bg);

  color: var(--m-text);
  font-family:
    Inter,
    ui-sans-serif,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    sans-serif;

  -webkit-font-smoothing: antialiased;
}

html.dark #moss-pricing-app,
.dark #moss-pricing-app {
  --m-bg: #080b10;
  --m-panel: rgba(17,21,28,.82);
  --m-panel-strong: #11151c;
  --m-border: rgba(255,255,255,.08);
  --m-border-2: rgba(255,255,255,.14);
  --m-text: rgba(247,249,253,.96);
  --m-muted: rgba(215,221,232,.57);
  --m-muted-2: rgba(215,221,232,.36);
  --m-accent: #8ca5ff;
  --m-accent-soft: rgba(140,165,255,.08);
  --m-green: #77d5a5;

  background:
    radial-gradient(900px 430px at 50% -130px, rgba(95,118,215,.14), transparent 70%),
    var(--m-bg);
}

#moss-pricing-app * {
  box-sizing: border-box;
}

#moss-pricing-app .moss-market-shell {
  width: min(1160px, calc(100vw - 44px));
  margin: 0 auto;
  padding: 48px 0 110px;
}

#moss-pricing-app .moss-market-hero {
  max-width: 820px;
}

#moss-pricing-app .moss-market-kicker {
  display: inline-flex;
  align-items: center;
  height: 24px;
  padding: 0 9px;
  border: 1px solid color-mix(in srgb, var(--m-accent) 24%, transparent);
  border-radius: 7px;
  background: var(--m-accent-soft);
  color: var(--m-accent);
  font-size: 9px;
  font-weight: 760;
  letter-spacing: .14em;
}

#moss-pricing-app .moss-market-title {
  margin: 15px 0 0;
  font-size: clamp(32px, 4vw, 52px);
  line-height: 1.06;
  letter-spacing: -.045em;
  font-weight: 740;
}

#moss-pricing-app .moss-market-lead {
  margin: 14px 0 0;
  max-width: 680px;
  color: var(--m-muted);
  font-size: 13px;
  line-height: 1.7;
}

#moss-pricing-app .moss-endpoint-row {
  display: flex;
  align-items: stretch;
  width: min(720px, 100%);
  min-height: 44px;
  margin-top: 22px;
  overflow: hidden;
  border: 1px solid var(--m-border);
  border-radius: 10px;
  background: var(--m-panel);
  box-shadow: 0 8px 30px rgba(0,0,0,.035);
}

#moss-pricing-app .moss-endpoint-label {
  display: flex;
  align-items: center;
  flex: 0 0 auto;
  padding: 0 12px;
  border-right: 1px solid var(--m-border);
  color: var(--m-muted-2);
  font-size: 8px;
  font-weight: 700;
  letter-spacing: .11em;
}

#moss-pricing-app .moss-endpoint-value {
  display: flex;
  align-items: center;
  min-width: 0;
  flex: 1 1 auto;
  padding: 0 13px;
  color: var(--m-muted);
  font: 11px/1.2 ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

#moss-pricing-app .moss-endpoint-copy {
  flex: 0 0 auto;
  min-width: 58px;
  border: 0;
  border-left: 1px solid var(--m-border);
  background: transparent;
  color: var(--m-muted);
  font-size: 9px;
  font-weight: 650;
  cursor: pointer;
}

#moss-pricing-app .moss-endpoint-copy:hover {
  background: var(--m-accent-soft);
  color: var(--m-text);
}

#moss-pricing-app .moss-api-meta {
  margin-top: 9px;
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}

#moss-pricing-app .moss-api-meta span {
  min-height: 21px;
  padding: 0 7px;
  display: inline-flex;
  align-items: center;
  border: 1px solid var(--m-border);
  border-radius: 5px;
  color: var(--m-muted-2);
  background: var(--m-panel);
  font-size: 8px;
  font-weight: 650;
  letter-spacing: .04em;
}

#moss-pricing-app .moss-api-meta span:first-child {
  color: var(--m-green);
}

#moss-pricing-app .moss-market-toolbar {
  margin-top: 34px;
  display: grid;
  grid-template-columns: minmax(0,1fr) minmax(260px, 360px);
  align-items: end;
  gap: 20px;
}

#moss-pricing-app .moss-market-heading h2 {
  margin: 0;
  font-size: 20px;
  line-height: 1.2;
  font-weight: 700;
  letter-spacing: -.025em;
}

#moss-pricing-app .moss-market-heading p {
  margin: 6px 0 0;
  color: var(--m-muted);
  font-size: 11px;
}

#moss-pricing-app .moss-market-count {
  color: var(--m-text);
  font-weight: 720;
}

#moss-pricing-app .moss-search {
  position: relative;
}

#moss-pricing-app .moss-search input {
  width: 100%;
  height: 40px;
  padding: 0 38px 0 36px;
  border: 1px solid var(--m-border);
  border-radius: 10px;
  outline: none;
  background: var(--m-panel);
  color: var(--m-text);
  font: inherit;
  font-size: 11px;
  box-shadow: 0 6px 24px rgba(0,0,0,.025);
}

#moss-pricing-app .moss-search input::placeholder {
  color: var(--m-muted-2);
}

#moss-pricing-app .moss-search input:focus {
  border-color: color-mix(in srgb, var(--m-accent) 32%, transparent);
  box-shadow: 0 0 0 3px var(--m-accent-soft);
}

#moss-pricing-app .moss-search-icon {
  position: absolute;
  left: 12px;
  top: 50%;
  width: 14px;
  height: 14px;
  transform: translateY(-50%);
  color: var(--m-muted-2);
  pointer-events: none;
}

#moss-pricing-app .moss-provider-list {
  margin-top: 16px;
  display: grid;
  gap: 10px;
}

#moss-pricing-app .moss-provider-section {
  border: 1px solid var(--m-border);
  border-radius: 12px;
  overflow: hidden;
  background: var(--m-panel);
  box-shadow: 0 8px 28px rgba(0,0,0,.025);
}

#moss-pricing-app .moss-provider-head {
  min-height: 62px;
  padding: 12px 14px;
  display: flex;
  align-items: center;
  gap: 11px;
  border-bottom: 1px solid var(--m-border);
}

#moss-pricing-app .moss-provider-mark {
  flex: 0 0 36px;
  width: 36px;
  height: 36px;
  display: grid;
  place-items: center;
  border: 1px solid var(--m-border);
  border-radius: 9px;
  background: var(--m-accent-soft);
  color: var(--m-accent);
  font: 700 13px/1 ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace;
}

#moss-pricing-app .moss-provider-copy {
  min-width: 0;
  flex: 1 1 auto;
}

#moss-pricing-app .moss-provider-name {
  margin: 0;
  font-size: 13px;
  font-weight: 700;
}

#moss-pricing-app .moss-provider-sub {
  margin-top: 3px;
  color: var(--m-muted-2);
  font-size: 9px;
}

#moss-pricing-app .moss-provider-total {
  flex: 0 0 auto;
  min-height: 23px;
  padding: 0 8px;
  display: inline-flex;
  align-items: center;
  border: 1px solid var(--m-border);
  border-radius: 999px;
  color: var(--m-muted);
  background: var(--m-panel-strong);
  font-size: 9px;
  font-weight: 650;
}

#moss-pricing-app .moss-model-grid {
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0,1fr));
  gap: 7px;
}

#moss-pricing-app .moss-model-card {
  min-width: 0;
  padding: 10px 10px 9px;
  border: 1px solid var(--m-border);
  border-radius: 9px;
  background: var(--m-panel-strong);
  transition:
    transform .14s ease,
    border-color .14s ease,
    background .14s ease;
}

#moss-pricing-app .moss-model-card:hover {
  transform: translateY(-1px);
  border-color: var(--m-border-2);
  background:
    linear-gradient(180deg, var(--m-accent-soft), transparent),
    var(--m-panel-strong);
}

#moss-pricing-app .moss-model-top {
  display: flex;
  align-items: flex-start;
  gap: 8px;
}

#moss-pricing-app .moss-model-main {
  min-width: 0;
  flex: 1 1 auto;
}

#moss-pricing-app .moss-model-name {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: var(--m-text);
  font: 680 10.5px/1.35 ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace;
}

#moss-pricing-app .moss-model-prices {
  margin-top: 5px;
  display: flex;
  flex-wrap: wrap;
  gap: 5px 8px;
  color: var(--m-muted);
  font-size: 8.5px;
}

#moss-pricing-app .moss-model-prices b {
  color: var(--m-text);
  font-family: ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace;
  font-weight: 650;
}

#moss-pricing-app .moss-copy-model {
  flex: 0 0 27px;
  width: 27px;
  height: 27px;
  display: grid;
  place-items: center;
  border: 1px solid var(--m-border);
  border-radius: 7px;
  background: transparent;
  color: var(--m-muted-2);
  cursor: pointer;
}

#moss-pricing-app .moss-copy-model:hover {
  color: var(--m-text);
  background: var(--m-accent-soft);
}

#moss-pricing-app .moss-copy-model svg {
  width: 12px;
  height: 12px;
}

#moss-pricing-app .moss-model-foot {
  margin-top: 8px;
  padding-top: 7px;
  border-top: 1px solid var(--m-border);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 5px;
}

#moss-pricing-app .moss-tag {
  min-height: 18px;
  padding: 0 6px;
  display: inline-flex;
  align-items: center;
  border: 1px solid var(--m-border);
  border-radius: 999px;
  color: var(--m-muted-2);
  background: transparent;
  font-size: 7.5px;
  line-height: 1;
}

#moss-pricing-app .moss-state {
  margin-top: 16px;
  min-height: 130px;
  display: grid;
  place-items: center;
  border: 1px dashed var(--m-border-2);
  border-radius: 12px;
  color: var(--m-muted);
  text-align: center;
  font-size: 11px;
}

#moss-pricing-app .moss-toast {
  position: fixed;
  left: 50%;
  bottom: 34px;
  z-index: 100;
  transform: translateX(-50%);
  min-height: 32px;
  padding: 0 11px;
  display: flex;
  align-items: center;
  border: 1px solid var(--m-border-2);
  border-radius: 8px;
  background: var(--m-panel-strong);
  color: var(--m-text);
  box-shadow: 0 12px 30px rgba(0,0,0,.14);
  font-size: 9px;
  pointer-events: none;
}

@media (max-width: 900px) {
  #moss-pricing-app .moss-market-shell {
    width: calc(100vw - 28px);
    padding-top: 38px;
  }

  #moss-pricing-app .moss-model-grid {
    grid-template-columns: repeat(2,minmax(0,1fr));
  }
}

@media (max-width: 680px) {
  #moss-pricing-app {
    inset-top: 56px;
    inset: 56px 0 0 0;
  }

  #moss-pricing-app .moss-market-shell {
    width: calc(100vw - 20px);
    padding: 28px 0 92px;
  }

  #moss-pricing-app .moss-market-title {
    font-size: 29px;
  }

  #moss-pricing-app .moss-market-lead {
    font-size: 11.5px;
  }

  #moss-pricing-app .moss-market-toolbar {
    margin-top: 26px;
    grid-template-columns: 1fr;
    gap: 12px;
  }

  #moss-pricing-app .moss-model-grid {
    grid-template-columns: 1fr;
  }

  #moss-pricing-app .moss-endpoint-label {
    display: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  #moss-pricing-app *,
  #moss-pricing-app {
    transition: none !important;
    animation: none !important;
  }
}
`;

const CLIENT_JS = String.raw`
(() => {
  "use strict";

  if (location.pathname !== "/pricing" && !location.pathname.startsWith("/pricing/")) {
    return;
  }

  const ROOT_ID = "moss-pricing-app";

  if (document.getElementById(ROOT_ID)) {
    return;
  }

  const esc = (value) =>
    String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");

  const copyIcon = `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
      <rect x="9" y="9" width="10" height="10" rx="2"></rect>
      <path d="M15 9V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path>
    </svg>
  `;

  const searchIcon = `
    <svg class="moss-search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
      <circle cx="11" cy="11" r="7"></circle>
      <path d="m20 20-3.4-3.4"></path>
    </svg>
  `;

  const pickNumber = (obj, keys) => {
    for (const key of keys) {
      const value = Number(obj?.[key]);
      if (Number.isFinite(value)) return value;
    }
    return null;
  };

  const fmt = (num) => {
    if (!Number.isFinite(num)) return null;
    if (Math.abs(num) >= 100) return num.toFixed(0);
    if (Math.abs(num) >= 10) return num.toFixed(2).replace(/\.?0+$/, "");
    if (Math.abs(num) >= 1) return num.toFixed(3).replace(/\.?0+$/, "");
    return num.toFixed(6).replace(/0+$/, "").replace(/\.$/, "");
  };

  const normalize = (json) => {
    if (Array.isArray(json?.data)) {
      return {
        models: json.data,
        vendors: Array.isArray(json.vendors) ? json.vendors : [],
        groups: json.usable_group || {},
        groupRatio: json.group_ratio || {},
      };
    }

    if (json?.data && typeof json.data === "object") {
      return {
        models: Array.isArray(json.data.data)
          ? json.data.data
          : Array.isArray(json.data.models)
            ? json.data.models
            : [],
        vendors: Array.isArray(json.data.vendors)
          ? json.data.vendors
          : Array.isArray(json.vendors)
            ? json.vendors
            : [],
        groups: json.data.usable_group || json.usable_group || {},
        groupRatio: json.data.group_ratio || json.group_ratio || {},
      };
    }

    return {
      models: [],
      vendors: [],
      groups: {},
      groupRatio: {},
    };
  };

  const inferProvider = (name) => {
    const n = String(name || "").toLowerCase();
    const rules = [
      [/(gpt|o1|o3|o4|openai|chatgpt)/, "OpenAI"],
      [/(claude|anthropic)/, "Anthropic"],
      [/(gemini|google)/, "Google"],
      [/(deepseek)/, "DeepSeek"],
      [/(qwen|qwq|tongyi)/, "Qwen"],
      [/(glm|zhipu|chatglm)/, "Zhipu"],
      [/(kimi|moonshot)/, "Moonshot"],
      [/(minimax)/, "MiniMax"],
      [/(mistral|mixtral)/, "Mistral"],
      [/(llama|meta)/, "Meta"],
      [/(grok|xai)/, "xAI"],
      [/(doubao|seed)/, "Doubao"],
      [/(ernie|baidu)/, "Baidu"],
      [/(mimo|xiaomi)/, "Xiaomi"],
      [/(cerebras)/, "Cerebras"],
    ];

    for (const [pattern, provider] of rules) {
      if (pattern.test(n)) return provider;
    }

    return "Other";
  };

  const buildGroups = (models, vendors) => {
    const vendorMap = new Map();

    for (const vendor of vendors) {
      vendorMap.set(String(vendor?.id), vendor);
    }

    const groups = new Map();

    for (const model of models) {
      const vendor = vendorMap.get(String(model?.vendor_id));
      const provider =
        vendor?.name ||
        model?.vendor_name ||
        inferProvider(model?.model_name);

      const key = String(provider);

      if (!groups.has(key)) {
        groups.set(key, {
          name: provider,
          description: vendor?.description || "OpenAI compatible",
          models: [],
        });
      }

      groups.get(key).models.push(model);
    }

    return [...groups.values()]
      .map((group) => ({
        ...group,
        models: group.models.sort((a, b) =>
          String(a?.model_name || "").localeCompare(
            String(b?.model_name || ""),
            undefined,
            { numeric: true, sensitivity: "base" }
          )
        ),
      }))
      .sort((a, b) =>
        a.name.localeCompare(b.name, undefined, {
          numeric: true,
          sensitivity: "base",
        })
      );
  };

  const priceHTML = (model) => {
    const input = pickNumber(model, [
      "input_price",
      "prompt_price",
      "input_price_per_m",
      "input_price_per_1m",
      "prompt_price_per_m",
    ]);

    const output = pickNumber(model, [
      "output_price",
      "completion_price",
      "output_price_per_m",
      "output_price_per_1m",
      "completion_price_per_m",
    ]);

    const fixed = pickNumber(model, ["model_price"]);
    const modelRatio = pickNumber(model, ["model_ratio"]);
    const completionRatio = pickNumber(model, ["completion_ratio"]);

    if (input !== null || output !== null) {
      return [
        input !== null ? `<span>输入 <b>$${fmt(input)}</b></span>` : "",
        output !== null ? `<span>输出 <b>$${fmt(output)}</b></span>` : "",
      ].join("");
    }

    if (Number(model?.quota_type) === 1 && fixed !== null) {
      return `<span>固定 <b>$${fmt(fixed)}</b></span>`;
    }

    if (modelRatio !== null) {
      const outRatio =
        completionRatio !== null
          ? modelRatio * completionRatio
          : null;

      return [
        `<span>输入 <b>x${fmt(modelRatio)}</b></span>`,
        outRatio !== null
          ? `<span>输出 <b>x${fmt(outRatio)}</b></span>`
          : "",
      ].join("");
    }

    return `<span>价格 <b>—</b></span>`;
  };

  const modelCard = (model) => {
    const name = String(model?.model_name || "");
    const rawGroups =
      model?.enable_group ||
      model?.enable_groups ||
      [];

    const groups = Array.isArray(rawGroups)
      ? rawGroups
      : [];

    const tags = [
      ...groups.slice(0, 2),
      ...(Array.isArray(model?.supported_endpoint_types)
        ? model.supported_endpoint_types.slice(0, 1).map(() => "API")
        : []),
    ];

    return `
      <article class="moss-model-card" data-name="${esc(name.toLowerCase())}">
        <div class="moss-model-top">
          <div class="moss-model-main">
            <span class="moss-model-name" title="${esc(name)}">${esc(name)}</span>
            <div class="moss-model-prices">${priceHTML(model)}</div>
          </div>

          <button
            type="button"
            class="moss-copy-model"
            data-model="${esc(name)}"
            aria-label="复制模型名称"
            title="复制"
          >${copyIcon}</button>
        </div>

        <div class="moss-model-foot">
          ${tags.map((tag) => `<span class="moss-tag">${esc(tag)}</span>`).join("")}
        </div>
      </article>
    `;
  };

  const root = document.createElement("main");
  root.id = ROOT_ID;

  root.innerHTML = `
    <div class="moss-market-shell">
      <section class="moss-market-hero">
        <span class="moss-market-kicker">UNIFIED AI GATEWAY</span>
        <h1 class="moss-market-title">一个 API，调用所有可用模型。</h1>
        <p class="moss-market-lead">
          全部模型在同一页面连续展示，不分页。模型与价格数据直接读取当前 New API 的模型广场接口。
        </p>

        <div class="moss-endpoint-row">
          <span class="moss-endpoint-label">BASE URL</span>
          <code class="moss-endpoint-value">${esc(location.origin)}/v1</code>
          <button class="moss-endpoint-copy" type="button">复制</button>
        </div>

        <div class="moss-api-meta">
          <span>POST</span>
          <span>/chat/completions</span>
          <span>OPENAI COMPATIBLE</span>
        </div>
      </section>

      <section class="moss-market-toolbar">
        <div class="moss-market-heading">
          <h2>全部模型</h2>
          <p>
            当前共 <span class="moss-market-count">—</span> 个模型，
            已全部加载到本页。
          </p>
        </div>

        <label class="moss-search">
          ${searchIcon}
          <input
            type="search"
            autocomplete="off"
            spellcheck="false"
            placeholder="搜索模型或提供商"
            aria-label="搜索模型或提供商"
          >
        </label>
      </section>

      <section class="moss-provider-list">
        <div class="moss-state">正在读取全部模型…</div>
      </section>
    </div>
  `;

  document.body.appendChild(root);

  const toast = (message) => {
    root.querySelector(".moss-toast")?.remove();
    const el = document.createElement("div");
    el.className = "moss-toast";
    el.textContent = message;
    root.appendChild(el);
    setTimeout(() => el.remove(), 1300);
  };

  const copy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const area = document.createElement("textarea");
      area.value = text;
      area.style.position = "fixed";
      area.style.opacity = "0";
      document.body.appendChild(area);
      area.select();
      document.execCommand("copy");
      area.remove();
    }

    toast("已复制：" + text);
  };

  root
    .querySelector(".moss-endpoint-copy")
    ?.addEventListener("click", () => copy(location.origin + "/v1"));

  const list = root.querySelector(".moss-provider-list");
  const count = root.querySelector(".moss-market-count");
  const search = root.querySelector(".moss-search input");

  fetch("/api/pricing", {
    method: "GET",
    credentials: "include",
    headers: {
      Accept: "application/json",
    },
    cache: "no-store",
  })
    .then((res) => {
      if (!res.ok) throw new Error("HTTP " + res.status);
      return res.json();
    })
    .then((json) => {
      const normalized = normalize(json);
      const allModels = normalized.models;
      const providers = buildGroups(allModels, normalized.vendors);

      count.textContent = String(allModels.length);

      if (!allModels.length) {
        list.innerHTML = `<div class="moss-state">当前没有可展示模型。</div>`;
        return;
      }

      list.innerHTML = providers
        .map((provider) => `
          <section
            class="moss-provider-section"
            data-provider="${esc(provider.name.toLowerCase())}"
          >
            <header class="moss-provider-head">
              <div class="moss-provider-mark">
                ${esc(provider.name.trim().charAt(0).toUpperCase() || "?")}
              </div>

              <div class="moss-provider-copy">
                <h3 class="moss-provider-name">${esc(provider.name)}</h3>
                <div class="moss-provider-sub">${esc(provider.description || "")}</div>
              </div>

              <span class="moss-provider-total">
                ${provider.models.length} 个
              </span>
            </header>

            <div class="moss-model-grid">
              ${provider.models.map(modelCard).join("")}
            </div>
          </section>
        `)
        .join("");

      root
        .querySelectorAll(".moss-copy-model")
        .forEach((button) => {
          button.addEventListener("click", () =>
            copy(button.dataset.model || "")
          );
        });

      search.addEventListener("input", () => {
        const q = search.value.trim().toLowerCase();
        let visible = 0;

        root
          .querySelectorAll(".moss-provider-section")
          .forEach((section) => {
            const provider = String(section.dataset.provider || "");
            let sectionVisible = 0;

            section
              .querySelectorAll(".moss-model-card")
              .forEach((card) => {
                const name = String(card.dataset.name || "");
                const match =
                  !q ||
                  provider.includes(q) ||
                  name.includes(q);

                card.style.display = match ? "" : "none";

                if (match) {
                  sectionVisible++;
                  visible++;
                }
              });

            section.style.display =
              sectionVisible > 0 ? "" : "none";
          });

        count.textContent = q
          ? String(visible) + " / " + String(allModels.length)
          : String(allModels.length);
      });
    })
    .catch((error) => {
      console.error("[MOSS Pricing V2]", error);
      count.textContent = "0";
      list.innerHTML = `
        <div class="moss-state">
          全部模型加载失败，请刷新页面后重试。
        </div>
      `;
    });
})();
`;

class HeadInjector {
  element(element) {
    element.append(
      `<style id="moss-pricing-v2-style">${GLOBAL_CSS}</style>`,
      { html: true }
    );
  }
}

class BodyInjector {
  element(element) {
    element.append(
      `<script id="moss-pricing-v2-script">${CLIENT_JS}<\/script>`,
      { html: true }
    );
  }
}

function withHeader(response, value) {
  const headers = new Headers(response.headers);
  headers.set("X-MOSS-Pricing-Skin", value);

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (url.pathname !== "/pricing" && !url.pathname.startsWith("/pricing/")) {
      return fetch(request);
    }

    const upstream = await fetch(request);
    const contentType = upstream.headers.get("content-type") || "";

    if (!contentType.toLowerCase().includes("text/html")) {
      return withHeader(upstream, "bypass-non-html");
    }

    const transformed = new HTMLRewriter()
      .on("head", new HeadInjector())
      .on("body", new BodyInjector())
      .transform(upstream);

    return withHeader(transformed, "active-v2-all-models");
  },
};
