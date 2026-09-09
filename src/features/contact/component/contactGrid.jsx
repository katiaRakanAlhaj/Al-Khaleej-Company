import i18next from "i18next";
import ContactForm from "./contactForm";

const ContactGrid = ({contactData}) => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1  gap-y-[2rem] gap-x-[4rem] mt-[6rem]">
      {/* first column */}
      <div>
        <h1 className="text-[#252525] font-bold lg:text-5xl text-[1.5rem]">
         {i18next.t("contactGrid.have_question")}
        </h1>
        <p className="text-[#252525] lg:text-xl text-lg mt-4">
          {contactData?.data?.description}
        </p>
        {/* Google Maps Iframe */}

        <div className="w-full lg:h-[38rem] h-[25rem] border border-[#F9F9FF33] mt-[1rem] rounded-lg overflow-hidden shadow-lg">
          <iframe
            src={contactData?.data?.location}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Location"
          />
        </div>
      </div>
      {/* second column - No margin */}
      <div>
        <ContactForm noMargin={true} />
      </div>
    </div>
  );
};
export default ContactGrid;
