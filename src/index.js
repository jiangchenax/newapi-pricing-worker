// ============================================================
// New API Pricing Worker V6
// light workspace + multi-source metadata + suffix matching
// ============================================================

const GLOBAL_CSS = "\n/* =========================================================\n   New API Pricing V4\n   Native icons + native status + no price columns + hard scroll lock\n   ========================================================= */\n\n/* Hard lock the original document while the replacement pricing UI is active. */\nhtml.moss-pricing-v4-lock,\nhtml.moss-pricing-v4-lock body {\n  width: 100% !important;\n  height: 100% !important;\n  overflow: hidden !important;\n  overscroll-behavior: none !important;\n}\n\nhtml.moss-pricing-v4-lock body {\n  position: relative !important;\n}\n\n/* Hide the original pricing MAIN visually, but keep it alive for native icon/status harvesting. */\nhtml.moss-pricing-v4-lock body main:not(#moss-pricing-app) {\n  visibility: hidden !important;\n  pointer-events: none !important;\n}\n\n#moss-pricing-app {\n  --bg: #f7f8fb;\n  --panel: rgba(255,255,255,.95);\n  --panel-solid: #ffffff;\n  --panel-soft: #fafbfc;\n  --line: rgba(15,23,42,.085);\n  --line-strong: rgba(15,23,42,.15);\n  --text: #111827;\n  --text-2: #344054;\n  --muted: #667085;\n  --muted-2: #98a2b3;\n  --accent: #6677ff;\n  --accent-soft: rgba(102,119,255,.075);\n  --green: #079455;\n  --green-soft: rgba(7,148,85,.08);\n  --amber: #b54708;\n  --amber-soft: rgba(181,71,8,.08);\n  --red: #d92d20;\n  --red-soft: rgba(217,45,32,.08);\n\n  position: fixed;\n  inset: 64px 0 0 0;\n  z-index: 40;\n\n  overflow-y: auto;\n  overflow-x: hidden;\n  overscroll-behavior: contain;\n\n  background:\n    radial-gradient(900px 430px at 68% -240px, rgba(102,119,255,.085), transparent 72%),\n    var(--bg);\n\n  color: var(--text);\n\n  font-family:\n    Inter,\n    ui-sans-serif,\n    system-ui,\n    -apple-system,\n    BlinkMacSystemFont,\n    \"Segoe UI\",\n    sans-serif;\n\n  -webkit-font-smoothing: antialiased;\n  text-rendering: optimizeLegibility;\n}\n\nhtml.dark #moss-pricing-app,\n.dark #moss-pricing-app {\n  --bg: #090c12;\n  --panel: rgba(16,20,27,.95);\n  --panel-solid: #11161e;\n  --panel-soft: #0e131a;\n  --line: rgba(255,255,255,.085);\n  --line-strong: rgba(255,255,255,.15);\n  --text: rgba(247,249,253,.96);\n  --text-2: rgba(232,236,243,.82);\n  --muted: rgba(216,222,233,.60);\n  --muted-2: rgba(216,222,233,.38);\n  --accent: #91a7ff;\n  --accent-soft: rgba(145,167,255,.085);\n  --green: #75d5a4;\n  --green-soft: rgba(117,213,164,.08);\n  --amber: #f4b36b;\n  --amber-soft: rgba(244,179,107,.08);\n  --red: #ff8d86;\n  --red-soft: rgba(255,141,134,.08);\n\n  background:\n    radial-gradient(900px 430px at 68% -240px, rgba(95,118,215,.13), transparent 72%),\n    var(--bg);\n}\n\n#moss-pricing-app * {\n  box-sizing: border-box;\n}\n\n#moss-pricing-app button,\n#moss-pricing-app input,\n#moss-pricing-app select {\n  font: inherit;\n}\n\n#moss-pricing-app .market-shell {\n  width: min(1480px, calc(100vw - 36px));\n  margin: 0 auto;\n  padding: 22px 0 96px;\n}\n\n\n/* =========================================================\n   Top\n   ========================================================= */\n\n#moss-pricing-app .market-topbar {\n  display: grid;\n  grid-template-columns: minmax(0,1fr) minmax(310px, 430px);\n  align-items: center;\n  gap: 22px;\n  margin-bottom: 14px;\n}\n\n#moss-pricing-app .title-line {\n  min-width: 0;\n  display: flex;\n  align-items: baseline;\n  flex-wrap: wrap;\n  gap: 8px 11px;\n}\n\n#moss-pricing-app .market-title {\n  margin: 0;\n  color: var(--text);\n  font-size: 22px;\n  line-height: 1.2;\n  font-weight: 760;\n  letter-spacing: -.03em;\n}\n\n#moss-pricing-app .market-summary {\n  color: var(--muted);\n  font-size: 12px;\n}\n\n#moss-pricing-app .market-summary strong {\n  color: var(--text);\n  font-size: 13px;\n  font-weight: 740;\n}\n\n#moss-pricing-app .native-sync {\n  min-height: 21px;\n  padding: 0 7px;\n  display: inline-flex;\n  align-items: center;\n  border: 1px solid var(--line);\n  border-radius: 999px;\n  background: var(--panel-solid);\n  color: var(--muted);\n  font-size: 9px;\n  font-weight: 620;\n}\n\n#moss-pricing-app .native-sync[data-ready=\"true\"] {\n  color: var(--green);\n  border-color: color-mix(in srgb, var(--green) 22%, var(--line));\n  background: var(--green-soft);\n}\n\n#moss-pricing-app .search-wrap {\n  position: relative;\n}\n\n#moss-pricing-app .search-icon {\n  position: absolute;\n  left: 13px;\n  top: 50%;\n  width: 16px;\n  height: 16px;\n  transform: translateY(-50%);\n  color: var(--muted-2);\n  pointer-events: none;\n}\n\n#moss-pricing-app .search-input {\n  width: 100%;\n  height: 42px;\n  padding: 0 13px 0 39px;\n  outline: 0;\n  border: 1px solid var(--line);\n  border-radius: 10px;\n  background: var(--panel);\n  color: var(--text);\n  font-size: 13px;\n  box-shadow:\n    inset 0 1px 0 rgba(255,255,255,.025),\n    0 6px 22px rgba(16,24,40,.025);\n}\n\n#moss-pricing-app .search-input::placeholder {\n  color: var(--muted-2);\n}\n\n#moss-pricing-app .search-input:focus {\n  border-color: color-mix(in srgb, var(--accent) 32%, var(--line));\n  box-shadow: 0 0 0 3px var(--accent-soft);\n}\n\n\n/* =========================================================\n   Layout / filter\n   ========================================================= */\n\n#moss-pricing-app .market-layout {\n  display: grid;\n  grid-template-columns: 258px minmax(0,1fr);\n  align-items: start;\n  gap: 14px;\n}\n\n#moss-pricing-app .filter-panel {\n  position: sticky;\n  top: 14px;\n  max-height: calc(100vh - 96px);\n  overflow-y: auto;\n  border: 1px solid var(--line);\n  border-radius: 14px;\n  background: var(--panel);\n  box-shadow:\n    inset 0 1px 0 rgba(255,255,255,.025),\n    0 8px 26px rgba(16,24,40,.025);\n}\n\n#moss-pricing-app .filter-head {\n  padding: 15px 15px 12px;\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 10px;\n}\n\n#moss-pricing-app .filter-head h2 {\n  margin: 0;\n  color: var(--text);\n  font-size: 17px;\n  line-height: 1.2;\n  font-weight: 740;\n}\n\n#moss-pricing-app .filter-head p {\n  margin: 5px 0 0;\n  color: var(--muted);\n  font-size: 11px;\n  line-height: 1.45;\n}\n\n#moss-pricing-app .reset-btn {\n  flex: 0 0 auto;\n  min-height: 30px;\n  padding: 0 7px;\n  border: 0;\n  border-radius: 7px;\n  background: transparent;\n  color: var(--muted);\n  font-size: 11px;\n  font-weight: 620;\n  cursor: pointer;\n}\n\n#moss-pricing-app .reset-btn:hover {\n  background: var(--accent-soft);\n  color: var(--text);\n}\n\n#moss-pricing-app .filter-section {\n  margin: 0 15px;\n  padding: 13px 0 15px;\n  border-top: 1px solid var(--line);\n}\n\n#moss-pricing-app .filter-section-title {\n  margin: 0 0 9px;\n  color: var(--text-2);\n  font-size: 13px;\n  font-weight: 710;\n}\n\n#moss-pricing-app .filter-chips {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n\n#moss-pricing-app .filter-chip {\n  min-height: 30px;\n  padding: 0 9px;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  border: 1px solid var(--line);\n  border-radius: 999px;\n  background: var(--panel-solid);\n  color: var(--muted);\n  font-size: 11.5px;\n  font-weight: 590;\n  cursor: pointer;\n  transition:\n    border-color .13s ease,\n    background .13s ease,\n    color .13s ease;\n}\n\n#moss-pricing-app .filter-chip:hover {\n  border-color: var(--line-strong);\n  color: var(--text);\n}\n\n#moss-pricing-app .filter-chip[aria-pressed=\"true\"] {\n  border-color: color-mix(in srgb, var(--accent) 31%, var(--line));\n  background: var(--accent-soft);\n  color: var(--text);\n}\n\n#moss-pricing-app .filter-chip-count {\n  min-width: 20px;\n  height: 20px;\n  padding: 0 5px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 999px;\n  background: color-mix(in srgb, var(--muted) 9%, transparent);\n  color: var(--muted);\n  font-size: 10px;\n  font-weight: 650;\n}\n\n\n/* =========================================================\n   Results\n   ========================================================= */\n\n#moss-pricing-app .result-panel {\n  min-width: 0;\n}\n\n#moss-pricing-app .result-toolbar {\n  min-height: 40px;\n  padding: 0 2px 8px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}\n\n#moss-pricing-app .result-count {\n  color: var(--muted);\n  font-size: 12px;\n}\n\n#moss-pricing-app .result-count strong {\n  color: var(--text);\n  font-size: 13px;\n  font-weight: 740;\n}\n\n#moss-pricing-app .sort-select {\n  height: 32px;\n  padding: 0 28px 0 9px;\n  outline: 0;\n  border: 1px solid var(--line);\n  border-radius: 8px;\n  background: var(--panel);\n  color: var(--text-2);\n  font-size: 11px;\n}\n\n\n/* =========================================================\n   Dense table — NO input/output/billing columns\n   ========================================================= */\n\n#moss-pricing-app .model-table {\n  overflow: hidden;\n  border: 1px solid var(--line);\n  border-radius: 13px;\n  background: var(--panel);\n  box-shadow:\n    inset 0 1px 0 rgba(255,255,255,.025),\n    0 8px 26px rgba(16,24,40,.025);\n}\n\n#moss-pricing-app .model-table-head,\n#moss-pricing-app .model-row {\n  display: grid;\n  grid-template-columns:\n    minmax(330px, 1.55fr)\n    minmax(250px, 1fr)\n    minmax(180px, .82fr)\n    108px;\n  align-items: center;\n}\n\n#moss-pricing-app .model-table-head {\n  min-height: 38px;\n  padding: 0 13px;\n  border-bottom: 1px solid var(--line);\n  background: var(--panel-soft);\n  color: var(--muted);\n  font-size: 10.5px;\n  font-weight: 680;\n  letter-spacing: .015em;\n}\n\n#moss-pricing-app .model-row {\n  min-height: 68px;\n  padding: 9px 13px;\n  border-bottom: 1px solid var(--line);\n  transition: background .13s ease;\n}\n\n#moss-pricing-app .model-row:last-child {\n  border-bottom: 0;\n}\n\n#moss-pricing-app .model-row:hover {\n  background:\n    linear-gradient(90deg, var(--accent-soft), transparent 48%);\n}\n\n#moss-pricing-app .model-cell {\n  min-width: 0;\n}\n\n#moss-pricing-app .model-identity {\n  min-width: 0;\n  display: flex;\n  align-items: center;\n  gap: 11px;\n}\n\n#moss-pricing-app .model-icon-wrap {\n  flex: 0 0 40px;\n  width: 40px;\n  height: 40px;\n  display: grid;\n  place-items: center;\n  overflow: hidden;\n  border: 1px solid var(--line);\n  border-radius: 10px;\n  background: var(--panel-solid);\n}\n\n/* Preserve the original New API icon artwork instead of recoloring it. */\n#moss-pricing-app .native-icon {\n  width: 27px;\n  height: 27px;\n  display: grid;\n  place-items: center;\n}\n\n#moss-pricing-app .native-icon > * {\n  max-width: 27px !important;\n  max-height: 27px !important;\n}\n\n#moss-pricing-app .native-icon svg,\n#moss-pricing-app .native-icon img {\n  width: 27px !important;\n  height: 27px !important;\n  display: block !important;\n}\n\n#moss-pricing-app .native-icon span {\n  font-size: 13px !important;\n  font-weight: 760 !important;\n}\n\n#moss-pricing-app .model-name-wrap {\n  min-width: 0;\n}\n\n#moss-pricing-app .model-name {\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  color: var(--text);\n  font-family:\n    ui-monospace,\n    SFMono-Regular,\n    Menlo,\n    Monaco,\n    Consolas,\n    monospace;\n  font-size: 13px;\n  line-height: 1.35;\n  font-weight: 720;\n}\n\n#moss-pricing-app .model-provider {\n  margin-top: 4px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  min-width: 0;\n  color: var(--muted);\n  font-size: 10.5px;\n}\n\n#moss-pricing-app .provider-name {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n#moss-pricing-app .tiny-tag {\n  flex: 0 0 auto;\n  min-height: 18px;\n  padding: 0 5px;\n  display: inline-flex;\n  align-items: center;\n  border: 1px solid var(--line);\n  border-radius: 999px;\n  color: var(--muted-2);\n  font-size: 8.5px;\n}\n\n\n/* =========================================================\n   Native 24h status\n   ========================================================= */\n\n#moss-pricing-app .status-wrap {\n  min-width: 0;\n}\n\n#moss-pricing-app .status-main {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  min-width: 0;\n}\n\n#moss-pricing-app .status-dot {\n  flex: 0 0 7px;\n  width: 7px;\n  height: 7px;\n  border-radius: 999px;\n  background: var(--muted-2);\n}\n\n#moss-pricing-app .status-success {\n  color: var(--text-2);\n  font-size: 11px;\n  font-weight: 680;\n}\n\n#moss-pricing-app .status-title {\n  color: var(--muted);\n  font-size: 10px;\n}\n\n#moss-pricing-app .status-metrics {\n  margin-top: 5px;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 5px 10px;\n  color: var(--muted);\n  font-size: 9.5px;\n}\n\n#moss-pricing-app .status-metrics span {\n  white-space: nowrap;\n}\n\n#moss-pricing-app .status--good .status-dot {\n  background: var(--green);\n  box-shadow: 0 0 0 3px var(--green-soft);\n}\n\n#moss-pricing-app .status--good .status-success {\n  color: var(--green);\n}\n\n#moss-pricing-app .status--warn .status-dot {\n  background: var(--amber);\n  box-shadow: 0 0 0 3px var(--amber-soft);\n}\n\n#moss-pricing-app .status--warn .status-success {\n  color: var(--amber);\n}\n\n#moss-pricing-app .status--bad .status-dot {\n  background: var(--red);\n  box-shadow: 0 0 0 3px var(--red-soft);\n}\n\n#moss-pricing-app .status--bad .status-success {\n  color: var(--red);\n}\n\n#moss-pricing-app .status-empty {\n  color: var(--muted-2);\n  font-size: 10.5px;\n}\n\n\n/* =========================================================\n   Meta\n   ========================================================= */\n\n#moss-pricing-app .meta-wrap {\n  min-width: 0;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 5px;\n}\n\n#moss-pricing-app .meta-tag {\n  min-height: 22px;\n  padding: 0 7px;\n  display: inline-flex;\n  align-items: center;\n  border: 1px solid var(--line);\n  border-radius: 999px;\n  background: var(--panel-solid);\n  color: var(--muted);\n  font-size: 9.5px;\n}\n\n\n/* =========================================================\n   Actions\n   ========================================================= */\n\n#moss-pricing-app .action-cell {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 6px;\n}\n\n#moss-pricing-app .detail-btn,\n#moss-pricing-app .copy-btn {\n  height: 31px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid var(--line);\n  border-radius: 8px;\n  background: var(--panel-solid);\n  color: var(--muted);\n  cursor: pointer;\n  transition:\n    border-color .13s ease,\n    background .13s ease,\n    color .13s ease;\n}\n\n#moss-pricing-app .detail-btn {\n  padding: 0 9px;\n  gap: 4px;\n  font-size: 10.5px;\n  font-weight: 650;\n}\n\n#moss-pricing-app .copy-btn {\n  width: 31px;\n  padding: 0;\n}\n\n#moss-pricing-app .detail-btn:hover,\n#moss-pricing-app .copy-btn:hover {\n  border-color: var(--line-strong);\n  background: var(--accent-soft);\n  color: var(--text);\n}\n\n#moss-pricing-app .detail-btn svg,\n#moss-pricing-app .copy-btn svg {\n  width: 13px;\n  height: 13px;\n}\n\n\n/* =========================================================\n   Drawer\n   ========================================================= */\n\n#moss-pricing-app .drawer-layer {\n  position: fixed;\n  inset: 0;\n  z-index: 90;\n  display: none;\n}\n\n#moss-pricing-app .drawer-layer[data-open=\"true\"] {\n  display: block;\n}\n\n#moss-pricing-app .drawer-backdrop {\n  position: absolute;\n  inset: 0;\n  background: rgba(15,23,42,.28);\n  backdrop-filter: blur(2px);\n  -webkit-backdrop-filter: blur(2px);\n}\n\nhtml.dark #moss-pricing-app .drawer-backdrop,\n.dark #moss-pricing-app .drawer-backdrop {\n  background: rgba(0,0,0,.46);\n}\n\n#moss-pricing-app .drawer-panel {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  width: min(470px, calc(100vw - 26px));\n  overflow-y: auto;\n  border-left: 1px solid var(--line);\n  background: var(--panel-solid);\n  box-shadow: -24px 0 55px rgba(16,24,40,.13);\n  animation: moss-v4-drawer-in .21s cubic-bezier(.2,.8,.2,1) both;\n}\n\n@keyframes moss-v4-drawer-in {\n  from {\n    opacity: .55;\n    transform: translate3d(18px,0,0);\n  }\n  to {\n    opacity: 1;\n    transform: translate3d(0,0,0);\n  }\n}\n\n#moss-pricing-app .drawer-head {\n  position: sticky;\n  top: 0;\n  z-index: 2;\n  min-height: 58px;\n  padding: 0 18px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 1px solid var(--line);\n  background: color-mix(in srgb, var(--panel-solid) 94%, transparent);\n  backdrop-filter: blur(14px);\n  -webkit-backdrop-filter: blur(14px);\n}\n\n#moss-pricing-app .drawer-title {\n  color: var(--text);\n  font-size: 14px;\n  font-weight: 720;\n}\n\n#moss-pricing-app .drawer-close {\n  width: 32px;\n  height: 32px;\n  display: grid;\n  place-items: center;\n  border: 1px solid var(--line);\n  border-radius: 8px;\n  background: transparent;\n  color: var(--muted);\n  cursor: pointer;\n}\n\n#moss-pricing-app .drawer-close:hover {\n  background: var(--accent-soft);\n  color: var(--text);\n}\n\n#moss-pricing-app .drawer-close svg {\n  width: 15px;\n  height: 15px;\n}\n\n#moss-pricing-app .drawer-body {\n  padding: 19px 18px 28px;\n}\n\n#moss-pricing-app .drawer-model-head {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n}\n\n#moss-pricing-app .drawer-icon-wrap {\n  flex: 0 0 48px;\n  width: 48px;\n  height: 48px;\n  display: grid;\n  place-items: center;\n  overflow: hidden;\n  border: 1px solid var(--line);\n  border-radius: 12px;\n  background: var(--panel-soft);\n}\n\n#moss-pricing-app .drawer-icon-wrap .native-icon,\n#moss-pricing-app .drawer-icon-wrap .native-icon > *,\n#moss-pricing-app .drawer-icon-wrap .native-icon svg,\n#moss-pricing-app .drawer-icon-wrap .native-icon img {\n  width: 32px !important;\n  height: 32px !important;\n  max-width: 32px !important;\n  max-height: 32px !important;\n}\n\n#moss-pricing-app .drawer-model-copy {\n  min-width: 0;\n  flex: 1 1 auto;\n}\n\n#moss-pricing-app .drawer-model-name {\n  margin: 1px 0 0;\n  overflow-wrap: anywhere;\n  color: var(--text);\n  font-family:\n    ui-monospace,\n    SFMono-Regular,\n    Menlo,\n    Monaco,\n    Consolas,\n    monospace;\n  font-size: 16px;\n  line-height: 1.35;\n  font-weight: 760;\n}\n\n#moss-pricing-app .drawer-provider {\n  margin-top: 5px;\n  color: var(--muted);\n  font-size: 11px;\n}\n\n#moss-pricing-app .drawer-description {\n  margin: 15px 0 0;\n  color: var(--text-2);\n  font-size: 12px;\n  line-height: 1.7;\n}\n\n#moss-pricing-app .drawer-section {\n  margin-top: 19px;\n  padding-top: 17px;\n  border-top: 1px solid var(--line);\n}\n\n#moss-pricing-app .drawer-section-title {\n  margin: 0 0 11px;\n  color: var(--text);\n  font-size: 12px;\n  font-weight: 720;\n}\n\n#moss-pricing-app .metric-grid {\n  display: grid;\n  grid-template-columns: repeat(2,minmax(0,1fr));\n  gap: 7px;\n}\n\n#moss-pricing-app .metric-card {\n  min-height: 58px;\n  padding: 9px 10px;\n  border: 1px solid var(--line);\n  border-radius: 9px;\n  background: var(--panel-soft);\n}\n\n#moss-pricing-app .metric-label {\n  color: var(--muted);\n  font-size: 9px;\n}\n\n#moss-pricing-app .metric-value {\n  margin-top: 4px;\n  color: var(--text);\n  font-size: 12px;\n  font-weight: 690;\n}\n\n#moss-pricing-app .detail-list {\n  display: grid;\n  gap: 7px;\n}\n\n#moss-pricing-app .detail-row {\n  min-height: 35px;\n  padding: 7px 9px;\n  display: grid;\n  grid-template-columns: 100px minmax(0,1fr);\n  align-items: start;\n  gap: 10px;\n  border: 1px solid var(--line);\n  border-radius: 8px;\n  background: var(--panel-soft);\n}\n\n#moss-pricing-app .detail-label {\n  color: var(--muted);\n  font-size: 9.5px;\n}\n\n#moss-pricing-app .detail-value {\n  min-width: 0;\n  overflow-wrap: anywhere;\n  color: var(--text-2);\n  font-size: 10.5px;\n  line-height: 1.5;\n}\n\n#moss-pricing-app .drawer-tags {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n\n#moss-pricing-app .drawer-tag {\n  min-height: 24px;\n  padding: 0 8px;\n  display: inline-flex;\n  align-items: center;\n  border: 1px solid var(--line);\n  border-radius: 999px;\n  background: var(--panel-soft);\n  color: var(--text-2);\n  font-size: 9.5px;\n}\n\n\n/* =========================================================\n   State / toast / mobile\n   ========================================================= */\n\n#moss-pricing-app .state-box {\n  min-height: 180px;\n  display: grid;\n  place-items: center;\n  color: var(--muted);\n  font-size: 13px;\n  text-align: center;\n}\n\n#moss-pricing-app .toast {\n  position: fixed;\n  left: 50%;\n  bottom: 34px;\n  z-index: 120;\n  transform: translateX(-50%);\n  min-height: 34px;\n  padding: 0 12px;\n  display: flex;\n  align-items: center;\n  border: 1px solid var(--line-strong);\n  border-radius: 8px;\n  background: var(--panel-solid);\n  color: var(--text);\n  box-shadow: 0 12px 34px rgba(16,24,40,.12);\n  font-size: 10.5px;\n  pointer-events: none;\n}\n\n#moss-pricing-app .mobile-filter-toggle {\n  display: none;\n}\n\n@media (max-width: 1120px) {\n  #moss-pricing-app .market-shell {\n    width: calc(100vw - 26px);\n  }\n\n  #moss-pricing-app .market-layout {\n    grid-template-columns: 235px minmax(0,1fr);\n  }\n\n  #moss-pricing-app .model-table-head,\n  #moss-pricing-app .model-row {\n    grid-template-columns:\n      minmax(300px, 1.4fr)\n      minmax(220px, 1fr)\n      minmax(150px, .75fr)\n      102px;\n  }\n}\n\n@media (max-width: 930px) {\n  #moss-pricing-app .market-layout {\n    display: block;\n  }\n\n  #moss-pricing-app .mobile-filter-toggle {\n    width: 100%;\n    min-height: 40px;\n    margin-bottom: 10px;\n    padding: 0 12px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    border: 1px solid var(--line);\n    border-radius: 10px;\n    background: var(--panel);\n    color: var(--text);\n    font-size: 12px;\n    font-weight: 660;\n    cursor: pointer;\n  }\n\n  #moss-pricing-app .filter-panel {\n    position: static;\n    display: none;\n    max-height: none;\n    margin-bottom: 12px;\n  }\n\n  #moss-pricing-app .filter-panel[data-open=\"true\"] {\n    display: block;\n  }\n\n  #moss-pricing-app .model-table-head {\n    display: none;\n  }\n\n  #moss-pricing-app .model-table {\n    border: 0;\n    border-radius: 0;\n    background: transparent;\n    box-shadow: none;\n  }\n\n  #moss-pricing-app .model-rows {\n    display: grid;\n    grid-template-columns: repeat(2,minmax(0,1fr));\n    gap: 9px;\n  }\n\n  #moss-pricing-app .model-row {\n    min-height: 0;\n    padding: 13px;\n    display: grid;\n    grid-template-columns: 1fr auto;\n    gap: 11px 10px;\n    border: 1px solid var(--line);\n    border-radius: 11px;\n    background: var(--panel);\n  }\n\n  #moss-pricing-app .model-row:last-child {\n    border-bottom: 1px solid var(--line);\n  }\n\n  #moss-pricing-app .model-row .status-wrap,\n  #moss-pricing-app .model-row .meta-wrap {\n    grid-column: 1 / 2;\n  }\n\n  #moss-pricing-app .action-cell {\n    grid-column: 2 / 3;\n    grid-row: 1 / 4;\n    align-self: center;\n  }\n}\n\n@media (max-width: 720px) {\n  #moss-pricing-app {\n    inset: 56px 0 0 0;\n  }\n\n  #moss-pricing-app .market-shell {\n    width: calc(100vw - 18px);\n    padding-top: 16px;\n  }\n\n  #moss-pricing-app .market-topbar {\n    grid-template-columns: 1fr;\n    gap: 10px;\n  }\n\n  #moss-pricing-app .model-rows {\n    grid-template-columns: 1fr;\n  }\n\n  #moss-pricing-app .drawer-panel {\n    width: 100%;\n  }\n}\n\n@media (max-width: 420px) {\n  #moss-pricing-app .market-title {\n    font-size: 20px;\n  }\n\n  #moss-pricing-app .model-row {\n    padding: 11px;\n  }\n\n  #moss-pricing-app .model-icon-wrap {\n    flex-basis: 38px;\n    width: 38px;\n    height: 38px;\n  }\n\n  #moss-pricing-app .model-name {\n    font-size: 12.5px;\n  }\n}\n\n@media (prefers-reduced-motion: reduce) {\n  #moss-pricing-app,\n  #moss-pricing-app * {\n    animation: none !important;\n    transition: none !important;\n  }\n}\n\n\n/* =========================================================\n   V4.1 CLEAN TOP · VISUAL CONSOLIDATION\n   - unify header/content tone\n   - remove duplicated page chrome\n   - one compact control bar only\n   ========================================================= */\n\n/* Match the light blue-white feeling of the native top navigation. */\n#moss-pricing-app {\n  background:\n    linear-gradient(\n      180deg,\n      rgb(244,250,255) 0px,\n      rgb(247,248,251) 150px,\n      rgb(247,248,251) 100%\n    ) !important;\n}\n\nhtml.dark #moss-pricing-app,\n.dark #moss-pricing-app {\n  background:\n    linear-gradient(\n      180deg,\n      rgb(12,17,24) 0px,\n      rgb(9,12,18) 150px,\n      rgb(9,12,18) 100%\n    ) !important;\n}\n\n#moss-pricing-app .market-shell {\n  padding-top: 17px !important;\n}\n\n/* Topbar becomes a single utility row. */\n#moss-pricing-app .market-topbar {\n  grid-template-columns:\n    minmax(150px, auto)\n    minmax(340px, 1fr)\n    150px !important;\n\n  gap: 12px !important;\n  margin-bottom: 12px !important;\n}\n\n#moss-pricing-app .title-line {\n  align-items: center !important;\n  gap: 7px !important;\n}\n\n/* Remove duplicated internal page title. Navigation already says 模型广场. */\n#moss-pricing-app .market-title {\n  display: none !important;\n}\n\n/* Hide technical sync badge from normal UI. */\n#moss-pricing-app .native-sync {\n  display: none !important;\n}\n\n/* One count only. */\n#moss-pricing-app .market-summary {\n  display: inline-flex !important;\n  align-items: center !important;\n  min-height: 40px !important;\n  color: var(--muted) !important;\n  font-size: 12px !important;\n  white-space: nowrap !important;\n}\n\n#moss-pricing-app .market-summary strong {\n  margin-right: 3px !important;\n  color: var(--text) !important;\n  font-size: 15px !important;\n  font-weight: 760 !important;\n}\n\n/* Search is the central control. */\n#moss-pricing-app .search-wrap {\n  width: 100% !important;\n}\n\n/* Sort is moved into topbar. */\n#moss-pricing-app .top-sort {\n  width: 150px !important;\n  height: 42px !important;\n  padding: 0 30px 0 11px !important;\n\n  border: 1px solid var(--line) !important;\n  border-radius: 10px !important;\n\n  background: var(--panel) !important;\n  color: var(--text-2) !important;\n\n  font-size: 12px !important;\n  outline: 0 !important;\n}\n\n/* Old second toolbar is completely removed. */\n#moss-pricing-app .result-toolbar {\n  display: none !important;\n}\n\n/* Align filter and table perfectly under one top row. */\n#moss-pricing-app .market-layout {\n  align-items: start !important;\n}\n\n#moss-pricing-app .filter-panel,\n#moss-pricing-app .model-table {\n  margin-top: 0 !important;\n}\n\n/* Slightly calmer table header. */\n#moss-pricing-app .model-table-head {\n  background:\n    color-mix(\n      in srgb,\n      var(--panel-soft) 86%,\n      transparent\n    ) !important;\n}\n\n/* Do not show meaningless provider text. */\n#moss-pricing-app .model-provider:empty {\n  display: none !important;\n}\n\n/* More breathing room without becoming loose. */\n#moss-pricing-app .model-row {\n  min-height: 66px !important;\n}\n\n@media (max-width: 930px) {\n  #moss-pricing-app .market-topbar {\n    grid-template-columns:\n      1fr\n      160px !important;\n  }\n\n  #moss-pricing-app .title-line {\n    grid-column: 1 / -1;\n  }\n\n  #moss-pricing-app .search-wrap {\n    min-width: 0 !important;\n  }\n\n  #moss-pricing-app .top-sort {\n    width: 160px !important;\n  }\n}\n\n@media (max-width: 720px) {\n  #moss-pricing-app .market-topbar {\n    grid-template-columns: 1fr !important;\n  }\n\n  #moss-pricing-app .title-line,\n  #moss-pricing-app .search-wrap,\n  #moss-pricing-app .top-sort {\n    grid-column: 1 !important;\n  }\n\n  #moss-pricing-app .top-sort {\n    width: 100% !important;\n  }\n}\n\n\n/* =========================================================\n   V4.2 · ALIGNMENT + COMPACT DETAIL MODAL\n   ========================================================= */\n\n/* Remove visible top/bottom color transition: use one calm surface. */\n#moss-pricing-app {\n  background: rgb(246, 249, 252) !important;\n}\n\nhtml.dark #moss-pricing-app,\n.dark #moss-pricing-app {\n  background: rgb(10, 14, 20) !important;\n}\n\n/* Top row mirrors the main 2-column layout:\n   left = filter column\n   right = model list column */\n#moss-pricing-app .market-topbar {\n  display: grid !important;\n  grid-template-columns: 258px minmax(0, 1fr) !important;\n  gap: 14px !important;\n  align-items: center !important;\n  margin-bottom: 12px !important;\n}\n\n/* Left title block */\n#moss-pricing-app .title-line {\n  grid-column: 1 !important;\n  display: flex !important;\n  align-items: center !important;\n  gap: 8px !important;\n  min-width: 0 !important;\n}\n\n#moss-pricing-app .market-title {\n  display: inline !important;\n  margin: 0 !important;\n  color: var(--text) !important;\n  font-size: 20px !important;\n  line-height: 1.2 !important;\n  font-weight: 760 !important;\n  letter-spacing: -.025em !important;\n  white-space: nowrap !important;\n}\n\n#moss-pricing-app .market-summary {\n  min-height: 0 !important;\n  display: inline-flex !important;\n  align-items: baseline !important;\n  color: var(--muted) !important;\n  font-size: 11.5px !important;\n  white-space: nowrap !important;\n}\n\n#moss-pricing-app .market-summary strong {\n  margin-right: 2px !important;\n  font-size: 13px !important;\n  color: var(--text-2) !important;\n  font-weight: 720 !important;\n}\n\n/* Right control row aligns with the MODEL TABLE left edge. */\n#moss-pricing-app .top-controls {\n  grid-column: 2 !important;\n  display: grid !important;\n  grid-template-columns: minmax(0,1fr) 150px !important;\n  gap: 10px !important;\n  align-items: center !important;\n  min-width: 0 !important;\n}\n\n#moss-pricing-app .search-wrap {\n  width: 100% !important;\n  min-width: 0 !important;\n}\n\n#moss-pricing-app .top-sort {\n  width: 150px !important;\n}\n\n/* Remove old second toolbar completely. */\n#moss-pricing-app .result-toolbar {\n  display: none !important;\n}\n\n/* Tighter vertical rhythm. */\n#moss-pricing-app .market-shell {\n  padding-top: 16px !important;\n}\n\n#moss-pricing-app .market-layout {\n  gap: 14px !important;\n}\n\n/* ---------- Compact centered detail modal ---------- */\n\n#moss-pricing-app .drawer-layer {\n  position: fixed !important;\n  inset: 0 !important;\n  z-index: 95 !important;\n  display: none !important;\n  padding: 20px !important;\n  align-items: center !important;\n  justify-content: center !important;\n}\n\n#moss-pricing-app .drawer-layer[data-open=\"true\"] {\n  display: flex !important;\n}\n\n#moss-pricing-app .drawer-backdrop {\n  position: absolute !important;\n  inset: 0 !important;\n  background: rgba(15,23,42,.26) !important;\n  backdrop-filter: blur(2px) !important;\n  -webkit-backdrop-filter: blur(2px) !important;\n}\n\nhtml.dark #moss-pricing-app .drawer-backdrop,\n.dark #moss-pricing-app .drawer-backdrop {\n  background: rgba(0,0,0,.48) !important;\n}\n\n#moss-pricing-app .drawer-panel {\n  position: relative !important;\n  top: auto !important;\n  right: auto !important;\n  bottom: auto !important;\n\n  width: min(520px, calc(100vw - 32px)) !important;\n  max-height: min(620px, calc(100vh - 110px)) !important;\n\n  overflow-y: auto !important;\n\n  border: 1px solid var(--line-strong) !important;\n  border-radius: 14px !important;\n\n  background: var(--panel-solid) !important;\n\n  box-shadow:\n    0 24px 70px rgba(16,24,40,.18) !important;\n\n  animation:\n    moss-v42-modal-in\n    .18s\n    cubic-bezier(.2,.8,.2,1)\n    both !important;\n}\n\n@keyframes moss-v42-modal-in {\n  from {\n    opacity: 0;\n    transform: translate3d(0,8px,0) scale(.985);\n  }\n  to {\n    opacity: 1;\n    transform: translate3d(0,0,0) scale(1);\n  }\n}\n\n#moss-pricing-app .drawer-head {\n  min-height: 52px !important;\n  padding: 0 15px !important;\n}\n\n#moss-pricing-app .drawer-body {\n  padding: 15px 15px 18px !important;\n}\n\n/* Smaller identity area. */\n#moss-pricing-app .drawer-model-head {\n  gap: 10px !important;\n}\n\n#moss-pricing-app .drawer-icon-wrap {\n  flex-basis: 40px !important;\n  width: 40px !important;\n  height: 40px !important;\n  border-radius: 10px !important;\n}\n\n#moss-pricing-app .drawer-icon-wrap .native-icon,\n#moss-pricing-app .drawer-icon-wrap .native-icon > *,\n#moss-pricing-app .drawer-icon-wrap .native-icon svg,\n#moss-pricing-app .drawer-icon-wrap .native-icon img {\n  width: 27px !important;\n  height: 27px !important;\n  max-width: 27px !important;\n  max-height: 27px !important;\n}\n\n#moss-pricing-app .drawer-model-name {\n  font-size: 14px !important;\n}\n\n#moss-pricing-app .drawer-provider {\n  display: none !important;\n}\n\n#moss-pricing-app .drawer-description {\n  margin-top: 11px !important;\n  font-size: 11.5px !important;\n  line-height: 1.65 !important;\n}\n\n/* Details should feel informational, not like a dashboard. */\n#moss-pricing-app .drawer-section {\n  margin-top: 14px !important;\n  padding-top: 13px !important;\n}\n\n#moss-pricing-app .drawer-section-title {\n  margin-bottom: 9px !important;\n}\n\n#moss-pricing-app .detail-list {\n  gap: 6px !important;\n}\n\n#moss-pricing-app .detail-row {\n  min-height: 32px !important;\n  padding: 6px 8px !important;\n  grid-template-columns: 92px minmax(0,1fr) !important;\n}\n\n#moss-pricing-app .detail-label {\n  font-size: 9px !important;\n}\n\n#moss-pricing-app .detail-value {\n  font-size: 10px !important;\n}\n\n/* Hide legacy metric cards if any old drawer content slips through. */\n#moss-pricing-app .metric-grid {\n  display: none !important;\n}\n\n@media (max-width: 1120px) {\n  #moss-pricing-app .market-topbar {\n    grid-template-columns: 235px minmax(0,1fr) !important;\n  }\n}\n\n@media (max-width: 930px) {\n  #moss-pricing-app .market-topbar {\n    grid-template-columns: 1fr !important;\n    gap: 9px !important;\n  }\n\n  #moss-pricing-app .title-line,\n  #moss-pricing-app .top-controls {\n    grid-column: 1 !important;\n  }\n\n  #moss-pricing-app .top-controls {\n    grid-template-columns: minmax(0,1fr) 150px !important;\n  }\n}\n\n@media (max-width: 620px) {\n  #moss-pricing-app .top-controls {\n    grid-template-columns: 1fr !important;\n  }\n\n  #moss-pricing-app .top-sort {\n    width: 100% !important;\n  }\n\n  #moss-pricing-app .drawer-layer {\n    padding: 10px !important;\n  }\n\n  #moss-pricing-app .drawer-panel {\n    width: calc(100vw - 20px) !important;\n    max-height: calc(100vh - 86px) !important;\n  }\n}\n\n\n/* =========================================================\n   V4.3 · MEANINGFUL DETAILS ONLY\n   - no empty modal\n   - detail button only when extra data exists\n   - inline compact expansion below row\n   ========================================================= */\n\n/* Remove modal presentation entirely. */\n#moss-pricing-app .drawer-layer {\n  display: none !important;\n}\n\n/* Detail expansion sits directly below a model row. */\n#moss-pricing-app .inline-detail {\n  grid-column: 1 / -1;\n  margin-top: 9px;\n  padding: 10px 11px;\n\n  border: 1px solid var(--line);\n  border-radius: 9px;\n\n  background: var(--panel-soft);\n\n  animation:\n    moss-v43-inline-in\n    .16s\n    cubic-bezier(.2,.8,.2,1)\n    both;\n}\n\n@keyframes moss-v43-inline-in {\n  from {\n    opacity: 0;\n    transform: translate3d(0,-3px,0);\n  }\n  to {\n    opacity: 1;\n    transform: translate3d(0,0,0);\n  }\n}\n\n#moss-pricing-app .inline-detail-grid {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0,1fr));\n  gap: 7px;\n}\n\n#moss-pricing-app .inline-detail-item {\n  min-width: 0;\n  padding: 7px 8px;\n\n  border: 1px solid var(--line);\n  border-radius: 7px;\n\n  background: var(--panel-solid);\n}\n\n#moss-pricing-app .inline-detail-label {\n  color: var(--muted);\n  font-size: 8.5px;\n  line-height: 1.2;\n}\n\n#moss-pricing-app .inline-detail-value {\n  margin-top: 4px;\n\n  overflow-wrap: anywhere;\n\n  color: var(--text-2);\n  font-size: 10px;\n  line-height: 1.45;\n  font-weight: 560;\n}\n\n#moss-pricing-app .inline-detail-description {\n  margin-bottom: 8px;\n  padding: 0 1px;\n\n  color: var(--text-2);\n  font-size: 10.5px;\n  line-height: 1.6;\n}\n\n#moss-pricing-app .detail-btn[data-empty=\"true\"] {\n  display: none !important;\n}\n\n#moss-pricing-app .detail-btn[aria-expanded=\"true\"] {\n  border-color:\n    color-mix(in srgb, var(--accent) 30%, var(--line)) !important;\n\n  background: var(--accent-soft) !important;\n  color: var(--text) !important;\n}\n\n@media (max-width: 930px) {\n  #moss-pricing-app .inline-detail-grid {\n    grid-template-columns: repeat(2, minmax(0,1fr));\n  }\n}\n\n@media (max-width: 620px) {\n  #moss-pricing-app .inline-detail-grid {\n    grid-template-columns: 1fr;\n  }\n}\n\n\n/* =========================================================\n   V4.4 · GLASS UNIFIED PRICING UI\n   Reference: existing MOSS glass UI language\n   ========================================================= */\n\n/* ---------------------------------------------------------\n   1. Header → page becomes one continuous surface\n   --------------------------------------------------------- */\n\nhtml.moss-pricing-v4-lock {\n  --moss-pricing-page-bg: rgb(239, 247, 250);\n}\n\nhtml.dark.moss-pricing-v4-lock {\n  --moss-pricing-page-bg: rgb(12, 16, 21);\n}\n\nhtml.moss-pricing-v4-lock body {\n  background: var(--moss-pricing-page-bg) !important;\n}\n\n/* Force native New API header to use the SAME pricing surface.\n   This removes the visible horizontal color break. */\nhtml.moss-pricing-v4-lock body header,\nhtml.moss-pricing-v4-lock body header > div,\nhtml.moss-pricing-v4-lock body header nav {\n  background:\n    color-mix(\n      in srgb,\n      var(--moss-pricing-page-bg) 88%,\n      transparent\n    ) !important;\n\n  border-bottom-color: transparent !important;\n  box-shadow: none !important;\n\n  backdrop-filter:\n    blur(18px)\n    saturate(125%) !important;\n\n  -webkit-backdrop-filter:\n    blur(18px)\n    saturate(125%) !important;\n}\n\n#moss-pricing-app {\n  background:\n    var(--moss-pricing-page-bg) !important;\n}\n\n/* ---------------------------------------------------------\n   2. Main shell / top control glass strip\n   --------------------------------------------------------- */\n\n#moss-pricing-app .market-shell {\n  padding-top: 12px !important;\n}\n\n#moss-pricing-app .market-topbar {\n  min-height: 58px !important;\n\n  padding: 8px 10px !important;\n  margin-bottom: 12px !important;\n\n  border:\n    1px solid rgba(255,255,255,.62) !important;\n\n  border-radius:\n    15px !important;\n\n  background:\n    rgba(255,255,255,.48) !important;\n\n  backdrop-filter:\n    blur(18px)\n    saturate(125%) !important;\n\n  -webkit-backdrop-filter:\n    blur(18px)\n    saturate(125%) !important;\n\n  box-shadow:\n    0 9px 28px rgba(55,75,90,.055),\n    inset 0 1px 0 rgba(255,255,255,.72)\n    !important;\n}\n\nhtml.dark #moss-pricing-app .market-topbar {\n  border-color:\n    rgba(255,255,255,.10) !important;\n\n  background:\n    rgba(20,24,30,.64) !important;\n\n  box-shadow:\n    0 10px 30px rgba(0,0,0,.14),\n    inset 0 1px 0 rgba(255,255,255,.06)\n    !important;\n}\n\n/* Keep the two-column geometry:\n   left = filter/title\n   right = model/search */\n#moss-pricing-app .market-topbar {\n  grid-template-columns:\n    258px\n    minmax(0,1fr) !important;\n\n  gap:\n    14px !important;\n}\n\n#moss-pricing-app .title-line {\n  grid-column:\n    1 !important;\n\n  padding-left:\n    4px !important;\n}\n\n#moss-pricing-app .market-title {\n  display:\n    inline !important;\n\n  font-size:\n    19px !important;\n\n  font-weight:\n    750 !important;\n}\n\n#moss-pricing-app .market-summary {\n  font-size:\n    11px !important;\n}\n\n#moss-pricing-app .top-controls {\n  grid-column:\n    2 !important;\n}\n\n/* Search visually lighter, like a glass control instead of a white block. */\n#moss-pricing-app .search-input,\n#moss-pricing-app .top-sort {\n  border-color:\n    rgba(115,130,150,.13) !important;\n\n  background:\n    rgba(255,255,255,.62) !important;\n\n  box-shadow:\n    inset 0 1px 0 rgba(255,255,255,.65)\n    !important;\n}\n\nhtml.dark #moss-pricing-app .search-input,\nhtml.dark #moss-pricing-app .top-sort {\n  border-color:\n    rgba(255,255,255,.08) !important;\n\n  background:\n    rgba(255,255,255,.045) !important;\n\n  box-shadow:\n    inset 0 1px 0 rgba(255,255,255,.045)\n    !important;\n}\n\n/* ---------------------------------------------------------\n   3. Filter + model list use the same glass material\n   --------------------------------------------------------- */\n\n#moss-pricing-app .filter-panel,\n#moss-pricing-app .model-table {\n  border:\n    1px solid rgba(255,255,255,.62) !important;\n\n  background:\n    rgba(255,255,255,.44) !important;\n\n  backdrop-filter:\n    blur(18px)\n    saturate(120%) !important;\n\n  -webkit-backdrop-filter:\n    blur(18px)\n    saturate(120%) !important;\n\n  box-shadow:\n    0 10px 30px rgba(55,75,90,.052),\n    inset 0 1px 0 rgba(255,255,255,.70)\n    !important;\n}\n\nhtml.dark #moss-pricing-app .filter-panel,\nhtml.dark #moss-pricing-app .model-table {\n  border-color:\n    rgba(255,255,255,.09) !important;\n\n  background:\n    rgba(20,24,30,.58) !important;\n\n  box-shadow:\n    0 10px 30px rgba(0,0,0,.14),\n    inset 0 1px 0 rgba(255,255,255,.055)\n    !important;\n}\n\n#moss-pricing-app .model-table-head {\n  background:\n    rgba(255,255,255,.22) !important;\n}\n\nhtml.dark #moss-pricing-app .model-table-head {\n  background:\n    rgba(255,255,255,.025) !important;\n}\n\n/* Reduce excessive separators so the list reads as one surface. */\n#moss-pricing-app .model-row {\n  border-bottom-color:\n    rgba(80,100,120,.065) !important;\n}\n\nhtml.dark #moss-pricing-app .model-row {\n  border-bottom-color:\n    rgba(255,255,255,.055) !important;\n}\n\n/* ---------------------------------------------------------\n   4. Consistent details button\n   Every row keeps exactly the same action structure.\n   --------------------------------------------------------- */\n\n#moss-pricing-app .detail-btn {\n  display:\n    inline-flex !important;\n}\n\n/* ---------------------------------------------------------\n   5. Small anchored glass details popover\n   --------------------------------------------------------- */\n\n#moss-pricing-app .model-detail-popover {\n  position:\n    fixed;\n\n  z-index:\n    110;\n\n  width:\n    min(350px, calc(100vw - 24px));\n\n  max-height:\n    min(390px, calc(100vh - 90px));\n\n  overflow-y:\n    auto;\n\n  padding:\n    12px;\n\n  border:\n    1px solid rgba(255,255,255,.62);\n\n  border-radius:\n    14px;\n\n  background:\n    rgba(245,249,252,.86);\n\n  backdrop-filter:\n    blur(20px)\n    saturate(130%);\n\n  -webkit-backdrop-filter:\n    blur(20px)\n    saturate(130%);\n\n  box-shadow:\n    0 18px 52px rgba(38,55,70,.16),\n    inset 0 1px 0 rgba(255,255,255,.72);\n\n  color:\n    var(--text);\n\n  opacity:\n    0;\n\n  transform:\n    translate3d(0,5px,0)\n    scale(.987);\n\n  pointer-events:\n    none;\n\n  transition:\n    opacity .16s ease,\n    transform .18s cubic-bezier(.2,.8,.2,1);\n}\n\nhtml.dark #moss-pricing-app .model-detail-popover {\n  border-color:\n    rgba(255,255,255,.13);\n\n  background:\n    rgba(18,21,26,.90);\n\n  box-shadow:\n    0 20px 55px rgba(0,0,0,.30),\n    inset 0 1px 0 rgba(255,255,255,.07);\n}\n\n#moss-pricing-app .model-detail-popover[data-open=\"true\"] {\n  opacity:\n    1;\n\n  transform:\n    translate3d(0,0,0)\n    scale(1);\n\n  pointer-events:\n    auto;\n}\n\n#moss-pricing-app .detail-pop-head {\n  display:\n    flex;\n\n  align-items:\n    center;\n\n  justify-content:\n    space-between;\n\n  gap:\n    10px;\n\n  padding:\n    1px 1px 9px;\n}\n\n#moss-pricing-app .detail-pop-title {\n  min-width:\n    0;\n\n  overflow:\n    hidden;\n\n  text-overflow:\n    ellipsis;\n\n  white-space:\n    nowrap;\n\n  font-family:\n    ui-monospace,\n    SFMono-Regular,\n    Menlo,\n    Monaco,\n    Consolas,\n    monospace;\n\n  font-size:\n    11.5px;\n\n  font-weight:\n    690;\n\n  color:\n    var(--text);\n}\n\n#moss-pricing-app .detail-pop-close {\n  flex:\n    0 0 27px;\n\n  width:\n    27px;\n\n  height:\n    27px;\n\n  display:\n    grid;\n\n  place-items:\n    center;\n\n  padding:\n    0;\n\n  border:\n    1px solid var(--line);\n\n  border-radius:\n    7px;\n\n  background:\n    rgba(255,255,255,.20);\n\n  color:\n    var(--muted);\n\n  cursor:\n    pointer;\n}\n\n#moss-pricing-app .detail-pop-close svg {\n  width:\n    12px;\n\n  height:\n    12px;\n}\n\n#moss-pricing-app .detail-pop-description {\n  margin:\n    0 0 8px;\n\n  padding:\n    8px 9px;\n\n  border:\n    1px solid var(--line);\n\n  border-radius:\n    8px;\n\n  background:\n    rgba(255,255,255,.24);\n\n  color:\n    var(--text-2);\n\n  font-size:\n    10px;\n\n  line-height:\n    1.55;\n}\n\nhtml.dark #moss-pricing-app .detail-pop-description {\n  background:\n    rgba(255,255,255,.025);\n}\n\n#moss-pricing-app .detail-pop-grid {\n  display:\n    grid;\n\n  grid-template-columns:\n    repeat(2, minmax(0,1fr));\n\n  gap:\n    6px;\n}\n\n#moss-pricing-app .detail-pop-item {\n  min-width:\n    0;\n\n  padding:\n    7px 8px;\n\n  border:\n    1px solid var(--line);\n\n  border-radius:\n    8px;\n\n  background:\n    rgba(255,255,255,.22);\n}\n\nhtml.dark #moss-pricing-app .detail-pop-item {\n  background:\n    rgba(255,255,255,.025);\n}\n\n#moss-pricing-app .detail-pop-label {\n  color:\n    var(--muted);\n\n  font-size:\n    8.5px;\n}\n\n#moss-pricing-app .detail-pop-value {\n  margin-top:\n    4px;\n\n  overflow-wrap:\n    anywhere;\n\n  color:\n    var(--text-2);\n\n  font-size:\n    9.5px;\n\n  line-height:\n    1.45;\n}\n\n/* If there is no extended metadata, keep the button but make\n   the panel intentionally tiny and explicit. */\n#moss-pricing-app .detail-pop-empty {\n  padding:\n    9px 10px;\n\n  border:\n    1px solid var(--line);\n\n  border-radius:\n    8px;\n\n  background:\n    rgba(255,255,255,.20);\n\n  color:\n    var(--muted);\n\n  font-size:\n    9.5px;\n\n  line-height:\n    1.5;\n}\n\n@media (max-width: 1120px) {\n  #moss-pricing-app .market-topbar {\n    grid-template-columns:\n      235px\n      minmax(0,1fr) !important;\n  }\n}\n\n@media (max-width: 930px) {\n  #moss-pricing-app .market-topbar {\n    grid-template-columns:\n      1fr !important;\n  }\n\n  #moss-pricing-app .title-line,\n  #moss-pricing-app .top-controls {\n    grid-column:\n      1 !important;\n  }\n}\n\n@media (max-width: 520px) {\n  #moss-pricing-app .detail-pop-grid {\n    grid-template-columns:\n      1fr;\n  }\n}\n\n\n/* =========================================================\n   V5 · SOURCE-BACKED MODEL DETAILS\n   ========================================================= */\n\n#moss-pricing-app .detail-pop-loading {\n  min-height: 88px;\n  display: grid;\n  place-items: center;\n  color: var(--muted);\n  font-size: 10px;\n  text-align: center;\n}\n\n#moss-pricing-app .detail-pop-section {\n  margin-top: 9px;\n  padding-top: 9px;\n  border-top: 1px solid var(--line);\n}\n\n#moss-pricing-app .detail-pop-section:first-of-type {\n  margin-top: 0;\n  padding-top: 0;\n  border-top: 0;\n}\n\n#moss-pricing-app .detail-pop-section-title {\n  margin: 0 0 7px;\n  color: var(--text);\n  font-size: 9px;\n  font-weight: 720;\n  letter-spacing: .02em;\n}\n\n#moss-pricing-app .detail-pop-source-list {\n  display: grid;\n  gap: 5px;\n}\n\n#moss-pricing-app .detail-pop-source {\n  min-width: 0;\n  padding: 7px 8px;\n\n  border: 1px solid var(--line);\n  border-radius: 8px;\n\n  background: rgba(255,255,255,.20);\n}\n\nhtml.dark #moss-pricing-app .detail-pop-source {\n  background: rgba(255,255,255,.022);\n}\n\n#moss-pricing-app .detail-pop-source-top {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n}\n\n#moss-pricing-app .detail-pop-source-name {\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n\n  color: var(--text-2);\n  font-size: 9.5px;\n  font-weight: 650;\n}\n\n#moss-pricing-app .detail-pop-source-kind {\n  flex: 0 0 auto;\n\n  min-height: 18px;\n  padding: 0 5px;\n\n  display: inline-flex;\n  align-items: center;\n\n  border: 1px solid var(--line);\n  border-radius: 999px;\n\n  color: var(--muted);\n  font-size: 7.5px;\n}\n\n#moss-pricing-app .detail-pop-source-note {\n  margin-top: 4px;\n  color: var(--muted);\n  font-size: 8.5px;\n  line-height: 1.45;\n}\n\n#moss-pricing-app .detail-pop-source a {\n  color: var(--accent);\n  text-decoration: none;\n}\n\n#moss-pricing-app .detail-pop-source a:hover {\n  text-decoration: underline;\n}\n\n#moss-pricing-app .detail-pop-resolve {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 5px;\n  margin-bottom: 8px;\n}\n\n#moss-pricing-app .detail-pop-resolve-tag {\n  min-height: 21px;\n  padding: 0 7px;\n\n  display: inline-flex;\n  align-items: center;\n\n  border: 1px solid var(--line);\n  border-radius: 999px;\n\n  color: var(--muted);\n  background: rgba(255,255,255,.18);\n\n  font-size: 8px;\n}\n\nhtml.dark #moss-pricing-app .detail-pop-resolve-tag {\n  background: rgba(255,255,255,.022);\n}\n\n#moss-pricing-app .detail-pop-resolve-tag strong {\n  margin-left: 4px;\n  color: var(--text-2);\n  font-weight: 650;\n}\n\n#moss-pricing-app .detail-pop-warning {\n  padding: 8px 9px;\n\n  border: 1px solid color-mix(in srgb, var(--amber) 24%, var(--line));\n  border-radius: 8px;\n\n  background: var(--amber-soft);\n  color: var(--amber);\n\n  font-size: 8.5px;\n  line-height: 1.5;\n}\n\n#moss-pricing-app .detail-pop-confidence {\n  color: var(--muted-2);\n  font-size: 8px;\n}\n\n#moss-pricing-app .detail-pop-capabilities {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 5px;\n}\n\n#moss-pricing-app .detail-pop-cap {\n  min-height: 20px;\n  padding: 0 6px;\n\n  display: inline-flex;\n  align-items: center;\n\n  border: 1px solid var(--line);\n  border-radius: 999px;\n\n  background: rgba(255,255,255,.18);\n  color: var(--text-2);\n\n  font-size: 8px;\n}\n\nhtml.dark #moss-pricing-app .detail-pop-cap {\n  background: rgba(255,255,255,.022);\n}\n\n\n/* =========================================================\n   V6 · LIGHT GLASS MODEL WORKSPACE\n   High reading efficiency + continuous page surface\n   ========================================================= */\n\nhtml.moss-pricing-v4-lock {\n  --moss-pricing-page-bg: #f3f7f9 !important;\n}\n\nhtml.dark.moss-pricing-v4-lock {\n  --moss-pricing-page-bg: #0b0f15 !important;\n}\n\nhtml.moss-pricing-v4-lock body,\n#moss-pricing-app {\n  background: var(--moss-pricing-page-bg) !important;\n}\n\n/* Header and page share one continuous material. */\nhtml.moss-pricing-v4-lock body header,\nhtml.moss-pricing-v4-lock body header > div,\nhtml.moss-pricing-v4-lock body header nav {\n  background:\n    color-mix(\n      in srgb,\n      var(--moss-pricing-page-bg) 90%,\n      transparent\n    ) !important;\n\n  border-bottom-color: transparent !important;\n  box-shadow: none !important;\n}\n\n/* Main page width / rhythm */\n#moss-pricing-app .market-shell {\n  width: min(1460px, calc(100vw - 34px)) !important;\n  padding-top: 18px !important;\n}\n\n/* ---------------------------------------------------------\n   Top tools: no extra card, directly integrated into page\n   --------------------------------------------------------- */\n\n#moss-pricing-app .market-topbar {\n  min-height: 50px !important;\n\n  padding: 0 2px 10px !important;\n  margin: 0 0 4px !important;\n\n  grid-template-columns:\n    252px\n    minmax(0, 1fr) !important;\n\n  gap: 16px !important;\n\n  border: 0 !important;\n  border-radius: 0 !important;\n\n  background: transparent !important;\n\n  backdrop-filter: none !important;\n  -webkit-backdrop-filter: none !important;\n\n  box-shadow: none !important;\n}\n\n#moss-pricing-app .title-line {\n  grid-column: 1 !important;\n\n  padding-left: 2px !important;\n\n  display: flex !important;\n  align-items: baseline !important;\n\n  gap: 8px !important;\n}\n\n#moss-pricing-app .market-title {\n  display: inline !important;\n\n  margin: 0 !important;\n\n  font-size: 21px !important;\n  line-height: 1.2 !important;\n\n  font-weight: 760 !important;\n  letter-spacing: -.03em !important;\n\n  color: var(--text) !important;\n}\n\n#moss-pricing-app .market-summary {\n  min-height: 0 !important;\n\n  color: var(--muted) !important;\n\n  font-size: 11px !important;\n}\n\n#moss-pricing-app .market-summary strong {\n  font-size: 12px !important;\n  font-weight: 690 !important;\n\n  color: var(--text-2) !important;\n}\n\n#moss-pricing-app .top-controls {\n  grid-column: 2 !important;\n\n  display: grid !important;\n\n  grid-template-columns:\n    minmax(0, 1fr)\n    148px !important;\n\n  gap: 8px !important;\n\n  align-items: center !important;\n}\n\n/* Search aligns exactly with the first model-list column. */\n#moss-pricing-app .search-input,\n#moss-pricing-app .top-sort {\n  height: 40px !important;\n\n  border:\n    1px solid rgba(90,110,130,.11) !important;\n\n  border-radius:\n    10px !important;\n\n  background:\n    rgba(255,255,255,.62) !important;\n\n  box-shadow:\n    inset 0 1px 0 rgba(255,255,255,.72),\n    0 4px 16px rgba(45,65,80,.022)\n    !important;\n}\n\nhtml.dark #moss-pricing-app .search-input,\nhtml.dark #moss-pricing-app .top-sort {\n  border-color:\n    rgba(255,255,255,.08) !important;\n\n  background:\n    rgba(255,255,255,.045) !important;\n\n  box-shadow:\n    inset 0 1px 0 rgba(255,255,255,.045)\n    !important;\n}\n\n/* ---------------------------------------------------------\n   Main two-column geometry\n   --------------------------------------------------------- */\n\n#moss-pricing-app .market-layout {\n  grid-template-columns:\n    252px\n    minmax(0,1fr) !important;\n\n  gap: 16px !important;\n}\n\n/* ---------------------------------------------------------\n   Filter: light glass, visually subordinate\n   --------------------------------------------------------- */\n\n#moss-pricing-app .filter-panel {\n  top: 12px !important;\n\n  border:\n    1px solid rgba(255,255,255,.62) !important;\n\n  border-radius:\n    13px !important;\n\n  background:\n    rgba(255,255,255,.38) !important;\n\n  backdrop-filter:\n    blur(16px)\n    saturate(118%) !important;\n\n  -webkit-backdrop-filter:\n    blur(16px)\n    saturate(118%) !important;\n\n  box-shadow:\n    0 7px 24px rgba(52,72,88,.038),\n    inset 0 1px 0 rgba(255,255,255,.66)\n    !important;\n}\n\nhtml.dark #moss-pricing-app .filter-panel {\n  border-color:\n    rgba(255,255,255,.08) !important;\n\n  background:\n    rgba(18,22,28,.54) !important;\n\n  box-shadow:\n    0 8px 26px rgba(0,0,0,.13),\n    inset 0 1px 0 rgba(255,255,255,.045)\n    !important;\n}\n\n#moss-pricing-app .filter-head {\n  padding: 14px 14px 11px !important;\n}\n\n#moss-pricing-app .filter-head h2 {\n  font-size: 15px !important;\n}\n\n#moss-pricing-app .filter-head p {\n  margin-top: 4px !important;\n\n  font-size: 10px !important;\n}\n\n#moss-pricing-app .filter-section {\n  margin: 0 14px !important;\n  padding: 12px 0 14px !important;\n}\n\n#moss-pricing-app .filter-section-title {\n  margin-bottom: 8px !important;\n\n  font-size: 12px !important;\n}\n\n#moss-pricing-app .filter-chip {\n  min-height: 28px !important;\n\n  padding: 0 8px !important;\n\n  gap: 5px !important;\n\n  font-size: 10.5px !important;\n\n  background:\n    rgba(255,255,255,.48) !important;\n}\n\nhtml.dark #moss-pricing-app .filter-chip {\n  background:\n    rgba(255,255,255,.032) !important;\n}\n\n/* ---------------------------------------------------------\n   Model list: one clean reading surface, not heavy glass cards\n   --------------------------------------------------------- */\n\n#moss-pricing-app .model-table {\n  border:\n    1px solid rgba(80,100,120,.085) !important;\n\n  border-radius:\n    12px !important;\n\n  background:\n    rgba(255,255,255,.70) !important;\n\n  backdrop-filter: none !important;\n  -webkit-backdrop-filter: none !important;\n\n  box-shadow:\n    0 8px 28px rgba(45,65,80,.035),\n    inset 0 1px 0 rgba(255,255,255,.78)\n    !important;\n}\n\nhtml.dark #moss-pricing-app .model-table {\n  border-color:\n    rgba(255,255,255,.075) !important;\n\n  background:\n    rgba(16,20,27,.78) !important;\n\n  box-shadow:\n    0 8px 28px rgba(0,0,0,.15),\n    inset 0 1px 0 rgba(255,255,255,.035)\n    !important;\n}\n\n#moss-pricing-app .model-table-head {\n  min-height: 36px !important;\n\n  padding: 0 13px !important;\n\n  background:\n    rgba(245,248,250,.78) !important;\n\n  color: var(--muted) !important;\n\n  font-size: 9.5px !important;\n\n  border-bottom-color:\n    rgba(70,90,110,.075) !important;\n}\n\nhtml.dark #moss-pricing-app .model-table-head {\n  background:\n    rgba(255,255,255,.025) !important;\n}\n\n#moss-pricing-app .model-row {\n  min-height: 63px !important;\n\n  padding: 8px 13px !important;\n\n  border-bottom-color:\n    rgba(70,90,110,.055) !important;\n}\n\nhtml.dark #moss-pricing-app .model-row {\n  border-bottom-color:\n    rgba(255,255,255,.045) !important;\n}\n\n#moss-pricing-app .model-row:hover {\n  background:\n    linear-gradient(\n      90deg,\n      rgba(100,120,255,.048),\n      rgba(100,120,255,.012) 42%,\n      transparent 78%\n    ) !important;\n}\n\n/* Strong first level: model identity */\n#moss-pricing-app .model-icon-wrap {\n  flex-basis: 36px !important;\n\n  width: 36px !important;\n  height: 36px !important;\n\n  border-radius: 9px !important;\n\n  background:\n    rgba(255,255,255,.66) !important;\n}\n\nhtml.dark #moss-pricing-app .model-icon-wrap {\n  background:\n    rgba(255,255,255,.035) !important;\n}\n\n#moss-pricing-app .native-icon,\n#moss-pricing-app .native-icon > *,\n#moss-pricing-app .native-icon svg,\n#moss-pricing-app .native-icon img {\n  width: 24px !important;\n  height: 24px !important;\n\n  max-width: 24px !important;\n  max-height: 24px !important;\n}\n\n#moss-pricing-app .model-name {\n  font-size: 12.5px !important;\n  font-weight: 710 !important;\n}\n\n#moss-pricing-app .model-provider {\n  margin-top: 3px !important;\n\n  font-size: 9.5px !important;\n}\n\n/* Compact 24h status */\n#moss-pricing-app .status-main {\n  gap: 6px !important;\n}\n\n#moss-pricing-app .status-success {\n  font-size: 10.5px !important;\n}\n\n#moss-pricing-app .status-title {\n  font-size: 9px !important;\n}\n\n#moss-pricing-app .status-metrics {\n  margin-top: 3px !important;\n\n  gap: 4px 8px !important;\n\n  font-size: 8.5px !important;\n}\n\n/* Tags intentionally quiet */\n#moss-pricing-app .meta-wrap {\n  gap: 4px !important;\n}\n\n#moss-pricing-app .meta-tag {\n  min-height: 20px !important;\n\n  padding: 0 6px !important;\n\n  font-size: 8.5px !important;\n\n  background:\n    rgba(248,250,252,.72) !important;\n}\n\nhtml.dark #moss-pricing-app .meta-tag {\n  background:\n    rgba(255,255,255,.025) !important;\n}\n\n/* Actions */\n#moss-pricing-app .detail-btn,\n#moss-pricing-app .copy-btn {\n  height: 29px !important;\n\n  border-radius: 7px !important;\n\n  background:\n    rgba(255,255,255,.62) !important;\n}\n\n#moss-pricing-app .copy-btn {\n  width: 29px !important;\n}\n\nhtml.dark #moss-pricing-app .detail-btn,\nhtml.dark #moss-pricing-app .copy-btn {\n  background:\n    rgba(255,255,255,.035) !important;\n}\n\n/* ---------------------------------------------------------\n   Detail popover: compact but more informative\n   --------------------------------------------------------- */\n\n#moss-pricing-app .model-detail-popover {\n  width:\n    min(378px, calc(100vw - 24px)) !important;\n\n  max-height:\n    min(470px, calc(100vh - 82px)) !important;\n\n  padding:\n    11px !important;\n\n  border-radius:\n    13px !important;\n\n  background:\n    rgba(246,250,252,.91) !important;\n\n  box-shadow:\n    0 18px 54px rgba(34,52,68,.17),\n    inset 0 1px 0 rgba(255,255,255,.78)\n    !important;\n}\n\nhtml.dark #moss-pricing-app .model-detail-popover {\n  background:\n    rgba(17,20,26,.93) !important;\n}\n\n#moss-pricing-app .detail-pop-grid {\n  grid-template-columns:\n    repeat(2, minmax(0,1fr)) !important;\n}\n\n#moss-pricing-app .detail-pop-section-title {\n  font-size: 9.5px !important;\n}\n\n/* Multi-source merge summary */\n#moss-pricing-app .detail-pop-merge-summary {\n  margin: 7px 0 0;\n\n  color: var(--muted);\n  font-size: 8px;\n}\n\n#moss-pricing-app .detail-pop-field-source {\n  margin-left: 4px;\n  color: var(--muted-2);\n  font-size: 7px;\n  font-weight: 500;\n}\n\n@media (max-width: 1120px) {\n  #moss-pricing-app .market-topbar,\n  #moss-pricing-app .market-layout {\n    grid-template-columns:\n      230px\n      minmax(0,1fr) !important;\n  }\n}\n\n@media (max-width: 930px) {\n  #moss-pricing-app .market-topbar {\n    grid-template-columns: 1fr !important;\n  }\n\n  #moss-pricing-app .market-layout {\n    display: block !important;\n  }\n}\n\n@media (max-width: 620px) {\n  #moss-pricing-app .top-controls {\n    grid-template-columns: 1fr !important;\n  }\n\n  #moss-pricing-app .top-sort {\n    width: 100% !important;\n  }\n}\n";

