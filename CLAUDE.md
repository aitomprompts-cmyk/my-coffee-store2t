# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repository is

This repository has two parts, both written in Thai:

1. **An Obsidian vault under `docs/`** that documents the planning of "my-coffee-store2t", a table-side coffee self-order system. Most work here is writing Markdown.
2. **A small static web app at the repo root** (plain HTML/CSS/JS, no framework, no build step) that reads from Firebase Firestore. It is the ADT-RAISE Batch 2 Module 2 homework (weeks 6–9). Its scope is fixed in `SCOPE.md` and its data model in `docs/02-design/02-technical/data-structure.md`.

Commands for the web app:

```
npm install      # install serve + firebase
npm run dev      # serve the site on http://localhost:3001 (port 3000 is used by another app on this machine)
npm run seed     # write sample data to Firestore; needs real values in js/firebase-config.js
```

Course constraints for the web app: week 6 is read-only (no create/update/delete or login until week 7); sample data must use fictional names only; keep to the scope in `SCOPE.md` and log extra ideas in the backlog's "Backlog Sprint 2" section instead of building them.

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
