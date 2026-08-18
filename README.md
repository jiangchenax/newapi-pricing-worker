# New API Pricing Worker V7

## 1. 详情改成三个 Tab

### 概览
- 调用 ID
- 实际上游模型（仅明确映射时）
- 资料模型
- 模型描述
- 上下文
- 最大输入 / 最大输出
- 知识截止 / 发布日期
- 输入 / 输出模态
- 推理 / 工具调用 / 结构化输出等能力
- 数据来源

### 性能
- TPS
- 平均延迟
- 成功率
- 各分组性能
- 最近 24 小时首 Token 延迟折线图
- 数据来自 New API `/api/perf-metrics?model=...&hours=24`

### API
- 本站调用 ID
- 实际上游模型（有明确映射时）
- 支持端点
- 输入 / 输出模态
- 一键复制


# 2. 图标补全

优先级：

1. New API 原生模型 / vendor 图标
2. 根据明确 Provider / 模型族识别品牌
3. Lobe Icons 彩色 PNG
4. Lobe Icons 普通 PNG
5. 本地柔和彩色文字 fallback

Worker 新增：

`/pricing-icon/<slug>.png`

并代理缓存 Lobe Icons。

例如：
- agnes → Agnes AI
- deepseek → DeepSeek
- gpt/openai → OpenAI
- claude → Claude
- gemini/google → Gemini
- qwen → Qwen
- glm → ChatGLM
- kimi → Kimi
- minimax → MiniMax
- grok → Grok
- llama/meta → Meta
- mistral → Mistral
- doubao → Doubao


# 3. 修复错误模型资料引用

V6 的问题：

`agnes-2.0-flash`

曾可能被拆成：

`2.0-flash`

再误撞到：

`google/gemini-2.0-flash`

V7 完全禁止这种“纯尾部版本字段”匹配。


## V7 严格匹配规则

允许：

### A. 完整模型名精确匹配

`agnes-2.0-flash`
→ `agnes-2.0-flash`

### B. New API 显式 model_mapping

优先级最高。

### C. Worker 人工别名

可配置：

`MODEL_METADATA_ALIASES_JSON`

例如：

```json
{
  "my_private_name": "provider/real-model"
}
```

### D. 已知模型族锚点后的完整字段

`tianyi_deepseek_v4`
→ `deepseek-v4`

因为 `deepseek` 是明确模型族锚点。

`blian_deepseek_v4_pro`
→ `deepseek-v4-pro`

允许。

但：

`agnes-2.0-flash`
不会产生：
`2.0-flash`

因此不能再匹配 Gemini。


# 4. 匹配测试

预期：

`agnes-2.0-flash`
→ `["agnes-2-0-flash"]`

`tianyi_deepseek_v4`
→ `["tianyi-deepseek-v4","deepseek-v4"]`

`blian_deepseek_v4_pro`
→ `["blian-deepseek-v4-pro","deepseek-v4-pro"]`


# 5. 可选人工别名

Cloudflare Worker 可加普通变量或 Secret：

`MODEL_METADATA_ALIASES_JSON`

例如：

```json
{
  "tianyi_deepseek_v4": "deepseek-v4",
  "my_gpt_alias": "openai/gpt-5"
}
```

显式别名优先于自动名称解析，但低于 New API 自己的 `model_mapping`。


# 6. Route

保持：

`newapi.mossao.com/pricing*`


# 7. 验证

```bash
curl -sSI https://newapi.mossao.com/pricing \
  | grep -i x-moss-pricing-skin
```

应返回：

`x-moss-pricing-skin: active-v7-tabs-icons-strict-metadata`


# 8. 测试错误引用是否消失

```bash
curl -sS \
'https://newapi.mossao.com/pricing-meta?model=agnes-2.0-flash'
```

重点看：

- `resolution.suffix_candidates`
- `resolution.match_basis`
- `source_matches`
- `metadata.id`

其中 `suffix_candidates` 不应再出现：

`2-0-flash`

并且 `metadata.id` 不允许因为尾部相似而变成：

`google/gemini-2.0-flash`