const CLIENT_JS = "\n(() => {\n  \"use strict\";\n\n  const ROOT_ID = \"moss-pricing-app\";\n  const LOCK_CLASS = \"moss-pricing-v4-lock\";\n  const ROUTE_EVENT = \"moss-pricing-route-v4\";\n  const PATCH_KEY = \"__mossPricingV4HistoryPatched\";\n\n  const state = {\n    models: [],\n    vendors: [],\n    items: [],\n    itemByName: new Map(),\n\n    nativeByName: new Map(),\n\n    activeGroup: \"全部\",\n    activeVendor: \"全部\",\n    activeTag: \"全部\",\n    search: \"\",\n    sort: \"name-asc\",\n\n    routeGeneration: 0,\n    lastPath: location.pathname,\n  };\n\n\n  /* ---------------------------------------------------------\n     helpers\n     --------------------------------------------------------- */\n\n  const esc = (value) =>\n    String(value ?? \"\")\n      .replaceAll(\"&\", \"&amp;\")\n      .replaceAll(\"<\", \"&lt;\")\n      .replaceAll(\">\", \"&gt;\")\n      .replaceAll('\"', \"&quot;\")\n      .replaceAll(\"'\", \"&#039;\");\n\n\n  const isPricingRoute = () => {\n    const path =\n      location.pathname.replace(/\\/+$/, \"\") || \"/\";\n\n    return path === \"/pricing\";\n  };\n\n\n  const sleep = (ms) =>\n    new Promise((resolve) =>\n      setTimeout(resolve, ms)\n    );\n\n\n  const toArray = (value) => {\n    if (Array.isArray(value)) {\n      return value\n        .map(String)\n        .map((v) => v.trim())\n        .filter(Boolean);\n    }\n\n    if (typeof value === \"string\") {\n      return value\n        .split(\",\")\n        .map((v) => v.trim())\n        .filter(Boolean);\n    }\n\n    return [];\n  };\n\n\n  const inferProvider = (name) => {\n    const n =\n      String(name || \"\").toLowerCase();\n\n    const rules = [\n      [/(gpt|openai|chatgpt|^o1|^o3|^o4)/, \"OpenAI\"],\n      [/(claude|anthropic)/, \"Anthropic\"],\n      [/(gemini|google)/, \"Google\"],\n      [/(deepseek)/, \"DeepSeek\"],\n      [/(qwen|qwq|tongyi)/, \"阿里巴巴\"],\n      [/(doubao|seed|bytedance)/, \"字节跳动\"],\n      [/(glm|zhipu|chatglm)/, \"智谱\"],\n      [/(kimi|moonshot)/, \"Moonshot\"],\n      [/(minimax)/, \"MiniMax\"],\n      [/(grok|xai)/, \"xAI\"],\n      [/(yi-|01ai|lingyi|零一)/, \"零一万物\"],\n      [/(llama|meta)/, \"Meta\"],\n      [/(mistral|mixtral)/, \"Mistral\"],\n    ];\n\n    for (const [pattern, provider] of rules) {\n      if (pattern.test(n)) {\n        return provider;\n      }\n    }\n\n    return \"其他\";\n  };\n\n\n  const normalizePricing = (json) => {\n    if (Array.isArray(json?.data)) {\n      return {\n        models: json.data,\n        vendors:\n          Array.isArray(json?.vendors)\n            ? json.vendors\n            : [],\n      };\n    }\n\n    if (\n      json?.data &&\n      typeof json.data === \"object\"\n    ) {\n      const body = json.data;\n\n      return {\n        models:\n          Array.isArray(body?.data)\n            ? body.data\n            : (\n              Array.isArray(body?.models)\n                ? body.models\n                : []\n            ),\n        vendors:\n          Array.isArray(body?.vendors)\n            ? body.vendors\n            : (\n              Array.isArray(json?.vendors)\n                ? json.vendors\n                : []\n            ),\n      };\n    }\n\n    return {\n      models: [],\n      vendors: [],\n    };\n  };\n\n\n  /* ---------------------------------------------------------\n     find / lock original pricing page\n     --------------------------------------------------------- */\n\n  const findOriginalMain = () => {\n    const mains =\n      [...document.querySelectorAll(\"main\")]\n        .filter(\n          (main) =>\n            main.id !== ROOT_ID\n        );\n\n    for (const main of mains) {\n      const hasModel =\n        !!main.querySelector(\"h3\");\n\n      const hasPaging =\n        [...main.querySelectorAll(\"button\")]\n          .some(\n            (button) =>\n              button.textContent\n                .includes(\"下一页\")\n          );\n\n      if (hasModel && hasPaging) {\n        return main;\n      }\n    }\n\n    return null;\n  };\n\n\n  const waitForOriginalMain = async (\n    timeout = 6000\n  ) => {\n    const started =\n      Date.now();\n\n    while (\n      Date.now() - started <\n      timeout\n    ) {\n      const main =\n        findOriginalMain();\n\n      if (main) {\n        return main;\n      }\n\n      await sleep(80);\n    }\n\n    return null;\n  };\n\n\n  const lockOriginalPage = () => {\n    document.documentElement\n      .classList\n      .add(LOCK_CLASS);\n  };\n\n\n  const unlockOriginalPage = () => {\n    document.documentElement\n      .classList\n      .remove(LOCK_CLASS);\n  };\n\n\n  /* ---------------------------------------------------------\n     native card scraping\n     --------------------------------------------------------- */\n\n  const findCardForTitle = (title) => {\n    let node =\n      title.parentElement;\n\n    while (\n      node &&\n      node.tagName !== \"MAIN\"\n    ) {\n      const classes =\n        String(node.className || \"\");\n\n      if (\n        node.tagName === \"DIV\" &&\n        classes.includes(\"group\") &&\n        classes.includes(\"relative\") &&\n        classes.includes(\"flex\") &&\n        classes.includes(\"flex-col\")\n      ) {\n        return node;\n      }\n\n      node =\n        node.parentElement;\n    }\n\n    return null;\n  };\n\n\n  const extractIconHTML = (\n    title,\n    card\n  ) => {\n    try {\n      const nameBox =\n        title.parentElement;\n\n      const identityFlex =\n        nameBox?.parentElement;\n\n      const iconBox =\n        identityFlex?.firstElementChild;\n\n      if (\n        iconBox &&\n        iconBox !== nameBox\n      ) {\n        const html =\n          iconBox.innerHTML.trim();\n\n        if (html) {\n          return html;\n        }\n      }\n    } catch {}\n\n    return \"\";\n  };\n\n\n  const parseSuccess = (card) => {\n    const el =\n      card.querySelector(\n        '[title^=\"成功率:\"]'\n      );\n\n    if (!el) {\n      return null;\n    }\n\n    const title =\n      el.getAttribute(\"title\") || \"\";\n\n    const match =\n      title.match(\n        /成功率:\\s*([0-9.]+)%/\n      );\n\n    if (!match) {\n      return null;\n    }\n\n    const value =\n      Number(match[1]);\n\n    return Number.isFinite(value)\n      ? value\n      : null;\n  };\n\n\n  const parseMetricText = (\n    card,\n    title,\n    prefix\n  ) => {\n    const el =\n      card.querySelector(\n        `[title=\"${title}\"]`\n      );\n\n    if (!el) {\n      return null;\n    }\n\n    const text =\n      el.textContent\n        .trim()\n        .replace(\n          new RegExp(\n            \"^\" + prefix + \"\\\\s*\"\n          ),\n          \"\"\n        );\n\n    return text || null;\n  };\n\n\n  const scrapeCurrentNativePage = (\n    originalMain\n  ) => {\n    const titles =\n      [...originalMain.querySelectorAll(\"h3\")];\n\n    let count = 0;\n\n    for (const title of titles) {\n      const name =\n        title.textContent.trim();\n\n      if (!name) {\n        continue;\n      }\n\n      const card =\n        findCardForTitle(title);\n\n      if (!card) {\n        continue;\n      }\n\n      const iconHTML =\n        extractIconHTML(\n          title,\n          card\n        );\n\n      const success =\n        parseSuccess(card);\n\n      const latency =\n        parseMetricText(\n          card,\n          \"平均延迟\",\n          \"延迟\"\n        );\n\n      const throughput =\n        parseMetricText(\n          card,\n          \"吞吐量\",\n          \"吞吐\"\n        );\n\n      const existing =\n        state.nativeByName.get(\n          name\n        ) || {};\n\n      state.nativeByName.set(\n        name,\n        {\n          ...existing,\n          iconHTML:\n            iconHTML ||\n            existing.iconHTML ||\n            \"\",\n          success:\n            success !== null\n              ? success\n              : (\n                existing.success ??\n                null\n              ),\n          latency:\n            latency ||\n            existing.latency ||\n            null,\n          throughput:\n            throughput ||\n            existing.throughput ||\n            null,\n        }\n      );\n\n      count++;\n    }\n\n    return count;\n  };\n\n\n  const pageFirstModelName = (\n    originalMain\n  ) =>\n    originalMain\n      .querySelector(\"h3\")\n      ?.textContent\n      ?.trim() || \"\";\n\n\n  const findPagingButton = (\n    originalMain,\n    text\n  ) =>\n    [...originalMain.querySelectorAll(\"button\")]\n      .find(\n        (button) =>\n          button.textContent\n            .includes(text)\n      ) || null;\n\n\n  const waitForPageChange = async (\n    originalMain,\n    oldFirst,\n    timeout = 2200\n  ) => {\n    const started =\n      Date.now();\n\n    while (\n      Date.now() - started <\n      timeout\n    ) {\n      const now =\n        pageFirstModelName(\n          originalMain\n        );\n\n      if (\n        now &&\n        now !== oldFirst\n      ) {\n        await sleep(70);\n        return true;\n      }\n\n      await sleep(60);\n    }\n\n    return false;\n  };\n\n\n  const harvestAllNativePages = async (\n    originalMain,\n    generation\n  ) => {\n    if (!originalMain) {\n      return;\n    }\n\n    // Always capture the current page first.\n    scrapeCurrentNativePage(\n      originalMain\n    );\n\n    // Move to first page before harvesting, in case React preserved page state.\n    for (let guard = 0; guard < 10; guard++) {\n      if (\n        generation !==\n          state.routeGeneration ||\n        !isPricingRoute()\n      ) {\n        return;\n      }\n\n      const prev =\n        findPagingButton(\n          originalMain,\n          \"上一页\"\n        );\n\n      if (\n        !prev ||\n        prev.disabled\n      ) {\n        break;\n      }\n\n      const oldFirst =\n        pageFirstModelName(\n          originalMain\n        );\n\n      prev.click();\n\n      await waitForPageChange(\n        originalMain,\n        oldFirst\n      );\n\n      scrapeCurrentNativePage(\n        originalMain\n      );\n    }\n\n    // Harvest every page using New API's own native pagination.\n    for (let guard = 0; guard < 12; guard++) {\n      if (\n        generation !==\n          state.routeGeneration ||\n        !isPricingRoute()\n      ) {\n        return;\n      }\n\n      scrapeCurrentNativePage(\n        originalMain\n      );\n\n      const next =\n        findPagingButton(\n          originalMain,\n          \"下一页\"\n        );\n\n      if (\n        !next ||\n        next.disabled\n      ) {\n        break;\n      }\n\n      const oldFirst =\n        pageFirstModelName(\n          originalMain\n        );\n\n      next.click();\n\n      const changed =\n        await waitForPageChange(\n          originalMain,\n          oldFirst\n        );\n\n      if (!changed) {\n        break;\n      }\n    }\n\n    scrapeCurrentNativePage(\n      originalMain\n    );\n\n    // Restore native page to page 1 before we ever unhide it.\n    for (let guard = 0; guard < 12; guard++) {\n      const prev =\n        findPagingButton(\n          originalMain,\n          \"上一页\"\n        );\n\n      if (\n        !prev ||\n        prev.disabled\n      ) {\n        break;\n      }\n\n      const oldFirst =\n        pageFirstModelName(\n          originalMain\n        );\n\n      prev.click();\n\n      await waitForPageChange(\n        originalMain,\n        oldFirst\n      );\n    }\n  };\n\n\n  /* ---------------------------------------------------------\n     merge API model metadata with exact native artwork/status\n     --------------------------------------------------------- */\n\n  const buildItems = () => {\n    const vendorMap =\n      new Map();\n\n    for (const vendor of state.vendors) {\n      vendorMap.set(\n        String(vendor?.id),\n        vendor\n      );\n    }\n\n    state.items =\n      state.models.map(\n        (model) => {\n          const name =\n            String(\n              model?.model_name || \"\"\n            );\n\n          const vendor =\n            vendorMap.get(\n              String(model?.vendor_id)\n            );\n\n          const provider =\n            vendor?.name ||\n            model?.vendor_name ||\n            inferProvider(name);\n\n          const groups =\n            toArray(\n              model?.enable_groups ??\n              model?.enable_group\n            );\n\n          const tags =\n            toArray(model?.tags);\n\n          const endpoints =\n            toArray(\n              model?.supported_endpoint_types\n            );\n\n          const native =\n            state.nativeByName.get(\n              name\n            ) || {\n              iconHTML: \"\",\n              success: null,\n              latency: null,\n              throughput: null,\n            };\n\n          return {\n            model,\n            name,\n            provider,\n            groups,\n            tags,\n            endpoints,\n            native,\n          };\n        }\n      );\n\n    state.itemByName =\n      new Map(\n        state.items.map(\n          (item) => [\n            item.name,\n            item,\n          ]\n        )\n      );\n  };\n\n\n  /* ---------------------------------------------------------\n     root\n     --------------------------------------------------------- */\n\n  const createRoot = () => {\n    const root =\n      document.createElement(\"main\");\n\n    root.id = ROOT_ID;\n\n    root.innerHTML = `\n      <div class=\"market-shell\">\n\n        <header class=\"market-topbar\">\n\n          <div class=\"title-line\">\n            <h1 class=\"market-title\">模型广场</h1>\n\n            <span class=\"market-summary\">\n              <strong class=\"visible-summary-count\">—</strong> 个模型\n            </span>\n\n            <span\n              class=\"native-sync\"\n              data-ready=\"false\"\n            >同步原生图标/状态中</span>\n          </div>\n\n\n          <div class=\"top-controls\">\n\n            <label class=\"search-wrap\">\n              <svg\n                class=\"search-icon\"\n                viewBox=\"0 0 24 24\"\n                fill=\"none\"\n                stroke=\"currentColor\"\n                stroke-width=\"1.8\"\n                aria-hidden=\"true\"\n              >\n                <circle cx=\"11\" cy=\"11\" r=\"7\"></circle>\n                <path d=\"m20 20-3.4-3.4\"></path>\n              </svg>\n\n              <input\n                class=\"search-input\"\n                type=\"search\"\n                autocomplete=\"off\"\n                spellcheck=\"false\"\n                placeholder=\"搜索模型、供应商或标签…\"\n                aria-label=\"搜索模型\"\n              >\n            </label>\n\n\n            <select\n              class=\"sort-select top-sort\"\n              aria-label=\"模型排序\"\n            >\n              <option value=\"name-asc\">名称 A → Z</option>\n              <option value=\"name-desc\">名称 Z → A</option>\n              <option value=\"provider\">按供应商</option>\n              <option value=\"status\">按 24h 状态</option>\n            </select>\n\n          </div>\n\n        </header>\n\n\n        <button\n          type=\"button\"\n          class=\"mobile-filter-toggle\"\n          aria-expanded=\"false\"\n        >\n          <span>筛选</span>\n          <span>展开</span>\n        </button>\n\n\n        <div class=\"market-layout\">\n\n          <aside\n            class=\"filter-panel\"\n            data-open=\"false\"\n          >\n\n            <div class=\"filter-head\">\n              <div>\n                <h2>筛选</h2>\n                <p>按供应商、分组和标签细化模型。</p>\n              </div>\n\n              <button\n                type=\"button\"\n                class=\"reset-btn\"\n              >重置</button>\n            </div>\n\n\n            <section class=\"filter-section\">\n              <h3 class=\"filter-section-title\">分组</h3>\n              <div class=\"filter-chips group-chips\"></div>\n            </section>\n\n\n            <section class=\"filter-section\">\n              <h3 class=\"filter-section-title\">供应商</h3>\n              <div class=\"filter-chips vendor-chips\"></div>\n            </section>\n\n\n            <section class=\"filter-section tag-filter-section\">\n              <h3 class=\"filter-section-title\">标签</h3>\n              <div class=\"filter-chips tag-chips\"></div>\n            </section>\n\n          </aside>\n\n\n          <section class=\"result-panel\">\n            <div class=\"model-table\">\n\n              <div class=\"model-table-head\">\n                <div>模型</div>\n                <div>最近 24 小时状态</div>\n                <div>分组 / 标签</div>\n                <div style=\"text-align:right\">操作</div>\n              </div>\n\n              <div class=\"model-rows\">\n                <div class=\"state-box\">\n                  正在读取全部模型及原生状态…\n                </div>\n              </div>\n\n            </div>\n\n          </section>\n\n        </div>\n\n      </div>\n\n\n      <div\n        class=\"model-detail-popover\"\n        data-open=\"false\"\n        aria-hidden=\"true\"\n      ></div>\n\n\n    `;\n\n    return root;\n  };\n\n\n  /* ---------------------------------------------------------\n     filtering\n     --------------------------------------------------------- */\n\n  const chipHTML = (\n    label,\n    count,\n    type,\n    active\n  ) => `\n    <button\n      type=\"button\"\n      class=\"filter-chip\"\n      data-filter-type=\"${esc(type)}\"\n      data-filter-value=\"${esc(label)}\"\n      aria-pressed=\"${active ? \"true\" : \"false\"}\"\n    >\n      <span>${esc(label)}</span>\n      <span class=\"filter-chip-count\">${count}</span>\n    </button>\n  `;\n\n\n  const renderFilters = (root) => {\n    const groups =\n      new Map();\n\n    const vendors =\n      new Map();\n\n    const tags =\n      new Map();\n\n    for (const item of state.items) {\n      vendors.set(\n        item.provider,\n        (vendors.get(item.provider) || 0) + 1\n      );\n\n      for (const group of item.groups) {\n        groups.set(\n          group,\n          (groups.get(group) || 0) + 1\n        );\n      }\n\n      for (const tag of item.tags) {\n        tags.set(\n          tag,\n          (tags.get(tag) || 0) + 1\n        );\n      }\n    }\n\n    const total =\n      state.items.length;\n\n    root.querySelector(\n      \".group-chips\"\n    ).innerHTML =\n      chipHTML(\n        \"全部\",\n        total,\n        \"group\",\n        state.activeGroup === \"全部\"\n      ) +\n      [...groups.entries()]\n        .sort(\n          (a, b) =>\n            a[0].localeCompare(\n              b[0],\n              \"zh-CN\"\n            )\n        )\n        .map(\n          ([label, count]) =>\n            chipHTML(\n              label,\n              count,\n              \"group\",\n              state.activeGroup === label\n            )\n        )\n        .join(\"\");\n\n\n    root.querySelector(\n      \".vendor-chips\"\n    ).innerHTML =\n      chipHTML(\n        \"全部\",\n        total,\n        \"vendor\",\n        state.activeVendor === \"全部\"\n      ) +\n      [...vendors.entries()]\n        .sort(\n          (a, b) =>\n            b[1] - a[1] ||\n            a[0].localeCompare(\n              b[0],\n              \"zh-CN\"\n            )\n        )\n        .map(\n          ([label, count]) =>\n            chipHTML(\n              label,\n              count,\n              \"vendor\",\n              state.activeVendor === label\n            )\n        )\n        .join(\"\");\n\n\n    const usefulTags =\n      [...tags.entries()]\n        .sort(\n          (a, b) =>\n            b[1] - a[1] ||\n            a[0].localeCompare(\n              b[0],\n              \"zh-CN\"\n            )\n        )\n        .slice(0, 16);\n\n    const tagSection =\n      root.querySelector(\n        \".tag-filter-section\"\n      );\n\n    if (usefulTags.length) {\n      tagSection.style.display = \"\";\n\n      root.querySelector(\n        \".tag-chips\"\n      ).innerHTML =\n        chipHTML(\n          \"全部\",\n          total,\n          \"tag\",\n          state.activeTag === \"全部\"\n        ) +\n        usefulTags\n          .map(\n            ([label, count]) =>\n              chipHTML(\n                label,\n                count,\n                \"tag\",\n                state.activeTag === label\n              )\n          )\n          .join(\"\");\n    } else {\n      tagSection.style.display = \"none\";\n    }\n  };\n\n\n  const filteredItems = () => {\n    let result =\n      state.items.filter(\n        (item) => {\n          const haystack = [\n            item.name,\n            item.provider,\n            ...item.groups,\n            ...item.tags,\n            ...item.endpoints,\n          ]\n            .join(\" \")\n            .toLowerCase();\n\n          if (\n            state.search &&\n            !haystack.includes(state.search)\n          ) {\n            return false;\n          }\n\n          if (\n            state.activeGroup !== \"全部\" &&\n            !item.groups.includes(\n              state.activeGroup\n            )\n          ) {\n            return false;\n          }\n\n          if (\n            state.activeVendor !== \"全部\" &&\n            item.provider !==\n              state.activeVendor\n          ) {\n            return false;\n          }\n\n          if (\n            state.activeTag !== \"全部\" &&\n            !item.tags.includes(\n              state.activeTag\n            )\n          ) {\n            return false;\n          }\n\n          return true;\n        }\n      );\n\n    if (state.sort === \"name-desc\") {\n      result.sort(\n        (a, b) =>\n          b.name.localeCompare(\n            a.name,\n            undefined,\n            {\n              numeric: true,\n              sensitivity: \"base\",\n            }\n          )\n      );\n    } else if (state.sort === \"provider\") {\n      result.sort(\n        (a, b) =>\n          a.provider.localeCompare(\n            b.provider,\n            \"zh-CN\"\n          ) ||\n          a.name.localeCompare(\n            b.name,\n            undefined,\n            {\n              numeric: true,\n              sensitivity: \"base\",\n            }\n          )\n      );\n    } else if (state.sort === \"status\") {\n      const rank = (item) => {\n        const s =\n          item.native.success;\n\n        if (s === null) {\n          return 4;\n        }\n\n        if (s >= 99) {\n          return 0;\n        }\n\n        if (s >= 95) {\n          return 1;\n        }\n\n        return 2;\n      };\n\n      result.sort(\n        (a, b) =>\n          rank(a) - rank(b) ||\n          a.name.localeCompare(\n            b.name,\n            undefined,\n            {\n              numeric: true,\n              sensitivity: \"base\",\n            }\n          )\n      );\n    } else {\n      result.sort(\n        (a, b) =>\n          a.name.localeCompare(\n            b.name,\n            undefined,\n            {\n              numeric: true,\n              sensitivity: \"base\",\n            }\n          )\n      );\n    }\n\n    return result;\n  };\n\n\n\n  /* ---------------------------------------------------------\n     meaningful extra details\n     --------------------------------------------------------- */\n\n  const extraDetailEntries = (item) => {\n    const model =\n      item.model || {};\n\n    const entries = [];\n\n    entries.push({\n      label: \"调用 ID\",\n      value: item.name,\n    });\n\n    const push = (\n      label,\n      value\n    ) => {\n      if (\n        value === null ||\n        value === undefined ||\n        value === \"\"\n      ) {\n        return;\n      }\n\n      if (\n        Array.isArray(value) &&\n        !value.length\n      ) {\n        return;\n      }\n\n      entries.push({\n        label,\n        value:\n          Array.isArray(value)\n            ? value.join(\"、\")\n            : String(value),\n      });\n    };\n\n    push(\n      \"上下文长度\",\n      model?.context_length\n    );\n\n    push(\n      \"最大输出\",\n      model?.max_output_tokens\n    );\n\n    push(\n      \"参数量\",\n      model?.parameter_count\n    );\n\n    push(\n      \"知识截止\",\n      model?.knowledge_cutoff\n    );\n\n    push(\n      \"发布日期\",\n      model?.release_date\n    );\n\n    push(\n      \"输入模态\",\n      toArray(\n        model?.input_modalities\n      )\n    );\n\n    push(\n      \"输出模态\",\n      toArray(\n        model?.output_modalities\n      )\n    );\n\n    push(\n      \"支持端点\",\n      item.endpoints\n    );\n\n    const capabilities =\n      model?.capabilities;\n\n    if (Array.isArray(capabilities)) {\n      push(\n        \"能力\",\n        capabilities\n      );\n    } else if (\n      capabilities &&\n      typeof capabilities === \"object\"\n    ) {\n      const enabled =\n        Object.entries(capabilities)\n          .filter(\n            ([, value]) =>\n              value === true ||\n              value === 1 ||\n              value === \"true\"\n          )\n          .map(\n            ([key]) => key\n          );\n\n      push(\n        \"能力\",\n        enabled\n      );\n    }\n\n    const description =\n      String(\n        model?.description || \"\"\n      ).trim();\n\n    return {\n      description:\n        description &&\n        description !== \"暂无描述。\" &&\n        description !== \"暂无额外描述。\"\n          ? description\n          : \"\",\n      entries,\n    };\n  };\n\n\n  const hasExtraDetails = (item) => {\n    const extra =\n      extraDetailEntries(item);\n\n    return Boolean(\n      extra.description ||\n      extra.entries.length\n    );\n  };\n\n\n  const inlineDetailHTML = (item) => {\n    const extra =\n      extraDetailEntries(item);\n\n    if (\n      !extra.description &&\n      !extra.entries.length\n    ) {\n      return \"\";\n    }\n\n    return `\n      <div class=\"inline-detail\">\n\n        ${\n          extra.description\n            ? `\n              <div class=\"inline-detail-description\">\n                ${esc(extra.description)}\n              </div>\n            `\n            : \"\"\n        }\n\n        ${\n          extra.entries.length\n            ? `\n              <div class=\"inline-detail-grid\">\n                ${extra.entries\n                  .map(\n                    (entry) => `\n                      <div class=\"inline-detail-item\">\n                        <div class=\"inline-detail-label\">${esc(entry.label)}</div>\n                        <div class=\"inline-detail-value\">${esc(entry.value)}</div>\n                      </div>\n                    `\n                  )\n                  .join(\"\")}\n              </div>\n            `\n            : \"\"\n        }\n\n      </div>\n    `;\n  };\n\n\n\n  /* ---------------------------------------------------------\n     anchored detail popover\n     --------------------------------------------------------- */\n\n  const safeExternalURL = (value) => {\n    try {\n      const url =\n        new URL(\n          String(value || \"\")\n        );\n\n      if (\n        url.protocol === \"https:\" ||\n        url.protocol === \"http:\"\n      ) {\n        return url.href;\n      }\n    } catch {}\n\n    return \"\";\n  };\n\n\n  const formatTokenCount = (value) => {\n    const n =\n      Number(value);\n\n    if (!Number.isFinite(n)) {\n      return \"\";\n    }\n\n    return n.toLocaleString();\n  };\n\n\n  const booleanLabel = (value) => {\n    if (value === true) return \"支持\";\n    if (value === false) return \"不支持\";\n    return \"\";\n  };\n\n\n  const metadataGrid = (\n    metadata,\n    fieldSources = {}\n  ) => {\n    const items = [];\n\n    const add = (\n      key,\n      label,\n      value\n    ) => {\n      if (\n        value === null ||\n        value === undefined ||\n        value === \"\"\n      ) {\n        return;\n      }\n\n      if (\n        Array.isArray(value) &&\n        !value.length\n      ) {\n        return;\n      }\n\n      items.push({\n        key,\n        label,\n        value:\n          Array.isArray(value)\n            ? value.join(\"、\")\n            : String(value),\n        source:\n          fieldSources?.[key] || \"\",\n      });\n    };\n\n    add(\n      \"context\",\n      \"上下文\",\n      formatTokenCount(\n        metadata?.limit?.context\n      )\n    );\n\n    add(\n      \"input_limit\",\n      \"最大输入\",\n      formatTokenCount(\n        metadata?.limit?.input\n      )\n    );\n\n    add(\n      \"output_limit\",\n      \"最大输出\",\n      formatTokenCount(\n        metadata?.limit?.output\n      )\n    );\n\n    add(\n      \"knowledge\",\n      \"知识截止\",\n      metadata?.knowledge\n    );\n\n    add(\n      \"release_date\",\n      \"发布日期\",\n      metadata?.release_date\n    );\n\n    add(\n      \"deprecation_date\",\n      \"弃用日期\",\n      metadata?.deprecation_date\n    );\n\n    add(\n      \"last_updated\",\n      \"最近更新\",\n      metadata?.last_updated\n    );\n\n    add(\n      \"input_modalities\",\n      \"输入模态\",\n      metadata?.modalities?.input\n    );\n\n    add(\n      \"output_modalities\",\n      \"输出模态\",\n      metadata?.modalities?.output\n    );\n\n    add(\n      \"mode\",\n      \"模型类型\",\n      metadata?.mode\n    );\n\n    add(\n      \"tokenizer\",\n      \"Tokenizer\",\n      metadata?.tokenizer\n    );\n\n    add(\n      \"provider\",\n      \"资料提供商\",\n      metadata?.provider\n    );\n\n    add(\n      \"open_weights\",\n      \"开放权重\",\n      booleanLabel(\n        metadata?.open_weights\n      )\n    );\n\n    return items;\n  };\n\n\n\n\n  const capabilityList = (metadata) => {\n    const result = [];\n\n    const push = (\n      label,\n      value\n    ) => {\n      if (value === true) {\n        result.push(label);\n      }\n    };\n\n    push(\n      \"推理\",\n      metadata?.reasoning\n    );\n\n    push(\n      \"工具调用\",\n      metadata?.tool_call\n    );\n\n    push(\n      \"结构化输出\",\n      metadata?.structured_output\n    );\n\n    push(\n      \"附件\",\n      metadata?.attachment\n    );\n\n    push(\n      \"Temperature\",\n      metadata?.temperature\n    );\n\n    return result;\n  };\n\n\n  const detailLoadingContent = (item) => `\n    <div class=\"detail-pop-head\">\n      <div class=\"detail-pop-title\">${esc(item.name)}</div>\n\n      <button\n        type=\"button\"\n        class=\"detail-pop-close\"\n        aria-label=\"关闭详情\"\n      >\n        <svg\n          viewBox=\"0 0 24 24\"\n          fill=\"none\"\n          stroke=\"currentColor\"\n          stroke-width=\"1.8\"\n          aria-hidden=\"true\"\n        >\n          <path d=\"M18 6 6 18\"></path>\n          <path d=\"m6 6 12 12\"></path>\n        </svg>\n      </button>\n    </div>\n\n    <div class=\"detail-pop-loading\">\n      正在解析本站模型映射并查询模型资料来源…\n    </div>\n  `;\n\n\n  const detailPopoverContent = (\n    item,\n    result\n  ) => {\n    const resolved =\n      result?.resolution || {};\n\n    const metadata =\n      result?.metadata || null;\n\n    const match =\n      result?.match || null;\n\n    const sources =\n      Array.isArray(result?.sources)\n        ? result.sources\n        : [];\n\n    const fieldSources =\n      result?.field_sources || {};\n\n    const grid =\n      metadataGrid(\n        metadata,\n        fieldSources\n      );\n\n    const capabilities =\n      capabilityList(metadata);\n\n    const sourceMatches =\n      Array.isArray(\n        result?.source_matches\n      )\n        ? result.source_matches\n        : [];\n\n    const modelName =\n      metadata?.name ||\n      item.name;\n\n    const description =\n      metadata?.description ||\n      item.model?.description ||\n      \"\";\n\n    return `\n      <div class=\"detail-pop-head\">\n        <div class=\"detail-pop-title\">${esc(item.name)}</div>\n\n        <button\n          type=\"button\"\n          class=\"detail-pop-close\"\n          aria-label=\"关闭详情\"\n        >\n          <svg\n            viewBox=\"0 0 24 24\"\n            fill=\"none\"\n            stroke=\"currentColor\"\n            stroke-width=\"1.8\"\n            aria-hidden=\"true\"\n          >\n            <path d=\"M18 6 6 18\"></path>\n            <path d=\"m6 6 12 12\"></path>\n          </svg>\n        </button>\n      </div>\n\n\n      <div class=\"detail-pop-resolve\">\n        <span class=\"detail-pop-resolve-tag\">\n          调用 ID\n          <strong>${esc(item.name)}</strong>\n        </span>\n\n        ${\n          resolved.resolved_model &&\n          resolved.resolved_model !== item.name\n            ? `\n              <span class=\"detail-pop-resolve-tag\">\n                上游模型\n                <strong>${esc(resolved.resolved_model)}</strong>\n              </span>\n            `\n            : \"\"\n        }\n\n        ${\n          metadata?.id\n            ? `\n              <span class=\"detail-pop-resolve-tag\">\n                资料模型\n                <strong>${esc(metadata.id)}</strong>\n              </span>\n            `\n            : \"\"\n        }\n      </div>\n\n\n      ${\n        resolved.ambiguous\n          ? `\n            <div class=\"detail-pop-warning\">\n              此调用名在本站存在多个上游映射，规格资料仅作为候选参考，不能视为所有渠道完全一致。\n            </div>\n          `\n          : \"\"\n      }\n\n\n      ${\n        metadata\n          ? `\n            <section class=\"detail-pop-section\">\n              <h3 class=\"detail-pop-section-title\">\n                ${esc(modelName)}\n              </h3>\n\n              ${\n                description\n                  ? `\n                    <div class=\"detail-pop-description\">\n                      ${esc(description)}\n                    </div>\n                  `\n                  : \"\"\n              }\n\n              ${\n                grid.length\n                  ? `\n                    <div class=\"detail-pop-grid\">\n                      ${grid\n                        .map(\n                          (entry) => `\n                            <div class=\"detail-pop-item\">\n                              <div class=\"detail-pop-label\">\n                                ${esc(entry.label)}\n                                ${\n                                  entry.source\n                                    ? `<span class=\"detail-pop-field-source\">${esc(entry.source)}</span>`\n                                    : \"\"\n                                }\n                              </div>\n                              <div class=\"detail-pop-value\">${esc(entry.value)}</div>\n                            </div>\n                          `\n                        )\n                        .join(\"\")}\n                    </div>\n                  `\n                  : \"\"\n              }\n\n              ${\n                capabilities.length\n                  ? `\n                    <div\n                      class=\"detail-pop-capabilities\"\n                      style=\"margin-top:7px\"\n                    >\n                      ${capabilities\n                        .map(\n                          (value) =>\n                            `<span class=\"detail-pop-cap\">${esc(value)}</span>`\n                        )\n                        .join(\"\")}\n                    </div>\n                  `\n                  : \"\"\n              }\n\n              ${\n                sourceMatches.length\n                  ? `\n                    <div class=\"detail-pop-merge-summary\">\n                      已合并 ${sourceMatches.length} 个模型资料源\n                      ·\n                      ${sourceMatches\n                        .map(\n                          (entry) =>\n                            `${esc(entry.source)} ${esc(entry.matched_query || entry.matched_id || \"\")}`\n                        )\n                        .join(\" · \")}\n                    </div>\n                  `\n                  : (\n                    match\n                      ? `\n                        <div class=\"detail-pop-confidence\" style=\"margin-top:7px\">\n                          匹配方式：${esc(match.method || \"—\")} · 置信度 ${esc(String(match.score ?? \"—\"))}\n                        </div>\n                      `\n                      : \"\"\n                  )\n              }\n            </section>\n          `\n          : `\n            <section class=\"detail-pop-section\">\n              <div class=\"detail-pop-empty\">\n                没有找到可以可靠匹配的外部模型规格。本站调用 ID 仍然有效，但这里不会猜测上下文长度或能力。\n              </div>\n            </section>\n          `\n      }\n\n\n      ${\n        sources.length\n          ? `\n            <section class=\"detail-pop-section\">\n              <h3 class=\"detail-pop-section-title\">信息来源</h3>\n\n              <div class=\"detail-pop-source-list\">\n                ${sources\n                  .map(\n                    (source) => {\n                      const url =\n                        safeExternalURL(\n                          source?.url\n                        );\n\n                      return `\n                        <div class=\"detail-pop-source\">\n                          <div class=\"detail-pop-source-top\">\n                            <div class=\"detail-pop-source-name\">\n                              ${\n                                url\n                                  ? `<a href=\"${esc(url)}\" target=\"_blank\" rel=\"noopener noreferrer\">${esc(source?.name || \"来源\")}</a>`\n                                  : esc(source?.name || \"来源\")\n                              }\n                            </div>\n\n                            <span class=\"detail-pop-source-kind\">\n                              ${esc(source?.kind || \"来源\")}\n                            </span>\n                          </div>\n\n                          ${\n                            source?.note\n                              ? `\n                                <div class=\"detail-pop-source-note\">\n                                  ${esc(source.note)}\n                                </div>\n                              `\n                              : \"\"\n                          }\n                        </div>\n                      `;\n                    }\n                  )\n                  .join(\"\")}\n              </div>\n            </section>\n          `\n          : \"\"\n      }\n    `;\n  };\n\n\n  const detailMetaCache =\n    new Map();\n\n\n  const loadDetailMetadata = async (\n    item\n  ) => {\n    if (\n      detailMetaCache.has(\n        item.name\n      )\n    ) {\n      return detailMetaCache.get(\n        item.name\n      );\n    }\n\n    const promise =\n      fetch(\n        \"/pricing-meta?model=\" +\n        encodeURIComponent(\n          item.name\n        ),\n        {\n          method: \"GET\",\n          credentials: \"same-origin\",\n          headers: {\n            Accept: \"application/json\",\n          },\n          cache: \"no-store\",\n        }\n      )\n        .then(\n          async (response) => {\n            const json =\n              await response.json();\n\n            if (!response.ok) {\n              throw new Error(\n                json?.message ||\n                \"metadata lookup failed\"\n              );\n            }\n\n            return json;\n          }\n        )\n        .catch(\n          (error) => ({\n            success: false,\n            message:\n              error?.message ||\n              \"metadata lookup failed\",\n            sources: [],\n          })\n        );\n\n    detailMetaCache.set(\n      item.name,\n      promise\n    );\n\n    return promise;\n  };\n\n\n\n\n  const closeDetailPopover = (root) => {\n    const popover =\n      root.querySelector(\n        \".model-detail-popover\"\n      );\n\n    if (!popover) {\n      return;\n    }\n\n    popover.setAttribute(\n      \"data-open\",\n      \"false\"\n    );\n\n    popover.setAttribute(\n      \"aria-hidden\",\n      \"true\"\n    );\n\n    root\n      .querySelectorAll(\n        \".detail-btn[aria-expanded='true']\"\n      )\n      .forEach(\n        (button) =>\n          button.setAttribute(\n            \"aria-expanded\",\n            \"false\"\n          )\n      );\n  };\n\n\n  const positionDetailPopover = (\n    button,\n    popover\n  ) => {\n    const rect =\n      button.getBoundingClientRect();\n\n    const width =\n      Math.min(\n        350,\n        window.innerWidth - 24\n      );\n\n    const estimatedHeight =\n      Math.min(\n        popover.scrollHeight || 260,\n        390\n      );\n\n    const gap =\n      8;\n\n    let left =\n      rect.right - width;\n\n    left =\n      Math.max(\n        12,\n        Math.min(\n          left,\n          window.innerWidth -\n            width -\n            12\n        )\n      );\n\n    let top =\n      rect.bottom + gap;\n\n    if (\n      top +\n        estimatedHeight >\n      window.innerHeight - 12\n    ) {\n      top =\n        Math.max(\n          12,\n          rect.top -\n            estimatedHeight -\n            gap\n        );\n    }\n\n    popover.style.left =\n      left + \"px\";\n\n    popover.style.top =\n      top + \"px\";\n  };\n\n\n  const openDetailPopover = async (\n    root,\n    button,\n    item\n  ) => {\n    const popover =\n      root.querySelector(\n        \".model-detail-popover\"\n      );\n\n    if (!popover) {\n      return;\n    }\n\n    const alreadyOpen =\n      button.getAttribute(\n        \"aria-expanded\"\n      ) === \"true\";\n\n    closeDetailPopover(root);\n\n    if (alreadyOpen) {\n      return;\n    }\n\n    popover.innerHTML =\n      detailLoadingContent(item);\n\n    popover.setAttribute(\n      \"data-open\",\n      \"true\"\n    );\n\n    popover.setAttribute(\n      \"aria-hidden\",\n      \"false\"\n    );\n\n    button.setAttribute(\n      \"aria-expanded\",\n      \"true\"\n    );\n\n    positionDetailPopover(\n      button,\n      popover\n    );\n\n    const result =\n      await loadDetailMetadata(\n        item\n      );\n\n    if (\n      button.getAttribute(\n        \"aria-expanded\"\n      ) !== \"true\" ||\n      popover.getAttribute(\n        \"data-open\"\n      ) !== \"true\"\n    ) {\n      return;\n    }\n\n    popover.innerHTML =\n      detailPopoverContent(\n        item,\n        result\n      );\n\n    positionDetailPopover(\n      button,\n      popover\n    );\n  };\n\n\n\n\n  /* ---------------------------------------------------------\n     row / status\n     --------------------------------------------------------- */\n\n  const nativeIconHTML = (item) => {\n    if (item.native.iconHTML) {\n      return `\n        <div class=\"native-icon\">\n          ${item.native.iconHTML}\n        </div>\n      `;\n    }\n\n    const initial =\n      item.name\n        .trim()\n        .charAt(0)\n        .toUpperCase() || \"?\";\n\n    return `\n      <div class=\"native-icon\">\n        <span>${esc(initial)}</span>\n      </div>\n    `;\n  };\n\n\n  const statusClass = (success) => {\n    if (success === null) {\n      return \"\";\n    }\n\n    if (success >= 99) {\n      return \"status--good\";\n    }\n\n    if (success >= 95) {\n      return \"status--warn\";\n    }\n\n    return \"status--bad\";\n  };\n\n\n  const statusHTML = (item) => {\n    const native =\n      item.native;\n\n    const hasAny =\n      native.success !== null ||\n      native.latency ||\n      native.throughput;\n\n    if (!hasAny) {\n      return `\n        <div class=\"status-empty\">\n          暂无最近 24h 状态\n        </div>\n      `;\n    }\n\n    const successText =\n      native.success !== null\n        ? native.success.toFixed(1) + \"%\"\n        : \"—\";\n\n    return `\n      <div class=\"status-wrap ${statusClass(native.success)}\">\n\n        <div class=\"status-main\">\n          <span class=\"status-dot\"></span>\n          <span class=\"status-success\">${esc(successText)}</span>\n          <span class=\"status-title\">成功率</span>\n        </div>\n\n        <div class=\"status-metrics\">\n          ${\n            native.latency\n              ? `<span>延迟 ${esc(native.latency)}</span>`\n              : \"\"\n          }\n\n          ${\n            native.throughput\n              ? `<span>吞吐 ${esc(native.throughput)}</span>`\n              : \"\"\n          }\n        </div>\n\n      </div>\n    `;\n  };\n\n\n  const metaHTML = (item) => {\n    const entries = [\n      ...item.groups.slice(0, 2),\n      ...item.tags.slice(0, 2),\n      ...item.endpoints.slice(0, 1),\n    ];\n\n    if (!entries.length) {\n      return `\n        <span class=\"meta-tag\">\n          ${esc(item.provider)}\n        </span>\n      `;\n    }\n\n    return entries\n      .map(\n        (value) =>\n          `<span class=\"meta-tag\">${esc(value)}</span>`\n      )\n      .join(\"\");\n  };\n\n\n  const rowHTML = (item) => `\n    <article\n      class=\"model-row\"\n      data-model=\"${esc(item.name)}\"\n    >\n\n      <div class=\"model-cell\">\n        <div class=\"model-identity\">\n\n          <div class=\"model-icon-wrap\">\n            ${nativeIconHTML(item)}\n          </div>\n\n          <div class=\"model-name-wrap\">\n            <span\n              class=\"model-name\"\n              title=\"${esc(item.name)}\"\n            >${esc(item.name)}</span>\n\n            ${\n              item.provider && item.provider !== \"其他\"\n                ? `\n                  <div class=\"model-provider\">\n                    <span class=\"provider-name\">${esc(item.provider)}</span>\n                  </div>\n                `\n                : \"\"\n            }\n          </div>\n\n        </div>\n      </div>\n\n\n      <div class=\"model-cell\">\n        ${statusHTML(item)}\n      </div>\n\n\n      <div class=\"model-cell meta-wrap\">\n        ${metaHTML(item)}\n      </div>\n\n\n      <div class=\"model-cell action-cell\">\n\n        <button\n          type=\"button\"\n          class=\"detail-btn\"\n          data-detail-model=\"${esc(item.name)}\"\n          aria-expanded=\"false\"\n        >\n          <span>详情</span>\n\n          <svg\n            viewBox=\"0 0 24 24\"\n            fill=\"none\"\n            stroke=\"currentColor\"\n            stroke-width=\"1.8\"\n            aria-hidden=\"true\"\n          >\n            <path d=\"m9 18 6-6-6-6\"></path>\n          </svg>\n        </button>\n\n\n        <button\n          type=\"button\"\n          class=\"copy-btn\"\n          data-copy-model=\"${esc(item.name)}\"\n          title=\"复制模型 ID\"\n          aria-label=\"复制模型 ID\"\n        >\n          <svg\n            viewBox=\"0 0 24 24\"\n            fill=\"none\"\n            stroke=\"currentColor\"\n            stroke-width=\"1.8\"\n            aria-hidden=\"true\"\n          >\n            <rect x=\"9\" y=\"9\" width=\"10\" height=\"10\" rx=\"2\"></rect>\n            <path d=\"M15 9V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2\"></path>\n          </svg>\n        </button>\n\n      </div>\n\n    </article>\n  `;\n\n\n  const renderRows = (root) => {\n    const items =\n      filteredItems();\n\n    const visibleSummary =\n      root.querySelector(\n        \".visible-summary-count\"\n      );\n\n    if (visibleSummary) {\n      visibleSummary.textContent =\n        state.items.length === items.length\n          ? String(items.length)\n          : String(items.length) + \" / \" + String(state.items.length);\n    }\n\n    const rows =\n      root.querySelector(\n        \".model-rows\"\n      );\n\n    if (!items.length) {\n      rows.innerHTML = `\n        <div class=\"state-box\">\n          没有匹配的模型。\n        </div>\n      `;\n\n      return;\n    }\n\n    rows.innerHTML =\n      items\n        .map(rowHTML)\n        .join(\"\");\n  };\n\n\n  /* ---------------------------------------------------------\n     drawer\n     --------------------------------------------------------- */\n\n  const detailRow = (\n    label,\n    value\n  ) => {\n    if (\n      value === null ||\n      value === undefined ||\n      value === \"\" ||\n      (\n        Array.isArray(value) &&\n        !value.length\n      )\n    ) {\n      return \"\";\n    }\n\n    const rendered =\n      Array.isArray(value)\n        ? value.join(\"、\")\n        : String(value);\n\n    return `\n      <div class=\"detail-row\">\n        <span class=\"detail-label\">${esc(label)}</span>\n        <span class=\"detail-value\">${esc(rendered)}</span>\n      </div>\n    `;\n  };\n\n\n  const metricCard = (\n    label,\n    value\n  ) => `\n    <div class=\"metric-card\">\n      <div class=\"metric-label\">${esc(label)}</div>\n      <div class=\"metric-value\">${esc(value)}</div>\n    </div>\n  `;\n\n\n\n\n  /* ---------------------------------------------------------\n     toast/copy\n     --------------------------------------------------------- */\n\n  const toast = (\n    root,\n    message\n  ) => {\n    root\n      .querySelector(\".toast\")\n      ?.remove();\n\n    const el =\n      document.createElement(\"div\");\n\n    el.className =\n      \"toast\";\n\n    el.textContent =\n      message;\n\n    root.appendChild(el);\n\n    setTimeout(\n      () => el.remove(),\n      1300\n    );\n  };\n\n\n  const copyText = async (\n    root,\n    text\n  ) => {\n    try {\n      await navigator.clipboard\n        .writeText(text);\n    } catch {\n      const area =\n        document.createElement(\n          \"textarea\"\n        );\n\n      area.value =\n        text;\n\n      area.style.position =\n        \"fixed\";\n\n      area.style.opacity =\n        \"0\";\n\n      document.body\n        .appendChild(area);\n\n      area.select();\n\n      try {\n        document.execCommand(\"copy\");\n      } catch {}\n\n      area.remove();\n    }\n\n    toast(\n      root,\n      \"已复制：\" + text\n    );\n  };\n\n\n  /* ---------------------------------------------------------\n     events\n     --------------------------------------------------------- */\n\n  const bindEvents = (root) => {\n    const searchInput =\n      root.querySelector(\n        \".search-input\"\n      );\n\n    const sortSelect =\n      root.querySelector(\n        \".sort-select\"\n      );\n\n    const filterPanel =\n      root.querySelector(\n        \".filter-panel\"\n      );\n\n    const mobileToggle =\n      root.querySelector(\n        \".mobile-filter-toggle\"\n      );\n\n\n    searchInput.addEventListener(\n      \"input\",\n      () => {\n        state.search =\n          searchInput.value\n            .trim()\n            .toLowerCase();\n\n        renderRows(root);\n      }\n    );\n\n\n    sortSelect.addEventListener(\n      \"change\",\n      () => {\n        state.sort =\n          sortSelect.value;\n\n        renderRows(root);\n      }\n    );\n\n\n    root.addEventListener(\n      \"click\",\n      (event) => {\n\n        const chip =\n          event.target.closest(\n            \".filter-chip\"\n          );\n\n        if (chip) {\n          const type =\n            chip.getAttribute(\n              \"data-filter-type\"\n            );\n\n          const value =\n            chip.getAttribute(\n              \"data-filter-value\"\n            ) || \"全部\";\n\n          if (type === \"group\") {\n            state.activeGroup =\n              value;\n          }\n\n          if (type === \"vendor\") {\n            state.activeVendor =\n              value;\n          }\n\n          if (type === \"tag\") {\n            state.activeTag =\n              value;\n          }\n\n          renderFilters(root);\n          renderRows(root);\n\n          return;\n        }\n\n\n        if (\n          event.target.closest(\n            \".reset-btn\"\n          )\n        ) {\n          state.activeGroup =\n            \"全部\";\n\n          state.activeVendor =\n            \"全部\";\n\n          state.activeTag =\n            \"全部\";\n\n          state.search = \"\";\n          state.sort =\n            \"name-asc\";\n\n          searchInput.value = \"\";\n          sortSelect.value =\n            \"name-asc\";\n\n          renderFilters(root);\n          renderRows(root);\n\n          return;\n        }\n\n\n        const detail =\n          event.target.closest(\n            \"[data-detail-model]\"\n          );\n\n        if (detail) {\n          const name =\n            detail.getAttribute(\n              \"data-detail-model\"\n            ) || \"\";\n\n          const item =\n            state.itemByName.get(name);\n\n          if (item) {\n            openDetailPopover(\n              root,\n              detail,\n              item\n            );\n          }\n\n          return;\n        }\n\n\n        if (\n          event.target.closest(\n            \".detail-pop-close\"\n          )\n        ) {\n          closeDetailPopover(root);\n          return;\n        }\n\n\n        const openPopover =\n          root.querySelector(\n            \".model-detail-popover[data-open='true']\"\n          );\n\n        if (\n          openPopover &&\n          !event.target.closest(\n            \".model-detail-popover\"\n          )\n        ) {\n          closeDetailPopover(root);\n        }\n\n\n        const copy =\n          event.target.closest(\n            \"[data-copy-model]\"\n          );\n\n        if (copy) {\n          const name =\n            copy.getAttribute(\n              \"data-copy-model\"\n            ) || \"\";\n\n          copyText(\n            root,\n            name\n          );\n\n          return;\n        }\n      }\n    );\n\n\n    mobileToggle.addEventListener(\n      \"click\",\n      () => {\n        const open =\n          filterPanel.getAttribute(\n            \"data-open\"\n          ) === \"true\";\n\n        filterPanel.setAttribute(\n          \"data-open\",\n          open ? \"false\" : \"true\"\n        );\n\n        mobileToggle.setAttribute(\n          \"aria-expanded\",\n          open ? \"false\" : \"true\"\n        );\n\n        mobileToggle\n          .lastElementChild\n          .textContent =\n            open ? \"展开\" : \"收起\";\n      }\n    );\n\n    root.addEventListener(\n      \"scroll\",\n      () => {\n        closeDetailPopover(root);\n      },\n      {\n        passive: true,\n      }\n    );\n\n\n    window.addEventListener(\n      \"resize\",\n      () => {\n        closeDetailPopover(root);\n      },\n      {\n        passive: true,\n      }\n    );\n\n\n    window.addEventListener(\n      \"keydown\",\n      (event) => {\n        if (\n          event.key ===\n          \"Escape\"\n        ) {\n          closeDetailPopover(root);\n        }\n      }\n    );\n\n  };\n\n\n  /* ---------------------------------------------------------\n     loading\n     --------------------------------------------------------- */\n\n  const fetchPricing = async () => {\n    const response =\n      await fetch(\n        \"/api/pricing\",\n        {\n          method: \"GET\",\n          credentials: \"include\",\n          headers: {\n            Accept: \"application/json\",\n          },\n          cache: \"no-store\",\n        }\n      );\n\n    if (!response.ok) {\n      throw new Error(\n        \"pricing HTTP \" +\n        response.status\n      );\n    }\n\n    return normalizePricing(\n      await response.json()\n    );\n  };\n\n\n  const loadAll = async (\n    root,\n    generation\n  ) => {\n    const pricingPromise =\n      fetchPricing();\n\n    const originalMain =\n      await waitForOriginalMain();\n\n    if (\n      generation !== state.routeGeneration ||\n      !root.isConnected ||\n      !isPricingRoute()\n    ) {\n      return;\n    }\n\n    if (originalMain) {\n      await harvestAllNativePages(\n        originalMain,\n        generation\n      );\n    }\n\n    if (\n      generation !== state.routeGeneration ||\n      !root.isConnected ||\n      !isPricingRoute()\n    ) {\n      return;\n    }\n\n    let pricing;\n\n    try {\n      pricing =\n        await pricingPromise;\n    } catch (error) {\n      console.error(\n        \"[MOSS Pricing V4] pricing failed\",\n        error\n      );\n\n      root.querySelector(\n        \".model-rows\"\n      ).innerHTML = `\n        <div class=\"state-box\">\n          模型数据加载失败，请刷新后重试。\n        </div>\n      `;\n\n      return;\n    }\n\n    state.models =\n      pricing.models;\n\n    state.vendors =\n      pricing.vendors;\n\n    buildItems();\n    const sync =\n      root.querySelector(\n        \".native-sync\"\n      );\n\n    const nativeCount =\n      [...state.nativeByName.values()]\n        .filter(\n          (value) =>\n            value.iconHTML ||\n            value.success !== null ||\n            value.latency ||\n            value.throughput\n        )\n        .length;\n\n    sync.textContent =\n      originalMain\n        ? `已同步原生信息 ${nativeCount}/${state.items.length}`\n        : \"原生页面信息暂不可用\";\n\n    sync.setAttribute(\n      \"data-ready\",\n      originalMain ? \"true\" : \"false\"\n    );\n\n    renderFilters(root);\n    renderRows(root);\n  };\n\n\n  /* ---------------------------------------------------------\n     mount / unmount / SPA route\n     --------------------------------------------------------- */\n\n  const resetView = () => {\n    state.activeGroup =\n      \"全部\";\n\n    state.activeVendor =\n      \"全部\";\n\n    state.activeTag =\n      \"全部\";\n\n    state.search = \"\";\n    state.sort =\n      \"name-asc\";\n\n    state.nativeByName =\n      new Map();\n  };\n\n\n  const mount = () => {\n    if (!isPricingRoute()) {\n      return;\n    }\n\n    if (\n      document.getElementById(\n        ROOT_ID\n      )\n    ) {\n      lockOriginalPage();\n      return;\n    }\n\n    resetView();\n\n    lockOriginalPage();\n\n    const root =\n      createRoot();\n\n    document.body\n      .appendChild(root);\n\n    bindEvents(root);\n\n    const generation =\n      ++state.routeGeneration;\n\n    loadAll(\n      root,\n      generation\n    );\n  };\n\n\n  const unmount = () => {\n    state.routeGeneration++;\n\n    document\n      .getElementById(ROOT_ID)\n      ?.remove();\n\n    unlockOriginalPage();\n  };\n\n\n  const syncRoute = () => {\n    state.lastPath =\n      location.pathname;\n\n    if (isPricingRoute()) {\n      mount();\n    } else {\n      unmount();\n    }\n  };\n\n\n  if (!window[PATCH_KEY]) {\n    window[PATCH_KEY] = true;\n\n    for (\n      const method of [\n        \"pushState\",\n        \"replaceState\",\n      ]\n    ) {\n      const original =\n        history[method];\n\n      history[method] =\n        function (...args) {\n          const result =\n            original.apply(\n              this,\n              args\n            );\n\n          window.dispatchEvent(\n            new Event(ROUTE_EVENT)\n          );\n\n          return result;\n        };\n    }\n\n\n    window.addEventListener(\n      \"popstate\",\n      () => {\n        window.dispatchEvent(\n          new Event(ROUTE_EVENT)\n        );\n      }\n    );\n\n\n    window.addEventListener(\n      ROUTE_EVENT,\n      () => {\n        requestAnimationFrame(\n          syncRoute\n        );\n      }\n    );\n\n\n    setInterval(\n      () => {\n        if (\n          location.pathname !==\n          state.lastPath\n        ) {\n          syncRoute();\n        }\n      },\n      200\n    );\n  }\n\n\n  syncRoute();\n})();\n";



