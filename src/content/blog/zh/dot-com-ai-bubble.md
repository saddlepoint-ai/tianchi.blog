---
title: "互联网泡沫复盘：AI 这一波到底泡不泡？"
description: "对 1995-2002 dot-com 泡沫的机制复盘，并把 OpenAI、Anthropic、NVIDIA 的收入和估值事实按泡沫论与真实价值论两侧整理。"
pubDate: 2026-06-13
tags: ["research", "dot-com", "ai", "valuation", "infrastructure", "bubble"]
lang: "zh"
sourcePath: "claude-workspace/public/wiki/research/2026-06-13-dot-com-ai-bubble.md"
---

## 一句话结论

AI 这一波不是“没有真实价值”的泡沫。OpenAI、Anthropic 已经有非常罕见的收入规模，NVIDIA 更是有可审计的巨额利润。但它也明显有泡沫结构：估值基于 run-rate 而非完整 S-1/10-K，收入质量、毛利、留存、关联方收入和长期算力承诺仍不透明，基础设施投入强度很像 1990s 末的 telecom overbuild。

更准确的说法：**AI 像 dot-com + telecom 的混合体。应用层已经有真实 ARR，基础设施层已经有真实利润；风险在于价格和资本开支把“未来的全部采用率”提前资本化了。**

## 研究口径

这份只收集已经发生的事实和事后复盘，不做“会不会崩”的预测。私有公司数据只分三层看：

| 可信度 | 例子 | 用法 |
|---|---|---|
| 公司正式披露 | OpenAI/Anthropic 官网融资公告、NVIDIA 10-K/财报 | 可作为主事实 |
| 主流媒体/付费媒体报道 | FT、The Information、Bloomberg、CNBC、Reuters | 标注为 reported / media report |
| 评论者分析 | Om Malik、Stratechery、Oaktree 等 | 用来归纳问题框架，不当作硬数据 |

## Dot-com 泡沫是怎么发生的

### 1. 起点是真技术，不是纯骗局

1990s 中期，PC、浏览器、World Wide Web 和通信设备价格下降同时发生。FRBSF 对当时 IT 投资的复盘认为，1995-2000 年真实 IT investment 平均每年增长约 24%，核心原因之一是 IT 商品价格快速下降，尤其是计算机、通信设备和软件的技术进步。

这点很重要：dot-com 泡沫不是“互联网没用”。恰恰相反，是互联网太显然有用，导致市场把未来十年的采用率提前买进了 1999 年的价格里。

### 2. 资本机制把“真实趋势”推成“融资机器”

Goldman Sachs 的历史回顾把几个条件串起来：

| 条件 | 当时发生了什么 |
|---|---|
| 宏观背景 | 1990s 后期美国经历战后最长扩张之一，通胀和失业下降，生产率改善 |
| 流动性 | 1998 年 LTCM 危机后 Fed 降息，资本更便宜 |
| IPO 市场 | 1998 年以后市场欢迎连续不断的 dot-com IPO |
| 投资者结构 | 散户和机构都买入，很多公司还没有收入或利润 |
| 叙事 | “new economy”让利润纪律短期失效 |

NBER 的 Ofek/Richardson 论文给了一个更技术性的解释：互联网股票里乐观投资者和悲观投资者看法分歧极大，但悲观者受 short sale constraints 约束，不能充分把悲观判断反映进价格。于是价格更像由乐观者定价。等到 lockup 到期、内部人和早期投资人能卖，卖方供应突然变多，价格支撑开始消失。

### 3. 商业模式上，“亏钱”短期变成了增长信号

Brian McCullough 对 Priceline 的案例写得很典型：

| 模式 | 表现 |
|---|---|
| Get Big Fast | 用补贴、广告、品牌占领心智 |
| 亏损不再扣分 | “不盈利”反而代表还在高速扩张 |
| IPO 是产品 | VC 和早期投资者的退出发生在 IPO，而不是长期经营利润 |
| 指标替代现金流 | eyeballs、page views、brand awareness 替代利润 |

1999 年，Morgan Stanley 追踪的 199 家互联网股票总市值约 4500 亿美元，总年销售额约 210 亿美元，合计亏损约 62 亿美元。这个结构和今天看 AI 的关键问题很像：**收入规模可以是真的，但估值可能在买一个还没被验证的利润结构。**

