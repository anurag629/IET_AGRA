import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { FaUniversity, FaGraduationCap } from 'react-icons/fa';

const EceAbout = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Department Overview */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-sm font-medium mb-4">
            Established in 1998
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Department of Electronics & Communication
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
            The Department of Electronics & Communication Engineering at IET Agra is committed to
            producing competent, knowledgeable, and resourceful engineers ready for diverse
            technical careers. With state-of-the-art laboratories and experienced faculty, we offer
            a comprehensive education in electronics and communication systems.
          </p>
        </motion.div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="bg-white rounded-lg shadow-md p-4 text-center"
          >
            <CountUp
              end={1998}
              suffix=""
              duration={2.5}
              className="text-3xl font-bold text-indigo-700"
            />
            <p className="text-gray-700 mt-2 text-sm">Established</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="bg-white rounded-lg shadow-md p-4 text-center"
          >
            <CountUp
              end={12}
              suffix="+"
              duration={2.5}
              className="text-3xl font-bold text-indigo-700"
            />
            <p className="text-gray-700 mt-2 text-sm">Laboratories</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="bg-white rounded-lg shadow-md p-4 text-center"
          >
            <CountUp
              end={8}
              suffix=""
              duration={2.5}
              className="text-3xl font-bold text-indigo-700"
            />
            <p className="text-gray-700 mt-2 text-sm">Faculty Members</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="bg-white rounded-lg shadow-md p-4 text-center"
          >
            <CountUp
              end={100}
              suffix="+"
              duration={2.5}
              className="text-3xl font-bold text-indigo-700"
            />
            <p className="text-gray-700 mt-2 text-sm">Placements</p>
          </motion.div>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
          >
            <div className="h-2 bg-gradient-to-r from-indigo-500 to-purple-600"></div>
            <div className="p-8">
              <div className="flex items-center mb-6">
                <div className="flex-shrink-0">
                  <div className="bg-indigo-100 rounded-full p-3">
                    <FaUniversity className="text-2xl text-indigo-600" />
                  </div>
                </div>
                <h3 className="ml-4 text-2xl font-bold text-gray-800">Our Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To become a centre of excellence in the field of Electronics & Communication
                Engineering by providing quality education and research to produce human resource to
                cater the needs of Industry and Society.
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
            <div className="h-2 bg-gradient-to-r from-purple-500 to-indigo-600"></div>
            <div className="p-8">
              <div className="flex items-center mb-6">
                <div className="flex-shrink-0">
                  <div className="bg-purple-100 rounded-full p-3">
                    <FaGraduationCap className="text-2xl text-purple-600" />
                  </div>
                </div>
                <h3 className="ml-4 text-2xl font-bold text-gray-800">Our Mission</h3>
              </div>
              <ul className="text-gray-600 leading-relaxed space-y-2">
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>
                    To provide the state-of-the-art infrastructure and employ competent & committed
                    human resource for carrying out teaching and research.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>
                    Developing strong foundations in core areas of Electronics & Communication
                    Engineering by subsuming theory with extensive practical training and exposure
                    to industry.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Developing skilled professionals for Industry and R&D organizations.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>
                    Developing value based socially committed professionalism for the holistic
                    development.
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Department Head Message */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl shadow-lg p-8 mb-16"
        >
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/3">
              <div className="w-48 h-48 rounded-full overflow-hidden mx-auto border-4 border-white shadow-lg">
                <img
                  src="/images/eceHOD.png"
                  alt="Dr. Greesh Kumar Singh"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = '/images/eceHOD.png';
                  }}
                />
              </div>
              <div className="text-center mt-4">
                <h4 className="text-xl font-bold text-gray-800">Dr. Greesh Kumar Singh</h4>
                <p className="text-indigo-700 font-medium">Head of Department</p>
              </div>
            </div>
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b border-indigo-200 pb-2">
                Message from Department In-charge
              </h3>
              <p className="text-gray-700 leading-relaxed italic">
                "The department strives to train and empower our students who will make the world a
                better place by making use of engineering principles, techniques and systems. To
                that end, considerable initiatives have been taken to establish good laboratories in
                the areas of Electronics, Communication, Linear Integrated Circuits, Digital Signal
                Processing, Machine Learning using Python, Microprocessor and its applications,
                Embedded and VLSI design with required hardware and simulation softwares. Here, the
                students are provided with greater exposure in the core areas of Electronics &
                Communication Engineering. The students are also encouraged to participate in the
                technical activities apart from the regular curriculum."
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EceAbout;
