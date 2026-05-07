---
title: "Linear、GitHub Issues 与 Jira：为什么它们被视作不同品类，以及 AI 是否在改变这一点"
description: "三款产品的历史定位、功能重叠、为什么大家不把它们放进同一条赛道、AI 时代的收敛趋势 —— 以及在 GitHub 上做 agent 控制台到底是不是个好主意。"
pubDate: 2026-05-01
tags: ["research", "project-management", "linear", "github-issues", "jira", "agents"]
lang: "zh"
sourcePath: "claude-workspace/wiki/research/2026-05-01-linear-github-jira-positioning.md"
---

## 摘要

Linear、GitHub Issues 与 Jira 被当作三个不同品类，已经持续了三十年 —— 但绝大部分原因是 **历史的，而非功能的**：三家公司面对的买家不同（Atlassian 在 2002 年瞄准企业 IT，GitHub 在 2008 年瞄准开源开发者，Linear 在 2019 年瞄准硅谷的产品向 IC），用的术语不同（"epic / story / sprint"对"issue / PR"对"issue / cycle / project"），定价模型走的采购路径也不同。但功能内核 —— *一个带状态、负责人、父子关系的工作项数据库* —— 自 2022 年以来三家其实差不多。

2024–2026 年间，这种"三个品类"的认知正在从两条路线上瓦解。**第一**，GitHub 已经把和 Linear 的功能差距填了大半：Projects v2（2022）加了 table / roadmap / iteration 视图，sub-issues 在 2024–2025 年 GA，Issue Types 与高级搜索在 2024 年底 ship。**第二**，真正决定胜负的是 AI agent 这一层，而不是底下的 issue tracker UI。OpenAI 的 Symphony（2026 年 4 月）把这件事说穿了：它把 issue tracker 当作 *自主 coding agent 的控制平面* —— 选的是 Linear，不是 GitHub Issues。Linear 的 "Linear for Agents"（2025 年 5 月）把 agent 升级成了数据模型里的一等公民。

**对工具决策的意义**：在 GitHub Issues 上做 agent 控制平面，是一个反共识但站得住脚的赌注。2025–2026 主流叙事（Symphony、Linear for Agents）把 Linear 摆在中间。反共识的角度 —— 走 GitHub-first，因为代码就在那里、repo 免费、1 亿+ 开发者已经在了 —— 是真实的，但产品层面供给不足。**反对方**最强的论据是：GitHub 自己也有这个选项，可能会率先用 Copilot Workspace + Coding Agent 把它收掉。

## 三家的起源与最初定位

### Jira（Atlassian，2002）

Mike Cannon-Brookes 与 Scott Farquhar 在 2002 年于悉尼创立 Atlassian，启动资金是 1 万澳元的信用卡债。两人刚从新南威尔士大学毕业，最早的业务是给 Java 应用做 tier-3 客户支持 —— 他们"对当时用的 bug tracking 软件不满意"，干脆自己写了一个，取名 **Jira**（"取自 Gojira，1954 年电影《哥斯拉》的日文片名"）。很快他们意识到卖 Jira 比卖支持赚得多。

最初定位：**"给 Java 团队用的、强大可配置的 bug tracker"**，走低接触、无销售、自助的销售模式 —— 在 2002 年的 B2B 里很激进。接下来十年里 Jira 不断累积工作流自定义、权限方案、自定义字段、Marketplace 插件，最终成为事实上的企业标准。代价是：它成了"个人贡献者讨厌但采购部门偏爱"的典型范本。Cannon-Brookes 那句 ——"Atlassian 的旗舰产品 Jira，一个项目与 issue 跟踪工具" —— 已经显示了这个品类后来一直分不清的双重身份：它到底是 bug tracker 还是 PM 工具？答案是"都是"。

### GitHub Issues（2008）

GitHub 在 2008 年 4 月 10 日上线，创始人是 Tom Preston-Werner、Chris Wanstrath、P. J. Hyett、Scott Chacon。Issues 一开始就和代码托管捆绑在一起 —— 没有过单独的"GitHub Issues 上线"事件。这种捆绑永久地塑造了它的定位：**Issues 是代码托管的一个功能，不是独立的 PM 工具**。它住在 repo 旁边，免费，处于开发者本来就在的地方。

没有显式定位本身就是它的定位。Jira 卖"任何工作流都可配置"，Linear 后来卖"the Linear method"，GitHub Issues 没有 method。它有：标题、正文、label、milestone、assignee，后来加了 project board。15 年里这既是它的弱点（没有优先级、没有 cycle、没有 roadmap 视图），也是它的护城河：每个开发者本来就有 GitHub 账号。

