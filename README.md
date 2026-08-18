# New API Pricing Worker V8 Clean UI

V8 不再基于 V7.x 继续追加覆盖 CSS，而是保留稳定的数据逻辑，重新构建一套干净的 UI 样式和详情表现层。

## 一、全面重构范围

保留：

- `/api/pricing`
- `/api/perf-metrics`
- Models.dev
- OpenRouter
- LiteLLM
- New API `model_mapping`
- 严格模型资料匹配
- 模型品牌 Logo 优先
- Lobe / Simple Icons 多源验证
- 搜索 / 筛选 / 排序
- SPA 路由
- 24h 性能图
- 主列表状态逻辑

清理：

- V4～V7.8 历史详情 CSS 覆盖链
- 多代 dialog width / inset / margin 覆盖
- 旧 drawer / inline detail CSS
- 旧 detailRow / metricCard / inlineDetail 等前端死代码

现在只保留一份 V8 `GLOBAL_CSS`。


## 二、详情 Modal

宽度：

- 概览：760px
- 性能：900px
- API：700px

Header：

- 约 68px
- 模型 Logo / 调用模型 / Provider
- 关闭按钮

Tab：

- 380px 紧凑 segmented control
- 居中
- 不再横跨整个弹窗


## 三、模型摘要区

旧版：

```text
Grok 4.6 [精确匹配]

xAI's frontier model ...

调用 IDgrok-4.6
资料模型xai/grok-4.6
```

V8：

```text
Grok 4.6                              [精确匹配]

xAI's frontier model for long-running agents,
coding, knowledge work, and visual projects.

┌──────────────────────────────────────────────┐
│ 调用 ID  grok-4.6 │ 资料模型  xai/grok-4.6 │
└──────────────────────────────────────────────┘
```

说明文字最大阅读宽度 620px。

元数据行只使用一个轻背景，不再做两张大字段卡。


## 四、关键规格

V8 只保留一个统一规格栏：

```text
┌──────────────────────────────────────────────────────┐
│ 上下文 500K │ 最大输入 500K │ 最大输出 500K          │
└──────────────────────────────────────────────────────┘
```

三个区域等分，内部 label + value 居中排列，并有分隔线。

不再使用 `justify-content: space-between` 把三组数据推到三个极端。


## 五、模型信息

改成 3 列 × 2 行的紧凑事实表：

```text
知识截止 2026-02-01 | 发布日期 2026-08-12 | 最近更新 2026-08-12
输入模态 text,image | 输出模态 text       | 开放权重 不支持
```

更充分利用 760px 概览宽度。


## 六、能力 / 更多信息

能力保留现有小胶囊。

“更多信息”：

- 默认收起
- 不再有 100% 宽的大外框
- 展开后直接显示实际内容宽度的小型信息项


## 七、性能

KPI 卡高度压到约 90px。

分组表：

`平均首 TOKEN 延迟`
改为：

`平均首 Token 延迟`

折线图逻辑不变，图高约 250px。


## 八、主列表

重新整理为单一 V8 样式：

- 模型广场标题 UI
- 搜索
- 筛选
- 高密度模型表
- 模型品牌图标
- 24h 状态
- 分组标签
- 详情 / 复制

不再依赖多代样式叠加。


## Route

保持：

`newapi.mossao.com/pricing*`


## 验证

```bash
curl -sSI https://newapi.mossao.com/pricing \
  | grep -i x-moss-pricing-skin
```

应返回：

`x-moss-pricing-skin: active-v8-clean-ui`


## 代码检查

项目生成时已执行：

- Worker `node --check`
- 注入浏览器 CLIENT_JS `node --check`
- 结构检查
- 确认不存在 V7.1～V7.8 CSS 版本块
