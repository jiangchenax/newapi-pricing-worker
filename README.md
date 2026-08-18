# New API Pricing Worker V7.7

V7.7 不再继续缩 padding，而是删除导致大块空白的“字段卡片布局”。

## 1. 调用 ID / 上游模型 / 资料模型

旧结构：

- 两个或三个等宽大格子
- 字段很短也要占 50% / 33%
- 值右侧出现大块无意义空白

V7.7：

```text
调用 ID    deepseek-v4-flash-free
资料模型   deepseek/deepseek-v4-flash
```

使用：

`label max-content + value max-content`

整个外框宽度跟随最长实际内容，不再铺满弹窗。

存在上游模型时自动增加第三行。


## 2. 关键规格彻底取消三张卡

旧：

```text
[上下文     ] [最大输入    ] [最大输出    ]
[1,000,000 ] [1,000,000 ] [384,000    ]
```

新：

```text
上下文 1,000,000 | 最大输入 1,000,000 | 最大输出 384,000
```

只有一个统一外框。

每组只占“标签 + 值”实际需要的宽度。

`384,000` 后面不再存在一整张最大输出卡片留下的空白。


## 3. 模型信息改成真实 label-value table

```text
知识截止  2025-05      发布日期  2026-04-24
最近更新  2026-04-24   输入模态  text
输出模态  text          开放权重  支持
```

不再使用两个 50% 大单元格。

外框宽度跟随真实数据内容，同时受弹窗最大宽度限制。


## 4. 更多信息

继续默认收起。

展开后不使用固定 2×2 / 3 列“大格子”，改为实际内容宽度的小型信息项：

```text
模型类型 chat   Tokenizer DeepSeek   资料提供商 deepseek
```


## 5. 不同 Tab 使用不同弹窗宽度

- 概览：720px
- 性能：820px
- API：700px

切换 Tab 时宽度自动调整并保持居中。

因此概览不再为了性能折线图强行保留 820px 宽度。


## 6. 保持不变

- 字号完全不变
- `text` 保持英文
- `chat` 保持英文
- `Temperature` 保持英文
- 开放权重保持 `支持 / 不支持`
- 三 Tab
- 原生 dialog / backdrop
- 模型品牌 Logo 优先
- 24h 性能
- TTFT 0 回退
- 严格模型资料匹配
- 模型广场标题 UI


## Route

`newapi.mossao.com/pricing*`


## 验证

```bash
curl -sSI https://newapi.mossao.com/pricing \
  | grep -i x-moss-pricing-skin
```

应返回：

`x-moss-pricing-skin: active-v7.7-content-sized-overview`