### Linear（2019）

Linear 在 **2019 年 4 月 18 日** 由 Karri Saarinen（前 Airbnb 首席设计师）、Tuomas Artman（前 Uber）、Jori Lallo（前 Coinbase）公开推出。Saarinen 是在 Lallo 2018 年从 Coinbase 休假后向 Lallo 与 Artman 提出这个想法的。Saarinen 自己写过：

> "在 Airbnb 以及很多其他公司，有件事让我特别沮丧：那些任务 / 项目 / issue 跟踪工具做得有多糟。"
>
> "作为设计师，我惊讶于这些工具被设计得有多差。它们好像不是为人类设计的，把所有好的设计原则都反过来用了一遍。"

2019 年 4 月的发布把当时的市场说得很直白：

> "市面上很多领先工具都是十多年前的产物，从那以后概念几乎没有演化。"

Linear 上线时的三大支柱是：(1) "聚焦速度与无摩擦工作流的卓越用户体验"，(2) "自动化人工流程，优化团队工作流"，(3) "把执行和规划直接连起来"。

受众是有意收窄的。Saarinen 在 First Round Review 上说：

> "我不认为可以为任何东西做出最优工具，如果它非常灵活、可无限自定义。"
>
> "Quality is our first principle. Every other metric and decision flows from that.（质量是我们的第一原则。其他所有度量和决策都从这里出发。）"

最关键的是，Linear 把自己定位成 **反 agile**：

> "我们不写 user story，而且认为这在产品开发里是个反模式。我们用平实语言写又短又简单的 issue 来描述任务。"

这是它最强的差异化点。Jira 卖"你可以建模任意 agile 工作流"，Linear 卖"工作流我们替你定好了，而且不是 agile"。

## 为什么历史上被视作三个不同品类

五个原因相互叠加：

**(1) 买家 / 受众不同。** Jira 历来卖给工程经理、PMO、IT 总监 —— 他们看重审计、权限粒度、Atlassian 全家桶（Confluence、Bitbucket、OpsGenie）。GitHub Issues 是开发者自下而上采用的 —— 没有"买家"的概念，因为团队本来就有 GitHub。Linear 瞄准第三种买家：风投系软件创业公司的创始人 / 工程负责人，"买家"和"用户"是同一个人，"开发者满意度"是一个真实的 KPI。

**(2) 词汇分化。** Jira：epic / story / sprint / kanban / scrum / RAID log。GitHub：issue / PR / milestone / label / project。Linear：issue / cycle / project / triage / roadmap。共享的概念（一件工作，分配给谁，目前什么状态）被埋在不同仪式之下，跨品类对比就显得像苹果和橙子。

**(3) 定价模型。** Jira：每用户每月 7–15 美元，加上 Atlassian 全家桶的捆绑拉动。GitHub Issues：0 美元，与代码托管捆绑 —— 所以对比就是"整个 GitHub vs 单独的 Linear"。Linear：每用户每月 10–14 美元。GitHub Issues 这种"和代码捆绑、免费"的经济学使它从来不在买家的评估清单里出现，因为它根本不是一条预算项。

**(4) 工作流重心。** Jira 的工作流重心是 **冲刺规划会议** —— 仪式比日常更重要。GitHub 的重心是 **pull request** —— issue 只是用 "fixes #123" 顺手关掉的东西。Linear 的重心是 **triage 收件箱 + cycle** —— 一个连续、轻量、不带冲刺仪式的看板。三种不同的日常仪式，在用户脑中是三个不同的产品。

**(5) 当时确实存在功能差距。** 2020 年时，差距是真实的，不是观感。GitHub 没有优先级字段、没有可排序的优先级、没有 cycle、没有故事点、没有跨 repo 视图、没有 roadmap。Linear 没有原生的代码 / PR 链接。Jira 什么都有，但代价是迟钝的 UI。直到 2022 年的 Projects v2 与 2024–2025 年的 sub-issues 之前，"GitHub vs Linear" 在功能上对比并不公平。

## 功能对照矩阵（2026 年 4 月）

