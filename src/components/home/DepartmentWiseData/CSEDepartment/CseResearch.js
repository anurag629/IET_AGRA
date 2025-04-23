import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../../../utils/animations';
import { FaCalendarAlt, FaBookOpen, FaUsers, FaGraduationCap } from 'react-icons/fa';

const CseResearch = () => {
  const [activeYear, setActiveYear] = useState('2023');

  // Research publications organized by year
  const publications = {
    2023: [
      {
        title:
          'A Systematic Review of Machine Learning for Ovarian Cyst Detection using Ultrasound Images',
        authors: 'Aditi Gupta and Hoor Fatima',
        type: 'Conference Paper',
        venue:
          '2nd International Conference on Applied Artificial Intelligence and Computing (ICAAIC)',
        location: 'Salem, India',
        pages: 'pp. 201-206',
        doi: '10.1109/ICAAIC56838.2023.10140444',
        description:
          'Comprehensive review of machine learning techniques for detecting ovarian cysts using ultrasound imaging.',
        color: 'from-blue-500 to-blue-700',
      },
      {
        title: 'Accurate Classification of Ovarian Cyst using Topic Modeling',
        authors: 'Aditi Gupta and Hoor Fatima',
        type: 'Conference Paper',
        venue:
          'IEEE International Conference on Computing, Communication, and Intelligent Systems (ICCCIS 2023)',
        location: 'Sharda University, Greater Noida, India',
        date: '03-04 Nov 2023',
        description:
          'Application of NLP techniques for medical text analysis related to ovarian cysts.',
        color: 'from-indigo-500 to-indigo-700',
      },
      {
        title: 'Techniques for Various Route Optimization in Mobile Ad-hoc Wireless Connections',
        authors: 'Pragya Kabra',
        type: 'Conference Paper',
        venue:
          'International Conference on Advancements and Key Challenges in Green Energy and Computing',
        date: '24-25 Feb 2023',
        description:
          'Advanced routing optimization techniques for mobile ad-hoc networks with focus on energy efficiency.',
        color: 'from-purple-500 to-purple-700',
      },
    ],
    2021: [
      {
        title: 'Computational Modeling of Cancer Nanotechnology',
        authors: 'Manish Rishi, Prof. Ajay Kumar Saxena, Prashant Maharishi, Devarshi Kapil',
        type: 'Journal Publication',
        venue: 'Solid State Technology, IFERP',
        volume: 'Volume 63, Number 2s, 2020',
        issn: 'ISSN No.: 0038-111X',
        description: 'Research on leveraging nanotechnology for cancer treatment modeling.',
        color: 'from-green-500 to-green-700',
      },
      {
        title: 'Opal RT Review',
        authors: 'Faculty of IET',
        type: 'Conference Paper',
        venue: 'National Conference on Recent Advances in Electronics & Communication Engineering',
        location: 'Institute of Engineering & Technology, DBRAU',
        date: 'January 29-30, 2021',
        description: 'Analysis and review of Opal RT technologies and applications.',
        color: 'from-blue-500 to-blue-700',
      },
      {
        title: 'A Hypothesis for Ad-Hoc Routing Algorithm Improvement',
        authors: 'Pragya Kabra',
        type: 'Journal Publication',
        venue:
          'International Journal on Recent and Innovation Trends in Computing and Communication',
        issn: 'Scoupus 2321-8169',
        description: 'Novel hypothesis for improving routing algorithms in ad-hoc networks.',
        color: 'from-indigo-500 to-indigo-700',
      },
      {
        title:
          'Techniques for Diversified Optimization of Routing Algorithms in Mobile Ad-Hoc Wireless Connections',
        authors: 'Pragya Kabra',
        type: 'Journal Publication',
        venue:
          'International Journal on Recent and Innovation Trends in Computing and Communication',
        issn: 'Scoupus ISSN 321-8169',
        description:
          'Research on optimizing routing algorithms for mobile ad-hoc wireless networks.',
        color: 'from-purple-500 to-purple-700',
      },
    ],
  };

  return (
    <section id="research" className="py-16 px-4 bg-gray-50 relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          className="w-full h-full text-blue-600"
        >
          <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="8" fill="none" />
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 w-64 h-64 opacity-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          className="w-full h-full text-blue-600"
        >
          <rect
            x="10"
            y="10"
            width="80"
            height="80"
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
            rx="15"
          />
        </svg>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-3">Research & Publications</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our faculty and students are engaged in cutting-edge research across various domains of
            computer science, with publications in reputed journals and conferences.
          </p>
        </motion.div>

        {/* Year selector */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-white rounded-lg shadow-sm p-1">
            {Object.keys(publications).map((year) => (
              <button
                key={year}
                onClick={() => setActiveYear(year)}
                className={`px-5 py-2 rounded-md transition-all ${
                  activeYear === year
                    ? 'bg-blue-600 text-white font-medium shadow-sm'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <span className="flex items-center">
                  <FaCalendarAlt className="mr-2" />
                  {year}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {publications[activeYear].map((publication, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <div className={`bg-gradient-to-r ${publication.color} p-5 text-white relative`}>
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                  {publication.type.includes('Journal') ? (
                    <FaBookOpen className="w-full h-full" />
                  ) : (
                    <FaGraduationCap className="w-full h-full" />
                  )}
                </div>

                <div className="relative z-10">
                  <div className="bg-white/20 rounded px-3 py-1 text-sm inline-block mb-3">
                    {publication.type}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2">{publication.title}</h3>
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-start mb-4">
                  <FaUsers className="text-blue-600 mt-1 mr-3" />
                  <p className="font-medium text-gray-800">{publication.authors}</p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg mb-4">
                  <p className="text-gray-700 mb-2">
                    <span className="font-semibold">Venue:</span> {publication.venue}
                  </p>

                  {publication.location && (
                    <p className="text-gray-700 mb-2">
                      <span className="font-semibold">Location:</span> {publication.location}
                    </p>
                  )}

                  {publication.date && (
                    <p className="text-gray-700 mb-2">
                      <span className="font-semibold">Date:</span> {publication.date}
                    </p>
                  )}

                  {publication.pages && (
                    <p className="text-gray-700 mb-2">
                      <span className="font-semibold">Pages:</span> {publication.pages}
                    </p>
                  )}

                  {publication.doi && (
                    <p className="text-gray-700 mb-2">
                      <span className="font-semibold">DOI:</span> {publication.doi}
                    </p>
                  )}

                  {publication.volume && (
                    <p className="text-gray-700 mb-2">
                      <span className="font-semibold">Volume:</span> {publication.volume}
                    </p>
                  )}

                  {publication.issn && (
                    <p className="text-gray-700 mb-2">
                      <span className="font-semibold">ISSN:</span> {publication.issn}
                    </p>
                  )}
                </div>

                <p className="text-gray-600">{publication.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mt-10 text-center"
        >
          <a
            href="#research"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-lg transition-colors shadow-md"
          >
            View All Research Publications
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
        </motion.div>
      </div>
    </section>
  );
};

export default CseResearch;