### 4. 泡沫不只在网站，也在通信基础设施

这点和今天 AI 最像。dot-com 时代更大的隐性泡沫是 telecom。McCullough 的复盘称，电信公司在股债市场融资建设光纤，泡沫后 WorldCom、Global Crossing 等崩掉，但留下了巨量光纤和带宽过剩。

历史后果有两面：

| 坏处 | 好处 |
|---|---|
| 资本损失、破产、裁员 | 后来的互联网公司吃到了便宜带宽 |
| 投资者承担损失 | 2004 年带宽成本相比泡沫期大幅下降 |
| 供应链公司订单坍缩 | YouTube、云、社交网络等后来跑在已铺好的轨道上 |

所以“泡沫”不等于“无社会价值”。它常常是用错误价格融资，建设后来有用但早期投资者赚不到钱的基础设施。

### 5. 崩盘不是单点触发，是多个支撑同时松掉

常见时间线：

| 时间 | 事件 |
|---|---|
| 1995-08-09 | Netscape IPO 常被视作 dot-com IPO 热的开端 |
| 1998 | LTCM 后 Fed 降息，流动性改善 |
| 1999 | Nasdaq 上涨约 86%，大量互联网 IPO |
| 2000-01 | AOL-Time Warner 合并，象征“new economy”叙事顶点 |
| 2000-03-10 | Nasdaq 触及 5048 左右高点 |
| 2000-04 | Nasdaq 峰值后一个月下跌约 34% |
| 2001-2002 | IPO 冻结、IT investment 收缩、telecom 破产潮 |
| 2002-10 | Nasdaq 跌到约 1139，较峰值跌约 77% |

事后看，触发因素包括 Fed 加息、分析师转向、尾部 IPO 公司质量差、lockup 到期、内部人卖出、融资市场关闭。没有单一按钮。

## AI 公司的已发生收入和估值

### OpenAI

| 日期 | 已披露事实 | 粗略倍数 |
|---|---|---|
| 2026-01-18 | OpenAI CFO 称 ARR 从 2023 年 20 亿美元、2024 年 60 亿美元增长到 2025 年 200 亿美元以上；可用 compute 从 0.2GW 到约 1.9GW | 用 200 亿美元 ARR 对 8520 亿美元估值，约 43x ARR |
| 2026-02-27 | OpenAI 宣布 1100 亿美元新投资，7300 亿美元 pre-money valuation；称有 900M+ WAU、5000 万 consumer subscribers、900 万 paying business users | 估值已在超大规模收入之前继续上调 |
| 2026-03-31 | OpenAI 宣布完成 1220 亿美元 committed capital，post-money valuation 8520 亿美元；称当前收入约 20 亿美元/月 | 约 35x annualized monthly revenue |
| 2026-06-08 | OpenAI 宣布已 confidentially submitted S-1，但未公布完整财务 | 完整收入质量仍未可审计 |

OpenAI 的“真实价值论”证据很强：它不是 1999 年没收入的网站。它有巨大的消费者分发、付费订阅、企业用户、API token 使用量和 Codex 使用增长。

OpenAI 的“泡沫论”证据也很强：估值主要靠 run-rate、用户规模和未来 operating leverage 来支撑。完整毛利、净收入、客户留存、关联方交易、未来算力承诺和折旧节奏还要等 S-1。

### Anthropic

| 日期 | 已披露事实 | 粗略倍数 |
|---|---|---|
| 2026-02-12 | Anthropic 宣布 300 亿美元 Series G，post-money valuation 3800 亿美元；run-rate revenue 140 亿美元 | 约 27x run-rate revenue |
| 2026-02-12 | 同一公告称 Claude Code run-rate revenue 超过 25 亿美元，500+ business customers annualized spend 超过 100 万美元 | coding 产品已是独立大业务 |
| 2026-04-06 | Anthropic 称 run-rate revenue 超过 300 亿美元，end-2025 约 90 亿美元；1000+ business customers annualized spend 超过 100 万美元 | 增长极快，但仍是 run-rate |
| 2026-05-28 | Anthropic 宣布 650 亿美元 Series H，post-money valuation 9650 亿美元；run-rate revenue crossed 470 亿美元 | 约 21x run-rate revenue |

