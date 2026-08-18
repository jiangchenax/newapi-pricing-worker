// MOSS New API Pricing Skin Worker
// Only intended for route: newapi.mossao.com/pricing*
// No New API/Caddy source modifications.

const PRICING_CSS = String.raw`
/* =========================================================
   MOSS New API /pricing · AI Gateway global skin
   Global document stylesheet (NOT Footer Shadow DOM)
   ========================================================= */

:root {
  --moss-pg-bg: #080b10;
  --moss-pg-panel: rgba(17, 21, 28, .78);
  --moss-pg-panel-hover: rgba(22, 27, 36, .88);
  --moss-pg-line: rgba(255,255,255,.085);
  --moss-pg-line-strong: rgba(255,255,255,.145);
  --moss-pg-text: rgba(246,248,252,.96);
  --moss-pg-muted: rgba(211,218,230,.55);
  --moss-pg-muted-2: rgba(211,218,230,.35);
  --moss-pg-blue: #8aa6ff;
  --moss-pg-green: #79d6a7;
}

/* pricing page fingerprint */
body:has(main.min-w-0.space-y-4 [aria-label="价格显示模式"]) {
  background:
    radial-gradient(900px 520px at 50% -130px, rgba(99,125,215,.13), transparent 68%),
    linear-gradient(180deg, #07090d 0%, #080b10 100%) !important;
  color: var(--moss-pg-text) !important;
}

/* ---------------------------------------------------------
   Injected Hero: hidden elsewhere, visible only on pricing
   --------------------------------------------------------- */

#moss-pricing-hero {
  display: none;
}

body:has(main.min-w-0.space-y-4 [aria-label="价格显示模式"])
#moss-pricing-hero {
  display: block;
  position: absolute;
  top: 86px;
  left: 50%;
  z-index: 20;
  width: min(1120px, calc(100vw - 44px));
  transform: translateX(-50%);
  pointer-events: none;
  color: var(--moss-pg-text);
}

#moss-pricing-hero .moss-pg-kicker {
  display: inline-flex;
  align-items: center;
  min-height: 24px;
  padding: 0 9px;
  border: 1px solid rgba(138,166,255,.20);
  border-radius: 7px;
  background: rgba(108,135,220,.055);
  color: rgba(182,201,255,.84);
  font-size: 9px;
  font-weight: 760;
  letter-spacing: .14em;
}

#moss-pricing-hero h1 {
  max-width: 850px;
  margin: 15px 0 0;
  color: var(--moss-pg-text);
  font-size: clamp(31px, 4.1vw, 50px);
  line-height: 1.06;
  letter-spacing: -.045em;
  font-weight: 720;
}

#moss-pricing-hero p {
  max-width: 720px;
  margin: 14px 0 0;
  color: var(--moss-pg-muted);
  font-size: 13px;
  line-height: 1.7;
}

#moss-pricing-hero .moss-pg-endpoint {
  width: min(720px, 100%);
  min-height: 44px;
  margin-top: 21px;
  display: flex;
  align-items: stretch;
  overflow: hidden;
  border: 1px solid var(--moss-pg-line);
  border-radius: 10px;
  background: rgba(15,18,24,.72);
  box-shadow: inset 0 1px 0 rgba(255,255,255,.03);
}

#moss-pricing-hero .moss-pg-endpoint > span {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  padding: 0 12px;
  border-right: 1px solid var(--moss-pg-line);
  color: var(--moss-pg-muted-2);
  font-size: 8px;
  font-weight: 720;
  letter-spacing: .11em;
}

#moss-pricing-hero .moss-pg-endpoint code {
  min-width: 0;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  padding: 0 13px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: rgba(235,240,249,.82);
  font: 11px/1.2 ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace;
}

#moss-pricing-hero .moss-pg-meta {
  margin-top: 9px;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

#moss-pricing-hero .moss-pg-meta span {
  min-height: 21px;
  padding: 0 7px;
  display: inline-flex;
  align-items: center;
  border: 1px solid rgba(255,255,255,.07);
  border-radius: 5px;
  background: rgba(255,255,255,.02);
  color: rgba(215,222,234,.48);
  font-size: 8px;
  font-weight: 650;
  letter-spacing: .045em;
}

#moss-pricing-hero .moss-pg-meta span:first-child {
  color: rgba(124,216,167,.84);
  border-color: rgba(121,214,167,.13);
  background: rgba(121,214,167,.04);
}

/* ---------------------------------------------------------
   Main pricing container
   --------------------------------------------------------- */

body:has(main.min-w-0.space-y-4 [aria-label="价格显示模式"])
main.min-w-0.space-y-4 {
  position: relative !important;
  z-index: 5 !important;
  width: min(1120px, calc(100vw - 44px)) !important;
  max-width: none !important;
  margin: 330px auto 118px !important;
  padding: 0 !important;
  color: var(--moss-pg-text) !important;
}

/* toolbar */
body:has(main.min-w-0.space-y-4 [aria-label="价格显示模式"])
main.min-w-0.space-y-4 > div:first-child {
  padding: 10px 12px !important;
  border: 1px solid var(--moss-pg-line) !important;
  border-radius: 11px !important;
  background:
    linear-gradient(180deg, rgba(22,26,34,.70), rgba(14,17,23,.76)) !important;
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,.025),
    0 12px 34px rgba(0,0,0,.08) !important;
}

body:has(main.min-w-0.space-y-4 [aria-label="价格显示模式"])
main.min-w-0.space-y-4 > div:first-child button {
  border-color: rgba(255,255,255,.075) !important;
  background: rgba(255,255,255,.018) !important;
  color: rgba(218,224,235,.58) !important;
  box-shadow: none !important;
}

body:has(main.min-w-0.space-y-4 [aria-label="价格显示模式"])
main.min-w-0.space-y-4 > div:first-child button:hover {
  border-color: rgba(255,255,255,.13) !important;
  background: rgba(255,255,255,.05) !important;
  color: rgba(245,248,252,.90) !important;
}

body:has(main.min-w-0.space-y-4 [aria-label="价格显示模式"])
main.min-w-0.space-y-4 > div:first-child button[aria-pressed="true"] {
  border-color: rgba(138,166,255,.18) !important;
  background: rgba(138,166,255,.10) !important;
  color: rgba(231,237,255,.92) !important;
}

body:has(main.min-w-0.space-y-4 [aria-label="价格显示模式"])
main.min-w-0.space-y-4 > div:first-child [role="group"] {
  border-color: rgba(255,255,255,.07) !important;
  background: rgba(255,255,255,.018) !important;
}

/* grid */
body:has(main.min-w-0.space-y-4 [aria-label="价格显示模式"])
main.min-w-0.space-y-4 > div:nth-child(2) > div.grid {
  grid-template-columns: repeat(2, minmax(0,1fr)) !important;
  gap: 10px !important;
}

/* cards */
body:has(main.min-w-0.space-y-4 [aria-label="价格显示模式"])
main.min-w-0.space-y-4 > div:nth-child(2) > div.grid > div.group {
  min-width: 0 !important;
  padding: 15px !important;
  border: 1px solid var(--moss-pg-line) !important;
  border-radius: 11px !important;
  background:
    linear-gradient(180deg, rgba(21,25,33,.67), rgba(13,16,22,.72)) !important;
  box-shadow: inset 0 1px 0 rgba(255,255,255,.023) !important;
  transition:
    transform .16s ease,
    border-color .16s ease,
    background .16s ease,
    box-shadow .16s ease !important;
}

body:has(main.min-w-0.space-y-4 [aria-label="价格显示模式"])
main.min-w-0.space-y-4 > div:nth-child(2) > div.grid > div.group:hover {
  transform: translateY(-1px) !important;
  border-color: var(--moss-pg-line-strong) !important;
  background:
    linear-gradient(180deg, rgba(25,29,38,.76), rgba(15,18,24,.78)) !important;
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,.035),
    0 12px 28px rgba(0,0,0,.08) !important;
}

/* model logo block */
body:has(main.min-w-0.space-y-4 [aria-label="价格显示模式"])
main.min-w-0.space-y-4 > div:nth-child(2) > div.grid > div.group
> div:first-child > div:first-child > div:first-child {
  width: 38px !important;
  height: 38px !important;
  flex: 0 0 38px !important;
  border: 1px solid rgba(255,255,255,.075) !important;
  border-radius: 9px !important;
  background: rgba(255,255,255,.028) !important;
}

body:has(main.min-w-0.space-y-4 [aria-label="价格显示模式"])
main.min-w-0.space-y-4 > div:nth-child(2) > div.grid > div.group
> div:first-child > div:first-child > div:first-child svg {
  width: 25px !important;
  height: 25px !important;
}

/* model name */
body:has(main.min-w-0.space-y-4 [aria-label="价格显示模式"])
main.min-w-0.space-y-4 > div:nth-child(2) > div.grid > div.group h3 {
  color: rgba(247,249,253,.94) !important;
  font-size: 13.5px !important;
  line-height: 1.25 !important;
  font-weight: 680 !important;
  letter-spacing: -.012em !important;
}

/* prices */
body:has(main.min-w-0.space-y-4 [aria-label="价格显示模式"])
main.min-w-0.space-y-4 > div:nth-child(2) > div.grid > div.group h3 + div {
  margin-top: 4px !important;
  column-gap: 9px !important;
}

body:has(main.min-w-0.space-y-4 [aria-label="价格显示模式"])
main.min-w-0.space-y-4 > div:nth-child(2) > div.grid > div.group h3 + div > span {
  color: rgba(208,216,229,.47) !important;
  font-size: 10px !important;
}

body:has(main.min-w-0.space-y-4 [aria-label="价格显示模式"])
main.min-w-0.space-y-4 > div:nth-child(2) > div.grid > div.group h3 + div > span span {
  color: rgba(241,244,249,.84) !important;
  font-size: 10.5px !important;
  font-weight: 650 !important;
}

/* description removed to match compact gateway style */
body:has(main.min-w-0.space-y-4 [aria-label="价格显示模式"])
main.min-w-0.space-y-4 > div:nth-child(2) > div.grid > div.group > p {
  display: none !important;
}

/* detail / copy buttons */
body:has(main.min-w-0.space-y-4 [aria-label="价格显示模式"])
main.min-w-0.space-y-4 > div:nth-child(2) > div.grid > div.group
> div:first-child > div:last-child button {
  min-height: 27px !important;
  border-color: rgba(255,255,255,.07) !important;
  background: rgba(255,255,255,.015) !important;
  color: rgba(213,220,232,.48) !important;
  font-size: 9px !important;
  box-shadow: none !important;
}

body:has(main.min-w-0.space-y-4 [aria-label="价格显示模式"])
main.min-w-0.space-y-4 > div:nth-child(2) > div.grid > div.group
> div:first-child > div:last-child button:hover {
  border-color: rgba(255,255,255,.13) !important;
  background: rgba(255,255,255,.045) !important;
  color: rgba(242,245,250,.88) !important;
}

/* card footer metadata */
body:has(main.min-w-0.space-y-4 [aria-label="价格显示模式"])
main.min-w-0.space-y-4 > div:nth-child(2) > div.grid > div.group > div:last-child {
  margin-top: 12px !important;
  padding-top: 10px !important;
  border-top: 1px solid rgba(255,255,255,.055) !important;
}

body:has(main.min-w-0.space-y-4 [aria-label="价格显示模式"])
main.min-w-0.space-y-4 [data-slot="status-badge"] {
  min-height: 19px !important;
  padding: 0 6px !important;
  border: 1px solid rgba(121,214,167,.10) !important;
  background: rgba(121,214,167,.035) !important;
  color: rgba(126,217,170,.72) !important;
  font-size: 9px !important;
}

/* muted text */
body:has(main.min-w-0.space-y-4 [aria-label="价格显示模式"])
main.min-w-0.space-y-4 .text-muted-foreground {
  color: rgba(211,218,230,.48) !important;
}

/* mobile */
@media (max-width: 760px) {
  body:has(main.min-w-0.space-y-4 [aria-label="价格显示模式"])
  #moss-pricing-hero {
    top: 74px;
    width: calc(100vw - 22px);
  }

  #moss-pricing-hero h1 {
    font-size: 29px;
  }

  #moss-pricing-hero p {
    font-size: 11.5px;
    line-height: 1.6;
  }

  #moss-pricing-hero .moss-pg-endpoint {
    min-height: 40px;
    margin-top: 16px;
  }

  body:has(main.min-w-0.space-y-4 [aria-label="价格显示模式"])
  main.min-w-0.space-y-4 {
    width: calc(100vw - 20px) !important;
    margin-top: 292px !important;
    margin-bottom: 104px !important;
  }

  body:has(main.min-w-0.space-y-4 [aria-label="价格显示模式"])
  main.min-w-0.space-y-4 > div:nth-child(2) > div.grid {
    grid-template-columns: 1fr !important;
    gap: 8px !important;
  }

  body:has(main.min-w-0.space-y-4 [aria-label="价格显示模式"])
  main.min-w-0.space-y-4 > div:nth-child(2) > div.grid > div.group {
    padding: 12px !important;
    border-radius: 10px !important;
  }
}

@media (max-width: 390px) {
  body:has(main.min-w-0.space-y-4 [aria-label="价格显示模式"])
  #moss-pricing-hero {
    width: calc(100vw - 18px);
  }

  #moss-pricing-hero h1 {
    font-size: 27px;
  }

  #moss-pricing-hero .moss-pg-endpoint > span {
    display: none;
  }

  body:has(main.min-w-0.space-y-4 [aria-label="价格显示模式"])
  main.min-w-0.space-y-4 {
    width: calc(100vw - 16px) !important;
    margin-top: 278px !important;
  }
}
`;

