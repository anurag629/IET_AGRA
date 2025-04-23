import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../../../utils/animations';
import {
  FaCalendarAlt,
  FaUniversity,
  FaMapMarkerAlt,
  FaUsers,
  FaChevronDown,
} from 'react-icons/fa';

const CseSeminarConferenceAndWorkshop = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Get display name for active tab
  const getTabDisplayName = (tab) => {
    switch (tab) {
      case 'all':
        return 'All Events';
      case 'conference':
        return 'Conferences';
      case 'workshop':
        return 'Workshops';
      case 'webinar':
        return 'Webinars';
      default:
        return 'All Events';
    }
  };

  // Events data organized by category
  const events = [
    {
      id: 1,
      title: 'One Day Workshop on G20 Summit & Its Impact on Technology',
      type: 'workshop',
      date: '7th February 2023',
      organizer:
        'Institute of Engineering and Technology Dr. Bhimrao Ambedkar University Khandari Campus, Agra',
      program: 'G20 Summit',
      description:
        'A workshop focusing on technological implications of the G20 Summit discussions and outcomes.',
    },
    {
      id: 2,
      title: 'National Conference on Advance Trends in Computer Science & Engineering',
      type: 'conference',
      date: '13-14 February, 2021',
      organizer: 'IET Agra',
      description:
        'A national conference exploring cutting-edge trends and advancements in computer science and engineering fields.',
    },
    {
      id: 3,
      title: 'Day workshop on the development of chat bot',
      type: 'workshop',
      date: '2021',
      organizer: 'IET Agra',
      description:
        'One day Hands-on session to develop chat bot applications, providing practical development experience.',
    },
    {
      id: 4,
      title: 'EMF, EAP, Gender Sensitization & Human Values',
      type: 'workshop',
      date: '14th - 19th September 2020',
      organizer:
        'Institute of Engineering and Technology Dr. Bhimrao Ambedkar University Khandari Campus, Agra',
      program: 'TEQIP III',
      description:
        'One Week Online Workshop covering topics on electromagnetic fields, EAP, gender sensitization and human values.',
    },
    {
      id: 5,
      title: 'Outcome Based Education',
      type: 'workshop',
      date: '10th June, 2020',
      organizer: 'SPUI and AKTU Lucknow',
      program: 'TEQIP-III',
      description:
        'One day online workshop focused on implementing outcome-based education methodologies.',
    },
    {
      id: 6,
      title: 'Pandemic and Epidemics: Shaping of Polity, Society and Economy Across the Globe',
      type: 'webinar',
      date: '10th - 11th May 2020',
      organizer: 'Department of History & Culture, Dr. Bhimrao Ambedkar University, Agra',
      collaborator: 'Indian Council of Historical Research, New Delhi',
      description:
        'Two days National Webinar exploring the impacts of pandemics and epidemics on various aspects of society.',
    },
    {
      id: 7,
      title: 'Future Scenario of Higher Education: Teaching Learning through Digital Platforms',
      type: 'workshop',
      date: '3rd - 4th May 2020',
      organizer: 'Institute of Engineering and Technology Khandari Campus Agra',
      program: 'IQAC',
      description:
        'Two days workshop exploring digital transformation in higher education teaching methodologies.',
    },
    {
      id: 8,
      title: 'Outcome Based Education & SAR Preparation for NBA Accreditation',
      type: 'workshop',
      date: '27th - 28th July, 2019',
      organizer: 'I.E.T., Khandari',
      program: 'TEQIP-III',
      description:
        'Two days workshop focused on outcome-based education implementation and preparing for NBA accreditation.',
    },
    {
      id: 9,
      title: 'Outcome Based Education',
      type: 'workshop',
      date: '26th - 27th February, 2018',
      organizer: 'I.E.T., Khandari',
      program: 'TEQIP-III',
      description:
        'Two days workshop on implementing outcome-based education framework in engineering education.',
    },
  ];

  const filteredEvents =
    activeTab === 'all' ? events : events.filter((event) => event.type === activeTab);

  return (
    <section id="seminars-conferences" className="py-16 px-4 bg-gray-50 relative overflow-hidden">
      {/* Background elements remain the same */}
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
          <h2 className="text-3xl font-bold text-gray-800 mb-3">
            Seminars, Conferences & Workshops
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            The Department of Computer Science & Engineering actively participates in and organizes
            various academic events to promote knowledge sharing and professional development.
          </p>
        </motion.div>

        {/* Responsive Filter tabs - Dropdown for mobile, horizontal tabs for desktop */}
        <div className="flex justify-center mb-8">
          {/* Mobile Dropdown (visible on small screens) */}
          <div className="md:hidden w-full max-w-xs relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="w-full flex items-center justify-between px-4 py-2 bg-white rounded-lg shadow-sm text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <span className="flex items-center">
                <FaCalendarAlt className="mr-2 text-blue-600" />
                {getTabDisplayName(activeTab)}
              </span>
              <FaChevronDown
                className={`transition-transform ${dropdownOpen ? 'transform rotate-180' : ''}`}
              />
            </button>

            {dropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-lg overflow-hidden z-20"
              >
                <button
                  onClick={() => {
                    setActiveTab('all');
                    setDropdownOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 transition-colors ${
                    activeTab === 'all' ? 'bg-blue-50 text-blue-700' : 'hover:bg-gray-50'
                  }`}
                >
                  All Events
                </button>
                <button
                  onClick={() => {
                    setActiveTab('conference');
                    setDropdownOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 transition-colors ${
                    activeTab === 'conference' ? 'bg-blue-50 text-blue-700' : 'hover:bg-gray-50'
                  }`}
                >
                  Conferences
                </button>
                <button
                  onClick={() => {
                    setActiveTab('workshop');
                    setDropdownOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 transition-colors ${
                    activeTab === 'workshop' ? 'bg-blue-50 text-blue-700' : 'hover:bg-gray-50'
                  }`}
                >
                  Workshops
                </button>
                <button
                  onClick={() => {
                    setActiveTab('webinar');
                    setDropdownOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 transition-colors ${
                    activeTab === 'webinar' ? 'bg-blue-50 text-blue-700' : 'hover:bg-gray-50'
                  }`}
                >
                  Webinars
                </button>
              </motion.div>
            )}
          </div>

          {/* Desktop Tabs (visible on medium screens and up) */}
          <div className="hidden md:inline-flex bg-white rounded-lg shadow-sm p-1">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-md transition-all ${
                activeTab === 'all'
                  ? 'bg-blue-600 text-white font-medium shadow-sm'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              All Events
            </button>
            <button
              onClick={() => setActiveTab('conference')}
              className={`px-4 py-2 rounded-md transition-all ${
                activeTab === 'conference'
                  ? 'bg-blue-600 text-white font-medium shadow-sm'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Conferences
            </button>
            <button
              onClick={() => setActiveTab('workshop')}
              className={`px-4 py-2 rounded-md transition-all ${
                activeTab === 'workshop'
                  ? 'bg-blue-600 text-white font-medium shadow-sm'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Workshops
            </button>
            <button
              onClick={() => setActiveTab('webinar')}
              className={`px-4 py-2 rounded-md transition-all ${
                activeTab === 'webinar'
                  ? 'bg-blue-600 text-white font-medium shadow-sm'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Webinars
            </button>
          </div>
        </div>

        <div className="space-y-6">
          {filteredEvents.map((event) => (
            <motion.div
              key={event.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="border-l-4 border-blue-500 p-6">
                <div className="flex flex-wrap items-center mb-2">
                  <span
                    className={`text-xs font-medium px-2.5 py-0.5 rounded mr-2 ${
                      event.type === 'conference'
                        ? 'bg-indigo-100 text-indigo-800'
                        : event.type === 'workshop'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-green-100 text-green-800'
                    }`}
                  >
                    {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                  </span>
                  <div className="flex items-center text-sm text-gray-500">
                    <FaCalendarAlt className="mr-1" />
                    {event.date}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-3">{event.title}</h3>

                <div className="space-y-2 mb-4">
                  <div className="flex items-start">
                    <FaUniversity className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                    <p className="text-sm text-gray-700">{event.organizer}</p>
                  </div>

                  {event.program && (
                    <div className="flex items-center">
                      <FaUsers className="text-blue-600 mr-2 flex-shrink-0" />
                      <p className="text-sm text-gray-700">Program: {event.program}</p>
                    </div>
                  )}

                  {event.collaborator && (
                    <div className="flex items-center">
                      <FaMapMarkerAlt className="text-blue-600 mr-2 flex-shrink-0" />
                      <p className="text-sm text-gray-700">
                        In collaboration with: {event.collaborator}
                      </p>
                    </div>
                  )}
                </div>

                <p className="text-gray-600 text-sm">{event.description}</p>
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
            href="#contact"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-lg transition-colors shadow-md"
          >
            Contact for Event Participation
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

export default CseSeminarConferenceAndWorkshop;
