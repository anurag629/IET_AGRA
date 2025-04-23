import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaChalkboardTeacher, FaCertificate, FaBuilding } from 'react-icons/fa';
import { fadeIn } from '../../../../utils/animations';

const CseTeaching = () => {
  // Teaching methodologies
  const teachingMethods = [
    'Self-Study & Internships',
    'Seminars & Discussions',
    'Programming Assignments',
    'GitHub Project Deployment',
    'MOOC Course Participation',
    'Industry Expert Sessions',
    'Practical Labs & Workshops',
    'Project-Based Learning',
  ];

  return (
    <section
      id="teaching"
      className="py-16 px-4 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-3">Teaching Methodologies</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our teaching approach combines traditional classroom learning with modern techniques and
            practical exposure to ensure students develop both theoretical knowledge and hands-on
            skills.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {teachingMethods.map((method, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-sm text-center"
            >
              <span className="text-gray-800 font-medium">{method}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mt-12 bg-white rounded-xl shadow-lg p-6"
        >
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Training & Placement Requirements
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <div className="bg-blue-100 p-2 rounded-lg mr-4">
                <FaGithub className="text-blue-600 text-xl" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">GitHub Project Deployment</h4>
                <p className="text-gray-600 text-sm">
                  Final year projects must be deployed on GitHub for portfolio building and version
                  control
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-green-100 p-2 rounded-lg mr-4">
                <FaChalkboardTeacher className="text-green-600 text-xl" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Project Presentation</h4>
                <p className="text-gray-600 text-sm">
                  Professional PPT preparation is mandatory for all final year projects
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-purple-100 p-2 rounded-lg mr-4">
                <FaCertificate className="text-purple-600 text-xl" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">MOOC Course Requirement</h4>
                <p className="text-gray-600 text-sm">
                  One MOOC course completion is mandatory per semester for each student
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-red-100 p-2 rounded-lg mr-4">
                <FaBuilding className="text-red-600 text-xl" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Portfolio Website</h4>
                <p className="text-gray-600 text-sm">
                  Students are encouraged to create professional portfolio websites showcasing their
                  work
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CseTeaching;