const MODELS_DEV_MODELS_URL =
  "https://models.dev/models.json";

const OPENROUTER_MODELS_URL =
  "https://openrouter.ai/api/v1/models?output_modalities=all";

const LITELLM_MODEL_MAP_URL =
  "https://raw.githubusercontent.com/BerriAI/litellm/main/model_prices_and_context_window.json";


const sourceMemoryCache = {
  modelsDev: {
    expiresAt: 0,
    records: null,
  },
  openRouter: {
    expiresAt: 0,
    records: null,
  },
  liteLLM: {
    expiresAt: 0,
    records: null,
  },
};

let adminMappingMemoryCache = {
  expiresAt: 0,
  value: null,
};


function jsonResponse(
  value,
  status = 200,
  headers = {}
) {
  return new Response(
    JSON.stringify(value),
    {
      status,
      headers: {
        "Content-Type":
          "application/json; charset=utf-8",
        "Cache-Control":
          "no-store",
        ...headers,
      },
    }
  );
}


function normalizeModelKey(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/[\s_/:.]+/g, "-")
    .replace(/[^a-z0-9-]+/g, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}


/*
 * Important for custom gateway aliases:
 *
 * tianyi_deepseek_v4
 * → tianyi-deepseek-v4
 * → deepseek-v4
 *
 * blian_deepseek_v4_pro
 * → blian-deepseek-v4-pro
 * → deepseek-v4-pro
 * → v4-pro
 *
 * We never rely on a one-token suffix such as "v4" alone.
 */
