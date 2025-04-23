import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../../../utils/animations';

const CsePrograms = () => {
  return (
    <section className="py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="bg-white rounded-xl shadow-lg overflow-hidden mb-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
            <h3 className="text-2xl font-bold">Programs Offered</h3>
          </div>
          <div className="p-6 grid sm:grid-cols-2 gap-6">
            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <h4 className="text-xl font-semibold text-gray-800">
                B.Tech in Computer Science & Engineering
              </h4>
              <p className="text-gray-600 mt-2">
                4-year undergraduate program with focus on core CS concepts, programming, and
                industry applications.
              </p>
              <ul className="mt-3 space-y-1 text-gray-600 text-sm">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mt-1.5 mr-2 flex-shrink-0"></span>
                  <span>Accredited by AICTE</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mt-1.5 mr-2 flex-shrink-0"></span>
                  <span>60 seats per academic year</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mt-1.5 mr-2 flex-shrink-0"></span>
                  <span>Admission through state entrance exams</span>
                </li>
              </ul>
            </div>

            <div className="border-l-4 border-indigo-500 pl-4 py-2">
              <h4 className="text-xl font-semibold text-gray-800">M.Tech in Computer Science</h4>
              <p className="text-gray-600 mt-2">
                2-year postgraduate program with specializations in emerging technologies and
                advanced computing.
              </p>
              <ul className="mt-3 space-y-1 text-gray-600 text-sm">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-indigo-500 mt-1.5 mr-2 flex-shrink-0"></span>
                  <span>Accredited by AICTE</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-indigo-500 mt-1.5 mr-2 flex-shrink-0"></span>
                  <span>18 seats per academic year</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-indigo-500 mt-1.5 mr-2 flex-shrink-0"></span>
                  <span>Admission through GATE score & state merit</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CsePrograms;
