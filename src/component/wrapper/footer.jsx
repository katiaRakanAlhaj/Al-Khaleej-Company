import React from "react";
import logoFooter from "../../assets/images/logoFooter.svg";
import locationFooter from "../../assets/images/locationFooter.svg";
import emailFooter from "../../assets/images/emailFooter.svg";
import callFooter from "../../assets/images/callFooter.svg";

const Footer = () => {
  const Links = [
    { id: 1, name: "Home" },
    { id: 2, name: "About" },
    { id: 3, name: "Services" },
    { id: 4, name: "Projects" },
    { id: 5, name: "Branches" },
    { id: 6, name: "Clients" },
    { id: 7, name: "Contact Us" },
  ];

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
    <div className="mt-[6rem]">
      <footer className="bg-[#111620] h-auto text-white pt-16 pb-8 font-sans">
        <div className="container1 mx-auto">
          <div className="grid grid-cols-12">
            {/* first column */}
            <div className="col-span-4">
              <img src={logoFooter} alt="Logo" />
              <p className="text-white font-[400] opacity-80 mt-[1rem] leading-relaxed text-lg w-[60%]">
                Redefining insurance for the modern world. We provide security
                and peace of mind through expert consultation and innovative
                digital solutions.
              </p>
            </div>

            {/* second column */}
            <div className="col-span-8">
              <div className="grid grid-cols-3 gap-4">
                {/* Column 1 - Quick Links (first half) */}
                <div>
                  <h1 className="font-bold text-lg text-white mb-4">
                    Quick Links
                  </h1>
                  <ul className="space-y-2">
                    {firstHalf.map((link) => (
                      <li key={link.id}>
                        <a
                          href="#"
                          className="text-white opacity-80 hover:opacity-100 transition text-lg"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Column 2 - Quick Links (second half) */}
                <div className="ml-[-4rem]">
                  <ul className="space-y-2 mt-[2.5rem]">
                    {secondHalf.map((link) => (
                      <li key={link.id}>
                        <a
                          href="#"
                          className="text-white opacity-80 hover:opacity-100 transition text-lg"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Column 3 - Contact Us */}
                <div className="ml-[-6rem]">
                  <h1 className="font-bold text-lg text-white mb-4">
                    Contact Us
                  </h1>
                  <ul className="space-y-3">
                    {contactData.map((item, index) => (
                      <li
                        key={index}
                        className={`flex ${item.isStart ? "items-center" : "items-center"} gap-3`}
                      >
                        <img
                          src={item.icon}
                          alt={item.alt}
                          className="w-7 h-7 flex-shrink-0"
                        />
                        <div className="flex flex-col">
                          {item.lines.map((line, idx) => (
                            <span
                              key={idx}
                              className={`text-white opacity-80 text-md ${idx > 0 ? "mt-1" : ""}`}
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
          <div className="flex justify-between mt-[2rem] text-white text-lg opacity-80">
            <p>© 2026 Gulfinsco Insurance Company. All rights reserved.</p>
            <p>Terms Privacy</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
