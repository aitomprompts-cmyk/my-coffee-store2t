# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repository is

This is a **documentation-only Obsidian vault**, not a codebase — there is no source code, package manifest, build tool, linter, or test suite. All work here is writing/editing Markdown files under `docs/`. There are no build, lint, or test commands to run.

The vault documents the planning and development of "my-coffee-store2t" (a coffee store project). Content is written in Thai.

## Structure and workflow

`docs/` is organized into numbered top-level folders representing a fixed project workflow, each with an `index.md` that explains its purpose and links (via Obsidian `[[wikilinks]]`) to the folders before/after it in the flow:

```
01-requirements/  → 01-spec (source-of-truth requirements) → 02-plan (roadmap/phases) → 03-task (task breakdown)
02-design/        → 01-prototypes (UI/UX wireframes) → 02-technical (architecture/DB/API design)
03-testing/       → 01-test-plan (test cases) → 02-test-result (pass/fail, bugs)
04-retrospectives/ → lessons learned per phase/sprint/milestone
05-log/            → chronological changelog / decision log
00-archived/       → superseded docs
```

The intended flow is: requirements → design → testing → retrospectives/log, with each stage's docs referencing the one that produced its inputs.

**Convention: never delete a doc.** When a document is superseded or a plan is abandoned, move it into `00-archived/` instead of deleting it, so the decision history is preserved.

When adding new content, place it in the matching numbered subfolder rather than inventing new top-level structure, and add wikilinks connecting it to related docs in adjacent stages (mirroring the pattern already used in each `index.md`).
