import React, { useEffect, useMemo, useState } from "react";

const DEBUG_FLAGS = [
  {
    id: "parallax",
    label: "Disable parallax",
    bodyClass: "debug-disable-parallax",
  },
  {
    id: "textEffects",
    label: "Disable text FX",
    bodyClass: "debug-disable-text-effects",
  },
  {
    id: "blur",
    label: "Disable blur",
    bodyClass: "debug-disable-blur",
  },
];

const emptyLongTaskState = {
  count: 0,
  longest: 0,
};

const DevPerformancePanel = () => {
  const [longTasks, setLongTasks] = useState(emptyLongTaskState);
  const [flags, setFlags] = useState(() =>
    DEBUG_FLAGS.reduce((acc, flag) => ({ ...acc, [flag.id]: false }), {})
  );

  useEffect(() => {
    if (!import.meta.env.DEV) {
      return undefined;
    }

    let statsInstance;
    let frameId;
    let statsContainer;
    let observer;

    const setupStats = async () => {
      const { default: Stats } = await import("stats-js");

      statsInstance = new Stats();
      statsInstance.showPanel(0);
      statsContainer = document.createElement("div");
      statsContainer.style.position = "fixed";
      statsContainer.style.bottom = "12px";
      statsContainer.style.left = "12px";
      statsContainer.style.zIndex = "9999";
      statsContainer.appendChild(statsInstance.dom);
      document.body.appendChild(statsContainer);

      const loop = () => {
        statsInstance.begin();
        statsInstance.end();
        frameId = window.requestAnimationFrame(loop);
      };

      frameId = window.requestAnimationFrame(loop);
    };

    setupStats();

    if ("PerformanceObserver" in window) {
      observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        if (entries.length === 0) {
          return;
        }

        const longest = Math.max(...entries.map((entry) => entry.duration));
        setLongTasks((prev) => ({
          count: prev.count + entries.length,
          longest: Math.max(prev.longest, longest),
        }));
      });

      try {
        observer.observe({ entryTypes: ["longtask"] });
      } catch {
        observer = undefined;
      }
    }

    return () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
      observer?.disconnect();
      statsContainer?.remove();
    };
  }, []);

  useEffect(() => {
    DEBUG_FLAGS.forEach((flag) => {
      document.body.classList.toggle(flag.bodyClass, flags[flag.id]);
    });

    return () => {
      DEBUG_FLAGS.forEach((flag) => {
        document.body.classList.remove(flag.bodyClass);
      });
    };
  }, [flags]);

  const enabledCount = useMemo(
    () => Object.values(flags).filter(Boolean).length,
    [flags]
  );

  if (!import.meta.env.DEV) {
    return null;
  }

  return (
    <div className="fixed bottom-3 right-3 z-[9999] w-64 rounded-xl border border-white/20 bg-black/85 p-3 text-white shadow-2xl">
      <div className="mb-2 flex items-center justify-between">
        <h2 className="text-sm font-semibold tracking-wide">Perf Debug</h2>
        <button
          className="text-[11px] text-white/70 hover:text-white"
          onClick={() => {
            setFlags(DEBUG_FLAGS.reduce((acc, flag) => ({ ...acc, [flag.id]: false }), {}));
            setLongTasks(emptyLongTaskState);
          }}
          type="button"
        >
          Reset
        </button>
      </div>

      <p className="mb-3 text-xs text-white/70">
        Scroll the page and toggle effects off one at a time. Watch FPS/MS in the panel at bottom-left.
      </p>

      <div className="mb-3 rounded-lg bg-white/5 p-2 text-xs">
        <div>Long tasks: {longTasks.count}</div>
        <div>Longest task: {Math.round(longTasks.longest)}ms</div>
        <div>Active toggles: {enabledCount}</div>
      </div>

      <div className="flex flex-col gap-2">
        {DEBUG_FLAGS.map((flag) => (
          <label key={flag.id} className="flex cursor-pointer items-center justify-between gap-3 rounded-md bg-white/5 px-2 py-2 text-xs">
            <span>{flag.label}</span>
            <input
              checked={flags[flag.id]}
              onChange={(event) =>
                setFlags((prev) => ({
                  ...prev,
                  [flag.id]: event.target.checked,
                }))
              }
              type="checkbox"
            />
          </label>
        ))}
      </div>
    </div>
  );
};

export default DevPerformancePanel;
