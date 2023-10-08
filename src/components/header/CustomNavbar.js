import React, { useState } from "react";
import { getToken } from "../../services/LocalStorageService";
import TandCellMegaMenu from "./TandPCellMegaMenu";


export function NavbarDefault() {
  const { access_token } = getToken();

  const [showMegaMenu, setShowMegaMenu] = useState(false);

  const handleMegaMenuHover = () => {
    setShowMegaMenu(true);
  };

  const handleMegaMenuLeave = () => {
    setShowMegaMenu(false);
  };

  return (
    <div>
      <nav className="container p-3 mx-auto md:p-0">
        <div className="flex items-center justify-between pt-4">
          {/* <img className="md:mx-auto w-24" src="../../images/institute-of-engineering-and-technology-logo.png" alt="logo_4" /> */}
          <img id="menu-button" className="w-7 h-7 md:hidden" src="../../images/Dr_B._R._Ambedkar_University_Logo.png" alt="menu icon" />
        </div>
        <div className="hidden md:block pt-4" id="menu" >
          <div className="grid grid-cols-1 md:grid-cols-9">
            <div className="col-span-4 text-lg md:border-y border-y-black">
              <ul className="justify-between md:p-4 md:flex">
                <li className="p-2 py-4 border-b md:py-0 md:border-0 transform hover:scale-105 transition-transform duration-10"><a href="/">Home</a></li>
                <li className="p-2 py-4 border-b md:py-0 md:border-0 transform hover:scale-105 transition-transform duration-10"><a href="/">Academic</a></li>

                <li className="p-2 py-4 border-b md:py-0 md:border-0 transform hover:scale-105 transition-transform duration-10"><a href="/">Students</a></li>
              </ul>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center justify-center ">
                <div className="p-3 border-2 border-black border-dotted rounded-full">
                  <img className="mx-auto w-9 h-9" src="../../images/Dr_B._R._Ambedkar_University_Logo.png" alt="cart" />
                </div>
              </div>
            </div>
            <div className="col-span-4 md:border-y border-y-black">
              <ul className="justify-around text-lg md:p-4 md:flex">
                <li
                  className="p-2 py-4 md:py-0 md:border-0 transform hover:scale-105 transition-transform duration-300"
                  onMouseEnter={() => handleMegaMenuHover()}
                  onMouseLeave={() => handleMegaMenuLeave()}
                >
                  <a href="/tandpcell">T&P Cell</a>
                  <div className="mega-menu-container" onMouseEnter={() => handleMegaMenuHover()}>
                    {/* Conditionally render the MegaMenu component */}
                    {showMegaMenu && <TandCellMegaMenu />}
                  </div>
                </li>
                {/* Mega Menu */}

                {/* End Mega Menu */}
                <li className="p-2 py-4 border-b md:py-0 md:border-0 transform hover:scale-105 transition-transform duration-10"><a href="/gallery">Gallery</a></li>
                {access_token ? (
                  <li className="p-2 py-4 border-b md:py-0 md:border-0 transform hover:scale-105 transition-transform duration-10"><a href="/dashboard">Dashboard</a></li>
                ) : (
                  <li className="p-2 py-4 border-b md:py-0 md:border-0 transform hover:scale-105 transition-transform duration-10"><a href="/login">Login/Registration</a></li>
                )}
              </ul>
            </div>


          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarDefault;