import React from 'react';

const ChangingWords = ({ words, colors }) => {
  const slotDuration = 3; // seconds each word is active
  const totalDuration = words.length * slotDuration;
  const slotPct = 100 / words.length;

  return (
    <div className="changing-words">
      {words.map((word, index) => (
        <span
          key={index}
          className="word"
          style={{
            color: colors[index % colors.length],
            animation: `fadeWords ${totalDuration}s linear ${index * slotDuration}s infinite both`,
          }}
        >
          {word}
        </span>
      ))}
      <style>{`
        .changing-words {
          display: flex;
          position: relative;
          white-space: nowrap;
          min-width: 200px;
          justify-content: center;
          align-items: center;
          height: 1em;
        }

        .changing-words .word {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          opacity: 0;
        }

        @keyframes fadeWords {
          0%                          { opacity: 0; }
          ${slotPct * 0.15}%          { opacity: 1; }
          ${slotPct * 0.75}%          { opacity: 1; }
          ${slotPct}%                 { opacity: 0; }
          100%                        { opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default ChangingWords;
