import React from 'react';
import { motion } from 'framer-motion';
import {
  FaGithub,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { fadeIn } from '../../../../utils/animations';

const CseContact = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const socialLinks = [
    { icon: <FaLinkedin />, url: '#', label: 'LinkedIn' },
    { icon: <FaTwitter />, url: '#', label: 'Twitter' },
    { icon: <FaInstagram />, url: '#', label: 'Instagram' },
  ];

  return (
    <section
      id="contact"
      className="py-20 px-4 bg-gradient-to-br from-indigo-900 via-blue-800 to-blue-900 text-white overflow-hidden relative"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-blue-800/50 text-blue-200 rounded-full text-sm font-medium mb-4 border border-blue-700/50 backdrop-blur-sm">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto mb-6 rounded-full"></div>
          <p className="max-w-2xl mx-auto text-blue-100 text-lg">
            Have questions about our programs, research opportunities, or admissions? Our team is
            here to help you with any inquiries you might have.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Email Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{
              y: -8,
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)',
              transition: { duration: 0.3 },
            }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:bg-white/15 transition-all duration-300"
          >
            <div className="flex items-start">
              <div className="bg-gradient-to-br from-blue-400 to-indigo-400 p-4 rounded-full mr-5 shadow-lg">
                <FaEnvelope className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-white">Email</h3>
                <a
                  href="mailto:cse.hod@ietagra.ac.in"
                  className="text-blue-200 hover:text-white transition-colors block mb-2"
                >
                  cse.hod@ietagra.ac.in
                </a>
                <a
                  href="mailto:cse.office@ietagra.ac.in"
                  className="text-blue-200 hover:text-white transition-colors block"
                >
                  cse.office@ietagra.ac.in
                </a>
              </div>
            </div>
          </motion.div>

          {/* Phone Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{
              y: -8,
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)',
              transition: { duration: 0.3 },
            }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:bg-white/15 transition-all duration-300"
          >
            <div className="flex items-start">
              <div className="bg-gradient-to-br from-blue-400 to-indigo-400 p-4 rounded-full mr-5 shadow-lg">
                <FaPhoneAlt className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-white">Phone</h3>
                <a
                  href="tel:+915622570450"
                  className="text-blue-200 hover:text-white transition-colors block mb-2"
                >
                  +91 562-2570450
                </a>
                <a
                  href="tel:+915622570451"
                  className="text-blue-200 hover:text-white transition-colors block"
                >
                  +91 562-2570451
                </a>
              </div>
            </div>
          </motion.div>

          {/* Location Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{
              y: -8,
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)',
              transition: { duration: 0.3 },
            }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:bg-white/15 transition-all duration-300"
          >
            <div className="flex items-start">
              <div className="bg-gradient-to-br from-blue-400 to-indigo-400 p-4 rounded-full mr-5 shadow-lg">
                <FaMapMarkerAlt className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-white">Location</h3>
                <p className="text-blue-200 mb-1">Department of Computer Science,</p>
                <p className="text-blue-200 mb-1">IET Campus, Swami Vivekanand Campus</p>
                <p className="text-blue-200">Dr. B.R. Ambedkar University, Agra - 282002</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Map or Additional Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mt-16 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 overflow-hidden relative"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">Visit Our Department</h3>
              <p className="text-blue-200 mb-5">
                We invite you to visit our department to learn more about our programs, meet our
                faculty, and explore our facilities. Our team is ready to assist you with all your
                inquiries.
              </p>

              <div className="flex flex-wrap gap-4 mb-6">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    aria-label={link.label}
                    className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>

              <Link
                to="/tandpcell"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <FaGithub className="h-5 w-5 mr-2" />
                View Student Projects
              </Link>
            </div>

            <div className="hidden lg:block h-80 bg-blue-800/20 rounded-xl overflow-hidden relative">
              {/* You can add a map here or an image of your campus */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="p-4 bg-blue-900/70 backdrop-blur-sm rounded-lg text-center">
                  <p className="text-blue-200 text-sm">
                    Map Placeholder - Replace with an actual map or campus image
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CseContact;
