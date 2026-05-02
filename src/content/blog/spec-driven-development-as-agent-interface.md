---
title: "Spec-Driven Development as the Agent Interface"
description: "Vibe coding scales until the diff is too big to read. Past that point, specs — not chat — become the main canvas for working with coding agents."
pubDate: 2026-05-02
tags: ["spec-driven-development", "agents", "developer-tools"]
heroImage: /blog/spec-driven.svg
heroAlt: "Three stacked spec layers — constitution, feature spec, validation."
---

> **TL;DR.** Agent is muscle. Spec is brain. As codebases grow, the human moves from line-by-line reviewer to spec author — but the editing surface for that role is still primitive. The next good developer tool will probably make specs feel as natural as editing a document.

Vibe coding is fun until the codebase becomes too large to review.

At small scale, you can ask an agent to build a feature, skim the diff, and ship. At larger scale, the human stops being a line-by-line code reviewer and becomes something closer to an architect. The work shifts from "write code" to "shape intent."

That is why spec-driven development feels important.

## The spec is the brain

The useful slogan is:

> Agent is muscle. Spec is brain.

A spec is not a PRD in the old product-management sense. For agents, a spec has to be machine-actionable. It should tell the system:

- what problem to solve
- why it matters
- what constraints cannot be violated
- what acceptance criteria prove completion
- what commands or tests verify the work

The goal is to decouple "what and why" from "how." Humans should spend more time clarifying intent and less time reading generated code.

## A good spec has three layers

The pattern I like has three levels.

### Constitution

This is the durable project layer:

- mission
- audience
- tone
- architecture constraints
- stack decisions
- testing conventions

It changes slowly. It is closer to a style guide or operating system for the project.

### Feature spec

This is the current work layer:

- user problem
- scope
- non-goals
- implementation constraints
- affected surfaces
- rollout plan

It is specific enough for an agent to act, but not so specific that it becomes pseudocode.

### Validation

This is the control layer:

- test cases
- manual checks
- screenshots
- API calls
- expected outputs
- regression risks

Validation is where humans reassert control. Without it, an agent can satisfy the vibe of a request while missing the actual behavior.

## The current UX is still primitive

Most spec-driven workflows today are still markdown files in an IDE plus slash commands in a CLI.

That is powerful, but it feels like an early text-mode interface. We have the method, but not yet the editing surface.

The missing layer is a proper canvas for intent:

- outline view for project and feature specs
- expandable acceptance criteria
- status and evidence attached to each criterion
- diff-like review for spec changes
- links between spec sections and generated code
- automatic prompts when the agent finds missing requirements

In other words, the future interface for coding agents may look less like a chat box and more like a structured document editor.

## The human role changes

The human is not removed from the loop. The human moves up the loop.

Instead of asking, "Did every line of this diff look right?" the better questions become:

- Is the spec clear?
- Are the constraints right?
- Are the examples representative?
- Is the validation strong enough?
- Did the agent update the spec when reality changed?

This is not less engineering. It is engineering at a different layer.

## My current bet

The best agent workflows will not be pure chat. Chat is good for exploration, but it is a poor long-term memory surface.

Specs, tests, progress files, and structured handoffs are better anchors. They give agents something stable to act on and humans something compact to review.

The next good developer tool may be the one that makes those artifacts feel as natural as editing a document.

## Further reading

- [Spec-driven development with AI: get started with a new open-source toolkit — GitHub blog](https://github.blog/ai-and-ml/generative-ai/spec-driven-development-with-ai-get-started-with-a-new-open-source-toolkit/)
- [GitHub Spec Kit — repo](https://github.com/github/spec-kit)
- [Exploring Gen AI: SDD with three tools — Martin Fowler](https://martinfowler.com/articles/exploring-gen-ai/sdd-3-tools.html)
- [Spec-driven development is not waterfall — Marc Brooker](https://brooker.co.za/blog/2026/04/09/waterfall-vs-spec.html)
- [OpenSpec — the spec framework for coding agents](https://openspec.dev/)
