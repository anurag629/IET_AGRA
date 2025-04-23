import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../../../utils/animations';

const CseFaculty = () => {
  // Fade in animation for sections

  // Department In-Charge
  const departmentHead = {
    name: 'Dr. Rajesh Lavania',
    position: 'Department In-Charge',
    qualification: 'PhD, M.Tech, B.Tech',
    experience: '22 years of teaching experience',
    image: '/images/cseHOD.png', // You'll need to add this image
    email: 'cse.hod@ietagra.ac.in', // Placeholder email, replace with actual
  };

  // Faculty members
  const facultyMembers = [
    {
      name: 'Er. Subodh Sharma',
      position: 'Assistant Professor',
      specialization: 'Data Structures, JAVA',
      image: '/images/subodh.jpg',
      email: 'faculty@ietagra.ac.in',
      achievements: [
        'M.Tech. qualified faculty',
        '20 years of teaching experience',
        'Research expertise in Data Structures and JAVA programming',
      ],
    },
    {
      name: 'Er. Saurabh Garg',
      position: 'Assistant Professor',
      specialization: 'Digital Electronics',
      image: '/images/saurabh.png',
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
      image: '/images/Prashant.png',
      email: 'faculty@ietagra.ac.in',
      achievements: [
        'Participated in EBOOTATHAN (2021) with students',
        'Awarded Gold Developer Certificate by IIT Kanpur and AKTU Lucknow',
        'Co-author in a journal paper titled "Computational Modeling of Cancer Nanotechnology" (with Manish Rishi, Prof. Ajay Kumar Saxena, Devarshi Kapil)',
        'Co-authored conference papers with Aditi Gupta and Hoor Fatima',
        'Completed 3 MOOC courses on NPTEL',
      ],
    },
    {
      name: 'Aditi Gupta',
      position: 'Assistant Professor',
      specialization: 'Machine learning',
      image: '/images/aditi.jpg',
      email: 'faculty@ietagra.ac.in',
      achievements: [
        'Presented two international conference papers on ovarian cyst detection using machine learning',
      ],
    },
    // New faculty members
    {
      name: 'Er. Shikhi Agarwal',
      position: 'Assistant Professor',
      specialization: 'C-Language, Graph Theory',
      image: '/images/sikhi.png',
      email: 'faculty@ietagra.ac.in',
      achievements: [
        'M.Tech., B.Tech. qualified faculty',
        '8 years of teaching experience',
        'Research expertise in C-Language and Graph Theory',
      ],
    },
    {
      name: 'Dr. Pragya Kabra',
      position: 'Assistant Professor',
      specialization: 'Computer Networks, AI',
      image: '/images/pragya.png',
      email: 'faculty@ietagra.ac.in',
      achievements: [
        'Ph.D. qualified faculty',
        '8 years of teaching experience',
        'Research expertise in Computer Networks, Artificial Intelligence, Soft Computing, and Software Engineering',
      ],
    },
  ];

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
        whileHover={{
          y: -5,
          boxShadow:
            '0 10px 25px -5px rgba(59, 130, 246, 0.1), 0 8px 10px -6px rgba(59, 130, 246, 0.1)',
        }}
        className="bg-white rounded-xl shadow-md overflow-hidden p-6 border border-gray-100 hover:border-blue-200 transition-all flex flex-col h-full"
      >
        <div className="flex flex-col items-center text-center">
          <div className="w-32 h-32 sm:w-40 sm:h-40 mb-4 rounded-full overflow-hidden shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center text-2xl font-bold text-blue-600 border-4 border-white ring-2 ring-blue-100">
            {member.image ? (
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.style.display = 'none';
                  e.target.parentNode.innerHTML = `<div class="flex items-center justify-center h-full w-full text-3xl font-bold text-blue-600">${initials}</div>`;
                }}
              />
            ) : (
              initials
            )}
          </div>
          <h4 className="text-lg font-semibold text-gray-800 mb-1">{member.name}</h4>
          {member.position && (
            <p className="text-blue-600 font-medium text-sm bg-blue-50 px-3 py-1 rounded-full inline-block">
              {member.position}
            </p>
          )}
          {member.specialization && (
            <p className="text-gray-600 text-sm mt-2 italic">{member.specialization}</p>
          )}
          {member.email && (
            <p className="mt-2 text-sm">
              <a
                href={`mailto:${member.email}`}
                className="text-blue-500 hover:underline flex items-center justify-center gap-1"
              >
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
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                {member.email}
              </a>
            </p>
          )}
          {member.achievements && member.achievements.length > 0 && (
            <div className="mt-4 text-left w-full bg-gradient-to-br from-gray-50 to-blue-50 rounded-lg p-4 flex-grow">
              <h5 className="font-medium text-gray-700 text-sm mb-2 border-b border-gray-200 pb-1 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
                Achievement{member.achievements.length > 1 ? 's' : ''}:
              </h5>
              <ul className="space-y-2">
                {(showAllAchievements ? member.achievements : member.achievements.slice(0, 1)).map(
                  (achieve, i) => (
                    <li key={i} className="flex items-start">
                      <span className="inline-block w-2.5 h-2.5 rounded-full bg-blue-500 mt-1.5 mr-2 flex-shrink-0"></span>
                      <span className="text-sm text-gray-600">{achieve}</span>
                    </li>
                  )
                )}
              </ul>

              {hasMultipleAchievements && (
                <button
                  onClick={() => setShowAllAchievements(!showAllAchievements)}
                  className="mt-3 text-sm text-white bg-blue-500 hover:bg-blue-600 font-medium flex items-center mx-auto px-3 py-1 rounded-md transition-colors"
                >
                  {showAllAchievements ? (
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mr-1"
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
                        className="h-4 w-4 mr-1"
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
    <>
      {/* Department In-Charge Section */}
      <section id="faculty" className="py-8 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16 border border-blue-50"
          >
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white relative">
              <div className="absolute inset-0 overflow-hidden opacity-20">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path d="M0,0 L100,0 L100,5 C60,20 40,50 0,5 Z" fill="white" />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold relative flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
                Department In-Charge
              </h3>
            </div>

            <div className="px-6 py-8 md:py-10 flex flex-col md:flex-row items-center gap-8 bg-gradient-to-b from-blue-50/30 to-transparent">
              <div
                className="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden shadow-xl flex-shrink-0 
                   bg-gradient-to-r from-blue-50 to-indigo-50 flex items-center justify-center text-5xl font-bold text-blue-600
                   border-4 border-white ring-4 ring-blue-100/50 transform transition-all duration-300 hover:scale-105"
              >
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

              <div className="flex-1 text-center md:text-left">
                <h4 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                  {departmentHead.name}
                </h4>
                <p className="text-blue-600 font-medium bg-blue-50 inline-block px-4 py-1.5 rounded-full mb-4 shadow-sm">
                  {departmentHead.position}
                </p>
                <div className="space-y-3 text-gray-600 mt-6">
                  <p className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3">
                    <span className="font-semibold flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2 text-blue-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                        />
                      </svg>
                      Qualification:
                    </span>
                    <span className="bg-gray-100/80 px-3 py-1 rounded-md">
                      {departmentHead.qualification}
                    </span>
                  </p>
                  <p className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3">
                    <span className="font-semibold flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2 text-blue-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      Experience:
                    </span>
                    <span className="bg-gray-100/80 px-3 py-1 rounded-md">
                      {departmentHead.experience}
                    </span>
                  </p>
                  <p className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3">
                    <span className="font-semibold flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2 text-blue-500"
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
                      Email:
                    </span>
                    <a
                      href={`mailto:${departmentHead.email}`}
                      className="text-blue-600 hover:text-blue-800 transition-colors hover:underline bg-blue-50 px-3 py-1 rounded-md"
                    >
                      {departmentHead.email}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Faculty Members Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-8"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">Meet Our Faculty</h2>
            <div className="w-20 sm:w-24 h-1 bg-blue-500 mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-sm">
              Our dedicated faculty bring a wealth of academic and industry experience, contributing
              to both teaching and research excellence.
            </p>
          </motion.div>

          {/* Faculty grid layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {facultyMembers.map((member, index) => (
              <FacultyCard key={index} member={member} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CseFaculty;
