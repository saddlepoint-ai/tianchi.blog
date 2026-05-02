---
title: "Context Is the Agent's Real Budget"
description: "Why I think context engineering is less about stuffing more into the window and more about choosing the smallest high-signal state."
pubDate: 2026-05-03
tags: ["context-engineering", "agents", "workflow"]
---

Most agent failures do not look like intelligence failures at first. They look like attention failures.

The model reads too much, remembers the wrong thing, carries stale assumptions, or spends half the session recovering context that should have been obvious. That is why I increasingly think of context as the agent's real budget.

Money matters. Tokens matter. But the more immediate constraint is attention.

## More context is not always better

Long context windows are useful, but they are not free. Every extra token competes for attention. When a prompt includes too many files, too many tools, too many rules, and too much history, the model has more information but less focus.

This is the practical version of context rot: accuracy and judgment degrade as the window gets crowded.

The better question is not "how do I fit everything in?" It is:

> What is the smallest set of high-signal information that makes the desired outcome likely?

## Progressive disclosure works better than preloading

Humans rarely start a project by reading every file. We read an index, follow a few paths, skim the high-level structure, and open details only when needed.

Agents should work the same way.

Good context systems give the agent lightweight handles first:

- file names
- folder structure
- codemaps
- task lists
- test commands
- design references
- acceptance criteria

Then the agent pulls details just in time.

This is why simple tools like `rg`, file globs, codemaps, and small README files can outperform elaborate memory systems. They let the model discover context instead of drowning in it.

## Scripts beat repeated explanation

If an agent repeatedly needs to do the same routine task, do not keep describing the API in prose. Wrap the routine in a script.

Examples:

- start the dev environment
- run the correct test subset
- send a notification
- export a report
- initialize a workspace
- check deployment state

The script becomes an executable memory. It is less ambiguous than instructions and cheaper than repeatedly reloading documentation.

## Sub-agents are context filters

The strongest use of sub-agents is not "parallelism" by itself. It is isolation.

A research sub-agent can read tens of thousands of tokens, inspect logs, browse documents, and return a small synthesis. The parent agent does not need the full mess. It needs the answer, the evidence, and the next decision.

This pattern protects the main thread from context pollution.

## Files are better handoffs than chat history

For long tasks, conversation history is a fragile source of truth. Files are better.

Useful handoff artifacts include:

- `progress.md`
- `features.json`
- `acceptance.md`
- `init.sh`
- `test-plan.md`
- `review-notes.md`

The important part is not the format. The important part is that a future session can reconstruct the task without relying on a lossy chat summary.

## My current rule

I try to keep three layers separate:

1. **Permanent context**: project goals, conventions, architecture, commands.
2. **Task context**: the specific plan, constraints, acceptance criteria.
3. **Execution context**: logs, diffs, errors, temporary exploration.

Permanent context should be small and stable. Task context should be explicit and reviewable. Execution context should be disposable.

When those layers blur, agents start carrying the wrong state forward.