Anthropic 的“真实价值论”事实比 OpenAI 更偏 enterprise：Claude Code、API、Claude for Work、大客户 annualized spend。它披露的客户数量和产品收入，比很多 1999 年互联网公司扎实得多。

Anthropic 的“泡沫论”事实在于速度太快、口径太软。不到四个月从 140 亿美元 run-rate 到 470 亿美元 run-rate，这种曲线在历史上很少有公开可比样本。Om Malik 的核心质疑是：外部人现在不是在判断 20x revenue 是否贵，而是在判断这个 revenue 的“base”到底是什么，gross/net、retention、credits、related-party、现金回款都还不清楚。

### NVIDIA

NVIDIA 和模型公司很不一样，它是上市公司，有完整财务：

| 期间 | 已披露事实 |
|---|---|
| FY2026 | 全年收入 2159 亿美元，同比 +65%；净利润 1201 亿美元 |
| FY2026 | Data Center revenue 1937 亿美元，同比 +68% |
| Q1 FY2027 | 收入 816 亿美元，同比 +85%；Data Center revenue 752 亿美元，同比 +92% |
| Q1 FY2027 | GAAP gross margin 74.9%；GAAP net income 583 亿美元 |

这说明 NVIDIA 不是靠“故事”活着，它已经把 AI capex 变成了利润。但 10-K 也给出风险线索：FY2026 两个 direct customers 分别贡献总收入 22% 和 14%，并且一家公司通过 NVIDIA 客户购买云服务，对 NVIDIA revenue 有 meaningful contribution。换句话说，NVIDIA 的利润是真实的，但需求集中度和 AI capex 周期性也是真实的。

## 两边观点分别抓住了什么事实

### 观点 A：这一波 AI 泡沫很大

支持事实：

| 事实 | 为什么重要 |
|---|---|
| 估值基于 run-rate，不是审计收入 | run-rate 可以被最近一个月、促销、credits、一次性部署、客户预付款扭曲 |
| 毛利和净收入不透明 | 模型调用收入如果要付出高推理成本，就不是传统 SaaS |
| 资本关系交织 | OpenAI、Anthropic、NVIDIA、Amazon、Microsoft、Google、Oracle、CoreWeave 等之间既是投资方、供应商、客户又是融资伙伴 |
| 算力资产寿命短 | GPU 和 AI 芯片可能 1-3 年就技术过时，但会计折旧可能更长 |
| 基础设施承诺超大 | Stargate、Anthropic 多 GW compute、OpenAI 多云/多芯片承诺都把未来需求提前写进合同 |
| 历史类比存在 | telecom 泡沫也是真需求 + 真实基础设施 + 过度融资 + 供应商风险 |

这派最强的问题不是“AI 有没有用”，而是：**今天的估值和 capex 是否把未来采用率、价格、毛利、留存和供应链稳定性都一次性买满了。**

### 观点 B：这一波没那么泡沫，因为有真实 ARR 和新价值

支持事实：

| 事实 | 为什么重要 |
|---|---|
| OpenAI 月收入约 20 亿美元 | 这不是 eyeballs-only，是实际商业化规模 |
| ChatGPT 900M+ WAU、5000 万订阅用户 | 消费者 adopted habit 已经形成 |
| OpenAI enterprise revenue 超过 40% | 不只是消费者玩具，正在进入工作流 |
| Anthropic 1000+ 百万美元级客户 | 企业付费不是小样本 |
| Claude Code 25 亿美元 run-rate | coding 是明确付费痛点，不只是聊天 |
| NVIDIA FY2026 净利润 1201 亿美元 | 基础设施供应商已经把需求转成利润 |
| dot-com 后基础设施确实释放长期价值 | 即使有泡沫，社会和后续创业者可能受益 |

这派最强的问题是：**如果用户和企业已经每月真付几十亿美元，为什么要把它类比成 1999 年那种“没收入的网站”？**

### 观点 C：NVIDIA 会不会被连带打到

历史上供应商会被连带打到。telecom 泡沫后，光纤、路由器、交换设备、vendor financing 相关公司都经历了订单坍缩和估值压缩。今天 AI 的相似处是 data center capex 高度集中，模型公司和 hyperscaler 的需求会传导到 GPU、HBM、网络、机房、电力。

