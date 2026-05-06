---
title: "Linear vs GitHub Issues vs Jira — Why They're Considered Different & Whether AI Is Changing That"
description: "Three product categories, three decades of accumulated reasons that are mostly historical, not functional — and what the AI-agent layer changes."
pubDate: 2026-05-01
tags: ["research", "project-management", "linear", "github-issues", "jira", "agents"]
lang: "en"
sourcePath: "claude-workspace/wiki/research/2026-05-01-linear-github-jira-positioning.md"
---

## Executive Summary

Linear, GitHub Issues, and Jira have been treated as different product categories for three decades of accumulated reasons that are mostly **historical, not functional**: different founders pitched them to different buyers (Atlassian to enterprise IT in 2002, GitHub to open-source devs in 2008, Linear to Silicon Valley IC product builders in 2019), they used different vocabulary ("epic/story/sprint" vs "issue/PR" vs "issue/cycle/project"), and their pricing models targeted different procurement paths. The functional core — *a database of work items with state, assignees, and parent-child links* — has been roughly the same in all three since 2022.

In 2024-2026 that perception is breaking down on two fronts. **First**, GitHub closed most of the remaining feature gap with Linear: Projects v2 (2022) added table/roadmap/iteration views, sub-issues went GA in 2024-2025, issue types and advanced search shipped in late 2024. **Second**, the AI-agent layer is what matters now, not the issue-tracker UI underneath it. OpenAI's Symphony (April 2026) makes this explicit: it treats the issue tracker as a *control plane for autonomous coding agents* — and it picked Linear, not GitHub Issues. Linear's "Linear for Agents" launch (May 2025) made agents first-class users in their data model.

**Why this matters for tooling decisions**: building an agent control plane on top of GitHub Issues is a contrarian-but-defensible bet. The dominant narrative right now (Symphony, Linear for Agents) puts Linear at the center. The contrarian angle — GitHub-first because that's where code actually lives, repos are free, and 100M+ developers are already there — is real but undersupplied in product form. The strongest argument *against* is that GitHub has the same option and may close it first via Copilot Workspace + Coding Agent.

## Founding stories & original positioning

### Jira (Atlassian, 2002)

Mike Cannon-Brookes and Scott Farquhar founded Atlassian in 2002 in Sydney, funded with AUD $10,000 in credit-card debt, shortly after graduating from the University of New South Wales. Their initial business was tier-3 customer support for Java apps — they were "unhappy with the bug-tracking software they were using at the time," so they built their own and named it **Jira** ("a play on Gojira, the Japanese title of the 1954 film Godzilla"). They quickly realized selling Jira was more lucrative than selling support.

Original positioning: **"powerful, configurable bug tracker for Java teams,"** sold via low-touch, no-salespeople, self-serve model — radical for B2B in 2002. Over the next decade Jira accumulated workflow customization, permission schemes, custom fields, and Marketplace plugins until it became the de facto enterprise standard. The cost: it became the canonical example of a tool that "individual contributors hate but procurement loves." Cannon-Brookes's quote — "Atlassian's flagship product, Jira, a project and issue tracking tool" — already shows the dual identity that confused the category: was it a bug tracker or a PM tool? The answer was "yes."

### GitHub Issues (2008)

GitHub launched on April 10, 2008, founded by Tom Preston-Werner, Chris Wanstrath, P. J. Hyett, and Scott Chacon. Issues was bundled with the code-hosting product from very early — there was never a separate "GitHub Issues" launch. That bundling shaped its positioning permanently: **Issues was a feature of code hosting, not a standalone PM tool.** It sat next to the repo, was free, and lived where developers already were.

The lack of explicit positioning is itself the positioning. Where Jira had "configurability for any workflow" and Linear later had "the Linear method," GitHub Issues had no method. It had: a title, a body, labels, a milestone, an assignee, and (later) a project board. For 15 years, this was both its weakness — no priorities, no cycles, no roadmap views — and its moat: every developer already had a GitHub account.

### Linear (2019)

Linear was announced publicly on **April 18, 2019** by Karri Saarinen (ex-Airbnb principal designer), Tuomas Artman (ex-Uber), and Jori Lallo (ex-Coinbase). Saarinen had pitched Lallo and Artman the idea after Lallo took a 2018 sabbatical from Coinbase. From Saarinen's own writing on starting Linear:

> "Something that really frustrated me at Airbnb, and many other companies I've worked at, is how bad a lot of exciting tasks/project/issue tracking tools were."
>
> "For me using these tools, as a designer, I was surprised how badly they were designed. It felt like they were not designed for humans, and took all the good design rules and reversed them."

