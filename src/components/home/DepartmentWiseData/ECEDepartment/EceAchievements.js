import React from 'react';
import { motion } from 'framer-motion';
import {
  FaTrophy,
  FaGraduationCap,
  FaBriefcase,
  FaUsers,
  FaRocket,
  FaAward,
  FaStar,
} from 'react-icons/fa';

const EceAchievements = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  // Placement companies
  const placementCompanies = [
    { name: 'TCS', logo: '/images/ece/slide_17_image_27.png' },
    { name: 'Wipro', logo: '/images/ece/slide_17_image_28.png' },
    { name: 'Infosys', logo: '/images/ece/slide_17_image_29.png' },
    { name: 'Tech Mahindra', logo: '/images/ece/slide_17_image_30.png' },
    { name: 'IBM', logo: '/images/ece/slide_17_image_31.png' },
  ];

  // Alumni data
  const alumni = [
    {
      name: 'Pradeep Kumar',
      batch: '2017-2021',
      achievement: 'Co-founder of Hoverin Aerospace Pvt Ltd',
      company: 'Hoverin Aerospace',
      image: '/images/ece/slide_19_image_32.png',
    },
    {
      name: 'Adarsh Singh',
      batch: '2017-2021',
      achievement: 'Co-founder of Hoverin Aerospace Pvt Ltd',
      company: 'Hoverin Aerospace',
      image: '/images/ece/slide_19_image_33.png',
    },
    {
      name: 'Sumit Saxena',
      batch: 'Final Year',
      achievement: 'Winner in AIML Track at Hack-a-Sol 2024, IIIT Naya Raipur',
      prize: 'Rs. 5,000 + Surprise Gift',
      image: '/images/ece/slide_24_image_41.jpg',
    },
  ];

  // Student achievement data
  const achievements = [
    {
      title: 'E Summit - IIT Bombay Finalists',
      description:
        'E-Cell, IET, Agra student team (13 students) participated as Finalists of National Entrepreneurship Challenge-2019 organised by IIT Bombay',
      date: 'January 19-20, 2020',
      image: '/images/ece/slide_21_image_36.jpg',
    },
    {
      title: 'National Entrepreneurship Challenge - 3rd Position',
      description:
        'E-Cell, IET, Agra student team (11 students) secured 3rd position in finals of National Entrepreneurship Challenge-2018 organized by IIT Bombay',
      date: 'January 19-20, 2019',
      image: '/images/ece/slide_21_image_37.png',
    },
    {
      title: 'Smart India Hackathon 2020 Finalist',
      description:
        "Student Team 'Ashwa' selected as finalist in SMART INDIA HACKATHON (Software Edition)",
      date: '2020',
      image: '/images/ece/slide_21_image_38.png',
    },
    {
      title: 'Winners of Agricultural Drone Project',
      description:
        'Faculty & Students of IET won in India Innovation Challenge Design Contest 2019 by AICTE, DST, Texas Instruments India and IIM Bangalore',
      date: '2019',
      image: '/images/ece/slide_23_image_40.png',
    },
  ];

  // Startups founded by students
  const startups = [
    {
      name: 'Hoverin Aerospace Pvt Ltd',
      founders: 'Pradeep Kumar and Adarsh Singh (Batch 2017-2021)',
      website: 'https://www.hoverinaerospace.in/',
      social: [
        { platform: 'Youtube', link: 'https://www.youtube.com/channel/UC06JTpEPKvuUu31bXcmbaJw' },
        { platform: 'LinkedIn', link: 'https://www.linkedin.com/company/hoverinaerospace/' },
        { platform: 'Instagram', link: 'https://www.instagram.com/hoverinaerospace/' },
        { platform: 'Twitter', link: 'https://twitter.com/hoverinaero' },
      ],
      image: '/images/ece/slide_22_image_39.png',
    },
  ];

  return (
    <section id="achievements" className="py-16 px-4 bg-gradient-to-b from-white to-indigo-50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-sm font-medium mb-4">
            Success Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Student Achievements & Placements
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
            Our students excel in various competitions, secure placements in top companies, and go
            on to become successful professionals in their fields.
          </p>
        </motion.div>

        {/* Placement Partners */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="bg-white rounded-xl shadow-md overflow-hidden mb-16"
        >
          <div className="p-8">
            <h3 className="text-2xl font-bold text-gray-800 text-center mb-8 flex items-center justify-center">
              <FaBriefcase className="text-indigo-600 mr-3" />
              Our Placement Partners
            </h3>

            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {placementCompanies.map((company, index) => (
                <div key={index} className="w-24 h-24 flex items-center justify-center">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                    onError={(e) => {
                      e.target.src = '/images/placeholder-company.png';
                    }}
                  />
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <div className="bg-indigo-50 inline-block px-6 py-3 rounded-lg">
                <h4 className="font-semibold text-indigo-800 mb-2">Placement Highlights</h4>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-indigo-600">100+</p>
                    <p className="text-sm text-gray-600">Placements</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-indigo-600">15+</p>
                    <p className="text-sm text-gray-600">Companies</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-indigo-600">85%</p>
                    <p className="text-sm text-gray-600">Placement Rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Notable Alumni */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-800 text-center mb-8 flex items-center justify-center">
            <FaUsers className="text-indigo-600 mr-3" />
            Notable Alumni
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {alumni.map((alum, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-indigo-500 to-purple-600"></div>
                <div className="p-6">
                  <div className="flex flex-col items-center text-center mb-4">
                    <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-100 mb-4">
                      <img
                        src={alum.image}
                        alt={alum.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = '/images/placeholder-alumni.jpg';
                        }}
                      />
                    </div>
                    <h4 className="text-lg font-bold text-gray-800">{alum.name}</h4>
                    <p className="text-sm text-indigo-600 mb-2">Batch: {alum.batch}</p>
                    <div className="w-12 h-1 bg-gray-200 mb-3"></div>
                    <p className="text-gray-600 text-sm">{alum.achievement}</p>
                    {alum.company && <p className="text-gray-500 text-sm mt-1">@ {alum.company}</p>}
                    {alum.prize && (
                      <div className="mt-2 bg-indigo-100 px-3 py-1 rounded-full text-xs text-indigo-700">
                        {alum.prize}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Student Achievements */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-800 text-center mb-8 flex items-center justify-center">
            <FaTrophy className="text-indigo-600 mr-3" />
            Student Achievements
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row"
              >
                <div className="md:w-2/5 h-52 md:h-auto relative">
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = '/images/placeholder-achievement.jpg';
                    }}
                  />
                  <div className="absolute top-0 right-0 bg-indigo-600 text-white text-xs px-3 py-1">
                    {achievement.date}
                  </div>
                </div>
                <div className="md:w-3/5 p-6">
                  <h4 className="text-lg font-bold text-gray-800 mb-2">{achievement.title}</h4>
                  <p className="text-gray-600 text-sm">{achievement.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Student Startups */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl shadow-xl p-8 text-white overflow-hidden relative mb-16"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full opacity-5 -mt-20 -mr-20"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full opacity-5 -mb-20 -ml-20"></div>

          <h3 className="text-2xl font-bold text-center mb-8 flex items-center justify-center relative">
            <FaRocket className="mr-3" />
            Student Startups
          </h3>

          <div className="relative z-10">
            {startups.map((startup, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="md:w-1/3">
                    <img
                      src={startup.image}
                      alt={startup.name}
                      className="w-full h-auto rounded-lg"
                      onError={(e) => {
                        e.target.src = '/images/placeholder-startup.jpg';
                      }}
                    />
                  </div>
                  <div className="md:w-2/3">
                    <h4 className="text-xl font-bold mb-2">{startup.name}</h4>
                    <p className="text-white/80 mb-4">Founded by: {startup.founders}</p>
                    <div className="mb-4">
                      <a
                        href={startup.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/20 hover:bg-white/30 transition-colors rounded-md px-4 py-2 text-white text-sm inline-block"
                      >
                        Visit Website
                      </a>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {startup.social.map((social, idx) => (
                        <a
                          key={idx}
                          href={social.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white/10 hover:bg-white/20 transition-colors rounded-md px-3 py-1 text-white text-xs"
                        >
                          {social.platform}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Stats Summary */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
        >
          <h3 className="text-2xl font-bold text-gray-800 text-center mb-8 flex items-center justify-center">
            <FaAward className="text-indigo-600 mr-3" />
            Achievement Summary
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 rounded-lg bg-gradient-to-br from-indigo-50 to-purple-50">
              <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mx-auto mb-4">
                <FaTrophy className="text-indigo-600" />
              </div>
              <div className="text-3xl font-bold text-indigo-700">15+</div>
              <p className="text-gray-600 text-sm">Competition Wins</p>
            </div>
            <div className="p-4 rounded-lg bg-gradient-to-br from-indigo-50 to-purple-50">
              <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mx-auto mb-4">
                <FaGraduationCap className="text-indigo-600" />
              </div>
              <div className="text-3xl font-bold text-indigo-700">200+</div>
              <p className="text-gray-600 text-sm">Alumni Network</p>
            </div>
            <div className="p-4 rounded-lg bg-gradient-to-br from-indigo-50 to-purple-50">
              <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mx-auto mb-4">
                <FaBriefcase className="text-indigo-600" />
              </div>
              <div className="text-3xl font-bold text-indigo-700">85%</div>
              <p className="text-gray-600 text-sm">Placement Rate</p>
            </div>
            <div className="p-4 rounded-lg bg-gradient-to-br from-indigo-50 to-purple-50">
              <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mx-auto mb-4">
                <FaRocket className="text-indigo-600" />
              </div>
              <div className="text-3xl font-bold text-indigo-700">2+</div>
              <p className="text-gray-600 text-sm">Student Startups</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EceAchievements;
