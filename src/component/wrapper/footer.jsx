import React from "react";
import { useLocation, Link } from "react-router-dom"; // Added Link here
import logoFooter from "../../assets/images/logoFooter.svg";
import locationFooter from "../../assets/images/locationFooter.svg";
import emailFooter from "../../assets/images/emailFooter.svg";
import callFooter from "../../assets/images/callFooter.svg";
import i18next from "i18next";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const location = useLocation(); // Get current location
  
  const Links = [
    { name: t("navbar.navLinks.home"), path: `/${currentLang}` },
    { name: t("navbar.navLinks.about"), path: `/${currentLang}/about` },
    { name: t("navbar.navLinks.services"), path: `/${currentLang}/Services` },
    { name: t("navbar.navLinks.projects"), path: `/${currentLang}/Projects` },
    { name: t("navbar.navLinks.news"), path: `/${currentLang}/News` },
    { name: t("navbar.navLinks.branches"), path: `/${currentLang}/Branches` },
    { name: t("navbar.navLinks.clients"), path: `/${currentLang}/Clients` },
    { name: t("navbar.navLinks.contactUs"), path: `/${currentLang}/Contact` },
  ];

  // Function to check if link is active
  const isActiveLink = (path) => {
    if (path === `/${currentLang}`) {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  // Split links into two halves
  const midIndex = Math.ceil(Links.length / 2);
  const firstHalf = Links.slice(0, midIndex);
  const secondHalf = Links.slice(midIndex);

  const contactData = [
    {
      icon: locationFooter,
      alt: "Location",
      lines: [
        "Baghdad, Al-Harithiya, Al-Kindi Street,",
        "Baghdad, Al-Arosot, near Max Mall",
      ],
      isStart: true,
    },
    {
      icon: callFooter,
      alt: "Phone",
      lines: ["009647729000530", "009647821041006"],
      isStart: false,
    },
    {
      icon: emailFooter,
      alt: "Email",
      lines: ["info@gulfinsco.com", "admin@gulfinsco.com"],
      isStart: false,
    },
  ];

  return (
    <div className="lg:mt-[6rem] mt-[3rem] overflow-hidden">
      <footer className="bg-[#111620] h-auto text-white pt-16 pb-8 font-sans">
        <div className="container1 mx-auto">
          <div className="grid lg:grid-cols-12 grid-cols-1">
            {/* first column */}
            <div className="lg:col-span-4 col-span-1">
              <img src={logoFooter} alt="Logo" />
              <p className="text-white font-[400] opacity-80 mt-[1rem] leading-relaxed text-lg lg:w-[60%] w-[90%]">
                Redefining insurance for the modern world. We provide security
                and peace of mind through expert consultation and innovative
                digital solutions.
              </p>
            </div>

            {/* second column */}
            <div className="lg:col-span-8 col-span-1">
              <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-2 gap-4">
                {/* Column 1 - Quick Links (first half) */}
                <div>
                  <h1 className="font-bold text-lg mb-4 lg:mt-0 mt-[1rem]">
                    {t("quick_links")}
                  </h1>
                  <ul className="space-y-2">
                    {firstHalf.map((link, index) => {
                      const isActive = isActiveLink(link.path);
                      return (
                        <li key={index}>
                          {/* Replaced 'a' with 'Link' and added font-bold + visible active color */}
                          <Link
                            to={link.path}
                            className={`transition text-lg ${
                              isActive 
                                ? "text-primary font-bold opacity-100" 
                                : "opacity-80 hover:opacity-100 text-white"
                            }`}
                          >
                            {link.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* Column 2 - Quick Links (second half) */}
                <div className={`${currentLang === "en" ? 'lg:ml-[-4rem]' : 'lg:mr-[-4rem]'}`}>
                  <ul className="space-y-2 lg:mt-[2.5rem] mt-[4rem]">
                    {secondHalf.map((link, index) => {
                      const isActive = isActiveLink(link.path);
                      return (
                        <li key={index}>
                          {/* Replaced 'a' with 'Link' and added font-bold + visible active color */}
                          <Link
                            to={link.path}
                            className={` transition text-lg ${
                              isActive 
                                ? "text-primary font-bold opacity-100" 
                                : "opacity-80 hover:opacity-100 text-white"
                            }`}
                          >
                            {link.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* Column 3 - Contact Us */}
                <div className="lg:ml-[-6rem] col-span-2 lg:col-span-1 md:col-span-2">
                  <h1 className="font-bold text-lg text-white mb-4 lg:mt-0 mt-[1rem]">
                   {t("contact_us")}
                  </h1>
                  <ul className="space-y-4">
                    {contactData.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start lg:items-center gap-3 bg-white/5 lg:bg-transparent p-3 lg:p-0 rounded-lg lg:rounded-none hover:bg-white/10 lg:hover:bg-transparent transition-all duration-300"
                      >
                        <div className="bg-[#003057] lg:bg-transparent p-2 lg:p-0 rounded-full lg:rounded-none flex-shrink-0">
                          <img
                            src={item.icon}
                            alt={item.alt}
                            className="w-5 h-5 lg:w-7 lg:h-7"
                          />
                        </div>
                        <div className="flex flex-col">
                          {item.lines.map((line, idx) => (
                            <span
                              key={idx}
                              className={`text-white opacity-80 text-sm lg:text-md ${
                                idx > 0 ? "mt-0.5" : ""
                              }`}
                            >
                              {line}
                            </span>
                          ))}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-[0.01rem] bg-[#FFFFFF40] mt-[4rem]"></div>
          <div className="lg:flex justify-between mt-[2rem] text-white text-lg opacity-80">
            <p>© 2026 Gulfinsco Insurance Company. All rights reserved.</p>
            <p className="lg:mt-0 mt-[1.5rem]">Terms Privacy</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;