The April 2019 announcement framed the existing market explicitly:

> "Many of the leading tools on the market were created over a decade ago and their concepts have not evolved much since their inception."

Linear's three pillars at launch were: (1) "exceptional user experience focused on speed and frictionless workflows," (2) "automating manual processes and optimizing team workflows," (3) "connecting execution directly with planning."

The audience was intentionally narrow. From Saarinen at First Round Review:

> "I don't think you can build the optimal tool for anything if it's very flexible or endlessly customizable."
>
> "Quality is our first principle. Every other metric and decision flows from that."

Crucially, Linear positioned itself **anti-agile**:

> "We don't write user stories and think they're an anti-pattern in product development. We write short and simple issues that describe the task in plain language instead."

This is the single strongest positioning differentiator. Jira sells "you can model any agile workflow." Linear sells "we made the workflow decision for you, and it isn't agile."

## Why historically perceived as separate categories

Five reasons compound:

**(1) Buyer / audience differentiation.** Jira historically sold to engineering managers, PMOs, and IT directors — buyers who valued auditability, permission granularity, and Atlassian's broader enterprise stack (Confluence, Bitbucket, OpsGenie). GitHub Issues was adopted bottom-up by individual developers — there was no "buyer" because the team already had GitHub. Linear targeted a third buyer: founders/heads-of-engineering at venture-funded software startups, where the buyer and end-user were the same person and "developer happiness" was a real KPI.

