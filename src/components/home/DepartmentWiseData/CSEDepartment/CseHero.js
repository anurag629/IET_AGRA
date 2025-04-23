import React from 'react';
import { motion } from 'framer-motion';

const CseHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      </div>
      <div className="relative container mx-auto px-4 py-12 sm:py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Computer Science & Engineering
          </h1>
          <div className="w-16 sm:w-24 h-1 sm:h-1.5 bg-white/50 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg md:text-xl opacity-90 mb-6 sm:mb-8 max-w-3xl mx-auto px-2">
            Institute of Engineering and Technology, Swami Vivekanand Campus, Dr. Bhimrao Ambedkar
            University, Agra
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <a
              href="#about"
              className="px-4 sm:px-6 py-2 sm:py-3 bg-white text-blue-700 rounded-lg font-medium hover:bg-blue-50 transition-colors shadow-lg text-sm sm:text-base"
            >
              Explore Department
            </a>
            <a
              href="#contact"
              className="px-4 sm:px-6 py-2 sm:py-3 bg-blue-800 text-white rounded-lg font-medium hover:bg-blue-900 transition-colors shadow-lg text-sm sm:text-base mt-3 sm:mt-0"
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
    </section>
  );
};

export default CseHero;