function modelVariants(value) {
  const normalized =
    normalizeModelKey(value);

  if (!normalized) {
    return [];
  }

  const result =
    new Set([normalized]);

  const tokens =
    normalized
      .split("-")
      .filter(Boolean);

  // Progressive suffix matching, keeping at least 2 tokens.
  for (
    let i = 1;
    i <= tokens.length - 2;
    i++
  ) {
    result.add(
      tokens
        .slice(i)
        .join("-")
    );
  }

  // Strong provider-anchor suffixes.
  const providerTokens =
    new Set([
      "openai",
      "gpt",
      "anthropic",
      "claude",
      "google",
      "gemini",
      "deepseek",
      "qwen",
      "qwq",
      "glm",
      "zhipu",
      "kimi",
      "moonshot",
      "minimax",
      "grok",
      "xai",
      "llama",
      "meta",
      "mistral",
      "doubao",
      "seed",
      "ernie",
      "baidu",
      "mimo",
      "xiaomi",
    ]);

  for (
    let i = 0;
    i < tokens.length - 1;
    i++
  ) {
    if (
      providerTokens.has(
        tokens[i]
      )
    ) {
      result.add(
        tokens
          .slice(i)
          .join("-")
      );
    }
  }

  if (
    normalized.endsWith("-free")
  ) {
    result.add(
      normalized.slice(
        0,
        -5
      )
    );
  }

  return [...result]
    .filter(Boolean);
}


