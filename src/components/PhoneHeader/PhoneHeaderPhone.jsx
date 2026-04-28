import React, { useEffect, useRef, useCallback } from 'react';
import { MESSAGES, CHAR_DELAY } from './phoneConversation';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const rowStyles = (side, consecutive) =>
  `display:flex;justify-content:${side === 'matt' ? 'flex-end' : 'flex-start'};margin-top:${consecutive ? '3px' : '8px'};`;

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

const PhoneHeaderPhone = () => {
  const messagesRef = useRef(null);
  const runIdRef    = useRef(0);

  const scrollToBottom = useCallback(() => {
    const el = messagesRef.current;
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' });
  }, []);

  const showTypingIndicator = useCallback((side, consecutive, runId) => {
    const container = messagesRef.current;
    if (!container || runIdRef.current !== runId) return null;

    const row = document.createElement('div');
    row.style.cssText = rowStyles(side, consecutive);

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

  const showBubble = useCallback((side, text, consecutive, runId) => {
    const container = messagesRef.current;
    if (!container || runIdRef.current !== runId) return;
    const row = document.createElement('div');
    row.style.cssText = rowStyles(side, consecutive);
    const bubble = document.createElement('div');
    bubble.style.cssText = bubbleStyles(side, consecutive);
    bubble.textContent = text;
    row.appendChild(bubble);
    container.appendChild(row);
    scrollToBottom();
  }, [scrollToBottom]);

  const typeIntoBubble = useCallback(async (side, text, consecutive, runId) => {
    const container = messagesRef.current;
    if (!container || runIdRef.current !== runId) return;
    const row = document.createElement('div');
    row.style.cssText = rowStyles(side, consecutive);
    const bubble = document.createElement('div');
    bubble.style.cssText = bubbleStyles(side, consecutive);
    bubble.textContent = '';
    row.appendChild(bubble);
    container.appendChild(row);
    scrollToBottom();
    for (const char of text) {
      if (runIdRef.current !== runId) return;
      bubble.textContent += char;
      scrollToBottom();
      await sleep(CHAR_DELAY);
    }
  }, [scrollToBottom]);

  const runConversation = useCallback(async () => {
    const runId = ++runIdRef.current;
    const container = messagesRef.current;
    if (!container) return;
    container.innerHTML = '';
    await sleep(800);

    for (const msg of MESSAGES) {
      if (runIdRef.current !== runId) return;
      const typingRow = showTypingIndicator(msg.side, msg.consecutive, runId);
      await sleep(msg.typingMs);
      if (runIdRef.current !== runId) return;
      if (typingRow && container.contains(typingRow)) container.removeChild(typingRow);

      if (msg.side === 'matt') {
        showBubble(msg.side, msg.text, msg.consecutive, runId);
      } else {
        await typeIntoBubble(msg.side, msg.text, msg.consecutive, runId);
      }
      if (msg.pauseAfter > 0) await sleep(msg.pauseAfter);
    }

    if (runIdRef.current !== runId) return;
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
    btn.onclick = () => runConversation();
    replayRow.appendChild(btn);
    container.appendChild(replayRow);
    scrollToBottom();
  }, [showTypingIndicator, showBubble, typeIntoBubble, scrollToBottom]);

  useEffect(() => {
    runConversation();
    return () => { runIdRef.current++; };
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
