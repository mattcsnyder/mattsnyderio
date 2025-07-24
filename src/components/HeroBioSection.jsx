import React from 'react';
import JiggleSpinComponent from './JiggleSpinComponent';
import { mattsnyderio } from '../assets';

const HeroBioSection = () => (
  <div className="w-full mt-8 grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
    {/* Left: Profile Picture (1/3) */}
    <div className="flex justify-center items-center md:col-span-1">
      <JiggleSpinComponent>
        <img
          src={mattsnyderio}
          alt="Matt Snyder"
          className="w-[22rem] h-auto max-w-full rounded-2xl shadow-lg"
          style={{
            filter: "drop-shadow(0 0 20px rgba(255, 215, 0, 0.8))",
            transition: "transform 0.3s ease, filter 0.3s ease",
          }}
        />
      </JiggleSpinComponent>
    </div>
    {/* Right: Short Bio (2/3) */}
    <div className="md:col-span-2 w-full">
      <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4 max-w-6xl p-6 md:p-10 bg-gray-900 bg-opacity-60 backdrop-blur-md rounded-2xl shadow-2xl border border-white border-opacity-20 mx-auto mx-4 md:mx-8">
        <h2 className="font-bold text-[clamp(1.25rem,3vw,2rem)] text-white mb-2">About Me</h2>
        <p className="text-[clamp(1rem,2vw,1.25rem)] text-white/90">
          I'm Matt Snyder, a creative professional and developer passionate about building unique, captivating, and exhilarating digital experiences. With a strong foundation in Python, JavaScript, and Go, I specialize in scalable backend platforms, modern front-end techniques, and improving machine learning systems. I love blending technology and creativity to craft solutions for the digital world.
        </p>
      </div>
    </div>
  </div>
);

export default HeroBioSection; 