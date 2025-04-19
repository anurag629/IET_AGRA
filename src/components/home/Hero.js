import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-10 text-center lg:pt-28">
      <div className="relative mb-12 pt-2 animate-fade-in-down">
        <h1 className="text-6xl sm:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent transform transition-all duration-300 hover:scale-105 mb-3 drop-shadow-sm">
          Training and Placement Cell
        </h1>
        <p className="text-base font-medium text-slate-700 tracking-wide relative flex justify-center items-center gap-4 before:content-[''] before:h-[1px] before:w-12 before:bg-slate-400 after:content-[''] after:h-[1px] after:w-12 after:bg-slate-400">
          Institute of Engineering and Technology, Agra
        </p>
        <div className="w-32 h-1.5 mx-auto mt-4 rounded-full shadow-sm relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-300 via-blue-500 to-indigo-600 animate-gradient-x"></div>
        </div>
      </div>

      {/* Placement Statistics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-md border border-blue-50 hover:shadow-lg transition-all">
          <h3 className="text-blue-600 font-bold text-3xl md:text-4xl">95%</h3>
          <p className="text-slate-600 text-sm mt-1">Placement Rate</p>
        </div>
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-md border border-blue-50 hover:shadow-lg transition-all">
          <h3 className="text-blue-600 font-bold text-3xl md:text-4xl">250+</h3>
          <p className="text-slate-600 text-sm mt-1">Offers</p>
        </div>
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-md border border-blue-50 hover:shadow-lg transition-all">
          <h3 className="text-blue-600 font-bold text-3xl md:text-4xl">42</h3>
          <p className="text-slate-600 text-sm mt-1">Companies</p>
        </div>
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-md border border-blue-50 hover:shadow-lg transition-all">
          <h3 className="text-blue-600 font-bold text-3xl md:text-4xl">12.5L</h3>
          <p className="text-slate-600 text-sm mt-1">Highest Package</p>
        </div>
      </div>

      <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
        <span className="inline-block">
          Vidya
          <span className="relative whitespace-nowrap text-blue-600">
            <svg
              aria-hidden="true"
              viewBox="0 0 418 42"
              className="absolute top-2/3 left-0 h-[0.58em] w-full fill-blue-300/70"
              preserveAspectRatio="none"
            >
              <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
            </svg>
            <span className="relative"> Sidhi </span>
          </span>
        </span>
        <span className="relative"> Dwaar</span>
      </h1>

      <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
        <span className="inline-block font-serif">Gateway to Career...</span>
      </p>

      {/* Mission Statement */}
      <p className="mx-auto mt-6 max-w-3xl text-base text-slate-600 leading-relaxed">
        Empowering students with industry-ready skills and connecting them with premier
        opportunities through mentorship, training, and strategic industry partnerships.
      </p>

      {/* Quick Links */}
      <div className="flex flex-wrap justify-center gap-4 mt-8">
        <Link
          to="/"
          className="px-5 py-2 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 transition-colors shadow-sm hover:shadow"
        >
          Our Training Programs
        </Link>
        <Link
          to="/"
          className="px-5 py-2 bg-indigo-600 text-white rounded-full text-sm font-medium hover:bg-indigo-700 transition-colors shadow-sm hover:shadow"
        >
          Recruiting Companies
        </Link>
        <Link
          to="/"
          className="px-5 py-2 bg-blue-gray-500 text-white rounded-full text-sm font-medium hover:bg-slate-800 transition-colors shadow-sm hover:shadow"
        >
          Student Achievements
        </Link>
      </div>
    </div>
  );
};

export default Hero;