function cleanPathID(value) {
  return String(value || "")
    .trim()
    .replace(/^\/+|\/+$/g, "")
    .replace(
      /^(data|models|model)\//i,
      ""
    );
}


function candidateBaseName(id) {
  const cleaned =
    cleanPathID(id);

  const pieces =
    cleaned.split("/");

  return pieces[
    pieces.length - 1
  ] || cleaned;
}


function looksLikeModelRecord(obj) {
  if (
    !obj ||
    typeof obj !== "object" ||
    Array.isArray(obj)
  ) {
    return false;
  }

  return Boolean(
    typeof obj.name === "string" &&
    (
      obj.limit ||
      obj.modalities ||
      obj.release_date ||
      obj.last_updated ||
      obj.knowledge ||
      typeof obj.reasoning === "boolean" ||
      typeof obj.tool_call === "boolean" ||
      typeof obj.structured_output === "boolean" ||
      typeof obj.open_weights === "boolean"
    )
  );
}


function collectModelRecords(
  node,
  path = [],
  out = [],
  depth = 0
) {
  if (
    depth > 5 ||
    node === null ||
    node === undefined
  ) {
    return out;
  }

  if (Array.isArray(node)) {
    for (
      const item of node
    ) {
      if (
        item &&
        typeof item === "object"
      ) {
        if (
          looksLikeModelRecord(item)
        ) {
          out.push({
            id:
              cleanPathID(
                item.id ||
                item.model_id ||
                item.slug ||
                path.join("/")
              ),
            raw: item,
          });
        } else {
          collectModelRecords(
            item,
            path,
            out,
            depth + 1
          );
        }
      }
    }

    return out;
  }

  if (
    typeof node !== "object"
  ) {
    return out;
  }

  if (
    looksLikeModelRecord(node)
  ) {
    out.push({
      id:
        cleanPathID(
          node.id ||
          node.model_id ||
          node.slug ||
          path.join("/")
        ),
      raw: node,
    });

    return out;
  }

  for (
    const [key, value]
    of Object.entries(node)
  ) {
    if (
      !value ||
      typeof value !== "object"
    ) {
      continue;
    }

    const nextPath =
      key.includes("/")
        ? [key]
        : [...path, key];

    if (
      looksLikeModelRecord(value)
    ) {
      out.push({
        id:
          cleanPathID(
            value.id ||
            value.model_id ||
            value.slug ||
            nextPath.join("/")
          ),
        raw: value,
      });
    } else {
      collectModelRecords(
        value,
        nextPath,
        out,
        depth + 1
      );
    }
  }

  return out;
}