**(2) Vocabulary divergence.** Jira: epic / story / sprint / kanban / scrum / RAID log. GitHub: issue / PR / milestone / label / project. Linear: issue / cycle / project / triage / roadmap. The shared concepts (a piece of work, a person it's assigned to, its current state) were buried under different ceremony, which made cross-category comparison feel apples-to-oranges.

**(3) Pricing model.** Jira: $7-15/user/month, plus the Atlassian-stack bundle pull. GitHub Issues: $0, bundled with code hosting — so the comparison is "the entire GitHub product vs. just Linear." Linear: $10-14/user/month seat-based. The free-bundled-with-code economics of GitHub Issues kept it out of buyer evaluations because it was never a line item.

**(4) Workflow center of gravity.** Jira's workflow center was the **sprint planning meeting** — the artifact mattered more than the day-to-day. GitHub's was the **pull request** — issues were just things you closed via "fixes #123." Linear's was the **triage inbox + cycle** — a continuous, lightweight kanban without sprint ceremony. Three different daily rituals, three different products in users' minds.

**(5) Functional gaps that mattered then.** As of 2020, the gaps were real, not perceived. GitHub had no priority field, no sortable priorities, no cycles, no story points, no multi-repo views, no roadmap. Linear had no native code/PR linkage. Jira had everything but at the cost of glacial UI. Until Projects v2 in 2022 and sub-issues in 2024-2025, the "GitHub vs Linear" comparison was unfair on features.

## Functional comparison matrix (April 2026)

| Capability                              | GitHub Issues + Projects v2 | Linear            | Jira                |
|-----------------------------------------|----------------------------|-------------------|---------------------|
| Issue creation / editing                 | ✓                          | ✓                 | ✓                   |
| Sub-issues / parent-child hierarchy      | ✓ (GA 2025, 8 levels)      | ✓                 | ✓ (epics/stories)   |
| Sprints / cycles / iterations            | ✓ (Iteration field, v2)    | ✓ (Cycles)        | ✓ (Sprints)         |
| Custom workflows / states                | partial (per-project)      | partial (opinionated) | ✓ (deep)         |
| Roadmap views                            | ✓ (Roadmap view, v2)       | ✓ (Projects/Roadmaps) | ✓ (Plans)       |
| Triage / inbox                           | partial (filters, no inbox) | ✓ (Triage queue) | partial             |
| Team-level vs project-level scoping      | repo + org + project       | team + project    | project + team      |
| GitHub PR linkage                        | ✓ (native)                 | ✓ (deep integration) | partial          |
| Code search integration                  | ✓ (native)                 | ✗                 | ✗                   |
| Time tracking                            | ✗ (3rd-party)              | partial (estimates) | ✓                |
| Customer feedback widgets                | ✗                          | ✓ (Customer Requests) | ✓ (Service Mgmt) |
| API completeness                         | REST + GraphQL, mature     | GraphQL, modern   | REST, sprawling     |
| AI / agent features                      | Copilot Workspace, Coding Agent | Linear for Agents (1st-class users) | Atlassian Intelligence |
| Mobile / desktop apps                    | mobile only                | mobile + native desktop | mobile + web    |
| Pricing                                  | $0 (free) – $4/user GH Team | $10–14/user/mo    | $7–15+/user/mo     |
| Performance (subjective UI latency)      | 1-2s round trips           | <100ms local sync | 1-3s round trips    |

**Summary of the matrix.** As of 2026, GitHub Issues + Projects v2 covers ~80% of Linear's surface and ~70% of Jira's. Linear's remaining moats are speed (local sync engine), opinionated UX (no configuration paralysis), and customer-feedback features. Jira's remaining moats are workflow depth, permission granularity, and the broader Atlassian stack (Confluence, JSM). GitHub's moats are price ($0), code-adjacency, and the 100M+ developer install base.

## Why public discourse rarely puts Linear vs GitHub in the same lane

Despite the converging feature set, online discussion still defaults to "Linear vs Jira" or "GitHub vs Jira." Three reasons:

**(1) Atlassian frames the comparison.** The dominant comparison page in search results is `atlassian.com/software/jira/comparison/jira-vs-linear` — Atlassian itself published a Jira-vs-Linear page, anchoring the dyad. There is no equivalent canonical "Linear vs GitHub" page; Linear's own integrations page describes GitHub as a *partner*, not a competitor. When the incumbent and the disruptor both publicly frame the comparison as "Jira vs Linear," analysts follow.

**(2) GitHub Issues is perceived as a feature, not a product.** Even as late as 2024 the Hacker News discussion "Moving from Linear to GitHub" treated this as a contrarian move. The framing is "GitHub catching up" rather than "GitHub competing." This perception lags the actual feature parity by 18-24 months.

**(3) The migration paths run in different directions.** "Outgrew Jira → moved to Linear" is a common story. "Outgrew Linear → moved to GitHub" is rare. "Outgrew GitHub Issues → moved to Linear" exists. The asymmetric migration pattern reinforces the mental model that GitHub Issues sits *below* Linear/Jira on a complexity ladder rather than alongside them. Public discourse describes ladders cleanly and parallels poorly.

A fourth softer reason: **Linear's brand is "the anti-Jira."** Picking that fight publicly is core to Linear's marketing. Picking a fight with GitHub would reframe Linear as a code-tool competitor, which dilutes the "we're the modern PM tool" positioning. Linear has commercial reasons to leave GitHub uncompared.

## AI / agent era convergence

This is where the historical category boundaries are dissolving fastest.

### GitHub Projects v2 (Dec 2021 GA, evolved through 2022)

Projects v2 was the single largest upgrade GitHub Issues ever received. It added: table views, roadmap views, custom fields (text/number/date/select/iteration), workflow automations, and `iteration` as a first-class field type. The iteration field is a sprint primitive — GitHub finally had a native answer to Linear's Cycles and Jira's Sprints.

### GitHub sub-issues (Beta Oct 2024 → GA 2025)

Announced in the "Evolving GitHub Issues (Public Beta)" post on **October 1, 2024**, sub-issues replaced the deprecated Tasklists feature. Up to **100 sub-issues per parent, 8 levels of nesting**, with parent/child progress visible in Projects views, filterable and groupable. This was the last big Linear-specific feature (parent-child hierarchies are how Linear models projects-of-issues) that GitHub didn't have. Same announcement also added Issue Types and AND/OR/parenthesis advanced search.

### GitHub Copilot Workspace (Tech Preview April 29, 2024)

The tech-preview pitch (Thomas Dohmke, GitHub blog): *"the Copilot-native developer environment — from idea, to code, to software all in natural language."* Critically for this analysis, the workflow **starts at a GitHub Issue or repo**:

1. Open a GitHub Issue
2. Copilot generates a step-by-step plan
3. User edits the plan
4. Copilot writes code
5. User tests in integrated terminal
6. PR diff review → file PR

This is significant: **Copilot Workspace doesn't compete with Linear directly**, but it makes the GitHub Issue → PR loop *agentic by default*. If you're going to wrap an LLM around your issue tracker, GitHub now has the deepest native loop. Linear has to integrate; GitHub has it built in.

GitHub Universe 2024 expanded this with **Copilot Coding Agent** — assign a GitHub Issue to Copilot, it opens a PR. This is the most direct "agent control plane" feature shipped by either company.

### Linear for Agents (May 20, 2025)

Linear's response. Per the official changelog: agents are **first-class users** in Linear — they have user profiles, can be @mentioned, assigned issues, added to teams. Launch partners: **Devin, ChatPRD, Codegen**, with Sentry and Intercom following. Later expanded to include Codex, Cursor, GitHub Copilot, Factory.

The architectural choice is important: Linear didn't build an agent. They built an **agent integration layer** — making their data model agent-native so anyone can plug in. This is the Stripe-Connect-of-AI-PM bet.

### OpenAI Symphony (April 28, 2026)

The strongest signal. OpenAI published Symphony as an open-source spec + Elixir reference implementation. Per the OpenAI announcement and Help Net Security coverage: *"an orchestration layer that turns a project-management board such as Linear into a control plane for coding agents."* Each Linear issue → isolated workspace → Codex agent session → PR (or analysis). Symphony continuously polls the Linear board.

Two facts about Symphony matter:

- **OpenAI picked Linear, not GitHub Issues, as the reference control plane.** This is a vote of confidence in Linear's data model, API, and "agents-as-users" abstraction.
- **OpenAI claims "some teams at OpenAI saw a 500% increase in landed pull requests during the first three weeks of using Symphony."** Linear's founder reportedly noted "a spike in workspaces created on the platform as Symphony was released."

The Symphony SPEC is intentionally tracker-agnostic ("works with workflow tools generally"), but the reference implementation ships with Linear support only. That asymmetry is the story: in 2026, the most prestigious AI lab picked Linear as the canonical agent-orchestration backplane.

### Where the convergence is heading

Two trajectories are now visible:

1. **GitHub vertically integrates** — Issues → Sub-issues → Projects → Copilot Workspace → Copilot Coding Agent. The pitch: "everything in one product, free for the issue tracker, paid for the agent." This is a Microsoft-strategy classic (Office, Teams, GitHub itself).

2. **Linear becomes the open agent control plane** — agents-as-first-class-users, GraphQL-first, Symphony-blessed. The pitch: "we're Switzerland for coding agents — Devin, Codex, Copilot, Cursor all plug in equally."

These are not the same product. GitHub's future Issues looks like a closed loop; Linear's looks like an interchange. Both are valid — but they're now visibly different bets on **how** the agent era plays out, not on **whether** issue tracking and PM tooling are the same category. (They are.)

## Implications for an agent control panel

A multi-agent control panel **on top of GitHub Issues** is a contrarian bet. The dominant 2025-2026 narrative is "Linear is the agent control plane" — Symphony picked it, Linear for Agents formalized it, Devin/Codegen/Cursor all integrated there first. Building on GitHub Issues instead of Linear is going against the grain of where AI lab attention has gone.

But the contrarian bet has real substance:

- **GitHub is where code lives.** Symphony has to *integrate* Linear with code. A GitHub-native control panel doesn't have that seam — issue, PR, branch, and code review are already one product.
- **GitHub's economic floor is $0.** Linear is $10-14/user/month before any agent layer. Agent-orchestration tools that stack *on top of* a $14/user/month base will hit ceiling effects fast.
- **GitHub has 100M+ developers; Linear has ~25,000 companies.** The TAM ratio is at least 100x.
- **GitHub's own agent-PM feature set (Copilot Workspace, Coding Agent) is vertical and locked-in.** A horizontal/multi-agent control panel on top of GitHub Issues is a gap GitHub itself has structurally not filled — they want you to use *Copilot*, not Devin and Codex and Claude on the same issue.

### Strongest argument for the bet

**GitHub will not build a horizontal multi-agent control plane themselves.** It's against their economic interest — they own Copilot. They will keep shipping Copilot-Workspace and Copilot-Coding-Agent, but they will *not* make it easy to assign one issue to Devin, another to Codex, and another to Claude with a unified view.

### Strongest argument against

**Symphony already chose Linear, and the network effect of "where the best agents integrate first" is real.** If Devin / Codex / Claude Coding Agent all keep integrating with Linear's first-class-agent API before they integrate with GitHub at the same depth, then "GitHub-first" = "agent-second."

A second risk: **GitHub is a moving target.** Sub-issues, Issue Types, advanced search, Projects v2 evolution — GitHub's own surface area is closing the gaps any third-party would otherwise fill at the data-model layer. Any control panel has to position above the data model (orchestration, multi-agent UX, review workflow), not at it.

## Sources

### Linear founding & positioning
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

### Comparisons / migration stories
- [We Outgrew GitHub Issues at 500 Tickets — Cotera](https://cotera.co/articles/linear-vs-github-issues-comparison)
- [Moving from Linear to GitHub (Documenso)](https://documenso.com/blog/linear-gh)
- [Jira vs Linear comparison (Atlassian)](https://www.atlassian.com/software/jira/comparison/jira-vs-linear)
