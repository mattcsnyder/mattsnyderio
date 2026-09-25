import React, { useId, useState } from "react";
import ExperienceIcons from "./ExperienceIcons";

const ExperienceIconGrid = ({ icons }) => {
  const [hovered, setHovered] = useState(null);
  const [focused, setFocused] = useState(null);
  const [selected, setSelected] = useState(null);
  const [dismissed, setDismissed] = useState(null);
  const descriptionId = useId();
  const activeIndex = hovered ?? focused ?? selected;

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4">
      {icons.map((icon, index) => {
        const open = activeIndex === index && dismissed !== index;
        return (
          <div
            key={`${icon.name}-${icon.label}`}
            className={`relative ${open ? "z-20" : "z-0"}`}
            onPointerEnter={(event) => {
              if (event.pointerType === "mouse") {
                setDismissed(null);
                setHovered(index);
              }
            }}
            onPointerLeave={() => setHovered(null)}
          >
            <button
              type="button"
              aria-describedby={open ? `${descriptionId}-${index}` : undefined}
              aria-expanded={open}
              onFocus={() => {
                setDismissed(null);
                setFocused(index);
              }}
              onBlur={() => setFocused(null)}
              onClick={() => {
                setDismissed(selected === index ? index : null);
                setSelected(selected === index ? null : index);
              }}
              onKeyDown={(event) => {
                if (event.key === "Escape") {
                  setDismissed(index);
                  setSelected(null);
                }
              }}
              className={`flex min-h-32 w-full flex-col items-center justify-center gap-3 rounded-xl border p-3 text-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 ${
                open
                  ? "border-sky-300/50 bg-sky-400/10"
                  : "border-white/10 bg-white/[0.025] hover:bg-white/[0.05]"
              }`}
            >
              <div aria-hidden="true">
                <ExperienceIcons icons={[icon]} size={36} showDescription={false} />
              </div>
              <span className="text-xs font-semibold leading-5 text-slate-200 sm:text-sm">
                {icon.label}
              </span>
            </button>
            {open && (
              <div className="absolute inset-x-0 bottom-full pb-2">
                <div
                  id={`${descriptionId}-${index}`}
                  role="tooltip"
                  className="rounded-xl border border-sky-300/40 bg-slate-900 p-3 text-left text-xs leading-5 text-slate-200 shadow-lg"
                >
                  {icon.description}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ExperienceIconGrid;