const HERO_HTML = `
<section id="moss-pricing-hero" aria-label="模型广场介绍">
  <span class="moss-pg-kicker">UNIFIED AI GATEWAY</span>
  <h1>一个 API，调用所有可用模型。</h1>
  <p>统一的模型访问入口。保留 New API 原生模型数据、价格、状态、详情与复制能力。</p>

  <div class="moss-pg-endpoint">
    <span>BASE URL</span>
    <code>https://newapi.mossao.com/v1</code>
  </div>

  <div class="moss-pg-meta">
    <span>POST</span>
    <span>/chat/completions</span>
    <span>OPENAI COMPATIBLE</span>
  </div>
</section>
`;

class HeadInjector {
  element(element) {
    element.append(
      `<style id="moss-pricing-global-style">${PRICING_CSS}</style>`,
      { html: true }
    );
  }
}

class BodyInjector {
  element(element) {
    element.append(HERO_HTML, { html: true });
  }
}

function withDebugHeader(response, value) {
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

    // Route 本身已限定 /pricing*；这里再做一次防护。
    if (url.pathname !== "/pricing" && !url.pathname.startsWith("/pricing/")) {
      return fetch(request);
    }

    // On a Workers Route, fetch(incomingRequest) continues to the configured
    // application origin behind the Cloudflare-proxied DNS record.
    const upstream = await fetch(request);

    const contentType = upstream.headers.get("content-type") || "";

    // Future-safe: only transform HTML documents.
    if (!contentType.toLowerCase().includes("text/html")) {
      return withDebugHeader(upstream, "bypass-non-html");
    }

    const transformed = new HTMLRewriter()
      .on("head", new HeadInjector())
      .on("body", new BodyInjector())
      .transform(upstream);

    return withDebugHeader(transformed, "active");
  },
};