但 NVIDIA 也有关键差异：

| 相似处 | 差异 |
|---|---|
| 都是基础设施供应商 | NVIDIA 已有超高利润和自由现金流 |
| 都受客户 capex 周期影响 | 不是单一亏损 startup 的供应商 |
| 都有大客户集中 | 客户包含 hyperscaler、AI cloud、国家/企业 data center |
| 都可能出现订单前置 | 公开财报能持续观察库存、应收账款、客户集中、毛利变化 |

因此更精确的判断是：**NVIDIA 的业务基本面目前很硬，但估值和订单簿对 AI capex 持续性敏感。模型公司如果证明不了收入质量和 ROI，硬件链会先从 multiple 和订单预期上被打，再传导到收入。**

## 最值得借鉴的历史洞见

### 1. 技术是真的，股票也可以是泡沫

互联网改变世界和 1999 年互联网股票过贵可以同时成立。AI 也一样：模型有用、收入真实、NVIDIA 利润真实，不自动推出“当前估值合理”。

### 2. 泡沫常常是基础设施融资机制

铁路、光纤、云、AI data center 都有这种结构：早期投资者承担过度建设和错误时点，后来的应用层吃到便宜基础设施。社会受益和投资者收益不是一回事。

### 3. 最危险的不是倍数，而是分母

1999 年至少很多上市公司的 revenue、cash、loss 可以从 10-Q 里看。2026 年 OpenAI/Anthropic 仍是私有公司，外部人看的是 run-rate press release。真正要问的是：

| 问题 | 为什么关键 |
|---|---|
| GAAP revenue 是多少 | run-rate 能否转成全年收入 |
| gross revenue 和 net revenue 差多少 | 是否包含转售、credits、渠道、云方互买 |
| gross margin 是否稳定 | 推理成本是否吞掉收入 |
| retention 和 cohort 是否好 | enterprise 是否持续扩张 |
| revenue 是否 related-party | 投资方/云厂商是否同时制造收入 |
| capex commitments 多长 | 需求不达预期时是否有固定成本 |

Om Malik 说得准：现在争论不只是 20x revenue 贵不贵，而是 revenue 本身是否可解释、可审计、可持续。

### 4. 崩盘前往往不是“没人质疑”，而是质疑者无法定价

Ofek/Richardson 对 dot-com 的解释很适合今天：怀疑者存在，但在上涨期间不一定有足够工具、时间和风险承受能力去做空。只要乐观资金继续进场，价格就能继续反映乐观者观点。

### 5. 最后留下来的公司通常不是最会讲故事的公司

Dot-com 后活下来的是 Amazon、eBay、Google、Booking/Priceline 这类能把互联网效率转成可持续现金流的公司。AI 对应的筛选条件也不会是“谁模型最震撼”，而是谁能把 intelligence 转成高留存、高毛利、低流失、可复用工作流。

## 对当前问题的合成

你说“大模型公司都是泡沫”，朋友说“这波有真实 ARR 和新价值”，这两个观点并不冲突。

更好的拆法：

| 层 | 事实状态 | 泡沫风险在哪里 |
|---|---|---|
| AI 应用价值 | 已经真实存在，尤其 coding、enterprise workflow、consumer subscription | 价格战、留存、替代性、模型成本 |
| 模型公司收入 | OpenAI/Anthropic 已有极大 run-rate | 净收入质量、毛利、关联方、现金回款未完全公开 |
| 基础设施公司 | NVIDIA 利润真实且巨大 | 数据中心 capex 周期、客户集中、订单前置、估值倍数 |
| 社会层面 | 很可能留下工具、习惯、算力、模型能力 | 投资回报可能和社会价值错配 |

所以，最符合历史的表述是：

**AI 不是“假需求泡沫”，而是“真实需求 + 不透明收入质量 + 超前资本化 + 基础设施过度建设风险”的泡沫候选。**

在 S-1/10-K 出来前，看不清的不是“有没有收入”，而是“这些收入值不值得当前估值”。这也是这轮和 1999 年最像、又最不一样的地方。

## 高质量资料

### 书

