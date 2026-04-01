# Experience Header Theme Design

**Goal:** Make the right-side experience detail header use the same background treatment as the selected card in the left-side experience list, while leaving the detail body unchanged.

**Context**
- The experience list in `src/components/Experience.jsx` already defines per-company background styles.
- The detail panel in `src/components/ExperienceDetailPanel.jsx` currently renders a single neutral gray card.
- The requested behavior only applies to the detail header area, not the entire detail panel.

**Recommended Approach**
- Centralize the existing experience theme mapping in `src/components/Experience.jsx`.
- Derive the currently selected theme from that mapping.
- Pass the selected theme into `ExperienceDetailPanel` as a dedicated prop.
- Split the detail panel card into:
  - a themed header section for logo/title/company/date/location
  - a neutral gray content section for the icon descriptions

**Why this approach**
- Keeps theme selection logic in one place.
- Prevents the detail panel from re-implementing company-to-color mapping.
- Makes future theme changes apply consistently to both the list card and the detail header.

**Scope**
- Apply the shared theme to all standard experience entries.
- Do not change the special `"Latest"` panel behavior in this task.

**Validation**
- Add a small regression test that checks the selected theme is passed from `Experience` to `ExperienceDetailPanel`.
- Build the app to confirm the UI compiles cleanly.
