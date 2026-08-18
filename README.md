# New API Pricing Worker V4.1

本版只整理 V4 的视觉层，不改原生图标/原生状态抓取和详情抽屉逻辑。

修改：
- 去掉页面内重复的“模型广场”标题
- 隐藏“已同步原生信息 71/71”技术提示
- 删除第二层“显示 71 个模型”工具栏
- 合并为：模型数量 + 搜索 + 排序，一行完成
- 搜索过滤时数量显示为 `匹配数 / 总数`
- 顶部背景改为和 New API 导航更接近的浅蓝白 → 页面灰白渐变
- 供应商为“其他”时不再显示“其他”
- 左侧筛选与右侧模型表顶部对齐

保留：
- 原生模型彩色图标
- 原生最近 24 小时状态抓取
- 详情当前页右侧抽屉
- 全部模型单页
- 无分页
- html/body 原页面滚动锁定
- 离开 /pricing 自动卸载

Route 不变：
newapi.mossao.com/pricing*

验证：
curl -sSI https://newapi.mossao.com/pricing | grep -i x-moss-pricing-skin

应返回：
x-moss-pricing-skin: active-v4.1-clean-top-native-icons-status
