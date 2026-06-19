@AGENTS.md

# Noted — Claude Code Instructions

These rules apply to every task, every session, without exception. Read them before touching any file.

---

## Engineering Principles

### 1. Think Before Coding

Before writing a single line of code:

- State what you understand the task to be asking
- If more than one interpretation exists, list them and ask which is correct
- If a simpler approach exists than what was asked for, say so before proceeding
- If the request conflicts with existing architecture or the PRD, flag the conflict — do not silently pick one side
- If you are confused, stop and ask

**Before generating any code:**
- Re-read the relevant PRD section for the task (`docs/PRD.md`)
- State your interpretation of the task explicitly
- Restate the task as a testable success criterion
- Flag any ambiguity before proceeding

**After generating code:**
- State what was changed and what was deliberately not changed
- List any ambiguities that were resolved and how
- Flag anything that looks like a conflict with the PRD or existing architecture
- Do not present generated code as complete until the success criteria pass

### 2. Simplicity First

Every line of code must trace directly to a stated requirement. These are prohibited unless explicitly requested:

- Features beyond the scope of the current task
- Abstractions for code that is only used in one place
- Error handling for scenarios that cannot actually occur
- Helper utilities "we might need later"
- Refactors of adjacent code not part of the task

### 3. Surgical Changes

- Change only files the task requires
- Do not improve adjacent code that is not broken
- Match the existing code style even if you prefer a different convention
- If you notice an unrelated bug, flag it — do not fix it in the same task
- Never commit commented-out code or console.log statements

### 4. Test-Driven Development (TDD)

TDD is mandatory on every task. No exceptions. The sequence is always:

1. **Write the failing test first.** Before any implementation code, write a test that captures the success criterion and confirm it fails for the right reason.
2. **Write the minimum code to make it pass.** No more than what the test requires.
3. **Commit the passing test + implementation together** in one atomic commit.
4. **Refactor only if needed**, then re-run tests to confirm they still pass.

**This sequence is non-negotiable:**
- Never write implementation code before its test exists
- Never commit implementation without the accompanying test
- Never skip the "confirm it fails first" step — a test that passes before the implementation is worthless
- Do not mark a task complete with any failing or missing tests

**What counts as a test:**
- Unit tests for pure functions (`parseInboundMessage`, `generateGiftRecommendations`, date helpers)
- Integration tests for API routes (mock Twilio/Stripe/Claude at the HTTP boundary)
- Component tests for UI behavior (expand/collapse, form submission, error states)

**Test files live next to the code they test:**
```
lib/claude.ts          → lib/claude.test.ts
app/api/sms/inbound/   → app/api/sms/inbound/route.test.ts
app/dashboard/components/PersonCard.tsx → app/dashboard/components/PersonCard.test.tsx
```

---

## Git Discipline

Every commit must follow this format exactly:

```
[scope] Short description of what changed
```

**Valid scopes:** `db`, `lib`, `api`, `ui`, `test`, `git`, `docs`, `infra`

**Examples:**
```
[db] Add WeeklyCheckin model with user and temperature fields
[api] Add POST /api/sms/inbound route with Claude parsing
[ui] Add PersonCard expand/collapse with clue history
[test] Add SMS inbound webhook unit tests
```

**Rules:**
- Commit after every meaningful unit: a passing test, a completed component, a working endpoint
- Push to origin immediately after every commit — do not batch pushes
- One coherent thing per commit — not a day's work
- Never force-push to main
- `main` is always deployable — no broken builds
- Feature branches are deleted after merge

---

## PRD Is Authoritative

If the immediate task instruction conflicts with `docs/PRD.md`, surface the conflict explicitly and wait for resolution. Do not silently pick one. The PRD wins.
