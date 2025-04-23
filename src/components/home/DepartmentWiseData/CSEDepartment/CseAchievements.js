import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaLaptopCode } from 'react-icons/fa';
import { fadeIn } from '../../../../utils/animations';

const CseAchievements = () => {
  return (
    <section id="achievements" className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-3">Achievements & Milestones</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our department takes pride in the remarkable achievements of our students and faculty,
            setting new benchmarks in academic excellence and industry readiness.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="bg-white rounded-xl shadow-lg overflow-hidden mb-8"
        >
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 text-white">
            <h3 className="text-xl font-bold">Placement Highlights</h3>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">95%</div>
                <div className="text-gray-600 text-sm">Placement Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">150+</div>
                <div className="text-gray-600 text-sm">Students Placed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">₹12L</div>
                <div className="text-gray-600 text-sm">Highest Package</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">₹6.5L</div>
                <div className="text-gray-600 text-sm">Average Package</div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="bg-white rounded-xl shadow-md p-6"
          >
            <h3 className="text-xl font-bold text-gray-800 mb-4">Academic Excellence</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-blue-100 p-1.5 rounded-full mr-3 mt-0.5">
                  <FaAward className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">GATE Qualification Success</h4>
                  <p className="text-gray-600 text-sm">
                    9 students qualified GATE in 2021-2022, with a total of 15+ qualifiers overall
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-100 p-1.5 rounded-full mr-3 mt-0.5">
                  <FaAward className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">IIT Kanpur EBOOTATHAN</h4>
                  <p className="text-gray-600 text-sm">
                    3 students and 1 faculty (Er. Prashant Maharishi) received Gold Developer
                    Certificate
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-100 p-1.5 rounded-full mr-3 mt-0.5">
                  <FaAward className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">5-time GATE Qualifier Faculty</h4>
                  <p className="text-gray-600 text-sm">
                    Er. Saurabh Garg has qualified GATE 5 times, bringing expert guidance to
                    students
                  </p>
                </div>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="bg-white rounded-xl shadow-md p-6"
          >
            <h3 className="text-xl font-bold text-gray-800 mb-4">Technical Accomplishments</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-indigo-100 p-1.5 rounded-full mr-3 mt-0.5">
                  <FaLaptopCode className="h-4 w-4 text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">MOOC Certifications</h4>
                  <p className="text-gray-600 text-sm">
                    350+ students completed courses via NPTEL, Udemy, Coursera, and other platforms
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-indigo-100 p-1.5 rounded-full mr-3 mt-0.5">
                  <FaLaptopCode className="h-4 w-4 text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Programming Simulators</h4>
                  <p className="text-gray-600 text-sm">
                    20+ C programming simulators hosted on Vercel by students
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-indigo-100 p-1.5 rounded-full mr-3 mt-0.5">
                  <FaLaptopCode className="h-4 w-4 text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Faculty Development</h4>
                  <p className="text-gray-600 text-sm">
                    Faculty members completed multiple NPTEL courses to enhance teaching skills
                  </p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CseAchievements;
