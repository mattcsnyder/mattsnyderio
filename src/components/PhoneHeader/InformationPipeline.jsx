import React from 'react';

const ROUTES = [
  'M -80 170 C 160 170 150 330 390 330 S 650 165 865 165 S 1120 320 1520 320',
  'M -70 690 C 180 690 190 510 430 510 S 680 715 930 715 S 1190 530 1510 530',
  'M 180 -70 C 180 170 350 175 350 380 S 165 610 165 970',
  'M 1230 -70 C 1230 180 1050 205 1050 420 S 1265 640 1265 970',
  'M -80 430 C 170 430 250 250 520 250 S 780 555 1020 555 S 1250 415 1520 415',
];

const Endpoint = ({ x, y, kind = 'person', color = '#34d399', label }) => (
  <g transform={`translate(${x} ${y})`} className="pipeline-endpoint">
    <circle r="34" fill="#020818" fillOpacity=".86" stroke={color} strokeOpacity=".16" strokeWidth="8" />
    <circle r="27" fill="#071426" stroke={color} strokeOpacity=".75" strokeWidth="1.5" />
    {kind === 'person' ? (
      <g>
        <circle cy="-7" r="7" fill={color} />
        <path d="M -13 15 C -12 1 12 1 13 15" fill={color} fillOpacity=".88" />
      </g>
    ) : kind === 'cloud' ? (
      <g>
        <path
          d="M -14 9 H 13 C 20 9 20 -2 14 -4 C 13 -13 0 -16 -5 -8 C -14 -10 -20 -1 -16 5 C -18 7 -17 9 -14 9 Z"
          fill={color}
          fillOpacity=".2"
          stroke={color}
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <path d="M -8 2 H 9" stroke={color} strokeWidth="2" strokeLinecap="round" opacity=".8" />
      </g>
    ) : (
      <g>
        <rect x="-15" y="-12" width="30" height="21" rx="3" fill={color} fillOpacity=".18" stroke={color} strokeWidth="1.5" />
        <path d="M -8 15 H 8 M 0 9 V 15" stroke={color} strokeWidth="2" strokeLinecap="round" />
        <circle cx="-8" cy="-4" r="2" fill={color} />
        <path d="M -3 -4 H 9" stroke={color} strokeWidth="2" strokeLinecap="round" opacity=".6" />
      </g>
    )}
    <circle r="31" stroke={color} strokeWidth="1" strokeDasharray="3 8" opacity=".45" />
    {label && (
      <text y="48" textAnchor="middle" fill="#94a3b8" fontSize="8" fontWeight="700" letterSpacing="1.4">
        {label}
      </text>
    )}
  </g>
);

const Junction = ({ x, y, color = '#38bdf8' }) => (
  <g transform={`translate(${x} ${y})`}>
    <circle r="18" fill="#020818" stroke={color} strokeOpacity=".3" />
    <circle r="5" fill={color} />
  </g>
);

// Keep this full-size decorative SVG static to avoid continuous repainting.
const InformationPipeline = () => {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      <svg
        className="h-full w-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
      <defs>
        <linearGradient id="pipeline-blue" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#2563eb" stopOpacity=".12" />
          <stop offset=".5" stopColor="#38bdf8" stopOpacity=".34" />
          <stop offset="1" stopColor="#10b981" stopOpacity=".12" />
        </linearGradient>
      </defs>

      {ROUTES.map((route, index) => (
        <g key={route}>
          <path d={route} stroke="#0f2946" strokeWidth="18" strokeLinecap="round" opacity=".45" />
          <path d={route} stroke="url(#pipeline-blue)" strokeWidth="2" strokeLinecap="round" />
          <path
            d={route}
            stroke={index % 2 ? '#34d399' : '#38bdf8'}
            strokeWidth="1"
            strokeDasharray="2 18"
            strokeLinecap="round"
            opacity=".45"
          />
        </g>
      ))}

      <Junction x="930" y="715" />

      <g>
        <Endpoint x="1108" y="235" kind="person" label="USER" />
        <Endpoint x="267" y="312" kind="cloud" color="#f59e0b" label="CLOUD" />
        <Endpoint x="311" y="528" kind="person" color="#38bdf8" label="TEAM" />
        <Endpoint x="1154" y="648" kind="computer" color="#34d399" label="WORKSTATION" />
        <Endpoint x="1084" y="551" kind="computer" color="#818cf8" label="SERVICE" />
        <Endpoint x="346" y="328" kind="person" label="CUSTOMER" />
      </g>
      </svg>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(2,8,24,.1)_0%,rgba(2,8,24,.45)_62%,rgba(0,0,0,.72)_100%)]" />
    </div>
  );
};

export default InformationPipeline;
