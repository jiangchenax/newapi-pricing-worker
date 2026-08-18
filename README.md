# New API Pricing Worker V2.2

本版按最新要求调整：

- 删除顶部 UNIFIED AI GATEWAY / 大标题 / BASE URL / POST 标签整块
- 保留筛选
- 保留详情按钮
- 保留复制按钮
- 模型名、价格、筛选、按钮字号整体放大
- 全部模型一页连续展示
- 不分页
- 桌面三列，较窄桌面两列，手机一列
- 手机筛选改为可展开面板
- 不改 Caddy / New API / Docker

Route 继续使用：

newapi.mossao.com/pricing*

部署后验证：

curl -sSI https://newapi.mossao.com/pricing | grep -i x-moss-pricing-skin

应返回：

x-moss-pricing-skin: active-v2.2-filter-detail-large-font
