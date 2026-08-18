# New API Pricing Worker V7.3

本版只处理已经确认的项目。

## 1. 修复 0ms TTFT 折线图

旧逻辑：

只要 `avg_ttft_ms` 字段存在，即使整条序列都是 `0`，
也会选择“平均首 Token 延迟”。

结果可能出现：

- 上方平均延迟 1.92s
- 下方首 Token 延迟趋势 0~20ms
- 实际所有 TTFT 点都是 0

V7.3：

只有：

`avg_ttft_ms > 0`

才视为有效 TTFT 趋势点。

如果 TTFT：
- 全 0
- null
- 没有有效正值

自动切换到：

`avg_latency_ms`

图表标题也同步变为：

`平均延迟`


## 2. 详情框扩大

桌面：

- 最大宽度约 820px
- 最大高度约 82vh
- 同时受 Header 安全区和页面底部 14px 安全距离限制

性能 Tab 可以在一屏内看到更多折线图。


## 3. 去掉折线图上方重复 TPS 小卡

删除类似：

`ssvip / 19.25 t/s`

因为相同内容已经在：

`各分组性能`

表格中展示。

保留：
- 多分组图例
- 折线图


## 4. 导航栏和整个页面统一变暗

详情容器由普通 `<div>` 改为：

`<dialog>`

并使用浏览器原生：

`dialog.showModal()`

以及：

`dialog::backdrop`

因此暗层属于浏览器 Top Layer，
会覆盖：

- 顶部导航栏
- 筛选
- 搜索
- 模型列表
- 页面其他区域

只有模型详情保持正常亮度。

不再使用 `100vmax box-shadow` 模拟遮罩。

点击详情框外的 backdrop 可以关闭；
ESC 也可以关闭。


## 5. 图标优先模型本身品牌

图标规则调整为：

1. New API 真原生图标
2. 从“模型名称”识别模型家族
3. New API icon/vendor hint
4. Provider/运行平台品牌
5. fallback

例如：

`cerebras/gemma-4-31b`
→ Gemma Logo

而不是：
→ Cerebras Logo

`cerebras/gpt-oss-120b`
→ OpenAI / GPT Logo

`tianyi_deepseek_v4`
→ DeepSeek Logo

`nvidia/nemotron-*`
→ NVIDIA Logo

也就是说：

**模型品牌优先，运行平台品牌只作为无法识别模型家族时的 fallback。**


## 未修改

按要求，本版不再修改主列表 24h 状态文案逻辑。


## Route

保持：

`newapi.mossao.com/pricing*`


## 验证

```bash
curl -sSI https://newapi.mossao.com/pricing \
  | grep -i x-moss-pricing-skin
```

应返回：

`x-moss-pricing-skin: active-v7.3-performance-modal-model-brand`