async function fetchCachedJSON(
  cacheKey,
  url,
  transform
) {
  const slot =
    sourceMemoryCache[
      cacheKey
    ];

  const now =
    Date.now();

  if (
    slot.records &&
    slot.expiresAt > now
  ) {
    return slot.records;
  }

  const response =
    await fetch(
      url,
      {
        headers: {
          Accept:
            "application/json",
        },
        cf: {
          cacheEverything: true,
          cacheTtl: 21600,
        },
      }
    );

  if (!response.ok) {
    throw new Error(
      cacheKey +
      " HTTP " +
      response.status
    );
  }

  const payload =
    await response.json();

  const records =
    transform(payload);

  slot.records =
    records;

  slot.expiresAt =
    now +
    6 * 60 * 60 * 1000;

  return records;
}


async function getModelsDevRecords() {
  return fetchCachedJSON(
    "modelsDev",
    MODELS_DEV_MODELS_URL,
    (payload) =>
      collectModelRecords(
        payload
      )
  );
}


async function getOpenRouterRecords() {
  return fetchCachedJSON(
    "openRouter",
    OPENROUTER_MODELS_URL,
    (payload) =>
      (
        Array.isArray(
          payload?.data
        )
          ? payload.data
          : []
      )
        .filter(
          (item) =>
            item &&
            typeof item === "object" &&
            item.id
        )
        .map(
          (item) => ({
            id:
              cleanPathID(
                item.id
              ),
            raw: item,
          })
        )
  );
}


