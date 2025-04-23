import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../../../utils/animations';
import { FaUserShield, FaChalkboardTeacher, FaUserGraduate, FaUsers } from 'react-icons/fa';

const CseWomenCell = () => {
  const FunctionCard = ({ icon, title, description }) => (
    <motion.div
      whileHover={{ y: -5, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)' }}
      className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500 relative overflow-hidden"
    >
      {/* Subtle texture overlay with blur and gradient stroke */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-0 right-0 w-32 h-32 opacity-10 filter blur-sm"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <linearGradient id="gradient1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#6366f1" />
            </linearGradient>
          </defs>
          <path
            d="M0 50 Q25 25, 50 50 T 100 50 T 150 50"
            stroke="url(#gradient1)"
            strokeWidth="8"
            fill="none"
          />
          <path
            d="M0 70 Q25 45, 50 70 T 100 70 T 150 70"
            stroke="url(#gradient1)"
            strokeWidth="8"
            fill="none"
          />
        </svg>
      </motion.div>

      <div className="flex items-start relative z-10">
        <div className="bg-blue-50 p-3 rounded-lg mr-4 shadow-sm">{icon}</div>
        <div>
          <h4 className="font-bold text-gray-800 mb-2">{title}</h4>
          <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="women-cell" className="py-16 px-4 bg-gray-50 relative overflow-hidden">
      {/* Atmospheric overlay background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 via-transparent to-transparent opacity-10 z-0 pointer-events-none" />

      {/* Animated and enhanced SVG background (top right) */}
      <motion.div
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-0 right-0 w-96 h-96 opacity-10 filter blur-sm"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <linearGradient id="circleGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#6366f1" />
            </linearGradient>
          </defs>
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="url(#circleGradient)"
            strokeWidth="8"
            fill="none"
          />
          <circle
            cx="50"
            cy="50"
            r="25"
            stroke="url(#circleGradient)"
            strokeWidth="8"
            fill="none"
          />
        </svg>
      </motion.div>

      {/* Animated and enhanced SVG background (bottom left) */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-0 left-0 w-96 h-96 opacity-10 filter blur-sm"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <linearGradient id="rectGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#6366f1" />
            </linearGradient>
          </defs>
          <rect
            x="10"
            y="10"
            width="80"
            height="80"
            stroke="url(#rectGradient)"
            strokeWidth="8"
            fill="none"
            rx="15"
          />
          <rect
            x="30"
            y="30"
            width="40"
            height="40"
            stroke="url(#rectGradient)"
            strokeWidth="8"
            fill="none"
            rx="10"
          />
        </svg>
      </motion.div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mb-12 relative"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-3">CSE Department Women Cell</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            A dedicated body within IET Khandari, Agra that promotes gender equality, empowers
            women, and ensures a safe and supportive environment for female students, faculty, and
            staff.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="col-span-1 lg:col-span-2 bg-white rounded-xl shadow-md overflow-hidden relative"
          >
            {/* Subtle corner texture */}
            <div className="absolute top-0 left-0 w-32 h-32 opacity-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                className="w-full h-full text-blue-600"
              >
                <path d="M0 0 L100 0 L100 100" stroke="currentColor" strokeWidth="12" fill="none" />
              </svg>
            </div>

            <div className="p-8 relative z-10">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b border-gray-100 pb-2">
                About Our Women Cell
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                The Women Cell at the Computer Science & Engineering Department of IET Khandari
                plays a crucial role in addressing issues related to women's rights, safety, and
                well-being. We are committed to creating an inclusive academic environment where
                every female student and faculty member can thrive professionally and personally.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Through various initiatives, workshops, and support systems, we aim to foster
                leadership qualities, build confidence, and provide equal opportunities for women in
                technology. Our cell actively collaborates with industry partners to create
                networking and mentorship opportunities specifically for women pursuing careers in
                computer science and technology.
              </p>

              <div className="mt-6">
                <a
                  href="#contact"
                  className="inline-flex items-center px-5 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-md hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 shadow-md"
                >
                  Contact Women Cell
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl overflow-hidden shadow-md text-white p-8 flex flex-col justify-center relative"
          >
            {/* Subtle pattern overlay */}
            <div className="absolute inset-0 opacity-10">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>

            <h3 className="text-xl font-bold mb-4 border-b border-white/20 pb-2 relative z-10">
              Our Vision
            </h3>
            <p className="text-white/90 mb-6 leading-relaxed relative z-10">
              To create a gender-inclusive environment in technical education where women are
              empowered to reach their full potential in the field of computer science and
              engineering.
            </p>
            <h3 className="text-xl font-bold mb-4 border-b border-white/20 pb-2 relative z-10">
              Our Mission
            </h3>
            <p className="text-white/90 leading-relaxed relative z-10">
              To provide support, mentorship, and opportunities that enable women to excel in
              technology careers through continuous learning, leadership development, and community
              building.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="relative"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Key Functions of Our Women Cell
          </h3>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-8 rounded-full"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <FunctionCard
              icon={<FaUserShield className="text-blue-600 text-2xl" />}
              title="Grievance Redressal"
              description="IET provides a safe space for women to report complaints of harassment, discrimination, or any other issues they may face. All complaints are handled with strict confidentiality and prompt action."
            />

            <FunctionCard
              icon={<FaChalkboardTeacher className="text-blue-600 text-2xl" />}
              title="Awareness Campaigns"
              description="IET organizes workshops, seminars, and talks to raise awareness about women's rights, gender equality, and issues such as sexual harassment and violence within the technology sector."
            />

            <FunctionCard
              icon={<FaUserGraduate className="text-blue-600 text-2xl" />}
              title="Mentoring Programs"
              description="Connects female students and faculty with mentors in the computer science field to provide guidance, support, and career development opportunities in technology."
            />

            <FunctionCard
              icon={<FaUsers className="text-blue-600 text-2xl" />}
              title="Empowerment Initiatives"
              description="IET college faculty put special efforts by conducting activities to enhance women's self-esteem, confidence, and leadership skills with a focus on technology and computer science domains."
            />
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mt-12 bg-white rounded-xl shadow-md p-8 border border-gray-100 relative overflow-hidden"
        >
          {/* Decorative corner elements */}
          <div className="absolute top-0 right-0 w-24 h-24 opacity-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              className="w-full h-full text-blue-600"
            >
              <circle cx="100" cy="0" r="40" stroke="currentColor" strokeWidth="8" fill="none" />
            </svg>
          </div>
          <div className="absolute bottom-0 left-0 w-24 h-24 opacity-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              className="w-full h-full text-blue-600"
            >
              <circle cx="0" cy="100" r="40" stroke="currentColor" strokeWidth="8" fill="none" />
            </svg>
          </div>

          <div className="relative z-10">
            <h3 className="text-xl font-bold text-gray-800 mb-4 border-b border-gray-100 pb-2">
              Recent Initiatives
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-600 p-1 rounded-full mr-3 mt-1 shadow-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <div>
                  <h4 className="font-medium text-gray-800">Women in Tech Symposium</h4>
                  <p className="text-sm text-gray-600">
                    Annual event featuring women leaders from major technology companies sharing
                    their experiences and insights.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-600 p-1 rounded-full mr-3 mt-1 shadow-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <div>
                  <h4 className="font-medium text-gray-800">Code Her Way</h4>
                  <p className="text-sm text-gray-600">
                    Coding competitions and hackathons specifically designed for female students to
                    showcase their programming skills.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-600 p-1 rounded-full mr-3 mt-1 shadow-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <div>
                  <h4 className="font-medium text-gray-800">Mentorship Program</h4>
                  <p className="text-sm text-gray-600">
                    Connecting female students with industry professionals and alumni for career
                    guidance and support.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CseWomenCell;
