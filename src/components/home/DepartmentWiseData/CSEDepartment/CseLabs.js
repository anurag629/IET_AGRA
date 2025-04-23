import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  FaCode,
  FaChartLine,
  FaDatabase,
  FaJava,
  FaCogs,
  FaServer,
  FaPython,
  FaLaptopCode,
  FaBrain,
  FaNetworkWired,
  FaBuilding,
  FaDesktop,
  FaShieldAlt,
  FaWifi,
  FaCheckCircle,
  FaGraduationCap,
} from 'react-icons/fa';
import { fadeIn } from '../../../../utils/animations';

const CseLabs = () => {
  const [activeTab, setActiveTab] = useState('physical');
  const [showAllCourses, setShowAllCourses] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const labImages = [
    { src: '/images/labA.png', alt: 'Computer Lab 1' },
    { src: '/images/labB.png', alt: 'Computer Lab 2' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === labImages.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [labImages.length]);

  const physicalLabs = [
    {
      name: 'Lab 1',
      location: 'Ground Floor, New Building',
      computers: '30 PCs',
      icon: <FaBuilding className="text-4xl text-blue-500" />,
    },
    {
      name: 'Lab 2',
      location: 'First Floor, New Building',
      computers: '30 PCs',
      icon: <FaBuilding className="text-4xl text-blue-600" />,
    },
    {
      name: 'Lab 3',
      location: 'First Floor, New Building',
      computers: '24 PCs',
      icon: <FaBuilding className="text-4xl text-blue-700" />,
    },
    {
      name: 'Lab 4',
      location: 'First Floor, Old Building',
      computers: '50 PCs',
      icon: <FaBuilding className="text-4xl text-green-600" />,
    },
    {
      name: 'Lab 5',
      location: 'First Floor, Old Building',
      computers: '40 PCs',
      icon: <FaBuilding className="text-4xl text-green-700" />,
    },
    {
      name: 'Lab 6',
      location: 'First Floor, Old Building',
      computers: '40 PCs',
      icon: <FaBuilding className="text-4xl text-green-800" />,
    },
  ];

  const labCourses = [
    {
      name: 'C Language Lab',
      description: 'Foundation programming lab for C language basics and advanced concepts',
      icon: <FaCode className="text-4xl text-blue-500" />,
    },
    {
      name: 'Data Structure Lab',
      description: 'Practical implementation of various data structures and algorithms',
      icon: <FaChartLine className="text-4xl text-purple-500" />,
    },
    {
      name: 'DBMS Lab',
      description: 'Database design, SQL programming and database management systems',
      icon: <FaDatabase className="text-4xl text-green-500" />,
    },
    {
      name: 'Java Lab',
      description: 'Object-oriented programming using Java language and frameworks',
      icon: <FaJava className="text-4xl text-red-500" />,
    },
    {
      name: 'Machine Learning Lab',
      description: 'Applied machine learning algorithms and data science techniques',
      icon: <FaCogs className="text-4xl text-indigo-500" />,
    },
    {
      name: 'Deep Learning Lab',
      description: 'Neural networks, GPU computing, and AI model training',
      icon: <FaServer className="text-4xl text-yellow-500" />,
    },
    {
      name: 'Advanced Java Lab',
      description: 'Enterprise Java, JEE, Spring framework and web applications',
      icon: <FaJava className="text-4xl text-orange-500" />,
    },
    {
      name: 'Python Lab',
      description: 'Python programming for web, data science and automation',
      icon: <FaPython className="text-4xl text-blue-700" />,
    },
    {
      name: 'DAA Lab',
      description: 'Design and Analysis of Algorithms implementation and testing',
      icon: <FaCode className="text-4xl text-teal-500" />,
    },
    {
      name: 'Operating System Lab',
      description: 'OS fundamentals, process management, memory management experiments',
      icon: <FaCogs className="text-4xl text-gray-700" />,
    },
    {
      name: 'Web Technology Lab',
      description: 'Modern web development with HTML, CSS, JavaScript and frameworks',
      icon: <FaLaptopCode className="text-4xl text-blue-500" />,
    },
    {
      name: 'Soft Computing Lab',
      description: 'Neural networks, fuzzy logic, and genetic algorithms',
      icon: <FaBrain className="text-4xl text-purple-600" />,
    },
  ];

  const features = [
    {
      title: 'Modern Equipment',
      description: 'All labs equipped with i7 10th generation processors',
      icon: <FaDesktop className="text-2xl text-blue-500" />,
    },
    {
      title: 'Network Connectivity',
      description: 'LAN & Wi-Fi connectivity throughout all labs',
      icon: <FaWifi className="text-2xl text-green-500" />,
    },
    {
      title: 'Internet Access',
      description: '10 Mbps leased line internet connection',
      icon: <FaNetworkWired className="text-2xl text-red-500" />,
    },
    {
      title: 'Safety Standards',
      description: 'Full compliance with statutory safety requirements',
      icon: <FaShieldAlt className="text-2xl text-yellow-600" />,
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="labs" className="py-16 px-4 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mb-14"
        >
          <span className="bg-blue-50 text-blue-700 py-1 px-3 rounded-full text-sm font-medium mb-3 inline-block">
            Computing Facilities
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our State-of-the-Art Laboratories
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-5 rounded-full"></div>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We have 6 labs in our institute, with three in the new building and three in the old
            building. Each lab is well-equipped with responsible and trained lab assistance.
          </p>
        </motion.div>

        {/* Tab Buttons - Enhanced with better visuals */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-white rounded-xl shadow-md p-1.5">
            {['physical', 'courses'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2.5 rounded-lg transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium shadow-lg'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <span className="flex items-center justify-center">
                  {tab === 'physical' ? (
                    <>
                      <FaBuilding className="mr-2" /> Physical Labs
                    </>
                  ) : (
                    <>
                      <FaGraduationCap className="mr-2" /> Lab Courses
                    </>
                  )}
                </span>
              </button>
            ))}
          </div>
        </div>

        {activeTab === 'physical' && (
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            {/* Side-by-side layout for carousel and content */}
            <div className="my-10 bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Image Carousel - Left Side */}
                <div className="relative h-72 md:h-full md:min-h-[28rem] bg-gray-800">
                  {labImages.map((image, index) => (
                    <motion.div
                      key={image.alt}
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: index === currentSlide ? 1 : 0,
                        scale: index === currentSlide ? 1 : 1.05,
                      }}
                      transition={{ duration: 1, ease: 'easeInOut' }}
                      className="absolute inset-0 h-full w-full"
                    >
                      <img src={image.src} alt={image.alt} className="h-full w-full object-cover" />
                    </motion.div>
                  ))}

                  {/* Enhanced carousel indicators */}
                  <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-3">
                    {labImages.map((_, index) => (
                      <button
                        key={`indicator-${index}`}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === currentSlide
                            ? 'bg-white scale-125'
                            : 'bg-white/50 hover:bg-white/80'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>

                  {/* Decorative overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>

                {/* Content - Right Side */}
                <div className="p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-blue-500 pl-4">
                    Lab Infrastructure Excellence
                  </h3>

                  <div className="space-y-5">
                    <p className="text-gray-600 leading-relaxed">
                      Our computer labs are equipped with cutting-edge technology and designed to
                      provide an optimal environment for learning, research, and innovation.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <FaCheckCircle className="text-green-500" />
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium text-gray-900">Modern Hardware</p>
                          <p className="text-xs text-gray-500">i7 10th gen processors</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <FaCheckCircle className="text-green-500" />
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium text-gray-900">Internet Access</p>
                          <p className="text-xs text-gray-500">10Mbps leased line</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <FaCheckCircle className="text-green-500" />
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium text-gray-900">Connectivity</p>
                          <p className="text-xs text-gray-500">LAN & Wi-Fi available</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <FaCheckCircle className="text-green-500" />
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium text-gray-900">Safety</p>
                          <p className="text-xs text-gray-500">Statutory compliance</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 pt-6 border-t border-gray-100">
                      <p className="text-sm text-gray-500 italic">
                        All labs are supervised by qualified staff to ensure optimal learning
                        experience.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Lab Cards Grid - With enhanced styling */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
              variants={containerVariants}
            >
              {physicalLabs.map((lab, index) => (
                <motion.div
                  key={lab.name}
                  variants={itemVariants}
                  whileHover={{
                    y: -8,
                    boxShadow:
                      '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                    transition: { duration: 0.3 },
                  }}
                  className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
                >
                  <div className="h-1.5 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
                  <div className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 mb-5">
                      {lab.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{lab.name}</h3>
                    <div className="mb-3 text-sm text-blue-700 bg-blue-50 inline-block px-3 py-1 rounded-full">
                      {lab.computers}
                    </div>
                    <p className="text-sm text-gray-600 mt-2">{lab.location}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Feature Section - Redesigned with cards */}
            <motion.div
              variants={fadeIn}
              className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl shadow-xl p-8 mt-12 text-white overflow-hidden relative"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full opacity-5 -mt-20 -mr-20"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full opacity-5 -mb-20 -ml-20"></div>

              <h3 className="text-2xl font-bold text-center mb-8 relative">
                Lab Infrastructure Features
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
                {features.map((feature) => (
                  <div
                    key={feature.title}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center transition-all duration-300 hover:bg-white/20 hover:transform hover:scale-105"
                  >
                    <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                      {feature.icon}
                    </div>
                    <h4 className="font-semibold text-lg mb-2">{feature.title}</h4>
                    <p className="text-sm text-white/80">{feature.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}

        {activeTab === 'courses' && (
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {(showAllCourses ? labCourses : labCourses.slice(0, 6)).map((course, index) => (
                <motion.div
                  key={course.name}
                  variants={itemVariants}
                  whileHover={{
                    y: -8,
                    boxShadow:
                      '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                    transition: { duration: 0.3 },
                  }}
                  className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
                >
                  <div className="h-1.5 bg-gradient-to-r from-blue-500 to-purple-600"></div>
                  <div className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 mb-5">
                      {course.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{course.name}</h3>
                    <p className="text-sm text-gray-600">{course.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-10">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowAllCourses((prev) => !prev)}
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                {showAllCourses ? 'Show Less' : 'View All Lab Courses'}
              </motion.button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default CseLabs;
