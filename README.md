# New API Pricing Worker V5

## V5 的核心变化

详情不再从 `/api/pricing` 空字段里“硬找信息”。

现在详情的数据链路是：

```text
用户点击详情
      ↓
/pricing-meta?model=本站调用名
      ↓
1. 可选：服务器端读取 New API 渠道 model_mapping
      ↓
得到真实/候选上游模型名
      ↓
2. 查询 Models.dev models.json
      ↓
匹配模型规格
      ↓
返回：
上下文 / 最大输入 / 最大输出
知识截止 / 发布日期 / 最近更新
输入输出模态
推理 / Tool Call / Structured Output 等能力
      ↓
详情浮层明确列出信息来源
```

## 为什么这样做

New API 当前 `/api/pricing` 主要是模型目录/计费数据，
并不能稳定提供完整的 context / output / capabilities 元数据。

New API 渠道配置本身支持：

```text
model_mapping
```

即：

```text
用户请求模型名
→ 实际上游模型名
```

因此自定义名称例如：

```text
blian_deepseek_v4_pro
```

不应该直接当成模型厂商真实 ID 去猜。

V5 优先读取本站 `model_mapping`；
没有配置管理员 Secret 时，再使用名称后缀规则做保守匹配，例如：

```text
blian_deepseek_v4_pro
→ deepseek-v4-pro
```

只有匹配分数达到阈值才展示规格；
低于阈值直接显示“未找到可靠匹配”，不乱猜。


## Models.dev

V5 使用：

```text
https://models.dev/models.json
```

该数据源包含 provider-agnostic 模型元数据，例如：

- context
- input limit
- output limit
- modalities
- reasoning
- tool_call
- structured_output
- knowledge
- release_date
- last_updated
- official/model links

详情中会明确标记：

```text
Models.dev
结构化模型库
```

如果数据中提供官方链接，还会单独显示：

```text
官方模型资料
官方链接
```


# 推荐：开启 New API 管理员映射解析

这是最关键的一步，尤其你的站点存在自定义模型名。

Cloudflare Worker 中添加两个 Secret：

```bash
npx wrangler secret put NEWAPI_ADMIN_TOKEN
npx wrangler secret put NEWAPI_ADMIN_USER_ID
```

`NEWAPI_ADMIN_TOKEN`：

New API：

```text
个人设置
→ 安全设置
→ System Access Token
```

需要是具备管理员权限的 Access Token。

`NEWAPI_ADMIN_USER_ID`：

对应管理员账户的 New API User ID。


## 安全设计

这两个值：

- 只存在 Cloudflare Worker Secret
- 不写进 `src/index.js`
- 不发送给浏览器
- 不显示在 `/pricing-meta`
- 浏览器只收到已经清洗后的：
  - resolved_model
  - 是否多映射
  - 模型规格
  - 信息来源

不会返回：

- 管理员 Token
- Channel Key
- 渠道 Base URL
- 渠道 ID
- 渠道名称


## 管理员接口使用

Worker 服务器端使用：

```text
GET /api/channel/
GET /api/channel/:id
```

请求头：

```text
Authorization: Bearer <admin token>
New-Api-User: <user id>
```

Worker 会缓存映射索引约 10 分钟，
不会每点击一次详情都重新扫描所有渠道。


## 如果不配置管理员 Secret

V5 仍然能工作。

它会：

1. 使用本站调用名；
2. 规范化 `_`、`/`、`.` 等分隔符；
3. 尝试删除站点自定义前缀；
4. 和 Models.dev 模型 ID 做高阈值匹配。

例如：

```text
blian_deepseek_v4_pro
```

可生成候选：

```text
blian-deepseek-v4-pro
deepseek-v4-pro
v4-pro
```

然后优先匹配：

```text
deepseek/deepseek-v4-pro
```

但建议最终还是配置 New API 管理员 Secret，
因为只有 `model_mapping` 才能准确知道本站自定义别名真实指向。


# UI

所有模型继续保留统一的：

```text
详情  [复制]
```

不会出现有的有详情、有的没有。

详情仍是小型玻璃浮层，不跳转页面。

详情内容新增：

```text
调用 ID
上游模型（若能解析）
资料模型

模型名称
上下文
最大输入
最大输出
知识截止
发布日期
最近更新
输入模态
输出模态
能力标签

信息来源
- New API /api/pricing
- New API model_mapping（配置 Secret 后）
- Models.dev
- 官方模型资料（有链接时）
```


# Route

保持原 Route：

```text
newapi.mossao.com/pricing*
```

因为该 Route 同时能够匹配：

```text
/pricing
/pricing-meta
```

不需要重新添加。


# 部署验证

```bash
curl -sSI https://newapi.mossao.com/pricing \
  | grep -i x-moss-pricing-skin
```

应返回：

```text
x-moss-pricing-skin: active-v5-source-backed-details
```


# 测试某个详情解析

部署后：

```bash
curl -sS \
  'https://newapi.mossao.com/pricing-meta?model=blian_deepseek_v4_pro'
```

如果没配置管理员 Secret，也应该尽量通过后缀匹配：

```text
deepseek-v4-pro
```

如果配置了 Secret，则会优先根据实际 `model_mapping` 解析。


# 关于来源可信度

V5 不会把 Models.dev 伪装成模型厂商官方资料。

界面会区分：

```text
本站模型目录
本站映射
结构化模型库
官方链接
```

如果找不到可靠匹配，就不展示猜出来的上下文/能力数据。
