# New API Pricing Worker V9.2 — Opaque Continuity

V9.2 修复 V9.1 新暴露出来的原版 New API 内容穿透问题。

## 现象

V9.1 为了让 Header → 模型广场背景连续，把：

`#moss-pricing-app`

改成了透明。

结果原版 New API Pricing DOM 虽然大部分被隐藏，但仍有部分原生页面元素位于 CSS 隐藏范围之外，因此会从透明模型广场下面穿透出来。

截图中间出现的巨大黑色“模型广场”文字就是这个问题。

## V9.2 方案

不再：

`Header 背景 + 透明 Pricing`

而改成：

```text
body
  └─ viewport-fixed page canvas

#moss-pricing-app
  └─ 同一份 viewport-fixed page canvas
```

两者使用完全相同的：

`--moss-page-canvas`

并且都使用 `background-attachment: fixed` 的同一视口坐标。

因此：

- Header → 模型广场颜色继续连续
- Pricing 根层重新变成实体画布
- 原版 New API 内容无法穿透
- 不会重新出现 V8 那种“第二块背景从 64px 处重新开始”的断层

## 双保险

原版：

`body main:not(#moss-pricing-app)`

现在同时使用：

- `visibility:hidden`
- `opacity:0`
- `pointer-events:none`
- `user-select:none`

即使未来某个 panel 出现透明区域，原生 main 也不会显示。

## 排序菜单

V9.1 的紧凑自定义排序菜单保持不变。

## 其他全部保留

- 当前 65 个模型
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
- 搜索与列表同网格
- V9 Clean Architecture

## 版本

`x-moss-pricing-skin: active-v9.2-opaque-continuity`
