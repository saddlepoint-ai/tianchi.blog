---
title: "Claude Code and the Shape of an Agent Harness"
description: "A cleaned-up version of my notes from a Claude Code sharing session: why harness design feels like organization design for agents."
pubDate: 2026-05-03
tags: ["claude-code", "harness", "agents"]
---

The most useful way I have found to think about Claude Code is not "a better coding model." It is a model running inside a harness: filesystem, shell, memory files, tools, permissions, git, tests, browser automation, and the human who decides what good enough means.

That distinction matters because the model is only one part of the system. The harness decides what the model can see, what it can do, when it should stop, and how its work can be verified.

## Ten agents is already too many for one human

In small experiments, one person can supervise a few concurrent agents. Past some point, the bottleneck is no longer model capability; it is human working memory.

Five sessions are manageable. Ten sessions are close to the upper bound. Beyond that, the human loses track of which agent owns which task, which assumptions were made, and which outputs need review.

That is why large agent systems start to look like companies. You do not ask one manager to directly supervise one thousand individual contributors. You add structure:

- A root planner owns the whole scope.
- Sub-planners own narrow slices.
- Workers execute targeted tasks.
- Reviewers or evaluators test the work against criteria.

The surprise is not that this resembles a human organization. The surprise is that the same structure emerges from the failure modes of agents.

## Harness is organization design

When people say "multi-agent," it is tempting to picture a swarm of models talking to each other. In practice, most useful systems are more boring.

The working pattern is closer to:

1. Decompose the work into slices.
2. Give each slice a clear owner.
3. Prevent agents from fighting over the same files.
4. Require a structured handoff.
5. Verify outputs with tests or a separate reviewer.

This is not just a prompt pattern. It is a harness pattern. The files, worktrees, scripts, checks, and handoff docs are the actual coordination mechanism.

## Fresh context beats clever compaction

Long conversations accumulate noise. Agents forget constraints, overfit to earlier assumptions, and start optimizing for "finish the chat" rather than "finish the work."

For long-running tasks, I increasingly prefer fresh context over compaction. The trick is to move state out of the conversation and into durable artifacts:

- a feature list
- a progress file
- an initialization script
- test commands
- acceptance criteria
- git history

A new agent session can read these artifacts and pick up a single well-scoped task. This feels less elegant than memory engineering, but it is easier to trust.

## Verifiers decide the ceiling

An agent that writes code will often declare victory early. It is not malicious; it is simply bad at being skeptical of its own work.

A separate verifier changes the loop. For UI work, that verifier might open the browser, click around, inspect screenshots, and score the result. For backend work, it might run tests, exercise APIs, or check invariants. For writing, it might review structure, claims, and evidence.

The principle is simple: the generator should not be the only judge of its output.

## Skills are useful, but not durable moats

Skills are powerful because they package repeatable behavior. They tell the agent when to use a workflow, what files to read, what scripts to call, and what acceptance criteria matter.

But a skill is not a long-term moat. If a skill is useful enough and invoked often enough, it becomes training data for the next generation of models. The durable advantage is not the text file itself. It is the ability to notice a repeated workflow, turn it into a skill, and replace it again when the model or environment changes.

## The practical rule

Do the simplest thing that makes the agent's work verifiable.

Sometimes that is a test suite. Sometimes it is a browser screenshot. Sometimes it is a checklist. Sometimes it is a separate reviewer. The harness should grow only where the current model repeatedly fails.

The mistake is to build a three-month framework for a model that will change next week.
