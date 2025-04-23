import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import CountUp from 'react-countup';
import {
  FaGraduationCap,
  FaLaptopCode,
  FaBook,
  FaAward,
  FaLightbulb,
  FaUsers,
  FaChalkboardTeacher,
} from 'react-icons/fa';
import { fadeIn } from '../../../../utils/animations';

const CseAbout = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  // Stats counter animation control
  const statsRef = useRef(null);
  const isInView = useInView(statsRef, { once: true, margin: '-100px' });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const statsData = [
    {
      count: 150,
      label: 'Placements',
      subtext: 'Since 2020-21',
      icon: <FaGraduationCap className="text-3xl" />,
      color: 'from-blue-400 to-blue-600',
    },
    {
      count: 300,
      label: 'Trainings/Internships',
      subtext: 'Industry collaborations',
      icon: <FaLaptopCode className="text-3xl" />,
      color: 'from-purple-400 to-purple-600',
    },
    {
      count: 400,
      label: 'MOOC Courses',
      subtext: 'NPTEL, Udemy, Swayam',
      icon: <FaBook className="text-3xl" />,
      color: 'from-green-400 to-green-600',
    },
    {
      count: 15,
      label: 'GATE Qualifiers',
      subtext: 'Excellent performers',
      icon: <FaAward className="text-3xl" />,
      color: 'from-amber-400 to-amber-600',
    },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto max-w-6xl">
        {/* Elegant Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-4">
            Department of Excellence
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Computer Science & Engineering
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
            The Department of Computer Science & Engineering at IET Agra is dedicated to producing
            technically sound, innovative, and research-driven engineers. With a strong vision to
            tackle global and rural challenges, the department emphasizes both academic depth and
            industry relevance, preparing students for the modern technological landscape.
          </p>
        </motion.div>

        {/* Enhanced Stats Cards */}
        <div ref={statsRef} className="mb-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          >
            {statsData.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  boxShadow:
                    '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                  transition: { duration: 0.3 },
                }}
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
              >
                <div className={`h-2 bg-gradient-to-r ${stat.color}`}></div>
                <div className="p-8 text-center">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-gradient-to-br ${stat.color} text-white`}
                  >
                    {stat.icon}
                  </div>
                  <h3 className="text-4xl font-bold mb-2 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                    {isInView ? <CountUp end={stat.count} suffix="+" duration={2.5} /> : '0+'}
                  </h3>
                  <p className="text-lg font-medium text-gray-700 mb-1">{stat.label}</p>
                  {stat.subtext && <p className="text-sm text-gray-500">{stat.subtext}</p>}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mission and Vision Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
          >
            <div className="h-2 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
            <div className="p-8">
              <div className="flex items-center mb-6">
                <div className="flex-shrink-0">
                  <div className="bg-blue-100 rounded-full p-3">
                    <FaLightbulb className="text-2xl text-blue-600" />
                  </div>
                </div>
                <h3 className="ml-4 text-2xl font-bold text-gray-800">Our Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To be recognized globally for quality technical education, producing professionals
                with ethical values, and capable of providing solutions to engineering problems for
                the sustainable development of society.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
          >
            <div className="h-2 bg-gradient-to-r from-purple-500 to-pink-600"></div>
            <div className="p-8">
              <div className="flex items-center mb-6">
                <div className="flex-shrink-0">
                  <div className="bg-purple-100 rounded-full p-3">
                    <FaUsers className="text-2xl text-purple-600" />
                  </div>
                </div>
                <h3 className="ml-4 text-2xl font-bold text-gray-800">Our Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To impart quality education by developing skilled human resources with ethical
                values capable of developing sustainable solutions to complex engineering problems
                through innovation, research, and entrepreneurship.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Department Highlights */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl shadow-xl p-8 text-white overflow-hidden relative"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full opacity-5 -mt-20 -mr-20"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full opacity-5 -mb-20 -ml-20"></div>

          <h3 className="text-2xl font-bold text-center mb-8 relative">Department Highlights</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 hover:transform hover:scale-105">
              <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUsers className="text-2xl" />
              </div>
              <h4 className="font-semibold text-lg mb-2">Expert Faculty</h4>
              <p className="text-sm text-white/80">
                Highly qualified faculty with industry and research experience
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 hover:transform hover:scale-105">
              <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaLaptopCode className="text-2xl" />
              </div>
              <h4 className="font-semibold text-lg mb-2">Modern Curriculum</h4>
              <p className="text-sm text-white/80">
                Industry-aligned curriculum updated with emerging technologies
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 hover:transform hover:scale-105">
              <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaChalkboardTeacher className="text-2xl" />
              </div>
              <h4 className="font-semibold text-lg mb-2">Mentorship</h4>
              <p className="text-sm text-white/80">
                Dedicated mentoring system for academic and professional guidance
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CseAbout;
