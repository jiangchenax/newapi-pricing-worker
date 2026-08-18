# New API Pricing Worker V9.1 — Continuity

V9.1 只处理两个明确的视觉问题，并保留 V9 全部数据/性能逻辑。

## 1. Header → 模型广场背景连续

V9 仍然让 `#moss-pricing-app` 自己绘制页面背景，因此 New API Header 下方仍然会形成一条新背景边界。

V9.1 改成：

- `body` 绘制整个 Pricing 页统一背景
- `#moss-pricing-app` 完全透明
- Header 下方不再重新起一块底色

亮色背景使用与当前 New API Header 实际视觉匹配的蓝 → 白 → 青水平渐变。

因此从 Logo 所在顶部一直到模型广场，使用同一张连续画布。

详情背景仍然完全独立：

- page: body continuous canvas
- detail: `--detail-bg`

二者互不影响。

## 2. 排序菜单压缩

排序 Trigger 继续与搜索框对齐，不改变顶部主网格。

菜单改为：

- 宽度 = Trigger 宽度
- menu padding 3px
- 圆角 9px
- option 高度 30px
- option 圆角 5px
- 字号 9.5px
- 选中状态使用极淡背景
- 阴影减轻
- 不再出现大面积浅紫选中块

## 保留

- 当前 65 个模型
- V9 Clean Architecture
- Fast Core
- 单次 24h summary
- 性能详情懒加载
- metadata 缓存 / hover 预取 / idle warmup
- New API 原版速率限制逻辑
- New API 原版支持参数逻辑
- 参数默认折叠
- 资料模型在概览
- 三列模型信息
- 能力在概览
- 自定义排序下拉
- 搜索与模型列表同一网格

## 版本

`x-moss-pricing-skin: active-v9.1-continuity`
