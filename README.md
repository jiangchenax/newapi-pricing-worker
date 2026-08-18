# New API Pricing Worker V7.5

V7.5 只重构“概览”Tab 的信息密度，字号保持 V7.4 不变。

主要变化：

- 描述区取消大卡式空白
- 调用 ID / 上游模型 / 资料模型合并为紧凑信息面板
- “推断匹配 / 已确认映射 / 精确匹配”改为小标签
- 只保留“上下文 / 最大输入 / 最大输出”三个关键规格卡
- 卡片高度约 58px
- 知识截止 / 发布日期 / 最近更新 / 输入输出模态 / 开放权重合并到两列信息面板
- 模型类型 / Tokenizer / 资料提供商 / 弃用日期默认折叠到“更多信息”
- 每个字段下方不再重复显示 Models.dev / LiteLLM / OpenRouter
- 字段来源仍保留在鼠标悬停 title
- 数据来源统一放到底部一行
- 性能 / API Tab 不修改

V7.4 的稳定 dialog 居中、全屏 backdrop、模型品牌 Logo、24h 性能等全部保留。

Route：
newapi.mossao.com/pricing*

验证：
curl -sSI https://newapi.mossao.com/pricing | grep -i x-moss-pricing-skin

应返回：
x-moss-pricing-skin: active-v7.5-compact-overview
