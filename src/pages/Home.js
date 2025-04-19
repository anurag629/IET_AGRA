import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/home/Hero';

const Home = () => {
  // Carousel state and logic
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselImages = [
    {
      url: '/images/building2.jpg',
      alt: 'IET Agra Campus',
      des: 'Explore our beautiful campus',
    },
    {
      url: '/images/college_tour.jpg',
      alt: 'College Tour',
      des: 'Students on a college tour',
    },
    {
      url: '/images/college_teachers.png',
      alt: 'Faculty Members',
      des: 'Dedicated faculty members',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const departments = [
    {
      name: 'Computer Science & Engineering',
      description:
        'Master programming, algorithms, AI and software development with modern computing infrastructure.',
      icon: '💻',
      path: '/departments/cse',
      bgColor: 'from-green-500 to-emerald-400',
    },
    {
      name: 'Mechanical Engineering',
      description:
        'Explore the fascinating world of machines, thermodynamics, and manufacturing with our state-of-the-art labs and experienced faculty.',
      icon: '🔧',
      path: '/departments/me',
      bgColor: 'from-blue-500 to-cyan-400',
    },
    {
      name: 'Electronics Engineering',
      description:
        'Learn about circuits, devices, and communication systems with cutting-edge technology and practical applications.',
      icon: '🔌',
      path: '/',
      bgColor: 'from-red-500 to-pink-500',
    },
    {
      name: 'Electrical Engineering',
      description:
        'Dive into the study of electricity, power systems, and electronics with hands-on projects and industry partnerships.',
      icon: '⚡',
      path: '/',
      bgColor: 'from-purple-500 to-indigo-500',
    },
    {
      name: 'Civil Engineering',
      description:
        'Design and build the infrastructure of tomorrow with sustainable practices and innovative techniques.',
      icon: '🏗️',
      path: '/',
      bgColor: 'from-teal-500 to-cyan-400',
    },
  ];

  const ClubandTNPCell = [
    {
      name: 'Traning & Placement Cell',
      description:
        'Enhance your employability with our dedicated training programs, workshops, and placement assistance.',
      icon: '📈',
      path: '/tnpcell',
      bgColor: 'from-yellow-500 to-orange-400',
    },
    {
      name: 'IET Club Nest',
      description:
        'Join our vibrant student clubs to explore your interests, develop skills, and make lasting friendships.',
      icon: '🎉',
      path: '/',
      bgColor: 'from-pink-500 to-red-400',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section (using the Hero component) */}
      {/* <Hero /> */}

      {/* Carousel Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-2xl shadow-xl mb-4">
          {carouselImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img src={image.url} alt={image.alt} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">{image.alt}</h3>
                  <p className="text-lg">{image.des}</p>
                </div>
              </div>
            </div>
          ))}

          {/* Carousel Navigation Dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentSlide ? 'bg-white' : 'bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section with Animation */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              About IET Agra
            </span>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto mt-2"></div>
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            IET Agra is a premier engineering institute offering top-notch education across various
            engineering disciplines. Our mission is to nurture talent, foster innovation, and
            produce industry-ready professionals equipped with technical expertise and ethical
            values.
          </p>
          <div className="mt-8">
            <Link
              to="/"
              className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium text-lg transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-md"
            >
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Departments Section - 3 Column Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12 relative">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Our Departments
          </span>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto mt-2"></div>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((dept, index) => (
            <Link
              key={index}
              to={dept.path}
              className="group block rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white"
            >
              <div
                className={`h-20 bg-gradient-to-r ${dept.bgColor} flex items-center justify-center text-4xl`}
              >
                <span className="filter drop-shadow-lg">{dept.icon}</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                  {dept.name}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{dept.description}</p>
                <div className="flex justify-end">
                  <span className="text-blue-600 font-medium inline-flex items-center group-hover:underline">
                    Learn more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1 group-hover:ml-2 transition-all"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Clubs and Training & Placement Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12 relative">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Training & Placement and Clubs
          </span>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto mt-2"></div>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ClubandTNPCell.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="group block rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white"
            >
              <div
                className={`h-20 bg-gradient-to-r ${item.bgColor} flex items-center justify-center text-4xl`}
              >
                <span className="filter drop-shadow-lg">{item.icon}</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                  {item.name}
                </h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex justify-end">
                  <span className="text-blue-600 font-medium inline-flex items-center group-hover:underline">
                    Learn more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1 group-hover:ml-2 transition-all"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
