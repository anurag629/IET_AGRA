import React from 'react';
import { motion } from 'framer-motion';
import { FaNewspaper, FaFileContract, FaChartLine, FaUniversity, FaFileAlt } from 'react-icons/fa';

const EceResearch = () => {
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

  // Research publications data
  const researchPublications = [
    {
      title: 'Biomedical Signal Processing Research',
      journal: 'Scopus, Elsevier',
      authors: 'Dr. Greesh Kumar Singh, Er. Amol Kumar',
      image: '/images/ece/slide_12_image_16.png',
    },
    {
      title: 'VLSI and Control Systems Applications',
      journal: 'UGC Care Listed Journal',
      authors: 'Dr. Shilpi Lavania, Er. Ankita Maheshwari',
      image: '/images/ece/slide_12_image_17.jpg',
    },
    {
      title: 'Wireless Communication Advances',
      journal: 'WORK (IOS Press)',
      authors: 'Dr. Mukesh Kr. Baghel, Er. Mayanka Saket',
      image: '/images/ece/slide_12_image_18.jpg',
    },
    {
      title: 'Linear Integrated Circuits Applications',
      journal: 'JOSE (Taylor & Francis)',
      authors: 'Er. Dheeraj Singh',
      image: '/images/ece/slide_12_image_19.png',
    },
  ];

  // Patents data
  const patents = [
    {
      title:
        'Microprocessing Unit based system for Tracking and Controlling Solar Panel based on Sun Light',
      number: 'PPA No. 201911020615',
      date: 'Publication date: 31/05/2019',
      inventors: 'Dr. Greesh Kumar Singh, Er. Dheeraj Singh',
      status: 'Filed',
    },
    {
      title: 'IOT Embedded Smart Sensor Based Device for Smoke Detection In Library',
      number: 'Application No. 417338-001',
      date: 'Publication date: 18/05/2024',
      inventors: 'Dr. Shilpi Lavania, Er. Ankita Maheshwari',
      status: 'Filed',
    },
  ];

  return (
    <section id="research" className="py-16 px-4 bg-gradient-to-b from-indigo-50 to-white">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-sm font-medium mb-4">
            Advancing Knowledge
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Research & Innovation
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
            Our faculty and students are actively engaged in research and innovation across various
            domains of electronics and communication engineering.
          </p>
        </motion.div>

        {/* Research Publications */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="bg-white rounded-xl shadow-lg overflow-hidden mb-16"
        >
          <div className="bg-gradient-to-r from-indigo-600 to-purple-700 p-6 text-white">
            <h3 className="text-2xl font-bold flex items-center">
              <FaNewspaper className="mr-3" />
              Research Publications
            </h3>
          </div>
          <div className="p-8">
            <p className="text-gray-600 mb-8">
              Our faculty has published numerous papers in reputed journals including Scopus,
              Elsevier, UGC Care, WORK (IOS Press), JOSE (Taylor & Francis), and other high-impact
              publications.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {researchPublications.map((publication, index) => (
                <div
                  key={index}
                  className="flex border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="w-1/3 bg-indigo-50">
                    <img
                      src={publication.image}
                      alt={publication.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = '/images/placeholder-publication.jpg';
                      }}
                    />
                  </div>
                  <div className="w-2/3 p-4">
                    <h4 className="font-semibold text-gray-800 mb-2">{publication.title}</h4>
                    <p className="text-sm text-gray-500 mb-1">
                      <span className="font-medium">Journal:</span> {publication.journal}
                    </p>
                    <p className="text-sm text-gray-500">
                      <span className="font-medium">Authors:</span> {publication.authors}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <a
                href="/"
                className="inline-flex items-center justify-center px-6 py-3 border border-indigo-500 text-sm font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50 transition-colors"
              >
                View All Publications
                <FaFileAlt className="ml-2" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Patents & Collaborations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Patents */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="bg-white rounded-xl shadow-md overflow-hidden h-full"
          >
            <div className="h-2 bg-gradient-to-r from-indigo-500 to-purple-600"></div>
            <div className="p-6">
              <div className="flex items-center mb-6">
                <div className="bg-indigo-100 p-3 rounded-full">
                  <FaFileContract className="text-xl text-indigo-600" />
                </div>
                <h3 className="ml-4 text-xl font-bold text-gray-800">Patents Filed</h3>
              </div>

              <div className="space-y-6">
                {patents.map((patent, index) => (
                  <div key={index} className="border-l-4 border-indigo-500 pl-4 py-2">
                    <h4 className="font-semibold text-gray-800 mb-2">{patent.title}</h4>
                    <p className="text-sm text-gray-600 mb-1">{patent.number}</p>
                    <p className="text-sm text-gray-600 mb-1">{patent.date}</p>
                    <p className="text-sm text-gray-600">Inventors: {patent.inventors}</p>
                    <span className="inline-block bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded mt-2">
                      {patent.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Research Collaborations */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="bg-white rounded-xl shadow-md overflow-hidden h-full"
          >
            <div className="h-2 bg-gradient-to-r from-purple-500 to-indigo-600"></div>
            <div className="p-6">
              <div className="flex items-center mb-6">
                <div className="bg-purple-100 p-3 rounded-full">
                  <FaUniversity className="text-xl text-purple-600" />
                </div>
                <h3 className="ml-4 text-xl font-bold text-gray-800">Research Areas</h3>
              </div>

              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-purple-100 flex items-center justify-center mt-1">
                    <span className="text-purple-600 text-xs font-bold">1</span>
                  </div>
                  <span className="ml-3 text-gray-700">Biomedical Signal Processing</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-purple-100 flex items-center justify-center mt-1">
                    <span className="text-purple-600 text-xs font-bold">2</span>
                  </div>
                  <span className="ml-3 text-gray-700">Communication Systems</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-purple-100 flex items-center justify-center mt-1">
                    <span className="text-purple-600 text-xs font-bold">3</span>
                  </div>
                  <span className="ml-3 text-gray-700">VLSI & Control Systems</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-purple-100 flex items-center justify-center mt-1">
                    <span className="text-purple-600 text-xs font-bold">4</span>
                  </div>
                  <span className="ml-3 text-gray-700">Fuzzy Logic & Neural Networks</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-purple-100 flex items-center justify-center mt-1">
                    <span className="text-purple-600 text-xs font-bold">5</span>
                  </div>
                  <span className="ml-3 text-gray-700">Robotics & Automation</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-purple-100 flex items-center justify-center mt-1">
                    <span className="text-purple-600 text-xs font-bold">6</span>
                  </div>
                  <span className="ml-3 text-gray-700">Wireless & Satellite Communication</span>
                </li>
              </ul>

              <div className="mt-6 p-4 bg-purple-50 rounded-lg">
                <h4 className="font-medium text-purple-800 mb-2">Research Impact</h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                    <div className="text-2xl font-bold text-purple-700">40+</div>
                    <p className="text-xs text-gray-600">Research Papers</p>
                  </div>
                  <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                    <div className="text-2xl font-bold text-purple-700">2</div>
                    <p className="text-xs text-gray-600">Patents Filed</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Citation Metrics */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl shadow-xl p-8 text-white mb-16 overflow-hidden relative"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full opacity-5 -mt-20 -mr-20"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full opacity-5 -mb-20 -ml-20"></div>

          <h3 className="text-2xl font-bold text-center mb-8 relative">Research Metrics</h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-3xl font-bold mb-2">40+</div>
              <p>Publications</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-3xl font-bold mb-2">150+</div>
              <p>Citations</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-3xl font-bold mb-2">2</div>
              <p>Patents Filed</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-3xl font-bold mb-2">6</div>
              <p>Research Areas</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EceResearch;
