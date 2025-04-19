import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import {
  FaChalkboardTeacher,
  FaFlask,
  FaLaptopCode,
  FaGraduationCap,
  FaAward,
  FaChartLine,
  FaServer,
  FaDatabase,
  FaPython,
  FaJava,
  FaCode,
  FaCogs,
  FaGithub,
  FaLinkedin,
  FaUserGraduate,
  FaUsers,
  FaUniversity,
  FaBookReader,
  FaCertificate,
  FaBuilding,
  FaFemale,
  FaChalkboard,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

function CseDepartment() {
  // Fade in animation for sections
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  // Department In-Charge
  const departmentHead = {
    name: 'Dr. Rajesh Lavania',
    position: 'Department In-Charge',
    qualification: 'PhD, M.Tech, B.Tech',
    experience: '22 years of teaching experience',
    image: '/images/cseHOD.jpg', // You'll need to add this image
    email: 'cse.hod@ietagra.ac.in', // Placeholder email, replace with actual
  };

  // Faculty members
  const facultyMembers = [
    {
      name: 'Er. Saurabh Garg',
      position: 'Assistant Professor',
      specialization: 'Digital Electronics',
      image: '/images/faculty/faculty_placeholder.jpg',
      email: 'faculty@ietagra.ac.in',
      achievements: [
        'Has qualified GATE five times',
        'Completed 3 MOOC courses on NPTEL',
        'Actively contributed to development and teaching using virtual labs and simulators',
      ],
    },
    {
      name: 'Er. Prashant Maharishi',
      position: 'Assistant Professor',
      specialization: 'DBMS',
      image: '/images/faculty/faculty_placeholder.jpg',
      email: 'faculty@ietagra.ac.in',
      achievements: [
        'Participated in EBOOTATHAN (2021) with students',
        'Awarded Gold Developer Certificate by IIT Kanpur and AKTU Lucknow',
        'Co-author in a journal paper titled “Computational Modeling of Cancer Nanotechnology” (with Manish Rishi, Prof. Ajay Kumar Saxena, Devarshi Kapil)',
        'Co-authored conference papers with Aditi Gupta and Hoor Fatima',
        'Completed 3 MOOC courses on NPTEL',
      ],
    },
    {
      name: 'Aditi Gupta',
      position: 'Assistant Professor',
      specialization: '',
      image: '/images/faculty/faculty_placeholder.jpg',
      email: 'faculty@ietagra.ac.in',
      achievements: [
        'Presented two international conference papers on ovarian cyst detection using machine learning',
      ],
    },
  ];

  // Laboratories data
  const laboratories = [
    {
      name: 'C Language Lab',
      equipment: '50 systems with i7 10th Gen processors',
      description: 'Foundation programming lab for C language basics and advanced concepts',
      icon: <FaCode className="text-4xl text-blue-500" />,
    },
    {
      name: 'Data Structure Lab',
      equipment: '50 systems with i7 10th Gen processors',
      description: 'Practical implementation of various data structures and algorithms',
      icon: <FaChartLine className="text-4xl text-purple-500" />,
    },
    {
      name: 'DBMS Lab',
      equipment: '50 systems with i7 10th Gen processors',
      description: 'Database design, SQL programming and database management systems',
      icon: <FaDatabase className="text-4xl text-green-500" />,
    },
    {
      name: 'Java Lab',
      equipment: '50 systems with i7 10th Gen processors',
      description: 'Object-oriented programming using Java language and frameworks',
      icon: <FaJava className="text-4xl text-red-500" />,
    },
    {
      name: 'Machine Learning Lab',
      equipment: '50 systems with i7 10th Gen processors',
      description: 'Applied machine learning algorithms and data science techniques',
      icon: <FaCogs className="text-4xl text-indigo-500" />,
    },
    {
      name: 'Deep Learning Lab',
      equipment: '50 systems with i7 10th Gen processors',
      description: 'Neural networks, GPU computing, and AI model training',
      icon: <FaServer className="text-4xl text-yellow-500" />,
    },
    {
      name: 'Advanced Java Lab',
      equipment: '50 systems with i7 10th Gen processors',
      description: 'Enterprise Java, JEE, Spring framework and web applications',
      icon: <FaJava className="text-4xl text-orange-500" />,
    },
    {
      name: 'Python Lab',
      equipment: '50 systems with i7 10th Gen processors',
      description: 'Python programming for web, data science and automation',
      icon: <FaPython className="text-4xl text-blue-700" />,
    },
    {
      name: 'DAA Lab',
      equipment: '50 systems with i7 10th Gen processors',
      description: 'Design and Analysis of Algorithms implementation and testing',
      icon: <FaCode className="text-4xl text-teal-500" />,
    },
    {
      name: 'Operating System Lab',
      equipment: '50 systems with i7 10th Gen processors',
      description: 'OS fundamentals, process management, memory management experiments',
      icon: <FaCogs className="text-4xl text-gray-700" />,
    },
    {
      name: 'Web Technology Lab',
      equipment: '50 systems with i7 10th Gen processors',
      description: 'Modern web development with HTML, CSS, JavaScript and frameworks',
      icon: <FaLaptopCode className="text-4xl text-blue-500" />,
    },
  ];

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

  // Research publications
  const researchAreas = [
    {
      title: 'Computational Modeling of Cancer Nanotechnology',
      type: 'Journal Publication',
      venue: 'Solid State Technology, IFERP',
      description: 'Research on leveraging nanotechnology for cancer treatment modeling',
    },
    {
      title: 'Opal RT Review',
      type: 'Conference Paper',
      venue: 'National Conference on Electronics & Communication Engineering (2021)',
      description: 'Analysis and review of Opal RT technologies and applications',
    },
    {
      title: 'Ovarian Cyst Detection',
      type: 'Conference Paper',
      venue: 'ICAIAC 2023',
      description: 'Using AI and image processing for early detection of ovarian cysts',
    },
    {
      title: 'Topic Modeling for Ovarian Cyst',
      type: 'Conference Paper',
      venue: 'IEEE ICCCIS 2023',
      description:
        'Application of NLP techniques for medical text analysis related to ovarian cysts',
    },
  ];

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        className="bg-white rounded-lg shadow-md overflow-hidden p-4 border border-gray-100 hover:border-blue-200 transition-colors"
      >
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 sm:w-20 sm:h-20 mb-3 rounded-full overflow-hidden shadow-md bg-gray-100 flex items-center justify-center text-lg font-bold text-blue-600">
            {member.image ? (
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.style.display = 'none';
                  e.target.parentNode.innerHTML = `<div class="flex items-center justify-center h-full w-full text-lg font-bold text-blue-600">${initials}</div>`;
                }}
              />
            ) : (
              initials
            )}
          </div>
          <h4 className="text-base font-semibold text-gray-800">{member.name}</h4>
          {member.position && (
            <p className="text-blue-600 font-medium text-xs">{member.position}</p>
          )}
          {member.specialization && (
            <p className="text-gray-600 text-xs mt-1">{member.specialization}</p>
          )}
          {member.email && (
            <p className="mt-1 text-xs">
              <a href={`mailto:${member.email}`} className="text-blue-500 hover:underline">
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
                      <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mt-1.5 mr-2 flex-shrink-0"></span>
                      <span className="text-xs text-gray-600">{achieve}</span>
                    </li>
                  )
                )}
              </ul>

              {hasMultipleAchievements && (
                <button
                  onClick={() => setShowAllAchievements(!showAllAchievements)}
                  className="mt-2 text-xs text-blue-600 hover:text-blue-800 font-medium flex items-center"
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

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen mt-8">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        </div>
        <div className="relative container mx-auto px-4 py-12 sm:py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Computer Science & Engineering
            </h1>
            <div className="w-16 sm:w-24 h-1 sm:h-1.5 bg-white/50 mx-auto mb-4 sm:mb-6"></div>
            <p className="text-base sm:text-lg md:text-xl opacity-90 mb-6 sm:mb-8 max-w-3xl mx-auto px-2">
              Institute of Engineering and Technology, Swami Vivekanand Campus, Dr. Bhimrao Ambedkar
              University, Agra
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <a
                href="#about"
                className="px-4 sm:px-6 py-2 sm:py-3 bg-white text-blue-700 rounded-lg font-medium hover:bg-blue-50 transition-colors shadow-lg text-sm sm:text-base"
              >
                Explore Department
              </a>
              <a
                href="#contact"
                className="px-4 sm:px-6 py-2 sm:py-3 bg-blue-800 text-white rounded-lg font-medium hover:bg-blue-900 transition-colors shadow-lg text-sm sm:text-base mt-3 sm:mt-0"
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
      {/* Vision & Mission Section */}
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
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white shadow-lg"
            >
              <div className="flex justify-center mb-4">
                <div className="bg-white/20 p-3 rounded-full">
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
                    To become a center of excellence in CSE education and research in frontier areas
                    of computer science and engineering
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
                    Address societal, rural, and global challenges through innovation and research
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
                    Prepare students for careers central to the modern industrial revolution
                  </span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl p-6 text-white shadow-lg"
            >
              <div className="flex justify-center mb-4">
                <div className="bg-white/20 p-3 rounded-full">
                  <FaBookReader className="text-4xl text-white" />
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
                  <span>
                    Provide state-of-the-art infrastructure and competent faculty for comprehensive
                    learning
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
                  <span>Build strong theoretical foundation with hands-on industry exposure</span>
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
                  <span>Foster innovation and research mindset to solve real-world problems</span>
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
                  <span>Produce competent, innovative, and ethically responsible engineers</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
      {/* About & Stats Section */}
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
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              The Department of Computer Science & Engineering at IET Agra is dedicated to producing
              technically sound, innovative, and research-driven engineers. With a strong vision to
              tackle global and rural challenges, the department emphasizes both academic depth and
              industry relevance, preparing students for the modern technological landscape.
            </p>
          </motion.div>

          {/* Department Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="bg-white rounded-xl shadow-md p-6 text-center"
            >
              <CountUp
                end={150}
                suffix="+"
                duration={2.5}
                className="text-4xl font-bold text-blue-600"
              />
              <p className="text-gray-600 mt-2">Placements</p>
              <p className="text-xs text-gray-500">Since 2020-21</p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="bg-white rounded-xl shadow-md p-6 text-center"
            >
              <CountUp
                end={300}
                suffix="+"
                duration={2.5}
                className="text-4xl font-bold text-blue-600"
              />
              <p className="text-gray-600 mt-2">Trainings/Internships</p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="bg-white rounded-xl shadow-md p-6 text-center"
            >
              <CountUp
                end={400}
                suffix="+"
                duration={2.5}
                className="text-4xl font-bold text-blue-600"
              />
              <p className="text-gray-600 mt-2">MOOC Courses</p>
              <p className="text-xs text-gray-500">NPTEL, Udemy, Swayam</p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="bg-white rounded-xl shadow-md p-6 text-center"
            >
              <CountUp
                end={15}
                suffix="+"
                duration={2.5}
                className="text-4xl font-bold text-blue-600"
              />
              <p className="text-gray-600 mt-2">GATE Qualifiers</p>
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
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
              <h3 className="text-2xl font-bold">Department In-Charge</h3>
            </div>
            <div className="p-6 flex flex-col md:flex-row items-center gap-8">
              <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg flex-shrink-0 bg-gray-100 flex items-center justify-center text-5xl font-bold text-blue-600">
                {departmentHead.image ? (
                  <img
                    src={departmentHead.image}
                    alt={departmentHead.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  `${departmentHead.name[0]}${departmentHead.name.split(' ').slice(-1)[0][0]}`
                )}
              </div>
              <div className="flex-1">
                <h4 className="text-2xl font-semibold text-gray-800 mb-2">{departmentHead.name}</h4>
                <p className="text-blue-600 font-medium mb-3">{departmentHead.position}</p>
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
                      className="text-blue-500 hover:underline"
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
                <div className="w-20 sm:w-24 h-1 bg-blue-500 mx-auto mb-4"></div>
                <p className="text-gray-600 max-w-3xl mx-auto text-sm">
                  Our dedicated faculty bring a wealth of academic and industry experience,
                  contributing to both teaching and research excellence.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
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
              </div>

              <div className="border-l-4 border-indigo-500 pl-4 py-2">
                <h4 className="text-xl font-semibold text-gray-800">M.Tech in Computer Science</h4>
                <p className="text-gray-600 mt-2">
                  2-year postgraduate program with specializations in emerging technologies and
                  advanced computing.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Women Cell Section */}
      <section id="women-cell" className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-3">Women Cell</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl overflow-hidden shadow-lg"
          >
            <div className="p-8 text-white">
              <div className="flex justify-center mb-6">
                <div className="bg-white/20 p-4 rounded-full">
                  <FaFemale className="text-5xl text-white" />
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4 text-center">
                Empowering Women in Technology
              </h3>

              <div className="max-w-3xl mx-auto">
                <p className="mb-6 text-center text-white/90">
                  Our Women Cell is dedicated to promoting gender equality, empowering female
                  students, faculty, and staff, and ensuring a safe and supportive environment for
                  all women at IET Agra.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
                  <div className="bg-white/10 p-5 rounded-lg backdrop-blur-sm">
                    <h4 className="font-bold mb-2 text-lg">Gender Equality</h4>
                    <p className="text-white/80 text-sm">
                      Promoting equal opportunities and representation in all aspects of academic
                      and professional life
                    </p>
                  </div>

                  <div className="bg-white/10 p-5 rounded-lg backdrop-blur-sm">
                    <h4 className="font-bold mb-2 text-lg">Empowerment</h4>
                    <p className="text-white/80 text-sm">
                      Special workshops, mentoring programs, and leadership development initiatives
                      for women
                    </p>
                  </div>

                  <div className="bg-white/10 p-5 rounded-lg backdrop-blur-sm">
                    <h4 className="font-bold mb-2 text-lg">Safe Environment</h4>
                    <p className="text-white/80 text-sm">
                      Ensuring a harassment-free campus and prompt resolution of women's grievances
                    </p>
                  </div>
                </div>
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
            <div className="w-20 sm:w-24 h-1 bg-blue-500 mx-auto mb-4 sm:mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base">
              We maintain 11 modern, well-equipped laboratories, each with 50 systems featuring i7
              10th Gen processors, LAN & Wi-Fi connectivity, and 10 Mbps leased line internet.
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
                <p className="text-xs sm:text-sm text-blue-600 font-medium mb-2 sm:mb-3 text-center sm:text-left">
                  {lab.equipment}
                </p>
                <p className="text-gray-600 text-sm sm:text-base text-center sm:text-left">
                  {lab.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mt-8 sm:mt-12 text-center"
          >
            <button className="px-4 sm:px-6 py-2 sm:py-3 bg-blue-100 text-blue-700 rounded-lg font-medium hover:bg-blue-200 transition-colors text-sm sm:text-base">
              View All Laboratories
            </button>
          </motion.div>
        </div>
      </section>
      {/* Teaching Methodologies Section */}
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
              Our teaching approach combines traditional classroom learning with modern techniques
              and practical exposure to ensure students develop both theoretical knowledge and
              hands-on skills.
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
                    Final year projects must be deployed on GitHub for portfolio building and
                    version control
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
                    Students are encouraged to create professional portfolio websites showcasing
                    their work
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Research & Publications Section */}
      <section id="research" className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-3">Research & Publications</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our faculty and students are engaged in cutting-edge research across various domains
              of computer science, with publications in reputed journals and conferences.
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
                    ? 'bg-gradient-to-br from-blue-500 to-blue-700'
                    : index % 4 === 1
                    ? 'bg-gradient-to-br from-indigo-500 to-indigo-700'
                    : index % 4 === 2
                    ? 'bg-gradient-to-br from-purple-500 to-purple-700'
                    : 'bg-gradient-to-br from-green-500 to-green-700'
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
      {/* Achievements Section */}
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
                      3 students and 1 faculty received Gold Developer Certificate
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
                      350+ students completed courses via NPTEL, Udemy, Coursera, and other
                      platforms
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
      {/* Contact Section */}
      <section
        id="contact"
        className="py-16 px-4 bg-gradient-to-r from-blue-900 to-indigo-900 text-white"
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
            <div className="w-24 h-1 bg-blue-400 mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-blue-100">
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
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600"
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
                  <p className="text-blue-100 mb-1">cse.hod@ietagra.ac.in</p>
                  <p className="text-blue-100">cse.office@ietagra.ac.in</p>
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
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600"
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
                  <p className="text-blue-100 mb-1">+91 562-2570450</p>
                  <p className="text-blue-100">+91 562-2570451</p>
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
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600"
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
                  <p className="text-blue-100">Department of Computer Science,</p>
                  <p className="text-blue-100">IET Campus, Swami Vivekanand Campus</p>
                  <p className="text-blue-100">Dr. B.R. Ambedkar University, Agra - 282002</p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mt-12 text-center"
          >
            <Link
              to="/tandpcell"
              className="inline-flex items-center px-6 py-3 bg-white text-blue-700 rounded-lg font-medium hover:bg-blue-50 transition-colors shadow-lg"
            >
              <FaGithub className="h-5 w-5 mr-2" />
              View Student Projects
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default CseDepartment;
