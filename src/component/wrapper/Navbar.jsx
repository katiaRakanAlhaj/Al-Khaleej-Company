import i18n from "../../i18n";
import { useTranslation } from "react-i18next";
import facebook from "../../assets/images/facebook.svg";
import LinkedIn from "../../assets/images/linkedIn.svg";
import Twitter from "../../assets/images/twitter.svg";
import instgram from "../../assets/images/instgram.svg";
import logo from "../../assets/images/logo.svg";
import { useParams, useLocation, useNavigate, Link } from "react-router-dom";
import phone from "../../assets/images/phone.svg";
import email from "../../assets/images/email.svg";
import Location from "../../assets/images/location.svg";
import flag from "../../assets/images/flag.svg";
import i18next from "i18next";

const Navbar = () => {
  const { lang } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const navLinks = [
    { name: t("navbar.navLinks.home"), path: "/" },
    { name: t("navbar.navLinks.about"), path: "/about" },
    { name: t("navbar.navLinks.services"), path: "/Services" },
    { name: t("navbar.navLinks.projects"), path: "/Projects" },
    { name: t("navbar.navLinks.news"), path: "/News" },
    { name: t("navbar.navLinks.branches"), path: "/Branches" },
    { name: t("navbar.navLinks.clients"), path: "/Clients" },
    { name: t("navbar.navLinks.contactUs"), path: "/Contact" },
  ];

  // Calculate active state based on current path
  const updatedNavLinks = navLinks.map((link) => ({
    ...link,
    active:
      location.pathname === `/${lang}${link.path === "/" ? "" : link.path}`,
  }));

  // Social media links array
  const socialLinks = [
    {
      id: 1,
      name: t("navbar.socialMedia.facebook"),
      icon: facebook,
      url: "https://facebook.com/yourpage",
    },
    {
      id: 2,
      name: t("navbar.socialMedia.instagram"),
      icon: instgram,
      url: "https://instagram.com/yourpage",
    },
    {
      id: 3,
      name: t("navbar.socialMedia.linkedin"),
      icon: LinkedIn,
      url: "https://linkedin.com/company/yourpage",
    },
    {
      id: 4,
      name: t("navbar.socialMedia.twitter"),
      icon: Twitter,
      url: "https://twitter.com/yourpage",
    },
  ];

  // Contact information array
  const contactInfo = [
    {
      id: 1,
      type: "phone",
      icon: phone,
      value: "6102",
      label: t("navbar.contactInfo.phone"),
      href: "tel:6102",
    },
    {
      id: 2,
      type: "email",
      icon: email,
      value: "info@yourcompany.com",
      label: t("navbar.contactInfo.email"),
      href: "mailto:info@yourcompany.com",
    },
    {
      id: 3,
      type: "address",
      icon: Location,
      value: "238, Arimantab, Moska - USA",
      label: t("navbar.contactInfo.address"),
    },
  ];

  // Handle language switch
  const handleLanguageSwitch = () => {
    const newLang = lang === "en" ? "ar" : "en";
    const currentPath = location.pathname.replace(`/${lang}`, "");
    const newPath = `/${newLang}${currentPath}`;
    
    // Change language in i18n
    i18n.changeLanguage(newLang);
    localStorage.setItem("language", newLang);
    
    // Navigate to new path and reload
    navigate(newPath);
    window.location.reload();
  };

  return (
    <header className="w-full bg-white relative shadow-md overflow-hidden">
      {/* Top Dark Bar */}
      <div className="bg-[#003057] w-full">
        <div className="mx-auto px-4 lg:px-12 py-6">
          <div className="flex flex-wrap items-center justify-between">
            <div className="w-[25rem] flex-shrink-0 hidden lg:block"></div>

            <div className="flex flex-1 items-center justify-between space-x-6 text-white text-xs md:text-sm">
              <div className="flex items-center space-x-6">
                <div
                  className={`flex items-center space-x-12 ${i18next.language === "en" ? "ml-[-5rem]" : "mr-[-5rem]"}`}
                >
                  {contactInfo.map((contact, index) => (
                    <div
                      key={contact.id}
                      className={`flex items-center space-x-4 ${
                        index > 0
                          ? `${i18next.language === "en" ? "border-l-2 pl-10" : "border-r-2 pr-10"}`
                          : ""
                      } ${contact.type === "address" ? "hidden lg:flex" : ""}`}
                    >
                      <img
                        src={contact.icon}
                        alt={contact.label}
                        className="w-6 h-6"
                      />
                      {contact.type === "phone" ? (
                        <a
                          href={contact.href}
                          className="text-white font-[600] text-md hover:underline"
                        >
                          {contact.value}
                        </a>
                      ) : contact.type === "email" ? (
                        <a
                          href={contact.href}
                          className="text-white font-[600] text-md hover:underline"
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <span className="text-white font-[600] text-md">
                          {contact.value}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center space-x-6">
                <div
                  className={`flex items-center space-x-3 ${i18next.language === "en" ? "pl-[-6rem]" : "pr-[-6rem]"} cursor-pointer`}
                  onClick={handleLanguageSwitch}
                >
                  <img src={flag} className="w-[1.5rem]" alt={t("navbar.language.flagAlt") || "Flag"} />
                  <span className="text-white mt-1 uppercase font-[600] font-lg">
                    {lang === "en" ? t("navbar.language.english") : t("navbar.language.arabic")}
                  </span>
                </div>

                <div className={`flex items-end justify-end space-x-4 border-white ${i18next.language == "en"?'border-l-2 pl-8':'border-r-2 pr-8'}`}>
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

      {/* Main Navigation Bar */}
      <div className="relative bg-white flex items-center px-4 lg:px-12 h-[7rem]">
        {/* Background shape */}
        <div
          className={`bg-slate-50 z-10 absolute top-0 ${i18next.language === "en" ? "left-0" : "right-0"} h-[50%]`}
          style={{
            clipPath:
              i18next.language === "en"
                ? "polygon(0 0, 100% 0, 100% 85%, 0 100%)"
                : "polygon(0 0, 100% 0, 0 85%, 100% 100%)",
          }}
        ></div>

        {/* Logo Container */}
        <div
          className={`bg-[#1e40af] absolute bottom-0 top-[-4.4rem] w-[20rem] lg:w-[27rem] flex items-center justify-center px-8 py-4 z-20 ${
            i18next.language === "en" ? "left-0" : "right-0"
          }`}
          style={{
            clipPath:
              i18next.language === "en"
                ? "polygon(0 0, 70% 0, 100% 100%, 0 100%)"
                : "polygon(30% 0, 100% 0, 100% 100%, 0 100%)",
          }}
        >
          <Link to={`/${lang}`} className="cursor-pointer">
            <img
              src={logo}
              alt={t("navbar.logoAlt")}
              className={`w-[14rem] ${
                i18next.language === "en" ? "ml-[-4rem]" : "mr-[-4rem]"
              }`}
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <nav
          className={`flex items-center justify-center flex-1 gap-x-[3rem] text-base lg:text-lg font-medium z-20 ${
            i18next.language === "en" ? "ml-[30rem]" : "mr-[30rem]"
          }`}
        >
          {updatedNavLinks.map((link, index) => {
            const path = `/${lang}${link.path === "/" ? "" : link.path}`;
            return (
              <Link
                key={index}
                to={path}
                className={`text-base lg:text-lg whitespace-nowrap ${
                  link.active
                    ? "text-[#003057] font-[700] border-b-2 border-[#003057] pb-1"
                    : "hover:text-[#1e40af] font-[600] transition-colors pb-1"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`xl:hidden ${i18next.language === "en" ? "ml-auto" : "mr-auto"} z-20 p-2`}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navbar;