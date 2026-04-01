import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import {
  default as img1
} from '../assets/designs/RestuarantIQ-newsletter.png';
import {
  default as img2
} from '../assets/designs/RestuarantIQ.png';
import {
  default as img3
} from '../assets/designs/SafeWithSounds.png';
import {
  default as img4
} from '../assets/designs/SafeWithSounds-Presave.png';
import {
  default as img5
} from '../assets/designs/RestuarantIQ-services.png';
import {
  default as img6
} from '../assets/designs/RestuarantIQ-menuanalytics.png';
import { default as img8 } from '../assets/designs/starfetcher_dashboard.png';

const designs = [
  { image: img2, title: 'RestaurantIQ Landing Page' },
  { image: img5, title: 'RestaurantIQ Services Promo' },
  { image: img1, title: 'RestaurantIQ Newsletter Page' },
  { image: img6, title: 'RestaurantIQ Menu Analytics Page' },
  { image: img3, title: 'Safe With Sounds Landing Page' },
  { image: img4, title: 'Safe With Sounds Promo Page' },
  { image: img8, title: 'Starfetcher Dashboard' },
];

const DesignsGallery = ({ showNavButtons = true }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? designs.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) => (prevIndex === designs.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="w-full flex justify-center py-5">
      <div className="w-full flex flex-col items-center">
        {/* Section Title + Navigation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: 'easeInOut' }}
          className="w-full flex items-center justify-center gap-8 px-6 mb-4"
        >
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold filter drop-shadow-[0_0_20px_rgba(192,64,255,0.9)]">
            Product / Web Designs
          </h2>

          {showNavButtons && (
            <div className="flex items-center gap-4">
              <button
                onClick={handlePrevClick}
                className="w-10 h-10 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-700 transition flex items-center justify-center flex-shrink-0"
                aria-label="Previous Design"
              >
                <FaArrowLeft />
              </button>

              <div className="flex items-center gap-2">
                {designs.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    aria-label={`Go to design ${i + 1}`}
                    className={`rounded-full transition-all duration-300 ${
                      i === activeIndex
                        ? 'w-3 h-3 bg-white'
                        : 'w-2 h-2 bg-gray-500 hover:bg-gray-300'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={handleNextClick}
                className="w-10 h-10 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-700 transition flex items-center justify-center flex-shrink-0"
                aria-label="Next Design"
              >
                <FaArrowRight />
              </button>
            </div>
          )}
        </motion.div>

        {/* Design title */}
        <p className="text-white/70 text-sm mb-3 text-center">
          {designs[activeIndex].title}
        </p>

        {/* Full-width image — grid stacking keeps container sized during crossfade */}
        <div className="w-full grid">
          <AnimatePresence>
            <motion.img
              key={activeIndex}
              src={designs[activeIndex].image}
              alt={designs[activeIndex].title}
              className="w-full h-auto object-contain"
              style={{ gridArea: '1 / 1' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            />
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default DesignsGallery;
