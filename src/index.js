// ============================================================
// New API Pricing Worker V9.1 Continuity
// continuous page canvas + compact custom sort
// ============================================================

const GLOBAL_CSS = "\n/* =========================================================\n   MOSS · New API Pricing V9.1 Continuity\n   Page, market, detail and data-view styles are separated by responsibility.\n   ========================================================= */\n\nhtml.moss-pricing-v91-lock,\nhtml.moss-pricing-v91-lock body {\n  width: 100% !important;\n  height: 100% !important;\n  overflow: hidden !important;\n  overscroll-behavior: none !important;\n}\n\nhtml.moss-pricing-v91-lock body {\n  position: relative !important;\n}\n\nhtml.moss-pricing-v91-lock body main:not(#moss-pricing-app) {\n  visibility: hidden !important;\n  pointer-events: none !important;\n}\n\n\n/* =========================================================\n   PAGE CANVAS · CONTINUOUS WITH NEW API HEADER\n   ========================================================= */\n\n/*\n * The New API header uses a soft blue → white → cyan horizontal wash.\n * Pricing no longer paints a second page background below it.\n * Instead, the body owns one continuous canvas from the top of the page\n * through the entire model marketplace.\n */\nhtml:not(.dark) body:has(#moss-pricing-app) {\n  background:\n    linear-gradient(\n      90deg,\n      rgb(243,250,255) 0%,\n      rgb(237,247,255) 12.5%,\n      rgb(236,247,255) 25%,\n      rgb(242,249,255) 37.5%,\n      rgb(247,252,254) 50%,\n      rgb(242,251,251) 62.5%,\n      rgb(234,248,249) 75%,\n      rgb(236,249,249) 87.5%,\n      rgb(245,251,252) 100%\n    )\n    fixed !important;\n}\n\nhtml.dark body:has(#moss-pricing-app) {\n  background:\n    linear-gradient(\n      90deg,\n      #0b1016 0%,\n      #0d1219 26%,\n      #10151d 50%,\n      #0c1319 76%,\n      #0b1016 100%\n    )\n    fixed !important;\n}\n\n#moss-pricing-app {\n  background: transparent !important;\n}\n\n#moss-pricing-app {\n  --page-bg: #f7f8fb;\n  --panel: rgba(255,255,255,.62);\n  --panel-strong: rgba(255,255,255,.82);\n  --panel-solid: #ffffff;\n  --line: rgba(55,75,95,.105);\n  --line-strong: rgba(55,75,95,.16);\n  --text: #111827;\n  --text-2: #344054;\n  --muted: #667085;\n  --muted-2: #98a2b3;\n  --accent: #6577ff;\n  --accent-soft: rgba(101,119,255,.08);\n  --green: #079455;\n  --green-soft: rgba(7,148,85,.08);\n  --amber: #b54708;\n  --amber-soft: rgba(181,71,8,.07);\n  --red: #d92d20;\n  --red-soft: rgba(217,45,32,.08);\n  --detail-bg: #f7fafc;\n\n  position: fixed;\n  inset: 64px 0 0 0;\n  z-index: 40;\n\n  overflow-y: auto;\n  overflow-x: hidden;\n  overscroll-behavior: contain;\n\n  background: transparent;\n  color: var(--text);\n\n  font-family:\n    Inter,\n    ui-sans-serif,\n    system-ui,\n    -apple-system,\n    BlinkMacSystemFont,\n    \"Segoe UI\",\n    sans-serif;\n\n  -webkit-font-smoothing: antialiased;\n  text-rendering: optimizeLegibility;\n}\n\nhtml.dark #moss-pricing-app,\n.dark #moss-pricing-app {\n  --page-bg: #0b1016;\n  --panel: rgba(18,23,31,.70);\n  --panel-strong: rgba(18,23,31,.90);\n  --panel-solid: #11161e;\n  --line: rgba(255,255,255,.085);\n  --line-strong: rgba(255,255,255,.15);\n  --text: rgba(247,249,253,.96);\n  --text-2: rgba(232,236,243,.84);\n  --muted: rgba(216,222,233,.60);\n  --muted-2: rgba(216,222,233,.38);\n  --accent: #91a7ff;\n  --accent-soft: rgba(145,167,255,.09);\n  --green: #75d5a4;\n  --green-soft: rgba(117,213,164,.08);\n  --amber: #f4b36b;\n  --amber-soft: rgba(244,179,107,.08);\n  --red: #ff8d86;\n  --red-soft: rgba(255,141,134,.08);\n  --detail-bg: #101319;\n\n}\n\n#moss-pricing-app *,\n#moss-pricing-app *::before,\n#moss-pricing-app *::after {\n  box-sizing: border-box;\n}\n\n#moss-pricing-app button,\n#moss-pricing-app input {\n  font: inherit;\n}\n\n#moss-pricing-app button {\n  color: inherit;\n}\n\n#moss-pricing-app .market-shell {\n  width: min(1480px, calc(100vw - 36px));\n  margin: 0 auto;\n  padding: 20px 0 88px;\n}\n\n\n/* =========================================================\n   MARKET HEADER\n   One grid with the model list below:\n   258px sidebar + 14px gap + result column.\n   ========================================================= */\n\n#moss-pricing-app .market-topbar {\n  display: grid;\n  grid-template-columns: 258px minmax(0,1fr);\n  align-items: center;\n  gap: 14px;\n  margin-bottom: 14px;\n}\n\n#moss-pricing-app .market-heading-clean {\n  min-height: 46px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding-left: 2px;\n}\n\n#moss-pricing-app .market-title {\n  margin: 0;\n  color: var(--text);\n  font-size: 17px;\n  line-height: 1.2;\n  font-weight: 760;\n  letter-spacing: -.025em;\n}\n\n#moss-pricing-app .market-count {\n  display: inline-flex;\n  align-items: center;\n  color: var(--muted);\n  line-height: 1;\n  white-space: nowrap;\n}\n\n#moss-pricing-app .market-count strong {\n  color: var(--muted);\n  font-size: 10.5px;\n  line-height: 1;\n  font-weight: 700;\n  font-variant-numeric: tabular-nums;\n}\n\n\n#moss-pricing-app .top-controls {\n  min-width: 0;\n  display: grid;\n  grid-template-columns: minmax(280px,1fr) 154px;\n  align-items: center;\n  gap: 10px;\n}\n\n#moss-pricing-app .search-wrap {\n  position: relative;\n  min-width: 0;\n  display: block;\n}\n\n#moss-pricing-app .search-icon {\n  position: absolute;\n  top: 50%;\n  left: 13px;\n  width: 16px;\n  height: 16px;\n  transform: translateY(-50%);\n  color: var(--muted-2);\n  pointer-events: none;\n}\n\n#moss-pricing-app .search-input {\n  width: 100%;\n  height: 46px;\n  outline: 0;\n  border: 1px solid var(--line);\n  border-radius: 11px;\n  background: var(--panel);\n  color: var(--text-2);\n  box-shadow: inset 0 1px 0 rgba(255,255,255,.48);\n}\n\n#moss-pricing-app .search-input {\n  padding: 0 14px 0 40px;\n  font-size: 12px;\n}\n\n#moss-pricing-app .search-input::placeholder {\n  color: var(--muted-2);\n}\n\n#moss-pricing-app .search-input:focus {\n  border-color: color-mix(in srgb,var(--accent) 30%,var(--line));\n  box-shadow: 0 0 0 3px var(--accent-soft);\n}\n\n\n#moss-pricing-app .mobile-filter-toggle {\n  display: none;\n}\n\n\n\n\n/* =========================================================\n   MARKET · SORT DROPDOWN\n   ========================================================= */\n\n#moss-pricing-app .sort-control {\n  position: relative;\n  min-width: 0;\n}\n\n#moss-pricing-app .sort-trigger {\n  width: 100%;\n  height: 46px;\n  padding: 0 10px 0 12px;\n\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 7px;\n\n  outline: 0;\n\n  border: 1px solid var(--line);\n  border-radius: 10px;\n\n  background: var(--panel);\n  color: var(--text-2);\n\n  box-shadow:\n    inset 0 1px 0 rgba(255,255,255,.42);\n\n  font-size: 10.5px;\n  cursor: pointer;\n}\n\n#moss-pricing-app .sort-trigger:hover {\n  border-color: var(--line-strong);\n}\n\n#moss-pricing-app .sort-trigger:focus-visible,\n#moss-pricing-app .sort-control[data-sort-open=\"true\"] .sort-trigger {\n  border-color: color-mix(in srgb,var(--accent) 30%,var(--line));\n  box-shadow: 0 0 0 3px var(--accent-soft);\n}\n\n#moss-pricing-app .sort-current {\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n#moss-pricing-app .sort-chevron {\n  flex: 0 0 15px;\n  width: 15px;\n  height: 15px;\n  color: var(--muted);\n  transition: transform .16s ease;\n}\n\n#moss-pricing-app .sort-control[data-sort-open=\"true\"] .sort-chevron {\n  transform: rotate(180deg);\n}\n\n#moss-pricing-app .sort-menu {\n  position: absolute;\n  top: calc(100% + 4px);\n  right: 0;\n  z-index: 80;\n\n  width: 100%;\n  min-width: 0;\n  padding: 3px;\n\n  border: 1px solid var(--line);\n  border-radius: 9px;\n\n  background: var(--panel-solid);\n\n  box-shadow:\n    0 10px 30px rgba(25,40,60,.11);\n\n  overflow: hidden;\n}\n\nhtml.dark #moss-pricing-app .sort-menu {\n  box-shadow:\n    0 12px 32px rgba(0,0,0,.32);\n}\n\n#moss-pricing-app .sort-menu[hidden] {\n  display: none !important;\n}\n\n#moss-pricing-app .sort-option {\n  width: 100%;\n  min-height: 30px;\n  padding: 0 7px;\n\n  display: grid;\n  grid-template-columns: 14px minmax(0,1fr);\n  align-items: center;\n  gap: 5px;\n\n  border: 0;\n  border-radius: 5px;\n\n  background: transparent;\n  color: var(--text-2);\n\n  font-size: 9.5px;\n  line-height: 1.2;\n  text-align: left;\n\n  cursor: pointer;\n}\n\n#moss-pricing-app .sort-option:hover {\n  background: var(--accent-soft);\n}\n\n#moss-pricing-app .sort-option-check {\n  color: transparent;\n  font-size: 9px;\n  font-weight: 800;\n}\n\n#moss-pricing-app .sort-option[aria-checked=\"true\"] {\n  background: color-mix(in srgb,var(--accent-soft) 68%,transparent);\n  color: var(--text);\n  font-weight: 650;\n}\n\n#moss-pricing-app .sort-option[aria-checked=\"true\"] .sort-option-check {\n  color: var(--accent);\n}\n\n\n/* =========================================================\n   FILTER + RESULTS\n   ========================================================= */\n\n#moss-pricing-app .market-layout {\n  display: grid;\n  grid-template-columns: 258px minmax(0,1fr);\n  align-items: start;\n  gap: 14px;\n}\n\n#moss-pricing-app .filter-panel {\n  position: sticky;\n  top: 14px;\n  padding: 16px;\n  border: 1px solid var(--line);\n  border-radius: 14px;\n  background: var(--panel);\n  backdrop-filter: blur(14px) saturate(112%);\n  -webkit-backdrop-filter: blur(14px) saturate(112%);\n}\n\n#moss-pricing-app .filter-head {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 10px;\n  padding-bottom: 13px;\n  border-bottom: 1px solid var(--line);\n}\n\n#moss-pricing-app .filter-head h2 {\n  margin: 0;\n  font-size: 16px;\n  line-height: 1.25;\n  font-weight: 760;\n}\n\n#moss-pricing-app .filter-head p {\n  margin: 4px 0 0;\n  color: var(--muted);\n  font-size: 9.5px;\n  line-height: 1.45;\n}\n\n#moss-pricing-app .reset-btn {\n  padding: 2px 0;\n  border: 0;\n  background: transparent;\n  color: var(--muted);\n  font-size: 9px;\n  font-weight: 650;\n  cursor: pointer;\n}\n\n#moss-pricing-app .reset-btn:hover {\n  color: var(--text);\n}\n\n#moss-pricing-app .filter-section {\n  padding-top: 14px;\n}\n\n#moss-pricing-app .filter-section + .filter-section {\n  margin-top: 10px;\n  border-top: 1px solid var(--line);\n}\n\n#moss-pricing-app .filter-section-title {\n  margin: 0 0 9px;\n  color: var(--text-2);\n  font-size: 10.5px;\n  font-weight: 720;\n}\n\n#moss-pricing-app .filter-chips {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n\n#moss-pricing-app .filter-chip {\n  min-height: 28px;\n  padding: 0 8px;\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  border: 1px solid var(--line);\n  border-radius: 999px;\n  background: rgba(255,255,255,.22);\n  color: var(--muted);\n  font-size: 9.5px;\n  cursor: pointer;\n}\n\nhtml.dark #moss-pricing-app .filter-chip {\n  background: rgba(255,255,255,.018);\n}\n\n#moss-pricing-app .filter-chip:hover {\n  border-color: var(--line-strong);\n  color: var(--text-2);\n}\n\n#moss-pricing-app .filter-chip[aria-pressed=\"true\"] {\n  border-color: color-mix(in srgb, var(--accent) 35%, var(--line));\n  background: var(--accent-soft);\n  color: var(--text);\n}\n\n#moss-pricing-app .filter-chip-count {\n  min-width: 19px;\n  height: 19px;\n  padding: 0 5px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 999px;\n  background: color-mix(in srgb, var(--muted) 9%, transparent);\n  font-size: 9px;\n  font-weight: 680;\n}\n\n#moss-pricing-app .result-panel {\n  min-width: 0;\n}\n\n#moss-pricing-app .model-table {\n  overflow: hidden;\n  border: 1px solid var(--line);\n  border-radius: 14px;\n  background: var(--panel);\n  backdrop-filter: blur(14px) saturate(112%);\n  -webkit-backdrop-filter: blur(14px) saturate(112%);\n}\n\n#moss-pricing-app .model-table-head,\n#moss-pricing-app .model-row {\n  display: grid;\n  grid-template-columns:\n    minmax(290px, 1.6fr)\n    minmax(215px, .9fr)\n    minmax(220px, 1fr)\n    122px;\n  align-items: center;\n  column-gap: 16px;\n}\n\n#moss-pricing-app .model-table-head {\n  min-height: 44px;\n  padding: 0 14px;\n  border-bottom: 1px solid var(--line);\n  color: var(--muted);\n  font-size: 9.5px;\n  font-weight: 700;\n}\n\n#moss-pricing-app .model-row {\n  min-height: 72px;\n  padding: 10px 14px;\n  border-bottom: 1px solid var(--line);\n}\n\n#moss-pricing-app .model-row:last-child {\n  border-bottom: 0;\n}\n\n#moss-pricing-app .model-row:hover {\n  background: color-mix(in srgb, var(--accent-soft) 38%, transparent);\n}\n\n#moss-pricing-app .model-cell {\n  min-width: 0;\n}\n\n#moss-pricing-app .model-identity {\n  min-width: 0;\n  display: flex;\n  align-items: center;\n  gap: 11px;\n}\n\n#moss-pricing-app .model-icon-wrap {\n  flex: 0 0 42px;\n  width: 42px;\n  height: 42px;\n  display: grid;\n  place-items: center;\n  border: 1px solid var(--line);\n  border-radius: 10px;\n  background: rgba(255,255,255,.30);\n}\n\nhtml.dark #moss-pricing-app .model-icon-wrap {\n  background: rgba(255,255,255,.022);\n}\n\n#moss-pricing-app .native-icon {\n  position: relative;\n  width: 29px;\n  height: 29px;\n  display: grid;\n  place-items: center;\n  overflow: hidden;\n}\n\n#moss-pricing-app .native-icon > *,\n#moss-pricing-app .native-icon svg,\n#moss-pricing-app .native-icon img {\n  width: 29px !important;\n  height: 29px !important;\n  max-width: 29px !important;\n  max-height: 29px !important;\n}\n\n#moss-pricing-app .fallback-brand-badge {\n  width: 29px;\n  height: 29px;\n  display: grid;\n  place-items: center;\n  border: 1px solid rgba(91,110,255,.14);\n  border-radius: 8px;\n  background: linear-gradient(145deg,rgba(91,110,255,.18),rgba(58,155,245,.10));\n  color: color-mix(in srgb,var(--accent) 78%,var(--text));\n  font-size: 9px;\n  font-weight: 760;\n}\n\n#moss-pricing-app .fallback-brand-icon {\n  visibility: hidden;\n  opacity: 0;\n  object-fit: contain;\n  border: 0;\n  background: transparent;\n}\n\n#moss-pricing-app .fallback-brand-icon[data-loaded=\"true\"] {\n  visibility: visible;\n  opacity: 1;\n}\n\n#moss-pricing-app .fallback-brand-badge[hidden] {\n  display: none !important;\n}\n\n#moss-pricing-app .model-name-wrap {\n  min-width: 0;\n}\n\n#moss-pricing-app .model-name {\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  color: var(--text);\n  font-family: ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace;\n  font-size: 13.5px;\n  line-height: 1.3;\n  font-weight: 740;\n  letter-spacing: -.02em;\n}\n\n#moss-pricing-app .model-provider {\n  margin-top: 4px;\n  color: var(--muted);\n  font-size: 10px;\n  line-height: 1.2;\n}\n\n#moss-pricing-app .model-provider[data-generic=\"true\"] {\n  color: var(--muted-2);\n}\n\n#moss-pricing-app .status-loading,\n#moss-pricing-app .status-empty {\n  color: var(--muted-2);\n  font-size: 10px;\n}\n\n#moss-pricing-app .status-loading {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n}\n\n#moss-pricing-app .status-loading::before {\n  content: \"\";\n  width: 8px;\n  height: 8px;\n  border: 1.5px solid color-mix(in srgb,var(--muted) 25%,transparent);\n  border-top-color: var(--muted);\n  border-radius: 999px;\n  animation: moss-status-spin .8s linear infinite;\n}\n\n@keyframes moss-status-spin {\n  to { transform: rotate(360deg); }\n}\n\n#moss-pricing-app .status-main {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n\n#moss-pricing-app .status-dot {\n  width: 7px;\n  height: 7px;\n  border-radius: 999px;\n  background: var(--muted-2);\n}\n\n#moss-pricing-app .status-title {\n  color: var(--muted);\n  font-size: 9.5px;\n}\n\n#moss-pricing-app .status-success {\n  color: var(--text);\n  font-size: 10.5px;\n  font-weight: 720;\n  font-variant-numeric: tabular-nums;\n}\n\n#moss-pricing-app .status-metrics {\n  margin-top: 4px;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px 9px;\n  color: var(--muted-2);\n  font-size: 8.8px;\n}\n\n#moss-pricing-app .status--good .status-dot {\n  background: var(--green);\n  box-shadow: 0 0 0 3px var(--green-soft);\n}\n\n#moss-pricing-app .status--good .status-success {\n  color: var(--green);\n}\n\n#moss-pricing-app .status--warn .status-dot {\n  background: var(--amber);\n  box-shadow: 0 0 0 3px var(--amber-soft);\n}\n\n#moss-pricing-app .status--warn .status-success {\n  color: var(--amber);\n}\n\n#moss-pricing-app .status--bad .status-dot {\n  background: var(--red);\n  box-shadow: 0 0 0 3px var(--red-soft);\n}\n\n#moss-pricing-app .status--bad .status-success {\n  color: var(--red);\n}\n\n#moss-pricing-app .meta-wrap {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 5px;\n}\n\n#moss-pricing-app .meta-tag {\n  min-height: 24px;\n  padding: 0 8px;\n  display: inline-flex;\n  align-items: center;\n  border: 1px solid var(--line);\n  border-radius: 999px;\n  background: rgba(255,255,255,.18);\n  color: var(--muted);\n  font-size: 9px;\n}\n\nhtml.dark #moss-pricing-app .meta-tag {\n  background: rgba(255,255,255,.016);\n}\n\n#moss-pricing-app .action-cell {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 6px;\n}\n\n#moss-pricing-app .detail-btn,\n#moss-pricing-app .copy-btn {\n  height: 32px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid var(--line);\n  border-radius: 8px;\n  background: rgba(255,255,255,.24);\n  color: var(--text-2);\n  cursor: pointer;\n}\n\nhtml.dark #moss-pricing-app .detail-btn,\nhtml.dark #moss-pricing-app .copy-btn {\n  background: rgba(255,255,255,.018);\n}\n\n#moss-pricing-app .detail-btn {\n  min-width: 76px;\n  gap: 5px;\n  padding: 0 10px;\n  font-size: 9.5px;\n  font-weight: 680;\n}\n\n#moss-pricing-app .copy-btn {\n  width: 32px;\n  padding: 0;\n}\n\n#moss-pricing-app .detail-btn:hover,\n#moss-pricing-app .copy-btn:hover {\n  border-color: color-mix(in srgb,var(--accent) 28%,var(--line));\n  background: var(--accent-soft);\n}\n\n#moss-pricing-app .detail-btn svg,\n#moss-pricing-app .copy-btn svg {\n  width: 13px;\n  height: 13px;\n}\n\n#moss-pricing-app .state-box {\n  min-height: 180px;\n  display: grid;\n  place-items: center;\n  padding: 24px;\n  color: var(--muted);\n  font-size: 12px;\n  text-align: center;\n}\n\n#moss-pricing-app .toast {\n  position: fixed;\n  left: 50%;\n  bottom: 26px;\n  z-index: 2147483647;\n  transform: translateX(-50%);\n  padding: 8px 11px;\n  border: 1px solid var(--line);\n  border-radius: 999px;\n  background: var(--panel-solid);\n  color: var(--text-2);\n  box-shadow: 0 12px 36px rgba(20,30,45,.16);\n  font-size: 10px;\n}\n\n\n/* =========================================================\n   DETAIL SHELL\n   One solid dialog background plane.\n   The top stack is static; only the body scrolls.\n   ========================================================= */\n\n#moss-pricing-app dialog.model-detail-popover {\n  --moss-dialog-safe-top: 82px;\n\n  position: fixed !important;\n  top: var(--moss-dialog-safe-top) !important;\n  right: 0 !important;\n  bottom: auto !important;\n  left: 0 !important;\n\n  width: min(760px,calc(100vw - 36px)) !important;\n  height: auto !important;\n  max-height:\n    calc(\n      100vh -\n      var(--moss-dialog-safe-top) -\n      14px\n    ) !important;\n\n  margin: 0 auto !important;\n  padding: 0 !important;\n\n  overflow: hidden !important;\n  overscroll-behavior: contain;\n\n  border: 1px solid var(--line-strong) !important;\n  border-radius: 17px !important;\n  background: transparent !important;\n  color: var(--text);\n\n  box-shadow:\n    0 28px 88px rgba(30,45,60,.24)\n    !important;\n\n  transition:\n    width .18s cubic-bezier(.16,1,.3,1)\n    !important;\n}\n\nhtml.dark #moss-pricing-app dialog.model-detail-popover {\n  border-color: var(--line-strong) !important;\n  background: transparent !important;\n  box-shadow:\n    0 30px 92px rgba(0,0,0,.44)\n    !important;\n}\n\n#moss-pricing-app dialog.model-detail-popover[data-active-tab=\"overview\"] {\n  width: min(760px,calc(100vw - 36px)) !important;\n}\n\n#moss-pricing-app dialog.model-detail-popover[data-active-tab=\"performance\"] {\n  width: min(900px,calc(100vw - 36px)) !important;\n}\n\n#moss-pricing-app dialog.model-detail-popover[data-active-tab=\"api\"] {\n  width: min(760px,calc(100vw - 36px)) !important;\n}\n\n#moss-pricing-app dialog.model-detail-popover::backdrop {\n  background: rgba(15,23,42,.20);\n  backdrop-filter: blur(1px);\n  -webkit-backdrop-filter: blur(1px);\n}\n\nhtml.dark #moss-pricing-app dialog.model-detail-popover::backdrop {\n  background: rgba(0,0,0,.36);\n}\n\n#moss-pricing-app .detail-surface {\n  width: 100%;\n\n  max-height:\n    calc(\n      100vh -\n      var(--moss-dialog-safe-top) -\n      14px\n    );\n\n  display: flex;\n  flex-direction: column;\n\n  min-height: 0;\n\n  overflow: hidden;\n  border-radius: 16px;\n\n  background: var(--detail-bg) !important;\n}\n\n#moss-pricing-app .detail-top {\n  flex: 0 0 auto;\n  background: transparent !important;\n}\n\n#moss-pricing-app .detail-header {\n  position: static;\n  min-height: 68px;\n  padding: 12px 16px;\n\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 14px;\n\n  border-bottom: 1px solid var(--line);\n  background: transparent !important;\n}\n\n#moss-pricing-app .detail-identity {\n  min-width: 0;\n  display: flex;\n  align-items: center;\n  gap: 11px;\n}\n\n#moss-pricing-app .detail-icon {\n  flex: 0 0 42px;\n  width: 42px;\n  height: 42px;\n  display: grid;\n  place-items: center;\n  overflow: hidden;\n  border: 1px solid var(--line);\n  border-radius: 10px;\n  background: var(--panel-solid);\n}\n\nhtml.dark #moss-pricing-app .detail-icon {\n  background: rgba(255,255,255,.025);\n}\n\n#moss-pricing-app .detail-icon .native-icon,\n#moss-pricing-app .detail-icon .native-icon > *,\n#moss-pricing-app .detail-icon svg,\n#moss-pricing-app .detail-icon img {\n  width: 28px !important;\n  height: 28px !important;\n  max-width: 28px !important;\n  max-height: 28px !important;\n}\n\n#moss-pricing-app .detail-name-wrap {\n  min-width: 0;\n}\n\n#moss-pricing-app .detail-name {\n  margin: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  color: var(--text);\n  font-family: ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace;\n  font-size: 16px;\n  line-height: 1.22;\n  font-weight: 760;\n  letter-spacing: -.025em;\n}\n\n#moss-pricing-app .detail-provider {\n  margin-top: 4px;\n  color: var(--muted);\n  font-size: 10px;\n}\n\n#moss-pricing-app .detail-close {\n  flex: 0 0 34px;\n  width: 34px;\n  height: 34px;\n  display: grid;\n  place-items: center;\n  padding: 0;\n  border: 1px solid var(--line);\n  border-radius: 9px;\n  background: transparent !important;\n  color: var(--muted);\n  cursor: pointer;\n}\n\n#moss-pricing-app .detail-close:hover {\n  color: var(--text);\n  background: var(--accent-soft) !important;\n}\n\n#moss-pricing-app .detail-close svg {\n  width: 15px;\n  height: 15px;\n}\n\n#moss-pricing-app .detail-tabs-wrap {\n  position: static;\n  min-height: 52px;\n  padding: 8px 16px;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  border-bottom: 1px solid var(--line);\n  background: transparent !important;\n}\n\n#moss-pricing-app .detail-tabs {\n  width: 380px;\n  max-width: 100%;\n  padding: 3px;\n\n  display: grid;\n  grid-template-columns: repeat(3,1fr);\n  gap: 3px;\n\n  border: 1px solid var(--line);\n  border-radius: 11px;\n\n  background:\n    color-mix(\n      in srgb,\n      var(--text) 3%,\n      transparent\n    );\n}\n\n#moss-pricing-app .detail-tab-ui {\n  height: 34px;\n  padding: 0 10px;\n\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n\n  border: 0;\n  border-radius: 8px;\n\n  background: transparent;\n  color: var(--muted);\n\n  font-size: 11.5px;\n  font-weight: 650;\n  cursor: pointer;\n}\n\n#moss-pricing-app .detail-tab-ui svg {\n  width: 14px;\n  height: 14px;\n}\n\n#moss-pricing-app .detail-tab-ui[aria-selected=\"true\"] {\n  color: var(--text);\n  background: var(--panel-solid);\n  box-shadow:\n    inset 0 0 0 1px var(--line);\n}\n\nhtml.dark #moss-pricing-app .detail-tab-ui[aria-selected=\"true\"] {\n  background: rgba(255,255,255,.055);\n}\n\n#moss-pricing-app .detail-body {\n  flex: 1 1 auto;\n  min-height: 0;\n\n  padding: 16px 18px 20px;\n\n  overflow-y: auto;\n  overflow-x: hidden;\n\n  background: transparent !important;\n  scrollbar-width: thin;\n}\n\n#moss-pricing-app .detail-tab-panel {\n  background: transparent !important;\n}\n\n#moss-pricing-app .detail-tab-panel[hidden] {\n  display: none !important;\n}\n\n\n/* =========================================================\n   DETAIL · OVERVIEW\n   ========================================================= */\n\n#moss-pricing-app .overview-view {\n  display: grid;\n  gap: 12px;\n}\n\n#moss-pricing-app .overview-summary {\n  display: grid;\n  gap: 7px;\n}\n\n#moss-pricing-app .overview-title-row {\n  min-width: 0;\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 7px 8px;\n}\n\n#moss-pricing-app .overview-title {\n  margin: 0;\n  color: var(--text);\n  font-size: 11px;\n  line-height: 1.35;\n  font-weight: 720;\n}\n\n#moss-pricing-app .match-badge {\n  min-height: 21px;\n  padding: 0 7px;\n  display: inline-flex;\n  align-items: center;\n  border: 1px solid var(--line);\n  border-radius: 999px;\n  background: transparent;\n  color: var(--muted);\n  font-size: 8.5px;\n  line-height: 1;\n  white-space: nowrap;\n}\n\n#moss-pricing-app .match-badge[data-tone=\"exact\"] {\n  border-color: color-mix(in srgb,var(--accent) 18%,var(--line));\n  background: color-mix(in srgb,var(--accent-soft) 65%,transparent);\n  color: color-mix(in srgb,var(--accent) 72%,var(--text));\n}\n\n#moss-pricing-app .match-badge[data-tone=\"confirmed\"] {\n  border-color: color-mix(in srgb,var(--green) 24%,var(--line));\n  background: color-mix(in srgb,var(--green) 8%,transparent);\n  color: var(--green);\n}\n\n#moss-pricing-app .match-badge[data-tone=\"inferred\"] {\n  border-color: color-mix(in srgb,var(--amber) 24%,var(--line));\n  background: color-mix(in srgb,var(--amber) 7%,transparent);\n  color: var(--amber);\n}\n\n#moss-pricing-app .overview-description {\n  max-width: 620px;\n  color: var(--text-2);\n  font-size: 11px;\n  line-height: 1.55;\n}\n\n#moss-pricing-app .metadata-map {\n  min-height: 28px;\n\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 7px;\n\n  color: var(--text-2);\n}\n\n#moss-pricing-app .metadata-label {\n  color: var(--muted);\n  font-size: 8.5px;\n  white-space: nowrap;\n}\n\n#moss-pricing-app .metadata-id {\n  color: var(--text-2);\n  font-family: ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace;\n  font-size: 9.5px;\n  line-height: 1.35;\n  overflow-wrap: anywhere;\n}\n\n#moss-pricing-app .provider-badge {\n  min-height: 20px;\n  padding: 0 6px;\n\n  display: inline-flex;\n  align-items: center;\n\n  border: 1px solid var(--line);\n  border-radius: 999px;\n\n  background: var(--accent-soft);\n  color: var(--text-2);\n\n  font-size: 8px;\n  white-space: nowrap;\n}\n\n#moss-pricing-app .detail-warning {\n  padding: 7px 9px;\n  border: 1px solid color-mix(in srgb,var(--amber) 22%,var(--line));\n  border-radius: 8px;\n  background: color-mix(in srgb,var(--amber) 5%,transparent);\n  color: var(--amber);\n  font-size: 9px;\n  line-height: 1.45;\n}\n\n#moss-pricing-app .detail-section {\n  display: grid;\n  gap: 7px;\n}\n\n#moss-pricing-app .detail-section-title {\n  margin: 0;\n  color: var(--text);\n  font-size: 11px;\n  line-height: 1.35;\n  font-weight: 720;\n}\n\n#moss-pricing-app .info-panel {\n  width: 100%;\n  overflow: hidden;\n\n  border: 1px solid var(--line);\n  border-radius: 9px;\n\n  background:\n    color-mix(\n      in srgb,\n      var(--text) 1.4%,\n      transparent\n    );\n}\n\n#moss-pricing-app .info-row {\n  min-height: 42px;\n  display: grid;\n  border-bottom: 1px solid var(--line);\n}\n\n#moss-pricing-app .info-row:last-child {\n  border-bottom: 0;\n}\n\n#moss-pricing-app .info-row--1 {\n  grid-template-columns: 1fr;\n}\n\n#moss-pricing-app .info-row--2 {\n  grid-template-columns: repeat(2,1fr);\n}\n\n#moss-pricing-app .info-row--3 {\n  grid-template-columns: repeat(3,1fr);\n}\n\n#moss-pricing-app .info-cell {\n  min-width: 0;\n  padding: 0 11px;\n\n  display: flex;\n  align-items: center;\n  gap: 8px;\n\n  border-right: 1px solid var(--line);\n}\n\n#moss-pricing-app .info-cell:last-child {\n  border-right: 0;\n}\n\n#moss-pricing-app .info-label {\n  flex: 0 0 auto;\n  color: var(--muted);\n  font-size: 8.5px;\n  white-space: nowrap;\n}\n\n#moss-pricing-app .info-value {\n  min-width: 0;\n  overflow-wrap: anywhere;\n  color: var(--text-2);\n  font-size: 10.5px;\n  line-height: 1.4;\n  font-weight: 620;\n}\n\n#moss-pricing-app .info-cell--key {\n  justify-content: center;\n}\n\n#moss-pricing-app .info-cell--key .info-value {\n  font-size: 11px;\n  font-weight: 680;\n  font-variant-numeric: tabular-nums;\n}\n\n#moss-pricing-app .info-cell--capability {\n  justify-content: center;\n}\n\n#moss-pricing-app .capability-check {\n  flex: 0 0 auto;\n  width: 17px;\n  height: 17px;\n\n  display: inline-grid;\n  place-items: center;\n\n  border: 1px solid color-mix(in srgb,var(--green) 22%,var(--line));\n  border-radius: 50%;\n\n  background: color-mix(in srgb,var(--green) 7%,transparent);\n  color: var(--green);\n\n  font-size: 9px;\n  font-weight: 800;\n}\n\n#moss-pricing-app .overview-source-summary {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 5px 7px;\n  color: var(--muted);\n  font-size: 8.5px;\n}\n\n#moss-pricing-app .overview-source-summary-label {\n  color: var(--muted-2);\n}\n\n#moss-pricing-app .overview-source-chip {\n  min-height: 21px;\n  padding: 0 6px;\n  display: inline-flex;\n  align-items: center;\n  border: 1px solid var(--line);\n  border-radius: 999px;\n  background: transparent;\n  color: var(--text-2);\n  text-decoration: none;\n}\n\n#moss-pricing-app a.overview-source-chip:hover {\n  color: var(--accent);\n}\n\n\n/* =========================================================\n   DETAIL · PERFORMANCE\n   ========================================================= */\n\n#moss-pricing-app .perf-primary-grid {\n  display: grid;\n  grid-template-columns: repeat(3,1fr);\n  gap: 8px;\n  margin-bottom: 13px;\n}\n\n#moss-pricing-app .perf-primary-card {\n  min-height: 90px;\n  padding: 10px 12px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  border: 1px solid var(--line);\n  border-radius: 10px;\n  background: rgba(255,255,255,.16);\n}\n\nhtml.dark #moss-pricing-app .perf-primary-card {\n  background: rgba(255,255,255,.013);\n}\n\n#moss-pricing-app .perf-primary-label {\n  color: var(--muted);\n  font-size: 9.5px;\n}\n\n#moss-pricing-app .perf-primary-value {\n  margin-top: 5px;\n  color: var(--text);\n  font-family: ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace;\n  font-size: 17px;\n  line-height: 1.25;\n  font-weight: 760;\n  font-variant-numeric: tabular-nums;\n}\n\n#moss-pricing-app .perf-primary-note {\n  margin-top: 4px;\n  color: var(--muted-2);\n  font-size: 8.5px;\n}\n\n#moss-pricing-app .perf-rate--good {\n  color: var(--green);\n}\n\n#moss-pricing-app .perf-rate--warn {\n  color: var(--amber);\n}\n\n#moss-pricing-app .perf-rate--bad {\n  color: var(--red);\n}\n\n#moss-pricing-app .overview-section-title {\n  margin: 0 0 7px;\n  color: var(--text);\n  font-size: 11px;\n  line-height: 1.35;\n  font-weight: 720;\n}\n\n#moss-pricing-app .perf-group-table {\n  overflow: hidden;\n  margin-bottom: 13px;\n  border: 1px solid var(--line);\n  border-radius: 10px;\n}\n\n#moss-pricing-app .perf-group-row {\n  min-height: 42px;\n  padding: 0 11px;\n  display: grid;\n  grid-template-columns:\n    minmax(90px,1fr)\n    minmax(90px,.85fr)\n    minmax(140px,1.2fr)\n    minmax(100px,.9fr)\n    minmax(90px,.8fr);\n  align-items: center;\n  border-bottom: 1px solid var(--line);\n  color: var(--text-2);\n  font-size: 10px;\n}\n\n#moss-pricing-app .perf-group-row:last-child {\n  border-bottom: 0;\n}\n\n#moss-pricing-app .perf-group-row--head {\n  min-height: 36px;\n  background: rgba(255,255,255,.13);\n  color: var(--muted);\n  font-size: 9px;\n  font-weight: 680;\n}\n\nhtml.dark #moss-pricing-app .perf-group-row--head {\n  background: rgba(255,255,255,.01);\n}\n\n#moss-pricing-app .perf-group-name {\n  color: var(--accent);\n  font-weight: 680;\n}\n\n#moss-pricing-app .perf-trend-section {\n  margin-top: 0;\n}\n\n#moss-pricing-app .perf-trend-head {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 12px;\n  margin-bottom: 8px;\n}\n\n#moss-pricing-app .perf-trend-title {\n  color: var(--text);\n  font-size: 11px;\n  line-height: 1.35;\n  font-weight: 720;\n}\n\n#moss-pricing-app .perf-trend-subtitle {\n  margin-top: 2px;\n  color: var(--muted);\n  font-size: 8.8px;\n}\n\n#moss-pricing-app .perf-trend-source {\n  min-height: 23px;\n  padding: 0 7px;\n  display: inline-flex;\n  align-items: center;\n  border: 1px solid var(--line);\n  border-radius: 999px;\n  color: var(--muted);\n  font-size: 8px;\n  white-space: nowrap;\n}\n\n#moss-pricing-app .perf-legend {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 5px 10px;\n  margin-bottom: 8px;\n}\n\n#moss-pricing-app .perf-legend-item {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  color: var(--muted);\n  font-size: 8.8px;\n}\n\n#moss-pricing-app .perf-legend-dot {\n  width: 8px;\n  height: 8px;\n  border-radius: 999px;\n}\n\n#moss-pricing-app .perf-chart-shell {\n  overflow: hidden;\n  border: 1px solid var(--line);\n  border-radius: 10px;\n  background: rgba(255,255,255,.10);\n}\n\nhtml.dark #moss-pricing-app .perf-chart-shell {\n  background: rgba(255,255,255,.008);\n}\n\n#moss-pricing-app .perf-chart-svg {\n  width: 100%;\n  height: 250px;\n  display: block;\n}\n\n#moss-pricing-app .perf-chart-grid {\n  stroke: color-mix(in srgb,var(--muted) 19%,transparent);\n  stroke-dasharray: 4 5;\n}\n\n#moss-pricing-app .perf-chart-axis-text {\n  fill: var(--muted);\n  font-size: 10px;\n}\n\n#moss-pricing-app .perf-chart-line {\n  fill: none;\n  stroke-width: 2;\n  vector-effect: non-scaling-stroke;\n}\n\n#moss-pricing-app .perf-chart-point {\n  stroke: var(--panel-solid);\n  stroke-width: 1.6;\n  vector-effect: non-scaling-stroke;\n}\n\n#moss-pricing-app .perf-chart-empty {\n  min-height: 160px;\n  display: grid;\n  place-items: center;\n  color: var(--muted);\n  font-size: 10px;\n}\n\n\n/* =========================================================\n   DETAIL · API\n   Original New API rate-limit + supported-parameter logic.\n   ========================================================= */\n\n#moss-pricing-app .api-view {\n  display: grid;\n  gap: 13px;\n}\n\n#moss-pricing-app .api-line {\n  min-height: 44px;\n  padding: 7px 10px;\n\n  display: grid;\n  grid-template-columns: 92px minmax(0,1fr) auto;\n  align-items: center;\n  gap: 10px;\n\n  border-bottom: 1px solid var(--line);\n}\n\n#moss-pricing-app .api-line:last-child {\n  border-bottom: 0;\n}\n\n#moss-pricing-app .api-label {\n  color: var(--muted);\n  font-size: 9px;\n  white-space: nowrap;\n}\n\n#moss-pricing-app .api-code {\n  min-width: 0;\n  overflow-wrap: anywhere;\n\n  color: var(--text-2);\n\n  font-family:\n    ui-monospace,\n    SFMono-Regular,\n    Menlo,\n    Monaco,\n    Consolas,\n    monospace;\n\n  font-size: 10.5px;\n  line-height: 1.4;\n}\n\n#moss-pricing-app .api-copy {\n  min-width: 52px;\n  height: 28px;\n  padding: 0 8px;\n\n  border: 1px solid var(--line);\n  border-radius: 7px;\n\n  background: transparent;\n  color: var(--muted);\n\n  font-size: 8.8px;\n  font-weight: 620;\n\n  cursor: pointer;\n}\n\n#moss-pricing-app .api-copy:hover {\n  color: var(--text);\n  background: var(--accent-soft);\n}\n\n#moss-pricing-app .api-endpoints {\n  min-height: 42px;\n  padding: 8px 10px;\n\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n\n#moss-pricing-app .api-endpoint {\n  min-height: 23px;\n  padding: 0 7px;\n\n  display: inline-flex;\n  align-items: center;\n\n  border: 1px solid var(--line);\n  border-radius: 6px;\n\n  background: transparent;\n  color: var(--text-2);\n\n  font-family:\n    ui-monospace,\n    SFMono-Regular,\n    Menlo,\n    Monaco,\n    Consolas,\n    monospace;\n\n  font-size: 8.8px;\n}\n\n#moss-pricing-app .empty-line {\n  min-height: 42px;\n  padding: 0 10px;\n  display: flex;\n  align-items: center;\n  color: var(--muted);\n  font-size: 9.5px;\n}\n\n#moss-pricing-app .rate-table {\n  overflow: hidden;\n  border: 1px solid var(--line);\n  border-radius: 9px;\n\n  background:\n    color-mix(\n      in srgb,\n      var(--text) 1.4%,\n      transparent\n    );\n}\n\n#moss-pricing-app .rate-row {\n  min-height: 40px;\n  padding: 0 11px;\n\n  display: grid;\n  grid-template-columns:\n    minmax(120px,1fr)\n    100px\n    100px\n    100px;\n\n  align-items: center;\n  gap: 8px;\n\n  border-bottom: 1px solid var(--line);\n\n  color: var(--text-2);\n  font-size: 10px;\n  font-variant-numeric: tabular-nums;\n}\n\n#moss-pricing-app .rate-row:last-child {\n  border-bottom: 0;\n}\n\n#moss-pricing-app .rate-row > :not(:first-child) {\n  text-align: right;\n}\n\n#moss-pricing-app .rate-row--head {\n  min-height: 34px;\n\n  background:\n    color-mix(\n      in srgb,\n      var(--text) 2.5%,\n      transparent\n    );\n\n  color: var(--muted);\n  font-size: 8.8px;\n  font-weight: 680;\n}\n\n#moss-pricing-app .rate-group {\n  color: var(--text-2);\n  font-family: ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace;\n  font-size: 9.5px;\n}\n\n#moss-pricing-app .rate-note {\n  margin: 6px 0 0;\n  color: var(--muted);\n  font-size: 8.5px;\n  line-height: 1.5;\n}\n\n#moss-pricing-app .params-panel {\n  border-top: 1px solid var(--line);\n}\n\n#moss-pricing-app .params-summary {\n  min-height: 42px;\n\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n\n  list-style: none;\n  cursor: pointer;\n}\n\n#moss-pricing-app .params-summary::-webkit-details-marker {\n  display: none;\n}\n\n#moss-pricing-app .params-title {\n  color: var(--text);\n  font-size: 11px;\n  line-height: 1.35;\n  font-weight: 720;\n}\n\n#moss-pricing-app .params-meta {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  color: var(--muted);\n  font-size: 9px;\n}\n\n#moss-pricing-app .params-chevron {\n  display: inline-block;\n  color: var(--muted-2);\n  transition: transform .15s ease;\n}\n\n#moss-pricing-app .params-panel[open] .params-chevron {\n  transform: rotate(180deg);\n}\n\n#moss-pricing-app .params-body {\n  padding-bottom: 2px;\n}\n\n#moss-pricing-app .param-table-wrap {\n  overflow-x: auto;\n\n  border: 1px solid var(--line);\n  border-radius: 9px;\n\n  background:\n    color-mix(\n      in srgb,\n      var(--text) 1.4%,\n      transparent\n    );\n}\n\n#moss-pricing-app .param-table {\n  min-width: 680px;\n}\n\n#moss-pricing-app .param-row {\n  min-height: 44px;\n  padding: 0 10px;\n\n  display: grid;\n  grid-template-columns:\n    150px\n    80px\n    150px\n    minmax(220px,1fr);\n\n  align-items: center;\n  gap: 10px;\n\n  border-bottom: 1px solid var(--line);\n}\n\n#moss-pricing-app .param-row:last-child {\n  border-bottom: 0;\n}\n\n#moss-pricing-app .param-row--head {\n  min-height: 34px;\n\n  background:\n    color-mix(\n      in srgb,\n      var(--text) 2.5%,\n      transparent\n    );\n\n  color: var(--muted);\n  font-size: 8.8px;\n  font-weight: 680;\n}\n\n#moss-pricing-app .param-name-wrap {\n  min-width: 0;\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 5px;\n}\n\n#moss-pricing-app .param-name {\n  color: var(--text);\n  font-family: ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace;\n  font-size: 9.8px;\n  font-weight: 650;\n}\n\n#moss-pricing-app .param-required {\n  min-height: 18px;\n  padding: 0 5px;\n\n  display: inline-flex;\n  align-items: center;\n\n  border: 1px solid color-mix(in srgb,var(--red) 28%,var(--line));\n  border-radius: 999px;\n\n  color: var(--red);\n  font-size: 7.5px;\n}\n\n#moss-pricing-app .param-type {\n  min-height: 20px;\n  padding: 0 6px;\n\n  display: inline-flex;\n  align-items: center;\n\n  border: 1px solid var(--line);\n  border-radius: 999px;\n\n  background:\n    color-mix(\n      in srgb,\n      var(--text) 2%,\n      transparent\n    );\n\n  color: var(--text-2);\n\n  font-family: ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace;\n  font-size: 8.5px;\n}\n\n#moss-pricing-app .param-default {\n  min-width: 0;\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 4px;\n}\n\n#moss-pricing-app .param-default-mark,\n#moss-pricing-app .param-range,\n#moss-pricing-app .param-empty {\n  color: var(--muted);\n  font-size: 8.8px;\n}\n\n#moss-pricing-app .param-inline-code {\n  padding: 1px 4px;\n  border-radius: 4px;\n\n  background:\n    color-mix(\n      in srgb,\n      var(--text) 5%,\n      transparent\n    );\n\n  color: var(--text-2);\n  font-family: ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace;\n  font-size: 8.8px;\n}\n\n#moss-pricing-app .param-range-code {\n  color: var(--muted);\n  font-family: ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace;\n  font-size: 8.8px;\n}\n\n#moss-pricing-app .param-enums {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 3px;\n}\n\n#moss-pricing-app .param-description {\n  color: var(--muted);\n  font-size: 8.8px;\n  line-height: 1.45;\n}\n\n\n/* =========================================================\n   RESPONSIVE\n   ========================================================= */\n\n@media (max-width: 1040px) {\n  #moss-pricing-app .market-shell {\n    width: min(100% - 24px,1480px);\n  }\n\n  #moss-pricing-app .market-topbar,\n  #moss-pricing-app .market-layout {\n    grid-template-columns: 230px minmax(0,1fr);\n  }\n\n  #moss-pricing-app .model-table-head,\n  #moss-pricing-app .model-row {\n    grid-template-columns:\n      minmax(250px,1.4fr)\n      minmax(190px,.9fr)\n      minmax(180px,.9fr)\n      116px;\n    column-gap: 12px;\n  }\n}\n\n@media (max-width: 860px) {\n  #moss-pricing-app .market-topbar,\n  #moss-pricing-app .market-layout {\n    grid-template-columns: 1fr;\n  }\n\n  #moss-pricing-app .market-heading-clean {\n    min-height: auto;\n  }\n\n  #moss-pricing-app .mobile-filter-toggle {\n    width: 100%;\n    min-height: 40px;\n    margin-bottom: 10px;\n    padding: 0 12px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    border: 1px solid var(--line);\n    border-radius: 10px;\n    background: var(--panel);\n    color: var(--text-2);\n    font-size: 10px;\n  }\n\n  #moss-pricing-app .filter-panel {\n    position: static;\n    display: none;\n    margin-bottom: 10px;\n  }\n\n  #moss-pricing-app .filter-panel[data-open=\"true\"] {\n    display: block;\n  }\n\n  #moss-pricing-app .model-table-head {\n    display: none;\n  }\n\n  #moss-pricing-app .model-row {\n    grid-template-columns: minmax(0,1fr) auto;\n    gap: 10px;\n  }\n\n  #moss-pricing-app .model-row > .model-cell:nth-child(2),\n  #moss-pricing-app .model-row > .model-cell:nth-child(3) {\n    grid-column: 1 / -1;\n  }\n\n  #moss-pricing-app .action-cell {\n    grid-column: 2;\n    grid-row: 1;\n  }\n\n  #moss-pricing-app dialog.model-detail-popover[data-active-tab] {\n    width: calc(100vw - 18px) !important;\n    max-height:\n      calc(\n        100vh -\n        var(--moss-dialog-safe-top) -\n        8px\n      ) !important;\n  }\n\n  #moss-pricing-app .perf-group-table {\n    overflow-x: auto;\n  }\n\n  #moss-pricing-app .perf-group-row {\n    min-width: 700px;\n  }\n}\n\n@media (max-width: 620px) {\n  #moss-pricing-app .market-shell {\n    width: min(100% - 16px,1480px);\n    padding-top: 10px;\n  }\n\n  #moss-pricing-app .top-controls {\n    grid-template-columns: 1fr;\n  }\n\n  #moss-pricing-app .market-title {\n    font-size: 16px;\n  }\n\n  #moss-pricing-app .detail-header {\n    min-height: 62px;\n    padding: 10px 12px;\n  }\n\n  #moss-pricing-app .detail-tabs-wrap {\n    top: 62px;\n    padding: 7px 10px;\n  }\n\n  #moss-pricing-app .detail-tabs {\n    width: 100%;\n  }\n\n  #moss-pricing-app .detail-body {\n    padding: 13px 12px 18px;\n  }\n\n  #moss-pricing-app .overview-description {\n    max-width: none;\n  }\n\n  #moss-pricing-app .info-row--2,\n  #moss-pricing-app .info-row--3 {\n    grid-template-columns: 1fr;\n  }\n\n  #moss-pricing-app .info-cell,\n  #moss-pricing-app .param-cell {\n    min-height: 39px;\n    border-right: 0;\n    border-bottom: 1px solid var(--line);\n  }\n\n  #moss-pricing-app .info-cell:last-child,\n  #moss-pricing-app .param-cell:last-child {\n    border-bottom: 0;\n  }\n\n  #moss-pricing-app .info-cell--key,\n  #moss-pricing-app .info-cell--capability {\n    justify-content: space-between;\n  }\n\n  #moss-pricing-app .api-line {\n    grid-template-columns: 76px minmax(0,1fr) auto;\n  }\n\n  #moss-pricing-app .perf-primary-grid {\n    grid-template-columns: 1fr;\n  }\n\n  #moss-pricing-app .perf-primary-card {\n    min-height: 76px;\n  }\n}\n\n\n@media (prefers-reduced-motion: reduce) {\n  #moss-pricing-app,\n  #moss-pricing-app *,\n  #moss-pricing-app *::before,\n  #moss-pricing-app *::after {\n    animation: none !important;\n    transition: none !important;\n  }\n}\n\n\n/* V9 Fast Core */\n#moss-pricing-app .perf-lazy-state {\n  min-height: 160px;\n  display: grid;\n  place-items: center;\n  color: var(--muted);\n  font-size: 10px;\n}\n\n\n/* =========================================================\n   DETAIL · LOADING\n   ========================================================= */\n\n#moss-pricing-app .detail-loading {\n  min-height: 260px;\n}\n\n#moss-pricing-app .loading-tab {\n  cursor: default;\n  pointer-events: none;\n  user-select: none;\n}\n\n#moss-pricing-app .loading-tab[aria-current=\"true\"] {\n  color: var(--text);\n  background: var(--panel-solid);\n  box-shadow:\n    inset 0 0 0 1px var(--line);\n}\n\nhtml.dark #moss-pricing-app\n.loading-tab[aria-current=\"true\"] {\n  background: rgba(255,255,255,.055);\n}\n\n#moss-pricing-app .loading-panel {\n  min-height: 130px;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  gap: 11px;\n  color: var(--muted);\n}\n\n#moss-pricing-app .loading-spinner {\n  flex: 0 0 18px;\n\n  width: 18px;\n  height: 18px;\n\n  border:\n    2px solid\n    color-mix(\n      in srgb,\n      var(--muted) 18%,\n      transparent\n    );\n\n  border-top-color: var(--accent);\n  border-radius: 999px;\n\n  animation:\n    moss-detail-loading-spin\n    .78s linear infinite;\n}\n\n@keyframes moss-detail-loading-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n#moss-pricing-app .loading-copy {\n  min-width: 0;\n  display: grid;\n  gap: 3px;\n}\n\n#moss-pricing-app .loading-copy strong {\n  color: var(--text-2);\n  font-size: 10.5px;\n  line-height: 1.35;\n  font-weight: 680;\n}\n\n#moss-pricing-app .loading-copy span {\n  color: var(--muted);\n  font-size: 8.8px;\n  line-height: 1.45;\n}\n\n\n@media (max-width: 620px) {\n  #moss-pricing-app .sort-menu {\n    width: 100%;\n  }\n\n  #moss-pricing-app .sort-option {\n    min-height: 32px;\n  }\n}\n";