| 资料 | 链接 | 为什么读 |
|---|---|---|
| Brian McCullough, *How the Internet Happened* | [Amazon](https://www.amazon.com/How-Internet-Happened-Netscape-iPhone/dp/1631493078) | 对 Netscape 到 iPhone 的互联网商业史梳理好，dot-com 章节很适合建立直觉 |
| John Cassidy, *Dot.con* | [AbeBooks](https://www.abebooks.com/9781422364215/Dot.con-America-Lost-Mind-Money-1422364216/plp) | 泡沫时期媒体、投行、VC、创业者如何互相强化叙事 |
| Carlota Perez, *Technological Revolutions and Financial Capital* | [作者网站](https://carlotaperez.org/) | installation period / deployment period 框架，理解技术革命为什么常伴随金融泡沫 |
| Edward Chancellor, *Devil Take the Hindmost* | [Goodreads](https://www.goodreads.com/book/show/320758.Devil_Take_the_Hindmost) | 横跨多个投机泡沫的经典金融史 |
| Byrne Hobart & Tobias Huber, *Boom* | [Stripe Press](https://press.stripe.com/boom) | 从“泡沫也能推动技术进步”的角度看历史 |

### 论文和复盘

| 资料 | 链接 | 用处 |
|---|---|---|
| Ofek & Richardson, “DotCom Mania” | [NBER PDF](https://www.nber.org/system/files/working_papers/w8630/w8630.pdf) | 解释为什么乐观者定价、short constraints、lockup 到期会放大泡沫 |
| Mark Doms, “The Boom and Bust in Information Technology Investment” | [FRBSF PDF](https://www.frbsf.org/wp-content/uploads/er19-34bk.pdf) | 用宏观投资数据拆 IT investment boom/bust |
| Goldman Sachs, “The Late 1990s Dot-Com Bubble Implodes in 2000” | [Goldman Sachs](https://www.goldmansachs.com/our-firm/history/moments/2000-dot-com-bubble) | 简明历史时间线 |
| Brian McCullough TED Ideas excerpt | [TED Ideas](https://ideas.ted.com/an-eye-opening-look-at-the-dot-com-bubble-of-2000-and-how-it-shapes-our-lives-today/) | 讲 Priceline、telecom overbuild、基础设施遗产 |
| Ben Thompson, “The Benefits of Bubbles” | [Stratechery](https://stratechery.com/2025/the-benefits-of-bubbles/) | 从“泡沫留下基础设施和创新动机”的角度看 AI |
| Om Malik, “Anthropic, AI and The Numbers Problem” | [Om.co](https://om.co/2026/05/29/anthropic-ai-and-the-numbers-problem/) | 当前 AI 私有公司收入口径不透明的最好短文之一 |

### 一手数据入口

| 公司 | 链接 | 关键事实 |
|---|---|---|
| OpenAI March 2026 funding | [OpenAI](https://openai.com/index/accelerating-the-next-phase-ai/) | 1220 亿美元 committed capital、8520 亿美元 post-money、20 亿美元/月收入 |
| OpenAI business scale | [OpenAI](https://openai.com/index/a-business-that-scales-with-the-value-of-intelligence/) | 2023-2025 ARR 与 compute 增长 |
| Anthropic Series G | [Anthropic](https://www.anthropic.com/news/anthropic-raises-30-billion-series-g-funding-380-billion-post-money-valuation) | 3800 亿美元 post-money、140 亿美元 run-rate、Claude Code 25 亿美元 run-rate |
| Anthropic Google/Broadcom compute | [Anthropic](https://www.anthropic.com/news/google-broadcom-partnership-compute) | 300 亿美元 run-rate、1000+ 百万美元级客户 |
| Anthropic Series H | [Anthropic](https://www.anthropic.com/news/series-h) | 9650 亿美元 post-money、470 亿美元 run-rate |
| NVIDIA FY2026/Q1 FY2027 | [NVIDIA Q1 FY2027](https://nvidianews.nvidia.com/news/nvidia-announces-financial-results-for-first-quarter-fiscal-2027), [NVIDIA 10-K](https://www.sec.gov/Archives/edgar/data/1045810/000104581026000021/nvda-20260125.htm) | Data Center revenue、gross margin、net income、客户集中 |
