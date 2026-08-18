# New API Pricing Worker V7.4

## 1. 修复 V7.3 详情框跑到左上角

V7.3 的问题来自两套定位同时存在：

- 原生 `<dialog>.showModal()`
- JS 手写 `style.left / style.top`
- CSS 又覆盖 `margin / inset`

V7.4 删除 JS 坐标定位。

现在 JS 只读取：

`header.getBoundingClientRect().bottom`

并写入：

`--moss-dialog-safe-top`

CSS 负责全部定位。

桌面规则：

- Header 下方作为可用区域顶部
- 页面底部保留 14px
- 水平居中
- 垂直居中于 Header 以下可用区域
- 最大宽度 820px
- 最大高度 min(82vh, 可用高度, 820px)

使用：

- top
- right: 0
- bottom
- left: 0
- height: fit-content
- margin: auto

不再写：

- JS left
- JS top
- JS width
- JS max-height

同时打开详情时会主动清理旧 SPA 环境残留的 inline left/top。


## 2. 保留真正的全屏 Modal 遮罩

继续使用：

`<dialog>`
`showModal()`
`dialog::backdrop`

因此：

- 导航栏
- 搜索
- 筛选
- 模型列表

会统一变暗。

详情框保持正常亮度。


## 3. “模型广场 / 71 个模型”重新设计

左上角现在变成一个紧凑的工作台身份组件：

- 30px 四宫格模型图标
- “模型广场”主标题
- “71 个模型”柔和数量胶囊
- 最右边一个小型同步状态灯

视觉材料和：

- 搜索框
- 左侧筛选
- 模型列表

保持一致：

- 轻玻璃
- 低对比边框
- 小圆角
- 极轻阴影

不会做成大型 Hero，也不加入营销文案。


## 4. V7.3 已确认功能全部保留

- 概览 / 性能 / API 三 Tab
- TTFT 全 0 自动回退平均延迟
- 删除重复 TPS 小卡
- 详情框大尺寸
- 模型本身品牌 Logo 优先
- 图标单状态渲染
- Lobe / Simple Icons 多源验证
- 严格模型资料匹配
- New API / Models.dev / OpenRouter / LiteLLM
- 24h 性能折线图


## Route

保持：

`newapi.mossao.com/pricing*`


## 验证

```bash
curl -sSI https://newapi.mossao.com/pricing \
  | grep -i x-moss-pricing-skin
```

应返回：

`x-moss-pricing-skin: active-v7.4-stable-dialog-market-heading`
