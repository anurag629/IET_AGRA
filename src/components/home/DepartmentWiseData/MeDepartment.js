import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import {
  FaWrench,
  FaCogs,
  FaIndustry,
  FaGraduationCap,
  FaUniversity,
  FaChartLine,
  FaDraftingCompass,
  FaTools,
  FaHardHat,
  FaSnowflake,
  FaDrawPolygon,
  FaRuler,
  FaCarBattery,
  FaChalkboardTeacher,
} from 'react-icons/fa';

// Component for Faculty Cards
const FacultyCard = ({ member }) => {
  const [showAllAchievements, setShowAllAchievements] = React.useState(false);
  const initials = `${member.name[0]}${member.name.split(' ').slice(-1)[0][0]}`;
  const hasMultipleAchievements = member.achievements && member.achievements.length > 1;

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
      className="bg-white rounded-lg shadow-md overflow-hidden p-4 border border-gray-100 hover:border-amber-200 transition-colors"
    >
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 sm:w-20 sm:h-20 mb-3 rounded-full overflow-hidden shadow-md bg-gray-100 flex items-center justify-center text-lg font-bold text-amber-600">
          {member.image ? (
            <img
              src={<FaChalkboardTeacher />}
              alt={member.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.style.display = 'none';
                e.target.parentNode.innerHTML = `<div class="flex items-center justify-center h-full w-full text-lg font-bold text-amber-600">${initials}</div>`;
              }}
            />
          ) : (
            initials
          )}
        </div>
        <h4 className="text-base font-semibold text-gray-800">{member.name}</h4>
        {member.position && <p className="text-amber-600 font-medium text-xs">{member.position}</p>}
        {member.qualification && (
          <p className="text-gray-600 text-xs mt-1">{member.qualification}</p>
        )}
        {member.email && (
          <p className="mt-1 text-xs">
            <a href={`mailto:${member.email}`} className="text-amber-500 hover:underline">
              {member.email}
            </a>
          </p>
        )}
        {member.achievements && member.achievements.length > 0 && (
          <div className="mt-3 text-left w-full bg-gray-50 rounded-md p-2">
            <h5 className="font-medium text-gray-700 text-xs mb-1 border-b border-gray-200 pb-1">
              Achievement{member.achievements.length > 1 ? 's' : ''}:
            </h5>
            <ul className="space-y-2">
              {(showAllAchievements ? member.achievements : member.achievements.slice(0, 1)).map(
                (achieve, i) => (
                  <li key={i} className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-amber-500 mt-1.5 mr-2 flex-shrink-0"></span>
                    <span className="text-xs text-gray-600">{achieve}</span>
                  </li>
                )
              )}
            </ul>

            {hasMultipleAchievements && (
              <button
                onClick={() => setShowAllAchievements(!showAllAchievements)}
                className="mt-2 text-xs text-amber-600 hover:text-amber-800 font-medium flex items-center"
              >
                {showAllAchievements ? (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 15l7-7 7 7"
                      />
                    </svg>
                    Show less
                  </>
                ) : (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                    Show all ({member.achievements.length})
                  </>
                )}
              </button>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};

function MeDepartment() {
  // Animation variant
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // Department Head
  const departmentHead = {
    name: 'Er. Shailendra Singh',
    position: 'Head of Department',
    qualification: 'Pursuing PhD, M.Tech, B.Tech',
    experience: '15+ years in academia and industry',
    email: 'me.hod@ietagra.ac.in',
    image: '/images/mehod.png', // Add image path if available
  };

  // Faculty Members Data
  const facultyMembers = [
    {
      name: 'Er. Vipin Kumar',
      position: 'Assistant Professor',
      qualification: 'M.Tech, B.Tech',
      email: 'vipin.kumar@ietagra.ac.in',
      achievements: [
        'Research focus on Manufacturing Process Optimization',
        'Published 3 papers in international journals',
      ],
    },
    {
      name: 'Er. Manish Dixit',
      position: 'Assistant Professor',
      qualification: 'M.Tech, B.Tech',
      email: 'manish.dixit@ietagra.ac.in',
      achievements: [
        'Expert in Thermal Engineering',
        'Guided 12+ student projects in renewable energy',
      ],
    },
    {
      name: 'Er. Nagendra Singh',
      position: 'Assistant Professor',
      qualification: 'Pursuing PhD, M.Tech, B.Tech',
      email: 'nagendra.singh@ietagra.ac.in',
      achievements: [
        'Research in Mechanical Vibrations',
        'Member of Indian Society of Technical Education',
      ],
    },
    {
      name: 'Er. Harvir Singh',
      position: 'Assistant Professor',
      qualification: 'Pursuing PhD, M.Tech, B.Tech',
      email: 'harvir.singh@ietagra.ac.in',
      achievements: ['Specialization in CAD/CAM', 'Industry experience with automotive design'],
    },
    {
      name: 'Er. Saurabh Pachouri',
      position: 'Workshop Superintendent',
      qualification: 'M.Tech, B.Tech',
      email: 'saurabh.pachouri@ietagra.ac.in',
      achievements: [
        'Expert in Workshop Management and Machine Operations',
        'Conducted 15+ workshops on modern machining techniques',
      ],
    },
    {
      name: 'Er. Ajeet Kumar Yadav',
      position: 'Assistant Professor',
      qualification: 'M.Tech, B.Tech',
      email: 'ajeet.kumar@ietagra.ac.in',
      achievements: [
        'Specialization in Fluid Mechanics',
        'Research in computational fluid dynamics',
      ],
    },
    {
      name: 'Er. Ajeet Singh Yadav',
      position: 'Assistant Professor',
      qualification: 'M.Tech, B.Tech',
      email: 'ajeet.singh@ietagra.ac.in',
      achievements: ['Research in Material Science', 'Active in industry-academia collaborations'],
    },
  ];

  // Laboratory Data
  const laboratories = [
    {
      name: 'Theory of Mechanics Lab',
      equipment: 'Advanced Equipment for Mechanical Testing',
      description:
        'Lab focuses on practical understanding of kinematic and dynamic principles through experiments and demonstrations.',
      icon: <FaCogs className="text-2xl text-amber-600" />,
    },
    {
      name: 'Refrigeration and Air Conditioning Lab',
      equipment: 'HVAC Systems, Refrigeration Units',
      description:
        'State-of-the-art lab for studying cooling systems, air conditioning units, and thermodynamic principles.',
      icon: <FaSnowflake className="text-2xl text-amber-600" />,
    },
    {
      name: 'Strength of Materials Lab',
      equipment: 'Material Testing Machines, Strain Gauges',
      description:
        'Equipped with testing apparatus to analyze material properties, stress-strain relationships, and failure analysis.',
      icon: <FaTools className="text-2xl text-amber-600" />,
    },
    {
      name: 'Internal Combustion Engine Lab',
      equipment: 'Engine Test Beds, Combustion Analyzers',
      description:
        'Modern lab with various engine types for performance testing, efficiency analysis, and emission studies.',
      icon: <FaCarBattery className="text-2xl text-amber-600" />,
    },
    {
      name: 'Engineering Drawing Lab',
      equipment: 'CAD Workstations, Drafting Tools',
      description:
        'Computer lab with latest CAD software for technical drawing, 3D modeling, and engineering design.',
      icon: <FaDraftingCompass className="text-2xl text-amber-600" />,
    },
    {
      name: 'CAM Lab',
      equipment: 'CNC Machines, Simulation Software',
      description:
        'Advanced lab focused on computer-aided manufacturing techniques, CNC programming, and automation.',
      icon: <FaIndustry className="text-2xl text-amber-600" />,
    },
    {
      name: 'Fluid Mechanics Lab',
      equipment: 'Hydraulic Bench, Flow Visualization Equipment',
      description:
        'Lab designed for experiments related to fluid properties, flow measurement, and hydraulic machinery.',
      icon: <FaDrawPolygon className="text-2xl text-amber-600" />,
    },
    {
      name: 'Automobile Engineering Lab',
      equipment: 'Vehicle Testing Equipment, Engine Components',
      description:
        'Dedicated to automotive technology study with components, subsystems, and vehicle performance analysis.',
      icon: <FaWrench className="text-2xl text-amber-600" />,
    },
    {
      name: 'Central Workshop',
      equipment: 'Lathes, Milling Machines, Welding Equipment',
      description:
        'Comprehensive facility with various sections for machining, welding, fitting, and metal working processes.',
      icon: <FaHardHat className="text-2xl text-amber-600" />,
    },
  ];

  // Research Areas
  const researchAreas = [
    {
      title: 'Advanced Manufacturing Processes',
      type: 'Research Focus',
      venue: 'Process Optimization Laboratory',
      description:
        'Research on novel manufacturing techniques, precision machining, and additive manufacturing to enhance production quality and efficiency.',
    },
    {
      title: 'Thermal Engineering and Energy Systems',
      type: 'Ongoing Research',
      venue: 'Thermal Engineering Lab',
      description:
        'Investigation of HVAC systems, refrigeration technologies, and energy conservation methods for sustainable and efficient thermal management.',
    },
    {
      title: 'Industrial Automation and Robotics',
      type: 'Emerging Focus',
      venue: 'Automation Lab',
      description:
        'Development of smart manufacturing systems, robotic process automation, and integration of IoT technologies in mechanical systems.',
    },
    {
      title: 'Material Science and Engineering',
      type: 'Core Research',
      venue: 'Materials Testing Lab',
      description:
        'Study of advanced materials, composite structures, and material behavior under various loading conditions for industrial applications.',
    },
  ];

  // Teaching methods
  const teachingMethods = [
    'Practical Demonstrations',
    'Industrial Visits',
    'Project-Based Learning',
    'Virtual Labs',
    'CAD/CAM Tutorials',
    'Workshop Training',
    'Research Projects',
    'Case Studies',
  ];

  return (
    <div className="bg-gradient-to-b from-gray-100 to-white min-h-screen mt-8">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-gray-800 via-amber-900 to-gray-800 text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/blueprint-grid.png')]"></div>
        </div>
        <div className="relative container mx-auto px-4 py-12 sm:py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Mechanical Engineering
            </h1>
            <div className="w-16 sm:w-24 h-1 sm:h-1.5 bg-white/50 mx-auto mb-4 sm:mb-6"></div>
            <p className="text-base sm:text-lg md:text-xl opacity-90 mb-6 sm:mb-8 max-w-3xl mx-auto px-2">
              Institute of Engineering and Technology, Swami Vivekanand Campus, Dr. Bhimrao Ambedkar
              University, Agra
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <a
                href="#about"
                className="px-4 sm:px-6 py-2 sm:py-3 bg-white text-amber-700 rounded-lg font-medium hover:bg-amber-50 transition-colors shadow-lg text-sm sm:text-base"
              >
                Explore Department
              </a>
              <a
                href="#contact"
                className="px-4 sm:px-6 py-2 sm:py-3 bg-amber-700 text-white rounded-lg font-medium hover:bg-amber-800 transition-colors shadow-lg text-sm sm:text-base mt-3 sm:mt-0"
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
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
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
                src="/images/meFaculty.png"
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
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl p-6 text-white shadow-lg"
            >
              <div className="flex justify-center mb-4">
                <div className="bg-white/20 p-3 rounded-full">
                  <FaUniversity className="text-4xl text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">Our Vision</h3>
              <p className="text-white/90 mb-6 text-center">
                To be a leading department producing innovative and entrepreneurial mechanical
                engineers who meet dynamic industrial and social needs.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl p-6 text-white shadow-lg"
            >
              <div className="flex justify-center mb-4">
                <div className="bg-white/20 p-3 rounded-full">
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
                  <span>To offer state-of-the-art infrastructure</span>
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
                  <span>To recruit competent and committed faculty for teaching and research</span>
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
                    To build a strong foundation in Mechanical Engineering by blending theory with
                    practical training and industry exposure
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-3">About the Department</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              The Department of Mechanical Engineering at IET Agra is committed to excellence in
              technical education and research. With experienced faculty, well-established
              laboratories, and a comprehensive curriculum aligned with CBCS, we prepare students
              for the challenges of modern industrial requirements.
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
                end={120}
                suffix="+"
                duration={2.5}
                className="text-3xl font-bold text-amber-600"
              />
              <p className="text-gray-600 mt-2 text-sm">Student Placements</p>
              <p className="text-xs text-gray-500">Last 3 Years</p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="bg-white rounded-lg shadow-md p-4 text-center"
            >
              <CountUp
                end={9}
                suffix=""
                duration={2.5}
                className="text-3xl font-bold text-amber-600"
              />
              <p className="text-gray-600 mt-2 text-sm">Laboratories</p>
              <p className="text-xs text-gray-500">Modern Equipment</p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="bg-white rounded-lg shadow-md p-4 text-center"
            >
              <CountUp
                end={7}
                suffix=""
                duration={2.5}
                className="text-3xl font-bold text-amber-600"
              />
              <p className="text-gray-600 mt-2 text-sm">Faculty Members</p>
              <p className="text-xs text-gray-500">Experienced Professionals</p>
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
                className="text-3xl font-bold text-amber-600"
              />
              <p className="text-gray-600 mt-2 text-sm">Research Projects</p>
              <p className="text-xs text-gray-500">Ongoing & Completed</p>
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
            <div className="bg-gradient-to-r from-amber-600 to-amber-700 p-4 sm:p-6 text-white">
              <h3 className="text-xl sm:text-2xl font-bold">Department In-Charge</h3>
            </div>
            <div className="p-4 sm:p-6 flex flex-col md:flex-row items-center gap-4 sm:gap-8">
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden shadow-lg flex-shrink-0 bg-gray-100 flex items-center justify-center text-4xl sm:text-5xl font-bold text-amber-600">
                {departmentHead.image ? (
                  <img
                    src={departmentHead.image}
                    alt={departmentHead.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null; // Prevent infinite loop
                      e.target.src = ''; // Clear the src
                      e.target.style.display = 'none';
                      e.target.parentNode.innerHTML = `<div class="text-4xl sm:text-5xl font-bold text-amber-600">SS</div>`;
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
                <p className="text-amber-600 font-medium mb-3">{departmentHead.position}</p>
                <div className="space-y-2 text-gray-600">
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
                      className="text-amber-500 hover:underline break-words"
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
                <div className="w-20 sm:w-24 h-1 bg-amber-500 mx-auto mb-4"></div>
                <p className="text-gray-600 max-w-3xl mx-auto text-sm">
                  Our dedicated faculty bring extensive academic knowledge and industry experience
                  to provide comprehensive education in mechanical engineering.
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
            <div className="bg-gradient-to-r from-amber-600 to-amber-700 p-6 text-white">
              <h3 className="text-2xl font-bold">Programs Offered</h3>
            </div>
            <div className="p-6 grid sm:grid-cols-2 gap-6">
              <div className="border-l-4 border-amber-500 pl-4 py-2">
                <h4 className="text-xl font-semibold text-gray-800">
                  B.Tech in Mechanical Engineering
                </h4>
                <p className="text-gray-600 mt-2">
                  4-year undergraduate program focused on core mechanical engineering concepts,
                  design, manufacturing, and industrial applications.
                </p>
              </div>

              <div className="border-l-4 border-gray-700 pl-4 py-2">
                <h4 className="text-xl font-semibold text-gray-800">
                  M.Tech in Mechanical Engineering
                </h4>
                <p className="text-gray-600 mt-2">
                  2-year postgraduate program with specializations in advanced design, thermal
                  engineering, manufacturing technology, and industrial engineering.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Laboratories Section */}
      <section id="labs" className="py-12 sm:py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">Our Laboratories</h2>
            <div className="w-20 sm:w-24 h-1 bg-amber-500 mx-auto mb-4 sm:mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base">
              We maintain 9 modern, well-equipped laboratories with advanced equipment for practical
              learning, experiments, and research in various fields of mechanical engineering.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {laboratories.map((lab, index) => (
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
                <p className="text-xs sm:text-sm text-amber-600 font-medium mb-2 sm:mb-3 text-center sm:text-left">
                  {lab.equipment}
                </p>
                <p className="text-gray-600 text-sm sm:text-base text-center sm:text-left">
                  {lab.description}
                </p>

                {/* Placeholder for lab images */}
                <div className="mt-4 bg-gray-100 h-32 rounded-md flex items-center justify-center text-gray-400">
                  <span className="text-xs text-center">Lab Equipment Image</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Methodologies */}
      <section
        id="teaching"
        className="py-16 px-4 bg-gradient-to-br from-amber-50 via-gray-50 to-white"
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
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our teaching approach combines theoretical knowledge with hands-on practical training
              to ensure students develop both conceptual understanding and technical skills.
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
            <h3 className="text-xl font-bold text-gray-800 mb-4">Focus Areas</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="bg-amber-100 p-2 rounded-lg mr-4">
                  <FaIndustry className="text-amber-600 text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Industrial Automation</h4>
                  <p className="text-gray-600 text-sm">
                    Training in automation technologies, PLC programming, and Industry 4.0 concepts
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-amber-100 p-2 rounded-lg mr-4">
                  <FaCogs className="text-amber-600 text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">CAD/CAM & Additive Manufacturing</h4>
                  <p className="text-gray-600 text-sm">
                    Advanced training in design, 3D modeling, and modern manufacturing techniques
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-amber-100 p-2 rounded-lg mr-4">
                  <FaChartLine className="text-amber-600 text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">
                    Machine Learning & AI Applications
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Applying ML and AI in mechanical systems, predictive maintenance, and process
                    optimization
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-amber-100 p-2 rounded-lg mr-4">
                  <FaRuler className="text-amber-600 text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Non-Destructive Testing (NDT)</h4>
                  <p className="text-gray-600 text-sm">
                    Training in advanced testing methods for materials and component analysis
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
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our faculty and students engage in research across various domains of mechanical
              engineering, addressing industrial challenges and developing innovative solutions.
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
                    ? 'bg-gradient-to-br from-amber-500 to-amber-700'
                    : index % 4 === 1
                    ? 'bg-gradient-to-br from-gray-700 to-gray-900'
                    : index % 4 === 2
                    ? 'bg-gradient-to-br from-amber-600 to-amber-800'
                    : 'bg-gradient-to-br from-gray-600 to-gray-800'
                }`}
              >
                <h3 className="text-xl font-bold mb-2">{research.title}</h3>
                <div className="bg-white/20 rounded px-3 py-1 text-sm inline-block mb-3">
                  {research.type}
                </div>
                <p className="font-medium mb-3 text-white/90">{research.venue}</p>
                <p className="text-white/80 text-sm">{research.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-16 px-4 bg-gradient-to-r from-gray-900 to-amber-900 text-white"
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
            <div className="w-24 h-1 bg-amber-400 mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-amber-100">
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
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
            >
              <div className="flex items-start">
                <div className="bg-amber-100 p-3 rounded-full mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-amber-600"
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
                  <p className="text-amber-100 mb-1 break-words">me.hod@ietagra.ac.in</p>
                  <p className="text-amber-100 break-words">me.office@ietagra.ac.in</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
            >
              <div className="flex items-start">
                <div className="bg-amber-100 p-3 rounded-full mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-amber-600"
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
                  <p className="text-amber-100 mb-1">+91 562-2570450</p>
                  <p className="text-amber-100">+91 562-2570451</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
            >
              <div className="flex items-start">
                <div className="bg-amber-100 p-3 rounded-full mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-amber-600"
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
                  <p className="text-amber-100">Department of Mechanical Engineering,</p>
                  <p className="text-amber-100">IET Campus, Swami Vivekanand Campus</p>
                  <p className="text-amber-100">Dr. B.R. Ambedkar University, Agra - 282002</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MeDepartment;
