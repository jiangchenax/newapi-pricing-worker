# New API Pricing Worker V7.6

V7.6 继续压缩概览空白，但保持 V7.5 的字号不变。

## 1. 调用 ID / 上游模型 / 资料模型横向布局

桌面：

```text
调用 ID                 资料模型
blian_deepseek_v4_pro    deepseek/deepseek-v4-pro
```

存在明确上游模型时：

```text
调用 ID        上游模型        资料模型
...            ...             ...
```

不再每项单独占一整行。

移动端自动恢复单列。


## 2. 关键规格卡压缩

保留：

- 上下文
- 最大输入
- 最大输出

字号不变。

卡高固定约：

`66px`

通过减少 padding 和无效留白实现。


## 3. 模型信息压缩

模型信息仍保持两列：

- 知识截止
- 发布日期
- 最近更新
- 输入模态
- 输出模态
- 开放权重

每行固定约：

`46px`

不缩小字体。


## 4. 更多信息默认收起

每次打开详情：

`更多信息`

都会恢复为关闭状态。

不会因为之前展开过就默认撑高概览。


## 5. 更多信息动态排布

不再复用固定两列大面板。

展开后：

- 1 项 → 1 列
- 2 项 → 2 列
- 3 项 → 3 列一行
- 4 项 → 2 × 2
- 5～6 项 → 3 列自动换行

例如 3 项：

```text
模型类型 对话 | Tokenizer DeepSeek | 资料提供商 deepseek
```

不会再出现右下角半块大空白。


## 6. 展示文案中文化

只改变 UI 展示，不改变接口原始数据：

- `text` → `文本`
- `image` → `图像`
- `audio` → `音频`
- `video` → `视频`
- `chat` → `对话`
- `completion` → `补全`
- `embedding` → `向量`
- `Temperature` → `温度参数`
- 开放权重 `支持` → `是`
- 不开放 → `否`


## 7. 进一步收紧区块间距

- 概览区 section gap：减少
- 能力区和更多信息距离：减少
- 数据来源向上收紧
- 字号保持 V7.5


## V7.5 / V7.4 功能全部保留

- 原生 dialog 稳定居中
- 导航栏一起暗化
- 概览 / 性能 / API
- 模型本身品牌 Logo 优先
- 图标多源验证
- TTFT 0 自动回退平均延迟
- 24h 性能图
- 严格资料匹配
- 模型广场标题 UI


## Route

保持：

`newapi.mossao.com/pricing*`


## 验证

```bash
curl -sSI https://newapi.mossao.com/pricing \
  | grep -i x-moss-pricing-skin
```

应返回：

`x-moss-pricing-skin: active-v7.6-dense-overview-dynamic-more`
