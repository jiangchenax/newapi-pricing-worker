# MOSS New API Pricing Worker

这是一个独立的 Cloudflare Worker，只用于：

```text
newapi.mossao.com/pricing*
```

它不会修改：

- New API 源码
- New API Docker 容器
- Caddyfile
- TLS / WebSocket / SSE
- 首页 `/`
- `/dashboard`
- `/console/*`
- `/api/*`
- `/v1/*`

## 工作方式

```text
浏览器
  ↓
Cloudflare
  ↓
/pricing* → moss-newapi-pricing Worker
  ↓
fetch(request)
  ↓
原 New API 源站（Caddy → 127.0.0.1:50004）
  ↓
HTMLRewriter 注入全局 CSS + Hero
  ↓
浏览器
```

Cloudflare Workers Route 的官方行为是：在 Route 上调用 `fetch()` 传入请求，会继续向该 DNS 记录后面的应用服务器发起子请求。

## 文件

```text
moss-newapi-pricing-worker/
├── src/
│   └── index.js
├── wrangler.jsonc
├── package.json
└── README.md
```

CSS 已直接嵌入 `src/index.js`，没有额外静态文件，因此部署后不会出现 CSS 地址、缓存或跨域问题。

## 部署方式 A：GitHub + Cloudflare Builds

1. 新建 GitHub 仓库，例如：

```text
moss-newapi-pricing
```

2. 把本项目四个文件上传到仓库根目录。

3. Cloudflare：

```text
Workers & Pages
→ Create
→ Import a repository
```

4. 连接这个仓库。

5. Build/Deploy command 可使用：

```text
npx wrangler deploy
```

如果 Cloudflare 自动识别 Wrangler 项目，可直接按默认部署。

6. 部署后确认 Domains & Routes 中存在：

```text
newapi.mossao.com/pricing*
```

Zone：

```text
mossao.com
```

类型必须是 Route，不是 Custom Domain。

## 部署方式 B：本地 Wrangler

```bash
npm install
npx wrangler login
npm run deploy
```

## 如果以前的首页 Worker Route 还在

你已经不再使用旧首页 Worker。

如果 Cloudflare 中仍存在旧的：

```text
newapi.mossao.com/*
```

请删除旧 Route，避免让不需要的 Worker 继续覆盖整站。

本项目只需要：

```text
newapi.mossao.com/pricing*
```

Cloudflare 路由采用“更具体的 pattern 优先”，所以 `/pricing*` 本身比 `/*` 更具体；但既然旧首页 Worker 已放弃，保留它没有意义。

## 第一次验证

部署后不要先看样式，先检查 Worker 是否真的命中。

执行：

```bash
curl -sSI https://newapi.mossao.com/pricing | grep -i 'x-moss-pricing-skin'
```

正确结果：

```text
x-moss-pricing-skin: active
```

再检查页面注入：

```bash
curl -sS https://newapi.mossao.com/pricing | grep -o 'moss-pricing-global-style' | head
```

应该输出：

```text
moss-pricing-global-style
```

以及：

```bash
curl -sS https://newapi.mossao.com/pricing | grep -o 'moss-pricing-hero' | head
```

应该输出：

```text
moss-pricing-hero
```

这三个都成功后，再浏览器：

```text
Ctrl + Shift + R
```

访问：

```text
https://newapi.mossao.com/pricing
```

## 如果浏览器从其它页面 SPA 跳转到 /pricing

这个 Worker 的 Route 只在浏览器真正请求 `/pricing` HTML 文档时执行。

如果 New API 内部点击“模型广场”采用纯 SPA 客户端路由，浏览器没有重新请求 HTML，那么这一轮不会经过 Worker。

你当前自定义导航中的 `/pricing` 是普通链接时通常会产生文档导航。如果后续发现“直接刷新 /pricing 有样式，但从控制台点进去没有”，这不是 CSS 失效，而是 SPA 没有重新加载文档。

最简单的验证方法：

1. 直接在地址栏打开 `/pricing`；
2. 强刷；
3. 检查 `X-MOSS-Pricing-Skin: active`。

如果之后确实需要支持所有 SPA 入口，再把方案升级成“全站 HTML shell 注入 + 仅 /pricing 激活”，无需修改 New API。

## 回滚

Cloudflare：

```text
Workers & Pages
→ moss-newapi-pricing
→ Settings
→ Domains & Routes
```

删除：

```text
newapi.mossao.com/pricing*
```

即可立即恢复 New API 原模型广场。

不需要重启 Caddy，不需要重建 New API。
