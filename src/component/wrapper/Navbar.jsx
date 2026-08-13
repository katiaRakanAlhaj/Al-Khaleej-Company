import { useContext, useEffect, useState, useRef } from "react";
import i18n from "../../i18n";
import { MyContext } from "../store";
import facebook from "../../assets/images/facebook.svg";
import LinkedIn from "../../assets/images/linkedIn.svg";
import Twitter from "../../assets/images/twitter.svg";
import instgram from "../../assets/images/instgram.svg";
import logo from "../../assets/images/logo.svg";
import { useParams, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/", active: true },
    { name: "About", path: "/about", active: false },
    { name: "Services", path: "/services", active: false },
    { name: "Projects", path: "/projects", active: false },
    { name: "News", path: "/news", active: false },
    { name: "Branches", path: "/branches", active: false },
    { name: "Clients", path: "/clients", active: false },
    { name: "Contact us", path: "/contact", active: false },
  ];

  return (
    <header className="w-full bg-white relative shadow-md">
      {/* Top Dark Bar */}
      <div className="bg-[#003057] w-full">
        <div className="mx-auto px-4 lg:px-12 py-3.5">
          <div className="flex flex-wrap items-center justify-between">
            <div className="w-[25rem] flex-shrink-0 hidden lg:block"></div>
            
            <div className="flex flex-1 items-center justify-between space-x-6 text-white text-xs md:text-sm">
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-white">6102</span>
                </div>
                <div className="flex items-center space-x-2 border-l border-gray-700 pl-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-white">InsurInfo@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2 border-l border-gray-700 pl-6 hidden lg:flex">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-white">238, Arimantab, Moska - USA</span>
                </div>
              </div>

              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2 cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <circle cx="12" cy="12" r="10" />
                    <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                  </svg>
                  <span className="text-white uppercase font-medium">English</span>
                </div>

                <div className="flex items-end justify-end space-x-3 border-l border-gray-700 pl-6">
                  <a href="#" className="hover:opacity-80 transition-opacity">
                    <img src={facebook} alt="Facebook" className="w-4 h-4 brightness-0 invert" />
                  </a>
                  <a href="#" className="hover:opacity-80 transition-opacity">
                    <img src={instgram} alt="Instagram" className="w-4 h-4 brightness-0 invert" />
                  </a>
                  <a href="#" className="hover:opacity-80 transition-opacity">
                    <img src={LinkedIn} alt="LinkedIn" className="w-4 h-4 brightness-0 invert" />
                  </a>
                  <a href="#" className="hover:opacity-80 transition-opacity">
                    <img src={Twitter} alt="Twitter" className="w-4 h-4 brightness-0 invert" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar - FIXED VERSION */}
      <div className="relative bg-white flex items-center px-4 lg:px-12 h-[8rem]">
        {/* Background shape */}
        <div
          className="bg-slate-50 z-10"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "50%",
            clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)",
          }}
        ></div>

        {/* Logo Container */}
        <div
          className="bg-[#1e40af] absolute bottom-0 left-0 top-[-3rem] w-[20rem] md:w-[25rem] flex items-center justify-center px-8 py-4 z-20"
          style={{
            clipPath: "polygon(0 0, 70% 0, 100% 100%, 0 100%)",
          }}
        >
          <img src={logo} alt="Logo" className="w-[8rem] md:w-[10rem] ml-[-3rem] md:ml-[-5rem]" />
        </div>

        {/* Navigation Links - FIXED */}
        <nav className="hidden xl:flex items-center justify-center flex-1 gap-x-4 lg:gap-x-6 xl:gap-x-8 text-base lg:text-lg font-medium z-20 ml-auto">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.path}
              className={`text-base lg:text-lg whitespace-nowrap ${
                link.active
                  ? "text-[#003057] font-[700] border-b-2 border-[#003057] pb-1"
                  : "hover:text-[#1e40af] font-[600] transition-colors pb-1"
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button - Add if needed */}
        <button className="xl:hidden ml-auto z-20 p-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navbar;