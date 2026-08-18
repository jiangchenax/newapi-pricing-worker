# New API Pricing Worker V9 — Clean Architecture

V9 不再继续给 V8 追加覆盖补丁，而是把已经验证有效的功能重新组合成一套责任清晰的结构。

## 保留与恢复

- 恢复 V7 已验证的模型广场顶部渐变背景连续性
- 保留 V8.1.1 Fast Core
- 保留一次 `/api/perf-metrics/summary?hours=24`
- 保留性能 Tab 懒加载
- 保留 V8.2 New API 原版速率限制展示逻辑
- 保留 V8.2 New API 原版支持参数逻辑
- 保留资料模型在概览
- 保留三列模型信息 + 动态末行
- 保留能力在概览
- 保留 V8.2.1 正式详情 Loading Shell
- 保留 metadata 30 分钟 session cache / hover prefetch / idle warmup
- 保留 request token 防旧异步结果覆盖

## 页面背景

V8 重构时丢掉了 V7 已验证的背景规则。V9 恢复：

```css
background:
  radial-gradient(
    900px 430px at 68% -240px,
    rgba(102,119,255,.085),
    transparent 72%
  ),
  #f7f8fb;
```

页面背景和详情背景现在是两套独立责任：

- `--page-bg`：模型广场页面
- `--detail-bg`：详情弹窗实体 Surface

## 模型广场标题

最终为：

`模型广场   65`

65 来自当前 `/api/pricing` 实际模型数，不硬编码。

筛选后会显示例如：

`8 / 65`

取消：

- “个模型”
- 图标
- 数量胶囊
- 副文案
- 同步点

## 排序

彻底删除原生 `<select>`，不再出现浏览器蓝色系统下拉菜单。

自定义 Dropdown：

```text
名称 A → Z  ▾

✓ 名称 A → Z
  名称 Z → A
  按供应商
  按 24h 状态
```

## 主网格

顶部与模型列表继续共享：

`258px | 14px | 1fr`

因此：

- 标题左边缘 = 筛选左边缘
- 搜索左边缘 = 模型表左边缘
- 排序右边缘 = 模型表右边缘

## 详情结构

历史 `v8-* / v82-* / v821-*` 表现层类名已清理。

现在：

```text
dialog (transparent)
└─ detail-surface      唯一实体详情背景
   ├─ detail-top
   │  ├─ detail-header
   │  └─ detail-tabs-wrap
   └─ detail-body
```

页面背景与详情背景不会再互相污染。

## 概览

```text
标准模型 + 匹配状态
模型描述
资料模型 + Provider

关键规格
模型信息（三列动态末行）
能力
数据来源
```

关键规格 / 模型信息 / 能力继续共用 Information Panel。

## API

```text
调用信息
支持端点
速率限制
支持的参数（默认折叠）
```

速率限制和支持参数继续复用 New API Pricing 原版前端逻辑。

## 性能

Fast Core 不变：

- 主列表一次 summary 请求
- 详情打开不加载详细性能
- 用户切换到性能 Tab 后才加载该模型 24h 明细

## Route

`newapi.mossao.com/pricing*`

## 版本

`x-moss-pricing-skin: active-v9-clean-architecture`
