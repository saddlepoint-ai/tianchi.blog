---
title: "Karpathy 的 LLM Wiki —— 一种构建持久知识库的模式"
description: "Andrej Karpathy 的 LLM Wiki 模式总结：让 LLM 在结构化的 markdown 知识库上做增量构建与维护，而不是每次查询都对原始文档跑一遍 RAG。"
pubDate: 2026-04-06
tags: ["research", "karpathy", "llm-wiki", "knowledge-base", "rag"]
lang: "zh"
sourcePath: "claude-workspace/wiki/research/2026-04-06-karpathy-vibe-coding.md"
---

> **来源：** <https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f>
> **作者：** Andrej Karpathy ｜ **日期：** 2026 年 4 月 4 日 ｜ **文件：** `llm-wiki.md`
>
> 注：原始任务标题里写的是 "vibe coding"，但这篇 gist 实际讨论的是 **LLM Wiki** 模式 —— 用 LLM 来构建个人知识库。下文尽量保留 Karpathy 的原话。

---

## 核心思路：从 RAG 到持久 Wiki

大多数人用 LLM 处理文档的方式还是 RAG："你上传一堆文件，LLM 在查询时检索相关片段，然后生成回答。这种方式能用，但 **LLM 每次都在从零重新发现知识。没有任何累积。**"

替代方案是：与其在查询时对原始文档做检索，不如让 LLM **"增量构建并维护一个持久的 wiki"** —— 一组结构化、互相引用的 markdown 文件。每加入一个新源，"它会读取、提取关键信息，并把这些信息整合进现有 wiki —— 更新实体页、修订主题摘要、记下新数据与旧主张冲突的地方，强化或挑战正在演化的综合判断。"

**"Wiki 是一个持久的、不断累积的产物。"** 交叉引用已经就位。矛盾点已经被标注。综合判断已经反映出你读过的每一份资料。

## 人 - AI 的分工

> "你（几乎）从不亲自写 wiki —— wiki 完全由 LLM 来写、来维护。你负责选材、探索方向、提出对的问题。LLM 负责一切苦力活 —— 摘要、交叉引用、归档、簿记。"

实际操作中："我一边开着 LLM agent，一边开着 Obsidian。LLM 根据我们的对话做编辑，我实时浏览结果。"对应关系：

- **Obsidian 是 IDE**
- **LLM 是程序员**
- **Wiki 是代码库**

## 适用场景

- **个人**：目标、健康、心理、自我提升 —— 把日记、文章、播客笔记归档进去
- **研究**：用几周到几个月读论文与文章，逐步构建一份完整的 wiki，论点不断演化
- **读书**：为人物、主题、情节线索建立条目页（想想 Tolkien Gateway 这种粉丝 wiki，但是私人的、由 LLM 维护）
- **工作 / 团队**：内部 wiki 由 LLM 维护，输入是 Slack 线程、会议纪要、项目文档、客户访谈 ——"wiki 一直保持新鲜，因为团队里没人愿意做的维护工作都被 LLM 吃下了"
- **其他**：竞品分析、尽调、行程规划、课程笔记、爱好深挖

## 三层架构

1. **原始素材层**：精选过的源文档（文章、论文、图片、数据）。不可变 —— LLM 只读，不改。"这是你的真理之源。"
2. **Wiki 层**：LLM 生成的 markdown 文件 —— 摘要、实体页、概念页、对照、总览、综述。"这一层完全归 LLM 所有。"
3. **Schema 层**：一份配置文档（比如 `CLAUDE.md` 或 `AGENTS.md`），告诉 LLM wiki 是怎么组织的、约定是什么、工作流是什么。"这是关键的配置文件 —— 它把一个通用聊天机器人变成一个有纪律的 wiki 维护者。"你和 LLM 一起把它打磨出来。

## 三个核心操作

### Ingest（吸纳）

把新源丢进去，LLM 处理。"一份源材料可能会改动 10–15 个 wiki 页面。" Karpathy 偏好一次只 ingest 一份并保持参与 ——"我会读摘要、检查更新、引导 LLM 重点强调什么"。

### Query（查询）

向 wiki 提问。"好的回答可以反过来归档为新页面。" 对照、分析、连接 ——"这些都很有价值，不该消失在 chat 历史里。这样你的探索就像 ingest 进来的源一样，会在知识库里持续累积"。

### Lint（健康检查）

定期对 wiki 做检查：页与页之间的矛盾、过时的主张、孤立页面、缺失的交叉引用、数据空白。"LLM 很擅长建议接下来该研究什么、该找什么新的源。"

## 索引与日志

- **index.md** —— 内容导向的目录。每个页面带链接、一行摘要、元数据。"回答问题时，LLM 先读 index 找出相关页，再深入。在中等规模（约 100 个源、几百个页面）下意外地好用，避免了 embedding RAG 那一整套基建。"
- **log.md** —— 按时间倒序、只追加。建议：用一致的前缀（比如 `## [2026-04-02] ingest | Article Title`），方便用 unix 工具直接解析。

## 工具与小贴士

