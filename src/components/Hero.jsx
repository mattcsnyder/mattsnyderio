import React from 'react';
import PhoneHeader from './PhoneHeader';

const Hero = ({ active, setActive }) => {
  const handleButtonClick = (anchor) => {
    document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return <PhoneHeader onScrollTo={handleButtonClick} />;
};

export default Hero;