const CLIENT_JS = "\n(() => {\n  \"use strict\";\n\n  const ROOT_ID = \"moss-pricing-app\";\n  const LOCK_CLASS = \"moss-pricing-v91-lock\";\n  const ROUTE_EVENT = \"moss-pricing-route-v91\";\n  const PATCH_KEY = \"__mossPricingV91HistoryPatched\";\n\n  const state = {\n    models: [],\n    vendors: [],\n    items: [],\n    itemByName: new Map(),\n\n\n    activeGroup: \"全部\",\n    activeVendor: \"全部\",\n    activeTag: \"全部\",\n    search: \"\",\n    sort: \"name-asc\",\n\n    routeGeneration: 0,\n    lastPath: location.pathname,\n  };\n\n\n  const PRICING_SESSION_KEY =\n    \"moss-pricing-v91-pricing\";\n\n  const PERF_SUMMARY_SESSION_KEY =\n    \"moss-pricing-v91-perf-summary\";\n\n  const PRICING_SESSION_TTL =\n    60 * 1000;\n\n  const PERF_SUMMARY_SESSION_TTL =\n    30 * 1000;\n\n\n  /* ---------------------------------------------------------\n     helpers\n     --------------------------------------------------------- */\n\n  const esc = (value) =>\n    String(value ?? \"\")\n      .replaceAll(\"&\", \"&amp;\")\n      .replaceAll(\"<\", \"&lt;\")\n      .replaceAll(\">\", \"&gt;\")\n      .replaceAll('\"', \"&quot;\")\n      .replaceAll(\"'\", \"&#039;\");\n\n\n  const isPricingRoute = () => {\n    const path =\n      location.pathname.replace(/\\/+$/, \"\") || \"/\";\n\n    return path === \"/pricing\";\n  };\n\n\n  const sleep = (ms) =>\n    new Promise((resolve) =>\n      setTimeout(resolve, ms)\n    );\n\n\n  const readSessionCache = (\n    key,\n    ttl\n  ) => {\n    try {\n      const raw =\n        sessionStorage.getItem(\n          key\n        );\n\n      if (!raw) {\n        return null;\n      }\n\n      const parsed =\n        JSON.parse(raw);\n\n      if (\n        !parsed ||\n        typeof parsed !== \"object\" ||\n        !Number.isFinite(\n          Number(parsed.at)\n        ) ||\n        Date.now() -\n          Number(parsed.at) >\n          ttl\n      ) {\n        sessionStorage.removeItem(\n          key\n        );\n\n        return null;\n      }\n\n      return parsed.value;\n    } catch {\n      return null;\n    }\n  };\n\n\n  const writeSessionCache = (\n    key,\n    value\n  ) => {\n    try {\n      sessionStorage.setItem(\n        key,\n        JSON.stringify({\n          at: Date.now(),\n          value,\n        })\n      );\n    } catch {}\n  };\n\n\n  const toArray = (value) => {\n    if (Array.isArray(value)) {\n      return value\n        .map(String)\n        .map((v) => v.trim())\n        .filter(Boolean);\n    }\n\n    if (typeof value === \"string\") {\n      return value\n        .split(\",\")\n        .map((v) => v.trim())\n        .filter(Boolean);\n    }\n\n    return [];\n  };\n\n\n  const inferProvider = (name) => {\n    const n =\n      String(name || \"\").toLowerCase();\n\n    const rules = [\n      [/(gpt|openai|chatgpt|^o1|^o3|^o4)/, \"OpenAI\"],\n      [/(claude|anthropic)/, \"Anthropic\"],\n      [/(gemini|google)/, \"Google\"],\n      [/(deepseek)/, \"DeepSeek\"],\n      [/(qwen|qwq|tongyi)/, \"阿里巴巴\"],\n      [/(doubao|seed|bytedance)/, \"字节跳动\"],\n      [/(glm|zhipu|chatglm)/, \"智谱\"],\n      [/(kimi|moonshot)/, \"Moonshot\"],\n      [/(minimax)/, \"MiniMax\"],\n      [/(grok|xai)/, \"xAI\"],\n      [/(yi-|01ai|lingyi|零一)/, \"零一万物\"],\n      [/(llama|meta)/, \"Meta\"],\n      [/(mistral|mixtral)/, \"Mistral\"],\n    ];\n\n    for (const [pattern, provider] of rules) {\n      if (pattern.test(n)) {\n        return provider;\n      }\n    }\n\n    return \"其他\";\n  };\n\n\n  const normalizePricing = (json) => {\n    if (Array.isArray(json?.data)) {\n      return {\n        models: json.data,\n        vendors:\n          Array.isArray(json?.vendors)\n            ? json.vendors\n            : [],\n      };\n    }\n\n    if (\n      json?.data &&\n      typeof json.data === \"object\"\n    ) {\n      const body = json.data;\n\n      return {\n        models:\n          Array.isArray(body?.data)\n            ? body.data\n            : (\n              Array.isArray(body?.models)\n                ? body.models\n                : []\n            ),\n        vendors:\n          Array.isArray(body?.vendors)\n            ? body.vendors\n            : (\n              Array.isArray(json?.vendors)\n                ? json.vendors\n                : []\n            ),\n      };\n    }\n\n    return {\n      models: [],\n      vendors: [],\n    };\n  };\n\n\n  /* ---------------------------------------------------------\n     lock original pricing page\n\n     Fast Core intentionally does NOT wait for the native\n     pricing grid and never clicks through native pagination.\n     /api/pricing + brand icons are sufficient for first paint.\n     --------------------------------------------------------- */\n\n  const lockOriginalPage = () => {\n    document.documentElement\n      .classList\n      .add(LOCK_CLASS);\n  };\n\n\n  const unlockOriginalPage = () => {\n    document.documentElement\n      .classList\n      .remove(LOCK_CLASS);\n  };\n\n\n  /* ---------------------------------------------------------\n     merge API model metadata with exact native artwork/status\n     --------------------------------------------------------- */\n\n  const buildItems = () => {\n    const vendorMap =\n      new Map();\n\n    for (const vendor of state.vendors) {\n      vendorMap.set(\n        String(vendor?.id),\n        vendor\n      );\n    }\n\n    state.items =\n      state.models.map(\n        (model) => {\n          const name =\n            String(\n              model?.model_name || \"\"\n            );\n\n          const vendor =\n            vendorMap.get(\n              String(model?.vendor_id)\n            );\n\n          const provider =\n            vendor?.name ||\n            model?.vendor_name ||\n            inferProvider(name);\n\n          const groups =\n            toArray(\n              model?.enable_groups ??\n              model?.enable_group\n            );\n\n          const tags =\n            toArray(model?.tags);\n\n          const endpoints =\n            toArray(\n              model?.supported_endpoint_types\n            );\n\n          const native = {\n            iconHTML: \"\",\n            success: null,\n            latency: null,\n            throughput: null,\n          };\n\n          const iconHint =\n            String(\n              model?.icon ||\n              model?.vendor_icon ||\n              vendor?.icon ||\n              \"\"\n            );\n\n          return {\n            model,\n            name,\n            provider,\n            groups,\n            tags,\n            endpoints,\n            native,\n            iconHint,\n\n            perfState:\n              \"idle\",\n\n            perfSummary:\n              null,\n          };\n        }\n      );\n\n    state.itemByName =\n      new Map(\n        state.items.map(\n          (item) => [\n            item.name,\n            item,\n          ]\n        )\n      );\n  };\n\n\n  /* =========================================================\n     MARKET · ROOT\n     ========================================================= */\n\n  const createRoot = () => {\n    const root =\n      document.createElement(\"main\");\n\n    root.id = ROOT_ID;\n\n    root.innerHTML = `\n      <div class=\"market-shell\">\n\n        <header class=\"market-topbar\">\n\n          <div class=\"market-heading-clean\">\n            <h1 class=\"market-title\">模型广场</h1>\n\n            <div class=\"market-count\">\n              <strong class=\"visible-summary-count\">—</strong>\n            </div>\n          </div>\n\n\n          <div class=\"top-controls\">\n\n            <label class=\"search-wrap\">\n              <svg\n                class=\"search-icon\"\n                viewBox=\"0 0 24 24\"\n                fill=\"none\"\n                stroke=\"currentColor\"\n                stroke-width=\"1.8\"\n                aria-hidden=\"true\"\n              >\n                <circle cx=\"11\" cy=\"11\" r=\"7\"></circle>\n                <path d=\"m20 20-3.4-3.4\"></path>\n              </svg>\n\n              <input\n                class=\"search-input\"\n                type=\"search\"\n                autocomplete=\"off\"\n                spellcheck=\"false\"\n                placeholder=\"搜索模型、供应商或标签…\"\n                aria-label=\"搜索模型\"\n              >\n            </label>\n\n\n            <div\n              class=\"sort-control\"\n              data-sort-open=\"false\"\n            >\n              <button\n                type=\"button\"\n                class=\"sort-trigger\"\n                aria-haspopup=\"menu\"\n                aria-expanded=\"false\"\n              >\n                <span class=\"sort-current\">名称 A → Z</span>\n                <svg\n                  class=\"sort-chevron\"\n                  viewBox=\"0 0 24 24\"\n                  fill=\"none\"\n                  stroke=\"currentColor\"\n                  stroke-width=\"1.8\"\n                  aria-hidden=\"true\"\n                >\n                  <path d=\"m8 10 4 4 4-4\"></path>\n                </svg>\n              </button>\n\n              <div\n                class=\"sort-menu\"\n                role=\"menu\"\n                hidden\n              >\n                <button type=\"button\" class=\"sort-option\" role=\"menuitemradio\" aria-checked=\"true\" data-sort-value=\"name-asc\">\n                  <span class=\"sort-option-check\">✓</span><span>名称 A → Z</span>\n                </button>\n                <button type=\"button\" class=\"sort-option\" role=\"menuitemradio\" aria-checked=\"false\" data-sort-value=\"name-desc\">\n                  <span class=\"sort-option-check\">✓</span><span>名称 Z → A</span>\n                </button>\n                <button type=\"button\" class=\"sort-option\" role=\"menuitemradio\" aria-checked=\"false\" data-sort-value=\"provider\">\n                  <span class=\"sort-option-check\">✓</span><span>按供应商</span>\n                </button>\n                <button type=\"button\" class=\"sort-option\" role=\"menuitemradio\" aria-checked=\"false\" data-sort-value=\"status\">\n                  <span class=\"sort-option-check\">✓</span><span>按 24h 状态</span>\n                </button>\n              </div>\n            </div>\n\n          </div>\n\n        </header>\n\n\n        <button\n          type=\"button\"\n          class=\"mobile-filter-toggle\"\n          aria-expanded=\"false\"\n        >\n          <span>筛选</span>\n          <span>展开</span>\n        </button>\n\n\n        <div class=\"market-layout\">\n\n          <aside\n            class=\"filter-panel\"\n            data-open=\"false\"\n          >\n\n            <div class=\"filter-head\">\n              <div>\n                <h2>筛选</h2>\n                <p>按供应商、分组和标签细化模型。</p>\n              </div>\n\n              <button\n                type=\"button\"\n                class=\"reset-btn\"\n              >重置</button>\n            </div>\n\n\n            <section class=\"filter-section\">\n              <h3 class=\"filter-section-title\">分组</h3>\n              <div class=\"filter-chips group-chips\"></div>\n            </section>\n\n\n            <section class=\"filter-section\">\n              <h3 class=\"filter-section-title\">供应商</h3>\n              <div class=\"filter-chips vendor-chips\"></div>\n            </section>\n\n\n            <section class=\"filter-section tag-filter-section\">\n              <h3 class=\"filter-section-title\">标签</h3>\n              <div class=\"filter-chips tag-chips\"></div>\n            </section>\n\n          </aside>\n\n\n          <section class=\"result-panel\">\n            <div class=\"model-table\">\n\n              <div class=\"model-table-head\">\n                <div>模型</div>\n                <div>最近 24 小时状态</div>\n                <div>分组 / 标签</div>\n                <div style=\"text-align:right\">操作</div>\n              </div>\n\n              <div class=\"model-rows\">\n                <div class=\"state-box\">\n                  正在读取全部模型及原生状态…\n                </div>\n              </div>\n\n            </div>\n\n          </section>\n\n        </div>\n\n      </div>\n\n\n      <dialog\n        class=\"model-detail-popover\"\n        data-open=\"false\"\n        aria-hidden=\"true\"\n        aria-label=\"模型详情\"\n      ></dialog>\n    `;\n\n    return root;\n  };\n\n\n  /* =========================================================\n     MARKET · SORT CONTROL\n     ========================================================= */\n\n  const SORT_LABELS = {\n    \"name-asc\": \"名称 A → Z\",\n    \"name-desc\": \"名称 Z → A\",\n    provider: \"按供应商\",\n    status: \"按 24h 状态\",\n  };\n\n\n  const closeSortMenu = (root) => {\n    const control = root.querySelector(\".sort-control\");\n    const trigger = root.querySelector(\".sort-trigger\");\n    const menu = root.querySelector(\".sort-menu\");\n\n    if (!control || !trigger || !menu) {\n      return;\n    }\n\n    control.setAttribute(\"data-sort-open\", \"false\");\n    trigger.setAttribute(\"aria-expanded\", \"false\");\n    menu.hidden = true;\n  };\n\n\n  const updateSortControl = (root) => {\n    const current = root.querySelector(\".sort-current\");\n\n    if (current) {\n      current.textContent = SORT_LABELS[state.sort] || SORT_LABELS[\"name-asc\"];\n    }\n\n    root.querySelectorAll(\"[data-sort-value]\").forEach((option) => {\n      const active = option.getAttribute(\"data-sort-value\") === state.sort;\n      option.setAttribute(\"aria-checked\", active ? \"true\" : \"false\");\n    });\n  };\n\n\n  /* =========================================================\n     MARKET · FILTERING\n     ========================================================= */\n\n  const chipHTML = (\n    label,\n    count,\n    type,\n    active\n  ) => `\n    <button\n      type=\"button\"\n      class=\"filter-chip\"\n      data-filter-type=\"${esc(type)}\"\n      data-filter-value=\"${esc(label)}\"\n      aria-pressed=\"${active ? \"true\" : \"false\"}\"\n    >\n      <span>${esc(label)}</span>\n      <span class=\"filter-chip-count\">${count}</span>\n    </button>\n  `;\n\n\n  const renderFilters = (root) => {\n    const groups =\n      new Map();\n\n    const vendors =\n      new Map();\n\n    const tags =\n      new Map();\n\n    for (const item of state.items) {\n      vendors.set(\n        item.provider,\n        (vendors.get(item.provider) || 0) + 1\n      );\n\n      for (const group of item.groups) {\n        groups.set(\n          group,\n          (groups.get(group) || 0) + 1\n        );\n      }\n\n      for (const tag of item.tags) {\n        tags.set(\n          tag,\n          (tags.get(tag) || 0) + 1\n        );\n      }\n    }\n\n    const total =\n      state.items.length;\n\n    root.querySelector(\n      \".group-chips\"\n    ).innerHTML =\n      chipHTML(\n        \"全部\",\n        total,\n        \"group\",\n        state.activeGroup === \"全部\"\n      ) +\n      [...groups.entries()]\n        .sort(\n          (a, b) =>\n            a[0].localeCompare(\n              b[0],\n              \"zh-CN\"\n            )\n        )\n        .map(\n          ([label, count]) =>\n            chipHTML(\n              label,\n              count,\n              \"group\",\n              state.activeGroup === label\n            )\n        )\n        .join(\"\");\n\n\n    root.querySelector(\n      \".vendor-chips\"\n    ).innerHTML =\n      chipHTML(\n        \"全部\",\n        total,\n        \"vendor\",\n        state.activeVendor === \"全部\"\n      ) +\n      [...vendors.entries()]\n        .sort(\n          (a, b) =>\n            b[1] - a[1] ||\n            a[0].localeCompare(\n              b[0],\n              \"zh-CN\"\n            )\n        )\n        .map(\n          ([label, count]) =>\n            chipHTML(\n              label,\n              count,\n              \"vendor\",\n              state.activeVendor === label\n            )\n        )\n        .join(\"\");\n\n\n    const usefulTags =\n      [...tags.entries()]\n        .sort(\n          (a, b) =>\n            b[1] - a[1] ||\n            a[0].localeCompare(\n              b[0],\n              \"zh-CN\"\n            )\n        )\n        .slice(0, 16);\n\n    const tagSection =\n      root.querySelector(\n        \".tag-filter-section\"\n      );\n\n    if (usefulTags.length) {\n      tagSection.style.display = \"\";\n\n      root.querySelector(\n        \".tag-chips\"\n      ).innerHTML =\n        chipHTML(\n          \"全部\",\n          total,\n          \"tag\",\n          state.activeTag === \"全部\"\n        ) +\n        usefulTags\n          .map(\n            ([label, count]) =>\n              chipHTML(\n                label,\n                count,\n                \"tag\",\n                state.activeTag === label\n              )\n          )\n          .join(\"\");\n    } else {\n      tagSection.style.display = \"none\";\n    }\n  };\n\n\n  const filteredItems = () => {\n    let result =\n      state.items.filter(\n        (item) => {\n          const haystack = [\n            item.name,\n            item.provider,\n            ...item.groups,\n            ...item.tags,\n            ...item.endpoints,\n          ]\n            .join(\" \")\n            .toLowerCase();\n\n          if (\n            state.search &&\n            !haystack.includes(state.search)\n          ) {\n            return false;\n          }\n\n          if (\n            state.activeGroup !== \"全部\" &&\n            !item.groups.includes(\n              state.activeGroup\n            )\n          ) {\n            return false;\n          }\n\n          if (\n            state.activeVendor !== \"全部\" &&\n            item.provider !==\n              state.activeVendor\n          ) {\n            return false;\n          }\n\n          if (\n            state.activeTag !== \"全部\" &&\n            !item.tags.includes(\n              state.activeTag\n            )\n          ) {\n            return false;\n          }\n\n          return true;\n        }\n      );\n\n    if (state.sort === \"name-desc\") {\n      result.sort(\n        (a, b) =>\n          b.name.localeCompare(\n            a.name,\n            undefined,\n            {\n              numeric: true,\n              sensitivity: \"base\",\n            }\n          )\n      );\n    } else if (state.sort === \"provider\") {\n      result.sort(\n        (a, b) =>\n          a.provider.localeCompare(\n            b.provider,\n            \"zh-CN\"\n          ) ||\n          a.name.localeCompare(\n            b.name,\n            undefined,\n            {\n              numeric: true,\n              sensitivity: \"base\",\n            }\n          )\n      );\n    } else if (state.sort === \"status\") {\n      const rank = (item) => {\n        const s =\n          item.perfSummary\n            ?.success;\n\n        if (\n          s === null ||\n          s === undefined\n        ) {\n          return 4;\n        }\n\n        if (s >= 99) {\n          return 0;\n        }\n\n        if (s >= 95) {\n          return 1;\n        }\n\n        return 2;\n      };\n\n      result.sort(\n        (a, b) =>\n          rank(a) - rank(b) ||\n          a.name.localeCompare(\n            b.name,\n            undefined,\n            {\n              numeric: true,\n              sensitivity: \"base\",\n            }\n          )\n      );\n    } else {\n      result.sort(\n        (a, b) =>\n          a.name.localeCompare(\n            b.name,\n            undefined,\n            {\n              numeric: true,\n              sensitivity: \"base\",\n            }\n          )\n      );\n    }\n\n    return result;\n  };\n\n\n\n  /* ---------------------------------------------------------\n     meaningful extra details\n     --------------------------------------------------------- */\n\n\n\n  const safeExternalURL = (value) => {\n    try {\n      const url =\n        new URL(\n          String(value || \"\")\n        );\n\n      if (\n        url.protocol === \"https:\" ||\n        url.protocol === \"http:\"\n      ) {\n        return url.href;\n      }\n    } catch {}\n\n    return \"\";\n  };\n\n\n  const formatTokenCount = (value) => {\n    const n =\n      Number(value);\n\n    if (!Number.isFinite(n)) {\n      return \"\";\n    }\n\n    return n.toLocaleString();\n  };\n\n\n  const booleanLabel = (value) => {\n    if (value === true) return \"支持\";\n    if (value === false) return \"不支持\";\n    return \"\";\n  };\n\n\n  const modalityLabel = (\n    value\n  ) =>\n    String(value || \"\");\n\n\n  const modeLabel = (\n    value\n  ) =>\n    String(value || \"\");\n\n\n  const metadataGrid = (\n    metadata,\n    fieldSources = {}\n  ) => {\n    const items = [];\n\n    const add = (\n      key,\n      label,\n      value\n    ) => {\n      if (\n        value === null ||\n        value === undefined ||\n        value === \"\"\n      ) {\n        return;\n      }\n\n      if (\n        Array.isArray(value) &&\n        !value.length\n      ) {\n        return;\n      }\n\n      items.push({\n        key,\n        label,\n        value:\n          Array.isArray(value)\n            ? value.join(\"、\")\n            : String(value),\n        source:\n          fieldSources?.[key] || \"\",\n      });\n    };\n\n    add(\n      \"context\",\n      \"上下文\",\n      formatTokenCount(\n        metadata?.limit?.context\n      )\n    );\n\n    add(\n      \"input_limit\",\n      \"最大输入\",\n      formatTokenCount(\n        metadata?.limit?.input\n      )\n    );\n\n    add(\n      \"output_limit\",\n      \"最大输出\",\n      formatTokenCount(\n        metadata?.limit?.output\n      )\n    );\n\n    add(\n      \"knowledge\",\n      \"知识截止\",\n      metadata?.knowledge\n    );\n\n    add(\n      \"release_date\",\n      \"发布日期\",\n      metadata?.release_date\n    );\n\n    add(\n      \"deprecation_date\",\n      \"弃用日期\",\n      metadata?.deprecation_date\n    );\n\n    add(\n      \"last_updated\",\n      \"最近更新\",\n      metadata?.last_updated\n    );\n\n    add(\n      \"input_modalities\",\n      \"输入模态\",\n      Array.isArray(\n        metadata?.modalities?.input\n      )\n        ? metadata.modalities.input.map(\n            modalityLabel\n          )\n        : metadata?.modalities?.input\n    );\n\n    add(\n      \"output_modalities\",\n      \"输出模态\",\n      Array.isArray(\n        metadata?.modalities?.output\n      )\n        ? metadata.modalities.output.map(\n            modalityLabel\n          )\n        : metadata?.modalities?.output\n    );\n\n    add(\n      \"mode\",\n      \"模型类型\",\n      modeLabel(\n        metadata?.mode\n      )\n    );\n\n    add(\n      \"tokenizer\",\n      \"Tokenizer\",\n      metadata?.tokenizer\n    );\n\n    add(\n      \"provider\",\n      \"资料提供商\",\n      metadata?.provider\n    );\n\n    add(\n      \"open_weights\",\n      \"开放权重\",\n      booleanLabel(\n        metadata?.open_weights\n      )\n    );\n\n    return items;\n  };\n\n\n\n\n  const capabilityList = (metadata) => {\n    const result = [];\n\n    const push = (\n      label,\n      value\n    ) => {\n      if (value === true) {\n        result.push(label);\n      }\n    };\n\n    push(\n      \"推理\",\n      metadata?.reasoning\n    );\n\n    push(\n      \"工具调用\",\n      metadata?.tool_call\n    );\n\n    push(\n      \"结构化输出\",\n      metadata?.structured_output\n    );\n\n    push(\n      \"附件\",\n      metadata?.attachment\n    );\n\n    push(\n      \"Temperature\",\n      metadata?.temperature\n    );\n\n    return result;\n  };\n\n\n\n  const perfDetailCache =\n    new Map();\n\n\n  const loadPerfMetrics = async (\n    item\n  ) => {\n    if (\n      perfDetailCache.has(\n        item.name\n      )\n    ) {\n      return perfDetailCache.get(\n        item.name\n      );\n    }\n\n    const promise =\n      fetch(\n        \"/api/perf-metrics?model=\" +\n        encodeURIComponent(\n          item.name\n        ) +\n        \"&hours=24\",\n        {\n          method: \"GET\",\n          credentials: \"include\",\n          headers: {\n            Accept: \"application/json\",\n          },\n          cache: \"no-store\",\n        }\n      )\n        .then(\n          async (response) => {\n            const json =\n              await response.json();\n\n            if (!response.ok) {\n              throw new Error(\n                json?.message ||\n                \"performance metrics failed\"\n              );\n            }\n\n            return json;\n          }\n        )\n        .catch(\n          (error) => ({\n            success: false,\n            message:\n              error?.message ||\n              \"performance metrics failed\",\n            data: {\n              groups: [],\n            },\n          })\n        );\n\n    perfDetailCache.set(\n      item.name,\n      promise\n    );\n\n    return promise;\n  };\n\n\n  const extractPerfSummaryRecords = (\n    json\n  ) => {\n    const candidates = [\n      json?.data,\n      json?.data?.models,\n      json?.data?.summaries,\n      json?.models,\n      json?.summaries,\n      json,\n    ];\n\n    for (\n      const candidate\n      of candidates\n    ) {\n      if (\n        Array.isArray(\n          candidate\n        )\n      ) {\n        return candidate;\n      }\n    }\n\n    for (\n      const candidate\n      of candidates\n    ) {\n      if (\n        !candidate ||\n        typeof candidate !==\n          \"object\" ||\n        Array.isArray(candidate)\n      ) {\n        continue;\n      }\n\n      const records = [];\n\n      for (\n        const [key, value]\n        of Object.entries(candidate)\n      ) {\n        if (\n          !value ||\n          typeof value !==\n            \"object\" ||\n          Array.isArray(value)\n        ) {\n          continue;\n        }\n\n        if (\n          value.model_name ||\n          value.model ||\n          value.modelName ||\n          value.name\n        ) {\n          records.push(value);\n        } else if (\n          value.avg_latency_ms !==\n            undefined ||\n          value.success_rate !==\n            undefined ||\n          value.avg_tps !==\n            undefined\n        ) {\n          records.push({\n            model_name: key,\n            ...value,\n          });\n        }\n      }\n\n      if (records.length) {\n        return records;\n      }\n    }\n\n    return [];\n  };\n\n\n  const fetchPerfSummary = async () => {\n    const cached =\n      readSessionCache(\n        PERF_SUMMARY_SESSION_KEY,\n        PERF_SUMMARY_SESSION_TTL\n      );\n\n    if (cached) {\n      return cached;\n    }\n\n    const response =\n      await fetch(\n        \"/api/perf-metrics/summary?hours=24\",\n        {\n          method: \"GET\",\n          credentials: \"include\",\n          headers: {\n            Accept: \"application/json\",\n          },\n          cache: \"no-cache\",\n        }\n      );\n\n    if (!response.ok) {\n      throw new Error(\n        \"performance summary HTTP \" +\n        response.status\n      );\n    }\n\n    const json =\n      await response.json();\n\n    writeSessionCache(\n      PERF_SUMMARY_SESSION_KEY,\n      json\n    );\n\n    return json;\n  };\n\n\n  const perfSummaryFromRecord = (\n    record\n  ) => {\n    const success =\n      finiteMetric(\n        record?.success_rate ??\n        record?.recent_success_rate\n      );\n\n    const latency =\n      finiteMetric(\n        record?.avg_latency_ms ??\n        record?.latency_ms\n      );\n\n    const ttft =\n      finiteMetric(\n        record?.avg_ttft_ms ??\n        record?.ttft_ms\n      );\n\n    const tps =\n      finiteMetric(\n        record?.avg_tps ??\n        record?.tps\n      );\n\n    const requestCount =\n      finiteMetric(\n        record?.request_count ??\n        record?.recent_request_count ??\n        record?.count ??\n        record?.requests\n      );\n\n    return {\n      hasData:\n        success !== null ||\n        latency !== null ||\n        ttft !== null ||\n        tps !== null ||\n        (\n          requestCount !== null &&\n          requestCount > 0\n        ),\n\n      success,\n      latency,\n      ttft,\n      tps,\n      requestCount,\n    };\n  };\n\n\n  const applyPerfSummary = (\n    root,\n    json\n  ) => {\n    const records =\n      extractPerfSummaryRecords(\n        json\n      );\n\n    const exact =\n      new Map();\n\n    const lower =\n      new Map();\n\n    for (\n      const record\n      of records\n    ) {\n      const name =\n        String(\n          record?.model_name ??\n          record?.model ??\n          record?.modelName ??\n          record?.name ??\n          \"\"\n        ).trim();\n\n      if (!name) {\n        continue;\n      }\n\n      exact.set(\n        name,\n        record\n      );\n\n      lower.set(\n        name.toLowerCase(),\n        record\n      );\n    }\n\n    for (\n      const item\n      of state.items\n    ) {\n      const record =\n        exact.get(item.name) ||\n        lower.get(\n          item.name.toLowerCase()\n        );\n\n      if (!record) {\n        item.perfSummary =\n          null;\n\n        item.perfState =\n          \"empty\";\n\n        updateStatusCell(\n          root,\n          item\n        );\n\n        continue;\n      }\n\n      const summary =\n        perfSummaryFromRecord(\n          record\n        );\n\n      item.perfSummary =\n        summary;\n\n      item.perfState =\n        summary.hasData\n          ? \"loaded\"\n          : \"empty\";\n\n      updateStatusCell(\n        root,\n        item\n      );\n    }\n  };\n\n\n  const perfFormatMs = (\n    value\n  ) => {\n    const n =\n      Number(value);\n\n    if (!Number.isFinite(n)) {\n      return \"—\";\n    }\n\n    if (n < 1000) {\n      return (\n        Math.round(n) +\n        \" ms\"\n      );\n    }\n\n    const seconds =\n      n / 1000;\n\n    return (\n      (\n        seconds >= 10\n          ? seconds.toFixed(1)\n          : seconds.toFixed(2)\n      )\n        .replace(/\\.?0+$/, \"\") +\n      \"s\"\n    );\n  };\n\n\n  const perfNiceMax = (\n    value\n  ) => {\n    const n =\n      Math.max(\n        1,\n        Number(value) || 1\n      );\n\n    if (n <= 100) {\n      return (\n        Math.ceil(n / 20) *\n        20\n      );\n    }\n\n    if (n <= 1000) {\n      return (\n        Math.ceil(n / 100) *\n        100\n      );\n    }\n\n    if (n <= 5000) {\n      return (\n        Math.ceil(n / 500) *\n        500\n      );\n    }\n\n    if (n <= 20000) {\n      return (\n        Math.ceil(n / 2000) *\n        2000\n      );\n    }\n\n    return (\n      Math.ceil(n / 5000) *\n      5000\n    );\n  };\n\n\n  const perfTrendData = (\n    perf\n  ) => {\n    const groups =\n      Array.isArray(\n        perf?.data?.groups\n      )\n        ? perf.data.groups\n        : [];\n\n    const prepared =\n      groups\n        .map(\n          (group) => {\n            const rawSeries =\n              Array.isArray(\n                group?.series\n              )\n                ? group.series\n                : [];\n\n            const ttftPoints =\n              rawSeries\n                .map(\n                  (point) => ({\n                    ts:\n                      Number(\n                        point?.ts\n                      ),\n                    value:\n                      Number(\n                        point?.avg_ttft_ms\n                      ),\n                  })\n                )\n                .filter(\n                  (point) =>\n                    Number.isFinite(\n                      point.ts\n                    ) &&\n                    Number.isFinite(\n                      point.value\n                    ) &&\n                    point.value > 0\n                )\n                .sort(\n                  (a, b) =>\n                    a.ts - b.ts\n                );\n\n            const latencyPoints =\n              rawSeries\n                .map(\n                  (point) => ({\n                    ts:\n                      Number(\n                        point?.ts\n                      ),\n                    value:\n                      Number(\n                        point?.avg_latency_ms\n                      ),\n                  })\n                )\n                .filter(\n                  (point) =>\n                    Number.isFinite(\n                      point.ts\n                    ) &&\n                    Number.isFinite(\n                      point.value\n                    ) &&\n                    point.value >= 0\n                )\n                .sort(\n                  (a, b) =>\n                    a.ts - b.ts\n                );\n\n            return {\n              group:\n                String(\n                  group?.group ||\n                  \"default\"\n                ),\n              avgTtft:\n                Number(\n                  group?.avg_ttft_ms\n                ),\n              avgLatency:\n                Number(\n                  group?.avg_latency_ms\n                ),\n              successRate:\n                Number(\n                  group?.success_rate\n                ),\n              avgTps:\n                Number(\n                  group?.avg_tps\n                ),\n              ttftPoints,\n              latencyPoints,\n            };\n          }\n        )\n        .filter(\n          (group) =>\n            group.ttftPoints.length ||\n            group.latencyPoints.length ||\n            Number.isFinite(\n              group.avgLatency\n            ) ||\n            Number.isFinite(\n              group.avgTps\n            ) ||\n            Number.isFinite(\n              group.successRate\n            )\n        );\n\n    const hasTtft =\n      prepared.some(\n        (group) =>\n          group.ttftPoints.some(\n            (point) =>\n              point.value > 0\n          )\n      );\n\n    return {\n      metric:\n        hasTtft\n          ? \"ttft\"\n          : \"latency\",\n      label:\n        hasTtft\n          ? \"平均首 Token 延迟\"\n          : \"平均延迟\",\n      groups:\n        prepared.map(\n          (group) => ({\n            ...group,\n            points:\n              hasTtft\n                ? group.ttftPoints\n                : group.latencyPoints,\n          })\n        ),\n    };\n  };\n\n\n\n  const finiteMetric = (\n    value\n  ) => {\n    if (\n      value === null ||\n      value === undefined ||\n      value === \"\"\n    ) {\n      return null;\n    }\n\n    const n =\n      Number(value);\n\n    return Number.isFinite(n)\n      ? n\n      : null;\n  };\n\n\n  const summarizePerfResult = (\n    perf\n  ) => {\n    const rawGroups =\n      Array.isArray(\n        perf?.data?.groups\n      )\n        ? perf.data.groups\n        : [];\n\n    const groups =\n      rawGroups\n        .map(\n          (group) => ({\n            success:\n              finiteMetric(\n                group?.success_rate\n              ),\n\n            latency:\n              finiteMetric(\n                group?.avg_latency_ms\n              ),\n\n            ttft:\n              finiteMetric(\n                group?.avg_ttft_ms\n              ),\n\n            tps:\n              finiteMetric(\n                group?.avg_tps\n              ),\n\n            requestCount:\n              finiteMetric(\n                group?.request_count ??\n                group?.count ??\n                group?.requests\n              ),\n          })\n        );\n\n    const weightedAverage =\n      (key) => {\n        const weighted =\n          groups.filter(\n            (group) =>\n              group[key] !== null &&\n              group.requestCount !== null &&\n              group.requestCount > 0\n          );\n\n        if (weighted.length) {\n          const denominator =\n            weighted.reduce(\n              (sum, group) =>\n                sum +\n                group.requestCount,\n              0\n            );\n\n          if (denominator > 0) {\n            return (\n              weighted.reduce(\n                (sum, group) =>\n                  sum +\n                  group[key] *\n                  group.requestCount,\n                0\n              ) /\n              denominator\n            );\n          }\n        }\n\n        const values =\n          groups\n            .map(\n              (group) =>\n                group[key]\n            )\n            .filter(\n              (value) =>\n                value !== null\n            );\n\n        if (!values.length) {\n          return null;\n        }\n\n        return (\n          values.reduce(\n            (sum, value) =>\n              sum + value,\n            0\n          ) /\n          values.length\n        );\n      };\n\n    const success =\n      weightedAverage(\n        \"success\"\n      );\n\n    const latency =\n      weightedAverage(\n        \"latency\"\n      );\n\n    const ttft =\n      weightedAverage(\n        \"ttft\"\n      );\n\n    const tps =\n      weightedAverage(\n        \"tps\"\n      );\n\n    const hasData =\n      success !== null ||\n      latency !== null ||\n      ttft !== null ||\n      tps !== null;\n\n    return {\n      hasData,\n      success,\n      latency,\n      ttft,\n      tps,\n      groupCount:\n        groups.length,\n    };\n  };\n\n\n  const perfChartHTML = (\n    perf\n  ) => {\n    const trend =\n      perfTrendData(\n        perf\n      );\n\n    if (\n      !trend.groups.length\n    ) {\n      return `\n        <section class=\"perf-trend-section\">\n          <div class=\"perf-trend-head\">\n            <div>\n              <div class=\"perf-trend-title\">\n                延迟趋势（最近 24 小时）\n              </div>\n              <div class=\"perf-trend-subtitle\">\n                平均首 Token 延迟\n              </div>\n            </div>\n\n            <span class=\"perf-trend-source\">\n              New API\n            </span>\n          </div>\n\n          <div class=\"perf-chart-empty\">\n            当前模型暂无可用的 24 小时趋势数据。\n          </div>\n        </section>\n      `;\n    }\n\n    const palette = [\n      \"#2563eb\",\n      \"#d946ef\",\n      \"#10b981\",\n      \"#f59e0b\",\n      \"#ef4444\",\n      \"#8b5cf6\",\n    ];\n\n    const groupsWithPoints =\n      trend.groups.filter(\n        (group) =>\n          group.points.length\n      );\n\n    const allPoints =\n      groupsWithPoints\n        .flatMap(\n          (group) =>\n            group.points\n        );\n\n    if (!allPoints.length) {\n      return `\n        <section class=\"perf-trend-section\">\n          <div class=\"perf-trend-head\">\n            <div>\n              <div class=\"perf-trend-title\">\n                延迟趋势（最近 24 小时）\n              </div>\n              <div class=\"perf-trend-subtitle\">\n                ${esc(trend.label)}\n              </div>\n            </div>\n\n            <span class=\"perf-trend-source\">\n              New API\n            </span>\n          </div>\n\n          <div class=\"perf-chart-empty\">\n            当前模型有性能汇总，但暂无可绘制的时间序列。\n          </div>\n        </section>\n      `;\n    }\n\n    const minTs =\n      Math.min(\n        ...allPoints.map(\n          (point) =>\n            point.ts\n        )\n      );\n\n    const maxTs =\n      Math.max(\n        ...allPoints.map(\n          (point) =>\n            point.ts\n        )\n      );\n\n    const rawMax =\n      Math.max(\n        ...allPoints.map(\n          (point) =>\n            point.value\n        )\n      );\n\n    const yMax =\n      perfNiceMax(\n        rawMax * 1.08\n      );\n\n    const width =\n      376;\n\n    const height =\n      174;\n\n    const left =\n      46;\n\n    const right =\n      8;\n\n    const top =\n      10;\n\n    const bottom =\n      23;\n\n    const plotW =\n      width -\n      left -\n      right;\n\n    const plotH =\n      height -\n      top -\n      bottom;\n\n    const x =\n      (ts) => {\n        if (\n          maxTs === minTs\n        ) {\n          return (\n            left +\n            plotW / 2\n          );\n        }\n\n        return (\n          left +\n          (\n            (ts - minTs) /\n            (maxTs - minTs)\n          ) *\n          plotW\n        );\n      };\n\n    const y =\n      (value) =>\n        top +\n        plotH -\n        (\n          Math.max(\n            0,\n            value\n          ) /\n          yMax\n        ) *\n        plotH;\n\n    const gridRatios =\n      [0.25, 0.5, 0.75, 1];\n\n    const grid =\n      gridRatios\n        .map(\n          (ratio) => {\n            const value =\n              yMax * ratio;\n\n            const py =\n              y(value);\n\n            return `\n              <line\n                class=\"perf-chart-grid\"\n                x1=\"${left}\"\n                x2=\"${width - right}\"\n                y1=\"${py.toFixed(1)}\"\n                y2=\"${py.toFixed(1)}\"\n              ></line>\n\n              <text\n                class=\"perf-chart-axis-text\"\n                x=\"${left - 6}\"\n                y=\"${(py + 3).toFixed(1)}\"\n                text-anchor=\"end\"\n              >${esc(perfFormatMs(value))}</text>\n            `;\n          }\n        )\n        .join(\"\");\n\n    const lines =\n      groupsWithPoints\n        .map(\n          (group, index) => {\n            const color =\n              palette[\n                index %\n                palette.length\n              ];\n\n            const points =\n              group.points\n                .map(\n                  (point) => ({\n                    ...point,\n                    px:\n                      x(point.ts),\n                    py:\n                      y(point.value),\n                  })\n                );\n\n            const path =\n              points\n                .map(\n                  (point, pointIndex) =>\n                    (\n                      pointIndex === 0\n                        ? \"M\"\n                        : \"L\"\n                    ) +\n                    point.px.toFixed(1) +\n                    \" \" +\n                    point.py.toFixed(1)\n                )\n                .join(\" \");\n\n            const dots =\n              points\n                .map(\n                  (point) => `\n                    <circle\n                      class=\"perf-chart-point\"\n                      cx=\"${point.px.toFixed(1)}\"\n                      cy=\"${point.py.toFixed(1)}\"\n                      r=\"2.6\"\n                      fill=\"${color}\"\n                    >\n                      <title>\n                        ${esc(group.group)} · ${esc(perfFormatMs(point.value))}\n                      </title>\n                    </circle>\n                  `\n                )\n                .join(\"\");\n\n            return `\n              ${\n                points.length >= 2\n                  ? `\n                    <path\n                      class=\"perf-chart-line\"\n                      d=\"${path}\"\n                      stroke=\"${color}\"\n                    ></path>\n                  `\n                  : \"\"\n              }\n\n              ${dots}\n            `;\n          }\n        )\n        .join(\"\");\n\n    const legend =\n      trend.groups\n        .map(\n          (group, index) => `\n            <span class=\"perf-legend-item\">\n              <span\n                class=\"perf-legend-dot\"\n                style=\"background:${palette[index % palette.length]}\"\n              ></span>\n              ${esc(group.group)}\n            </span>\n          `\n        )\n        .join(\"\");\n\n\n\n    return `\n      <section class=\"perf-trend-section\">\n        <div class=\"perf-trend-head\">\n          <div>\n            <div class=\"perf-trend-title\">\n              延迟趋势（最近 24 小时）\n            </div>\n            <div class=\"perf-trend-subtitle\">\n              ${esc(trend.label)}\n            </div>\n          </div>\n\n          <span class=\"perf-trend-source\">\n            New API 原生性能数据\n          </span>\n        </div>\n\n        ${\n          trend.groups.length > 1\n            ? `\n              <div class=\"perf-legend\">\n                ${legend}\n              </div>\n            `\n            : \"\"\n        }\n\n        <div class=\"perf-chart-shell\">\n          <svg\n            class=\"perf-chart-svg\"\n            viewBox=\"0 0 ${width} ${height}\"\n            role=\"img\"\n            aria-label=\"最近 24 小时延迟趋势\"\n          >\n            ${grid}\n\n            <text\n              class=\"perf-chart-axis-text\"\n              x=\"${left}\"\n              y=\"${height - 5}\"\n              text-anchor=\"start\"\n            >24h 前</text>\n\n            <text\n              class=\"perf-chart-axis-text\"\n              x=\"${width - right}\"\n              y=\"${height - 5}\"\n              text-anchor=\"end\"\n            >现在</text>\n\n            ${lines}\n          </svg>\n        </div>\n      </section>\n    `;\n  };\n\n\n  const detailLoadingContent = (\n    item\n  ) => {\n    const provider =\n      item.provider &&\n      item.provider !== \"其他\"\n        ? item.provider\n        : \"\";\n\n    return `\n      <div class=\"detail-surface detail-loading\">\n\n        <div class=\"detail-top\">\n\n          <header class=\"detail-header\">\n            <div class=\"detail-identity\">\n\n              <div class=\"detail-icon\">\n                ${nativeIconHTML(item)}\n              </div>\n\n              <div class=\"detail-name-wrap\">\n                <h2 class=\"detail-name\">\n                  ${esc(item.name)}\n                </h2>\n\n                ${\n                  provider\n                    ? `<div class=\"detail-provider\">${esc(provider)}</div>`\n                    : \"\"\n                }\n              </div>\n            </div>\n\n            <button\n              type=\"button\"\n              class=\"detail-close detail-pop-close\"\n              aria-label=\"关闭详情\"\n            >\n              <svg\n                viewBox=\"0 0 24 24\"\n                fill=\"none\"\n                stroke=\"currentColor\"\n                stroke-width=\"1.8\"\n                aria-hidden=\"true\"\n              >\n                <path d=\"M18 6 6 18\"></path>\n                <path d=\"m6 6 12 12\"></path>\n              </svg>\n            </button>\n          </header>\n\n          <div class=\"detail-tabs-wrap\">\n            <nav class=\"detail-tabs\" aria-label=\"模型详情加载中\">\n\n              <span class=\"detail-tab-ui loading-tab\" aria-current=\"true\">\n                <svg\n                  viewBox=\"0 0 24 24\"\n                  fill=\"none\"\n                  stroke=\"currentColor\"\n                  stroke-width=\"1.8\"\n                  aria-hidden=\"true\"\n                >\n                  <circle cx=\"12\" cy=\"12\" r=\"9\"></circle>\n                  <path d=\"M12 11v5\"></path>\n                  <path d=\"M12 8h.01\"></path>\n                </svg>\n                概览\n              </span>\n\n              <span class=\"detail-tab-ui loading-tab\">\n                <svg\n                  viewBox=\"0 0 24 24\"\n                  fill=\"none\"\n                  stroke=\"currentColor\"\n                  stroke-width=\"1.8\"\n                  aria-hidden=\"true\"\n                >\n                  <path d=\"M4 12h3l2-5 4 10 2-5h5\"></path>\n                </svg>\n                性能\n              </span>\n\n              <span class=\"detail-tab-ui loading-tab\">\n                <svg\n                  viewBox=\"0 0 24 24\"\n                  fill=\"none\"\n                  stroke=\"currentColor\"\n                  stroke-width=\"1.8\"\n                  aria-hidden=\"true\"\n                >\n                  <path d=\"m8 9-4 3 4 3\"></path>\n                  <path d=\"m16 9 4 3-4 3\"></path>\n                  <path d=\"m14 5-4 14\"></path>\n                </svg>\n                API\n              </span>\n            </nav>\n          </div>\n        </div>\n\n        <div class=\"detail-body\">\n          <div class=\"loading-panel\">\n            <div class=\"loading-spinner\" aria-hidden=\"true\"></div>\n\n            <div class=\"loading-copy\">\n              <strong>正在加载模型资料</strong>\n              <span>模型列表和调用信息已就绪，资料匹配正在后台完成。</span>\n            </div>\n          </div>\n        </div>\n\n      </div>\n    `;\n  };\n\n\n\n\n  const sourceSummaryHTML = (\n    sources\n  ) => {\n    if (\n      !Array.isArray(sources) ||\n      !sources.length\n    ) {\n      return \"\";\n    }\n\n    const seen =\n      new Set();\n\n    const entries =\n      sources\n        .map(\n          (source) => {\n            const rawName =\n              String(\n                source?.name ||\n                \"来源\"\n              ).trim();\n\n            const shortName =\n              rawName\n                .replace(\n                  /\\s*\\/api\\/pricing$/i,\n                  \"\"\n                )\n                .replace(\n                  /\\s+Models API$/i,\n                  \"\"\n                )\n                .replace(\n                  /\\s+model cost map$/i,\n                  \"\"\n                );\n\n            const key =\n              shortName.toLowerCase();\n\n            if (\n              seen.has(key)\n            ) {\n              return null;\n            }\n\n            seen.add(key);\n\n            return {\n              name:\n                shortName,\n\n              url:\n                safeExternalURL(\n                  source?.url\n                ),\n\n              title:\n                [\n                  source?.kind,\n                  source?.note,\n                ]\n                  .filter(Boolean)\n                  .join(\" · \"),\n            };\n          }\n        )\n        .filter(Boolean);\n\n    return `\n      <div class=\"overview-source-summary\">\n        <span class=\"overview-source-summary-label\">\n          数据来源\n        </span>\n\n        ${entries\n          .map(\n            (entry) =>\n              entry.url\n                ? `\n                  <a\n                    class=\"overview-source-chip\"\n                    href=\"${esc(entry.url)}\"\n                    target=\"_blank\"\n                    rel=\"noopener noreferrer\"\n                    title=\"${esc(entry.title || entry.name)}\"\n                  >${esc(entry.name)}</a>\n                `\n                : `\n                  <span\n                    class=\"overview-source-chip\"\n                    title=\"${esc(entry.title || entry.name)}\"\n                  >${esc(entry.name)}</span>\n                `\n          )\n          .join(\"\")}\n      </div>\n    `;\n  };\n\n\n  const overviewPanelHTML = (\n    item,\n    result\n  ) => {\n    const resolved =\n      result?.resolution || {};\n\n    const metadata =\n      result?.metadata || null;\n\n    const sources =\n      Array.isArray(\n        result?.sources\n      )\n        ? result.sources\n        : [];\n\n    const fieldSources =\n      result?.field_sources || {};\n\n    const grid =\n      metadataGrid(\n        metadata,\n        fieldSources\n      );\n\n    const capabilities =\n      capabilityList(\n        metadata\n      );\n\n    const description =\n      metadata?.description ||\n      item.model?.description ||\n      \"\";\n\n    const externalMatched =\n      Boolean(\n        metadata &&\n        result?.match\n      );\n\n    const byKey =\n      new Map(\n        grid.map(\n          (entry) => [\n            entry.key,\n            entry,\n          ]\n        )\n      );\n\n    const primary =\n      [\n        \"context\",\n        \"input_limit\",\n        \"output_limit\",\n      ]\n        .map(\n          (key) =>\n            byKey.get(key)\n        )\n        .filter(Boolean);\n\n    /*\n     * Model information uses 3 columns.\n     * Related values are ordered together.\n     */\n    const info =\n      [\n        \"knowledge\",\n        \"release_date\",\n        \"last_updated\",\n        \"input_modalities\",\n        \"output_modalities\",\n        \"tokenizer\",\n        \"open_weights\",\n        \"deprecation_date\",\n      ]\n        .map(\n          (key) =>\n            byKey.get(key)\n        )\n        .filter(Boolean);\n\n    const inferred =\n      resolved.match_basis ===\n        \"provider_anchor_suffix\";\n\n    const confirmed =\n      resolved.match_basis ===\n        \"explicit_mapping\" ||\n      resolved.method ===\n        \"New API model_mapping\" ||\n      resolved.method ===\n        \"MODEL_METADATA_ALIASES_JSON\";\n\n    const matchBadge =\n      inferred\n        ? `\n          <span\n            class=\"match-badge\"\n            data-tone=\"inferred\"\n            title=\"通过已知模型族字段匹配；未使用仅版本号或尾部字符串的模糊匹配。\"\n          >推断匹配</span>\n        `\n        : (\n            confirmed\n              ? `\n                <span\n                  class=\"match-badge\"\n                  data-tone=\"confirmed\"\n                  title=\"该匹配来自显式模型映射。\"\n                >已确认映射</span>\n              `\n              : (\n                  externalMatched\n                    ? `\n                      <span\n                        class=\"match-badge\"\n                        data-tone=\"exact\"\n                        title=\"外部资料与模型名称完成严格匹配。\"\n                      >精确匹配</span>\n                    `\n                    : \"\"\n                )\n          );\n\n    const chunk =\n      (\n        values,\n        size\n      ) => {\n        const rows = [];\n\n        for (\n          let index = 0;\n          index < values.length;\n          index += size\n        ) {\n          rows.push(\n            values.slice(\n              index,\n              index + size\n            )\n          );\n        }\n\n        return rows;\n      };\n\n    const infoRows =\n      chunk(\n        info,\n        3\n      );\n\n    const capabilityRows =\n      chunk(\n        capabilities,\n        3\n      );\n\n    const metadataModel =\n      String(\n        metadata?.id || \"\"\n      ).trim();\n\n    const metadataProvider =\n      metadataProviderName(\n        metadata\n      );\n\n    const cellHTML =\n      (\n        entry,\n        emphasis = false\n      ) => `\n        <div\n          class=\"info-cell${\n            emphasis\n              ? \" info-cell--key\"\n              : \"\"\n          }\"\n          ${\n            entry?.source\n              ? `title=\"来源：${esc(entry.source)}\"`\n              : \"\"\n          }\n        >\n          <span class=\"info-label\">\n            ${esc(entry?.label || \"\")}\n          </span>\n\n          <span class=\"info-value\">\n            ${esc(entry?.value || \"\")}\n          </span>\n        </div>\n      `;\n\n    return `\n      <div class=\"overview-view\">\n\n        <section class=\"overview-summary\">\n\n          <div class=\"overview-title-row\">\n            ${\n              metadata?.name\n                ? `\n                  <h3 class=\"overview-title\">\n                    ${esc(metadata.name)}\n                  </h3>\n                `\n                : \"\"\n            }\n\n            ${matchBadge}\n          </div>\n\n          <div class=\"overview-description\">\n            ${\n              description\n                ? esc(description)\n                : \"当前没有可靠的额外模型描述。\"\n            }\n          </div>\n\n          ${\n            metadataModel\n              ? `\n                <div class=\"metadata-map\">\n                  <span class=\"metadata-label\">\n                    资料模型\n                  </span>\n\n                  <code class=\"metadata-id\">\n                    ${esc(metadataModel)}\n                  </code>\n\n                  ${\n                    metadataProvider\n                      ? `\n                        <span class=\"provider-badge\">\n                          ${esc(metadataProvider)}\n                        </span>\n                      `\n                      : \"\"\n                  }\n                </div>\n              `\n              : \"\"\n          }\n\n        </section>\n\n\n        ${\n          resolved.ambiguous\n            ? `\n              <div class=\"detail-warning\">\n                本站模型映射存在多个上游候选；外部规格只能作为候选参考。\n              </div>\n            `\n            : \"\"\n        }\n\n\n        ${\n          externalMatched\n            ? `\n              ${\n                primary.length\n                  ? `\n                    <section class=\"detail-section\">\n                      <h3 class=\"detail-section-title\">\n                        关键规格\n                      </h3>\n\n                      <div class=\"info-panel\">\n                        <div class=\"info-row info-row--${primary.length}\">\n                          ${primary\n                            .map(\n                              (entry) =>\n                                cellHTML(\n                                  entry,\n                                  true\n                                )\n                            )\n                            .join(\"\")}\n                        </div>\n                      </div>\n                    </section>\n                  `\n                  : \"\"\n              }\n\n\n              ${\n                infoRows.length\n                  ? `\n                    <section class=\"detail-section\">\n                      <h3 class=\"detail-section-title\">\n                        模型信息\n                      </h3>\n\n                      <div class=\"info-panel\">\n                        ${infoRows\n                          .map(\n                            (row) => `\n                              <div class=\"info-row info-row--${row.length}\">\n                                ${row\n                                  .map(\n                                    (entry) =>\n                                      cellHTML(\n                                        entry\n                                      )\n                                  )\n                                  .join(\"\")}\n                              </div>\n                            `\n                          )\n                          .join(\"\")}\n                      </div>\n                    </section>\n                  `\n                  : \"\"\n              }\n\n\n              ${\n                capabilityRows.length\n                  ? `\n                    <section class=\"detail-section\">\n                      <h3 class=\"detail-section-title\">\n                        能力\n                      </h3>\n\n                      <div class=\"info-panel\">\n                        ${capabilityRows\n                          .map(\n                            (row) => `\n                              <div class=\"info-row info-row--${row.length}\">\n                                ${row\n                                  .map(\n                                    (value) => `\n                                      <div class=\"info-cell info-cell--capability\">\n                                        <span\n                                          class=\"capability-check\"\n                                          aria-hidden=\"true\"\n                                        >✓</span>\n\n                                        <span class=\"info-value\">\n                                          ${esc(value)}\n                                        </span>\n                                      </div>\n                                    `\n                                  )\n                                  .join(\"\")}\n                              </div>\n                            `\n                          )\n                          .join(\"\")}\n                      </div>\n                    </section>\n                  `\n                  : \"\"\n              }\n            `\n            : `\n              <div class=\"detail-warning\">\n                没有找到可可靠对应的外部模型规格，因此不展示猜测出来的上下文、输出上限或能力。\n              </div>\n            `\n        }\n\n\n        ${sourceSummaryHTML(sources)}\n\n      </div>\n    `;\n  };\n\n\n  const perfRateClass = (\n    value\n  ) => {\n    const n =\n      Number(value);\n\n    if (!Number.isFinite(n)) {\n      return \"\";\n    }\n\n    if (n >= 99) {\n      return \"perf-rate--good\";\n    }\n\n    if (n >= 95) {\n      return \"perf-rate--warn\";\n    }\n\n    return \"perf-rate--bad\";\n  };\n\n\n  const performancePanelHTML = (\n    perfResult\n  ) => {\n    const trend =\n      perfTrendData(\n        perfResult\n      );\n\n    const groups =\n      trend.groups || [];\n\n    const summary =\n      summarizePerfResult(\n        perfResult\n      );\n\n    const avgTps =\n      summary.tps;\n\n    const avgLatency =\n      summary.latency;\n\n    const avgSuccess =\n      summary.success;\n\n    return `\n      <div class=\"perf-primary-grid\">\n\n        <div class=\"perf-primary-card\">\n          <div class=\"perf-primary-label\">TPS</div>\n          <div class=\"perf-primary-value\">\n            ${\n              Number.isFinite(avgTps)\n                ? esc(avgTps.toFixed(2) + \" t/s\")\n                : \"—\"\n            }\n          </div>\n          <div class=\"perf-primary-note\">\n            持续每秒 Token 数\n          </div>\n        </div>\n\n\n        <div class=\"perf-primary-card\">\n          <div class=\"perf-primary-label\">平均延迟</div>\n          <div class=\"perf-primary-value\">\n            ${\n              Number.isFinite(avgLatency)\n                ? esc(perfFormatMs(avgLatency))\n                : \"—\"\n            }\n          </div>\n          <div class=\"perf-primary-note\">\n            最近 24 小时\n          </div>\n        </div>\n\n\n        <div class=\"perf-primary-card\">\n          <div class=\"perf-primary-label\">成功率</div>\n          <div\n            class=\"perf-primary-value ${perfRateClass(avgSuccess)}\"\n          >\n            ${\n              Number.isFinite(avgSuccess)\n                ? esc(avgSuccess.toFixed(2) + \"%\")\n                : \"—\"\n            }\n          </div>\n          <div class=\"perf-primary-note\">\n            最近 24 小时\n          </div>\n        </div>\n\n      </div>\n\n\n      ${\n        groups.length\n          ? `\n            <h3 class=\"overview-section-title\">\n              各分组性能\n            </h3>\n\n            <div class=\"perf-group-table\">\n\n              <div class=\"perf-group-row perf-group-row--head\">\n                <div>分组</div>\n                <div>TPS</div>\n                <div>平均首 Token 延迟</div>\n                <div>平均延迟</div>\n                <div>成功率</div>\n              </div>\n\n              ${groups\n                .map(\n                  (group) => `\n                    <div class=\"perf-group-row\">\n                      <div class=\"perf-group-name\">\n                        ${esc(group.group)}\n                      </div>\n\n                      <div>\n                        ${\n                          Number.isFinite(group.avgTps)\n                            ? esc(group.avgTps.toFixed(2) + \" t/s\")\n                            : \"—\"\n                        }\n                      </div>\n\n                      <div>\n                        ${\n                          Number.isFinite(group.avgTtft)\n                            ? esc(perfFormatMs(group.avgTtft))\n                            : \"—\"\n                        }\n                      </div>\n\n                      <div>\n                        ${\n                          Number.isFinite(group.avgLatency)\n                            ? esc(perfFormatMs(group.avgLatency))\n                            : \"—\"\n                        }\n                      </div>\n\n                      <div class=\"${perfRateClass(group.successRate)}\">\n                        ${\n                          Number.isFinite(group.successRate)\n                            ? esc(group.successRate.toFixed(1) + \"%\")\n                            : \"—\"\n                        }\n                      </div>\n                    </div>\n                  `\n                )\n                .join(\"\")}\n\n            </div>\n          `\n          : \"\"\n      }\n\n\n      ${perfChartHTML(perfResult)}\n    `;\n  };\n\n\n  const metadataProviderName = (\n    metadata\n  ) => {\n    const idPrefix =\n      String(\n        metadata?.id || \"\"\n      )\n        .split(\"/\")[0]\n        .trim()\n        .toLowerCase();\n\n    const provider =\n      idPrefix ||\n      String(\n        metadata?.provider || \"\"\n      )\n        .trim()\n        .toLowerCase();\n\n    const names = {\n      nvidia: \"NVIDIA\",\n      xai: \"xAI\",\n      openai: \"OpenAI\",\n      anthropic: \"Anthropic\",\n      google: \"Google\",\n      deepseek: \"DeepSeek\",\n      meta: \"Meta\",\n      mistralai: \"Mistral\",\n      mistral: \"Mistral\",\n      qwen: \"Qwen\",\n      alibaba: \"Alibaba\",\n      moonshotai: \"Moonshot\",\n      moonshot: \"Moonshot\",\n      cohere: \"Cohere\",\n      microsoft: \"Microsoft\",\n      amazon: \"Amazon\",\n      perplexity: \"Perplexity\",\n    };\n\n    if (!provider) {\n      return \"\";\n    }\n\n    return (\n      names[provider] ||\n      provider\n        .replace(\n          /[_-]+/g,\n          \" \"\n        )\n        .replace(\n          /\\b\\w/g,\n          (char) =>\n            char.toUpperCase()\n        )\n    );\n  };\n\n\n  const inferAPIMode = (\n    item,\n    metadata\n  ) => {\n    const mode =\n      String(\n        metadata?.mode || \"\"\n      ).trim();\n\n    if (mode) {\n      return modeLabel(mode);\n    }\n\n    const endpoints =\n      Array.isArray(\n        item?.endpoints\n      )\n        ? item.endpoints\n        : [];\n\n    const text =\n      endpoints\n        .join(\" \")\n        .toLowerCase();\n\n    if (\n      text.includes(\n        \"embedding\"\n      )\n    ) {\n      return \"embedding\";\n    }\n\n    if (\n      text.includes(\n        \"rerank\"\n      )\n    ) {\n      return \"rerank\";\n    }\n\n    if (\n      text.includes(\n        \"image\"\n      )\n    ) {\n      return \"image\";\n    }\n\n    if (\n      text.includes(\n        \"audio\"\n      )\n    ) {\n      return \"audio\";\n    }\n\n    if (\n      text.includes(\n        \"chat\"\n      ) ||\n      text.includes(\n        \"completion\"\n      )\n    ) {\n      return \"chat\";\n    }\n\n    return \"—\";\n  };\n\n\n  /* ---------------------------------------------------------\n     New API original Pricing API-tab logic\n     --------------------------------------------------------- */\n\n  const newApiHashStringToSeed = (\n    input\n  ) => {\n    let hash =\n      5381;\n\n    for (\n      let index = 0;\n      index < input.length;\n      index++\n    ) {\n      hash =\n        (\n          hash * 33\n        ) ^\n        input.charCodeAt(\n          index\n        );\n    }\n\n    return Math.abs(\n      hash | 0\n    );\n  };\n\n\n  const newApiSeededRandom = (\n    seed\n  ) => {\n    let state =\n      (\n        seed || 1\n      ) >>> 0;\n\n    return () => {\n      state =\n        (\n          state *\n            1664525 +\n          1013904223\n        ) >>> 0;\n\n      return (\n        state /\n        0x100000000\n      );\n    };\n  };\n\n\n  const newApiProfileByName = (\n    name\n  ) => {\n    const n =\n      String(\n        name || \"\"\n      ).toLowerCase();\n\n    if (\n      /embed|rerank/.test(n)\n    ) {\n      return \"embedding\";\n    }\n\n    if (\n      /image|sora|veo|kling|pika|jimeng|dalle|imagen/.test(\n        n\n      )\n    ) {\n      return \"image\";\n    }\n\n    if (\n      /whisper|tts|voice|audio/.test(\n        n\n      )\n    ) {\n      return \"audio\";\n    }\n\n    if (\n      /o1|o3|o4|reasoning|thinking|deepseek-r/.test(\n        n\n      )\n    ) {\n      return \"reasoning\";\n    }\n\n    if (\n      /flash|haiku|mini|small|nano|fast/.test(\n        n\n      )\n    ) {\n      return \"fast\";\n    }\n\n    if (\n      /gpt-5|opus|ultra|405|70b/.test(\n        n\n      )\n    ) {\n      return \"large\";\n    }\n\n    return \"standard\";\n  };\n\n\n  const newApiApiCategoryOf = (\n    item\n  ) => {\n    const profile =\n      newApiProfileByName(\n        item?.name || \"\"\n      );\n\n    if (\n      profile ===\n        \"embedding\" ||\n      profile ===\n        \"reasoning\"\n    ) {\n      return profile;\n    }\n\n    if (\n      profile ===\n        \"image\"\n    ) {\n      return (\n        /sora|veo|kling|pika|video|wan-|hunyuanvideo/i\n          .test(\n            item?.name || \"\"\n          )\n          ? \"video\"\n          : \"image\"\n      );\n    }\n\n    return \"chat\";\n  };\n\n\n  const NEW_API_COMMON_CHAT_PARAMS = [\n    {\n      name: \"temperature\",\n      type: \"number\",\n      defaultValue: 1,\n      range: \"0 ~ 2\",\n      description:\n        \"采样温度；越低输出越确定。\",\n    },\n    {\n      name: \"top_p\",\n      type: \"number\",\n      defaultValue: 1,\n      range: \"0 ~ 1\",\n      description:\n        \"核采样累计概率质量。\",\n    },\n    {\n      name: \"max_tokens\",\n      type: \"integer\",\n      range: \">= 1\",\n      description:\n        \"响应中允许生成的最大 Token 数。\",\n    },\n    {\n      name: \"frequency_penalty\",\n      type: \"number\",\n      defaultValue: 0,\n      range: \"-2 ~ 2\",\n      description:\n        \"对高频重复 Token 施加惩罚。\",\n    },\n    {\n      name: \"presence_penalty\",\n      type: \"number\",\n      defaultValue: 0,\n      range: \"-2 ~ 2\",\n      description:\n        \"鼓励模型引入新的主题。\",\n    },\n    {\n      name: \"stop\",\n      type: \"array\",\n      description:\n        \"最多 4 个用于停止生成的字符串。\",\n    },\n    {\n      name: \"seed\",\n      type: \"integer\",\n      description:\n        \"尽力实现确定性采样的随机种子。\",\n    },\n    {\n      name: \"n\",\n      type: \"integer\",\n      defaultValue: 1,\n      range: \">= 1\",\n      description:\n        \"要生成的候选结果数量。\",\n    },\n    {\n      name: \"stream\",\n      type: \"boolean\",\n      defaultValue: false,\n      description:\n        \"通过 Server-Sent Events 流式返回 Token。\",\n    },\n    {\n      name: \"response_format\",\n      type: \"object\",\n      description:\n        \"强制 JSON 对象或符合 Schema 的结构化输出。\",\n    },\n    {\n      name: \"tools\",\n      type: \"array\",\n      description:\n        \"模型可以调用的工具 / 函数声明。\",\n    },\n    {\n      name: \"tool_choice\",\n      type: \"string\",\n      enumValues: [\n        \"auto\",\n        \"none\",\n        \"required\",\n      ],\n      description:\n        \"工具选择策略或指定工具名称。\",\n    },\n    {\n      name: \"logprobs\",\n      type: \"boolean\",\n      defaultValue: false,\n      description:\n        \"返回每个 Token 的对数概率。\",\n    },\n    {\n      name: \"top_logprobs\",\n      type: \"integer\",\n      range: \"0 ~ 20\",\n      description:\n        \"返回的每 Token 最高对数概率数量。\",\n    },\n    {\n      name: \"logit_bias\",\n      type: \"object\",\n      description:\n        \"按 Token 设置的 Logit Bias 映射。\",\n    },\n    {\n      name: \"user\",\n      type: \"string\",\n      description:\n        \"用于滥用监控的终端用户标识。\",\n    },\n  ];\n\n\n  const NEW_API_REASONING_PARAMS = [\n    {\n      name: \"reasoning_effort\",\n      type: \"enum\",\n      enumValues: [\n        \"low\",\n        \"medium\",\n        \"high\",\n      ],\n      defaultValue: \"medium\",\n      description:\n        \"控制模型在回答前投入的推理强度。\",\n    },\n    {\n      name: \"max_completion_tokens\",\n      type: \"integer\",\n      range: \">= 1\",\n      description:\n        \"包括隐藏推理 Token 在内的最大完成 Token 数。\",\n    },\n    {\n      name: \"stop\",\n      type: \"array\",\n      description:\n        \"最多 4 个用于停止生成的字符串。\",\n    },\n    {\n      name: \"seed\",\n      type: \"integer\",\n      description:\n        \"尽力实现确定性采样的随机种子。\",\n    },\n    {\n      name: \"stream\",\n      type: \"boolean\",\n      defaultValue: false,\n      description:\n        \"通过 Server-Sent Events 流式返回 Token。\",\n    },\n    {\n      name: \"response_format\",\n      type: \"object\",\n      description:\n        \"强制 JSON 对象或符合 Schema 的结构化输出。\",\n    },\n    {\n      name: \"tools\",\n      type: \"array\",\n      description:\n        \"模型可以调用的工具 / 函数声明。\",\n    },\n    {\n      name: \"tool_choice\",\n      type: \"string\",\n      enumValues: [\n        \"auto\",\n        \"none\",\n        \"required\",\n      ],\n      description:\n        \"工具选择策略或指定工具名称。\",\n    },\n    {\n      name: \"user\",\n      type: \"string\",\n      description:\n        \"用于滥用监控的终端用户标识。\",\n    },\n  ];\n\n\n  const NEW_API_EMBEDDING_PARAMS = [\n    {\n      name: \"input\",\n      type: \"string\",\n      required: true,\n      description:\n        \"需要生成向量的文本或文本数组。\",\n    },\n    {\n      name: \"dimensions\",\n      type: \"integer\",\n      range: \">= 1\",\n      description:\n        \"将 Embedding 截断到指定维度。\",\n    },\n    {\n      name: \"encoding_format\",\n      type: \"enum\",\n      enumValues: [\n        \"float\",\n        \"base64\",\n      ],\n      defaultValue: \"float\",\n      description:\n        \"Embedding 向量的传输编码格式。\",\n    },\n    {\n      name: \"user\",\n      type: \"string\",\n      description:\n        \"用于滥用监控的终端用户标识。\",\n    },\n  ];\n\n\n  const NEW_API_IMAGE_PARAMS = [\n    {\n      name: \"prompt\",\n      type: \"string\",\n      required: true,\n      description:\n        \"对目标图像的文本描述。\",\n    },\n    {\n      name: \"size\",\n      type: \"enum\",\n      enumValues: [\n        \"256x256\",\n        \"512x512\",\n        \"1024x1024\",\n        \"1024x1792\",\n        \"1792x1024\",\n      ],\n      defaultValue: \"1024x1024\",\n      description:\n        \"输出图像尺寸。\",\n    },\n    {\n      name: \"quality\",\n      type: \"enum\",\n      enumValues: [\n        \"standard\",\n        \"hd\",\n      ],\n      defaultValue: \"standard\",\n      description:\n        \"生成质量预设。\",\n    },\n    {\n      name: \"style\",\n      type: \"enum\",\n      enumValues: [\n        \"vivid\",\n        \"natural\",\n      ],\n      defaultValue: \"vivid\",\n      description:\n        \"生成图像的审美风格。\",\n    },\n    {\n      name: \"n\",\n      type: \"integer\",\n      defaultValue: 1,\n      range: \"1 ~ 10\",\n      description:\n        \"要生成的图像数量。\",\n    },\n    {\n      name: \"response_format\",\n      type: \"enum\",\n      enumValues: [\n        \"url\",\n        \"b64_json\",\n      ],\n      defaultValue: \"url\",\n      description:\n        \"生成图像的返回方式。\",\n    },\n  ];\n\n\n  const NEW_API_VIDEO_PARAMS = [\n    {\n      name: \"prompt\",\n      type: \"string\",\n      required: true,\n      description:\n        \"对目标视频的文本描述。\",\n    },\n    {\n      name: \"duration\",\n      type: \"integer\",\n      range: \"1 ~ 60\",\n      description:\n        \"视频时长，单位为秒。\",\n    },\n    {\n      name: \"aspect_ratio\",\n      type: \"enum\",\n      enumValues: [\n        \"16:9\",\n        \"9:16\",\n        \"1:1\",\n      ],\n      defaultValue: \"16:9\",\n      description:\n        \"输出视频宽高比。\",\n    },\n    {\n      name: \"fps\",\n      type: \"integer\",\n      range: \"8 ~ 60\",\n      defaultValue: 24,\n      description:\n        \"每秒帧数。\",\n    },\n  ];\n\n\n  const buildNewApiSupportedParameters = (\n    item\n  ) => {\n    const category =\n      newApiApiCategoryOf(\n        item\n      );\n\n    if (\n      category ===\n        \"reasoning\"\n    ) {\n      return (\n        NEW_API_REASONING_PARAMS\n      );\n    }\n\n    if (\n      category ===\n        \"embedding\"\n    ) {\n      return (\n        NEW_API_EMBEDDING_PARAMS\n      );\n    }\n\n    if (\n      category ===\n        \"image\"\n    ) {\n      return (\n        NEW_API_IMAGE_PARAMS\n      );\n    }\n\n    if (\n      category ===\n        \"video\"\n    ) {\n      return (\n        NEW_API_VIDEO_PARAMS\n      );\n    }\n\n    return (\n      NEW_API_COMMON_CHAT_PARAMS\n    );\n  };\n\n\n  const buildNewApiRateLimits = (\n    item\n  ) => {\n    const groups =\n      (\n        Array.isArray(\n          item?.groups\n        )\n          ? item.groups\n          : []\n      )\n        .filter(\n          (group) =>\n            group &&\n            group !==\n              \"auto\"\n        );\n\n    const targets =\n      groups.length > 0\n        ? groups\n        : [\n            \"default\",\n          ];\n\n    const category =\n      newApiApiCategoryOf(\n        item\n      );\n\n    const baseSeed =\n      newApiHashStringToSeed(\n        String(\n          item?.name || \"\"\n        ) +\n        \":rl\"\n      );\n\n    const isHeavy =\n      category ===\n        \"image\" ||\n      category ===\n        \"video\";\n\n    const isLight =\n      category ===\n        \"embedding\";\n\n    const baseRpm =\n      isHeavy\n        ? 60\n        : (\n            isLight\n              ? 5000\n              : 500\n          );\n\n    const baseTpm =\n      isHeavy\n        ? 0\n        : (\n            isLight\n              ? 1000000\n              : 200000\n          );\n\n    const baseRpd =\n      isHeavy\n        ? 1000\n        : (\n            isLight\n              ? 100000\n              : 10000\n          );\n\n    return targets\n      .slice()\n      .sort(\n        (a, b) =>\n          a.localeCompare(b)\n      )\n      .map(\n        (group) => {\n          const rand =\n            newApiSeededRandom(\n              baseSeed ^\n              newApiHashStringToSeed(\n                group\n              )\n            );\n\n          const tier =\n            0.6 +\n            rand() *\n              1.4;\n\n          return {\n            group,\n\n            rpm:\n              Math.round(\n                (\n                  baseRpm *\n                  tier\n                ) /\n                10\n              ) *\n              10,\n\n            tpm:\n              baseTpm === 0\n                ? 0\n                : (\n                    Math.round(\n                      (\n                        baseTpm *\n                        tier\n                      ) /\n                      1000\n                    ) *\n                    1000\n                  ),\n\n            rpd:\n              Math.round(\n                (\n                  baseRpd *\n                  tier\n                ) /\n                100\n              ) *\n              100,\n          };\n        }\n      );\n  };\n\n\n  const formatNewApiRateLimit = (\n    value\n  ) => {\n    if (\n      value <= 0\n    ) {\n      return \"—\";\n    }\n\n    if (\n      value >=\n        1000000\n    ) {\n      return (\n        (\n          value /\n          1000000\n        ).toFixed(1) +\n        \"M\"\n      );\n    }\n\n    if (\n      value >=\n        1000\n    ) {\n      return (\n        (\n          value /\n          1000\n        ).toFixed(\n          value >=\n            10000\n            ? 0\n            : 1\n        ) +\n        \"K\"\n      );\n    }\n\n    return Number(\n      value\n    ).toLocaleString();\n  };\n\n\n  const parameterDefaultRangeHTML = (\n    parameter\n  ) => {\n    if (\n      parameter\n        .defaultValue !==\n      undefined\n    ) {\n      return `\n        <span class=\"param-default-mark\">=</span>\n        <code class=\"param-inline-code\">\n          ${esc(\n            String(\n              parameter\n                .defaultValue\n            )\n          )}\n        </code>\n        ${\n          parameter.range\n            ? `\n              <span class=\"param-range\">\n                ${esc(parameter.range)}\n              </span>\n            `\n            : \"\"\n        }\n      `;\n    }\n\n    if (\n      parameter.range\n    ) {\n      return `\n        <code class=\"param-range-code\">\n          ${esc(parameter.range)}\n        </code>\n      `;\n    }\n\n    if (\n      Array.isArray(\n        parameter.enumValues\n      ) &&\n      parameter\n        .enumValues\n        .length\n    ) {\n      return `\n        <div class=\"param-enums\">\n          ${parameter\n            .enumValues\n            .map(\n              (value) => `\n                <code class=\"param-inline-code\">\n                  ${esc(value)}\n                </code>\n              `\n            )\n            .join(\"\")}\n        </div>\n      `;\n    }\n\n    return `\n      <span class=\"param-empty\">\n        —\n      </span>\n    `;\n  };\n\n\n  const apiPanelHTML = (\n    item,\n    result\n  ) => {\n    const resolved =\n      result?.resolution || {};\n\n    const metadata =\n      result?.metadata || {};\n\n    const endpoints =\n      Array.isArray(\n        item.endpoints\n      )\n        ? item.endpoints\n        : [];\n\n    const modelType =\n      inferAPIMode(\n        item,\n        metadata\n      );\n\n    /*\n     * Same deterministic display logic as New API's\n     * original buildRateLimits().\n     */\n    const rateLimits =\n      buildNewApiRateLimits(\n        item\n      );\n\n    const supportedParameters =\n      buildNewApiSupportedParameters(\n        item\n      );\n\n    return `\n      <div class=\"api-view\">\n\n        <section class=\"detail-section\">\n          <h3 class=\"detail-section-title\">\n            调用信息\n          </h3>\n\n          <div class=\"info-panel\">\n\n            <div class=\"api-line\">\n              <span class=\"api-label\">\n                调用 ID\n              </span>\n\n              <code class=\"api-code\">\n                ${esc(item.name)}\n              </code>\n\n              <button\n                type=\"button\"\n                class=\"api-copy\"\n                data-copy-detail=\"${esc(item.name)}\"\n              >复制</button>\n            </div>\n\n\n            ${\n              resolved.resolved_model &&\n              resolved.resolved_model !==\n                item.name\n                ? `\n                  <div class=\"api-line\">\n                    <span class=\"api-label\">\n                      上游模型\n                    </span>\n\n                    <code class=\"api-code\">\n                      ${esc(resolved.resolved_model)}\n                    </code>\n\n                    <button\n                      type=\"button\"\n                      class=\"api-copy\"\n                      data-copy-detail=\"${esc(resolved.resolved_model)}\"\n                    >复制</button>\n                  </div>\n                `\n                : \"\"\n            }\n\n\n            <div class=\"api-line\">\n              <span class=\"api-label\">\n                模型类型\n              </span>\n\n              <code class=\"api-code\">\n                ${esc(modelType)}\n              </code>\n\n              <span></span>\n            </div>\n\n          </div>\n        </section>\n\n\n        <section class=\"detail-section\">\n          <h3 class=\"detail-section-title\">\n            支持端点\n          </h3>\n\n          <div class=\"info-panel\">\n            ${\n              endpoints.length\n                ? `\n                  <div class=\"api-endpoints\">\n                    ${endpoints\n                      .map(\n                        (endpoint) => `\n                          <code class=\"api-endpoint\">\n                            ${esc(endpoint)}\n                          </code>\n                        `\n                      )\n                      .join(\"\")}\n                  </div>\n                `\n                : `\n                  <div class=\"empty-line\">\n                    暂无端点信息\n                  </div>\n                `\n            }\n          </div>\n        </section>\n\n\n        <section class=\"detail-section\">\n          <h3 class=\"detail-section-title\">\n            速率限制\n          </h3>\n\n          <div class=\"rate-table\">\n\n            <div class=\"rate-row rate-row--head\">\n              <span>分组</span>\n              <span>RPM</span>\n              <span>TPM</span>\n              <span>RPD</span>\n            </div>\n\n            ${rateLimits\n              .map(\n                (limit) => `\n                  <div class=\"rate-row\">\n                    <code class=\"rate-group\">\n                      ${esc(limit.group)}\n                    </code>\n\n                    <span>\n                      ${esc(\n                        formatNewApiRateLimit(\n                          limit.rpm\n                        )\n                      )}\n                    </span>\n\n                    <span>\n                      ${esc(\n                        formatNewApiRateLimit(\n                          limit.tpm\n                        )\n                      )}\n                    </span>\n\n                    <span>\n                      ${esc(\n                        formatNewApiRateLimit(\n                          limit.rpd\n                        )\n                      )}\n                    </span>\n                  </div>\n                `\n              )\n              .join(\"\")}\n\n          </div>\n\n          <p class=\"rate-note\">\n            RPM = 每分钟请求数，TPM = 每分钟 Token 数，RPD = 每日请求数。限制按令牌分组生效。\n          </p>\n        </section>\n\n\n        <details\n          class=\"params-panel\"\n          data-default-collapsed=\"true\"\n        >\n          <summary class=\"params-summary\">\n            <span class=\"params-title\">\n              支持的参数\n            </span>\n\n            <span class=\"params-meta\">\n              ${supportedParameters.length} 项\n\n              <span\n                class=\"params-chevron\"\n                aria-hidden=\"true\"\n              >⌄</span>\n            </span>\n          </summary>\n\n          <div class=\"params-body\">\n            <div class=\"param-table-wrap\">\n              <div class=\"param-table\">\n\n                <div class=\"param-row param-row--head\">\n                  <span>参数</span>\n                  <span>类型</span>\n                  <span>默认值 / 范围</span>\n                  <span>说明信息</span>\n                </div>\n\n                ${supportedParameters\n                  .map(\n                    (parameter) => `\n                      <div class=\"param-row\">\n\n                        <div class=\"param-name-wrap\">\n                          <code class=\"param-name\">\n                            ${esc(parameter.name)}\n                          </code>\n\n                          ${\n                            parameter.required\n                              ? `\n                                <span class=\"param-required\">\n                                  必填\n                                </span>\n                              `\n                              : \"\"\n                          }\n                        </div>\n\n                        <div>\n                          <span class=\"param-type\">\n                            ${esc(parameter.type)}\n                          </span>\n                        </div>\n\n                        <div class=\"param-default\">\n                          ${parameterDefaultRangeHTML(\n                            parameter\n                          )}\n                        </div>\n\n                        <div class=\"param-description\">\n                          ${esc(parameter.description)}\n                        </div>\n\n                      </div>\n                    `\n                  )\n                  .join(\"\")}\n\n              </div>\n            </div>\n          </div>\n\n        </details>\n\n      </div>\n    `;\n  };\n\n\n  const lazyPerformanceHTML = () => `\n    <div\n      class=\"perf-lazy-state\"\n      data-perf-lazy=\"true\"\n    >\n      切换到性能后加载 24h 详细数据\n    </div>\n  `;\n\n\n  const ensurePerformancePanel = async (\n    popover\n  ) => {\n    if (!popover) {\n      return;\n    }\n\n    const panel =\n      popover.querySelector(\n        '[data-detail-panel=\"performance\"]'\n      );\n\n    if (\n      !panel ||\n      panel.getAttribute(\n        \"data-perf-state\"\n      ) === \"loaded\" ||\n      panel.getAttribute(\n        \"data-perf-state\"\n      ) === \"loading\"\n    ) {\n      return;\n    }\n\n    const modelName =\n      popover.getAttribute(\n        \"data-model\"\n      ) || \"\";\n\n    const item =\n      state.itemByName.get(\n        modelName\n      );\n\n    if (!item) {\n      return;\n    }\n\n    panel.setAttribute(\n      \"data-perf-state\",\n      \"loading\"\n    );\n\n    panel.innerHTML = `\n      <div class=\"perf-lazy-state\">\n        正在加载 24h 详细性能…\n      </div>\n    `;\n\n    const perf =\n      await loadPerfMetrics(\n        item\n      );\n\n    if (\n      popover.getAttribute(\n        \"data-model\"\n      ) !== modelName\n    ) {\n      return;\n    }\n\n    panel.innerHTML =\n      performancePanelHTML(\n        perf\n      );\n\n    panel.setAttribute(\n      \"data-perf-state\",\n      \"loaded\"\n    );\n  };\n\n\n  const detailPopoverContent = (\n    item,\n    result,\n    perfResult\n  ) => {\n    const provider =\n      item.provider &&\n      item.provider !== \"其他\"\n        ? item.provider\n        : \"\";\n\n    return `\n      <div class=\"detail-surface\">\n\n        <div class=\"detail-top\">\n\n          <header class=\"detail-header\">\n\n            <div class=\"detail-identity\">\n\n              <div class=\"detail-icon\">\n                ${nativeIconHTML(item)}\n              </div>\n\n              <div class=\"detail-name-wrap\">\n\n                <h2 class=\"detail-name\">\n                  ${esc(item.name)}\n                </h2>\n\n                ${\n                  provider\n                    ? `\n                      <div class=\"detail-provider\">\n                        ${esc(provider)}\n                      </div>\n                    `\n                    : \"\"\n                }\n\n              </div>\n\n            </div>\n\n\n            <button\n              type=\"button\"\n              class=\"detail-close detail-pop-close\"\n              aria-label=\"关闭详情\"\n            >\n              <svg\n                viewBox=\"0 0 24 24\"\n                fill=\"none\"\n                stroke=\"currentColor\"\n                stroke-width=\"1.8\"\n                aria-hidden=\"true\"\n              >\n                <path d=\"M18 6 6 18\"></path>\n                <path d=\"m6 6 12 12\"></path>\n              </svg>\n            </button>\n\n          </header>\n\n\n          <div class=\"detail-tabs-wrap\">\n\n            <nav\n              class=\"detail-tabs\"\n              role=\"tablist\"\n              aria-label=\"模型详情\"\n            >\n\n              <button\n                type=\"button\"\n                class=\"detail-tab detail-tab-ui\"\n                data-detail-tab=\"overview\"\n                role=\"tab\"\n                aria-selected=\"true\"\n              >\n                <svg\n                  viewBox=\"0 0 24 24\"\n                  fill=\"none\"\n                  stroke=\"currentColor\"\n                  stroke-width=\"1.8\"\n                  aria-hidden=\"true\"\n                >\n                  <circle cx=\"12\" cy=\"12\" r=\"9\"></circle>\n                  <path d=\"M12 11v5\"></path>\n                  <path d=\"M12 8h.01\"></path>\n                </svg>\n                概览\n              </button>\n\n\n              <button\n                type=\"button\"\n                class=\"detail-tab detail-tab-ui\"\n                data-detail-tab=\"performance\"\n                role=\"tab\"\n                aria-selected=\"false\"\n              >\n                <svg\n                  viewBox=\"0 0 24 24\"\n                  fill=\"none\"\n                  stroke=\"currentColor\"\n                  stroke-width=\"1.8\"\n                  aria-hidden=\"true\"\n                >\n                  <path d=\"M4 12h3l2-5 4 10 2-5h5\"></path>\n                </svg>\n                性能\n              </button>\n\n\n              <button\n                type=\"button\"\n                class=\"detail-tab detail-tab-ui\"\n                data-detail-tab=\"api\"\n                role=\"tab\"\n                aria-selected=\"false\"\n              >\n                <svg\n                  viewBox=\"0 0 24 24\"\n                  fill=\"none\"\n                  stroke=\"currentColor\"\n                  stroke-width=\"1.8\"\n                  aria-hidden=\"true\"\n                >\n                  <path d=\"m8 9-4 3 4 3\"></path>\n                  <path d=\"m16 9 4 3-4 3\"></path>\n                  <path d=\"m14 5-4 14\"></path>\n                </svg>\n                API\n              </button>\n\n            </nav>\n\n          </div>\n\n        </div>\n\n\n        <div class=\"detail-body\">\n\n          <section\n            class=\"detail-tab-panel\"\n            data-detail-panel=\"overview\"\n            role=\"tabpanel\"\n          >\n            ${overviewPanelHTML(item, result)}\n          </section>\n\n\n          <section\n            class=\"detail-tab-panel\"\n            data-detail-panel=\"performance\"\n            data-perf-state=\"${perfResult ? \"loaded\" : \"idle\"}\"\n            role=\"tabpanel\"\n            hidden\n          >\n            ${\n              perfResult\n                ? performancePanelHTML(perfResult)\n                : lazyPerformanceHTML()\n            }\n          </section>\n\n\n          <section\n            class=\"detail-tab-panel\"\n            data-detail-panel=\"api\"\n            role=\"tabpanel\"\n            hidden\n          >\n            ${apiPanelHTML(item, result)}\n          </section>\n\n        </div>\n\n      </div>\n    `;\n  };\n\n\n  const detailMetaCache =\n    new Map();\n\n  const DETAIL_META_SESSION_PREFIX =\n    \"moss-pricing-v91-meta:\";\n\n  const DETAIL_META_SESSION_TTL =\n    30 * 60 * 1000;\n\n\n  const loadDetailMetadata = async (\n    item\n  ) => {\n    if (\n      detailMetaCache.has(\n        item.name\n      )\n    ) {\n      return detailMetaCache.get(\n        item.name\n      );\n    }\n\n    const sessionKey =\n      DETAIL_META_SESSION_PREFIX +\n      item.name;\n\n    const cached =\n      readSessionCache(\n        sessionKey,\n        DETAIL_META_SESSION_TTL\n      );\n\n    if (cached) {\n      const promise =\n        Promise.resolve(\n          cached\n        );\n\n      detailMetaCache.set(\n        item.name,\n        promise\n      );\n\n      return promise;\n    }\n\n    const promise =\n      fetch(\n        \"/pricing-meta?model=\" +\n        encodeURIComponent(\n          item.name\n        ),\n        {\n          method: \"GET\",\n          credentials: \"same-origin\",\n          headers: {\n            Accept: \"application/json\",\n          },\n          cache: \"default\",\n        }\n      )\n        .then(\n          async (response) => {\n            const json =\n              await response.json();\n\n            if (!response.ok) {\n              throw new Error(\n                json?.message ||\n                \"metadata lookup failed\"\n              );\n            }\n\n            writeSessionCache(\n              sessionKey,\n              json\n            );\n\n            return json;\n          }\n        )\n        .catch(\n          (error) => ({\n            success: false,\n            message:\n              error?.message ||\n              \"metadata lookup failed\",\n            sources: [],\n          })\n        );\n\n    detailMetaCache.set(\n      item.name,\n      promise\n    );\n\n    return promise;\n  };\n\n\n\n\n  const closeDetailPopover = (root) => {\n    const popover =\n      root.querySelector(\n        \".model-detail-popover\"\n      );\n\n    if (!popover) {\n      return;\n    }\n\n    popover.setAttribute(\n      \"data-open\",\n      \"false\"\n    );\n\n    popover.setAttribute(\n      \"aria-hidden\",\n      \"true\"\n    );\n\n    popover.removeAttribute(\n      \"data-detail-request\"\n    );\n\n    if (\n      typeof popover.close ===\n        \"function\" &&\n      popover.open\n    ) {\n      try {\n        popover.close();\n      } catch {}\n    }\n\n    root\n      .querySelectorAll(\n        \".detail-btn[aria-expanded='true']\"\n      )\n      .forEach(\n        (button) =>\n          button.setAttribute(\n            \"aria-expanded\",\n            \"false\"\n          )\n      );\n  };\n\n\n  const getHeaderSafeTop = () => {\n    const header =\n      document.querySelector(\n        \"header\"\n      );\n\n    if (!header) {\n      return 76;\n    }\n\n    const rect =\n      header.getBoundingClientRect();\n\n    return Math.max(\n      12,\n      Math.ceil(rect.bottom) + 12\n    );\n  };\n\n\n  const positionDetailPopover = (\n    button,\n    popover\n  ) => {\n    if (!popover) {\n      return;\n    }\n\n    const safeTop =\n      getHeaderSafeTop();\n\n    /*\n     * CSS performs all centering.\n     * JS only supplies the dynamic boundary below New API's header.\n     */\n    popover.style.setProperty(\n      \"--moss-dialog-safe-top\",\n      Math.round(\n        safeTop\n      ) + \"px\"\n    );\n\n    /*\n     * Defensive cleanup for users upgrading from V7.3 in a SPA shell:\n     * remove any manual coordinates that may have been written earlier.\n     */\n    popover.style.removeProperty(\n      \"left\"\n    );\n\n    popover.style.removeProperty(\n      \"right\"\n    );\n\n    popover.style.removeProperty(\n      \"top\"\n    );\n\n    popover.style.removeProperty(\n      \"bottom\"\n    );\n\n    popover.style.removeProperty(\n      \"width\"\n    );\n\n    popover.style.removeProperty(\n      \"max-height\"\n    );\n  };\n\n\n  const openDetailPopover = async (\n    root,\n    button,\n    item\n  ) => {\n    const popover =\n      root.querySelector(\n        \".model-detail-popover\"\n      );\n\n    if (!popover) {\n      return;\n    }\n\n    const alreadyOpen =\n      button.getAttribute(\n        \"aria-expanded\"\n      ) === \"true\";\n\n    closeDetailPopover(root);\n\n    if (alreadyOpen) {\n      return;\n    }\n\n    const requestToken =\n      String(Date.now()) +\n      \":\" +\n      Math.random()\n        .toString(36)\n        .slice(2);\n\n    popover.setAttribute(\n      \"data-detail-request\",\n      requestToken\n    );\n\n    popover.innerHTML =\n      detailLoadingContent(item);\n\n    popover.setAttribute(\n      \"data-active-tab\",\n      \"overview\"\n    );\n    popover.setAttribute(\n      \"data-model\",\n      item.name\n    );\n\n\n    if (\n      typeof popover.showModal ===\n        \"function\" &&\n      !popover.open\n    ) {\n      try {\n        popover.showModal();\n      } catch {}\n    }\n\n    popover.setAttribute(\n      \"data-open\",\n      \"true\"\n    );\n\n    popover.setAttribute(\n      \"aria-hidden\",\n      \"false\"\n    );\n\n    button.setAttribute(\n      \"aria-expanded\",\n      \"true\"\n    );\n\n    positionDetailPopover(\n      button,\n      popover\n    );\n\n    const result =\n      await loadDetailMetadata(\n        item\n      );\n\n    const perfResult =\n      null;\n\n    if (\n      button.getAttribute(\n        \"aria-expanded\"\n      ) !== \"true\" ||\n      popover.getAttribute(\n        \"data-open\"\n      ) !== \"true\" ||\n      popover.getAttribute(\n        \"data-detail-request\"\n      ) !== requestToken ||\n      popover.getAttribute(\n        \"data-model\"\n      ) !== item.name\n    ) {\n      return;\n    }\n\n    popover.innerHTML =\n      detailPopoverContent(\n        item,\n        result,\n        perfResult\n      );\n\n    popover.setAttribute(\n      \"data-active-tab\",\n      \"overview\"\n    );\n\n    popover\n      .querySelectorAll(\n        'details.params-panel[data-default-collapsed=\"true\"]'\n      )\n      .forEach(\n        (details) => {\n          details.open = false;\n        }\n      );\n\n    positionDetailPopover(\n      button,\n      popover\n    );\n  };\n\n\n\n\n  /* ---------------------------------------------------------\n     row / status\n     --------------------------------------------------------- */\n\n  const normalizeIconKey = (\n    value\n  ) =>\n    String(value || \"\")\n      .trim()\n      .toLowerCase()\n      .replace(/[\\s_/:.]+/g, \"-\")\n      .replace(/[^a-z0-9-]+/g, \"\")\n      .replace(/-+/g, \"-\")\n      .replace(/^-|-$/g, \"\");\n\n\n  const brandIconInfo = (\n    item\n  ) => {\n    const normalizeHint =\n      (value) =>\n        normalizeIconKey(\n          value\n        )\n          .replace(\n            /-(?:color|text|combine)$/i,\n            \"\"\n          );\n\n    const explicitHint =\n      normalizeHint(\n        item.iconHint\n      );\n\n    const provider =\n      normalizeIconKey(\n        item.provider\n      );\n\n    const name =\n      normalizeIconKey(\n        item.name\n      );\n\n    /*\n     * MODEL BRAND FIRST.\n     *\n     * Examples:\n     * cerebras/gemma-4-31b\n     *   -> Gemma logo, not Cerebras logo\n     *\n     * cerebras/gpt-oss-120b\n     *   -> OpenAI/GPT logo, not Cerebras logo\n     *\n     * tianyi_deepseek_v4\n     *   -> DeepSeek logo\n     */\n    const modelRules = [\n      [/(^|-)agnes(-|$)/, \"agnes\", \"AG\"],\n      [/(^|-)deepseek(-|$)/, \"deepseek\", \"DS\"],\n      [/(^|-)gpt(-|$)|(^|-)chatgpt(-|$)|(^|-)o[134](-|$)|(^|-)openai(-|$)/, \"openai\", \"OA\"],\n      [/(^|-)claude(-|$)|(^|-)anthropic(-|$)/, \"claude\", \"CL\"],\n      [/(^|-)gemini(-|$)/, \"gemini\", \"GM\"],\n      [/(^|-)gemma(-|$)/, \"gemma\", \"GE\"],\n      [/(^|-)qwen(-|$)|(^|-)qwq(-|$)|(^|-)qvq(-|$)|(^|-)tongyi(-|$)/, \"qwen\", \"QW\"],\n      [/(^|-)glm(-|$)|(^|-)chatglm(-|$)/, \"chatglm\", \"GL\"],\n      [/(^|-)kimi(-|$)|(^|-)moonshot(-|$)/, \"kimi\", \"KM\"],\n      [/(^|-)minimax(-|$)|(^|-)abab(-|$)/, \"minimax\", \"MM\"],\n      [/(^|-)grok(-|$)|(^|-)xai(-|$)/, \"grok\", \"GR\"],\n      [/(^|-)llama(-|$)/, \"meta\", \"ME\"],\n      [/(^|-)mistral(-|$)|(^|-)mixtral(-|$)|(^|-)ministral(-|$)/, \"mistral\", \"MI\"],\n      [/(^|-)doubao(-|$)|(^|-)seed(-|$)/, \"doubao\", \"DB\"],\n      [/(^|-)ernie(-|$)|(^|-)wenxin(-|$)/, \"wenxin\", \"BD\"],\n      [/(^|-)mimo(-|$)/, \"mimo\", \"XM\"],\n      [/(^|-)nemotron(-|$)/, \"nvidia\", \"NV\"],\n      [/(^|-)yi(-|$)/, \"yi\", \"YI\"],\n      [/(^|-)command(-|$)|(^|-)cohere(-|$)/, \"cohere\", \"CO\"],\n      [/(^|-)hunyuan(-|$)/, \"hunyuan\", \"HY\"],\n    ];\n\n    for (\n      const [\n        pattern,\n        key,\n        short,\n      ]\n      of modelRules\n    ) {\n      if (\n        pattern.test(\n          name\n        )\n      ) {\n        return {\n          key,\n          short,\n          basis:\n            \"model\",\n        };\n      }\n    }\n\n    /*\n     * New API explicit icon/vendor hint is second priority.\n     * Use it only if the model name did not identify a family.\n     */\n    const hintRules = [\n      [/(^|-)agnes(-|$)/, \"agnes\", \"AG\"],\n      [/(^|-)deepseek(-|$)/, \"deepseek\", \"DS\"],\n      [/(^|-)openai(-|$)|(^|-)gpt(-|$)/, \"openai\", \"OA\"],\n      [/(^|-)claude(-|$)|(^|-)anthropic(-|$)/, \"claude\", \"CL\"],\n      [/(^|-)gemini(-|$)/, \"gemini\", \"GM\"],\n      [/(^|-)gemma(-|$)/, \"gemma\", \"GE\"],\n      [/(^|-)qwen(-|$)/, \"qwen\", \"QW\"],\n      [/(^|-)chatglm(-|$)|(^|-)glm(-|$)/, \"chatglm\", \"GL\"],\n      [/(^|-)kimi(-|$)|(^|-)moonshot(-|$)/, \"kimi\", \"KM\"],\n      [/(^|-)minimax(-|$)/, \"minimax\", \"MM\"],\n      [/(^|-)grok(-|$)|(^|-)xai(-|$)/, \"grok\", \"GR\"],\n      [/(^|-)meta(-|$)|(^|-)llama(-|$)/, \"meta\", \"ME\"],\n      [/(^|-)mistral(-|$)/, \"mistral\", \"MI\"],\n      [/(^|-)nvidia(-|$)|(^|-)nemotron(-|$)/, \"nvidia\", \"NV\"],\n    ];\n\n    for (\n      const [\n        pattern,\n        key,\n        short,\n      ]\n      of hintRules\n    ) {\n      if (\n        pattern.test(\n          explicitHint\n        )\n      ) {\n        return {\n          key,\n          short,\n          basis:\n            \"hint\",\n        };\n      }\n    }\n\n    /*\n     * PROVIDER / SERVING PLATFORM is fallback only.\n     * It must never override a recognizable model family.\n     */\n    const providerRules = [\n      [/(^|-)openai(-|$)/, \"openai\", \"OA\"],\n      [/(^|-)anthropic(-|$)/, \"anthropic\", \"AN\"],\n      [/(^|-)google(-|$)/, \"google\", \"GO\"],\n      [/(^|-)alibaba(-|$)/, \"qwen\", \"QW\"],\n      [/(^|-)zhipu(-|$)/, \"zhipu\", \"ZP\"],\n      [/(^|-)moonshot(-|$)/, \"kimi\", \"KM\"],\n      [/(^|-)minimax(-|$)/, \"minimax\", \"MM\"],\n      [/(^|-)xai(-|$)/, \"grok\", \"GR\"],\n      [/(^|-)meta(-|$)/, \"meta\", \"ME\"],\n      [/(^|-)mistral(-|$)/, \"mistral\", \"MI\"],\n      [/(^|-)bytedance(-|$)/, \"doubao\", \"DB\"],\n      [/(^|-)baidu(-|$)/, \"wenxin\", \"BD\"],\n      [/(^|-)xiaomi(-|$)/, \"mimo\", \"XM\"],\n      [/(^|-)cohere(-|$)/, \"cohere\", \"CO\"],\n      [/(^|-)tencent(-|$)/, \"hunyuan\", \"HY\"],\n      [/(^|-)nvidia(-|$)/, \"nvidia\", \"NV\"],\n      [/(^|-)cerebras(-|$)/, \"cerebras\", \"CB\"],\n      [/(^|-)groq(-|$)/, \"groq\", \"GQ\"],\n      [/(^|-)openrouter(-|$)/, \"openrouter\", \"OR\"],\n      [/(^|-)perplexity(-|$)/, \"perplexity\", \"PX\"],\n      [/(^|-)huggingface(-|$)/, \"huggingface\", \"HF\"],\n      [/(^|-)sambanova(-|$)/, \"sambanova\", \"SN\"],\n      [/(^|-)together(-|$)/, \"together\", \"TG\"],\n      [/(^|-)fireworks(-|$)/, \"fireworks\", \"FW\"],\n      [/(^|-)replicate(-|$)/, \"replicate\", \"RP\"],\n      [/(^|-)siliconflow(-|$)|(^|-)siliconcloud(-|$)/, \"siliconcloud\", \"SF\"],\n      [/(^|-)bedrock(-|$)|(^|-)aws(-|$)/, \"bedrock\", \"AW\"],\n      [/(^|-)azure(-|$)|(^|-)azureai(-|$)/, \"azureai\", \"AZ\"],\n    ];\n\n    for (\n      const [\n        pattern,\n        key,\n        short,\n      ]\n      of providerRules\n    ) {\n      if (\n        pattern.test(\n          provider\n        )\n      ) {\n        return {\n          key,\n          short,\n          basis:\n            \"provider\",\n        };\n      }\n    }\n\n    if (\n      explicitHint &&\n      ![\n        \"default\",\n        \"unknown\",\n        \"other\",\n        \"ai\",\n      ].includes(\n        explicitHint\n      )\n    ) {\n      return {\n        key:\n          explicitHint,\n\n        short:\n          explicitHint\n            .replace(\n              /[^a-z0-9]/g,\n              \"\"\n            )\n            .slice(0,2)\n            .toUpperCase() ||\n          \"AI\",\n\n        basis:\n          \"hint-raw\",\n      };\n    }\n\n    const short =\n      item.name\n        .replace(\n          /[^A-Za-z0-9]/g,\n          \"\"\n        )\n        .slice(0,2)\n        .toUpperCase() ||\n      \"AI\";\n\n    return {\n      key: \"\",\n      short,\n      basis:\n        \"fallback\",\n    };\n  };\n\n\n  const nativeIconHTML = (item) => {\n    if (\n      item.native.iconHTML\n    ) {\n      return `\n        <div\n          class=\"native-icon\"\n          data-icon-state=\"native\"\n        >\n          ${item.native.iconHTML}\n        </div>\n      `;\n    }\n\n    const brand =\n      brandIconInfo(\n        item\n      );\n\n    if (\n      brand.key\n    ) {\n      return `\n        <div\n          class=\"native-icon\"\n          data-icon-state=\"fallback\"\n          data-icon-brand=\"${esc(brand.key)}\"\n        >\n          <span\n            class=\"fallback-brand-badge\"\n            data-icon-fallback\n          >${esc(brand.short)}</span>\n\n          <img\n            class=\"fallback-brand-icon\"\n            src=\"/pricing-icon/${esc(brand.key)}.svg\"\n            alt=\"\"\n            loading=\"lazy\"\n            decoding=\"async\"\n            fetchpriority=\"low\"\n            data-loaded=\"false\"\n            onload=\"\n              this.setAttribute('data-loaded','true');\n              var fallback=this.previousElementSibling;\n              if(fallback){fallback.hidden=true;}\n              var host=this.parentElement;\n              if(host){host.setAttribute('data-icon-state','verified');}\n            \"\n            onerror=\"\n              var host=this.parentElement;\n              if(host){host.setAttribute('data-icon-state','fallback');}\n              this.remove();\n            \"\n          >\n        </div>\n      `;\n    }\n\n    return `\n      <div\n        class=\"native-icon\"\n        data-icon-state=\"fallback\"\n      >\n        <span\n          class=\"fallback-brand-badge\"\n          data-icon-fallback\n        >\n          ${esc(brand.short)}\n        </span>\n      </div>\n    `;\n  };\n\n\n  const statusClass = (success) => {\n    if (success === null) {\n      return \"\";\n    }\n\n    if (success >= 99) {\n      return \"status--good\";\n    }\n\n    if (success >= 95) {\n      return \"status--warn\";\n    }\n\n    return \"status--bad\";\n  };\n\n\n  const statusHTML = (item) => {\n    if (\n      item.perfState ===\n        \"idle\" ||\n      item.perfState ===\n        \"queued\" ||\n      item.perfState ===\n        \"loading\"\n    ) {\n      return `\n        <div class=\"status-loading\">\n          正在读取 24h 状态\n        </div>\n      `;\n    }\n\n    const summary =\n      item.perfSummary;\n\n    if (\n      !summary ||\n      !summary.hasData\n    ) {\n      return `\n        <div class=\"status-empty\">\n          暂无最近 24h 状态\n        </div>\n      `;\n    }\n\n    const successText =\n      summary.success !== null\n        ? (\n            summary.success\n              .toFixed(1) +\n            \"%\"\n          )\n        : \"—\";\n\n    return `\n      <div class=\"status-wrap ${statusClass(summary.success)}\">\n\n        <div class=\"status-main\">\n          <span class=\"status-dot\"></span>\n          <span class=\"status-title\">成功率</span>\n          <span class=\"status-success\">${esc(successText)}</span>\n        </div>\n\n        <div class=\"status-metrics\">\n          ${\n            summary.latency !== null\n              ? `<span>延迟 ${esc(perfFormatMs(summary.latency))}</span>`\n              : \"\"\n          }\n\n          ${\n            summary.tps !== null\n              ? `<span>吞吐量 ${esc(summary.tps.toFixed(2) + \" t/s\")}</span>`\n              : \"\"\n          }\n        </div>\n\n      </div>\n    `;\n  };\n\n\n  const metaHTML = (item) => {\n    const entries = [\n      ...item.groups.slice(0, 2),\n      ...item.tags.slice(0, 2),\n      ...item.endpoints.slice(0, 1),\n    ];\n\n    if (!entries.length) {\n      return `\n        <span class=\"meta-tag\">\n          ${esc(item.provider)}\n        </span>\n      `;\n    }\n\n    return entries\n      .map(\n        (value) =>\n          `<span class=\"meta-tag\">${esc(value)}</span>`\n      )\n      .join(\"\");\n  };\n\n\n  const rowHTML = (item) => `\n    <article\n      class=\"model-row\"\n      data-model=\"${esc(item.name)}\"\n    >\n\n      <div class=\"model-cell\">\n        <div class=\"model-identity\">\n\n          <div class=\"model-icon-wrap\">\n            ${nativeIconHTML(item)}\n          </div>\n\n          <div class=\"model-name-wrap\">\n            <span\n              class=\"model-name\"\n              title=\"${esc(item.name)}\"\n            >${esc(item.name)}</span>\n\n            ${\n              item.provider\n                ? `\n                  <div\n                    class=\"model-provider\"\n                    data-generic=\"${item.provider === \"其他\" ? \"true\" : \"false\"}\"\n                  >\n                    <span class=\"provider-name\">${esc(item.provider)}</span>\n                  </div>\n                `\n                : \"\"\n            }\n          </div>\n\n        </div>\n      </div>\n\n\n      <div\n        class=\"model-cell\"\n        data-status-model=\"${esc(item.name)}\"\n      >\n        ${statusHTML(item)}\n      </div>\n\n\n      <div class=\"model-cell meta-wrap\">\n        ${metaHTML(item)}\n      </div>\n\n\n      <div class=\"model-cell action-cell\">\n\n        <button\n          type=\"button\"\n          class=\"detail-btn\"\n          data-detail-model=\"${esc(item.name)}\"\n          aria-expanded=\"false\"\n        >\n          <span>详情</span>\n\n          <svg\n            viewBox=\"0 0 24 24\"\n            fill=\"none\"\n            stroke=\"currentColor\"\n            stroke-width=\"1.8\"\n            aria-hidden=\"true\"\n          >\n            <path d=\"m9 18 6-6-6-6\"></path>\n          </svg>\n        </button>\n\n\n        <button\n          type=\"button\"\n          class=\"copy-btn\"\n          data-copy-model=\"${esc(item.name)}\"\n          title=\"复制模型 ID\"\n          aria-label=\"复制模型 ID\"\n        >\n          <svg\n            viewBox=\"0 0 24 24\"\n            fill=\"none\"\n            stroke=\"currentColor\"\n            stroke-width=\"1.8\"\n            aria-hidden=\"true\"\n          >\n            <rect x=\"9\" y=\"9\" width=\"10\" height=\"10\" rx=\"2\"></rect>\n            <path d=\"M15 9V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2\"></path>\n          </svg>\n        </button>\n\n      </div>\n\n    </article>\n  `;\n\n\n  const statusCellForItem = (\n    root,\n    item\n  ) =>\n    [...root.querySelectorAll(\n      \"[data-status-model]\"\n    )]\n      .find(\n        (node) =>\n          node.getAttribute(\n            \"data-status-model\"\n          ) === item.name\n      ) ||\n    null;\n\n\n  const updateStatusCell = (\n    root,\n    item\n  ) => {\n    if (\n      !root ||\n      !root.isConnected\n    ) {\n      return;\n    }\n\n    const cell =\n      statusCellForItem(\n        root,\n        item\n      );\n\n    if (!cell) {\n      return;\n    }\n\n    cell.innerHTML =\n      statusHTML(item);\n  };\n\n\n  const renderRows = (root) => {\n    const items =\n      filteredItems();\n\n    const visibleSummary =\n      root.querySelector(\n        \".visible-summary-count\"\n      );\n\n    if (visibleSummary) {\n      visibleSummary.textContent =\n        state.items.length === items.length\n          ? String(items.length)\n          : String(items.length) + \" / \" + String(state.items.length);\n    }\n\n    const rows =\n      root.querySelector(\n        \".model-rows\"\n      );\n\n    if (!items.length) {\n      rows.innerHTML = `\n        <div class=\"state-box\">\n          没有匹配的模型。\n        </div>\n      `;\n\n      return;\n    }\n\n    rows.innerHTML =\n      items\n        .map(rowHTML)\n        .join(\"\");\n\n  };\n\n\n  /* ---------------------------------------------------------\n     drawer\n     --------------------------------------------------------- */\n\n\n\n  /* ---------------------------------------------------------\n     toast/copy\n     --------------------------------------------------------- */\n\n  const toast = (\n    root,\n    message\n  ) => {\n    root\n      .querySelector(\".toast\")\n      ?.remove();\n\n    const el =\n      document.createElement(\"div\");\n\n    el.className =\n      \"toast\";\n\n    el.textContent =\n      message;\n\n    root.appendChild(el);\n\n    setTimeout(\n      () => el.remove(),\n      1300\n    );\n  };\n\n\n  const copyText = async (\n    root,\n    text\n  ) => {\n    try {\n      await navigator.clipboard\n        .writeText(text);\n    } catch {\n      const area =\n        document.createElement(\n          \"textarea\"\n        );\n\n      area.value =\n        text;\n\n      area.style.position =\n        \"fixed\";\n\n      area.style.opacity =\n        \"0\";\n\n      document.body\n        .appendChild(area);\n\n      area.select();\n\n      try {\n        document.execCommand(\"copy\");\n      } catch {}\n\n      area.remove();\n    }\n\n    toast(\n      root,\n      \"已复制：\" + text\n    );\n  };\n\n\n  /* =========================================================\n     EVENTS\n     ========================================================= */\n\n  const bindEvents = (root) => {\n    const searchInput =\n      root.querySelector(\n        \".search-input\"\n      );\n\n\n    const filterPanel =\n      root.querySelector(\n        \".filter-panel\"\n      );\n\n    const mobileToggle =\n      root.querySelector(\n        \".mobile-filter-toggle\"\n      );\n\n\n    searchInput.addEventListener(\n      \"input\",\n      () => {\n        state.search =\n          searchInput.value\n            .trim()\n            .toLowerCase();\n\n        renderRows(root);\n      }\n    );\n\n\n\n\n    root.addEventListener(\n      \"pointerover\",\n      (event) => {\n        const detail =\n          event.target.closest(\n            \"[data-detail-model]\"\n          );\n\n        if (!detail) {\n          return;\n        }\n\n        const name =\n          detail.getAttribute(\n            \"data-detail-model\"\n          ) || \"\";\n\n        const item =\n          state.itemByName.get(\n            name\n          );\n\n        if (\n          item &&\n          !detailMetaCache.has(\n            item.name\n          )\n        ) {\n          void loadDetailMetadata(\n            item\n          );\n        }\n      },\n      {\n        passive: true,\n      }\n    );\n\n\n    root.addEventListener(\n      \"click\",\n      (event) => {\n\n        const sortTrigger = event.target.closest(\".sort-trigger\");\n\n        if (sortTrigger) {\n          const control = sortTrigger.closest(\".sort-control\");\n          const menu = control?.querySelector(\".sort-menu\");\n\n          if (control && menu) {\n            const open = control.getAttribute(\"data-sort-open\") === \"true\";\n            control.setAttribute(\"data-sort-open\", open ? \"false\" : \"true\");\n            sortTrigger.setAttribute(\"aria-expanded\", open ? \"false\" : \"true\");\n            menu.hidden = open;\n          }\n\n          return;\n        }\n\n        const sortOption = event.target.closest(\"[data-sort-value]\");\n\n        if (sortOption) {\n          state.sort = sortOption.getAttribute(\"data-sort-value\") || \"name-asc\";\n          updateSortControl(root);\n          closeSortMenu(root);\n          renderRows(root);\n          return;\n        }\n\n        if (!event.target.closest(\".sort-control\")) {\n          closeSortMenu(root);\n        }\n\n        const chip =\n          event.target.closest(\n            \".filter-chip\"\n          );\n\n        if (chip) {\n          const type =\n            chip.getAttribute(\n              \"data-filter-type\"\n            );\n\n          const value =\n            chip.getAttribute(\n              \"data-filter-value\"\n            ) || \"全部\";\n\n          if (type === \"group\") {\n            state.activeGroup =\n              value;\n          }\n\n          if (type === \"vendor\") {\n            state.activeVendor =\n              value;\n          }\n\n          if (type === \"tag\") {\n            state.activeTag =\n              value;\n          }\n\n          renderFilters(root);\n          renderRows(root);\n\n          return;\n        }\n\n\n        if (\n          event.target.closest(\n            \".reset-btn\"\n          )\n        ) {\n          state.activeGroup =\n            \"全部\";\n\n          state.activeVendor =\n            \"全部\";\n\n          state.activeTag =\n            \"全部\";\n\n          state.search = \"\";\n          state.sort =\n            \"name-asc\";\n\n          searchInput.value = \"\";\n\n          updateSortControl(root);\n          closeSortMenu(root);\n\n          renderFilters(root);\n          renderRows(root);\n\n          return;\n        }\n\n\n        const detail =\n          event.target.closest(\n            \"[data-detail-model]\"\n          );\n\n        if (detail) {\n          const name =\n            detail.getAttribute(\n              \"data-detail-model\"\n            ) || \"\";\n\n          const item =\n            state.itemByName.get(name);\n\n          if (item) {\n            openDetailPopover(\n              root,\n              detail,\n              item\n            );\n          }\n\n          return;\n        }\n\n\n        const detailTab =\n          event.target.closest(\n            \"[data-detail-tab]\"\n          );\n\n        if (detailTab) {\n          const tab =\n            detailTab.getAttribute(\n              \"data-detail-tab\"\n            );\n\n          const popover =\n            detailTab.closest(\n              \".model-detail-popover\"\n            );\n\n          if (\n            tab &&\n            popover\n          ) {\n            popover.setAttribute(\n              \"data-active-tab\",\n              tab\n            );\n\n            popover\n              .querySelectorAll(\n                \"[data-detail-tab]\"\n              )\n              .forEach(\n                (button) =>\n                  button.setAttribute(\n                    \"aria-selected\",\n                    button === detailTab\n                      ? \"true\"\n                      : \"false\"\n                  )\n              );\n\n            popover\n              .querySelectorAll(\n                \"[data-detail-panel]\"\n              )\n              .forEach(\n                (panel) => {\n                  panel.hidden =\n                    panel.getAttribute(\n                      \"data-detail-panel\"\n                    ) !== tab;\n                }\n              );\n\n            const detailBody =\n              popover.querySelector(\n                \".detail-body\"\n              );\n\n            if (detailBody) {\n              detailBody.scrollTop =\n                0;\n            }\n\n            if (\n              tab ===\n                \"performance\"\n            ) {\n              void ensurePerformancePanel(\n                popover\n              );\n            }\n\n            requestAnimationFrame(\n              () =>\n                positionDetailPopover(\n                  null,\n                  popover\n                )\n            );\n          }\n\n          return;\n        }\n\n\n        const detailCopy =\n          event.target.closest(\n            \"[data-copy-detail]\"\n          );\n\n        if (detailCopy) {\n          copyText(\n            root,\n            detailCopy.getAttribute(\n              \"data-copy-detail\"\n            ) || \"\"\n          );\n\n          return;\n        }\n\n\n\n        if (\n          event.target.closest(\n            \".detail-pop-close\"\n          )\n        ) {\n          closeDetailPopover(root);\n          return;\n        }\n\n\n        const openPopover =\n          root.querySelector(\n            \".model-detail-popover[data-open='true']\"\n          );\n\n        /*\n         * Native <dialog> backdrop clicks target the dialog itself.\n         * Close only when the pointer coordinates are outside the\n         * visible dialog rectangle.\n         */\n        if (\n          openPopover &&\n          event.target ===\n            openPopover\n        ) {\n          const rect =\n            openPopover\n              .getBoundingClientRect();\n\n          const outside =\n            event.clientX <\n              rect.left ||\n            event.clientX >\n              rect.right ||\n            event.clientY <\n              rect.top ||\n            event.clientY >\n              rect.bottom;\n\n          if (outside) {\n            closeDetailPopover(\n              root\n            );\n\n            return;\n          }\n        }\n\n        if (\n          openPopover &&\n          !event.target.closest(\n            \".model-detail-popover\"\n          )\n        ) {\n          closeDetailPopover(root);\n        }\n\n\n        const copy =\n          event.target.closest(\n            \"[data-copy-model]\"\n          );\n\n        if (copy) {\n          const name =\n            copy.getAttribute(\n              \"data-copy-model\"\n            ) || \"\";\n\n          copyText(\n            root,\n            name\n          );\n\n          return;\n        }\n      }\n    );\n\n\n    mobileToggle.addEventListener(\n      \"click\",\n      () => {\n        const open =\n          filterPanel.getAttribute(\n            \"data-open\"\n          ) === \"true\";\n\n        filterPanel.setAttribute(\n          \"data-open\",\n          open ? \"false\" : \"true\"\n        );\n\n        mobileToggle.setAttribute(\n          \"aria-expanded\",\n          open ? \"false\" : \"true\"\n        );\n\n        mobileToggle\n          .lastElementChild\n          .textContent =\n            open ? \"展开\" : \"收起\";\n      }\n    );\n\n    const detailDialog =\n      root.querySelector(\n        \".model-detail-popover\"\n      );\n\n    if (\n      detailDialog\n    ) {\n      detailDialog.addEventListener(\n        \"cancel\",\n        (event) => {\n          event.preventDefault();\n          closeDetailPopover(\n            root\n          );\n        }\n      );\n    }\n\n\n    root.addEventListener(\n      \"scroll\",\n      () => {\n        closeSortMenu(root);\n        closeDetailPopover(root);\n      },\n      {\n        passive: true,\n      }\n    );\n\n\n    window.addEventListener(\n      \"resize\",\n      () => {\n        closeSortMenu(root);\n        closeDetailPopover(root);\n      },\n      {\n        passive: true,\n      }\n    );\n\n\n    window.addEventListener(\n      \"keydown\",\n      (event) => {\n        if (\n          event.key ===\n          \"Escape\"\n        ) {\n          closeSortMenu(root);\n          closeDetailPopover(root);\n        }\n      }\n    );\n\n  };\n\n\n  /* =========================================================\n     DATA · PRICING / PERFORMANCE LOADING\n     ========================================================= */\n\n  const fetchPricing = async () => {\n    const cached =\n      readSessionCache(\n        PRICING_SESSION_KEY,\n        PRICING_SESSION_TTL\n      );\n\n    if (cached) {\n      return cached;\n    }\n\n    const response =\n      await fetch(\n        \"/api/pricing\",\n        {\n          method: \"GET\",\n          credentials: \"include\",\n          headers: {\n            Accept: \"application/json\",\n          },\n          cache: \"no-cache\",\n        }\n      );\n\n    if (!response.ok) {\n      throw new Error(\n        \"pricing HTTP \" +\n        response.status\n      );\n    }\n\n    const pricing =\n      normalizePricing(\n        await response.json()\n      );\n\n    writeSessionCache(\n      PRICING_SESSION_KEY,\n      pricing\n    );\n\n    return pricing;\n  };\n\n\n  const loadAll = async (\n    root,\n    generation\n  ) => {\n    /*\n     * Start the single summary request in parallel,\n     * but NEVER block first paint on it.\n     */\n    const perfSummaryPromise =\n      fetchPerfSummary()\n        .catch(\n          () => null\n        );\n\n    let pricing;\n\n    try {\n      pricing =\n        await fetchPricing();\n    } catch (error) {\n      console.error(\n        \"[MOSS Pricing Fast] pricing failed\",\n        error\n      );\n\n      root.querySelector(\n        \".model-rows\"\n      ).innerHTML = `\n        <div class=\"state-box\">\n          模型数据加载失败，请刷新后重试。\n        </div>\n      `;\n\n      return;\n    }\n\n    if (\n      generation !==\n        state.routeGeneration ||\n      !root.isConnected ||\n      !isPricingRoute()\n    ) {\n      return;\n    }\n\n    state.models =\n      pricing.models;\n\n    state.vendors =\n      pricing.vendors;\n\n    buildItems();\n    renderFilters(root);\n    renderRows(root);\n\n    /*\n     * Warm shared detail-metadata sources after first paint.\n     * Never blocks model-list rendering.\n     */\n    const warmDetailMetadata = () => {\n      const firstItem =\n        state.items[0];\n\n      if (\n        firstItem &&\n        !detailMetaCache.has(\n          firstItem.name\n        )\n      ) {\n        void loadDetailMetadata(\n          firstItem\n        );\n      }\n    };\n\n    if (\n      typeof requestIdleCallback ===\n        \"function\"\n    ) {\n      requestIdleCallback(\n        warmDetailMetadata,\n        {\n          timeout: 1800,\n        }\n      );\n    } else {\n      setTimeout(\n        warmDetailMetadata,\n        900\n      );\n    }\n\n    /*\n     * Status enrichment happens after rows are visible.\n     * One request replaces N per-model requests.\n     */\n    const perfSummary =\n      await perfSummaryPromise;\n\n    if (\n      !perfSummary ||\n      generation !==\n        state.routeGeneration ||\n      !root.isConnected ||\n      !isPricingRoute()\n    ) {\n      if (!perfSummary) {\n        for (\n          const item\n          of state.items\n        ) {\n          item.perfState =\n            \"empty\";\n\n          updateStatusCell(\n            root,\n            item\n          );\n        }\n      }\n\n      return;\n    }\n\n    applyPerfSummary(\n      root,\n      perfSummary\n    );\n  };\n\n\n  /* ---------------------------------------------------------\n     mount / unmount / SPA route\n     --------------------------------------------------------- */\n\n  const resetView = () => {\n    state.activeGroup =\n      \"全部\";\n\n    state.activeVendor =\n      \"全部\";\n\n    state.activeTag =\n      \"全部\";\n\n    state.search = \"\";\n\n    state.sort =\n      \"name-asc\";\n  };\n\n\n  const mount = () => {\n    if (!isPricingRoute()) {\n      return;\n    }\n\n    if (\n      document.getElementById(\n        ROOT_ID\n      )\n    ) {\n      lockOriginalPage();\n      return;\n    }\n\n    resetView();\n\n    lockOriginalPage();\n\n    const root =\n      createRoot();\n\n    document.body\n      .appendChild(root);\n\n    bindEvents(root);\n    updateSortControl(root);\n\n    const generation =\n      ++state.routeGeneration;\n\n    loadAll(\n      root,\n      generation\n    );\n  };\n\n\n  const unmount = () => {\n    state.routeGeneration++;\n\n    document\n      .getElementById(ROOT_ID)\n      ?.remove();\n\n    unlockOriginalPage();\n  };\n\n\n  const syncRoute = () => {\n    state.lastPath =\n      location.pathname;\n\n    if (isPricingRoute()) {\n      mount();\n    } else {\n      unmount();\n    }\n  };\n\n\n  if (!window[PATCH_KEY]) {\n    window[PATCH_KEY] = true;\n\n    for (\n      const method of [\n        \"pushState\",\n        \"replaceState\",\n      ]\n    ) {\n      const original =\n        history[method];\n\n      history[method] =\n        function (...args) {\n          const result =\n            original.apply(\n              this,\n              args\n            );\n\n          window.dispatchEvent(\n            new Event(ROUTE_EVENT)\n          );\n\n          return result;\n        };\n    }\n\n\n    window.addEventListener(\n      \"popstate\",\n      () => {\n        window.dispatchEvent(\n          new Event(ROUTE_EVENT)\n        );\n      }\n    );\n\n\n    window.addEventListener(\n      ROUTE_EVENT,\n      () => {\n        requestAnimationFrame(\n          syncRoute\n        );\n      }\n    );\n\n\n    setInterval(\n      () => {\n        if (\n          location.pathname !==\n          state.lastPath\n        ) {\n          syncRoute();\n        }\n      },\n      200\n    );\n  }\n\n\n  syncRoute();\n})();\n";


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
const MODEL_FAMILY_ANCHORS =
  new Set([
    "agnes",
    "openai",
    "gpt",
    "o1",
    "o3",
    "o4",
    "anthropic",
    "claude",
    "google",
    "gemini",
    "deepseek",
    "qwen",
    "qwq",
    "glm",
    "chatglm",
    "zhipu",
    "kimi",
    "moonshot",
    "minimax",
    "grok",
    "xai",
    "llama",
    "meta",
    "mistral",
    "mixtral",
    "doubao",
    "seed",
    "ernie",
    "baidu",
    "mimo",
    "xiaomi",
    "gemma",
    "cohere",
    "command",
  ]);


