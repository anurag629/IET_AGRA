import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  FaFlask,
  FaLaptopCode,
  FaMicrochip,
  FaSatelliteDish,
  FaChalkboardTeacher,
  FaDesktop,
  FaTools,
  FaCogs,
  FaNetworkWired,
  FaCalculator,
  FaArrowRight,
  FaArrowLeft,
} from 'react-icons/fa';

const EceInfrastructure = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

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
        ease: 'easeOut',
      },
    },
  };

  // State for image carousel
  const [currentSlide, setCurrentSlide] = useState(0);

  // Lab images
  const labImages = [
    { src: '/images/ece/slide_10_image_12.jpg', alt: 'Electronics Lab' },
    { src: '/images/ece/slide_10_image_13.png', alt: 'Communication Lab' },
    { src: '/images/ece/slide_10_image_14.png', alt: 'Digital Signal Processing Lab' },
    { src: '/images/ece/labs4.png', alt: 'VLSI Lab' },
  ];

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === labImages.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [labImages.length]);

  // Infrastructure images
  const infrastructureImages = [
    { src: '/images/ece/slide_25_image_43.jpg', alt: 'ECE Department Building' },
    { src: '/images/ece/slide_25_image_44.jpg', alt: 'Classroom' },
    { src: '/images/ece/slide_25_image_45.jpg', alt: 'Faculty Office' },
    { src: '/images/ece/slide_25_image_46.jpg', alt: 'Computer Lab' },
    { src: '/images/ece/slide_25_image_47.jpg', alt: 'Department Facility' },
  ];

  // Lab facility data
  const labsData = [
    {
      name: 'Basic Electronics Lab',
      description: 'Foundation lab for understanding electronic components and basic circuits',
      icon: <FaMicrochip className="text-2xl text-indigo-600" />,
    },
    {
      name: 'Electronic Devices & Circuits Lab',
      description: 'Advanced circuit design and implementation lab',
      icon: <FaTools className="text-2xl text-indigo-600" />,
    },
    {
      name: 'Digital Electronics Lab',
      description: 'Lab for digital circuit design and microprocessors',
      icon: <FaCalculator className="text-2xl text-indigo-600" />,
    },
    {
      name: 'Analog Communication Lab',
      description: 'Facilities for analog communication experiments',
      icon: <FaSatelliteDish className="text-2xl text-indigo-600" />,
    },
    {
      name: 'Digital Communication Lab',
      description: 'Modern digital communication systems and techniques',
      icon: <FaNetworkWired className="text-2xl text-indigo-600" />,
    },
    {
      name: 'Linear Integrated Circuits Lab',
      description: 'Lab for integrated circuit applications',
      icon: <FaCogs className="text-2xl text-indigo-600" />,
    },
    {
      name: 'Digital Signal Processing Lab',
      description: 'Advanced signal processing lab with modern tools',
      icon: <FaDesktop className="text-2xl text-indigo-600" />,
    },
    {
      name: 'Automatic Control System Lab',
      description: 'Lab for control systems and automation',
      icon: <FaLaptopCode className="text-2xl text-indigo-600" />,
    },
    {
      name: 'PCB Design Lab',
      description: 'Specialized lab for PCB design and fabrication',
      icon: <FaMicrochip className="text-2xl text-indigo-600" />,
    },
    {
      name: 'Measurement & Instrumentation Lab',
      description: 'Lab for precision measurement and instrumentation',
      icon: <FaTools className="text-2xl text-indigo-600" />,
    },
    {
      name: 'Data Structure Lab',
      description: 'Computing lab for data structure implementation',
      icon: <FaLaptopCode className="text-2xl text-indigo-600" />,
    },
    {
      name: 'Java Lab',
      description: 'Programming lab focused on Java development',
      icon: <FaLaptopCode className="text-2xl text-indigo-600" />,
    },
  ];

  return (
    <section id="infrastructure" className="py-16 px-4 bg-gradient-to-b from-white to-indigo-50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-sm font-medium mb-4">
            State-of-the-Art Facilities
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Department Infrastructure
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
            Our department is equipped with modern laboratories and facilities to provide students
            with practical experience in electronics and communication engineering.
          </p>
        </motion.div>

        {/* Lab Carousel & Info */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-indigo-500 pl-4">
                Advanced Laboratories
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our department houses 12 specialized laboratories equipped with modern equipment and
                software to provide hands-on experience to students in various domains of
                electronics and communication engineering.
              </p>
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <FaFlask className="text-indigo-500" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">12 Specialized Labs</p>
                    <p className="text-xs text-gray-500">Covering all areas of ECE</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <FaDesktop className="text-indigo-500" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">Modern Computing Facilities</p>
                    <p className="text-xs text-gray-500">With latest software tools</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <FaChalkboardTeacher className="text-indigo-500" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">2 Modern Classrooms</p>
                    <p className="text-xs text-gray-500">With audio-visual aids</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <FaCogs className="text-indigo-500" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">Dedicated Project Labs</p>
                    <p className="text-xs text-gray-500">For student innovations</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Lab Image Carousel */}
            <div className="relative h-72 md:h-full md:min-h-[28rem] bg-gray-800 overflow-hidden">
              {labImages.map((image, index) => (
                <motion.div
                  key={image.alt}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: index === currentSlide ? 1 : 0,
                    scale: index === currentSlide ? 1 : 1.05,
                  }}
                  transition={{ duration: 1, ease: 'easeInOut' }}
                  className="absolute inset-0 h-full w-full flex items-center justify-center"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      e.target.src = '/images/placeholder-lab.jpg';
                    }}
                  />
                </motion.div>
              ))}

              {/* Navigation arrows */}
              <button
                onClick={() =>
                  setCurrentSlide((prev) => (prev === 0 ? labImages.length - 1 : prev - 1))
                }
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/40 transition-colors p-2 rounded-full z-10"
                aria-label="Previous slide"
              >
                <FaArrowLeft className="text-white" />
              </button>
              <button
                onClick={() =>
                  setCurrentSlide((prev) => (prev === labImages.length - 1 ? 0 : prev + 1))
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/40 transition-colors p-2 rounded-full z-10"
                aria-label="Next slide"
              >
                <FaArrowRight className="text-white" />
              </button>

              {/* Carousel indicators */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-10">
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

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8 text-white z-10">
                <h4 className="text-lg font-semibold">{labImages[currentSlide].alt}</h4>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Labs Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {labsData.map((lab, index) => (
            <motion.div
              key={lab.name}
              variants={itemVariants}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
              whileHover={{
                y: -5,
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                transition: { duration: 0.3 },
              }}
            >
              <div className="h-1.5 bg-gradient-to-r from-indigo-500 to-purple-600"></div>
              <div className="p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50 mb-4">
                  {lab.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{lab.name}</h3>
                <p className="text-sm text-gray-600">{lab.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Infrastructure Photos */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
            Department Facilities
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {infrastructureImages.map((image, index) => (
              <div
                key={index}
                className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-40 object-cover"
                  onError={(e) => {
                    e.target.src = '/images/placeholder-facility.jpg';
                  }}
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Infrastructure Details */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl shadow-xl p-8 text-white overflow-hidden relative"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full opacity-5 -mt-20 -mr-20"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full opacity-5 -mb-20 -ml-20"></div>

          <h3 className="text-2xl font-bold text-center mb-8 relative">Infrastructure Summary</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/20 mb-4">
                <FaChalkboardTeacher className="text-2xl text-white" />
              </div>
              <h4 className="font-semibold text-lg mb-2">2 Classrooms</h4>
              <p className="text-sm text-white/80">
                Modern classrooms with audio-visual facilities
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/20 mb-4">
                <FaFlask className="text-2xl text-white" />
              </div>
              <h4 className="font-semibold text-lg mb-2">4 Lab Rooms</h4>
              <p className="text-sm text-white/80">Specialized labs covering various ECE domains</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/20 mb-4">
                <FaDesktop className="text-2xl text-white" />
              </div>
              <h4 className="font-semibold text-lg mb-2">4 Faculty Offices</h4>
              <p className="text-sm text-white/80">
                Dedicated spaces for faculty research and consultation
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EceInfrastructure;
