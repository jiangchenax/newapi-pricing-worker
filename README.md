# New API Pricing Worker V7.8

V7.8 修复 V7.7 把内容缩到左侧、右侧出现大面积空白的问题。

## 1. 概览采用统一内容宽度

不再对整个：

- 调用 ID
- 关键规格
- 模型信息

使用 `width: max-content`。

概览内容统一使用整个可用内容区。


## 2. 调用 ID / 上游模型 / 资料模型

取消独立大框和等宽单元格。

现在是一条紧凑元数据栏：

```text
调用 ID  blian_deepseek_v4_pro  |  资料模型  deepseek/deepseek-v4-pro
```

存在明确上游模型时自动增加：

```text
| 上游模型 xxx
```

没有“调用 ID 自己占一大格”的问题。


## 3. 关键规格

只有一个完整的外框：

```text
上下文 1,000,000     最大输入 1,000,000     最大输出 384,000
```

三组数据通过 `justify-content: space-between` 分布到整行。

最后的“最大输出 384,000”靠近右侧，后面只剩正常的外框 padding，
不再存在一整张最大输出卡留下的空白。


## 4. 模型信息

模型信息重新铺满概览内容宽度：

```text
知识截止 2025-05       发布日期 2026-04-24
最近更新 2026-04-24    输入模态 text
输出模态 text           开放权重 支持
```

结构是真正的：

`label | value | label | value`

而不是两个独立 50% 卡片。


## 5. 三个 Tab 改成紧凑 segmented control

桌面不再横跨整个弹窗。

三个按钮各约 122px：

```text
            [ 概览 ] [ 性能 ] [ API ]
```

移动端自动恢复三等分。


## 6. Modal 宽度

- 概览：760px
- 性能：900px
- API：700px

切换 Tab 后仍由原生 dialog 居中。


## 7. 保留

- 字号不变
- text 保持英文
- chat 保持英文
- Temperature 保持英文
- 开放权重保持 支持 / 不支持
- 更多信息默认收起
- 模型品牌 Logo
- 原生 dialog / backdrop
- 24h 性能
- TTFT 0 回退
- 严格资料匹配
- 模型广场标题 UI


## Route

`newapi.mossao.com/pricing*`


## 验证

```bash
curl -sSI https://newapi.mossao.com/pricing \
  | grep -i x-moss-pricing-skin
```

应返回：

`x-moss-pricing-skin: active-v7.8-unified-overview-layout`
