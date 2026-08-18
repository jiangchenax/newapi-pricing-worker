# New API Pricing Worker V4.4

本版按最新反馈调整。

## 1. 详情按钮始终存在
所有模型行都保留同样的：
- 详情
- 复制

不会再出现“有的模型有详情、有的没有详情”的不整齐问题。

## 2. 详情不再抽屉、不再行内撑开
点击详情，在按钮附近出现 350px 左右的小型玻璃浮层。

详情优先展示列表里没有的数据：
- 调用 ID
- 上下文长度
- 最大输出
- 参数量
- 知识截止
- 发布日期
- 输入/输出模态
- 支持端点
- 能力
- 模型额外描述

即使接口没有丰富元数据，详情按钮仍然存在，至少会展示调用 ID。

## 3. UI 参考现有 MOSS 首页玻璃风格
模型广场使用：
- 半透明玻璃面板
- 低对比细边框
- backdrop blur
- 柔和外阴影
- 轻微 inset 高光

不复制首页背景图片，只参考其 UI 语言。

## 4. 解决顶部到底部断层
pricing 激活时：
- 原 New API header
- pricing 页面背景
使用同一套浅蓝灰色基底。

header 不再是一块颜色、内容区又突然变另一块颜色。

## 5. 搜索对齐
顶部维持与正文相同两列：
- 左：模型广场 + 数量，对齐筛选
- 右：搜索 + 排序，对齐模型列表

保留：
- 原生模型图标
- 原生 24h 状态
- 筛选
- 全部模型单页
- 不分页
- 滚动锁定
- 离开 /pricing 自动卸载

Route：
newapi.mossao.com/pricing*

验证：
curl -sSI https://newapi.mossao.com/pricing | grep -i x-moss-pricing-skin

应返回：
x-moss-pricing-skin: active-v4.4-glass-consistent-details
