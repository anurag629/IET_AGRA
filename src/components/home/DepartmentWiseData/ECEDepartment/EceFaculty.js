import React from 'react';
import { motion } from 'framer-motion';
import { FaAward } from 'react-icons/fa';

const EceFaculty = () => {
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
        staggerChildren: 0.2,
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

  // Faculty Members Data
  const facultyMembers = [
    {
      name: 'Dr. Greesh Kumar Singh',
      position: 'Head of Department',
      qualification: 'B.Tech, M.Tech, PhD',
      experience: '10 years',
      expertise:
        'Biomedical Signal processing, Communication Systems, Fuzzy Logic & Neural Network, Robotics',
      publications: '08 (Journal & Conferences)',
      qualifications: 'GATE & NPTEL Qualified',
      image: '/images/ece/greesh.png',
    },
    {
      name: 'Dr. Mukesh Kr. Baghel',
      position: 'Assistant Professor',
      qualification: 'B.Tech, M.Tech, PhD',
      experience: '20 years',
      expertise: 'Satellite Communication, Data Communication, Wireless Communication',
      publications: '06 (Journal & Conferences)',
      image: '/images/ece/mukesh.png',
    },
    {
      name: 'Er. Ajay Yadav',
      position: 'Assistant Professor',
      qualification: 'B.Tech, M.Tech',
      experience: '22 years',
      expertise: 'Optical Communication, Digital Electronics',
      image: '/images/ece/ajay.jpg',
    },
    {
      name: 'Dr. Shilpi Lavania',
      position: 'Assistant Professor',
      qualification: 'B.Tech, M.Tech, PhD',
      experience: '10 years',
      expertise: 'VLSI, Control System',
      publications: '15 (Journal & Conferences)',
      qualifications: 'NPTEL Qualified',
      image: '/images/ece/shilpi.png',
    },
    {
      name: 'Er. Mayanka Saket',
      position: 'Assistant Professor',
      qualification: 'B.Tech, M.Tech, PhD Pursuing',
      experience: '12 years',
      expertise: 'Wireless Communication',
      publications: '04 (Journal & Conferences)',
      qualifications: 'GATE & NPTEL Qualified',
      image: '/images/ece/mayanka.png',
    },
    {
      name: 'Er. Amol Kumar',
      position: 'Assistant Professor',
      qualification: 'B.E., M.Tech, PhD Pursuing',
      experience: '10 years',
      expertise: 'Biomedical Signal Processing',
      publications: '06 (Journal & Conferences)',
      qualifications: 'GATE & NPTEL Qualified',
      image: '/images/ece/amol.png',
    },
    {
      name: 'Er. Ankita Maheshwari',
      position: 'Assistant Professor',
      qualification: 'B.E., M.Tech, PhD Pursuing',
      experience: '10 years',
      expertise: 'VLSI, Control System',
      publications: '02 (Journal & Conferences)',
      qualifications: 'NPTEL Qualified',
      image: '/images/ece/ankita.png',
    },
    {
      name: 'Er. Dheeraj Singh',
      position: 'Assistant Professor',
      qualification: 'B.E., M.Tech',
      experience: '11 years',
      expertise: 'Linear Integrated Circuit, Advance Sensor & Transducer',
      publications: '05 (Journal & Conferences)',
      image: '/images/ece/dheeraj.png',
    },
  ];

  // Faculty achievements
  const facultyAchievements = [
    "Dr. Greesh Kumar Singh - Awarded by Director's Medal from Dayalbagh Educational Institute for achieving highest marks during M.Tech, 2010.",
    'Awarded by UGC- BSR Research Fellowship in Science for Meritorious Students (2012-2016).',
    'Er. Dheeraj Singh - Gate-2008, Gate-2012, NET(CSIR-2013), Best Paper presentation award in National Conference',
    'Er. Mayanka Saket - Gate-2021',
    'NPTEL/ SWAYAM Courses - 13 Certificates (All Faculty)',
  ];

  return (
    <section id="faculty" className="py-16 px-4 bg-gradient-to-b from-white to-indigo-50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-sm font-medium mb-4">
            Our Team
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Faculty Members</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
            Our department is led by experienced and qualified faculty members dedicated to
            providing quality education and mentorship.
          </p>
        </motion.div>

        {/* Department group photo */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mb-16"
        >
          <div className="bg-white rounded-xl overflow-hidden shadow-lg">
            <img
              src="/images/eceFaculty.png"
              alt="Electronics & Communication Engineering Department Faculty"
              className="w-full h-auto"
              onError={(e) => {
                e.target.src = '/images/placeholder-group.jpg';
              }}
            />
          </div>
        </motion.div>

        {/* Faculty Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {facultyMembers.map((faculty, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
              whileHover={{
                y: -5,
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                transition: { duration: 0.3 },
              }}
            >
              <div className="h-1.5 bg-gradient-to-r from-indigo-500 to-purple-600"></div>
              <div className="p-6">
                <div className="flex flex-col items-center">
                  <div className="w-28 h-28 rounded-full overflow-hidden bg-indigo-100 mb-4">
                    <img
                      src={faculty.image}
                      alt={faculty.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = '/images/placeholder-faculty.jpg';
                      }}
                    />
                  </div>
                  <h4 className="text-lg font-bold text-gray-800 mb-1">{faculty.name}</h4>
                  <p className="text-sm text-indigo-600 font-medium mb-3">{faculty.position}</p>

                  <div className="w-full border-t border-gray-200 pt-3 mt-2">
                    <p className="text-gray-600 text-sm mb-1">
                      <span className="font-medium text-gray-700">Qualification:</span>{' '}
                      {faculty.qualification}
                    </p>
                    <p className="text-gray-600 text-sm mb-1">
                      <span className="font-medium text-gray-700">Experience:</span>{' '}
                      {faculty.experience}
                    </p>
                    <p className="text-gray-600 text-sm mb-1">
                      <span className="font-medium text-gray-700">Expertise:</span>{' '}
                      {faculty.expertise}
                    </p>
                    {faculty.publications && (
                      <p className="text-gray-600 text-sm flex items-center">
                        <FaAward className="text-indigo-500 mr-1" />
                        <span className="mr-1">Publications:</span> {faculty.publications}
                      </p>
                    )}
                    {faculty.qualifications && (
                      <p className="text-gray-600 text-sm">
                        <span className="font-medium text-gray-700">Qualifications:</span>{' '}
                        {faculty.qualifications}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Faculty Achievements */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 mb-12"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <FaAward className="text-indigo-600 mr-3" />
            Faculty Achievements
          </h3>

          <ul className="space-y-4">
            {facultyAchievements.map((achievement, index) => (
              <li key={index} className="flex items-start">
                <span className="text-indigo-500 mr-2 mt-1">•</span>
                <span className="text-gray-700">{achievement}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default EceFaculty;
