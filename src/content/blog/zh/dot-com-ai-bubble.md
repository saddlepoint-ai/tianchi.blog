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

### 6. 之前的 trigger 到底长什么样

Dot-com 的转折更像“多条链路同时断”，而不是一个新闻把市场砸下来。事后复盘可以拆成六类 trigger：

| 链路 | 当时的具体表现 | 抽象成今天该看的信号 |
|---|---|---|
| 流动性 | 1999-2000 年 Fed 连续加息，资金成本上升 | 低利率/高估值环境改变，亏损公司再融资成本上升 |
| 现金消耗 | Barron's 2000 年 3 月文章集中讨论大量互联网公司 cash burn 和现金跑道 | 市场突然开始从 TAM/用户数转向 cash runway、gross margin、unit economics |
| 股票供给 | NBER 的 Ofek/Richardson 指出 2000 年春季和下半年大量 lockup 到期，内部人/早期投资人可卖股票 | IPO 后 lockup、员工/早期投资人退出、二级市场供给突然增加 |
| 收入口径 | MicroStrategy 2000 年收入重述让市场重新审视 aggressive accounting | 关键公司 S-1/10-K 暴露 revenue quality、credits、related-party、net revenue 问题 |
| 叙事顶点 | AOL-Time Warner 合并、Super Bowl dot-com 广告潮，后来被视作新经济叙事过热的象征 | “全行业都必须 AI 化”的叙事进入非理性消费/并购/招聘阶段 |
| 融资窗口 | IPO 市场关闭，VC 后续轮困难，telecom 债务融资断裂 | 私有 AI 公司 down round、IPO 破发、AI cloud 债务再融资困难 |

这个框架比“泡沫何时破”更有用：**trigger 通常不是证明技术没用，而是证明融资价格、收入口径或资产负债表不能再被忽略。**

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

### 中国基模公司：GLM / Kimi / MiniMax 怎么看

这些公司不能简单归成“没收入的骗局”，但也还没有证明“靠经营现金流自给自足”。更准确的说法是：**有真实商业化进展，但商业化规模和亏损/研发强度之间还没有闭合。**

| 公司 | 已发生事实 | 怎么看 |
|---|---|---|
| Zhipu / GLM | HKEX 招股书披露：2022、2023、2024 年收入分别为 5740 万、1.245 亿、3.124 亿元人民币；2025 上半年收入 1.909 亿元人民币。同期亏损扩大：2024 年净亏损 29.58 亿元，2025 上半年净亏损 23.58 亿元。 | 有 ToB、ToG、本地化部署和云服务收入，不是 air company；但亏损远大于收入，如果继续做 frontier model，仍依赖外部资本或上市融资。 |
| MiniMax | 已在港股上市。2025 年收入 7900 万美元，毛利 2010 万美元，毛利率 25.4%；adjusted net loss 2.509 亿美元；年底现金约 10.5 亿美元。 | 收入增长和毛利改善是真进展，但 adjusted loss 仍约为收入 3 倍。IPO 不是“收割”的充分证据，却说明它还需要资本市场给 runway。 |
| Moonshot / Kimi | SCMP 报道其 2026 年 5 月融资约 20 亿美元，估值超过 200 亿美元，ARR 在 2026 年 4 月超过 2 亿美元；36Kr 后续报道称又在推进新一轮融资，目标估值更高。 | Kimi 有用户心智和 ARR 报道，但没有公开审计财务。外部人不能判断 gross/net、毛利、留存和现金回款，只能说“有收入，但估值明显在买未来扩张”。 |

所以你问“GLM/Kimi/MiniMax 算不算不赚钱、靠投资活/IPO 着的基模公司”，我的回答是：

| 判断 | 结论 |
|---|---|
| 不赚钱 | Zhipu、MiniMax 的公开文件显示目前不盈利；Moonshot 未公开审计口径，不能下硬结论，但从融资频率和 frontier model 成本看，尚未证明自给自足。 |
| 靠投资/IPO 活 | 至少可以说它们仍然资本密集，资本市场是 runway 的重要部分。 |
| 是否等于泡沫 | 不等于。关键是融资买来的时间能否换成高毛利、可留存、可规模化的收入。 |
| 和 OpenAI/Anthropic 区别 | 中国公司的估值绝对值小很多，但 revenue base 也小很多；美国头部有更大的全球分发和企业预算，中国头部更依赖本地 ToB/ToG、应用出海、开源生态和资本市场窗口。 |

