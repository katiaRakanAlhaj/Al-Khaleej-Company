import ContactForm from "./contactForm";

const ContactGrid = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1  gap-y-[2rem] gap-x-[4rem] mt-[6rem]">
      {/* first column */}
      <div>
        <h1 className="text-[#252525] font-bold lg:text-5xl text-[1.5rem]">
          Have questions? connect with us for support
        </h1>
        <p className="text-[#252525] lg:text-xl text-lg mt-4">
          Connect with our experts and experience seamless assistance every step
          of the way,
        </p>
        {/* Google Maps Iframe */}

        <div className="w-full lg:h-[38rem] h-[25rem] border border-[#F9F9FF33] mt-[1rem] rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509419!2d144.9537353153167!3d-37.81627997975159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df1f2f8e3%3A0x5045675218ce6e0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1647044532148!5m2!1sen!2sus"
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
