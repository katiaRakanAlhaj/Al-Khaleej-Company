import { useContext, useEffect, useState, useRef } from "react";
import i18n from "../../i18n";
import { MyContext } from "../store";
import facebook from "../../assets/images/facebook.svg";
import LinkedIn from "../../assets/images/linkedIn.svg";
import Twitter from "../../assets/images/twitter.svg";
import instgram from "../../assets/images/instgram.svg";
import logo from "../../assets/images/logo.svg";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import phone from "../../assets/images/phone.svg";
import email from "../../assets/images/email.svg";
import location from "../../assets/images/location.svg";

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

  // Social media links array
  const socialLinks = [
    { 
      id: 1, 
      name: "Facebook", 
      icon: facebook, 
      url: "https://facebook.com/yourpage" 
    },
    { 
      id: 2, 
      name: "Instagram", 
      icon: instgram, 
      url: "https://instagram.com/yourpage" 
    },
    { 
      id: 3, 
      name: "LinkedIn", 
      icon: LinkedIn, 
      url: "https://linkedin.com/company/yourpage" 
    },
    { 
      id: 4, 
      name: "Twitter", 
      icon: Twitter, 
      url: "https://twitter.com/yourpage" 
    },
  ];

  // Contact information array
  const contactInfo = [
    {
      id: 1,
      type: "phone",
      icon: phone,
      value: "6102",
      label: "Phone",
      href: "tel:6102"
    },
    {
      id: 2,
      type: "email",
      icon: email,
      value: "info@yourcompany.com",
      label: "Email",
      href: "mailto:info@yourcompany.com"
    },
    {
      id: 3,
      type: "address",
      icon: location,
      value: "238, Arimantab, Moska - USA",
      label: "Address"
    }
  ];

  return (
    <header className="w-full bg-white relative shadow-md">
      {/* Top Dark Bar */}
      <div className="bg-[#003057] w-full">
        <div className="mx-auto px-4 lg:px-12 py-6">
          <div className="flex flex-wrap items-center justify-between">
            <div className="w-[25rem] flex-shrink-0 hidden lg:block"></div>
            
            <div className="flex flex-1 items-center justify-between space-x-6 text-white text-xs md:text-sm">
              <div className="flex items-center space-x-6">
                {/* Map through contactInfo for phone, email, and address */}
                <div className="flex items-center space-x-12 ml-[-5rem]">
                  {contactInfo.map((contact, index) => (
                    <div 
                      key={contact.id}
                      className={`flex items-center space-x-4 ${
                        index > 0 ? "border-l-2 border-primary pl-10" : ""
                      } ${contact.type === "address" ? "hidden lg:flex" : ""}`}
                    >
                      <img 
                        src={contact.icon} 
                        alt={contact.label} 
                        className="w-6 h-6"
                      />
                      {contact.type === "phone" ? (
                        <a href={contact.href} className="text-white hover:underline">
                          {contact.value}
                        </a>
                      ) : contact.type === "email" ? (
                        <a href={contact.href} className="text-white hover:underline">
                          {contact.value}
                        </a>
                      ) : (
                        <span className="text-white">{contact.value}</span>
                      )}
                    </div>
                  ))}
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

                <div className="flex items-end justify-end space-x-4 border-l-2 border-gray-700 pl-8">
                  {/* Map through socialLinks array */}
                  {socialLinks.map((social) => (
                    <a 
                      key={social.id}
                      href={social.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:opacity-80 transition-opacity"
                      aria-label={social.name}
                    >
                      <img 
                        src={social.icon} 
                        alt={social.name} 
                        className="w-5 h-5 brightness-0 invert" 
                      />
                    </a>
                  ))}
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
          className="bg-[#1e40af] absolute bottom-0 left-0 top-[-4.4rem] w-[20rem] lg:w-[27rem] flex items-center justify-center px-8 py-4 z-20"
          style={{
            clipPath: "polygon(0 0, 70% 0, 100% 100%, 0 100%)",
          }}
        >
          <img src={logo} alt="Logo" className="w-[10rem] ml-[-5rem]" />
        </div>

        {/* Navigation Links - FIXED */}
        <nav className="flex items-center justify-center flex-1 gap-x-[3rem] text-base lg:text-lg font-medium z-20 ml-[30rem]">
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