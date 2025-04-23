import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import {
  FaMicrochip,
  FaWifi,
  FaSatelliteDish,
  FaChalkboardTeacher,
  FaGraduationCap,
  FaUniversity,
  FaChartLine,
  FaLaptopCode,
  FaMobileAlt,
  FaNetworkWired,
  FaRobot,
  FaBroadcastTower,
  FaServer,
  FaCircle,
  FaSitemap,
  FaRegLightbulb,
} from 'react-icons/fa';
import { LuCircuitBoard } from 'react-icons/lu';

// Simplified Faculty Card Component without achievements
const FacultyCard = ({ member }) => {
  const initials = `${member.name[0]}${member.name.split(' ').slice(-1)[0][0]}`;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
      className="bg-white rounded-lg shadow-md overflow-hidden p-4 border border-gray-200 hover:border-purple-400 transition-colors"
    >
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 sm:w-20 sm:h-20 mb-3 rounded-full overflow-hidden shadow-md bg-purple-100 flex items-center justify-center text-lg font-bold text-purple-700">
          {member.image ? (
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.style.display = 'none';
                e.target.parentNode.innerHTML = `<div class="flex items-center justify-center h-full w-full text-lg font-bold text-purple-700">${initials}</div>`;
              }}
            />
          ) : (
            initials
          )}
        </div>
        <h4 className="text-base font-semibold text-gray-800">{member.name}</h4>
        {member.position && (
          <p className="text-purple-700 font-medium text-xs">{member.position}</p>
        )}
        {member.qualification && (
          <p className="text-gray-600 text-xs mt-1">{member.qualification}</p>
        )}
        {member.email && (
          <p className="mt-1 text-xs">
            <a href={`mailto:${member.email}`} className="text-purple-600 hover:underline">
              {member.email}
            </a>
          </p>
        )}
      </div>
    </motion.div>
  );
};

