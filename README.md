# New API Pricing Worker V7.1

V7.1 一次处理四个问题。

## 1. 三个 Tab 背景统一

详情内部统一使用同一个 `detail-surface`：

- 标题区
- Tab 区
- Tab 内容区

Tab 整栏不再单独使用一块白底。
只有当前选中的 Tab 有很轻的局部高亮。


## 2. 详情只保留一个滚动容器

以前：

`model-detail-popover`
→ `detail-panel-scroll`
→ 双重高度 / 双重滚动

现在：

`model-detail-popover`
→ 唯一滚动容器

`detail-panel-scroll`
只负责结构，不再滚动。

每次：

- 异步详情加载完成
- 性能数据加载完成
- 切换概览 / 性能 / API

都会重新计算详情框位置和可用高度。

详情底部额外保留 34px 安全空间，避免最后一块内容滑不到。


## 3. 主列表 24h 状态和性能 Tab 使用同一接口

不再用原 New API DOM 中抓到的成功率 / 延迟 / TPS 作为主列表状态。

现在统一：

`GET /api/perf-metrics?model=<model>&hours=24`

同一份数据进入：

`summarizePerfResult()`

然后同时用于：

- 模型列表成功率
- 模型列表延迟
- 模型列表吞吐量
- 性能 Tab 顶部三个统计卡

因此不会再出现：

主列表：暂无 24h 状态
性能 Tab：有 TPS / 延迟 / 成功率

这种矛盾。

### 加载策略

不会页面打开瞬间并发 71 个请求。

- IntersectionObserver 优先加载当前可见模型
- 上下 420px 范围提前加载
- 最大并发 5
- 1.8 秒后后台慢慢补齐其余模型
- `loadPerfMetrics()` 保留浏览器内 Promise 缓存


## 4. 图标系统重做

### 先判断原 New API 图标是不是“真图标”

现在只有以下内容才视为原生有效图标：

- `<img>`
- `<svg>`
- `<picture>`
- `<canvas>`
- URL background / mask

纯文字：

- A
- B
- C
- AI
- 首字母 Avatar

全部视为“占位符”，继续进入图标补全链。


### 图标解析链

1. New API 真正的原生图标
2. New API `model.icon / vendor_icon` 文本提示
3. 模型名 / Provider 品牌识别
4. Lobe Icons Static SVG
5. Simple Icons 彩色 SVG
6. 本地品牌文字 fallback

浏览器统一请求：

`/pricing-icon/<brand>.svg`

Worker 服务器端解析，不让前端直接访问第三方 CDN。


### Lobe Icons

优先尝试：

`<slug>-color.svg`

失败后：

`<slug>.svg`


### Simple Icons

Lobe 没有时再使用 Simple Icons 彩色 CDN。


### 已增加识别

包括但不限于：

- Agnes
- DeepSeek
- OpenAI / GPT
- Claude / Anthropic
- Gemini / Google
- Gemma
- Qwen
- ChatGLM / Zhipu
- Kimi / Moonshot
- MiniMax
- Grok / xAI
- Meta / Llama
- Mistral
- Doubao
- Wenxin / Baidu
- MiMo / Xiaomi
- Yi
- Cohere
- Ollama
- Hunyuan
- Groq
- OpenRouter
- Perplexity
- Hugging Face
- NVIDIA
- Cerebras
- SambaNova
- Together
- Fireworks
- Replicate
- SiliconCloud
- Bedrock / AWS
- Azure AI


## 保留 V7

- 概览 / 性能 / API 三 Tab
- 严格模型资料匹配
- agnes-2.0-flash 不会误配 Gemini
- tianyi_deepseek_v4 → deepseek-v4
- Models.dev
- OpenRouter
- LiteLLM
- New API model_mapping
- 24h 折线图
- 原生彩色图标优先


## Route

保持：

`newapi.mossao.com/pricing*`


## 验证

```bash
curl -sSI https://newapi.mossao.com/pricing \
  | grep -i x-moss-pricing-skin
```

应返回：

`x-moss-pricing-skin: active-v7.1-unified-tabs-scroll-perf-icons`


## 单独测试图标

```bash
curl -sSI \
  https://newapi.mossao.com/pricing-icon/agnes.svg
```

以及：

```bash
curl -sSI \
  https://newapi.mossao.com/pricing-icon/deepseek.svg
```

如果解析成功，应返回：

`content-type: image/svg+xml`