这类公司真正危险的不是“现在亏损”，而是亏损有没有经营杠杆。如果收入增长 3 倍，亏损也同步增长 3 倍，说明 usage 越大越烧钱；如果收入增长 3 倍，毛利率改善、销售费用率下降、推理成本下降，那才开始像一个可持续软件公司。

### Grok / xAI 如果出问题，该怎么解读

截至 2026-06-13，我没有核到“Grok 已倒闭”的可靠事实。相反，xAI 官方在 2026 年 1 月宣布完成 200 亿美元 Series E；Elon Musk 在 2025 年 3 月[宣布](https://x.com/elonmusk/status/1905731750275510312?lang=en) xAI 以全股票交易收购 X，交易中 xAI 估值 800 亿美元、X 估值 330 亿美元。

但如果未来 Grok/xAI 真出问题，它会是一个很有信息量的案例，因为 Grok 不是普通 AI wrapper：它有 X 的分发、Musk 系资本叙事、自建算力和强品牌。解读要分层：

| 出问题原因 | 意味着什么 | 对行业信号 |
|---|---|---|
| 产品定位、品牌、安全事故或监管问题 | 公司特定风险 | 不足以证明 AI 泡沫破裂 |
| X 的分发也无法转成高 ARPU/高留存 | 消费者 AI 订阅和广告变现可能比想象弱 | 对 consumer AI 估值是负面信号 |
| 算力投入、债务或长期合同压垮现金流 | frontier model 的资本开支太重 | 对 AI infrastructure 和 GPU 需求预期是强信号 |
| 开源/低价模型把 Grok 的差异化打掉 | 模型层 commoditization | 对纯模型 API 和无 workflow moat 的公司是强信号 |
| 倒闭后 GPU/机房/人才被低价接盘 | 泡沫留下可复用资产 | 重演“光纤过剩让后来的互联网更便宜”的逻辑 |

换句话说，Grok 倒不倒不是核心；核心是：**如果一个拥有强分发和强融资能力的模型公司仍然无法把使用量变成毛利和留存，那模型层的商业结构就要被重估。**

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

## 泡沫环境里，什么要警惕，什么相对安全

这里的“安全”不是投资建议，也不是说估值一定便宜；只是说在技术泡沫破掉后，更有机会留下来的经营结构。

### 最需要警惕的公司/模式

| 模式 | 为什么危险 |
|---|---|
| 纯 frontier model 追赶者，没有分发、没有应用、没有独特数据 | 训练成本固定高，产品差异容易被下一代模型抹平 |
| API 价格战中的模型转售商 | revenue 可能增长，但 gross margin 被上游模型和云成本吃掉 |
| “AI wrapper”但没有 workflow ownership | 用户可以随时换到 ChatGPT、Claude、Gemini、Kimi、豆包或开源模型 |
| 收入主要来自云 credits、关联方、渠道预付、投资方互买 | reported ARR 看起来大，但现金回款和真实外部需求可能弱 |
| 用融资补贴 usage 的消费应用 | 用户增长可能是真，但 willingness to pay 未验证 |
| AI cloud / GPU leasing 长负债、短客户 | GPU、电力、机房租约是长期固定成本，客户需求可能按月取消 |
| 数据中心/电力项目只绑定单一模型客户 | 客户倒下或缩 capex，资产可能变成低价转售的基础设施 |
| 为了 IPO 把故事讲成“平台”，但收入仍是项目制 | 项目制收入难以给 SaaS 倍数，交付成本也更像服务公司 |
| AI pivot 公司 | 主业无增长，用 AI 叙事重估，但没有 AI 原生收入 |

一个简单红线：**如果 usage 越大，亏损越大，并且公司解释不清楚什么时候推理成本会低于客户付费，这就不是 SaaS，而是补贴型基础设施消耗。**

### 相对更安全的公司/模式

| 模式 | 为什么更抗泡沫 |
|---|---|
| 明确 ROI 的垂直 workflow | 客户买的是结果，不是“模型能力”；更容易续费和扩张 |
| coding、客服、销售、财务、法务、医疗文书等高频工作流 | 有清楚的时间节省、错误减少或收入提升指标 |
| 模型成本下降时受益的应用层 | 像泡沫后吃到便宜带宽的 YouTube，未来可能吃到便宜 inference |
| 有分发、有数据、有权限位置的 incumbent | AI 是加速器，不是唯一商业模式 |
| 开源模型生态上的工具/托管/安全/评测 | 不押单一闭源模型，反而受益于模型 commoditization |
| 现金流健康、客户分散的基础设施公司 | 即使 capex 周期下行，也有资产负债表缓冲 |
| 能把 AI 嵌进现有系统的集成层 | 企业真正难的是权限、数据、流程、审计，不只是模型调用 |

Dot-com 后留下来的不是“网页公司”，而是能把互联网变成交易、搜索、广告、云和工作流的公司。AI 后更可能留下来的也不是“聊天框公司”，而是把模型能力变成具体 workflow、权限系统和业务结果的公司。

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

## 什么时候会出现转折

更稳妥的问法不是“哪一天崩”，而是“哪些观察同时出现，说明市场开始重新定价”。我会看五组信号：

| 信号组 | 具体看什么 | 为什么重要 |
|---|---|---|
| 财务透明度 | OpenAI/Anthropic/xAI/Moonshot 等 S-1 或年报披露 gross margin、net revenue、credits、related-party、capex commitments | 一旦分母变清楚，市场会从“收入很大”切到“收入质量够不够好” |
| 模型进步 | Stanford AI Index 2026 仍说能力没有 plateau；但要看新模型是否还能创造用户愿意付费的差异 | benchmark 进步如果不能转成付费、留存、价格权，就会变成技术进步和商业价值脱钩 |
| Agent 采用 | McKinsey 2025 调研显示 23% 组织在 scale agentic AI，39% 仍在 experiment；Menlo 看到 coding 是第一 killer use case，50% 开发者日用 AI coding 工具 | 如果 agent 只在 dev 人群扎实，非 dev workflow 长期停在 pilot，应用层 TAM 会被下修 |
| 基础设施需求 | hyperscaler capex、GPU 交货周期、HBM 价格、AI cloud 利用率、二手 GPU 价格 | 真转折通常会先出现在订单、库存、价格和延期交付，而不是财报收入立刻下降 |
| 资本市场 | AI IPO 破发、lockup 后持续卖压、down round、债务融资变贵、convertible/structured financing 增多 | 融资窗口关闭会把“未来利润问题”立刻变成“现金 runway 问题” |

你提到的三个可能触发点都成立，但性质不一样：

| 触发点 | 如果发生，说明什么 |
|---|---|
| 模型能力变化变缓 | 对 frontier lab 最危险，因为“再投 10 倍 compute 得到明显更好模型”的故事会变弱；但对应用层未必坏，便宜稳定模型反而更利于产品化。 |
| 非 dev 人群没用起来 agent | 对应用 TAM 和企业预算最危险。coding 已经是强证据，非 dev 的问题是流程、权限、责任、审计和组织 redesign。 |
| 收入口径被 S-1 打开 | 可能是最直接的金融 trigger。如果 revenue 很大但 gross margin 低、credits 多、客户集中、关联方多，估值会被重算。 |
| GPU/算力价格快速下跌 | 对 NVIDIA 和 AI cloud 是压力，对应用创业者可能是礼物。历史上的带宽就是这样：毁了一批基础设施投资者，养肥了下一代应用。 |

所以我会把最重要的转折句写成：

**AI 泡沫真正的拐点，不一定是模型不进步；更可能是模型继续进步，但新增能力无法支撑当前估值、capex 和融资节奏。**

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
| Zhipu / GLM HKEX prospectus | [HKEX PDF](https://www1.hkexnews.hk/listedco/listconews/sehk/2025/1230/2025123000017.pdf) | 收入、净亏损、客户和本地/云部署结构 |
| MiniMax prospectus and 2025 results | [HKEX PDF](https://www1.hkexnews.hk/listedco/listconews/sehk/2025/1231/2025123100025.pdf), [2025 results](https://en.prnasia.com/releases/apac/minimax-announces-full-year-2025-financial-results-523616.shtml) | IPO、收入、毛利、adjusted net loss、现金 |
| Moonshot / Kimi financing reports | [SCMP](https://www.scmp.com/tech/article/3352751/kimi-developer-moonshot-ai-valued-us20b-it-navigates-chinas-new-ipo-rules), [36Kr](https://eu.36kr.com/en/p/3845696736131721) | reported ARR、融资、估值和 IPO 传闻 |
| xAI Series E | [xAI](https://x.ai/news/series-e) | 200 亿美元 Series E，Grok/xAI 仍在融资扩张 |
| Stanford AI Index 2026 | [Stanford HAI](https://hai.stanford.edu/ai-index/2026-ai-index-report) | 模型能力、采用率、benchmark 进展 |
| McKinsey State of AI 2025 | [McKinsey](https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai) | 企业 AI/agent adoption 从 pilot 到 scale 的状态 |
| Menlo Ventures Enterprise AI 2025 | [Menlo Ventures](https://menlovc.com/perspective/2025-the-state-of-generative-ai-in-the-enterprise/) | coding 作为第一 killer use case、企业 AI 支出结构 |
