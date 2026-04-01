# Experience Header Theme Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Make the experience detail header reuse the selected left-card background theme while keeping the detail body neutral.

**Architecture:** Keep the company theme mapping in `src/components/Experience.jsx`, derive a `selectedTheme` from the active card, and pass it into `ExperienceDetailPanel`. Render the header as a separate themed section above the existing gray description body so only the header changes visually.

**Tech Stack:** React, JSX, Tailwind utility classes, Node test runner

---

### Task 1: Add a failing regression test

**Files:**
- Create: `tests/experience-header-theme.test.mjs`
- Test: `tests/experience-header-theme.test.mjs`

**Step 1: Write the failing test**

```js
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

test('experience detail panel receives selected theme prop', () => {
  const source = readFileSync(new URL('../src/components/Experience.jsx', import.meta.url), 'utf8');
  assert.equal(source.includes('selectedTheme={selectedTheme}'), true);
});
```

**Step 2: Run test to verify it fails**

Run: `node tests/experience-header-theme.test.mjs`
Expected: FAIL because the prop is not wired yet.

**Step 3: Write minimal implementation**

Wire a selected theme prop from `Experience` into `ExperienceDetailPanel`.

**Step 4: Run test to verify it passes**

Run: `node tests/experience-header-theme.test.mjs`
Expected: PASS

### Task 2: Share the selected theme with the detail panel

**Files:**
- Modify: `src/components/Experience.jsx`

**Step 1: Extract the existing theme map to a stable constant**

Move the per-company styles out of the inline render closure into a top-level `cardStyles` object.

**Step 2: Derive the selected theme**

Compute `selectedTheme` from `selectedExperience.company_name` with a neutral fallback.

**Step 3: Pass the theme into the detail panel**

Update the `ExperienceDetailPanel` usage to pass `selectedTheme={selectedTheme}`.

**Step 4: Verify**

Run: `node tests/experience-header-theme.test.mjs`
Expected: PASS

### Task 3: Apply the theme to the header only

**Files:**
- Modify: `src/components/ExperienceDetailPanel.jsx`

**Step 1: Accept the new prop**

Add `selectedTheme` to the component props.

**Step 2: Split header and body**

Keep the existing outer card, but render:
- a top header section using `selectedTheme.gradient`
- a bottom body section using the current gray background and description list styling

**Step 3: Preserve current content**

Retain logo, title, company, date, and location in the header and leave the icon descriptions in the neutral body section.

**Step 4: Verify**

Run: `npm run build`
Expected: PASS

### Task 4: Final verification

**Files:**
- Test: `tests/experience-header-theme.test.mjs`
- Build: app bundle

**Step 1: Run targeted test**

Run: `node tests/experience-header-theme.test.mjs`
Expected: PASS

**Step 2: Run production build**

Run: `npm run build`
Expected: PASS