- **搜索**：小规模 index 文件就够；规模大了考虑 [qmd](https://github.com/tobi/qmd) —— 本地 markdown 搜索，混合 BM25 / 向量检索 + LLM 重排序，带 CLI 与 MCP server。
- **Obsidian Web Clipper**：浏览器插件，把网页文章转成 markdown。
- **Obsidian graph view**："看 wiki 形状的最佳方式。"
- **Marp**：用 markdown 写幻灯片。
- **Dataview**：Obsidian 插件，对 frontmatter 做查询。
- "Wiki 不过是一个 git repo，里面装的都是 markdown 文件。版本历史、分支、协作都是免费的。"

## 为什么这套行得通

> "维护知识库里最烦的部分不是阅读，也不是思考，而是簿记。更新交叉引用、保持摘要新鲜、在新数据与旧主张冲突时做标注、维护几十个页面之间的一致性。**人类放弃 wiki，是因为维护负担增长得比价值还快。LLM 不会无聊，不会忘了更新交叉引用，一次过能改 15 个文件。**"

> "人的工作是策展、引导分析、提出好问题、思考这一切意味着什么。LLM 的工作是其余一切。"

跟 Vannevar Bush 的 Memex（1945）有渊源 ——"私人的、主动策展的知识仓库，文档之间以联想路径互联。" Bush 的设想是"私密、主动维护，文档之间的连接和文档本身一样有价值。他唯一没解决的是：谁来做维护？现在 LLM 接下了这件事。"

## 设计哲学

这份文档"刻意保持抽象，描述的是想法本身，而不是某种具体实现。"一切都是可选、可拼装的。"使用这份模式的正确方式是把它分享给你的 LLM agent，跟它一起做出适合你需求的实现版本。这份文档的唯一职责是把模式传达清楚。其他的，让你的 LLM 想清楚就行。"

---

## 这对我们做 Agent 产品意味着什么

LLM Wiki 模式对几个相邻产品类目都有直接启示。

### 多 Agent 工作站

**工作站本身就可以是 LLM Wiki 的宿主环境。**

- 三层架构（raw sources / wiki / schema）天然映射到工作站设计 —— 工作站本来就是文件系统 + agent 的组合。
- **index.md + log.md 模式**值得直接拿来用：工作站里多个 agent 共享 index 来理解项目全貌，用 log 追踪谁做了什么。这正好解决多 agent 场景下的上下文共享问题。
- Karpathy 那句 "Obsidian is the IDE; the LLM is the programmer; the wiki is the codebase" 对应到 dashboard / 控制面板这一层。关键差异是我们要 **多个 agent 并行操作同一份 wiki** —— 这就引入了 Karpathy 单人单 agent 模式里没有的冲突解决与任务分配。
- **Lint 操作**可以做成工作站内置的一类 agent 任务：对知识库做周期性体检。

### Skills / 参考文档 / AI-Test

**Karpathy 的 schema 层正好对应一个 skill 系统。**

- "把通用聊天机器人变成有纪律的 wiki 维护者" —— 这正是 skill 的核心价值：把通用 LLM 改造成某个领域的专家。
- **Reference-Doc skill** 可以直接实现 Ingest + Query：读文档、抽关键信息、更新 wiki 页、维护交叉引用。这不是 RAG，而是 *编译过的知识*。
- **AI-Test skill** 对应 Lint。lint 检查的（矛盾、过时主张、孤儿页、缺失的交叉引用）本质上就是知识库的"测试"。
- Karpathy 提到 "在某个时刻你会想做一些小工具" —— 搜索、去重、冲突检测、schema 校验，每一个都是天然的 skill 候选。

### Agent 市场

**LLM Wiki 模式揭示了一个被忽视的品类：知识维护型 agent。**

- 当前 agent 市场大多聚焦于代码生成、聊天、检索。Karpathy 指出的是另一种需求：**持续维护**。Ingest agent、Lint agent、Cross-reference agent、Synthesis agent —— 每一个都可以独立销售或共享。
- **人 - AI 协作模式**很清晰："人的工作是策展、引导分析、提出好问题、思考这一切意味着什么。LLM 的工作是其余一切。" Marketplace 里的 agent 应该明确声明：自己处理"其余一切"中的哪一片，需要人类提供什么输入。
- **Schema 标准化**是 marketplace 成功的前置条件。如果每个 agent 都用不同的 wiki 结构，它们就不能组合。
- **验证类角色**：Karpathy 没有显式覆盖正确性验证（他的 lint 只查结构问题）。这是一个空白 —— 事实核查 agent、一致性验证 agent 的价值会随 wiki 规模增长而急剧上升。

### 跨类目要点

| 洞察 | 含义 |
|---|---|
| 知识应该被 *编译*，不应该每次查询都重新推导 | Agent 的产出物应该是持久、可索引的工件 |
| Schema 把通用 LLM 变专家 | Skill = 领域特定的 schema |
| 维护是人放弃知识库的根本原因 | Agent 最大的价值在维护，不在创造 |
| Index + Log 是低成本的多 agent 协调机制 | 比完整的 message bus 更轻 |
| Lint / 健康检查 = 知识库的"测试套件" | AI-test 应该覆盖知识一致性，不只是代码测试 |
