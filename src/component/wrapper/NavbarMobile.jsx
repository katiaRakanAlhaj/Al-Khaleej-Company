// NavbarMobile.jsx

import { Link, useParams, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import logo from "../../assets/images/logo.svg";
import facebook from "../../assets/images/facebook.svg";
import linkedIn from "../../assets/images/linkedIn.svg";
import instgram from "../../assets/images/instgram.svg";
import twitter from "../../assets/images/twitter.svg";
import phone from "../../assets/images/phone.svg";
import email from "../../assets/images/email.svg";
import locationIcon from "../../assets/images/location.svg";
import flag from "../../assets/images/flag.svg";
import i18n from "../../i18n";

const NavbarMobile = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState({});
  const menuRef = useRef(null);
  const { lang } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();

  // Constants
  const currentLang = lang || "en";

  // Helper function to safely get translation
  const getSafeTranslation = (key, fallback) => {
    const value = t(key);
    // If the value is an object, try to get its string representation
    if (typeof value === 'object' && value !== null) {
      return value.default || value.title || value.name || fallback;
    }
    return value || fallback;
  };

  // Contact information array
  const contactInfo = [
    {
      id: 1,
      type: "phone",
      icon: phone,
      value: "6102",
      label: t("navbar.contactInfo.phone"),
      href: "tel:6102"
    },
    {
      id: 2,
      type: "email",
      icon: email,
      value: "info@yourcompany.com",
      label: t("navbar.contactInfo.email"),
      href: "mailto:info@yourcompany.com"
    },
    {
      id: 3,
      type: "address",
      icon: locationIcon,
      value: "238, Arimantab, Moska - USA",
      label: t("navbar.contactInfo.address")
    }
  ];

  // Social Icons Configuration
  const socialIcons = [
    { 
      icon: facebook, 
      link: "https://facebook.com/yourcompany",
      name: getSafeTranslation("navbar.socialMedia.facebook", "Facebook")
    },
    { 
      icon: linkedIn, 
      link: "https://linkedin.com/company/yourcompany",
      name: getSafeTranslation("navbar.socialMedia.linkedin", "LinkedIn")
    },
    { 
      icon: instgram, 
      link: "https://instagram.com/yourcompany",
      name: getSafeTranslation("navbar.socialMedia.instagram", "Instagram")
    },
    { 
      icon: twitter, 
      link: "https://twitter.com/yourcompany",
      name: getSafeTranslation("navbar.socialMedia.twitter", "Twitter")
    },
  ];

  // Navigation Items Configuration - with safe translation
  const navItems = [
    {
      id: "home",
      path: `/${currentLang}`,
      label: getSafeTranslation("navbar.navLinks.home", "Home"),
      isActive: location.pathname === `/${currentLang}` || location.pathname === `/${currentLang}/`,
    },
    {
      id: "about",
      path: `/${currentLang}/about`,
      label: getSafeTranslation("navbar.navLinks.about", "About"),
      isActive: location.pathname === `/${currentLang}/about`,
    },
    {
      id: "services",
      path: `/${currentLang}/Services`,
      label: getSafeTranslation("navbar.navLinks.services", "Services"),
      isActive: location.pathname === `/${currentLang}/Services`,
    },
    {
      id: "projects",
      path: `/${currentLang}/Projects`,
      label: getSafeTranslation("navbar.navLinks.projects", "Projects"),
      isActive: location.pathname === `/${currentLang}/Projects`,
    },
    {
      id: "news",
      path: `/${currentLang}/News`,
      label: getSafeTranslation("navbar.navLinks.news", "News"),
      isActive: location.pathname === `/${currentLang}/News`,
    },
    {
      id: "branches",
      path: `/${currentLang}/Branches`,
      label: getSafeTranslation("navbar.navLinks.branches", "Branches"),
      isActive: location.pathname === `/${currentLang}/Branches`,
    },
    {
      id: "clients",
      path: `/${currentLang}/Clients`,
      label: getSafeTranslation("navbar.navLinks.clients", "Clients"),
      isActive: location.pathname === `/${currentLang}/Clients`,
    },
    {
      id: "contact",
      path: `/${currentLang}/Contact`,
      label: getSafeTranslation("navbar.navLinks.contactUs", "Contact us"),
      isActive: location.pathname === `/${currentLang}/Contact`,
    },
  ];

  // Effects
  useEffect(() => {
    if (lang) {
      i18n.changeLanguage(lang);
      localStorage.setItem("language", lang);
    }
  }, [lang]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  // Handlers
  const handleLanguageChange = () => {
    const newLang = currentLang === 'en' ? 'ar' : 'en';
    const currentPath = location.pathname.replace(`/${currentLang}`, '');
    const newPath = `/${newLang}${currentPath}`;
    
    i18n.changeLanguage(newLang);
    localStorage.setItem("language", newLang);
    navigate(newPath);
    window.location.reload();
    setIsMobileMenuOpen(false);
  };

  const handleCategoryClick = (category) => {
    if (category.children && category.children.length > 0) {
      setExpandedCategories(prev => ({
        ...prev,
        [category.id]: !prev[category.id]
      }));
    } else {
      setIsMobileMenuOpen(false);
      navigate(`/${currentLang}/category/${category.id}`);
    }
  };

  const handleSocialClick = (link) => {
    if (link) {
      window.open(link, "_blank");
    }
  };

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  // Render Methods
  const renderLanguageSwitcher = () => (
    <div 
      className="flex items-center gap-3 cursor-pointer bg-white/10 rounded-lg px-4 py-2 hover:bg-white/20 transition-colors"
      onClick={handleLanguageChange}
    >
      <img src={flag} className="w-5 h-5" alt={getSafeTranslation("navbar.language.flagAlt", "Flag")} />
      <span className="text-white uppercase font-semibold text-sm">
        {currentLang === 'en' ? getSafeTranslation("navbar.language.english", "English") : getSafeTranslation("navbar.language.arabic", "العربية")}
      </span>
    </div>
  );

  const renderContactInfo = () => (
    <div className="space-y-3 border-b border-white/20 pb-4">
      {contactInfo.map((contact) => (
        <div key={contact.id} className="flex items-center gap-3">
          <img src={contact.icon} alt={contact.label} className="w-5 h-5 brightness-0 invert" />
          {contact.type === "phone" ? (
            <a href={contact.href} className="text-white/90 text-sm hover:text-white transition-colors">
              {contact.value}
            </a>
          ) : contact.type === "email" ? (
            <a href={contact.href} className="text-white/90 text-sm hover:text-white transition-colors">
              {contact.value}
            </a>
          ) : (
            <span className="text-white/90 text-sm">{contact.value}</span>
          )}
        </div>
      ))}
    </div>
  );

  const renderNavLink = ({ id, path, label, isActive }) => (
    <Link
      key={id}
      to={path}
      onClick={closeMenu}
      className="border-b border-white/20 pb-3 block"
    >
      <p
        className={`text-base transition-colors ${
          isActive
            ? "text-white font-bold bg-white/10 px-3 py-1 rounded"
            : "text-white hover:text-[#1e40af] font-medium"
        }`}
      >
        {label}
      </p>
    </Link>
  );

  const renderSocialIcons = () => (
    <div className="flex items-center justify-center gap-4 pt-4 border-t border-white/20">
      {socialIcons.map((social, index) => (
        social?.icon && (
          <img
            loading="lazy"
            key={index}
            className="cursor-pointer hover:scale-110 transition-transform w-5 h-5 brightness-0 invert"
            src={social.icon}
            onClick={() => handleSocialClick(social.link)}
            alt={social.name || `Social ${index + 1}`}
          />
        )
      ))}
    </div>
  );

  const renderMobileHeader = () => (
    <div className="w-full bg-[#003057] fixed top-0 z-50 shadow-md">
      <div className="container mx-auto h-[4rem] px-4">
        <div className="flex w-full h-full items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              className="lg:hidden text-white focus:outline-none"
              onClick={toggleMenu}
              aria-label={getSafeTranslation("navbar.menu.toggle", "Toggle menu")}
            >
              {isMobileMenuOpen ? (
                <MdClose className="text-2xl" />
              ) : (
                <MdMenu className="text-2xl" />
              )}
            </button>
            <Link to={`/${currentLang}`}>
              <img loading="lazy" className="w-[4rem]" src={logo} alt={getSafeTranslation("navbar.logoAlt", "logo")} />
            </Link>
          </div>
          {renderLanguageSwitcher()}
        </div>
      </div>
    </div>
  );

  return (
    <>
      {renderMobileHeader()}
      
      <div
        ref={menuRef}
        className={`fixed top-[4rem] right-0 h-full w-[85%] max-w-[22rem] bg-[#003057] z-40 shadow-2xl transform transition-transform duration-300 ease-in-out overflow-y-auto custom-scrollbar ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 pb-20">
          {renderContactInfo()}
          <div className="mt-4 space-y-3">
            {navItems.map((item) => renderNavLink(item))}
          </div>
          <div className="mt-6">
            {renderSocialIcons()}
          </div>
        </div>
      </div>
      
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-30" onClick={closeMenu} />
      )}
      
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 0.1875rem;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 0.625rem;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #003057;
          border-radius: 0.625rem;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #1e40af;
        }

        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #003057 rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </>
  );
};

export default NavbarMobile;