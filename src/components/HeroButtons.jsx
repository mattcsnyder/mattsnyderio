import React from "react";
import JiggleSpinComponent from "./JiggleSpinComponent";
import { matt_headshot_2026, matt_headshot_2026_live } from "../assets";
import { logEvent } from "../analytics"; // Import logEvent from analytics.js
import { HashLink as Link } from "react-router-hash-link"; // For smooth scrolling

const HeroButtons = ({active, setActive}) => {
  // Handle Button Click Navigation and Analytics
  const handleButtonClick = (section) => {
    logEvent("Hero Section", "Click", section); // Log event to analytics
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to section
    setActive({section})
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
      {/* Left Column of Buttons */}
      <div className="flex flex-col gap-6">
        <button
          onClick={() => handleButtonClick("experience")}
          className="bg-opacity-80 bg-gray-800 text-white font-bold py-8 px-4 rounded-lg hover:bg-gray-700 transition shadow-[0_0_10px_rgba(128,128,128,0.6)] hover:shadow-[0_0_15px_rgba(255,215,0,0.8),0_0_30px_rgba(255,215,0,0.6)]"
        >
          Experience
        </button>
        <button
          onClick={() => handleButtonClick("projects")}
          className="bg-opacity-80 bg-gray-800 text-white font-bold py-8 px-4 rounded-lg hover:bg-gray-700 transition shadow-[0_0_10px_rgba(128,128,128,0.6)] hover:shadow-[0_0_15px_rgba(255,215,0,0.8),0_0_30px_rgba(255,215,0,0.6)]"
        >
          Recent Projects
        </button>
      </div>

      {/* Center Image */}
      <div className="flex justify-center">
        <JiggleSpinComponent noJiggle>
          <div className="relative w-96 group">
            <img
              src={matt_headshot_2026_live}
              alt="Center Image Live"
              className="w-full h-auto transition-opacity duration-700 group-hover:opacity-0"
            />
            <img
              src={matt_headshot_2026}
              alt="Center Image"
              className="absolute inset-0 w-full h-auto transition-opacity duration-700 opacity-0 group-hover:opacity-100"
            />
          </div>
        </JiggleSpinComponent>
      </div>

      {/* Right Column of Buttons */}
      <div className="flex flex-col gap-6">
        <button
          onClick={() => handleButtonClick("github")}
          className="bg-opacity-80 bg-gray-800 text-white font-bold py-8 px-4 rounded-lg hover:bg-gray-700 transition shadow-[0_0_10px_rgba(128,128,128,0.6)] hover:shadow-[0_0_15px_rgba(255,215,0,0.8),0_0_30px_rgba(255,215,0,0.6)]"
        >
          GitHub
        </button>
        <button
          onClick={() => handleButtonClick("events")}
          className="bg-opacity-80 bg-gray-800 text-white font-bold py-8 px-4 rounded-lg hover:bg-gray-700 transition shadow-[0_0_10px_rgba(128,128,128,0.6)] hover:shadow-[0_0_15px_rgba(255,215,0,0.8),0_0_30px_rgba(255,215,0,0.6)]"
        >
          Events
        </button>
      </div>
    </div>
  );
};

export default HeroButtons;
