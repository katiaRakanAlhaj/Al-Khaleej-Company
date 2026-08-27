import bgContact from "../../../assets/images/bgContact.png";
import phone from "../../../assets/images/phone.svg";
import ContactForm from "../../contact/component/contactForm";

const Contact = () => {
  return (
    <section
      className="relative w-full h-[65rem] bg-cover bg-center lg:px-16 py-12"
      style={{ backgroundImage: `url(${bgContact})` }}
    >
      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 opacity-100"
        style={{
          background: `linear-gradient(85.46deg, #021235 -9.68%, rgba(102, 102, 102, 0) 65.12%)`,
        }}
      />

      {/* Main Container */}
      <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-x-[4rem]">
        {/* Left Column */}
        <div className="lg:col-span-6 text-white">
          <div>
            <h1 className="text-5xl mt-[9rem] w-[95%] font-bold tracking-tight leading-tight">
              Have questions? connect with us for support
            </h1>
            <p className="text-white font-[400] w-[98%] text-xl mt-[1rem]">
              Connect with our experts and experience seamless assistance every
              step of the way.
            </p>
          </div>

          {/* Glassmorphic Help Card */}
          <div className="px-[4rem]">
            <div className="backdrop-blur-sm h-[18rem] bg-[#D9D9D933] border mt-[10rem] border-white/20 rounded-3xl p-6 shadow-xl">
              <h3 className="text-3xl mt-[1.5rem] font-bold text-white mb-4 flex justify-center items-center">
                Need help? Contact us today!
              </h3>
              <div className="flex items-center space-x-4 mt-[4rem] px-[2.2rem]">
                <div className="w-[5rem] h-[5rem] bg-primary rounded-full flex items-center justify-center shadow-lg text-white">
                  <img className="w-[3rem]" src={phone} alt="phone" />
                </div>
                <div>
                  <p className="text-white text-xl">Phone Number</p>
                  <p className="text-4xl mt-2 font-bold text-white">
                    Call: 6102
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Form - With margin */}
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;