# New API Pricing Worker V7.2

V7.2 专门修复 V7.1 的图标显示问题，同时完整保留 V7.1 的：

- 三个 Tab
- 单滚动容器
- 主列表 / 性能 Tab 统一 24h 性能数据
- 严格模型资料匹配
- Models.dev / OpenRouter / LiteLLM
- New API model_mapping
- 24h 折线图


# 一、修复“破图 + fallback 同时显示”

V7.1 的问题：

```text
fallback 字母底板
+
<img 品牌 SVG>
```

两个节点会同时存在于界面。

如果图片失败：
- 可能看到浏览器破图标记
- 下面还露出 AG / NV 等 fallback

如果图片透明：
- 可能看到 NVIDIA Logo
- 后面仍透出紫色 fallback 背景


## V7.2：单可见状态

远程品牌 `<img>` 初始状态：

```text
visibility: hidden
opacity: 0
```

只有浏览器成功 `load` 后：

1. 图片设置 `data-loaded=true`
2. 品牌图片变为可见
3. fallback 设置 hidden
4. host 状态改为 `verified`

如果 `error`：

1. 图片节点直接 remove
2. fallback 保持显示

所以任意时刻用户只会看到：

```text
New API 真 Logo
或
已验证品牌 Logo
或
fallback
```

不会再叠加。


# 二、Worker 不再“HTTP 200 就当图标”

每个外部图标响应都经过正文校验：

- HTTP 必须成功
- 不允许 `text/html`
- 正文必须实际包含 `<svg ...>`
- 正文结尾必须有 `</svg>`
- 最大 1 MiB
- HTML 错误页直接丢弃

只有验证通过才由 Worker 返回：

```text
Content-Type: image/svg+xml
X-Content-Type-Options: nosniff
```


# 三、图标来源链

## 1. New API 真正原生图标

只有 `img / svg / picture / canvas / URL graphic`
才视为有效。

A / B / C / 首字母文本仍视为占位符。


## 2. Lobe Icons / unpkg

按 Lobe 官方静态 SVG CDN：

```text
https://unpkg.com/@lobehub/icons-static-svg@latest/icons/[SLUG].svg
```

每个品牌依次尝试：

```text
slug-color.svg
slug.svg
```


## 3. Lobe Icons / npmmirror

作为第二 CDN：

```text
https://registry.npmmirror.com/@lobehub/icons-static-svg/latest/files/icons/[SLUG].svg
```


## 4. Simple Icons 彩色 CDN

```text
https://cdn.simpleicons.org/[SLUG]
```


## 5. Simple Icons jsDelivr

```text
https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/[SLUG].svg
```


## 6. 本地 fallback

所有外部来源失败才显示：

- AG
- DS
- NV
- OA
- 或模型名稳定生成的两字母 fallback

fallback 使用蓝紫柔和底色。

真实 Logo 不使用这个底板。


# 四、增加诊断 Header

测试：

```bash
curl -sSI \
https://newapi.mossao.com/pricing-icon/agnes.svg
```

成功时可以看到：

```text
X-MOSS-Icon-Source: lobe-unpkg
X-MOSS-Icon-Slug: agnes
X-MOSS-Icon-Key: agnes
```

如果第一个 CDN 失败而第二个成功，可能是：

```text
X-MOSS-Icon-Source: lobe-npmmirror
```

Simple Icons 则可能显示：

```text
X-MOSS-Icon-Source: simpleicons-color
```

或：

```text
X-MOSS-Icon-Source: simpleicons-jsdelivr
```

所有来源都没有：

```text
HTTP 404
X-MOSS-Icon-Source: fallback
```

浏览器不会显示破图，因为失败 `<img>` 会被移除。


# 五、重点品牌候选

Agnes：

```text
agnes
agnesai
```

NVIDIA：

```text
nvidia
```

DeepSeek：

```text
deepseek
```

OpenAI：

```text
openai
chatgpt
```

Gemini：

```text
gemini
```

Qwen：

```text
qwen
```

以及 V7.1 既有的大量品牌映射。


# Route

保持：

```text
newapi.mossao.com/pricing*
```


# 验证 Worker

```bash
curl -sSI https://newapi.mossao.com/pricing \
  | grep -i x-moss-pricing-skin
```

应返回：

```text
x-moss-pricing-skin: active-v7.2-verified-single-state-icons
```


# 建议部署后先测试这三个

```bash
curl -sSI https://newapi.mossao.com/pricing-icon/agnes.svg
curl -sSI https://newapi.mossao.com/pricing-icon/nvidia.svg
curl -sSI https://newapi.mossao.com/pricing-icon/deepseek.svg
```

重点看：

- HTTP 是否 200
- `content-type`
- `x-moss-icon-source`
- `x-moss-icon-slug`
