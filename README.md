# New API Pricing Worker V6

## V6 = UI 重构 + 多源详情 + 后缀字段匹配

### UI
采用“轻玻璃模型工作台”：
- Header 和内容共用一个浅蓝灰背景
- 顶部不再套厚玻璃大框
- 左侧筛选轻玻璃
- 右侧模型列表为清晰高密度数据面
- 搜索框左边缘与模型列表左边缘一致
- 模型名称为第一视觉层级
- 24h 状态压缩为第二层
- 分组标签降低存在感
- 详情继续使用小型玻璃浮层

### 资料来源
详情会同时尝试：

1. New API `/api/pricing`
2. New API `model_mapping`（配置管理员 Secret 后）
3. Models.dev
4. OpenRouter Models API
5. LiteLLM `model_prices_and_context_window.json`
6. Models.dev 中存在时继续给出模型/实验室官方链接

每个字段会记录实际采用的来源，例如：

- 上下文 `Models.dev`
- 最大输出 `OpenRouter`
- 最大输入 `LiteLLM`
- 输入模态 `Models.dev+OpenRouter`
- 工具调用 `Models.dev+OpenRouter+LiteLLM`

### 后缀字段匹配

V6 不再要求完整调用名一致。

例如：

`tianyi_deepseek_v4`

会依次形成：

`tianyi-deepseek-v4`
`deepseek-v4`

因此如果资料库中存在：

`deepseek/deepseek-v4`

即可匹配。

同理：

`blian_deepseek_v4_pro`

可匹配：

`deepseek-v4-pro`

但不会只拿 `v4` 这种单字段进行宽泛匹配，以避免错配。

### 优先级

如果配置了 New API 管理员 Secret：

`model_mapping`
优先于名称后缀推断。

Cloudflare Secret：

```bash
npx wrangler secret put NEWAPI_ADMIN_TOKEN
npx wrangler secret put NEWAPI_ADMIN_USER_ID
```

### Route

保持：

`newapi.mossao.com/pricing*`

### 验证

```bash
curl -sSI https://newapi.mossao.com/pricing \
  | grep -i x-moss-pricing-skin
```

应返回：

`x-moss-pricing-skin: active-v6-workspace-multisource-suffix-match`

### 测试后缀匹配

```bash
curl -sS \
'https://newapi.mossao.com/pricing-meta?model=tianyi_deepseek_v4'
```

重点看：

- `resolution.suffix_candidates`
- `source_matches`
- `metadata`
- `field_sources`

如果数据源里有 `deepseek-v4`，应看到匹配查询为：

`deepseek-v4`