| 能力 | GitHub Issues + Projects v2 | Linear | Jira |
|---|---|---|---|
| Issue 创建 / 编辑 | ✓ | ✓ | ✓ |
| 子 issue / 父子层级 | ✓（2025 GA，8 层）| ✓ | ✓（epic / story） |
| 冲刺 / cycle / iteration | ✓（v2 的 Iteration 字段）| ✓（Cycles）| ✓（Sprints） |
| 自定义工作流 / 状态 | 部分（项目级）| 部分（强主张）| ✓（深） |
| Roadmap 视图 | ✓（v2 的 Roadmap 视图）| ✓（Projects / Roadmaps）| ✓（Plans） |
| Triage / 收件箱 | 部分（filter，无 inbox）| ✓（Triage queue）| 部分 |
| Team-level vs project-level | repo + org + project | team + project | project + team |
| GitHub PR 联动 | ✓（原生）| ✓（深度集成）| 部分 |
| 代码搜索集成 | ✓（原生）| ✗ | ✗ |
| 工时跟踪 | ✗（第三方）| 部分（estimates）| ✓ |
| 客户反馈控件 | ✗ | ✓（Customer Requests）| ✓（Service Mgmt） |
| API 完备度 | REST + GraphQL，成熟 | GraphQL，现代 | REST，臃肿 |
| AI / agent 能力 | Copilot Workspace, Coding Agent | Linear for Agents（一等用户）| Atlassian Intelligence |
| 移动端 / 桌面端 | 仅移动 | 移动 + 原生桌面 | 移动 + web |
| 价格 | $0（免费）– GH Team $4/用户 | $10–14/用户/月 | $7–15+/用户/月 |
| 性能（主观 UI 时延）| 1–2 秒往返 | <100ms 本地同步 | 1–3 秒往返 |

**矩阵小结。** 截至 2026 年，GitHub Issues + Projects v2 覆盖了 Linear 约 80% 的能力面、Jira 约 70%。Linear 剩下的护城河是速度（本地同步引擎）、强主张的 UX（不必配置）、以及客户反馈相关的功能。Jira 剩下的护城河是工作流深度、权限粒度，以及更广的 Atlassian 全家桶（Confluence、JSM）。GitHub 的护城河是价格（$0）、与代码相邻、以及 1 亿+ 开发者的安装基数。

## 为什么公开讨论很少把 Linear 与 GitHub 摆在同一条赛道

尽管功能在收敛，网络上的讨论默认还是"Linear vs Jira"或"GitHub vs Jira"。三个原因：

**(1) Atlassian 在框架对话。** 搜索结果里最权威的对照页是 `atlassian.com/software/jira/comparison/jira-vs-linear` —— Atlassian 自己发布的 Jira-vs-Linear 页，把这对二元拉成了锚点。没有相应的"Linear vs GitHub"权威页；Linear 自己的集成页把 GitHub 描述成 *合作伙伴*，不是竞争对手。当在位者和挑战者都把对话框定在"Jira vs Linear"，分析师就跟着这条线走。

**(2) GitHub Issues 被当成功能而非产品。** 即便到 2024 年，HN 上"从 Linear 搬到 GitHub"还被当作反共识动作。基本框架是"GitHub 在追赶"，不是"GitHub 在竞争"。这种认知比实际的功能持平滞后 18–24 个月。

**(3) 迁移路径不对称。** "用 Jira 用得不耐烦了 → 搬去 Linear"是常见故事。"用 Linear 不耐烦了 → 搬去 GitHub"很罕见。"用 GitHub Issues 不耐烦了 → 搬去 Linear"存在。这种不对称强化了一种心智图谱：GitHub Issues 在复杂度阶梯上 *低于* Linear / Jira，而不是平行的另一条线。公共讨论习惯讲阶梯，不擅长讲并行。

第四个更软的原因：**Linear 的品牌就是"反 Jira"**。把这场仗公开打出来是 Linear 营销的核心。把矛头转向 GitHub 会让 Linear 变成代码工具的竞争者，稀释"我们是现代 PM 工具"的定位。Linear 有商业理由不去和 GitHub 比较。

## AI / Agent 时代的收敛

历史上的品类边界在这条线上瓦解最快。

### GitHub Projects v2（2021 年 12 月 GA，2022 年持续演化）

Projects v2 是 GitHub Issues 历史上最大一次升级。带来了：table 视图、roadmap 视图、自定义字段（text/number/date/select/iteration）、工作流自动化，以及把 `iteration` 升级成一等字段类型。Iteration 字段就是冲刺原语 —— GitHub 终于有了原生答案来对应 Linear 的 Cycles 与 Jira 的 Sprints。

### GitHub Sub-issues（2024 年 10 月 Beta → 2025 GA）