/*
 * STRICT MATCHING:
 *
 * agnes-2.0-flash
 * -> ONLY agnes-2-0-flash
 *
 * Never:
 * agnes-2.0-flash -> 2-0-flash
 *
 * tianyi_deepseek_v4
 * -> tianyi-deepseek-v4
 * -> deepseek-v4
 *
 * The second form is allowed only because "deepseek"
 * is a known model-family/provider anchor.
 */
function modelVariants(value) {
  const normalized =
    normalizeModelKey(value);

  if (!normalized) {
    return [];
  }

  const result =
    new Set([
      normalized,
    ]);

  const tokens =
    normalized
      .split("-")
      .filter(Boolean);

  let anchorIndex =
    -1;

  for (
    let i = 0;
    i < tokens.length;
    i++
  ) {
    if (
      MODEL_FAMILY_ANCHORS.has(
        tokens[i]
      )
    ) {
      anchorIndex =
        i;
      break;
    }
  }

  if (
    anchorIndex > 0 &&
    tokens.length -
      anchorIndex >= 2
  ) {
    result.add(
      tokens
        .slice(anchorIndex)
        .join("-")
    );
  }

  for (
    const current
    of [...result]
  ) {
    if (
      current.endsWith(
        "-free"
      )
    ) {
      result.add(
        current.slice(
          0,
          -5
        )
      );
    }
  }

  return [...result]
    .filter(Boolean);
}


