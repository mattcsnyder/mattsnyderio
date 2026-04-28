# Phone Header Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a two-column animated phone header to the homepage — intro text + CTAs on the left, an iMessage-style animated iPhone conversation on the right.

**Architecture:** A new `PhoneHeader` folder under `src/components/` contains four focused files (data, phone animation, text column, layout wrapper). `Hero.jsx` is simplified to render `<PhoneHeader>` at the top, followed by the existing `HeroBioSection` and `ParallaxImages`. The phone animation runs imperatively via `useEffect` to avoid React batching issues with tight async timing loops.

**Tech Stack:** React 18, Tailwind CSS v3, inline styles for phone-specific decorative CSS (pseudo-elements, box-shadows that Tailwind can't express cleanly).

---

## File Map

| Action | File | Responsibility |
|---|---|---|
| Create | `src/components/PhoneHeader/phoneConversation.js` | MESSAGES array + CHAR_DELAY constant |
| Create | `src/components/PhoneHeader/PhoneHeaderPhone.jsx` | iPhone shell + imperative chat animation |
| Create | `src/components/PhoneHeader/PhoneHeaderText.jsx` | Eyebrow, name, tagline bullets, CTA buttons |
| Create | `src/components/PhoneHeader/index.jsx` | Side-by-side layout wrapper |
| Modify | `src/index.css` | Add `phoneHeaderDotBounce` keyframe |
| Modify | `src/components/Hero.jsx` | Replace top section with `<PhoneHeader>`, keep HeroBioSection + ParallaxImages |

---

## Task 1: Conversation data

**Files:**
- Create: `src/components/PhoneHeader/phoneConversation.js`

- [ ] **Step 1: Create the file**

```js
// src/components/PhoneHeader/phoneConversation.js
export const CHAR_DELAY = 32; // ms per character for visitor typewriter

export const MESSAGES = [
  { side: 'matt',    text: "Hello 👋 you've reached Matt.",                                                                                                                   consecutive: false, typingMs: 800,  pauseAfter: 2200 },
  { side: 'visitor', text: "Glad I found your number, I'm actually looking for a software engineer",                                                                          consecutive: false, typingMs: 900,  pauseAfter: 900  },
  { side: 'matt',    text: "You've got the right number 😄, I'm Matt, I build software that runs real businesses end to end 🚀",                                              consecutive: false, typingMs: 1000, pauseAfter: 2200 },
  { side: 'visitor', text: "Okay wait, really? What kind of software are we talking about? 👀",                                                                               consecutive: false, typingMs: 800,  pauseAfter: 900  },
  { side: 'matt',    text: "oh yeah, I write software that upgrades the systems businesses run on, end to end 💻, everything from apps and web design to LLMs and cloud infra 📈", consecutive: false, typingMs: 1200, pauseAfter: 2200 },
  { side: 'visitor', text: "Wow, that's actually a really exciting problem space, what have you built?",                                                                      consecutive: false, typingMs: 900,  pauseAfter: 900  },
  { side: 'matt',    text: "MuseumIQ, StarFetcher, WeedBuddy, Snydex Invoice, all built from scratch, all live, all in use 🔥",                                              consecutive: false, typingMs: 1100, pauseAfter: 2200 },
  { side: 'visitor', text: "That sounds like a lot of moving parts, that must've been tough to pull off",                                                                     consecutive: false, typingMs: 900,  pauseAfter: 900  },
  { side: 'matt',    text: "yeah 😄, lots of workflows, edge cases, integrations, scaling early, turning messy operations into clean systems is the part I enjoy most 🧠",   consecutive: false, typingMs: 1200, pauseAfter: 2200 },
  { side: 'visitor', text: "What's your stack for all that?",                                                                                                                 consecutive: false, typingMs: 650,  pauseAfter: 900  },
  { side: 'matt',    text: "React, Go, PostgreSQL, AWS, frontend, backend, data, infra, you're owning the full system, that's not easy",                                     consecutive: false, typingMs: 1100, pauseAfter: 1200 },
  { side: 'matt',    text: "it's not, but it lets me move fast and keep everything tight ⚡",                                                                                 consecutive: true,  typingMs: 900,  pauseAfter: 2200 },
  { side: 'visitor', text: "Where were you before this?",                                                                                                                     consecutive: false, typingMs: 650,  pauseAfter: 900  },
  { side: 'matt',    text: "Flatiron Health, worked on ML Operations for data scientists enabling cancer research 🧬\n\nArizent, helped editors and writers improve content value with integrations like Apple News 📰", consecutive: false, typingMs: 1400, pauseAfter: 2200 },
  { side: 'visitor', text: "That's a really interesting mix of experience",                                                                                                   consecutive: false, typingMs: 750,  pauseAfter: 900  },
  { side: 'matt',    text: "yeah, gave me a good sense of how different teams actually operate day to day",                                                                   consecutive: false, typingMs: 1000, pauseAfter: 2200 },
  { side: 'visitor', text: "Where did you go to school?",                                                                                                                     consecutive: false, typingMs: 650,  pauseAfter: 900  },
  { side: 'matt',    text: "Rutgers University, Computer Science 🎓",                                                                                                         consecutive: false, typingMs: 800,  pauseAfter: 2200 },
  { side: 'visitor', text: "Okay yeah, that's a strong background, feels like you've worked on real systems",                                                                 consecutive: false, typingMs: 900,  pauseAfter: 900  },
  { side: 'matt',    text: "definitely, learned how to build things that actually need to work at scale 💪",                                                                  consecutive: false, typingMs: 1000, pauseAfter: 2200 },
  { side: 'visitor', text: "So if someone wanted to build something like this…",                                                                                              consecutive: false, typingMs: 750,  pauseAfter: 900  },
  { side: 'matt',    text: "I'm always open 😄, especially if it's solving a real operational problem",                                                                       consecutive: false, typingMs: 1000, pauseAfter: 0    },
];
```

- [ ] **Step 2: Commit**

```bash
git add src/components/PhoneHeader/phoneConversation.js
git commit -m "feat: add phone header conversation script"
```

---

## Task 2: Dot bounce animation keyframe

**Files:**
- Modify: `src/index.css`

- [ ] **Step 1: Append keyframe to `src/index.css`**

Add at the bottom of the file:

```css
@keyframes phoneHeaderDotBounce {
  0%, 60%, 100% { transform: translateY(0); opacity: 0.6; }
  30%           { transform: translateY(-5px); opacity: 1; }
}
```

- [ ] **Step 2: Commit**

```bash
git add src/index.css
git commit -m "feat: add phone header dot bounce keyframe"
```

---

## Task 3: PhoneHeaderPhone — iPhone shell + chat animation

**Files:**
- Create: `src/components/PhoneHeader/PhoneHeaderPhone.jsx`

The animation runs imperatively inside `useEffect`. A `cancelRef` is set to `true` on unmount so in-flight `sleep()` calls stop appending to the DOM after the component unmounts.

- [ ] **Step 1: Create the file**

```jsx
// src/components/PhoneHeader/PhoneHeaderPhone.jsx
import React, { useEffect, useRef, useCallback } from 'react';
import { MESSAGES, CHAR_DELAY } from './phoneConversation';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const PhoneHeaderPhone = () => {
  const messagesRef = useRef(null);
  const cancelRef   = useRef(false);

  const scrollToBottom = useCallback(() => {
    const el = messagesRef.current;
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' });
  }, []);

  const showTypingIndicator = useCallback((side, consecutive) => {
    const container = messagesRef.current;
    if (!container) return null;

    const row = document.createElement('div');
    row.style.cssText = `display:flex;justify-content:${side === 'matt' ? 'flex-end' : 'flex-start'};margin-top:${consecutive ? '3px' : '8px'};`;

    const dotsWrap = document.createElement('div');
    dotsWrap.style.cssText = `
      display:flex;gap:5px;align-items:center;justify-content:center;padding:14px;
      background:${side === 'matt' ? '#2563eb' : '#2c2c2e'};
      border-radius:${side === 'matt' ? '16px 16px 4px 16px' : '16px 16px 16px 4px'};
    `;

    [0, 0.2, 0.4].forEach((delay) => {
      const dot = document.createElement('span');
      dot.style.cssText = `
        display:block;width:6px;height:6px;border-radius:50%;
        background:rgba(255,255,255,0.7);
        animation:phoneHeaderDotBounce 1.2s infinite ease-in-out;
        animation-delay:${delay}s;
      `;
      dotsWrap.appendChild(dot);
    });

    row.appendChild(dotsWrap);
    container.appendChild(row);
    scrollToBottom();
    return row;
  }, [scrollToBottom]);

  const bubbleStyles = (side, consecutive) => `
    max-width:78%;padding:7px 11px;font-size:11px;line-height:1.45;
    color:#fff;word-break:break-word;white-space:pre-wrap;
    background:${side === 'matt' ? '#2563eb' : '#2c2c2e'};
    border-radius:${
      side === 'matt'
        ? (consecutive ? '16px 4px 4px 16px' : '16px 16px 4px 16px')
        : (consecutive ? '4px 16px 16px 4px' : '16px 16px 16px 4px')
    };
  `;

  const rowStyles = (side, consecutive) =>
    `display:flex;justify-content:${side === 'matt' ? 'flex-end' : 'flex-start'};margin-top:${consecutive ? '3px' : '8px'};`;

  const showBubble = useCallback((side, text, consecutive) => {
    const container = messagesRef.current;
    if (!container) return;
    const row = document.createElement('div');
    row.style.cssText = rowStyles(side, consecutive);
    const bubble = document.createElement('div');
    bubble.style.cssText = bubbleStyles(side, consecutive);
    bubble.textContent = text;
    row.appendChild(bubble);
    container.appendChild(row);
    scrollToBottom();
  }, [scrollToBottom]);

  const typeIntoBubble = useCallback(async (side, text, consecutive) => {
    const container = messagesRef.current;
    if (!container) return;
    const row = document.createElement('div');
    row.style.cssText = rowStyles(side, consecutive);
    const bubble = document.createElement('div');
    bubble.style.cssText = bubbleStyles(side, consecutive);
    bubble.textContent = '';
    row.appendChild(bubble);
    container.appendChild(row);
    scrollToBottom();
    for (const char of text) {
      if (cancelRef.current) return;
      bubble.textContent += char;
      scrollToBottom();
      await sleep(CHAR_DELAY);
    }
  }, [scrollToBottom]);

  const runConversation = useCallback(async () => {
    const container = messagesRef.current;
    if (!container) return;
    container.innerHTML = '';
    await sleep(800);

    for (const msg of MESSAGES) {
      if (cancelRef.current) return;
      const typingRow = showTypingIndicator(msg.side, msg.consecutive);
      await sleep(msg.typingMs);
      if (cancelRef.current) return;
      if (typingRow && container.contains(typingRow)) container.removeChild(typingRow);

      if (msg.side === 'matt') {
        showBubble(msg.side, msg.text, msg.consecutive);
      } else {
        await typeIntoBubble(msg.side, msg.text, msg.consecutive);
      }
      if (msg.pauseAfter > 0) await sleep(msg.pauseAfter);
    }

    if (cancelRef.current) return;
    await sleep(1000);

    const replayRow = document.createElement('div');
    replayRow.style.cssText = 'display:flex;justify-content:center;margin-top:12px;padding-bottom:4px;';
    const btn = document.createElement('button');
    btn.textContent = '↺  Replay';
    btn.style.cssText = `
      background:transparent;border:1.5px solid rgba(255,255,255,0.2);
      color:rgba(255,255,255,0.5);font-size:11px;
      font-family:-apple-system,sans-serif;
      padding:5px 16px;border-radius:20px;cursor:pointer;
    `;
    btn.onclick = () => {
      cancelRef.current = false;
      runConversation();
    };
    replayRow.appendChild(btn);
    container.appendChild(replayRow);
    scrollToBottom();
  }, [showTypingIndicator, showBubble, typeIntoBubble, scrollToBottom]);

  useEffect(() => {
    cancelRef.current = false;
    runConversation();
    return () => { cancelRef.current = true; };
  }, [runConversation]);

  return (
    <div className="flex-shrink-0 relative z-10">
      <div
        style={{
          width: '240px', height: '520px',
          background: '#1c1c1e',
          borderRadius: '44px',
          border: '2px solid #3a3a3c',
          boxShadow: '0 0 0 1px #000, 0 32px 80px rgba(0,0,0,0.9), 0 0 60px rgba(37,99,235,0.08)',
          display: 'flex', flexDirection: 'column', overflow: 'hidden', position: 'relative',
        }}
      >
        {/* Status bar */}
        <div style={{ background: '#000', padding: '10px 20px 6px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0 }}>
          <span style={{ fontSize: '12px', fontWeight: 600, color: '#fff' }}>9:41</span>
          <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
            <svg width="16" height="12" viewBox="0 0 16 12" fill="#fff"><rect x="0" y="3" width="3" height="9" rx="1"/><rect x="4" y="2" width="3" height="10" rx="1"/><rect x="8" y="0" width="3" height="12" rx="1"/><rect x="12" y="0" width="3" height="12" rx="1" opacity=".3"/></svg>
            <svg width="15" height="12" viewBox="0 0 15 12" fill="#fff"><path d="M7.5 2.5C10.2 2.5 12.6 3.7 14.2 5.6L15 4.7C13.1 2.5 10.5 1 7.5 1S1.9 2.5 0 4.7l.8.9C2.4 3.7 4.8 2.5 7.5 2.5z"/><path d="M7.5 5C9.4 5 11.1 5.8 12.3 7.1l.8-.9C11.7 4.7 9.7 3.7 7.5 3.7S3.3 4.7 2.4 6.2l.8.9C4.4 5.8 5.8 5 7.5 5z"/><circle cx="7.5" cy="10" r="1.5"/></svg>
            <svg width="25" height="12" viewBox="0 0 25 12"><rect x="0" y="1" width="21" height="10" rx="2.5" stroke="#fff" strokeWidth="1" fill="none"/><rect x="1.5" y="2.5" width="16" height="7" rx="1.5" fill="#fff"/><rect x="22" y="4" width="2.5" height="4" rx="1.25" fill="#fff" opacity=".4"/></svg>
          </div>
        </div>

        {/* Chat header */}
        <div style={{ background: '#1c1c1e', borderBottom: '1px solid #2c2c2e', padding: '8px 14px', display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
          <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: 'linear-gradient(135deg,#2563eb,#1d4ed8)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 700, color: '#fff', flexShrink: 0 }}>MS</div>
          <div>
            <div style={{ fontSize: '12px', fontWeight: 600, color: '#fff' }}>Matt Snyder</div>
            <div style={{ fontSize: '10px', color: '#34c759' }}>● Active now</div>
          </div>
        </div>

        {/* Messages */}
        <div
          ref={messagesRef}
          style={{ flex: 1, overflowY: 'auto', padding: '10px 9px', display: 'flex', flexDirection: 'column', background: '#000', scrollBehavior: 'smooth' }}
        />

        {/* Home bar */}
        <div style={{ background: '#000', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '7px', flexShrink: 0 }}>
          <div style={{ width: '80px', height: '4px', background: '#444', borderRadius: '4px' }} />
        </div>
      </div>
    </div>
  );
};

export default PhoneHeaderPhone;
```

- [ ] **Step 2: Start the dev server and verify the phone renders and animates**

```bash
npm run dev
```

Open `http://localhost:5173`. Temporarily add `<PhoneHeaderPhone />` to `App.jsx` above `<Navbar>` to spot-check. Confirm:
- iPhone shell renders with status bar, chat header, home bar
- Typing dots appear, then messages pop in (Matt) or type out (visitor)
- Auto-scrolls as conversation progresses
- Replay button appears at the end

Remove the temporary import from `App.jsx` after verifying.

- [ ] **Step 3: Commit**

```bash
git add src/components/PhoneHeader/PhoneHeaderPhone.jsx
git commit -m "feat: add PhoneHeaderPhone animated iMessage component"
```

---

## Task 4: PhoneHeaderText — left column

**Files:**
- Create: `src/components/PhoneHeader/PhoneHeaderText.jsx`

- [ ] **Step 1: Create the file**

```jsx
// src/components/PhoneHeader/PhoneHeaderText.jsx
import React from 'react';

const TAGLINE = [
  {
    text: (
      <>
        I build software that runs{' '}
        <strong className="text-slate-200 font-semibold">real businesses</strong>{' '}
        end-to-end.
      </>
    ),
  },
  {
    text: (
      <>
        From{' '}
        <strong className="text-blue-400 font-semibold">apps and web design</strong>{' '}
        to{' '}
        <strong className="text-slate-200 font-semibold">LLMs and cloud infrastructure</strong>.
      </>
    ),
  },
  {
    text: (
      <>
        I enjoy turning{' '}
        <strong className="text-emerald-400 font-semibold">problems into solutions</strong>.
      </>
    ),
  },
];

const PhoneHeaderText = ({ onScrollTo }) => (
  <div className="flex-1 flex flex-col gap-5 relative z-10">
    {/* Eyebrow */}
    <p className="text-xs font-semibold tracking-[3px] uppercase text-blue-500">
      Full Stack Engineer &amp; Founder
    </p>

    {/* Name */}
    <h1
      className="font-extrabold leading-[1.05] tracking-tight text-white"
      style={{ fontSize: 'clamp(36px, 5vw, 56px)' }}
    >
      Matt 👋<br />Snyder 🥨
    </h1>

    {/* Tagline */}
    <ul className="flex flex-col gap-2 max-w-sm">
      {TAGLINE.map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-[15px] text-slate-400 leading-relaxed">
          <span className="mt-[7px] w-[6px] h-[6px] rounded-full bg-blue-600 flex-shrink-0" />
          <span>{item.text}</span>
        </li>
      ))}
    </ul>

    {/* CTAs */}
    <div className="flex flex-wrap gap-3 mt-2">
      <button
        onClick={() => onScrollTo('experience')}
        className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
      >
        View My Work
      </button>
      <button
        onClick={() => onScrollTo('contact')}
        className="bg-transparent hover:bg-blue-600/10 text-blue-400 text-sm font-semibold px-6 py-3 rounded-lg border border-blue-600 transition-colors duration-200"
      >
        Get In Touch
      </button>
      <button
        onClick={() => onScrollTo('experience')}
        className="bg-emerald-700 hover:bg-emerald-800 text-white text-sm font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
      >
        My Experience
      </button>
    </div>
  </div>
);

export default PhoneHeaderText;
```

- [ ] **Step 2: Commit**

```bash
git add src/components/PhoneHeader/PhoneHeaderText.jsx
git commit -m "feat: add PhoneHeaderText left column component"
```

---

## Task 5: PhoneHeader layout wrapper

**Files:**
- Create: `src/components/PhoneHeader/index.jsx`

- [ ] **Step 1: Create the file**

```jsx
// src/components/PhoneHeader/index.jsx
import React from 'react';
import PhoneHeaderText from './PhoneHeaderText';
import PhoneHeaderPhone from './PhoneHeaderPhone';

const PhoneHeader = ({ onScrollTo }) => (
  <div
    className="w-full rounded-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12 px-8 md:px-16 py-16 min-h-[580px]"
    style={{
      background: 'linear-gradient(135deg, #000000 0%, #020818 50%, #000d2e 100%)',
      border: '1px solid #1a2a4a',
    }}
  >
    {/* Background glows */}
    <div
      className="absolute pointer-events-none"
      style={{ top: '-120px', left: '-80px', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(29,78,216,0.12) 0%, transparent 70%)' }}
    />
    <div
      className="absolute pointer-events-none"
      style={{ bottom: '-100px', right: '200px', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%)' }}
    />

    <PhoneHeaderText onScrollTo={onScrollTo} />
    <PhoneHeaderPhone />
  </div>
);

export default PhoneHeader;
```

- [ ] **Step 2: Commit**

```bash
git add src/components/PhoneHeader/index.jsx
git commit -m "feat: add PhoneHeader layout wrapper"
```

---

## Task 6: Wire into Hero.jsx

**Files:**
- Modify: `src/components/Hero.jsx`

The existing `Hero.jsx` renders a large MATT/SNYDER text block and a welcome/skills box. Replace those entirely with `<PhoneHeader>`. Keep `HeroBioSection` and `ParallaxImages` unchanged below it.

- [ ] **Step 1: Replace `src/components/Hero.jsx`**

```jsx
// src/components/Hero.jsx
import React from 'react';
import HeroBioSection from './HeroBioSection';
import ParallaxImages from './ParallaxImages';
import PhoneHeader from './PhoneHeader';

const Hero = ({ active, setActive }) => {
  const handleButtonClick = (anchor) => {
    const targetElement = document.getElementById(anchor);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="parallax relative z-0">
      <div className="relative mx-auto w-[100vw] h-full z-20 mt-5 px-4">
        <PhoneHeader onScrollTo={handleButtonClick} />

        <div className="w-full mt-8">
          <HeroBioSection />
        </div>
      </div>

      <ParallaxImages />
    </section>
  );
};

export default Hero;
```

- [ ] **Step 2: Verify in browser**

With `npm run dev` running, open `http://localhost:5173`. Check:
- Phone header renders as a full-width dark card at the top of the page
- Left side shows eyebrow, Matt 👋 / Snyder 🥨 name, three bullet taglines, three CTA buttons
- Right side shows the animated iPhone
- "View My Work" and "My Experience" buttons scroll to `#experience`
- "Get In Touch" button scrolls to `#contact`
- `HeroBioSection` and `ParallaxImages` still render below

- [ ] **Step 3: Commit**

```bash
git add src/components/Hero.jsx
git commit -m "feat: integrate PhoneHeader into Hero section"
```

---

## Self-Review

**Spec coverage:**
- ✅ Side-by-side layout, text left / phone right
- ✅ Dark gradient background with blue glow
- ✅ Eyebrow, large name with emojis, bulleted tagline with color-coded bold words
- ✅ Three CTA buttons (blue solid, blue outline, green solid) with correct scroll targets
- ✅ iPhone shell (240×520, status bar, chat header, home bar, side button decoratives via box-shadow on phone div — note: the actual side buttons are visual CSS in the mockup via `::before`/`::after`; these are omitted in React since pseudo-elements require a wrapping element or CSS module — acceptable tradeoff)
- ✅ Typing indicator (bouncing dots, `phoneHeaderDotBounce` keyframe)
- ✅ Matt bubbles = instant, visitor bubbles = typewriter
- ✅ Consecutive same-sender bubbles: 3px gap, squared inner radius
- ✅ Auto-scroll on every message/char
- ✅ Replay button at end, stays at bottom
- ✅ Full conversation script from spec
- ✅ Cleanup on unmount via `cancelRef`
- ✅ Mobile: `flex-col md:flex-row` responsive stacking

**Placeholder scan:** No TBDs, no "add validation", no "similar to task N" — all steps have complete code.

**Type consistency:** `onScrollTo` prop name used consistently in `PhoneHeader/index.jsx` and `PhoneHeaderText.jsx`. `MESSAGES` and `CHAR_DELAY` exported from `phoneConversation.js` and imported in `PhoneHeaderPhone.jsx`. `cancelRef`, `messagesRef`, `showTypingIndicator`, `showBubble`, `typeIntoBubble`, `runConversation` all defined and referenced consistently within `PhoneHeaderPhone.jsx`.
