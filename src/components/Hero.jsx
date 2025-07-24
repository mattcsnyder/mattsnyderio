import React from 'react';
import Position from "./Position";
import HeroChangingWords from "./HeroChangingWords";
import HeroBioSection from "./HeroBioSection";
import HeroButtons from "./HeroButtons";
import ParallaxImages from "./ParallaxImages";
import JiggleSpinComponent from './JiggleSpinComponent';
import Lootbox from './Lootbox';
import { FaGithub } from "react-icons/fa";
import { FaCamera } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPalette } from "@fortawesome/free-solid-svg-icons";

const Hero = ({ active, setActive }) => {
  const colors = ["#FF5733", "#33FF57", "#3357FF", "#F0E68C", "#8A2BE2", "#FF69B4"];
  const words = ["unique", "captivating", "exhilarating"];

  const handleButtonClick = (anchor) => {
    const targetElement = document.getElementById(anchor);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const onClickHandlers = {
    experience: () => handleButtonClick("experience"),
    designs: () => handleButtonClick("designs"),
    github: () => handleButtonClick("github"),
    events: () => handleButtonClick("events"),
  };

  return (
    <>
      <section className="parallax relative z-0">
        <div className="relative mx-auto w-[100vw] h-full z-20 mt-5">
          {/* Responsive Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 md:gap-10 items-start">
            {/* Left Column */}
            <div>
              {/* First Row - "Hi, my name is" */}
              <div className="z-20 text-left pt-10 pr-10 pl-3 sm:pl-7 sm:pt-35 sm:pr-4">
                <h2 className="font-medium text-white text-[5vw] lg:text-[2vw] mx-auto">
                  Hi, my name is
                </h2>
              </div>

              {/* Second Row - MATT (with JiggleSpinComponent) */}
              <div className="z-20 text-left pl-6 sm:pr-4">
                <JiggleSpinComponent shadowColor="rgba(255, 255, 255, 0.8)" eggColor="white">
                  <span className="font-medium text-white text-[20vw] md:text-[10vw] leading-[70px] sm:leading-[100px] xl:leading-[140px]">
                    MATT
                  </span>
                </JiggleSpinComponent>
              </div>

              {/* Third Row - SNYDER */}
              <div className="z-20 text-left pl-6 sm:pr-4">
                <h1 className="font-medium text-white text-[20vw] md:text-[10vw] leading-[70px] sm:leading-[100px] xxl:leading-[140px] sm:mt-5">
                  SNYDER
                </h1>
              </div>
            </div>
            
            {/* Right Column */}
            <div className="z-20 bg-gray-800 bg-opacity-75 p-[5vw] md:p-[2vw] mt-[1vw] md:mt-[5vw] mx-[3vw] rounded-md flex flex-col items-start gap-8">
              {/* Welcome/Rotating Words/Solutions Message */}
              <div className="w-full flex flex-col items-center md:items-start text-center md:text-left">
                <div className="flex flex-row items-center gap-6 w-full justify-center md:justify-start">
                  <div className="font-bold text-[clamp(1.1rem,2vw,2.2rem)] leading-[1.1] streaky-glow text-white whitespace-nowrap">
                    Welcome, I craft
                  </div>
                  <div className="font-bold text-left text-[clamp(1.1rem,2vw,2.2rem)] text-white relative">
                    <HeroChangingWords words={words} colors={colors} />
                  </div>
                </div>
                <div className="mt-3 font-bold text-center md:text-left text-[clamp(1rem,1.7vw,1.7rem)] streaky-glow text-white w-full">
                  solutions for the digital world.
                </div>
              </div>
              {/* Glass Buttons */}
              <div className="flex flex-col lg:flex-row gap-2 w-full min-w-0 items-center justify-center">
                <button
                  onClick={() => handleButtonClick("experience")}
                  className="bg-gray-900 bg-opacity-60 backdrop-blur-md text-white font-bold py-3 px-2 rounded-2xl border border-white border-opacity-20 hover:bg-gray-800 hover:bg-opacity-80 hover:border-opacity-40 hover:scale-105 hover:-rotate-1 transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.2)] hover:shadow-[0_0_30px_rgba(0,0,0,0.4)] w-full flex items-center justify-center gap-1 group"
                >
                  <FaBriefcase className="text-xl group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-300" />
                  <span className="group-hover:tracking-wider transition-all duration-300 text-[clamp(0.8rem,1.1vw,1.1rem)]">Experience</span>
                </button>
                <button
                  onClick={() => handleButtonClick("designs")}
                  className="bg-gray-900 bg-opacity-60 backdrop-blur-md text-white font-bold py-3 px-2 rounded-2xl border border-white border-opacity-20 hover:bg-gray-800 hover:bg-opacity-80 hover:border-opacity-40 hover:scale-105 hover:rotate-1 transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.2)] hover:shadow-[0_0_30px_rgba(0,0,0,0.4)] w-full flex items-center justify-center gap-1 group"
                >
                  <FontAwesomeIcon icon={faPalette} className="text-xl group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="group-hover:tracking-wider transition-all duration-300 text-[clamp(0.8rem,1.1vw,1.1rem)]">Designs</span>
                </button>
                <button
                  onClick={() => handleButtonClick("github")}
                  className="bg-gray-900 bg-opacity-60 backdrop-blur-md text-white font-bold py-3 px-2 rounded-2xl border border-white border-opacity-20 hover:bg-gray-800 hover:bg-opacity-80 hover:border-opacity-40 hover:scale-105 hover:rotate-1 transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.2)] hover:shadow-[0_0_30px_rgba(0,0,0,0.4)] w-full flex items-center justify-center gap-1 group"
                >
                  <FaGithub className="text-xl group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="group-hover:tracking-wider transition-all duration-300 text-[clamp(0.8rem,1.1vw,1.1rem)]">GitHub</span>
                </button>
              </div>
          </div>

          {/* Button Navigation */}
        </div>
                {/* Bio Section: Photo Left, Bio Right */}
                <div className="w-full mt-8">
          <HeroBioSection />
        </div>
        
        </div>

        {/* Parallax Images */}
        <ParallaxImages />
      </section>
    </>
  );
};

export default Hero;
