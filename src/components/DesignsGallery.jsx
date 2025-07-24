import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
      <div className="w-full max-w-7xl flex flex-col items-center">
        {/* Section Title with motion animation and glowing shadow */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: 'easeInOut' }}
          className="xs:text-left xs:px-20 sm:px-20 w-full"
        >
          <h2
            className="text-2xl text-center xs:text-3xl sm:text-4xl md:text-5xl font-bold filter drop-shadow-[0_0_20px_rgba(192,64,255,0.9)] mb-10"
          >
            Designs
          </h2>
        </motion.div>
        {showNavButtons && (
          <div className="flex flex-row items-center justify-center w-full gap-4 mb-6">
            <button
              onClick={handlePrevClick}
              className="w-12 h-12 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-700 transition flex items-center justify-center"
              aria-label="Previous Design"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={handleNextClick}
              className="w-12 h-12 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-700 transition flex items-center justify-center"
              aria-label="Next Design"
            >
              <FaArrowRight />
            </button>
          </div>
        )}
        <div className="flex-1 flex flex-col items-center w-full">
          <motion.div
            key={activeIndex}
            className="flex items-center justify-center w-full"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
          >
            <div className="w-full max-w-5xl h-[220px] md:h-[320px] lg:h-[400px] xl:h-[500px] flex flex-col items-center justify-start bg-black/10 rounded-2xl border border-white border-opacity-30 px-2 sm:px-8 py-4 mx-4" style={{ boxShadow: '0 4px 32px 0 rgba(0,0,0,0.15)' }}>
              <div className="text-lg md:text-2xl font-semibold text-white text-center mb-2">
                {designs[activeIndex].title}
              </div>
              <div className="flex-1 w-full flex items-center justify-center overflow-hidden">
                <img
                  src={designs[activeIndex].image}
                  alt={designs[activeIndex].title}
                  className="h-full w-auto max-w-full object-contain rounded-2xl"
                  style={{ maxHeight: '100%' }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DesignsGallery; 