# New API Pricing Worker V4

## 这版解决什么

1. 图标不再重绘
- 不再请求第三方图标库
- 不再自己猜供应商图标
- Worker 前端会让原 New API 模型广场在后台逐页切换
- 逐模型复制原卡片中已经渲染好的 icon HTML
- 因此颜色、图形、模型对应关系以 New API 原页面为准

2. 删除输入 / 输出 / 计费
桌面表格只剩：
- 模型
- 最近 24 小时状态
- 分组 / 标签
- 操作

3. 最近 24 小时状态不再直接调用 perf-metrics 接口
- V3 调 /api/perf-metrics/summary?hours=24
- 新版 v1 中这个接口存在 404 反馈，因此 V4 不再依赖它
- V4 直接从原 New API 模型卡片中读取：
  - 成功率
  - 平均延迟
  - 吞吐量
- 自动逐页读取全部分页模型，再恢复原页面到第 1 页

4. 原页面不再能从顶部滚出来
- pricing 激活时给 html/body 加 moss-pricing-v4-lock
- html/body overflow: hidden
- 原 main visibility:hidden
- 新模型广场自己独立滚动
- 离开 /pricing 后立即解除锁定并卸载覆盖层

5. 详情仍在当前页面
- 右侧抽屉
- 不修改 URL
- 不跳转


## Route

保持：

newapi.mossao.com/pricing*

不要重新添加 Route。


## 部署验证

curl -sSI https://newapi.mossao.com/pricing | grep -i x-moss-pricing-skin

应返回：

x-moss-pricing-skin: active-v4-native-icons-native-status-no-price-scroll-lock


## 页面验证

顶部会显示类似：

已同步原生信息 71/71

这表示 V4 已把原生模型卡片逐页读取完成。

如果不是 71/71：
- 先等 2~5 秒
- 原生页面共有 4 页，V4 会在后台自动逐页读取
- 全程原页面被隐藏，不会看到翻页过程