function matchBasisForQuery(
  original,
  query
) {
  const normalizedOriginal =
    normalizeModelKey(
      original
    );

  const normalizedQuery =
    normalizeModelKey(
      query
    );

  if (
    normalizedOriginal ===
    normalizedQuery
  ) {
    return "exact";
  }

  return "provider_anchor_suffix";
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
    basis: "",
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
      modelVariants(
        source
      );

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

      const basis =
        matchBasisForQuery(
          source,
          variant
        );

      const penalty =
        sourceIndex * 2 +
        (
          basis ===
          "provider_anchor_suffix"
            ? 4
            : 0
        );

      const consider = (
        score,
        method
      ) => {
        const finalScore =
          score -
          penalty;

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
            basis,
          };
        }
      };

      // Exact canonical ID after normalization.
      if (
        candidateID ===
        variant
      ) {
        consider(
          140,
          "完整 ID 精确匹配"
        );
      }

      // Exact model slug/base name.
      if (
        candidateBase ===
        variant
      ) {
        consider(
          138,
          "模型字段精确匹配"
        );
      }

      // Exact source display name.
      if (
        candidateName ===
        variant
      ) {
        consider(
          132,
          "显示名称精确匹配"
        );
      }

      /*
       * Provider-prefixed IDs such as:
       * sapiens-ai/agnes-2.0-flash
       * normalize to sapiens-ai-agnes-2-0-flash.
       *
       * This suffix check is allowed ONLY for an entire
       * safe variant. We never create "2-0-flash".
       */
      if (
        candidateID.endsWith(
          "-" + variant
        )
      ) {
        consider(
          136,
          "提供商前缀 + 完整模型字段"
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
    best.score < 124
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


function configuredAliasMap(env) {
  const raw =
    env?.MODEL_METADATA_ALIASES_JSON;

  if (!raw) {
    return {};
  }

  try {
    const value =
      JSON.parse(raw);

    return (
      value &&
      typeof value === "object" &&
      !Array.isArray(value)
    )
      ? value
      : {};
  } catch {
    return {};
  }
}


function resolveConfiguredAlias(
  requested,
  env
) {
  const aliases =
    configuredAliasMap(env);

  const requestedKey =
    normalizeModelKey(
      requested
    );

  for (
    const [source, target]
    of Object.entries(
      aliases
    )
  ) {
    if (
      normalizeModelKey(
        source
      ) ===
      requestedKey &&
      typeof target ===
        "string" &&
      target.trim()
    ) {
      return target.trim();
    }
  }

  return "";
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

  /*
   * Start expensive shared lookups concurrently.
   * Do not wait for the full admin mapping scan before
   * Models.dev / OpenRouter / LiteLLM start loading.
   */
  const mappingPromise =
    loadAdminMappingIndex(
      request,
      env
    )
      .catch(
        () => null
      );

  const modelsDevPromise =
    getModelsDevRecords();

  const openRouterPromise =
    getOpenRouterRecords();

  const liteLLMPromise =
    getLiteLLMRecords();

  const mappingIndex =
    await mappingPromise;

  const adminResolution =
    resolveAdminMapping(
      requested,
      mappingIndex
    );

  const configuredAlias =
    resolveConfiguredAlias(
      requested,
      env
    );

  const explicitAdminMapped =
    adminResolution.method ===
      "New API model_mapping";

  const resolvedModel =
    explicitAdminMapped
      ? adminResolution
          .resolved_model
      : (
          configuredAlias ||
          adminResolution
            .resolved_model ||
          requested
        );

  const resolution = {
    ...adminResolution,

    resolved_model:
      resolvedModel,

    method:
      explicitAdminMapped
        ? adminResolution.method
        : (
            configuredAlias
              ? "MODEL_METADATA_ALIASES_JSON"
              : adminResolution.method
          ),

    configured_alias:
      configuredAlias || "",

    strict_mode:
      true,
  };

  const searchValues =
    [
      resolvedModel,
      requested,
    ].filter(Boolean);

  const [
    modelsDevResult,
    openRouterResult,
    liteLLMResult,
  ] =
    await Promise.allSettled([
      modelsDevPromise,
      openRouterPromise,
      liteLLMPromise,
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
          basis:
            entry.match
              .basis || "",
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
    configuredAlias &&
    !explicitAdminMapped
  ) {
    sources.push({
      name:
        "MODEL_METADATA_ALIASES_JSON",
      kind:
        "人工别名",
      note:
        "由 Cloudflare Worker 配置的显式模型别名；优先级高于自动名称解析。",
    });
  }


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

        match_basis:
          bestMatch
            ?.basis ||
          (
            configuredAlias ||
            explicitAdminMapped
              ? "explicit_mapping"
              : ""
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
            basis:
              bestMatch.basis || "",
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





const PRICING_ICON_ALIASES = {
  agnes: {
    lobe: [
      "agnes",
      "agnesai",
    ],
    simple: [],
  },

  deepseek: {
    lobe: [
      "deepseek",
    ],
    simple: [
      "deepseek",
    ],
  },

  openai: {
    lobe: [
      "openai",
      "chatgpt",
    ],
    simple: [
      "openai",
    ],
  },

  claude: {
    lobe: [
      "claude",
      "anthropic",
    ],
    simple: [
      "anthropic",
    ],
  },

  anthropic: {
    lobe: [
      "anthropic",
      "claude",
    ],
    simple: [
      "anthropic",
    ],
  },

  gemini: {
    lobe: [
      "gemini",
    ],
    simple: [
      "googlegemini",
      "google",
    ],
  },

  gemma: {
    lobe: [
      "gemma",
    ],
    simple: [
      "google",
    ],
  },

  google: {
    lobe: [
      "google",
      "gemini",
    ],
    simple: [
      "google",
    ],
  },

  qwen: {
    lobe: [
      "qwen",
    ],
    simple: [
      "alibabacloud",
    ],
  },

  chatglm: {
    lobe: [
      "chatglm",
      "qingyan",
      "zhipu",
    ],
    simple: [],
  },

  zhipu: {
    lobe: [
      "zhipu",
      "qingyan",
      "chatglm",
    ],
    simple: [],
  },

  kimi: {
    lobe: [
      "kimi",
      "moonshot",
    ],
    simple: [],
  },

  minimax: {
    lobe: [
      "minimax",
    ],
    simple: [],
  },

  grok: {
    lobe: [
      "grok",
      "xai",
    ],
    simple: [
      "x",
    ],
  },

  meta: {
    lobe: [
      "meta",
    ],
    simple: [
      "meta",
    ],
  },

  mistral: {
    lobe: [
      "mistral",
    ],
    simple: [
      "mistralai",
    ],
  },

  doubao: {
    lobe: [
      "doubao",
    ],
    simple: [
      "bytedance",
    ],
  },

  wenxin: {
    lobe: [
      "wenxin",
      "baidu",
    ],
    simple: [
      "baidu",
    ],
  },

  mimo: {
    lobe: [
      "mimo",
      "xiaomimimo",
      "xiaomi",
    ],
    simple: [
      "xiaomi",
    ],
  },

  yi: {
    lobe: [
      "yi",
    ],
    simple: [],
  },

  cohere: {
    lobe: [
      "cohere",
    ],
    simple: [
      "cohere",
    ],
  },

  ollama: {
    lobe: [
      "ollama",
    ],
    simple: [
      "ollama",
    ],
  },

  hunyuan: {
    lobe: [
      "hunyuan",
      "tencent",
    ],
    simple: [
      "tencentqq",
    ],
  },

  groq: {
    lobe: [
      "groq",
    ],
    simple: [
      "groq",
    ],
  },

  openrouter: {
    lobe: [
      "openrouter",
    ],
    simple: [
      "openrouter",
    ],
  },

  perplexity: {
    lobe: [
      "perplexity",
    ],
    simple: [
      "perplexity",
    ],
  },

  huggingface: {
    lobe: [
      "huggingface",
    ],
    simple: [
      "huggingface",
    ],
  },

  nvidia: {
    lobe: [
      "nvidia",
    ],
    simple: [
      "nvidia",
    ],
  },

  cerebras: {
    lobe: [
      "cerebras",
    ],
    simple: [
      "cerebras",
    ],
  },

  sambanova: {
    lobe: [
      "sambanova",
    ],
    simple: [],
  },

  together: {
    lobe: [
      "together",
      "togetherai",
    ],
    simple: [],
  },

  fireworks: {
    lobe: [
      "fireworks",
    ],
    simple: [],
  },

  replicate: {
    lobe: [
      "replicate",
    ],
    simple: [
      "replicate",
    ],
  },

  siliconcloud: {
    lobe: [
      "siliconcloud",
      "siliconflow",
    ],
    simple: [],
  },

  bedrock: {
    lobe: [
      "bedrock",
      "aws",
    ],
    simple: [
      "amazonwebservices",
    ],
  },

  azureai: {
    lobe: [
      "azureai",
      "azure",
    ],
    simple: [
      "microsoftazure",
    ],
  },
};


function uniqueStrings(values) {
  return [
    ...new Set(
      values
        .map(
          (value) =>
            String(value || "")
              .trim()
              .toLowerCase()
        )
        .filter(Boolean)
    ),
  ];
}


function isVerifiedSVGText(
  text
) {
  const value =
    String(text || "");

  if (
    !value ||
    value.length >
      1024 * 1024
  ) {
    return false;
  }

  const head =
    value
      .slice(
        0,
        1200
      )
      .toLowerCase();

  if (
    head.includes(
      "<html"
    ) ||
    head.includes(
      "<!doctype html"
    )
  ) {
    return false;
  }

  return (
    /<svg\b[^>]*>/i.test(
      value
    ) &&
    /<\/svg>\s*$/i.test(
      value.trim()
    )
  );
}


async function fetchAndVerifySVG(
  url,
  source,
  slug
) {
  let response;

  try {
    response =
      await fetch(
        url,
        {
          headers: {
            Accept:
              "image/svg+xml,text/plain;q=0.8,*/*;q=0.5",
          },

          cf: {
            cacheEverything:
              true,

            cacheTtl:
              86400,
          },
        }
      );
  } catch {
    return null;
  }

  if (
    !response.ok
  ) {
    return null;
  }

  const contentType =
    String(
      response.headers.get(
        "content-type"
      ) || ""
    ).toLowerCase();

  if (
    contentType.includes(
      "text/html"
    )
  ) {
    return null;
  }

  let svgText;

  try {
    svgText =
      await response.text();
  } catch {
    return null;
  }

  if (
    !isVerifiedSVGText(
      svgText
    )
  ) {
    return null;
  }

  return {
    svgText,
    source,
    slug,
    upstreamContentType:
      contentType,
  };
}


async function fetchPricingIcon(
  logicalKey
) {
  const normalized =
    String(
      logicalKey || ""
    )
      .trim()
      .toLowerCase()
      .replace(
        /[^a-z0-9-]/g,
        ""
      )
      .replace(
        /-(?:color|text|combine)$/i,
        ""
      );

  if (!normalized) {
    return null;
  }

  const aliases =
    PRICING_ICON_ALIASES[
      normalized
    ] || {
      lobe: [
        normalized,
      ],

      simple: [
        normalized,
      ],
    };

  const lobeSlugs =
    uniqueStrings(
      aliases.lobe
    );

  /*
   * 1. Lobe Icons / unpkg
   * Try color variant first, then normal.
   */
  for (
    const baseSlug
    of lobeSlugs
  ) {
    for (
      const slug of [
        baseSlug +
          "-color",

        baseSlug,
      ]
    ) {
      const result =
        await fetchAndVerifySVG(
          "https://unpkg.com/@lobehub/icons-static-svg@latest/icons/" +
            encodeURIComponent(
              slug
            ) +
            ".svg",
          "lobe-unpkg",
          slug
        );

      if (result) {
        return result;
      }
    }
  }

  /*
   * 2. Lobe Icons / npmmirror
   * Backup CDN using the path documented by LobeHub.
   */
  for (
    const baseSlug
    of lobeSlugs
  ) {
    for (
      const slug of [
        baseSlug +
          "-color",

        baseSlug,
      ]
    ) {
      const result =
        await fetchAndVerifySVG(
          "https://registry.npmmirror.com/@lobehub/icons-static-svg/latest/files/icons/" +
            encodeURIComponent(
              slug
            ) +
            ".svg",
          "lobe-npmmirror",
          slug
        );

      if (result) {
        return result;
      }
    }
  }

  const simpleSlugs =
    uniqueStrings(
      aliases.simple
    );

  /*
   * 3. Simple Icons official color CDN.
   */
  for (
    const slug
    of simpleSlugs
  ) {
    const result =
      await fetchAndVerifySVG(
        "https://cdn.simpleicons.org/" +
          encodeURIComponent(
            slug
          ),
        "simpleicons-color",
        slug
      );

    if (result) {
      return result;
    }
  }

  /*
   * 4. Simple Icons package on jsDelivr.
   */
  for (
    const slug
    of simpleSlugs
  ) {
    const result =
      await fetchAndVerifySVG(
        "https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/" +
          encodeURIComponent(
            slug
          ) +
          ".svg",
        "simpleicons-jsdelivr",
        slug
      );

    if (result) {
      return result;
    }
  }

  return null;
}


class HeadInjector {
  element(element) {
    element.append(
      '<link ' +
      'id="moss-pricing-v91-style" ' +
      'rel="stylesheet" ' +
      'href="/pricing-assets/v9.1-continuity.css">',
      {
        html: true,
      }
    );
  }
}


class BodyInjector {
  element(element) {
    element.append(
      '<script ' +
      'id="moss-pricing-v91-script" ' +
      'defer ' +
      'src="/pricing-assets/v9.1-continuity.js">' +
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
      "/pricing-assets/v9.1-continuity.css"
    ) {
      return new Response(
        GLOBAL_CSS,
        {
          status: 200,
          headers: {
            "Content-Type":
              "text/css; charset=utf-8",
            "Cache-Control":
              "public, max-age=31536000, immutable",
            "X-Content-Type-Options":
              "nosniff",
          },
        }
      );
    }


    if (
      url.pathname ===
      "/pricing-assets/v9.1-continuity.js"
    ) {
      return new Response(
        CLIENT_JS,
        {
          status: 200,
          headers: {
            "Content-Type":
              "application/javascript; charset=utf-8",
            "Cache-Control":
              "public, max-age=31536000, immutable",
            "X-Content-Type-Options":
              "nosniff",
          },
        }
      );
    }


    if (
      url.pathname.startsWith(
        "/pricing-icon/"
      )
    ) {
      const file =
        url.pathname
          .slice(
            "/pricing-icon/".length
          )
          .replace(
            /[^a-z0-9.-]/gi,
            ""
          );

      const logicalKey =
        file
          .replace(
            /\.svg$/i,
            ""
          )
          .toLowerCase();

      if (!logicalKey) {
        return new Response(
          "Not Found",
          {
            status: 404,
          }
        );
      }

      const icon =
        await fetchPricingIcon(
          logicalKey
        );

      if (!icon) {
        return new Response(
          "Not Found",
          {
            status: 404,

            headers: {
              "Cache-Control":
                "public, max-age=300",

              "X-MOSS-Icon-Source":
                "fallback",

              "X-MOSS-Icon-Key":
                logicalKey,
            },
          }
        );
      }

      return new Response(
        icon.svgText,
        {
          status: 200,

          headers: {
            "Content-Type":
              "image/svg+xml; charset=utf-8",

            "Cache-Control":
              "public, max-age=86400",

            "X-Content-Type-Options":
              "nosniff",

            "X-MOSS-Icon-Source":
              icon.source,

            "X-MOSS-Icon-Slug":
              icon.slug,

            "X-MOSS-Icon-Key":
              logicalKey,
          },
        }
      );
    }


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
      "active-v9.1-continuity"
    );
  },
};
