import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getToken } from '../../services/LocalStorageService';

const Navbar = () => {
  const { access_token } = getToken();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg mt-4">
      <div className="px-4">
        <div className="flex items-center justify-between">
          <div className="flex shrink-0">
            <Link to="/" aria-current="page" className="flex items-center">
              <img
                className="h-7 w-auto"
                src="./images/institute-of-engineering-and-technology-logo.png"
                alt=""
              />
              <p className="sr-only">IET AGRA</p>
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
            <NavLink to="/" exact>
              Home
            </NavLink>
            <NavLink to="/tandpcell">Career Excellence Hub</NavLink>
            <NavLink to="/gallery">Gallery</NavLink>
          </div>
          <div className="flex items-center justify-end gap-3 md:flex">
            {access_token ? (
              <Link
                to="/dashboard"
                className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Dashboard
              </Link>
            ) : (
              <Link
                to="/login"
                className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Login
              </Link>
            )}
          </div>

          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="p-2 focus:outline-none">
              {isMobileMenuOpen ? (
                <svg
                  className="h-6 w-6 text-gray-900"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6 text-gray-900"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="flex flex-col mt-2 space-y-2">
              <NavLink to="/" exact>
                Home
              </NavLink>
              <NavLink to="/tandpcell">T&P Cell</NavLink>
              <NavLink to="/gallery">Gallery</NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const NavLink = ({ to, children, exact }) => {
  const isActive = useLocation().pathname === to;
  return (
    <Link
      to={to}
      className={`inline-block rounded-lg px-2 py-1 text-sm font-medium transition-all duration-200 ${
        isActive ? 'text-blue-600 bg-gray-100' : 'text-gray-900 hover:bg-gray-100'
      }`}
    >
      {children}
    </Link>
  );
};

export default Navbar;
