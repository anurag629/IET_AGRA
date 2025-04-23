import React, { useEffect, useState } from 'react';
import CseHero from './CseHero';
import CseVision from './CseVision';
import CseAbout from './CseAbout';
import CseFaculty from './CseFaculty';
import CsePrograms from './CsePrograms';
import CseWomenCell from './CseWomenCell';
import CseLabs from './CseLabs';
import CseTeaching from './CseTeaching';
import CseResearch from './CseResearch';
import CseSeminarConferenceAndWorkshop from './CseSeminarConferenceAndWorkshop';
import CseAchievements from './CseAchievements';
import CseContact from './CseContact';
import { FaArrowUp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

function CseDepartment() {
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

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to scroll to top with smooth behavior
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen mt-8 relative">
      <CseHero />
      <CseVision />
      <CseAbout />
      <CseFaculty />
      <CsePrograms />
      <CseWomenCell />
      <CseLabs />
      <CseTeaching />
      <CseResearch />
      <CseSeminarConferenceAndWorkshop />
      <CseAchievements />
      <CseContact />

      {/* Scroll to top button with animation */}
      <AnimatePresence>
        {showScrollButton && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-blue-600 to-blue-800 text-white p-3 rounded-full shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-blue-900 transition-all duration-300"
            aria-label="Scroll to top"
          >
            <FaArrowUp className="text-lg" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default CseDepartment;
