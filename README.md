# New API Pricing Worker V6.1

本版重点：

- 模型名称：14px
- 模型图标：29px
- 模型行高：74px
- 供应商：10.5px
- 表头：11px
- 标签：10px
- 详情/复制按钮：31px

最近 24 小时状态保留中文标签：
- 成功率
- 延迟
- 吞吐量

“其他”仍保留为内部 provider 值，所以左侧：
供应商 → 其他
仍然可以正常筛选。

只是模型行副标题不再显示“其他”，避免重复和干扰阅读。

详情浮层定位：
- 实时读取 header.bottom
- 安全顶部 = header.bottom + 12px
- 优先向下展开
- 下方不足再向上
- 上下都不足时固定在 Header 下方并内部滚动
- 左右安全边距 14px
- 最大宽度 400px
- 最大高度 460px

保留 V6 全部功能：
- 轻玻璃模型工作台
- New API /api/pricing
- New API model_mapping
- Models.dev
- OpenRouter
- LiteLLM
- 多源字段合并
- 后缀字段匹配
- tianyi_deepseek_v4 → deepseek-v4
- 原生彩色图标
- 原生最近 24h 状态
- 单页全部模型

Route 不变：
newapi.mossao.com/pricing*

验证：
curl -sSI https://newapi.mossao.com/pricing | grep -i x-moss-pricing-skin

应返回：
x-moss-pricing-skin: active-v6.1-readable-safe-popover
