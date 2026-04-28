import React from 'react';

const RecruiterBanner = () => (
  <div
    className="w-full px-8 md:px-16 py-5 flex flex-col sm:flex-row items-center gap-4 sm:gap-8 border-y border-blue-900/40"
    style={{ background: 'linear-gradient(135deg, #000000 0%, #020818 60%, #000d2e 100%)' }}
  >
    <span className="text-3xl flex-shrink-0">👋</span>
    <div className="flex flex-wrap items-center gap-x-2 gap-y-2 text-sm text-slate-400">
      <span className="text-blue-400 font-semibold text-xs tracking-wide uppercase">Hey recruiters —</span>
      <span>Matt is currently</span>
      <span className="inline-flex items-center gap-1.5 bg-emerald-900/50 border border-emerald-500/40 text-emerald-400 font-semibold text-xs px-3 py-1 rounded-full">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        Looking For Work
      </span>
      <span>— targeting:</span>
      <span className="inline-flex items-center bg-blue-900/50 border border-blue-500/40 text-blue-300 font-semibold text-xs px-3 py-1 rounded-full">
        Full Stack
      </span>
      <span>and</span>
      <span className="inline-flex items-center bg-blue-900/50 border border-blue-500/40 text-blue-300 font-semibold text-xs px-3 py-1 rounded-full">
        ML / AI Infrastructure
      </span>
      <span>roles.</span>

      <span className="text-slate-600 select-none px-1">|</span>

      {['React', 'Go', 'Python', 'TypeScript', 'PostgreSQL', 'AWS'].map((lang) => (
        <span key={lang} className="inline-flex items-center bg-slate-800/60 border border-slate-600/40 text-slate-300 font-medium text-xs px-2.5 py-1 rounded-full">
          {lang}
        </span>
      ))}

      <span className="text-slate-600 select-none px-1">|</span>

      <span className="text-slate-400 text-xs">Location:</span>
      <span className="inline-flex items-center gap-1 bg-slate-800/60 border border-slate-600/40 text-slate-300 font-medium text-xs px-2.5 py-1 rounded-full">
        📍 New York City
      </span>
      <span className="text-slate-600 text-xs">or</span>
      <span className="inline-flex items-center gap-1 bg-slate-800/60 border border-slate-600/40 text-slate-300 font-medium text-xs px-2.5 py-1 rounded-full">
        🌐 Remote
      </span>
    </div>
  </div>
);

export default RecruiterBanner;