async function getLiteLLMRecords() {
  return fetchCachedJSON(
    "liteLLM",
    LITELLM_MODEL_MAP_URL,
    (payload) => {
      const records = [];

      for (
        const [id, raw]
        of Object.entries(
          payload || {}
        )
      ) {
        if (
          !raw ||
          typeof raw !== "object"
        ) {
          continue;
        }

        records.push({
          id:
            cleanPathID(id),
          raw,
        });

        const aliases =
          Array.isArray(
            raw.aliases
          )
            ? raw.aliases
            : [];

        for (
          const alias
          of aliases
        ) {
          records.push({
            id:
              cleanPathID(alias),
            raw: {
              ...raw,
              __canonical_id:
                cleanPathID(id),
            },
          });
        }
      }

      return records;
    }
  );
}


function scoreCandidate(
  record,
  searchValues
) {
  const candidateID =
    normalizeModelKey(
      record.id
    );

  const candidateBase =
    normalizeModelKey(
      candidateBaseName(
        record.id
      )
    );

  const candidateName =
    normalizeModelKey(
      record.raw?.name
    );

  let best = {
    score: 0,
    method: "",
    query: "",
  };

  for (
    let sourceIndex = 0;
    sourceIndex <
      searchValues.length;
    sourceIndex++
  ) {
    const source =
      searchValues[
        sourceIndex
      ];

    const variants =
      modelVariants(source);

    for (
      let variantIndex = 0;
      variantIndex <
        variants.length;
      variantIndex++
    ) {
      const variant =
        variants[
          variantIndex
        ];

      const tokenCount =
        variant
          .split("-")
          .filter(Boolean)
          .length;

      if (
        tokenCount < 2
      ) {
        continue;
      }

      const penalty =
        sourceIndex * 2 +
        variantIndex * 2;

      const consider = (
        score,
        method
      ) => {
        const finalScore =
          score - penalty;

        if (
          finalScore >
          best.score
        ) {
          best = {
            score:
              finalScore,
            method,
            query:
              variant,
          };
        }
      };

      if (
        candidateID ===
        variant
      ) {
        consider(
          126,
          "完整 ID 精确匹配"
        );
      }

      if (
        candidateBase ===
        variant
      ) {
        consider(
          124,
          "模型字段精确匹配"
        );
      }

      if (
        candidateName ===
        variant
      ) {
        consider(
          120,
          "显示名称精确匹配"
        );
      }

      if (
        candidateID.endsWith(
          "-" + variant
        )
      ) {
        consider(
          118,
          "后缀字段精确匹配"
        );
      }

      if (
        candidateBase.endsWith(
          variant
        )
      ) {
        consider(
          116,
          "模型后缀匹配"
        );
      }

      if (
        candidateBase.startsWith(
          variant + "-"
        )
      ) {
        consider(
          94,
          "版本族匹配"
        );
      }

      if (
        variant.startsWith(
          candidateBase + "-"
        )
      ) {
        consider(
          91,
          "基础型号匹配"
        );
      }
    }
  }

  return best;
}


function findBestModelRecord(
  records,
  searchValues
) {
  let best = null;

  for (
    const record of records
  ) {
    const score =
      scoreCandidate(
        record,
        searchValues
      );

    if (
      !best ||
      score.score >
        best.score
    ) {
      best = {
        record,
        ...score,
      };
    }
  }

  if (
    !best ||
    best.score < 90
  ) {
    return null;
  }

  return best;
}


function parseJSONMaybe(value) {
  if (!value) {
    return {};
  }

  if (
    typeof value === "object"
  ) {
    return value;
  }

  try {
    const parsed =
      JSON.parse(value);

    return (
      parsed &&
      typeof parsed === "object"
    )
      ? parsed
      : {};
  } catch {
    return {};
  }
}


function adminHeaders(env) {
  if (
    !env?.NEWAPI_ADMIN_TOKEN ||
    !env?.NEWAPI_ADMIN_USER_ID
  ) {
    return null;
  }

  return {
    "Content-Type":
      "application/json",
    "Authorization":
      "Bearer " +
      env.NEWAPI_ADMIN_TOKEN,
    "New-Api-User":
      String(
        env.NEWAPI_ADMIN_USER_ID
      ),
  };
}


async function fetchAdminJSON(
  request,
  env,
  pathname
) {
  const headers =
    adminHeaders(env);

  if (!headers) {
    return null;
  }

  const url =
    new URL(
      pathname,
      request.url
    );

  const response =
    await fetch(
      url,
      {
        method: "GET",
        headers,
        cache: "no-store",
      }
    );

  if (!response.ok) {
    throw new Error(
      pathname +
      " HTTP " +
      response.status
    );
  }

  return response.json();
}


async function mapInBatches(
  items,
  batchSize,
  fn
) {
  const result = [];

  for (
    let i = 0;
    i < items.length;
    i += batchSize
  ) {
    const batch =
      items.slice(
        i,
        i + batchSize
      );

    const values =
      await Promise.all(
        batch.map(fn)
      );

    result.push(
      ...values
    );
  }

  return result;
}


async function loadAdminMappingIndex(
  request,
  env
) {
  const headers =
    adminHeaders(env);

  if (!headers) {
    return null;
  }

  const now =
    Date.now();

  if (
    adminMappingMemoryCache.value &&
    adminMappingMemoryCache.expiresAt >
      now
  ) {
    return adminMappingMemoryCache.value;
  }

  const allItems = [];

  for (
    let page = 1;
    page <= 20;
    page++
  ) {
    const payload =
      await fetchAdminJSON(
        request,
        env,
        "/api/channel/?" +
        new URLSearchParams({
          p: String(page),
          page_size: "100",
          id_sort: "true",
          tag_mode: "false",
          status: "enabled",
        }).toString()
      );

    const body =
      payload?.data || {};

    const items =
      Array.isArray(
        body?.items
      )
        ? body.items
        : [];

    allItems.push(
      ...items
    );

    const total =
      Number(
        body?.total
      );

    if (
      items.length < 100 ||
      (
        Number.isFinite(total) &&
        allItems.length >= total
      )
    ) {
      break;
    }
  }

  const details =
    await mapInBatches(
      allItems,
      8,
      async (item) => {
        try {
          const payload =
            await fetchAdminJSON(
              request,
              env,
              "/api/channel/" +
              encodeURIComponent(
                item.id
              )
            );

          return payload?.data ||
            null;
        } catch {
          return null;
        }
      }
    );

  const index =
    new Map();

  const add = (
    source,
    target
  ) => {
    const key =
      normalizeModelKey(
        source
      );

    const cleanTarget =
      String(
        target || ""
      ).trim();

    if (
      !key ||
      !cleanTarget
    ) {
      return;
    }

    if (
      !index.has(key)
    ) {
      index.set(
        key,
        new Map()
      );
    }

    const targets =
      index.get(key);

    targets.set(
      cleanTarget,
      (
        targets.get(
          cleanTarget
        ) || 0
      ) + 1
    );
  };

  for (
    const detail
    of details
  ) {
    if (!detail) {
      continue;
    }

    const models =
      String(
        detail.models || ""
      )
        .split(",")
        .map(
          (value) =>
            value.trim()
        )
        .filter(Boolean);

    for (
      const model
      of models
    ) {
      add(
        model,
        model
      );
    }

    const mapping =
      parseJSONMaybe(
        detail.model_mapping
      );

    for (
      const [source, target]
      of Object.entries(mapping)
    ) {
      if (
        typeof target ===
        "string"
      ) {
        add(
          source,
          target
        );
      }
    }
  }

  const value = {
    index,
    channelCount:
      details
        .filter(Boolean)
        .length,
  };

  adminMappingMemoryCache = {
    value,
    expiresAt:
      now +
      10 * 60 * 1000,
  };

  return value;
}


function resolveAdminMapping(
  requested,
  mappingIndex
) {
  if (
    !mappingIndex?.index
  ) {
    return {
      enabled: false,
      resolved_model:
        requested,
      ambiguous: false,
      targets: [],
      method:
        "未启用管理员映射源",
    };
  }

  const key =
    normalizeModelKey(
      requested
    );

  const targets =
    mappingIndex.index.get(
      key
    );

  if (
    !targets ||
    targets.size === 0
  ) {
    return {
      enabled: true,
      resolved_model:
        requested,
      ambiguous: false,
      targets: [],
      method:
        "本站未发现显式 model_mapping",
    };
  }

  const ranked =
    [...targets.entries()]
      .sort(
        (a, b) =>
          b[1] - a[1]
      );

  return {
    enabled: true,
    resolved_model:
      ranked[0][0],
    ambiguous:
      ranked.length > 1,
    targets:
      ranked.map(
        ([model, count]) => ({
          model,
          count,
        })
      ),
    method:
      ranked[0][0] ===
        requested
        ? "本站渠道模型直接匹配"
        : "New API model_mapping",
  };
}


function safeDateFromUnix(value) {
  const n =
    Number(value);

  if (!Number.isFinite(n)) {
    return "";
  }

  try {
    return new Date(
      n * 1000
    )
      .toISOString()
      .slice(0, 10);
  } catch {
    return "";
  }
}


