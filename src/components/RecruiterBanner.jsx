import React from 'react';

const targetRoles = ['Full Stack', 'ML / AI Infrastructure'];
const coreSkills = ['React', 'Go', 'Python', 'TypeScript', 'PostgreSQL', 'AWS'];
const workLocations = ['📍 New York City', '🌐 Remote'];

const chipClassName = 'inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium';
const emphasisChipClassName = 'inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold';

const RecruiterBanner = () => (
  <div
    className="w-full border-y border-blue-900/40 px-4 py-5 sm:px-6 md:px-16"
    style={{ background: 'linear-gradient(135deg, #000000 0%, #020818 60%, #000d2e 100%)' }}
  >
    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-6">
      <div className="flex items-center gap-2 sm:block">
        <span className="text-3xl leading-none sm:pt-1">👋</span>
        <span className="text-blue-400 font-semibold tracking-wide uppercase sm:hidden">Hey recruiters</span>
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex flex-col gap-2 text-xs text-slate-300 sm:hidden">
          <div className="flex items-center gap-2">
            <span className="text-slate-300">Matt is</span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/40 bg-emerald-900/50 px-2.5 py-1 font-semibold text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Looking for work
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-slate-400">
            <span>Targeting roles:</span>
            {targetRoles.map((role) => (
              <span
                key={role}
                className={`${emphasisChipClassName} border-blue-500/40 bg-blue-900/50 text-blue-300`}
              >
                {role}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-2 text-slate-400">
            <span>Technologies:</span>
            {coreSkills.map((lang) => (
              <span
                key={lang}
                className={`${chipClassName} border-slate-600/40 bg-slate-800/60 text-slate-300`}
              >
                {lang}
              </span>
            ))}
          </div>
        </div>

        <div className="hidden flex-col gap-3 text-sm text-slate-400 sm:flex">
          <div className="flex flex-wrap items-center gap-2">
          <span className="text-blue-400 font-semibold text-xs tracking-wide uppercase">Hey recruiters</span>
          <span>Matt is</span>
          <span className={`${emphasisChipClassName} gap-1.5 border-emerald-500/40 bg-emerald-900/50 text-emerald-400`}>
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Looking For Work
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
            <span className="hidden text-slate-600 select-none px-1 sm:inline">|</span>
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
            <span className="hidden text-slate-600 select-none px-1 sm:inline">|</span>
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
    </div>
  </div>
);

export default RecruiterBanner;
