import React, { useState } from "react";
import { experiences } from "../data";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { useInView } from "react-intersection-observer";
import { logEvent } from "../analytics"; // Import the logEvent function
import ExperienceDetailPanel from './ExperienceDetailPanel'; // Import the new component

const cardStyles = {
  "Snydex Platforms": { gradient: "bg-gradient-to-br from-sky-600 to-sky-200", border: "border-sky-300", shadow: "shadow-[0_0_20px_rgba(56,189,248,0.8)]" },
  "Flatiron Health": { gradient: "bg-gradient-to-b from-blue-900 via-indigo-900 to-purple-950", border: "border-purple-500", shadow: "shadow-[0_0_24px_rgba(139,92,246,0.9)]" },
  "Arizent": { gradient: "bg-gradient-to-tr from-rose-950 via-red-800 to-orange-900", border: "border-rose-400", shadow: "shadow-[0_0_24px_rgba(244,63,94,0.9)]" },
  "Freelance": { gradient: "bg-gradient-to-bl from-emerald-950 via-green-800 to-teal-900", border: "border-emerald-400", shadow: "shadow-[0_0_24px_rgba(52,211,153,0.9)]" },
  "Rutgers University": { gradient: "bg-gradient-to-tl from-red-950 via-rose-900 to-red-700", border: "border-red-400", shadow: "shadow-[0_0_24px_rgba(239,68,68,0.9)]" },
};

const defaultDetailTheme = { gradient: "bg-gray-800", border: "border-white/20", shadow: "shadow-2xl" };

const Experience = () => {
  // Start with the Flatiron Health experience selected
  const initialExperience = experiences.find(
    (exp) => exp.company_name === "Flatiron Health"
  );
  const [selectedExperience, setSelectedExperience] = useState(initialExperience);
  const [openedExperiences, setOpenedExperiences] = useState(new Set([initialExperience.title]));
  const selectedTheme = cardStyles[selectedExperience.company_name] || defaultDetailTheme;

  const handleSelectExperience = (experience) => {
    setSelectedExperience(experience);
    setOpenedExperiences((prev) => new Set(prev).add(experience.title));

    // Log the experience click event
    logEvent("Experience", "Select", experience.title);
  };

  const [ref, inView] = useInView({
    threshold: 0.1,
  });

  return (
    <div className="flex flex-col max-w-7xl mx-auto h-full" style={{ paddingTop: '50px' }}>
      {/* Section Title with motion animation and permanent glowing shadow */}
      <motion.div
        ref={ref}
        className="xs:text-left xs:px-20 sm:px-20"

      >
        <h2
          className="text-2xl text-center xs:text-3xl sm:text-4xl md:text-5xl font-bold filter drop-shadow-[0_0_20px_rgba(0,255,0,0.8)]" 
        >
          Experience
        </h2>
      </motion.div>

      {/* Parent Grid Layout */}
      <div className="flex flex-col sm:flex-row h-full mt-8 gap-4">
        {/* Left Column */}
        <div className="w-full sm:w-4/12 h-auto sm:h-full pb-6 pl-5 pr-5 flex flex-col gap-4">
          {/* Snydex Platforms Section */}
          {(() => {
            const snydex = experiences.find(exp => exp.company_name === "Snydex Platforms");
            const snydexTheme = cardStyles["Snydex Platforms"];
            return (
              <div
                className={`p-4 cursor-pointer border-l-4 transition duration-300 ease-in-out rounded-lg ${snydexTheme.gradient} ${
                  snydex === selectedExperience
                    ? `text-white ${snydexTheme.border} ${snydexTheme.shadow}`
                    : openedExperiences.has(snydex?.title)
                    ? `text-white ${snydexTheme.border} shadow-md`
                    : 'text-white border-transparent'
                } hover:text-white hover:${snydexTheme.border} hover:${snydexTheme.shadow}`}
                onClick={() => handleSelectExperience(snydex)}
              >
                <h3 className="text-xl sm:text-3xl md:text-4xl font-bold text-center">
                  Snydex Platforms
                </h3>
                <p className="text-base sm:text-lg md:text-xl text-center mt-2">
                  Jan 2024 - Current
                </p>
              </div>
            );
          })()}

          {/* "SaaS Services" Section */}
          <div
            className={`p-4 cursor-pointer border-l-4 transition duration-300 ease-in-out rounded-lg ${
              "Latest" === selectedExperience.title
                ? 'bg-green-800 text-yellow-400 border-yellow-400 shadow-[0_0_20px_rgba(250,204,21,0.7)]'
                : 'bg-green-900 text-yellow-300 border-yellow-600'
            } hover:text-yellow-400 hover:border-yellow-400 hover:shadow-[0_0_20px_rgba(250,204,21,0.7)]`}
            onClick={() =>
              handleSelectExperience({ title: "Latest", company_name: "", date: "" })
            }

          >
            <h3 className="text-lg sm:text-2xl md:text-3xl font-bold text-center">
              Matt's SaaS Services
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-center mt-2">
              October 2023 - Present
            </p>
          </div>

          {/* Experience Cards */}
          {(() => {
            return (
              <div className="grid grid-cols-2 sm:grid-cols-1 gap-4">
                {experiences.filter(exp => exp.company_name !== "Snydex Platforms").map((experience, index) => {
                  const style = cardStyles[experience.company_name] || { gradient: "bg-gray-700", border: "border-yellow-500", shadow: "shadow-[0_0_20px_gold]" };
                  return (
                    <div
                      key={index}
                      className={`p-4 cursor-pointer border-l-4 transition duration-300 ease-in-out rounded-lg text-white ${style.gradient} ${
                        experience === selectedExperience
                          ? `${style.border} ${style.shadow}`
                          : openedExperiences.has(experience.title)
                          ? `${style.border} shadow-md opacity-80`
                          : 'border-transparent opacity-70'
                      } hover:opacity-100 hover:${style.border} hover:${style.shadow}`}
                      onClick={() => handleSelectExperience(experience)}
                    >
                      <h3 className="text-[5vw] md:text-[2vw] lg:text-[1.25vw] text-base">{experience.title}</h3>
                      <p className="text-[4vw] md:text-[2vw] lg:text-[1vw] text-base">{experience.company_name}</p>
                      <p className="text-[4vw] md:text-[2vw] lg:text-[1vw] text-base">{experience.date}</p>
                    </div>
                  );
                })}
              </div>
            );
          })()}
        </div>

        {/* Right Column */}
        <div className="w-[100vw] sm:w-8/12 h-auto sm:h-full xs:pl-10 sm:pl-0 sm:pr-5">
          <ExperienceDetailPanel selectedExperience={selectedExperience} openedExperiences={openedExperiences} selectedTheme={selectedTheme} />
        </div>
      </div>
    </div>
  );
};

export default Experience;