function sanitizeModelsDev(match) {
  if (!match) {
    return null;
  }

  const raw =
    match.record.raw || {};

  const id =
    cleanPathID(
      match.record.id
    );

  return {
    source:
      "Models.dev",
    id,
    name:
      raw.name || id,
    description:
      raw.description || "",
    knowledge:
      raw.knowledge || "",
    release_date:
      raw.release_date || "",
    last_updated:
      raw.last_updated || "",
    open_weights:
      typeof raw.open_weights ===
        "boolean"
        ? raw.open_weights
        : null,
    reasoning:
      typeof raw.reasoning ===
        "boolean"
        ? raw.reasoning
        : null,
    tool_call:
      typeof raw.tool_call ===
        "boolean"
        ? raw.tool_call
        : null,
    structured_output:
      typeof raw.structured_output ===
        "boolean"
        ? raw.structured_output
        : null,
    attachment:
      typeof raw.attachment ===
        "boolean"
        ? raw.attachment
        : null,
    temperature:
      typeof raw.temperature ===
        "boolean"
        ? raw.temperature
        : null,
    limit: {
      context:
        raw?.limit?.context ?? null,
      input:
        raw?.limit?.input ?? null,
      output:
        raw?.limit?.output ?? null,
    },
    modalities: {
      input:
        Array.isArray(
          raw?.modalities?.input
        )
          ? raw.modalities.input
          : [],
      output:
        Array.isArray(
          raw?.modalities?.output
        )
          ? raw.modalities.output
          : [],
    },
    official_link:
      pickOfficialLink(raw),
  };
}


function sanitizeOpenRouter(match) {
  if (!match) {
    return null;
  }

  const raw =
    match.record.raw || {};

  const params =
    Array.isArray(
      raw.supported_parameters
    )
      ? raw.supported_parameters
      : [];

  const has =
    (value) =>
      params.includes(value);

  return {
    source:
      "OpenRouter",
    id:
      cleanPathID(
        raw.id ||
        match.record.id
      ),
    name:
      raw.name || "",
    description:
      raw.description || "",
    release_date: "",
    openrouter_added:
      safeDateFromUnix(
        raw.created
      ),
    deprecation_date:
      raw.expiration_date || "",
    reasoning:
      has("reasoning") ||
      has("include_reasoning")
        ? true
        : null,
    tool_call:
      has("tools")
        ? true
        : null,
    structured_output:
      (
        has("structured_outputs") ||
        has("response_format")
      )
        ? true
        : null,
    temperature:
      has("temperature")
        ? true
        : null,
    limit: {
      context:
        raw.context_length ??
        raw?.top_provider
          ?.context_length ??
        null,
      input:
        null,
      output:
        raw?.top_provider
          ?.max_completion_tokens ??
        null,
    },
    modalities: {
      input:
        Array.isArray(
          raw?.architecture
            ?.input_modalities
        )
          ? raw.architecture
              .input_modalities
          : [],
      output:
        Array.isArray(
          raw?.architecture
            ?.output_modalities
        )
          ? raw.architecture
              .output_modalities
          : [],
    },
    tokenizer:
      raw?.architecture
        ?.tokenizer || "",
  };
}


function sanitizeLiteLLM(match) {
  if (!match) {
    return null;
  }

  const raw =
    match.record.raw || {};

  const bool =
    (key) =>
      typeof raw?.[key] ===
        "boolean"
        ? raw[key]
        : null;

  return {
    source:
      "LiteLLM",
    id:
      cleanPathID(
        raw.__canonical_id ||
        match.record.id
      ),
    name:
      raw.__canonical_id ||
      match.record.id,
    provider:
      raw.litellm_provider || "",
    mode:
      raw.mode || "",
    deprecation_date:
      raw.deprecation_date || "",
    reasoning:
      bool(
        "supports_reasoning"
      ),
    tool_call:
      bool(
        "supports_function_calling"
      ),
    structured_output:
      bool(
        "supports_response_schema"
      ),
    attachment:
      (
        bool("supports_vision") ===
          true ||
        bool("supports_pdf_input") ===
          true ||
        bool("supports_audio_input") ===
          true
      )
        ? true
        : null,
    limit: {
      context:
        null,
      input:
        raw.max_input_tokens ??
        null,
      output:
        raw.max_output_tokens ??
        raw.max_tokens ??
        null,
    },
    modalities: {
      input: [
        ...(bool("supports_vision") ===
          true
          ? ["image"]
          : []),
        ...(bool("supports_audio_input") ===
          true
          ? ["audio"]
          : []),
      ],
      output: [
        ...(bool("supports_audio_output") ===
          true
          ? ["audio"]
          : []),
      ],
    },
  };
}


function pickOfficialLink(raw) {
  const links =
    raw?.links;

  const candidates = [];

  if (
    typeof links === "string"
  ) {
    candidates.push(links);
  } else if (
    Array.isArray(links)
  ) {
    for (
      const item of links
    ) {
      if (
        typeof item ===
        "string"
      ) {
        candidates.push(item);
      } else if (
        item &&
        typeof item ===
          "object"
      ) {
        candidates.push(
          item.url,
          item.href
        );
      }
    }
  } else if (
    links &&
    typeof links ===
      "object"
  ) {
    for (
      const value of
      Object.values(links)
    ) {
      if (
        typeof value ===
          "string"
      ) {
        candidates.push(value);
      } else if (
        value &&
        typeof value ===
          "object"
      ) {
        candidates.push(
          value.url,
          value.href
        );
      }
    }
  }

  for (
    const value of candidates
  ) {
    try {
      const url =
        new URL(
          String(value || "")
        );

      if (
        url.protocol ===
          "https:" ||
        url.protocol ===
          "http:"
      ) {
        return url.href;
      }
    } catch {}
  }

  return "";
}


function firstMeaningful(
  entries
) {
  for (
    const entry of entries
  ) {
    const value =
      entry?.value;

    if (
      value !== null &&
      value !== undefined &&
      value !== "" &&
      !(
        Array.isArray(value) &&
        !value.length
      )
    ) {
      return entry;
    }
  }

  return null;
}


function mergeArrayValues(
  entries
) {
  const values =
    new Set();

  for (
    const entry of entries
  ) {
    const value =
      entry?.value;

    if (
      Array.isArray(value)
    ) {
      for (
        const item of value
      ) {
        if (
          item !== null &&
          item !== undefined &&
          String(item).trim()
        ) {
          values.add(
            String(item)
          );
        }
      }
    }
  }

  return [...values];
}


function mergeBoolean(
  entries
) {
  if (
    entries.some(
      (entry) =>
        entry?.value === true
    )
  ) {
    return true;
  }

  if (
    entries.length &&
    entries.every(
      (entry) =>
        entry?.value === false
    )
  ) {
    return false;
  }

  return null;
}


function mergeMetadata(
  modelsDev,
  openRouter,
  liteLLM
) {
  const sources =
    [
      modelsDev,
      openRouter,
      liteLLM,
    ].filter(Boolean);

  if (!sources.length) {
    return {
      metadata: null,
      field_sources: {},
    };
  }

  const fieldSources = {};

  const choose = (
    key,
    candidates
  ) => {
    const found =
      firstMeaningful(
        candidates
      );

    if (!found) {
      return null;
    }

    fieldSources[key] =
      found.source;

    return found.value;
  };

  const bool = (
    key,
    candidates
  ) => {
    const value =
      mergeBoolean(
        candidates
      );

    if (
      value !== null
    ) {
      const sourceNames =
        candidates
          .filter(
            (entry) =>
              entry?.value ===
              value
          )
          .map(
            (entry) =>
              entry.source
          );

      fieldSources[key] =
        [...new Set(
          sourceNames
        )].join("+");
    }

    return value;
  };

  const inputModalities =
    mergeArrayValues([
      {
        source: "Models.dev",
        value:
          modelsDev
            ?.modalities
            ?.input,
      },
      {
        source: "OpenRouter",
        value:
          openRouter
            ?.modalities
            ?.input,
      },
      {
        source: "LiteLLM",
        value:
          liteLLM
            ?.modalities
            ?.input,
      },
    ]);

  const outputModalities =
    mergeArrayValues([
      {
        source: "Models.dev",
        value:
          modelsDev
            ?.modalities
            ?.output,
      },
      {
        source: "OpenRouter",
        value:
          openRouter
            ?.modalities
            ?.output,
      },
      {
        source: "LiteLLM",
        value:
          liteLLM
            ?.modalities
            ?.output,
      },
    ]);

  if (
    inputModalities.length
  ) {
    fieldSources.input_modalities =
      [
        modelsDev?.modalities
          ?.input?.length
          ? "Models.dev"
          : "",
        openRouter?.modalities
          ?.input?.length
          ? "OpenRouter"
          : "",
        liteLLM?.modalities
          ?.input?.length
          ? "LiteLLM"
          : "",
      ]
        .filter(Boolean)
        .join("+");
  }

  if (
    outputModalities.length
  ) {
    fieldSources.output_modalities =
      [
        modelsDev?.modalities
          ?.output?.length
          ? "Models.dev"
          : "",
        openRouter?.modalities
          ?.output?.length
          ? "OpenRouter"
          : "",
        liteLLM?.modalities
          ?.output?.length
          ? "LiteLLM"
          : "",
      ]
        .filter(Boolean)
        .join("+");
  }

  const metadata = {
    id:
      choose(
        "id",
        [
          {
            source:
              "Models.dev",
            value:
              modelsDev?.id,
          },
          {
            source:
              "OpenRouter",
            value:
              openRouter?.id,
          },
          {
            source:
              "LiteLLM",
            value:
              liteLLM?.id,
          },
        ]
      ) || "",

    name:
      choose(
        "name",
        [
          {
            source:
              "Models.dev",
            value:
              modelsDev?.name,
          },
          {
            source:
              "OpenRouter",
            value:
              openRouter?.name,
          },
          {
            source:
              "LiteLLM",
            value:
              liteLLM?.name,
          },
        ]
      ) || "",

    description:
      choose(
        "description",
        [
          {
            source:
              "Models.dev",
            value:
              modelsDev
                ?.description,
          },
          {
            source:
              "OpenRouter",
            value:
              openRouter
                ?.description,
          },
        ]
      ) || "",

    knowledge:
      choose(
        "knowledge",
        [
          {
            source:
              "Models.dev",
            value:
              modelsDev
                ?.knowledge,
          },
        ]
      ) || "",

    release_date:
      choose(
        "release_date",
        [
          {
            source:
              "Models.dev",
            value:
              modelsDev
                ?.release_date,
          },
        ]
      ) || "",

    last_updated:
      choose(
        "last_updated",
        [
          {
            source:
              "Models.dev",
            value:
              modelsDev
                ?.last_updated,
          },
        ]
      ) || "",

    deprecation_date:
      choose(
        "deprecation_date",
        [
          {
            source:
              "LiteLLM",
            value:
              liteLLM
                ?.deprecation_date,
          },
          {
            source:
              "OpenRouter",
            value:
              openRouter
                ?.deprecation_date,
          },
        ]
      ) || "",

    provider:
      choose(
        "provider",
        [
          {
            source:
              "LiteLLM",
            value:
              liteLLM
                ?.provider,
          },
        ]
      ) || "",

    mode:
      choose(
        "mode",
        [
          {
            source:
              "LiteLLM",
            value:
              liteLLM
                ?.mode,
          },
        ]
      ) || "",

    tokenizer:
      choose(
        "tokenizer",
        [
          {
            source:
              "OpenRouter",
            value:
              openRouter
                ?.tokenizer,
          },
        ]
      ) || "",

    open_weights:
      modelsDev
        ?.open_weights ??
      null,

    reasoning:
      bool(
        "reasoning",
        [
          {
            source:
              "Models.dev",
            value:
              modelsDev
                ?.reasoning,
          },
          {
            source:
              "OpenRouter",
            value:
              openRouter
                ?.reasoning,
          },
          {
            source:
              "LiteLLM",
            value:
              liteLLM
                ?.reasoning,
          },
        ]
      ),

    tool_call:
      bool(
        "tool_call",
        [
          {
            source:
              "Models.dev",
            value:
              modelsDev
                ?.tool_call,
          },
          {
            source:
              "OpenRouter",
            value:
              openRouter
                ?.tool_call,
          },
          {
            source:
              "LiteLLM",
            value:
              liteLLM
                ?.tool_call,
          },
        ]
      ),

    structured_output:
      bool(
        "structured_output",
        [
          {
            source:
              "Models.dev",
            value:
              modelsDev
                ?.structured_output,
          },
          {
            source:
              "OpenRouter",
            value:
              openRouter
                ?.structured_output,
          },
          {
            source:
              "LiteLLM",
            value:
              liteLLM
                ?.structured_output,
          },
        ]
      ),

    attachment:
      bool(
        "attachment",
        [
          {
            source:
              "Models.dev",
            value:
              modelsDev
                ?.attachment,
          },
          {
            source:
              "LiteLLM",
            value:
              liteLLM
                ?.attachment,
          },
        ]
      ),

    temperature:
      bool(
        "temperature",
        [
          {
            source:
              "Models.dev",
            value:
              modelsDev
                ?.temperature,
          },
          {
            source:
              "OpenRouter",
            value:
              openRouter
                ?.temperature,
          },
        ]
      ),

    limit: {
      context:
        choose(
          "context",
          [
            {
              source:
                "Models.dev",
              value:
                modelsDev
                  ?.limit
                  ?.context,
            },
            {
              source:
                "OpenRouter",
              value:
                openRouter
                  ?.limit
                  ?.context,
            },
          ]
        ),

      input:
        choose(
          "input_limit",
          [
            {
              source:
                "Models.dev",
              value:
                modelsDev
                  ?.limit
                  ?.input,
            },
            {
              source:
                "LiteLLM",
              value:
                liteLLM
                  ?.limit
                  ?.input,
            },
          ]
        ),

      output:
        choose(
          "output_limit",
          [
            {
              source:
                "Models.dev",
              value:
                modelsDev
                  ?.limit
                  ?.output,
            },
            {
              source:
                "OpenRouter",
              value:
                openRouter
                  ?.limit
                  ?.output,
            },
            {
              source:
                "LiteLLM",
              value:
                liteLLM
                  ?.limit
                  ?.output,
            },
          ]
        ),
    },

    modalities: {
      input:
        inputModalities,
      output:
        outputModalities,
    },

    official_link:
      modelsDev
        ?.official_link ||
      "",
  };

  if (
    metadata.open_weights !==
      null
  ) {
    fieldSources.open_weights =
      "Models.dev";
  }

  return {
    metadata,
    field_sources:
      fieldSources,
  };
}


async function handlePricingMeta(
  request,
  env
) {
  const url =
    new URL(
      request.url
    );

  const requested =
    String(
      url.searchParams.get(
        "model"
      ) || ""
    ).trim();

  if (
    !requested ||
    requested.length > 180
  ) {
    return jsonResponse(
      {
        success: false,
        message:
          "invalid model",
      },
      400
    );
  }

  let mappingIndex =
    null;

  try {
    mappingIndex =
      await loadAdminMappingIndex(
        request,
        env
      );
  } catch {
    mappingIndex =
      null;
  }

  const resolution =
    resolveAdminMapping(
      requested,
      mappingIndex
    );

  const searchValues =
    [
      resolution
        .resolved_model,
      requested,
    ].filter(Boolean);

  const [
    modelsDevResult,
    openRouterResult,
    liteLLMResult,
  ] =
    await Promise.allSettled([
      getModelsDevRecords(),
      getOpenRouterRecords(),
      getLiteLLMRecords(),
    ]);

  const find =
    (
      result
    ) => {
      if (
        result.status !==
        "fulfilled"
      ) {
        return null;
      }

      return findBestModelRecord(
        result.value,
        searchValues
      );
    };

  const modelsDevMatch =
    find(
      modelsDevResult
    );

  const openRouterMatch =
    find(
      openRouterResult
    );

  const liteLLMMatch =
    find(
      liteLLMResult
    );

  const modelsDev =
    sanitizeModelsDev(
      modelsDevMatch
    );

  const openRouter =
    sanitizeOpenRouter(
      openRouterMatch
    );

  const liteLLM =
    sanitizeLiteLLM(
      liteLLMMatch
    );

  const merged =
    mergeMetadata(
      modelsDev,
      openRouter,
      liteLLM
    );

  const sourceMatches =
    [
      {
        source:
          "Models.dev",
        match:
          modelsDevMatch,
      },
      {
        source:
          "OpenRouter",
        match:
          openRouterMatch,
      },
      {
        source:
          "LiteLLM",
        match:
          liteLLMMatch,
      },
    ]
      .filter(
        (entry) =>
          entry.match
      )
      .map(
        (entry) => ({
          source:
            entry.source,
          score:
            entry.match.score,
          method:
            entry.match.method,
          matched_query:
            entry.match.query,
          matched_id:
            entry.match
              .record.id,
        })
      );

  const bestMatch =
    [
      modelsDevMatch,
      openRouterMatch,
      liteLLMMatch,
    ]
      .filter(Boolean)
      .sort(
        (a, b) =>
          b.score - a.score
      )[0] || null;

  const sources = [
    {
      name:
        "New API /api/pricing",
      kind:
        "本站模型目录",
      note:
        "模型名称、分组、标签、端点以及最近24小时运行状态以本站 New API 为准。",
    },
  ];

  if (
    resolution.enabled &&
    resolution.method ===
      "New API model_mapping"
  ) {
    sources.push({
      name:
        "New API model_mapping",
      kind:
        "本站映射",
      note:
        "由服务器端管理员接口解析本站调用名对应的实际上游模型。",
    });
  }

  if (modelsDevMatch) {
    const id =
      cleanPathID(
        modelsDevMatch
          .record.id
      );

    sources.push({
      name:
        "Models.dev",
      kind:
        "结构化模型库",
      url:
        "https://models.dev/models/" +
        id
          .split("/")
          .map(
            encodeURIComponent
          )
          .join("/"),
      note:
        "用于补充模型上下文、输出限制、模态、知识截止、发布日期与能力信息。",
    });
  }

  if (openRouterMatch) {
    const id =
      cleanPathID(
        openRouterMatch
          .record.id
      );

    sources.push({
      name:
        "OpenRouter Models API",
      kind:
        "模型目录 API",
      url:
        "https://openrouter.ai/models/" +
        encodeURIComponent(id),
      note:
        "用于补充 context、top-provider 输出上限、输入/输出模态及支持参数。",
    });
  }

  if (liteLLMMatch) {
    sources.push({
      name:
        "LiteLLM model cost map",
      kind:
        "模型能力映射",
      url:
        "https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json",
      note:
        "用于补充 max input/output tokens、模型 aliases、provider、mode 和能力标记。",
    });
  }

  if (
    merged.metadata
      ?.official_link
  ) {
    sources.push({
      name:
        "官方模型资料",
      kind:
        "官方链接",
      url:
        merged.metadata
          .official_link,
      note:
        "由结构化模型资料中提供的模型或实验室官方链接。",
    });
  }

  return jsonResponse(
    {
      success: true,

      requested_model:
        requested,

      resolution: {
        ...resolution,

        suffix_candidates:
          modelVariants(
            resolution
              .resolved_model ||
            requested
          ),
      },

      metadata:
        merged.metadata,

      field_sources:
        merged.field_sources,

      match:
        bestMatch
          ? {
            score:
              bestMatch.score,
            method:
              bestMatch.method,
            matched_query:
              bestMatch.query,
          }
          : null,

      source_matches:
        sourceMatches,

      sources,

      admin_mapping_enabled:
        Boolean(
          adminHeaders(env)
        ),
    }
  );
}



class HeadInjector {
  element(element) {
    element.append(
      '<style id="moss-pricing-v6-style">' +
      GLOBAL_CSS +
      '</style>',
      {
        html: true,
      }
    );
  }
}


class BodyInjector {
  element(element) {
    const safeClientJs =
      CLIENT_JS.replaceAll(
        '</script',
        '<\\/script'
      );

    element.append(
      '<script id="moss-pricing-v6-script">' +
      safeClientJs +
      '</script>',
      {
        html: true,
      }
    );
  }
}


function withDebugHeader(
  response,
  value
) {
  const headers =
    new Headers(
      response.headers
    );

  headers.set(
    "X-MOSS-Pricing-Skin",
    value
  );

  return new Response(
    response.body,
    {
      status:
        response.status,
      statusText:
        response.statusText,
      headers,
    }
  );
}


export default {
  async fetch(
    request,
    env
  ) {
    const url =
      new URL(
        request.url
      );

    if (
      url.pathname ===
      "/pricing-meta"
    ) {
      return handlePricingMeta(
        request,
        env
      );
    }

    if (
      url.pathname !==
        "/pricing" &&
      !url.pathname.startsWith(
        "/pricing/"
      )
    ) {
      return fetch(
        request
      );
    }

    const upstream =
      await fetch(
        request
      );

    const contentType =
      upstream.headers.get(
        "content-type"
      ) || "";

    if (
      !contentType
        .toLowerCase()
        .includes(
          "text/html"
        )
    ) {
      return withDebugHeader(
        upstream,
        "bypass-non-html"
      );
    }

    const transformed =
      new HTMLRewriter()
        .on(
          "head",
          new HeadInjector()
        )
        .on(
          "body",
          new BodyInjector()
        )
        .transform(
          upstream
        );

    return withDebugHeader(
      transformed,
      "active-v6-workspace-multisource-suffix-match"
    );
  },
};
