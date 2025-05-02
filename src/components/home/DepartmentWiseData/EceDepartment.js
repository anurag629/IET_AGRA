import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';

// Import all ECE department components
import EceAbout from './ECEDepartment/EceAbout';
import EceFaculty from './ECEDepartment/EceFaculty';
import EceAcademics from './ECEDepartment/EceAcademics';
import EceInfrastructure from './ECEDepartment/EceInfrastrcuture';
import EceResearch from './ECEDepartment/EceResearch';
import EceAchievements from './ECEDepartment/EceAchievements';
import EceActivities from './ECEDepartment/EceActivities';
import EceContact from './ECEDepartment/contact';
// import EceAchievements from './EceAchievements';
// import EceActivities from './EceActivities';

const EceDepartment = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);

    // Show button when user scrolls down 300px
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="ece-department bg-gradient-to-b from-indigo-50 to-white">
      {/* Hero Banner at the top */}
      <div className="relative overflow-hidden bg-gradient-to-r from-indigo-800 via-purple-700 to-indigo-800 text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/public/images/circuit_pattern.jpeg')]"></div>
        </div>
        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Electronics & Communication Engineering
            </h1>
            <div className="w-16 sm:w-24 h-1 sm:h-1.5 bg-white/70 mx-auto mb-4 sm:mb-6"></div>
            <p className="text-base sm:text-lg md:text-xl opacity-90 mb-6 sm:mb-8 max-w-3xl mx-auto px-2">
              Institute of Engineering & Technology, Dr. Bhimrao Ambedkar University, Agra
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <a
                href="#about"
                className="px-4 sm:px-6 py-2 sm:py-3 bg-white text-indigo-800 rounded-lg font-medium hover:bg-indigo-50 transition-colors shadow-lg text-sm sm:text-base"
              >
                Explore Department
              </a>
              <a
                href="#contact"
                className="px-4 sm:px-6 py-2 sm:py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors shadow-lg text-sm sm:text-base mt-3 sm:mt-0"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            ></path>
          </svg>
        </div>
      </div>

      {/* Import all sections */}
      <EceAbout />
      <EceAcademics />
      <EceFaculty />
      <EceInfrastructure />
      <EceResearch />
      <EceAchievements />
      <EceActivities />
      <EceContact />

      {/* Scroll to top button */}
      <AnimatePresence>
        {showScrollButton && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300"
            aria-label="Scroll to top"
          >
            <FaArrowUp className="text-lg" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EceDepartment;
