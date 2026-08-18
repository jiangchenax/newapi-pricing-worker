# New API Pricing Worker V8.2.1 Stable Detail

本版专门修复两个反复问题：

1. 详情顶部与中下部视觉背景不一致
2. 偶发出现巨大、无样式的“正在解析本站模型映射……”框

## 旧加载框的真实根因

V8 重构后删除了旧 `detail-pop-*` 样式，但 `detailLoadingContent()` 一直仍在使用：

- `detail-pop-head`
- `detail-pop-title`
- `detail-pop-loading`

只要 `/pricing-meta` 查询稍慢，就会把这套无样式旧 DOM 暴露出来。

V8.2.1 已完全删除旧 loading DOM。

加载态现在和正式详情使用完全相同的：

- Logo
- 模型 Header
- 关闭按钮
- 三个 Tab 的位置
- Detail Body

正文中只显示一个紧凑 loading 状态。

## 背景改成真正的一层

现在：

- dialog 本身透明
- `.v8-detail` 是唯一实体 `--detail-bg`
- Header 透明
- Tab wrapper 透明
- Body 透明
- Tab panel 透明

所以顶部和正文不是“分别设置相同颜色”，而是直接透出同一个实体背景 DOM。

## 详情等待优化

- 同一模型 metadata 使用 sessionStorage 缓存 30 分钟
- 鼠标移到“详情”按钮时提前预取
- 首屏渲染后 idle 状态后台预热一次 metadata
- Worker 中 admin mapping 与 Models.dev / OpenRouter / LiteLLM 同时启动
- 每次详情打开使用 request token，旧异步结果禁止覆盖当前模型

## 保留

V8.2 的所有功能继续保留：

- Fast Core
- 单次 24h summary
- 性能详情懒加载
- New API 原版速率限制展示逻辑
- New API 原版支持参数逻辑
- 参数默认折叠
- 资料模型在概览
- 三列模型信息
- 能力在概览
- 模型广场单行标题
- 搜索框与列表同网格

## 版本

`x-moss-pricing-skin: active-v8.2.1-stable-detail`
