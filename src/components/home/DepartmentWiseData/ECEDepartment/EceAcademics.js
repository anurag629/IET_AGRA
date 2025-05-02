import React from 'react';
import { motion } from 'framer-motion';
import {
  FaGraduationCap,
  FaChalkboardTeacher,
  FaUserGraduate,
  FaBook,
  FaUserFriends,
  FaClipboardCheck,
} from 'react-icons/fa';

const EceAcademics = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  // Teaching learning process data
  const evaluationSystem = [
    {
      title: 'Internal Assessment',
      description: '3 Periodical Tests (Best two considered), Assignments, Tutorials',
      marks: '40 Marks',
      icon: <FaClipboardCheck className="text-indigo-600" />,
    },
    {
      title: 'External Assessment',
      description: 'End Semester Examination',
      marks: '60 Marks',
      icon: <FaBook className="text-indigo-600" />,
    },
    {
      title: 'Total Evaluation',
      description: 'Each subject',
      marks: '100 Marks',
      icon: <FaGraduationCap className="text-indigo-600" />,
    },
  ];

  return (
    <section id="academics" className="py-16 px-4 bg-gradient-to-b from-indigo-50 to-white">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-sm font-medium mb-4">
            Academic Excellence
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Academic Programs</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
            Our department offers comprehensive academic programs designed to prepare students for
            successful careers in Electronics and Communication Engineering.
          </p>
        </motion.div>

        {/* Courses Offered */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="bg-white rounded-xl shadow-lg overflow-hidden mb-16"
        >
          <div className="bg-gradient-to-r from-indigo-600 to-purple-700 p-6 text-white">
            <h3 className="text-2xl font-bold flex items-center">
              <FaGraduationCap className="mr-3" />
              Courses Offered
            </h3>
          </div>
          <div className="p-8">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="flex-shrink-0 md:w-1/3">
                <img
                  src="/images/ece/labs4.png"
                  alt="ECE Course"
                  className="rounded-lg shadow-md w-full"
                  onError={(e) => {
                    e.target.src = '/images/ece/labs4.png';
                  }}
                />
              </div>
              <div className="md:w-2/3">
                <h4 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-indigo-500 pl-4">
                  B.E. in Electronics and Communication Engineering
                </h4>
                <p className="text-gray-600 mb-4">
                  A comprehensive 4-year undergraduate program that prepares students for careers in
                  electronics, telecommunications, and related fields.
                </p>
                <div className="bg-indigo-50 rounded-lg p-4">
                  <h5 className="font-semibold text-indigo-800 mb-2">Program Highlights:</h5>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-indigo-500 mr-2">•</span>
                      <span>Strong foundation in electronics and communication principles</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-500 mr-2">•</span>
                      <span>Practical experience through well-equipped laboratories</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-500 mr-2">•</span>
                      <span>Focus on emerging technologies including IoT, AI, and Robotics</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-500 mr-2">•</span>
                      <span>Industry-oriented curriculum with project-based learning</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Academic Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Student-Faculty Ratio */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            <div className="h-2 bg-gradient-to-r from-indigo-500 to-purple-600"></div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-indigo-100 p-3 rounded-full">
                  <FaUserFriends className="text-xl text-indigo-600" />
                </div>
                <h3 className="ml-4 text-xl font-bold text-gray-800">Student-Faculty Ratio</h3>
              </div>
              <div className="flex items-center justify-center py-8">
                <div className="text-center">
                  <div className="flex items-center justify-center">
                    <div className="bg-indigo-100 rounded-full h-20 w-20 flex items-center justify-center">
                      <span className="text-2xl font-bold text-indigo-600">8</span>
                    </div>
                    <div className="mx-4 text-2xl font-bold text-gray-400">:</div>
                    <div className="bg-purple-100 rounded-full h-20 w-20 flex items-center justify-center">
                      <span className="text-2xl font-bold text-purple-600">1</span>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-600">
                    Our low student-to-faculty ratio ensures personalized attention and quality
                    education for every student.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Student Strength */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            <div className="h-2 bg-gradient-to-r from-purple-500 to-indigo-600"></div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <FaUserGraduate className="text-xl text-purple-600" />
                </div>
                <h3 className="ml-4 text-xl font-bold text-gray-800">Student Strength</h3>
              </div>
              <div className="py-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-r from-indigo-100 to-purple-100 p-4 rounded-lg text-center">
                    <p className="text-gray-700 font-medium">Current Batch</p>
                    <h4 className="text-3xl font-bold text-indigo-700 mt-2">60</h4>
                    <p className="text-sm text-gray-600">Students per year</p>
                  </div>
                  <div className="bg-gradient-to-r from-purple-100 to-indigo-100 p-4 rounded-lg text-center">
                    <p className="text-gray-700 font-medium">Total Strength</p>
                    <h4 className="text-3xl font-bold text-purple-700 mt-2">240</h4>
                    <p className="text-sm text-gray-600">Students across all years</p>
                  </div>
                </div>
                <p className="mt-4 text-center text-gray-600">
                  Our department maintains an optimal student strength to ensure quality education
                  and individual attention.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Teaching Learning Process */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mb-8"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Teaching Learning Process</h3>
            <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our comprehensive evaluation system ensures thorough assessment of student learning
              and progress.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {evaluationSystem.map((item, index) => (
                <div
                  key={index}
                  className="border border-gray-100 rounded-lg p-6 hover:border-indigo-200 transition-all duration-300 hover:shadow-md"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-indigo-100 rounded-full p-3">{item.icon}</div>
                    <h4 className="ml-3 font-bold text-gray-800">{item.title}</h4>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                  <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-1 px-4 rounded-full inline-block text-sm font-medium">
                    {item.marks}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-indigo-50 rounded-lg">
              <p className="text-center text-gray-700">
                Our evaluation methodology combines continuous assessment through periodic tests and
                assignments with end-semester examinations to provide a comprehensive evaluation of
                student performance and understanding.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Best Practices */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl shadow-xl p-8 text-white overflow-hidden relative"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full opacity-5 -mt-20 -mr-20"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full opacity-5 -mb-20 -ml-20"></div>

          <h3 className="text-2xl font-bold text-center mb-8 relative">Best Academic Practices</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
              <h4 className="font-semibold text-lg mb-3">Emerging Areas Focus</h4>
              <p className="text-sm text-white/80">
                Special focus on Machine Learning, Robotics, AI, and IoT to prepare students for
                future technologies.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
              <h4 className="font-semibold text-lg mb-3">Value Added Courses</h4>
              <p className="text-sm text-white/80">
                Additional courses in Human Values, Environmental Studies, Industrial Management,
                and Economics.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
              <h4 className="font-semibold text-lg mb-3">Mentorship System</h4>
              <p className="text-sm text-white/80">
                Dedicated coordinator and mentor system for each class and special local guardians
                for girl students.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EceAcademics;