在 2024 年 10 月 1 日的"Evolving GitHub Issues (Public Beta)"里宣布，sub-issues 替代了被废弃的 Tasklists。**每个父 issue 最多 100 个子 issue，8 层嵌套**，父子进度在 Projects 视图里可见，可过滤可分组。这是 GitHub 之前唯一缺的、Linear 强项功能（父子层级正是 Linear 用来建模"项目套 issue"的方式）。同次发布还加了 Issue Types 和 AND/OR/括号 高级搜索。

### GitHub Copilot Workspace（2024 年 4 月 29 日 Tech Preview）

Tech preview 的口号（Thomas Dohmke，GitHub 博客）："Copilot 原生的开发者环境 —— 用自然语言把 idea、代码、软件全都串起来。" 关键是这个工作流 **从一个 GitHub Issue 或 repo 开始**：

1. 打开一个 GitHub Issue
2. Copilot 生成分步 plan
3. 用户编辑 plan
4. Copilot 写代码
5. 用户在集成 terminal 里测试
6. 看 PR diff → 提 PR

这件事的意义在于：**Copilot Workspace 不直接和 Linear 竞争**，但它把 GitHub Issue → PR 这条循环 *默认 agent 化* 了。如果你要把 LLM 套在 issue tracker 上，GitHub 现在有最深的原生闭环。Linear 必须靠集成；GitHub 自带。

GitHub Universe 2024 把这套继续扩展为 **Copilot Coding Agent** —— 把 GitHub Issue 指派给 Copilot，它就开 PR。这是两家里最直接的"agent 控制平面"功能。

### Linear for Agents（2025 年 5 月 20 日）

Linear 的回应。根据官方更新日志：agent 是 Linear 数据模型里的 **一等用户** —— 有用户档案，可以被 @、可被指派 issue、可加入团队。首发合作伙伴：**Devin、ChatPRD、Codegen**，Sentry 与 Intercom 跟进。后来扩展到 Codex、Cursor、GitHub Copilot、Factory。

架构选择是关键：Linear 没有自己造一个 agent。它造的是 **agent 集成层** —— 把数据模型变得对 agent 友好，让任何人都能接入。这是"AI PM 界的 Stripe Connect"那种赌法。

### OpenAI Symphony（2026 年 4 月 28 日）

最强的信号。OpenAI 把 Symphony 作为开源 spec + Elixir 参考实现发布。按 OpenAI 官方公告以及 Help Net Security 的报道：*"一个把 Linear 这类项目管理看板变成 coding agent 控制平面的编排层。"* 每个 Linear issue → 隔离 workspace → Codex agent session → PR（或分析）。Symphony 持续轮询 Linear 看板。

Symphony 有两件事值得记住：

- **OpenAI 选了 Linear，不是 GitHub Issues，作为参考控制平面。** 这是对 Linear 数据模型、API 与"agent-as-user"抽象的一次信任投票。
- **OpenAI 声称"OpenAI 内部某些团队在使用 Symphony 的前三周里，落地的 PR 数量提升了 500%"。** Linear 创始人也透露，Symphony 发布期间平台上新创建的 workspace 出现了一波尖峰。

Symphony SPEC 在设计上是 tracker-agnostic（"在工作流工具上通用"），但参考实现只内置 Linear 支持。这个不对称才是故事：在 2026 年，最有威望的 AI lab 选了 Linear 当作 agent 编排的标准底盘。

### 收敛走向哪里

两条轨迹现在都看得到：

1. **GitHub 走垂直整合** —— Issues → Sub-issues → Projects → Copilot Workspace → Copilot Coding Agent。卖点："一个产品里搞定一切，issue tracker 免费，agent 收费。"这是经典的微软打法（Office、Teams、GitHub 自己也是）。

2. **Linear 变成开放的 agent 控制平面** —— agent 是一等用户、GraphQL 优先、Symphony 加持。卖点："我们是 coding agent 的瑞士 —— Devin、Codex、Copilot、Cursor 等公平接入。"

这两条不是同一个产品。GitHub 的未来 Issues 看起来是闭环；Linear 的看起来是交换机。两者都成立 —— 但它们现在显然代表对 *agent 时代如何展开* 的不同押注，而不是对 *issue tracker 与 PM 工具是不是同一个品类* 的不同押注（它们就是同一个品类）。

## 对 Agent 控制台的启示

