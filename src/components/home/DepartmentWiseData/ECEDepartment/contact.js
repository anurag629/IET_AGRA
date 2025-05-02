import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGlobe,
  FaPaperPlane,
  FaCheck,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
  FaHeart,
  FaStar,
} from 'react-icons/fa';
import { IoIosSend } from 'react-icons/io';

const EceContact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [particles, setParticles] = useState([]);
  const [formErrors, setFormErrors] = useState({});
  const mapRef = useRef(null);

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
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  const iconFloatVariants = {
    initial: { y: 0 },
    animate: {
      y: [-5, 5, -5],
      transition: {
        repeat: Infinity,
        duration: 3,
        ease: 'easeInOut',
      },
    },
  };

  // Generate random sparks for background
  useEffect(() => {
    const newParticles = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 6 + 2,
      color: i % 2 === 0 ? '#6366f1' : '#9333ea',
      duration: Math.random() * 2 + 1, // Store duration per particle
      delay: Math.random() * 2, // Store delay per particle
    }));
    setParticles(newParticles);
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error when user types
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: '',
      });
    }
  };

  // Validate form
  const validateForm = () => {
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }

    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    }

    return errors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validateForm();

    if (Object.keys(errors).length === 0) {
      // In a real application, you would send the data to a server here
      console.log('Form data submitted:', formData);
      setFormSubmitted(true);

      // Reset form data
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });

      // Automatically hide the success message after 8 seconds
      setTimeout(() => {
        setFormSubmitted(false);
      }, 8000);
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <section id="contact" className="py-16 px-4 relative overflow-hidden">
      {/* Background sparks */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full z-0"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              background: particle.color,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [0, 1.2, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: particle.duration,
              ease: 'easeInOut',
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-sm font-medium mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Contact Us</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
            Have questions about the Electronics & Communication Engineering Department? We're here
            to help and would love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="bg-white rounded-xl shadow-xl p-8 relative"
          >
            <AnimatePresence>
              {!formSubmitted ? (
                <motion.form
                  onSubmit={handleSubmit}
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  <motion.h3
                    variants={itemVariants}
                    className="text-2xl font-bold text-gray-800 mb-6 flex items-center"
                  >
                    <FaPaperPlane className="mr-3 text-indigo-600" />
                    Send us a message
                  </motion.h3>

                  <motion.div variants={itemVariants}>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        formErrors.name ? 'border-red-400' : 'border-gray-300'
                      } focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-colors duration-200`}
                      placeholder="Your name"
                    />
                    {formErrors.name && (
                      <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>
                    )}
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        formErrors.email ? 'border-red-400' : 'border-gray-300'
                      } focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-colors duration-200`}
                      placeholder="your.email@example.com"
                    />
                    {formErrors.email && (
                      <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
                    )}
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-colors duration-200"
                      placeholder="Subject of your message"
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="5"
                      className={`w-full px-4 py-3 rounded-lg border ${
                        formErrors.message ? 'border-red-400' : 'border-gray-300'
                      } focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-colors duration-200`}
                      placeholder="Your message here..."
                    ></textarea>
                    {formErrors.message && (
                      <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>
                    )}
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium py-3 rounded-lg transition-all duration-300 flex items-center justify-center"
                    >
                      <span className="mr-2">Submit Message</span>
                      <IoIosSend className="text-xl" />
                    </button>
                  </motion.div>
                </motion.form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="text-center py-12"
                >
                  <motion.div
                    className="w-20 h-20 bg-green-100 rounded-full mx-auto flex items-center justify-center mb-6"
                    initial={{ scale: 0 }}
                    animate={{ scale: [0, 1.2, 1] }}
                    transition={{ duration: 0.5 }}
                  >
                    <FaCheck className="text-3xl text-green-600" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Message Sent!</h3>
                  <p className="text-gray-600">
                    Thank you for contacting us. We'll get back to you shortly.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-6 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-6 rounded-lg transition-all duration-300"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="flex flex-col gap-6"
          >
            {/* Contact Info Card */}
            <motion.div variants={itemVariants} className="bg-white rounded-xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Department Contact Information
              </h3>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <motion.div
                    variants={iconFloatVariants}
                    initial="initial"
                    animate="animate"
                    className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4"
                  >
                    <FaMapMarkerAlt className="text-xl text-indigo-600" />
                  </motion.div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">Address</h4>
                    <p className="text-gray-600">
                      Department of Electronics & Communication Engineering,
                      <br />
                      Institute of Engineering & Technology,
                      <br />
                      Dr. Bhimrao Ambedkar University Campus,
                      <br />
                      Agra, Uttar Pradesh - 282004
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <motion.div
                    variants={iconFloatVariants}
                    initial="initial"
                    animate="animate"
                    className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4"
                  >
                    <FaPhone className="text-xl text-indigo-600" />
                  </motion.div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">Phone</h4>
                    <p className="text-gray-600">
                      +91 562-2152736
                      <br />
                      +91 562-2152741
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <motion.div
                    variants={iconFloatVariants}
                    initial="initial"
                    animate="animate"
                    className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4"
                  >
                    <FaEnvelope className="text-xl text-indigo-600" />
                  </motion.div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">Email</h4>
                    <p className="text-gray-600">
                      ecedept@dbrau.ac.in
                      <br />
                      director.iet@dbrau.ac.in
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <motion.div
                    variants={iconFloatVariants}
                    initial="initial"
                    animate="animate"
                    className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4"
                  >
                    <FaGlobe className="text-xl text-indigo-600" />
                  </motion.div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">Website</h4>
                    <p className="text-gray-600">www.iet.dbrau.ac.in</p>
                  </div>
                </li>
              </ul>
            </motion.div>

            {/* Social Media */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-xl shadow-xl p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-6">Connect With Us</h3>
              <div className="flex justify-between">
                <motion.a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                  whileHover={{ y: -5 }}
                >
                  <FaFacebookF className="text-white" />
                </motion.a>
                <motion.a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                  whileHover={{ y: -5 }}
                >
                  <FaTwitter className="text-white" />
                </motion.a>
                <motion.a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                  whileHover={{ y: -5 }}
                >
                  <FaLinkedinIn className="text-white" />
                </motion.a>
                <motion.a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                  whileHover={{ y: -5 }}
                >
                  <FaYoutube className="text-white" />
                </motion.a>
                <motion.a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                  whileHover={{ y: -5 }}
                >
                  <FaInstagram className="text-white" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Thanks For Visiting */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl shadow-xl p-10 text-white text-center overflow-hidden relative"
        >
          {/* Background animated elements */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={`star-${i}`}
                className="absolute"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  opacity: 0.6,
                }}
                animate={{
                  scale: [0.7, 1, 0.7],
                  opacity: [0.4, 0.8, 0.4],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2 + Math.random() * 3,
                  ease: 'easeInOut',
                  delay: Math.random() * 2,
                }}
              >
                <FaStar className="text-yellow-200 text-lg" />
              </motion.div>
            ))}
          </div>

          <div className="relative z-10">
            <motion.div
              className="w-20 h-20 mx-auto mb-6 relative"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  initial={{ scale: 1 }}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <FaHeart className="text-5xl text-red-400" />
                </motion.div>
              </div>
            </motion.div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">Thanks For Visiting Us</h2>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto mb-8">
              We appreciate your interest in the Electronics & Communication Engineering Department
            </p>

            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <p className="text-lg opacity-80 mb-8">
                We look forward to hearing from you and answering any questions you might have about
                our department, programs, faculty, or admissions process.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <motion.a
                  href="#about"
                  className="px-6 py-3 bg-white text-indigo-700 rounded-lg font-medium shadow-lg hover:bg-indigo-50 transition-colors"
                  whileHover={{ y: -3, scale: 1.03 }}
                >
                  Explore More
                </motion.a>
                <motion.a
                  href="#"
                  className="px-6 py-3 bg-indigo-800/30 backdrop-blur-sm text-white border border-white/20 rounded-lg font-medium hover:bg-indigo-800/50 transition-colors"
                  whileHover={{ y: -3, scale: 1.03 }}
                >
                  Apply Now
                </motion.a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EceContact;
