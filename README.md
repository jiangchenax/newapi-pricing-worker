# MOSS New API Pricing Worker V2

## 本版核心

- `/pricing` 全部模型一次性展出
- **不分页**
- 浏览器直接请求 `/api/pricing`
- 按供应商分组
- 搜索模型 / 供应商
- 点击模型名称旁按钮直接复制模型 ID
- 自适应 New API 浅色 / 深色模式
- 用完整覆盖层解决上一版与原模型广场叠加的问题
- 保留 New API 顶部导航
- 不修改 New API、Caddy、Docker

## 部署

用本项目覆盖上一版 `moss-newapi-pricing` Worker 仓库，然后提交/部署。

Route 保持：

```text
newapi.mossao.com/pricing*
```

## 验证

```bash
curl -sSI https://newapi.mossao.com/pricing | grep -i x-moss-pricing-skin
```

应看到：

```text
x-moss-pricing-skin: active-v2-all-models
```

浏览器强刷：

```text
Ctrl + Shift + R
```

然后打开：

```text
https://newapi.mossao.com/pricing
```

页面“全部模型”处应显示当前模型总数，例如 71，并且整页连续展示，不出现上一页/下一页。

## 回滚

Cloudflare Worker 回退到上一个 deployment，或者删除 `/pricing*` Route。
