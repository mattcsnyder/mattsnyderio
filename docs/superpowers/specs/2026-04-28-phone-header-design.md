# Phone Header Design Spec
**Date:** 2026-04-28  
**Status:** Approved

---

## Overview

Replace the existing Hero section header with a new two-column layout: a text/CTA panel on the left and an animated iMessage-style phone on the right. The phone plays a scripted back-and-forth conversation that introduces Matt and his background.

---

## Layout

**Side-by-side split** — full-width section, dark black-to-midnight-blue gradient background with a subtle blue radial glow.

- **Left column:** eyebrow label, large name, bulleted tagline, three CTA buttons
- **Right column:** animated iPhone mockup with live chat conversation

Background: `linear-gradient(135deg, #000000 → #020818 → #000d2e)`

---

## Left Column — Text Content

### Eyebrow
`Full Stack Engineer & Founder` — small uppercase, blue (`#3b82f6`)

### Name
```
Matt 👋
Snyder 🥨
```
Large bold heading, white, ~56px, tight letter-spacing.

### Tagline (bulleted list, blue dot bullets)
- I build software that runs **real businesses** end-to-end.
- From **apps and web design** *(blue)* to **LLMs and cloud infrastructure**.
- I enjoy turning **problems into solutions** *(green `#34d399`)*.

### CTA Buttons
| Button | Style | Action |
|---|---|---|
| View My Work | Solid blue `#2563eb` | Scroll to `#experience` |
| Get In Touch | Blue outline | Scroll to `#contact` |
| My Experience | Solid green `#059669` | Smooth scroll to `#experience` |

---

## Right Column — Animated Phone

**Shell:** iPhone-style, 240×520px, dark `#1c1c1e`, rounded corners (44px), side button pseudo-elements, status bar, dynamic island, chat header (MS avatar + "Active now"), home bar indicator.

**Bubble colors:** Matt = blue `#2563eb`, Visitor = dark gray `#2c2c2e`

### Animation Behavior
- **Matt's messages:** typing indicator (bouncing 3 dots, ~typingMs duration) → full text pops in instantly
- **Visitor's messages:** typing indicator → text types out character by character (~32ms/char)
- **Consecutive same-sender bubbles:** 3px gap (vs 8px between turns), shorter typing delay, squared inner border radius
- **Auto-scroll:** chat scrolls smoothly as messages appear
- **End state:** conversation stays visible at bottom, a subtle ↺ Replay button appears — clicking it restarts the animation from the top

### Conversation Script

| Side | Text | Consecutive |
|---|---|---|
| Matt | Hello 👋 you've reached Matt. | — |
| Visitor | Glad I found your number, I'm actually looking for a software engineer | — |
| Matt | You've got the right number 😄, I'm Matt, I build software that runs real businesses end to end 🚀 | — |
| Visitor | Okay wait, really? What kind of software are we talking about? 👀 | — |
| Matt | oh yeah, I write software that upgrades the systems businesses run on, end to end 💻, everything from apps and web design to LLMs and cloud infra 📈 | — |
| Visitor | Wow, that's actually a really exciting problem space, what have you built? | — |
| Matt | MuseumIQ, StarFetcher, WeedBuddy, Snydex Invoice, all built from scratch, all live, all in use 🔥 | — |
| Visitor | That sounds like a lot of moving parts, that must've been tough to pull off | — |
| Matt | yeah 😄, lots of workflows, edge cases, integrations, scaling early, turning messy operations into clean systems is the part I enjoy most 🧠 | — |
| Visitor | What's your stack for all that? | — |
| Matt | React, Go, PostgreSQL, AWS, frontend, backend, data, infra, you're owning the full system, that's not easy | — |
| Matt | it's not, but it lets me move fast and keep everything tight ⚡ | consecutive |
| Visitor | Where were you before this? | — |
| Matt | Flatiron Health, worked on ML Operations for data scientists enabling cancer research 🧬\n\nArizent, helped editors and writers improve content value with integrations like Apple News 📰 | — |
| Visitor | That's a really interesting mix of experience | — |
| Matt | yeah, gave me a good sense of how different teams actually operate day to day | — |
| Visitor | Where did you go to school? | — |
| Matt | Rutgers University, Computer Science 🎓 | — |
| Visitor | Okay yeah, that's a strong background, feels like you've worked on real systems | — |
| Matt | definitely, learned how to build things that actually need to work at scale 💪 | — |
| Visitor | So if someone wanted to build something like this… | — |
| Matt | I'm always open 😄, especially if it's solving a real operational problem | — |

---

## Component Structure

```
src/components/
  PhoneHeader/
    index.jsx              — main export, side-by-side layout
    PhoneHeaderText.jsx    — left column (eyebrow, name, tagline, CTAs)
    PhoneHeaderPhone.jsx   — right column (iPhone shell + chat animation)
    phoneConversation.js   — MESSAGES array (script data)
```

The existing `Hero.jsx` imports `HeroBioSection` and other sub-components. The new `PhoneHeader` replaces or wraps into the Hero section in `App.jsx`.

---

## Integration

- `App.jsx` currently renders `<Hero active={active} setActive={setActive} scrollContainer={wrapperRef} />` in `<section id="hero">`
- The new `PhoneHeader` will be rendered inside `Hero.jsx` (or directly in the hero section) above the existing 3D canvas content, or as a full replacement depending on what Hero currently renders
- CTA scroll buttons use the same `HashLink` + custom scroll handler already used in `Navbar.jsx`

---

## Responsiveness

- Desktop (≥768px): side-by-side, phone visible
- Mobile (<768px): stack vertically, phone below text; phone can be hidden or scaled down

---

## Out of Scope

- No changes to Navbar, Experience, or other sections
- No new routes
- No backend changes
