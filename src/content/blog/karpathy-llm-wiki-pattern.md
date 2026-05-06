---
title: "Karpathy's LLM Wiki — A Pattern for Persistent Knowledge Bases"
description: "Summary of Andrej Karpathy's LLM Wiki pattern — incrementally building and maintaining a structured wiki with an LLM, instead of running RAG over raw documents at query time."
pubDate: 2026-04-06
tags: ["research", "karpathy", "llm-wiki", "knowledge-base", "rag"]
lang: "en"
sourcePath: "claude-workspace/wiki/research/2026-04-06-karpathy-vibe-coding.md"
---

> **Source:** <https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f>
> **Author:** Andrej Karpathy | **Date:** April 4, 2026 | **File:** `llm-wiki.md`
>
> Note: Despite the original task title mentioning "vibe coding," this gist is actually about the **LLM Wiki** pattern — a system for building personal knowledge bases with LLMs. The summary below preserves Karpathy's original phrasing wherever possible.

---

## Core Idea: From RAG to Persistent Wiki

Most people's experience with LLMs and documents looks like RAG: "you upload a collection of files, the LLM retrieves relevant chunks at query time, and generates an answer. This works, but **the LLM is rediscovering knowledge from scratch on every question. There's no accumulation.**"

The alternative: instead of retrieving from raw documents at query time, the LLM **"incrementally builds and maintains a persistent wiki"** — a structured, interlinked collection of markdown files. When you add a new source, "it reads it, extracts the key information, and integrates it into the existing wiki — updating entity pages, revising topic summaries, noting where new data contradicts old claims, strengthening or challenging the evolving synthesis."

**"The wiki is a persistent, compounding artifact."** The cross-references are already there. The contradictions have already been flagged. The synthesis already reflects everything you've read.

## Human-AI Division of Labor

> "You never (or rarely) write the wiki yourself — the LLM writes and maintains all of it. You're in charge of sourcing, exploration, and asking the right questions. The LLM does all the grunt work — the summarizing, cross-referencing, filing, and bookkeeping."

In practice: "I have the LLM agent open on one side and Obsidian open on the other. The LLM makes edits based on our conversation, and I browse the results in real time." The analogy:

- **Obsidian is the IDE**
- **The LLM is the programmer**
- **The wiki is the codebase**

## Use Cases

- **Personal**: goals, health, psychology, self-improvement — filing journal entries, articles, podcast notes
- **Research**: reading papers and articles over weeks/months, incrementally building a comprehensive wiki with an evolving thesis
- **Reading a book**: building pages for characters, themes, plot threads (think fan wikis like Tolkien Gateway, but personal and LLM-maintained)
- **Business/team**: internal wiki maintained by LLMs, fed by Slack threads, meeting transcripts, project documents, customer calls — "the wiki stays current because the LLM does the maintenance that no one on the team wants to do"
- **Other**: competitive analysis, due diligence, trip planning, course notes, hobby deep-dives

## Architecture (Three Layers)

1. **Raw sources** — curated source documents (articles, papers, images, data). Immutable — the LLM reads from them but never modifies them. "This is your source of truth."
2. **The wiki** — LLM-generated markdown files: summaries, entity pages, concept pages, comparisons, an overview, a synthesis. "The LLM owns this layer entirely."
3. **The schema** — a configuration document (e.g. `CLAUDE.md` or `AGENTS.md`) telling the LLM how the wiki is structured, conventions, workflows. "This is the key configuration file — it's what makes the LLM a disciplined wiki maintainer rather than a generic chatbot." You and the LLM co-evolve this over time.

## Three Core Operations

### Ingest

Drop a new source in; the LLM processes it. "A single source might touch 10-15 wiki pages." Karpathy prefers to ingest sources one at a time and stay involved — "I read the summaries, check the updates, and guide the LLM on what to emphasize."

### Query

Ask questions against the wiki. "Good answers can be filed back into the wiki as new pages." Comparisons, analyses, connections — "these are valuable and shouldn't disappear into chat history. This way your explorations compound in the knowledge base just like ingested sources do."

### Lint

Periodically health-check the wiki: contradictions between pages, stale claims, orphan pages, missing cross-references, data gaps. "The LLM is good at suggesting new questions to investigate and new sources to look for."

## Indexing and Logging

- **index.md** — content-oriented catalog. Each page listed with link, one-line summary, metadata. "When answering a query, the LLM reads the index first to find relevant pages, then drills into them. This works surprisingly well at moderate scale (~100 sources, ~hundreds of pages) and avoids the need for embedding-based RAG infrastructure."
- **log.md** — chronological, append-only record. Tip: consistent prefixes (e.g. `## [2026-04-02] ingest | Article Title`) make it parseable with unix tools.

## Tools and Tips

