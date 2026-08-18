# New API Pricing Worker V3

本版解决 V2.2 的五个结构问题：

1. 恢复模型图标
   - 优先使用 model.icon / model.vendor_icon / vendor.icon
   - Worker 通过 /pricing-icon/*.svg 做同源图标代理
   - 图标失败自动回退首字母

2. 详情不再跳转
   - 详情按钮不修改 URL
   - 当前模型广场内打开右侧详情抽屉
   - 展示描述、价格、计费、状态、成功率、延迟、吞吐、分组、端点、上下文等

3. 修复离开模型广场后覆盖层残留
   - 监听 pushState / replaceState / popstate
   - 额外 250ms 路由兜底检测
   - 一旦 pathname 不是 /pricing，立即卸载 #moss-pricing-app

4. 恢复模型状态
   - 从 /api/perf-metrics/summary?hours=24 读取
   - 列表展示：正常 / 波动 / 异常 / 暂无状态
   - 同时显示成功率、平均延迟、吞吐量
   - 详情抽屉显示更完整指标

5. 重做阅读效率
   - 桌面端改为高密度列表，而不是三列大卡片
   - 列：模型 / 输入 / 输出 / 计费 / 状态 / 操作
   - 左侧筛选继续保留
   - 980px 以下自动转双列卡片
   - 720px 以下单列

仍然保持：
- 全部模型一页展示
- 不分页
- Route 不变：newapi.mossao.com/pricing*
- 不修改 Caddy
- 不修改 New API Docker / 源码


部署后验证：

curl -sSI https://newapi.mossao.com/pricing | grep -i x-moss-pricing-skin

应返回：

x-moss-pricing-skin: active-v3-icons-drawer-route-status-dense


图标代理测试（部署后）：

curl -sSI https://newapi.mossao.com/pricing-icon/openai.svg | head

应返回 200 且 Content-Type 为 image/svg+xml。


回滚：
Cloudflare Worker → Deployments → 回退上一个版本即可。
