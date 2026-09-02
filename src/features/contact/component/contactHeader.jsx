import location from "../../../assets/images/locationContact.svg";
import callContact from "../../../assets/images/callContact.svg";
import emailContact from "../../../assets/images/emailContact.svg";
import hour from "../../../assets/images/hour.svg";
import i18next from "i18next";

const ContactHeader = () => {
  const contactHeaderItems = [
    {
      image: location,
      title: "Headquarters",
      desc1: "Baghdad - Al Harthiya",
      desc2: "Al Kindi StreAet",
    },
    {
      image: callContact,
      title: "Customer Support",
      desc1: "009647729000530",
      desc2: "009647821041006",
    },
    {
      image: emailContact,
      title: "General Inquiries",
      desc1: "info@gulfinsco.com",
    },
    {
      image: hour,
      title: "Business Hours",
      desc1: "Sunday - Thursday",
      desc2: "8:30 AM - 2:00 PM",
    },
  ];

  const descClasses = "text-[#43474F] text-md";

  return (
    <div className="lg:mt-[4rem] mt-[6rem]">
      <h1 className="lg:text-5xl text-3xl font-bold text-[#001E40]">
        {i18next.t("navbar.navLinks.contactUs")}
      </h1>
      <p className="text-[#43474F] lg:w-[60%] leading-relaxed lg:text-xl text-lg lg:mt-[2rem]">
        We are here to assist you with precision and care. Reach out to our
        dedicated team for inquiries, support, or consultation regarding your
        insurance needs.
      </p>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[2rem] mt-[2rem]">
        {contactHeaderItems.map((item, index) => (
          <div
            key={index}
            style={{ boxShadow: "0px 0px 8px 0px #00000040" }}
            className="w-full h-[11rem] gap-x-2 flex px-[2rem] py-[2rem] rounded-md border border-[#C3C6D1]"
          >
            <div className="w-[2.5rem] h-[2.5rem] rounded-full bg-[#F0F3FF] flex justify-center items-center">
              <img className="w-[1rem]" src={item.image} alt={item.title} />
            </div>
            <div className="flex flex-col">
              <h1 className="text-[#001E40] mt-2 text-md font-bold">
                {item.title}
              </h1>
              <p className={`${descClasses} mt-[2rem]`}>{item.desc1}</p>
              {item.desc2 && <p className={descClasses}>{item.desc2}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactHeader;
