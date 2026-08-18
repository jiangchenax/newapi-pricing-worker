# MOSS New API Pricing Worker V2.1 FIXED

本版修复 Wrangler 构建错误：

```text
Expected ";" but found "viewBox"
src/index.js:539
```

根因：浏览器端 CLIENT_JS 被嵌入 Worker 的模板字符串时，
内部 `<svg>` 使用的反引号模板字符串提前结束了外层模板。

V2.1 已改为：
- GLOBAL_CSS 使用安全 JSON 字符串字面量
- CLIENT_JS 使用安全 JSON 字符串字面量
- HTMLRewriter 注入时使用字符串拼接
- 不再存在嵌套反引号冲突

功能不变：
- 全部模型单页展出
- 不分页
- 从 /api/pricing 一次加载完整模型列表
- 按供应商分组
- 搜索
- 模型 ID 复制
- 覆盖原 pricing 内容，避免两套界面叠加

Route 保持：

```text
newapi.mossao.com/pricing*
```

部署后验证：

```bash
curl -sSI https://newapi.mossao.com/pricing | grep -i x-moss-pricing-skin
```

应返回：

```text
x-moss-pricing-skin: active-v2-all-models
```