- **Search**: at small scale the index file suffices; at larger scale, consider [qmd](https://github.com/tobi/qmd) — local markdown search with hybrid BM25/vector search and LLM re-ranking, with CLI and MCP server.
- **Obsidian Web Clipper**: browser extension for converting articles to markdown.
- **Obsidian graph view**: "the best way to see the shape of your wiki."
- **Marp**: markdown-based slide decks from wiki content.
- **Dataview**: Obsidian plugin for queries over YAML frontmatter.
- "The wiki is just a git repo of markdown files. You get version history, branching, and collaboration for free."

## Why This Works

> "The tedious part of maintaining a knowledge base is not the reading or the thinking — it's the bookkeeping. Updating cross-references, keeping summaries current, noting when new data contradicts old claims, maintaining consistency across dozens of pages. **Humans abandon wikis because the maintenance burden grows faster than the value. LLMs don't get bored, don't forget to update a cross-reference, and can touch 15 files in one pass.**"

> "The human's job is to curate sources, direct the analysis, ask good questions, and think about what it all means. The LLM's job is everything else."

Related to Vannevar Bush's Memex (1945) — "a personal, curated knowledge store with associative trails between documents." Bush's vision was "private, actively curated, with the connections between documents as valuable as the documents themselves. The part he couldn't solve was who does the maintenance. The LLM handles that."

## Design Philosophy

The document is "intentionally abstract. It describes the idea, not a specific implementation." Everything is optional and modular. "The right way to use this is to share it with your LLM agent and work together to instantiate a version that fits your needs. The document's only job is to communicate the pattern. Your LLM can figure out the rest."

---

## Why this matters for agent products

The LLM Wiki pattern has direct implications for several adjacent product categories.

### Multi-Agent Workspaces

**The workspace can itself be a host environment for an LLM Wiki.**

- The three-layer architecture (raw sources / wiki / schema) maps cleanly onto a workspace design — a workspace is naturally a filesystem + agent combo.
- The **index.md + log.md pattern** is worth adopting directly: multiple agents in a workspace can share an index to understand the project as a whole, and use the log to track who did what. This solves the context-sharing problem in multi-agent settings.
- Karpathy's "Obsidian is the IDE; the LLM is the programmer; the wiki is the codebase" maps to the dashboard/control-panel role. The key difference is that we want **multiple agents operating in parallel on the same wiki** — which adds conflict resolution and task allocation as new requirements not present in Karpathy's single-user pattern.
- **The Lint operation** can be a built-in workspace agent task: periodic health checks of the knowledge base.

### Skills / Reference Docs / AI-Test

**Karpathy's schema layer corresponds directly to a skill system.**

- "What makes the LLM a disciplined wiki maintainer rather than a generic chatbot" — that *is* the value of a skill: turning a generic LLM into a domain-specific specialist.
- **A Reference-Doc skill** can implement the Ingest + Query operations directly: read documents, extract key information, update wiki pages, maintain cross-references. Not RAG — *compiled knowledge*.
- **An AI-Test skill** corresponds to Lint. The lint checks (contradictions, stale claims, orphan pages, missing cross-references) are essentially "tests" for a knowledge base.
- Karpathy mentions "at some point you may want to build small tools" — search, dedup, conflict detection, schema validation — all natural targets to package as skills.

### Agent Marketplaces

**The LLM Wiki pattern reveals an under-served category: knowledge maintenance agents.**

- Most agent marketplaces focus on code generation, chat, retrieval. Karpathy points to a different need: **continuous maintenance**. Ingest agent, Lint agent, Cross-reference agent, Synthesis agent — each can be an independently sold/shared role.
- The **human-AI collaboration model** is sharp: "The human's job is to curate sources, direct the analysis, ask good questions, and think about what it all means. The LLM's job is everything else." Agents in a marketplace should declare which slice of "everything else" they handle, and what input they need from humans.
- **Schema standardization** is a precondition for marketplace success. If every agent uses a different wiki structure, they can't compose.
- **Verification roles**: Karpathy doesn't explicitly cover correctness verification (his lint only checks structural issues). That's an opening — fact-checking and consistency-verification agents become more valuable as the wiki grows.

### Cross-cutting takeaways

| Insight | Implication |
|---|---|
| Knowledge should be *compiled*, not re-derived per query | Agent outputs should be persistent, indexable artifacts |
| Schema turns a generic LLM into a specialist | Skills = domain-specific schemas |
| Maintenance is why humans abandon knowledge bases | The biggest agent value is upkeep, not creation |
| Index + Log is a low-cost multi-agent coordination mechanism | Lightweight alternative to a full message bus |
| Lint/health-check is the "test suite" of a knowledge base | AI-test should cover knowledge consistency, not just code tests |
