import vission from "../../../assets/images/vission.svg";
import partners from "../../../assets/images/partners.svg";

const AboutVission = () => {
  // Reusable class constants
  const cardShadow = "shadow-[0px_1px_2px_0px_#0000000D]";
  const sectionTitleClasses = "flex gap-x-[1rem] items-center";
  const titleBarClasses = "w-[0.3rem] h-[3rem] bg-primary";
  const titleTextClasses = "font-bold text-[#131B2E] lg:text-4xl text-[1.5rem]";
  const descriptionClasses = "text-lg mt-3";
  const cardClasses = "w-full h-auto p-[1.5rem] rounded-md";

  return (
    <div className="w-full h-auto bg-[#F6F8FF] py-[4rem]">
      <div className="container1 mx-auto">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-y-[2rem] gap-x-[4rem]">
          {/* First Column */}
          <div>
            <div className={sectionTitleClasses}>
              <div className={titleBarClasses}></div>
              <h1 className={titleTextClasses}>
                Licensed & Financially Secure
              </h1>
            </div>
            <p className="text-[#434652] text-lg mt-[2rem]">
              Gulf Insurance Company holds a license issued by the Iraqi
              Insurance Diwan and the Ministry of Finance, allowing us to offer
              life and general insurance products.
            </p>
            <div className="lg:flex gap-x-4 mt-[3rem]">
              <div className="w-full h-[6rem] bg-white p-[1rem] border border-[#C4C6D4]">
                <h1 className="text-[#505F76] text-lg">Current Capital</h1>
                <p className="text-[#131B2E] mt-1 font-bold text-2xl">
                  7 Billion
                </p>
              </div>
              <div className="w-full h-[6rem] bg-white p-[1rem] border border-[#C4C6D4] lg:mt-0 mt-[1rem]">
                <h1 className="text-[#505F76] text-lg">Massive Reserves</h1>
                <p className="text-[#131B2E] mt-1 font-bold text-2xl">
                  242.1 Million
                </p>
              </div>
            </div>
          </div>

          {/* Second Column */}
          <div>
            <div className={sectionTitleClasses}>
              <div className={titleBarClasses}></div>
              <h1 className={titleTextClasses}>Our Vision & Partners</h1>
            </div>

            {/* Vision Card */}
            <div
              className={`${cardClasses} ${cardShadow} bg-primary mt-[2rem]`}
            >
              <div className="flex gap-x-2">
                <img src={vission} alt="Vision" />
                <h1 className="text-white font-[600] text-2xl">Our Vision</h1>
              </div>
              <p className={`${descriptionClasses} text-white`}>
                Gulf Insurance Company aims to occupy a leading position in the
                insurance field in the Iraqi market and to be one of the best
                providers of insurance services in Iraq for companies,
                commercial groups, or individuals, and to continue maintaining
                this position by overcoming routine and complications and speed
                of answer and response in the event of any incident.
              </p>
            </div>

            {/* Partners Card */}
            <div
              className={`${cardClasses} ${cardShadow} border border-[#C4C6D4] bg-white mt-[2rem]`}
            >
              <div className="flex gap-x-2">
                <img src={partners} alt="Partners" />
                <h1 className="text-[#131B2E] font-[600] text-2xl">
                  Our Partners
                </h1>
              </div>
              <p className={`${descriptionClasses} text-[#434652]`}>
                Gulf Insurance Company aims to occupy a leading position in the
                insurance field in the Iraqi market and to be one of the best
                providers of insurance services in Iraq for companies,
                commercial groups, or individuals, and to continue maintaining
                this position by overcoming routine and complications and speed
                of answer and response in the event of any incident.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutVission;
