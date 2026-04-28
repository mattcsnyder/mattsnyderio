import React from 'react';

const targetRoles = ['Full Stack', 'ML / AI Infrastructure'];
const coreSkills = ['React', 'Go', 'Python', 'TypeScript', 'PostgreSQL', 'AWS'];
const workLocations = ['📍 New York City', '🌐 Remote'];

const chipClassName = 'inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium';
const emphasisChipClassName = 'inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold';

const RecruiterBanner = ({ onReadMore }) => (
  <div
    className="w-full border-y border-blue-900/40 px-4 py-5 sm:px-6 md:px-16"
    style={{ background: 'linear-gradient(135deg, #000000 0%, #020818 60%, #000d2e 100%)' }}
  >
    <div className="grid min-w-0 gap-6 xl:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] xl:items-start">
      <div className="min-w-0">
        <div className="flex flex-col gap-3 text-xs text-slate-400 sm:text-sm">
          <div className="flex flex-wrap items-center gap-2 text-slate-300 sm:flex-nowrap">
            <span className="text-3xl leading-none">👋</span>
            <span className="text-blue-400 text-xs font-semibold tracking-wide uppercase">Hey recruiters</span>
            <span className="text-slate-300">Matt is</span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/40 bg-emerald-900/50 px-2.5 py-1 font-semibold text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Looking for work
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-slate-400 text-xs uppercase tracking-wide">Targeting</span>
            {targetRoles.map((role) => (
              <span
                key={role}
                className={`${emphasisChipClassName} border-blue-500/40 bg-blue-900/50 text-blue-300`}
              >
                {role}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-slate-400 text-xs uppercase tracking-wide">Core stack</span>
            {coreSkills.map((lang) => (
              <span
                key={lang}
                className={`${chipClassName} border-slate-600/40 bg-slate-800/60 text-slate-300`}
              >
                {lang}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-slate-400 text-xs uppercase tracking-wide">Location</span>
            {workLocations.map((location) => (
              <span
                key={location}
                className={`${chipClassName} gap-1 border-slate-600/40 bg-slate-800/60 text-slate-300`}
              >
                {location}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="min-w-0 border-t border-slate-800/90 pt-4 xl:border-l xl:border-t-0 xl:pl-6 xl:pt-0 xl:flex xl:items-center">
        <button
          type="button"
          onClick={onReadMore}
          className="flex w-full flex-col justify-center gap-3 rounded-2xl border border-slate-800/90 bg-slate-950/40 px-5 py-5 text-left transition-colors hover:border-blue-500/40 hover:bg-slate-900/70"
        >
          <p className="text-sm leading-relaxed text-slate-300">
            I&apos;m Matt, a full stack engineer focused on creating software that helps people and businesses.
          </p>
          <p className="text-sm leading-relaxed text-slate-400">
            I work at the intersection of systems, data, and product, usually starting with a simple question: where is something manual, slow, or breaking down, and how can software make it seamless?
          </p>
          <span className="text-sm font-semibold text-blue-400 transition-colors hover:text-blue-300">
            Read more
          </span>
        </button>
      </div>
    </div>
  </div>
);

export default RecruiterBanner;
