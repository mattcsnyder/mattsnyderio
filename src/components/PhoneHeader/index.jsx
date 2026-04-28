import React, { useState } from 'react';
import PhoneHeaderText from './PhoneHeaderText';
import PhoneHeaderPhone from './PhoneHeaderPhone';
import ContactPopup from './ContactPopup';

const PhoneHeader = ({ onScrollTo }) => {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div
      className="w-full relative overflow-hidden flex flex-col md:flex-row items-center justify-center gap-16 px-8 md:px-24 pt-16"
      style={{
        background: 'linear-gradient(135deg, #000000 0%, #020818 50%, #000d2e 100%)',
        minHeight: '100vh',
      }}
    >
      <div
        className="absolute pointer-events-none"
        style={{ top: '-120px', left: '-80px', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(29,78,216,0.12) 0%, transparent 70%)' }}
      />
      <div
        className="absolute pointer-events-none"
        style={{ bottom: '-100px', right: '200px', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%)' }}
      />

      <PhoneHeaderText onScrollTo={onScrollTo} onContactOpen={() => setContactOpen(true)} />
      <PhoneHeaderPhone />

      {contactOpen && <ContactPopup onClose={() => setContactOpen(false)} />}
    </div>
  );
};

export default PhoneHeader;