把多 agent 控制台 **架在 GitHub Issues 上**，是一个反共识赌注。2025–2026 主流叙事是 "Linear 是 agent 控制平面" —— Symphony 选了它，Linear for Agents 把它正式化，Devin / Codegen / Cursor 都先在那里集成。在 GitHub Issues 而不是 Linear 上做，是在和 AI lab 注意力的方向逆行。

但反共识赌注是有真东西的：

- **GitHub 是代码所在的地方。** Symphony 必须把 Linear 跟代码 *集成* 起来。GitHub-native 的控制台没有这条接缝 —— issue、PR、branch、code review 本来就在一个产品里。
- **GitHub 的经济地板是 $0。** Linear 在加 agent 层之前已经是 $10–14/用户/月。叠在 $14/用户/月 之上的 agent 编排工具会很快撞天花板。
- **GitHub 有 1 亿+ 开发者；Linear 有大约 2.5 万家公司。** TAM 比例至少 100 倍。
- **GitHub 自己的 agent-PM 功能集（Copilot Workspace、Coding Agent）是垂直且锁定的。** "在 GitHub Issues 上做横向 / 多 agent 的控制台" 是 GitHub 自己结构性不会去填的空白 —— 它要你用 *Copilot*，不是要你在同一个 issue 上跑 Devin、Codex、Claude。

### 支持这个赌注的最强论据

**GitHub 不会自己做横向多 agent 控制平面。** 这违反它的经济利益 —— 它拥有 Copilot。它会继续 ship Copilot Workspace 与 Copilot Coding Agent，但 *不会* 让你方便地把一个 issue 派给 Devin、另一个派给 Codex、再一个派给 Claude，并在统一视图里看。

### 反对这个赌注的最强论据

**Symphony 已经选了 Linear，"最好的 agent 先在哪里集成"的网络效应是真的。** 如果 Devin / Codex / Claude Coding Agent 都先在 Linear 的 first-class-agent API 上集成、再以同等深度集成到 GitHub，那"GitHub-first"就 = "agent-second"。

第二个风险：**GitHub 是个移动靶。** Sub-issues、Issue Types、高级搜索、Projects v2 演化 —— GitHub 自身的功能面正在填补任何第三方在数据模型层会去填的空白。任何控制台都必须把自己定位在数据模型 *之上*（编排、多 agent UX、review 工作流），而不是 *在它的位置上*。

## 资料来源

### Linear 起源与定位
- [About – Linear](https://linear.app/about)
- [Karri Saarinen — Starting Linear](https://karrisaarinen.com/posts/starting-linear-app/)
- [Announcing Linear (Karri Saarinen, Medium, April 2019)](https://medium.com/linear-app/announcing-linear-e64e79581d01)
- [Linear's Path to Product-Market Fit (First Round Review)](https://review.firstround.com/linears-path-to-product-market-fit/)
- [Anti-Agile Project Tracker Linear Takes on Jira (The New Stack)](https://thenewstack.io/anti-agile-project-tracker-linear-the-latest-to-take-on-jira/)

### GitHub Issues / Projects v2 / Sub-issues
- [Evolving GitHub Issues Public Beta (GitHub Changelog, Oct 2024)](https://github.blog/changelog/2024-10-01-evolving-github-issues-public-beta/)
- [About Projects (GitHub Docs)](https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects)

### GitHub Copilot Workspace & Coding Agent
- [GitHub Copilot Workspace announcement (GitHub Blog, April 29 2024)](https://github.blog/news-insights/product-news/github-copilot-workspace/)
- [GitHub Universe 2024 press release](https://github.com/newsroom/press-releases/github-universe-2024)

### Linear AI / Agents
- [Linear for Agents (Changelog, May 20 2025)](https://linear.app/changelog/2025-05-20-linear-for-agents)
- [AI Agents in Linear (Docs)](https://linear.app/docs/agents-in-linear)

### OpenAI Symphony
- [openai/symphony (GitHub repo)](https://github.com/openai/symphony)
- [SPEC.md (Symphony)](https://github.com/openai/symphony/blob/main/SPEC.md)
- [An open-source spec for Codex orchestration: Symphony (OpenAI)](https://openai.com/index/open-source-codex-orchestration-symphony/)

### 对照与迁移
- [We Outgrew GitHub Issues at 500 Tickets — Cotera](https://cotera.co/articles/linear-vs-github-issues-comparison)
- [Moving from Linear to GitHub (Documenso)](https://documenso.com/blog/linear-gh)
- [Jira vs Linear comparison (Atlassian)](https://www.atlassian.com/software/jira/comparison/jira-vs-linear)
