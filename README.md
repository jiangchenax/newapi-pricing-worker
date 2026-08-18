# New API Pricing Worker V4.2

本版调整：

- 顶部左侧改为：模型广场 + 当前模型数量
- 搜索框移动到右侧模型列表区域，左边缘与“模型”列对齐
- 排序与搜索同一行
- 页面背景改为统一浅蓝灰色，不再做上下明显渐变
- 详情由右侧抽屉改为 520px 居中小弹窗
- 详情只展示列表中没有的额外数据：
  - 上下文长度
  - 最大输出
  - 参数量
  - 知识截止
  - 发布日期
  - 输入/输出模态
  - 其他能力
- 不再在详情重复：
  - 最近24小时状态
  - 分组/标签
  - 供应商信息
- 如果接口没有更多额外字段，会直接提示“当前接口没有提供更多额外字段”

保留：
- 原生图标
- 原生 24h 状态
- 左侧筛选
- 全部模型单页
- 无分页
- 原页面滚动锁定
- 离开 /pricing 自动卸载

Route 不变：
newapi.mossao.com/pricing*

验证：
curl -sSI https://newapi.mossao.com/pricing | grep -i x-moss-pricing-skin

应返回：
x-moss-pricing-skin: active-v4.2-aligned-compact-modal
