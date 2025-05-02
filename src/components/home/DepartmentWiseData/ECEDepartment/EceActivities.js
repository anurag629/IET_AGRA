import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaCalendarAlt,
  FaUsers,
  FaLightbulb,
  FaHandshake,
  FaGraduationCap,
  FaPuzzlePiece,
  FaChalkboardTeacher,
  FaFutbol,
  FaMusic,
  FaMicrophoneAlt,
  FaCamera,
} from 'react-icons/fa';

const EceActivities = () => {
  const [activeTab, setActiveTab] = useState('all');

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

  // Events and conferences data
  const events = [
    {
      title: "One Week FDP on 'Antenna Trends'",
      date: 'July 1-5, 2019',
      description: 'Jointly organized by EICT Academics',
      image: '/images/ece/slide_15_image_26.png',
      type: 'conference',
    },
    {
      title: 'Internal Hackathon for Smart India Hackathon-2020',
      date: 'January 25, 2020',
      description:
        'Organized at Institute of Engineering and Technology, Dr. Bhimrao Ambedkar University, Agra',
      type: 'hackathon',
    },
    {
      title: 'Expert Lecture Series-2020',
      date: 'February 17-24, 2020',
      description:
        'Organized at Institute of Engineering and Technology, Dr. Bhimrao Ambedkar University, Agra',
      type: 'lecture',
    },
    {
      title: "National Conference on 'Recent Trends in Electronics & Communication Engineering'",
      date: 'January 29-30, 2021',
      description:
        'Organized at Institute of Engineering and Technology, Dr. Bhimrao Ambedkar University, Agra',
      type: 'conference',
    },
    {
      title: 'Toycathon 2021 in Digital Mode',
      date: 'January 29-30, 2021',
      description:
        'Organized by MHRD at Institute of Engineering and Technology, Dr. Bhimrao Ambedkar University, Agra',
      type: 'hackathon',
    },
  ];

  // Extracurricular activities photos
  const activityPhotos = [
    {
      src: '/images/ece/slide_26_image_48.jpg',
      category: 'sports',
      alt: 'Sports Activity',
    },
    { src: '/images/ece/slide_27_image_49.jpg', category: 'cultural', alt: 'Cultural Program' },
    { src: '/images/ece/slide_27_image_50.jpg', category: 'cultural', alt: 'Cultural Event' },
    { src: '/images/ece/slide_27_image_51.jpg', category: 'seminar', alt: 'Technical Seminar' },
    {
      src: '/images/ece/slide_27_image_52.jpg',
      category: 'fdp',
      alt: 'Faculty Development Program',
    },
    {
      src: '/images/ece/slide_27_image_53.jpg',
      category: 'sports',
      alt: 'Sports Competition',
    },
    { src: '/images/ece/slide_27_image_54.jpg', category: 'sports', alt: 'Sports Event' },
    { src: '/images/ece/slide_27_image_55.jpg', category: 'sports', alt: 'sports Activity' },
  ];

  // Best practices data
  const bestPractices = [
    {
      title: 'Thrust and Emerging Areas',
      description:
        'Special focus on Machine Learning, Robotics, AI, and IoT to prepare students for future technologies',
      icon: <FaLightbulb className="text-white text-xl" />,
    },
    {
      title: 'Value Added Courses',
      description:
        'Additional courses in Human Values, Environmental Studies, Industrial Management, and Economics',
      icon: <FaGraduationCap className="text-white text-xl" />,
    },
    {
      title: 'Project-based Learning',
      description:
        'Seminar, Soft Skill Classes, Mini projects, and Major Projects for practical experience',
      icon: <FaPuzzlePiece className="text-white text-xl" />,
    },
    {
      title: 'Mentorship System',
      description:
        'Co-ordinator and Mentor System for each class and special local guardians for girl students',
      icon: <FaHandshake className="text-white text-xl" />,
    },
  ];

  // Future plans data
  const futurePlans = [
    'To make Students pursue Higher Education in India and Abroad for which awareness sessions are conducted',
    'To motivate students to resolve the Engineering problems faced by general population',
    'Driving Innovation to make the existing devices more compact, with more operations and more reliability',
  ];

  // Filter activities by category
  const filteredPhotos =
    activeTab === 'all'
      ? activityPhotos
      : activityPhotos.filter((photo) => photo.category === activeTab);

  return (
    <section id="activities" className="py-16 px-4 bg-gradient-to-b from-indigo-50 to-white">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-sm font-medium mb-4">
            Beyond Academics
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Events & Activities</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
            We organize various events, seminars, workshops, and cultural activities to provide
            holistic development opportunities to our students.
          </p>
        </motion.div>

        {/* Conferences and Events */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="bg-white rounded-xl shadow-lg overflow-hidden mb-16"
        >
          <div className="bg-gradient-to-r from-indigo-600 to-purple-700 p-6 text-white">
            <h3 className="text-2xl font-bold flex items-center">
              <FaCalendarAlt className="mr-3" />
              Conferences, Seminars & Events
            </h3>
          </div>
          <div className="p-8">
            <div className="grid grid-cols-1 gap-6">
              {events.map((event, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row border border-gray-100 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="md:w-1/6 bg-indigo-50 flex items-center justify-center p-4">
                    <div className="text-center">
                      {event.type === 'conference' && (
                        <FaMicrophoneAlt className="text-4xl text-indigo-600 mx-auto" />
                      )}
                      {event.type === 'hackathon' && (
                        <FaLightbulb className="text-4xl text-indigo-600 mx-auto" />
                      )}
                      {event.type === 'lecture' && (
                        <FaChalkboardTeacher className="text-4xl text-indigo-600 mx-auto" />
                      )}
                      <p className="text-sm text-indigo-600 mt-2 capitalize">{event.type}</p>
                    </div>
                  </div>
                  <div className="md:w-5/6 p-6">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                      <h4 className="text-xl font-bold text-gray-800 mb-2 md:mb-0">
                        {event.title}
                      </h4>
                      <span className="bg-indigo-100 text-indigo-800 text-xs px-3 py-1 rounded-full mb-2 md:mb-0">
                        {event.date}
                      </span>
                    </div>
                    <p className="text-gray-600 mt-2">{event.description}</p>
                    {event.image && (
                      <div className="mt-4">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full max-h-48 object-contain object-left"
                          onError={(e) => {
                            e.target.src = '/images/placeholder-event.jpg';
                          }}
                        />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Extracurricular Activities */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-800 text-center mb-8 flex items-center justify-center">
            <FaUsers className="text-indigo-600 mr-3" />
            Extracurricular Activities
          </h3>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === 'all'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-indigo-50'
              }`}
            >
              All Activities
            </button>
            <button
              onClick={() => setActiveTab('cultural')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === 'cultural'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-indigo-50'
              }`}
            >
              <FaMusic className="inline mr-1" /> Cultural
            </button>
            <button
              onClick={() => setActiveTab('sports')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === 'sports'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-indigo-50'
              }`}
            >
              <FaFutbol className="inline mr-1" /> Sports
            </button>
            <button
              onClick={() => setActiveTab('seminar')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === 'seminar'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-indigo-50'
              }`}
            >
              <FaChalkboardTeacher className="inline mr-1" /> Seminars
            </button>
            <button
              onClick={() => setActiveTab('fdp')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === 'fdp'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-indigo-50'
              }`}
            >
              <FaGraduationCap className="inline mr-1" /> FDP
            </button>
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {filteredPhotos.map((photo, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative overflow-hidden rounded-lg shadow-md group"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = '/images/placeholder-activity.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <span className="text-white text-xs p-3 capitalize">{photo.alt}</span>
                </div>
                <div className="absolute top-2 right-2">
                  <span className="bg-white/80 text-indigo-800 text-xs px-2 py-1 rounded capitalize">
                    {photo.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-6">
            <span className="text-gray-500 text-sm">Glimpses of extracurricular activities</span>
          </div>
        </motion.div>

        {/* Best Practices */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl shadow-xl p-8 text-white mb-16 overflow-hidden relative"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full opacity-5 -mt-20 -mr-20"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full opacity-5 -mb-20 -ml-20"></div>

          <h3 className="text-2xl font-bold text-center mb-8 relative">Best Practices</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {bestPractices.map((practice, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/20 mb-4">
                  {practice.icon}
                </div>
                <h4 className="font-semibold text-lg mb-3">{practice.title}</h4>
                <p className="text-sm text-white/80">{practice.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Future Plans */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="bg-white rounded-xl shadow-lg p-8 border border-gray-200"
        >
          <h3 className="text-2xl font-bold text-gray-800 text-center mb-8 flex items-center justify-center">
            <FaLightbulb className="text-indigo-600 mr-3" />
            Future Plans
          </h3>

          <div className="max-w-3xl mx-auto">
            <p className="text-gray-700 mb-6 text-center">
              The long-term goals of our department are focused on student growth, innovation, and
              societal impact.
            </p>

            <div className="space-y-4">
              {futurePlans.map((plan, index) => (
                <div
                  key={index}
                  className="flex items-start bg-indigo-50 rounded-lg p-4 hover:bg-indigo-100 transition-colors"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center mr-4">
                    <span className="font-bold text-indigo-600">{index + 1}</span>
                  </div>
                  <p className="text-gray-700">{plan}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EceActivities;
