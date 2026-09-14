import i18next from "i18next";
import check from "../../../assets/images/check.svg";
import TitleSection from "../../../ui/titleSection";

const About = ({ homePageData }) => {
  // Extract number from about_image_description
  const descriptionText = homePageData?.data?.home_page?.about_image_description || "";
  const extractedNumber = descriptionText.match(/\d+/)?.[0] || "30";
  // Remove the number from description text
  const cleanDescription = descriptionText.replace(/\d+/, "").trim();

  return (
    <div className="grid lg:grid-cols-12 grid-cols-1 container mx-auto">
      <div className="translate-y-[2rem] lg:col-span-6 col-span-1">
        <div className="relative">
          <img
            className={`w-full h-auto ${i18next.language == "en" ? "lg:ml-[-5rem]" : "lg:mr-[-5rem]"}`}
            src={homePageData?.data?.home_page?.about_image}
            alt="About Us"
          />
          <div className={`absolute lg:w-[21rem] w-[18rem] h-[5rem] lg:h-[8rem] bg-[#003057] lg:-bottom-[5rem] -bottom-[2rem] flex items-center px-6 gap-x-5 text-white shadow-lg ${i18next.language == "ar"?'lg:left-[10rem]':''}`}>
            <div className="relative flex items-center justify-center w-[4.8rem] h-[5.2rem]">
              <span
                className="relative z-10 lg:text-7xl text-3xl font-extrabold tracking-wider"
                style={{
                  WebkitTextStroke: "1.5px #93c5fd",
                  color: "rgba(147, 197, 253, 0.25)",
                }}
              >
                {extractedNumber}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="lg:text-[2rem] text-[1.2rem] lg:text-wrap text-nowrap font-bold leading-tight">
                {cleanDescription}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:col-span-6 col-span-1 lg:mt-[5rem] mt-[7rem] lg:ml-[-4rem]">
        <TitleSection title={i18next.t("aboutUs.about_us")} />
        <div>
          <p className="font-bold lg:text-[2.5rem] text-[1.5rem] lg:mt-0 mt-[1rem] text-primary">
            {homePageData?.data?.home_page?.about_title}
          </p>
          <p className="text-[#777777] text-lg mt-2">
            {homePageData?.data?.home_page?.about_description}
          </p>
          {homePageData?.data?.home_page?.about_description_section?.map(
            (item, index) => (
              <div key={index} className="flex gap-x-2 mt-4">
                <img src={check} alt="check" />
                <p className="text-secondary font-bold text-lg">{item.item}</p>
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
};

export default About;