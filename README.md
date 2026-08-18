# New API Pricing Worker V8.2

V8.2 基于 V8.1.1 Fast Core，保留全部速度优化，并完成详情信息架构和 New API 原版 API 页逻辑迁移。

## 1. 保留 Fast Core

- 首屏只等待 `/api/pricing`
- 不等待原版 React Pricing DOM
- 不自动翻页采集原版卡片
- 主列表 24h 状态使用一次 `/api/perf-metrics/summary?hours=24`
- 详细性能仅在点击“性能”Tab 后加载
- `/api/pricing` session cache 60 秒
- 24h summary session cache 30 秒
- CSS / JS 使用版本化静态资源 + immutable cache

## 2. 资料模型移回概览

API 不再展示“资料模型”。

概览顶部：

```text
Nemotron 3.5 Lightning    [精确匹配]

模型描述……

资料模型  nvidia/nemotron-3.5-lightning  [NVIDIA]
```

资料提供商和资料模型写在一起。

## 3. 模型信息改为三列

```text
知识截止 | 发布日期 | 最近更新
输入模态 | 输出模态 | Tokenizer
开放权重 | 弃用日期
```

最后一行动态：

- 3 项 → 三列
- 2 项 → 两列
- 1 项 → 独占整行

不生成空占位单元格。

## 4. 关键规格 / 模型信息 / 能力

继续使用同一套 Information Panel：

- 同背景
- 同边框
- 同圆角
- 同分隔线
- 同标题节奏

能力继续留在概览。

## 5. New API 原版速率限制逻辑

直接移植当前 New API：

`web/src/features/pricing/lib/mock-stats.ts`

中的：

- `hashStringToSeed`
- `seededRandom`
- `apiCategoryOf`
- `buildRateLimits`
- `formatRateLimit`

展示：

```text
分组       RPM      TPM      RPD
default    ...
ssvip      ...
```

注意：这和 New API 原版 Pricing API 页性质一致，是确定性的展示值，不是后端真实强制限流数据。

## 6. New API 原版支持参数逻辑

直接移植：

`buildSupportedParameters`

以及当前 New API 的参数集合：

- `COMMON_CHAT_PARAMS`
- `REASONING_PARAMS`
- `EMBEDDING_PARAMS`
- `IMAGE_PARAMS`
- `VIDEO_PARAMS`

支持参数默认折叠：

```text
支持的参数    16 项  ⌄
```

点击后展开完整四列表格：

```text
参数 | 类型 | 默认值 / 范围 | 说明信息
```

参数名保持 API 原字段名。

## 7. API 最终结构

```text
调用信息
  调用 ID
  上游模型（存在明确映射时）
  模型类型

支持端点

速率限制
  分组 / RPM / TPM / RPD

支持的参数（默认折叠）
```

## 8. 详情上下颜色统一

不再给 Header / Tabs / Body 分别绘制背景。

现在：

- 只有 `dialog.model-detail-popover` 绘制 `--detail-bg`
- Header = transparent
- Tab 区 = transparent
- Body = transparent
- Dialog 自身 `overflow:hidden`
- 只有 Body 内部滚动

因此上部和中下部来自同一个真实背景平面，而不是多个“相同色值”的合成层。

## 9. Tab 位置稳定

Dialog：

- 固定顶部 Y 坐标
- 只水平居中
- `bottom:auto`

Header + Tab 位于滚动区外。

切换概览 / 性能 / API 时顶部位置不改变。

## 10. 模型广场标题

改成单行：

```text
模型广场   71 个模型
```

无图标、无玻璃卡、无同步点、无副文案。

搜索区和模型列表继续共用同一主网格：

`258px | 14px | 1fr`

## Route

保持：

`newapi.mossao.com/pricing*`

## 版本检查

```bash
curl -sSI https://newapi.mossao.com/pricing | grep -i x-moss-pricing-skin
```

预期：

`x-moss-pricing-skin: active-v8.2-newapi-native`
