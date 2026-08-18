# New API Pricing Worker V8.1

本版把前面确认的布局和信息架构问题一次合并处理。

## 概览

概览只保留模型本身的信息：

- 标准模型名 + 匹配状态
- 模型描述
- 关键规格
- 模型信息
- 能力
- 数据来源

以下字段已从概览移走：

- 调用 ID
- 上游模型
- 资料模型
- 资料提供商
- 模型类型
- 更多信息

### 统一信息面板

关键规格、模型信息、能力全部使用同一套组件：

- 相同背景
- 相同边框
- 相同圆角
- 相同 cell 结构
- 相同标题间距
- 相同分隔线

能力不再使用独立胶囊式视觉。

## API

API 现在包含：

1. 调用信息
   - 调用 ID
   - 上游模型（存在明确映射时）
   - 资料模型 + 资料提供商
   - 模型类型

2. 支持端点

3. 速率限制

4. 支持的参数（默认折叠）

资料模型与资料提供商合并显示，例如：

`nvidia/nemotron-3.5-lightning  [NVIDIA]`

## 速率限制

不会生成假数据。

显示优先级：

1. Worker 环境变量 `MODEL_RATE_LIMITS_JSON`
2. `/api/pricing` 中明确存在的 rate-limit 字段
3. 没有可靠数据时显示“未配置模型级公开限制”

可选 Worker 变量示例：

```json
{
  "nemotron-3.5-lightning-free": {
    "rpm": 60,
    "tpm": 120000,
    "rpd": 1000
  },
  "grok-4.6": {
    "total_request_limit": 1000,
    "success_request_limit": 800,
    "window_seconds": 300
  }
}
```

匹配使用精确模型 ID，不做模糊匹配。

## 支持的参数

严格匹配到 OpenRouter 模型后，保留其 `supported_parameters`。

默认状态：

`支持的参数    12 项  ⌄`

点击后显示全部参数。

参数名称保持 API 原字段名，例如：

- temperature
- top_p
- max_tokens
- tools
- tool_choice
- stream
- response_format

没有可靠参数资料时明确显示暂无资料。

## Dialog 稳定性

详情 Dialog 改为：

- Y 坐标固定在 New API 顶栏下方
- 只做水平居中
- `bottom: auto`
- `margin: 0 auto`

因此概览 / 性能 / API 切换时，Header 和三个 Tab 的屏幕 Y 坐标不再上下跳。

宽度仍按 Tab：

- 概览 760px
- 性能 900px
- API 700px

## 颜色一致性

详情内部定义唯一纯色背景：

亮色：

`#f7fafc`

暗色：

`#101319`

Dialog / Header / Tab 区 / Body 全部使用同一个 `--detail-bg`。

详情内部不再使用半透明背景和 backdrop-filter 叠色。

只有外层 `dialog::backdrop` 负责遮罩。

## 模型广场标题

删除：

- 四宫格图标
- 玻璃标题卡
- 同步圆点
- 数量胶囊

改为纯文字：

```text
模型广场
71 个模型
```

## 搜索框与模型列表对齐

顶部和主体共用同一套网格：

桌面：

`258px | 14px | 1fr`

1040px 以下：

`230px | 14px | 1fr`

因此：

- 模型广场左边缘 = 筛选面板左边缘
- 搜索框左边缘 = 模型列表左边缘
- 排序框右边缘 = 模型列表右边缘

## 保留

- 全模型单页
- 搜索 / 筛选 / 排序
- 最近 24 小时状态
- New API `/api/pricing`
- New API `/api/perf-metrics`
- Models.dev
- OpenRouter
- LiteLLM
- New API model_mapping
- 严格资料匹配
- 模型品牌 Logo 优先
- verified icon pipeline
- TTFT 为 0 时回退
- 24h 性能趋势
- 原生 dialog/backdrop

## Route

保持：

`newapi.mossao.com/pricing*`

## 版本检查

部署后：

```bash
curl -sSI https://newapi.mossao.com/pricing | grep -i x-moss-pricing-skin
```

预期：

`x-moss-pricing-skin: active-v8.1-information-architecture`
