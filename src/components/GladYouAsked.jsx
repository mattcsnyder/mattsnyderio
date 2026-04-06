import React from 'react';
import { latestExperiences } from '../data'; // Import experiences from data.js
import ExperienceIcons from './ExperienceIcons';
import { snydexplatforms_logo } from '../assets';

const GladYouAsked = (openedExperiences) => {
  if (!latestExperiences || latestExperiences.length === 0) return null;

  return (
    <div className="overflow-hidden rounded-lg shadow-2xl transition-all duration-300 ease-in-out transform max-w-[800px] mx-auto mb-6">
      <div className="bg-gradient-to-br from-sky-600 to-sky-200 px-6 py-6 text-white">
        <div className="flex gap-4 items-start">
          <div className="w-[120px] h-[120px] flex-shrink-0 flex items-center justify-center bg-white rounded-lg p-2">
            <img
              src={snydexplatforms_logo}
              alt="Snydex Platforms Logo"
              className="object-contain company-logo-animation"
              style={{ width: '100%', height: '100%' }}
            />
          </div>
          <div className="flex-1 flex flex-col justify-center">
            <h2 className="text-xl sm:text-2xl font-bold">Snydex Platforms</h2>
            <p className="text-md sm:text-lg">Jan 2024 - Current</p>
            <p className="text-sm sm:text-md">New York, NY</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6 bg-gray-800 p-6 text-white">
        {/* Render all experiences in sequence */}
        {latestExperiences.map((experience, index) => {
          const { title, description, details, finalNote, photo, icons } = experience;

          return (
            <div key={index} className="flex flex-col gap-4 fade-in-description" style={{ animationDelay: `${index * 0.15}s` }}>
              {/* Experience Title */}
              <h3 className="lg:text-[2vw] text-[6vw] font-semibold text-center">
                {title}
              </h3>

              {/* Description */}
              <div className="lg:text-[1.25vw] text-[5vw] text-center">
                {description}
              </div>

              {/* 50%-50% Split Section */}
              {details && (
                <div className="flex flex-col sm:flex-row gap-4 items-start">
                  <p className={`lg:text-[1.25vw] text-[5vw] text-center ${photo ? 'w-full sm:w-1/2' : 'w-full'}`}>
                    {details}
                  </p>
                  {photo && (
                    <div className="w-full sm:w-5/12 transform transition-transform duration-300 ease-in-out hover:scale-125">
                      <img
                        src={photo}
                        alt={`${title} Photo`}
                        className="rounded-lg shadow-md w-full h-auto object-cover"
                      />
                    </div>
                  )}
                </div>
              )}

              {/* Final Note Section */}
              {finalNote && (
                <p className="text-base lg:text-[1.25vw] text-[5vw] text-center italic">
                  {finalNote}
                </p>
              )}

              {/* Icons */}
              {icons && icons.length > 0 && (
                <div className="flex flex-row flex-nowrap justify-center gap-4 w-full mx-auto">
                  {icons.map((icon, iconIndex) => (
                    <div
                      key={iconIndex}
                      className="flex flex-row items-start gap-4 fade-in-description"
                      style={{ animationDelay: `${iconIndex * 0.2}s` }}
                    >
                      <div className="flex-shrink-0">
                        <ExperienceIcons
                          icons={[icon]}
                          className="icon-border"
                          showDescription={true}
                          size={window.matchMedia("(min-width: 1024px)").matches ? (icons.length >= 5 ? 70 : 100) : (icons.length >= 5 ? 36 : 50)}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Divider */}
              {index < latestExperiences.length - 1 && (
                <hr className="border-t border-gray-600 my-4" />
              )}
              </div>
          );
        })}
      </div>
    </div>
  );
};

export default GladYouAsked;