function EceDepartment() {
  // Animation variant
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // Department Head
  const departmentHead = {
    name: 'Dr. Greesh Kumar Singh',
    position: 'Head of Department',
    qualification: 'PhD, M.Tech, B.Tech',
    experience: '15+ years in academia and industry',
    email: 'ece.hod@ietagra.ac.in',
    image: '/images/eceHOD.png', // Add image path if available
  };

  // Faculty Members Data (without achievements)
  const facultyMembers = [
    {
      name: 'Dr. Mukesh Kumar Baghel',
      position: 'Assistant Professor',
      qualification: 'PhD, M.Tech, B.Tech',
      email: 'mukesh.baghel@ietagra.ac.in',
    },
    {
      name: 'Er. Amol Kumar',
      position: 'Assistant Professor',
      qualification: 'M.Tech, B.Tech',
      email: 'amol.kumar@ietagra.ac.in',
    },
    {
      name: 'Er. Ajay Yadav',
      position: 'Assistant Professor',
      qualification: 'MBA, B.Tech',
      email: 'ajay.yadav@ietagra.ac.in',
    },
    {
      name: 'Dr. Shilpi Lavania',
      position: 'Assistant Professor',
      qualification: 'M.Tech',
      email: 'shilpi.lavania@ietagra.ac.in',
    },
    {
      name: 'Er. Dheeraj Singh',
      position: 'Assistant Professor',
      qualification: 'M.Tech, B.Tech',
      email: 'dheeraj.singh@ietagra.ac.in',
    },
    {
      name: 'Er. Ashish Sharma',
      position: 'Assistant Professor',
      qualification: 'PhD, M.Tech, B.Tech',
      email: 'ashish.sharma@ietagra.ac.in',
    },
    {
      name: 'Er. Ankita Maheswari',
      position: 'Assistant Professor',
      qualification: 'M.Tech, B.Tech',
      email: 'ankita.maheswari@ietagra.ac.in',
    },
    {
      name: 'Er. Mayanka Saket',
      position: 'Assistant Professor',
      qualification: 'M.Tech, B.Tech',
      email: 'mayanka.saket@ietagra.ac.in',
    },
  ];

  // Laboratory Data
  const laboratories = [
    {
      name: 'Basic Electronics Engineering Lab',
      equipment: 'Oscilloscopes, Signal Generators, Multi-meters',
      description:
        'Fundamental lab for understanding basic electronic components, circuits, and experimental validation of basic electronics principles.',
      icon: <LuCircuitBoard className="text-2xl text-purple-700" />,
    },
    {
      name: 'Digital Electronics Lab',
      equipment: 'Logic Analyzers, Digital ICs, FPGA Kits',
      description:
        'Advanced lab for designing and implementing digital circuits, sequential logic, and digital system architecture.',
      icon: <FaCircle className="text-2xl text-purple-700" />,
    },
    {
      name: 'Microprocessor Lab',
      equipment: 'Microprocessor Kits, Embedded System Boards',
      description:
        'Lab focused on microprocessor architecture, assembly language programming, and interfacing with peripheral devices.',
      icon: <FaMicrochip className="text-2xl text-purple-700" />,
    },
    {
      name: 'Electronic Devices and Circuit Lab',
      equipment: 'Semiconductor Device Testers, Circuit Simulation Tools',
      description:
        'Comprehensive lab for studying semiconductor devices, transistor circuits, and electronic circuit design.',
      icon: <FaServer className="text-2xl text-purple-700" />,
    },
    {
      name: 'PCB Design Lab',
      equipment: 'PCB Design Software, Fabrication Equipment',
      description:
        'Modern lab with tools for printed circuit board design, simulation, fabrication, and testing.',
      icon: <FaSitemap className="text-2xl text-purple-700" />,
    },
    {
      name: 'Electronic Measurement and Instrumentation Lab',
      equipment: 'Precision Measurement Instruments, Sensor Systems',
      description:
        'Lab equipped with various instruments for electrical and electronic measurements, calibration, and error analysis.',
      icon: <FaRegLightbulb className="text-2xl text-purple-700" />,
    },
    {
      name: 'Linear Integrated Circuit Lab',
      equipment: 'Op-Amp Kits, Analog IC Testing Equipment',
      description:
        'Specialized lab for designing and testing linear integrated circuits, operational amplifiers, and analog signal processing.',
      icon: <FaLaptopCode className="text-2xl text-purple-700" />,
    },
    {
      name: 'Analog Communication Lab',
      equipment: 'Modulators, Demodulators, Spectrum Analyzers',
      description:
        'Lab focusing on analog modulation techniques, radio frequency circuits, and communication system analysis.',
      icon: <FaBroadcastTower className="text-2xl text-purple-700" />,
    },
    {
      name: 'Digital Signal Processing Lab',
      equipment: 'DSP Processors, Real-time Signal Processing Tools',
      description:
        'Advanced lab for implementing digital signal processing algorithms, filters, and real-time applications.',
      icon: <FaChartLine className="text-2xl text-purple-700" />,
    },
    {
      name: 'Digital Communication Lab',
      equipment: 'Digital Modulation Systems, Error Correction Tools',
      description:
        'Dedicated to digital modulation techniques, coding theory, and digital communication system design.',
      icon: <FaNetworkWired className="text-2xl text-purple-700" />,
    },
    {
      name: 'Wireless & Mobile Communication Lab',
      equipment: 'Wireless System Analyzers, Mobile Communication Equipment',
      description:
        'State-of-the-art lab for wireless protocols, cellular technologies, and mobile communication standards.',
      icon: <FaWifi className="text-2xl text-purple-700" />,
    },
    {
      name: 'Optical Communication Lab',
      equipment: 'Fiber Optic Components, Optical Test Benches',
      description:
        'Lab equipped with optical fiber systems, light sources, detectors, and optical communication network elements.',
      icon: <FaSatelliteDish className="text-2xl text-purple-700" />,
    },
  ];

  // Research Areas
  const researchAreas = [
    {
      title: 'VLSI Design and Embedded Systems',
      type: 'Research Focus',
      venue: 'Microelectronics Lab',
      description:
        'Design and development of integrated circuits, System-on-Chip architectures, and embedded system applications for various domains.',
    },
    {
      title: 'Wireless and Mobile Communications',
      type: 'Ongoing Research',
      venue: 'Communication Systems Lab',
      description:
        'Research on 5G technologies, wireless protocols, mobile network optimization, and antenna design for improved connectivity.',
    },
    {
      title: 'Signal Processing and IoT Applications',
      type: 'Emerging Focus',
      venue: 'Signal Processing Lab',
      description:
        'Advanced signal processing techniques for communications, biomedical applications, and integration with Internet of Things technologies.',
    },
    {
      title: 'Optical Fiber Communications',
      type: 'Core Research',
      venue: 'Optical Communications Lab',
      description:
        'Development of fiber optic communication systems, wavelength division multiplexing, and optical network technologies for high-speed data transmission.',
    },
  ];

  // Teaching methods
  const teachingMethods = [
    'Circuit Simulation',
    'Hardware Lab Sessions',
    'Project-Based Learning',
    'Industry Case Studies',
    'MATLAB Programming',
    'PCB Design Workshops',
    'Research Projects',
    'Virtual Labs',
  ];

  return (
    <div className="bg-gradient-to-b from-purple-100 to-white min-h-screen mt-8">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-purple-800 via-indigo-900 to-purple-800 text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')]"></div>
        </div>
        <div className="relative container mx-auto px-4 py-12 sm:py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Electronics & Communication Engineering
            </h1>
            <div className="w-16 sm:w-24 h-1 sm:h-1.5 bg-white/70 mx-auto mb-4 sm:mb-6"></div>
            <p className="text-base sm:text-lg md:text-xl opacity-90 mb-6 sm:mb-8 max-w-3xl mx-auto px-2">
              Institute of Engineering and Technology, Swami Vivekanand Campus, Dr. Bhimrao Ambedkar
              University, Agra
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <a
                href="#about"
                className="px-4 sm:px-6 py-2 sm:py-3 bg-white text-indigo-800 rounded-lg font-medium hover:bg-indigo-50 transition-colors shadow-lg text-sm sm:text-base"
              >
                Explore Department
              </a>
              <a
                href="#contact"
                className="px-4 sm:px-6 py-2 sm:py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors shadow-lg text-sm sm:text-base mt-3 sm:mt-0"
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

      {/* Department Staff Photo Section */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-8"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
              Our Department Team
            </h2>
            <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6"></div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="rounded-xl overflow-hidden shadow-lg"
          >
            {/* You would replace this with the actual department staff image */}
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src="/images/eceFaculty.png"
                alt="Electronics & Communication Engineering Department Faculty Group"
                className="w-full h-auto"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.style.display = 'none';
                  e.target.parentNode.innerHTML = `
                    <div className="bg-gray-200 w-full h-64 md:h-96 flex items-center justify-center text-gray-500">
                      <div className="text-center px-4">
                        <FaChalkboardTeacher className="text-5xl mx-auto mb-4 text-indigo-700" />
                        <p className="text-lg font-medium">Electronics & Communication Engineering Department Faculty</p>
                        <p className="text-sm">Group photograph of our dedicated teaching staff</p>
                      </div>
                    </div>
                  `;
                }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section id="vision" className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-3">Vision & Mission</h2>
            <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-xl p-6 text-white shadow-lg"
            >
              <div className="flex justify-center mb-4">
                <div className="bg-white/30 p-3 rounded-full">
                  <FaUniversity className="text-4xl text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">Our Vision</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    To become a center of excellence in Electronics & Communication Engineering
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    To provide quality education and research for industry and societal needs
                  </span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="bg-gradient-to-br from-purple-700 to-purple-800 rounded-xl p-6 text-white shadow-lg"
            >
              <div className="flex justify-center mb-4">
                <div className="bg-white/30 p-3 rounded-full">
                  <FaGraduationCap className="text-4xl text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">Our Mission</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Provide state-of-the-art infrastructure</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Employ skilled and dedicated faculty</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    Build a solid foundation in electronics and communication through hands-on
                    practical training and industry exposure
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-gray-100">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-3">About the Department</h2>
            <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-3xl mx-auto">
              The Department of Electronics & Communication Engineering at IET Agra is committed to
              producing competent, knowledgeable, and resourceful engineers ready for diverse
              technical careers. With state-of-the-art laboratories and experienced faculty, we
              offer a comprehensive education in electronics and communication systems.
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
                end={130}
                suffix="+"
                duration={2.5}
                className="text-3xl font-bold text-indigo-700"
              />
              <p className="text-gray-700 mt-2 text-sm">Student Placements</p>
              <p className="text-xs text-gray-600">Last 3 Years</p>
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
                suffix=""
                duration={2.5}
                className="text-3xl font-bold text-indigo-700"
              />
              <p className="text-gray-700 mt-2 text-sm">Laboratories</p>
              <p className="text-xs text-gray-600">Modern Equipment</p>
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
              <p className="text-xs text-gray-600">Experienced Professionals</p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="bg-white rounded-lg shadow-md p-4 text-center"
            >
              <CountUp
                end={15}
                suffix="+"
                duration={2.5}
                className="text-3xl font-bold text-indigo-700"
              />
              <p className="text-gray-700 mt-2 text-sm">Research Projects</p>
              <p className="text-xs text-gray-600">Ongoing & Completed</p>
            </motion.div>
          </div>

          {/* Department In-Charge Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="bg-white rounded-xl shadow-lg overflow-hidden mb-16"
          >
            <div className="bg-gradient-to-r from-indigo-600 to-purple-700 p-4 sm:p-6 text-white">
              <h3 className="text-xl sm:text-2xl font-bold">Department In-Charge</h3>
            </div>
            <div className="p-4 sm:p-6 flex flex-col md:flex-row items-center gap-4 sm:gap-8">
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden shadow-lg flex-shrink-0 bg-indigo-100 flex items-center justify-center text-4xl sm:text-5xl font-bold text-indigo-700">
                {departmentHead.image ? (
                  <img
                    src={departmentHead.image}
                    alt={departmentHead.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null; // Prevent infinite loop
                      e.target.src = ''; // Clear the src
                      e.target.style.display = 'none';
                      e.target.parentNode.innerHTML = `<div class="text-4xl sm:text-5xl font-bold text-indigo-700">GS</div>`;
                    }}
                  />
                ) : (
                  `${departmentHead.name[0]}${departmentHead.name.split(' ').slice(-1)[0][0]}`
                )}
              </div>
              <div className="flex-1 text-center md:text-left">
                <h4 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">
                  {departmentHead.name}
                </h4>
                <p className="text-indigo-700 font-medium mb-3">{departmentHead.position}</p>
                <div className="space-y-2 text-gray-700">
                  <p>
                    <strong>Qualification:</strong> {departmentHead.qualification}
                  </p>
                  <p>
                    <strong>Experience:</strong> {departmentHead.experience}
                  </p>
                  <p>
                    <strong>Email:</strong>{' '}
                    <a
                      href={`mailto:${departmentHead.email}`}
                      className="text-indigo-600 hover:underline break-words"
                    >
                      {departmentHead.email}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Faculty Members Section */}
          <section id="faculty" className="py-8 sm:py-12 px-4 bg-white rounded-xl shadow-lg mb-16">
            <div className="container mx-auto max-w-6xl">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="text-center mb-8"
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
                  Meet Our Faculty
                </h2>
                <div className="w-20 sm:w-24 h-1 bg-indigo-600 mx-auto mb-4"></div>
                <p className="text-gray-700 max-w-3xl mx-auto text-sm">
                  Our dedicated faculty bring extensive academic knowledge and industry experience
                  to provide comprehensive education in electronics and communication engineering.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {facultyMembers.map((member, index) => (
                  <FacultyCard key={index} member={member} />
                ))}
              </div>
            </div>
          </section>

          {/* Programs Offered */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="bg-white rounded-xl shadow-lg overflow-hidden mb-16"
          >
            <div className="bg-gradient-to-r from-indigo-600 to-purple-700 p-6 text-white">
              <h3 className="text-2xl font-bold">Programs Offered</h3>
            </div>
            <div className="p-6 grid sm:grid-cols-2 gap-6">
              <div className="border-l-4 border-indigo-600 pl-4 py-2">
                <h4 className="text-xl font-semibold text-gray-800">
                  B.Tech in Electronics & Communication Engineering
                </h4>
                <p className="text-gray-700 mt-2">
                  4-year undergraduate program focused on electronic circuits, communication
                  systems, signal processing, and modern telecommunications.
                </p>
              </div>

              <div className="border-l-4 border-purple-600 pl-4 py-2">
                <h4 className="text-xl font-semibold text-gray-800">
                  M.Tech in Electronics & Communication
                </h4>
                <p className="text-gray-700 mt-2">
                  2-year postgraduate program with specializations in communication systems, VLSI
                  design, embedded systems, and signal processing.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Laboratories Section */}
      <section id="labs" className="py-12 sm:py-16 px-4 bg-gray-100">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">Our Laboratories</h2>
            <div className="w-20 sm:w-24 h-1 bg-indigo-600 mx-auto mb-4 sm:mb-6"></div>
            <p className="text-gray-700 max-w-3xl mx-auto text-sm sm:text-base">
              We maintain 12 modern, well-equipped laboratories with advanced equipment for
              practical learning, experimentation, and research in various domains of electronics
              and communication engineering.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {laboratories.slice(0, 6).map((lab, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
                className="bg-white rounded-xl shadow-md p-4 sm:p-6"
              >
                <div className="mb-3 sm:mb-4 flex justify-center sm:justify-start">{lab.icon}</div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 text-center sm:text-left">
                  {lab.name}
                </h3>
                <p className="text-xs sm:text-sm text-indigo-700 font-medium mb-2 sm:mb-3 text-center sm:text-left">
                  {lab.equipment}
                </p>
                <p className="text-gray-700 text-sm sm:text-base text-center sm:text-left">
                  {lab.description}
                </p>

                {/* Placeholder for lab images */}
                <div className="mt-4 bg-gray-200 h-32 rounded-md flex items-center justify-center text-gray-500">
                  <span className="text-xs text-center">Lab Equipment Image</span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mt-8 text-center"
          >
            <button className="px-4 sm:px-6 py-2 sm:py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors text-sm sm:text-base shadow-md">
              View All Laboratories
            </button>
          </motion.div>
        </div>
      </section>

      {/* Teaching Methodologies */}
      <section
        id="teaching"
        className="py-16 px-4 bg-gradient-to-br from-indigo-50 via-gray-50 to-white"
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
            <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Our teaching approach combines theoretical knowledge with hands-on practical training
              to ensure students develop both conceptual understanding and technical skills for the
              electronics and communication industry.
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
                className="bg-white rounded-lg p-4 shadow-md text-center border border-gray-200"
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
            <h3 className="text-xl font-bold text-gray-800 mb-4">Focus Areas</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="bg-indigo-100 p-2 rounded-lg mr-4">
                  <FaMicrochip className="text-xl text-indigo-700" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">VLSI and Embedded Systems</h4>
                  <p className="text-gray-700 text-sm">
                    Integrated circuit design, microcontroller programming, and system-on-chip
                    applications
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-indigo-100 p-2 rounded-lg mr-4">
                  <FaWifi className="text-xl text-indigo-700" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Wireless Communication</h4>
                  <p className="text-gray-700 text-sm">
                    5G technologies, wireless networks, mobile communications, and IoT connectivity
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-indigo-100 p-2 rounded-lg mr-4">
                  <FaMobileAlt className="text-xl text-indigo-700" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Signal Processing Applications</h4>
                  <p className="text-gray-700 text-sm">
                    Digital signal processing, image processing, and signal analysis techniques
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-indigo-100 p-2 rounded-lg mr-4">
                  <FaRobot className="text-xl text-indigo-700" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">IoT and Automation</h4>
                  <p className="text-gray-700 text-sm">
                    Internet of Things applications, smart systems, and electronic automation
                    solutions
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-3">Research Areas</h2>
            <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Our faculty and students engage in research across various domains of electronics and
              communication engineering, addressing technological challenges and developing
              innovative solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {researchAreas.map((research, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className={`rounded-xl p-6 text-white shadow-lg ${
                  index % 4 === 0
                    ? 'bg-gradient-to-br from-indigo-600 to-indigo-800'
                    : index % 4 === 1
                    ? 'bg-gradient-to-br from-purple-600 to-purple-800'
                    : index % 4 === 2
                    ? 'bg-gradient-to-br from-indigo-700 to-indigo-900'
                    : 'bg-gradient-to-br from-purple-700 to-purple-900'
                }`}
              >
                <h3 className="text-xl font-bold mb-2">{research.title}</h3>
                <div className="bg-white/30 rounded px-3 py-1 text-sm inline-block mb-3">
                  {research.type}
                </div>
                <p className="font-medium mb-3 text-white">{research.venue}</p>
                <p className="text-white text-sm">{research.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-16 px-4 bg-gradient-to-r from-indigo-900 to-purple-900 text-white"
      >
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-3">Contact Us</h2>
            <div className="w-24 h-1 bg-indigo-400 mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-white">
              Have questions about our programs, research opportunities, or admissions? Reach out to
              us!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="bg-white/20 backdrop-blur-sm rounded-xl p-6 shadow-md"
            >
              <div className="flex items-start">
                <div className="bg-indigo-100 p-3 rounded-full mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-indigo-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Email</h3>
                  <p className="text-white mb-1 break-words">ece.hod@ietagra.ac.in</p>
                  <p className="text-white break-words">ece.office@ietagra.ac.in</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="bg-white/20 backdrop-blur-sm rounded-xl p-6 shadow-md"
            >
              <div className="flex items-start">
                <div className="bg-indigo-100 p-3 rounded-full mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-indigo-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Phone</h3>
                  <p className="text-white mb-1">+91 562-2570450</p>
                  <p className="text-white">+91 562-2570451</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="bg-white/20 backdrop-blur-sm rounded-xl p-6 shadow-md"
            >
              <div className="flex items-start">
                <div className="bg-indigo-100 p-3 rounded-full mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-indigo-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Location</h3>
                  <p className="text-white">
                    Department of Electronics & Communication Engineering,
                  </p>
                  <p className="text-white">IET Campus, Swami Vivekanand Campus</p>
                  <p className="text-white">Dr. B.R. Ambedkar University, Agra - 282002</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default EceDepartment;
