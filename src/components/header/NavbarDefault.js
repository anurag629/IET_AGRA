import React, { useState } from "react";
import { getToken } from "../../services/LocalStorageService";

function NavbarDefault() {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [toggleMenu, setToggleMenu] = useState(false);
  const { access_token } = getToken();

  const handleItemClick = (index) => {
    setActiveItemIndex(index);
  };

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  const NavList = [
    {
      title: 'Home',
      url: '/',
    },
    {
      title: 'T&P Cell',
      url: '/tandpcell',
    },
    {
      title: 'Gallery',
      url: '/gallery',
    },
  ];

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center">
          <img
            src="./images/Dr_B._R._Ambedkar_University_Logo.png"
            className="h-8 mr-3"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            IET AGRA
          </span>
        </a>
        <div className="flex md:order-2">
          {access_token ? (
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <a href="/dashboard">Dashboard</a>
            </button>
          ) : (
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <a href="/login">Login</a>
            </button>
          )}

          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded="false"
            onClick={handleToggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between w-full md:flex md:w-auto md:order-1 "
          id="navbar-cta"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {NavList.map((item, index) => (
              <li
                key={index}
                className={`cursor-pointer p-2 ${
                  activeItemIndex === index ? "bg-blue-500 text-white" : ""
                }`}
                onClick={() => handleItemClick(index)}
              >
                <a
                  href={item.url}
                  className={`cursor-pointer p-2 ${
                    activeItemIndex === index ? "bg-blue-500 text-white" : ""
                  }`}
                  onMouseEnter={() => setActiveItemIndex(index)}
                  onMouseLeave={() => setActiveItemIndex(-1)}
                >
                  <span>{item.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavbarDefault;
