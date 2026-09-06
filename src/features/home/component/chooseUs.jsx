import TitleSection from "../../../ui/titleSection";
import i18next from "i18next";

const ChooseUs = ({homePageData}) => {
  return (
    <div className="py-[4rem]">
      <div className="flex flex-col justify-center items-center">
        <TitleSection title={i18next.t("chooseUs.choose_us_title")} />
        <p className="text-primary font-bold lg:text-4xl text-[1.5rem] mt-[2rem]">
          {homePageData?.data?.home_page?.why_choose_us_title}
        </p>
      </div>
      <div className="container2 mx-auto mt-[3rem]">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-[2rem] gap-y-[3rem]">
          {homePageData?.data?.home_page?.why_choose_us.map((item) => (
            <div key={item.id} className="flex items-start gap-[1rem] group">
              <div className="md:w-[5rem] md:h-[5rem] w-[4rem] h-[4rem] flex-shrink-0 flex justify-center items-center rounded-full bg-primary transition-colors duration-500 group-hover:bg-[#1B2A4A] cursor-pointer">
                <img
                  className="md:w-[2.5rem] w-[2rem]"
                  src={item.icon}
                  alt={item.title}
                />
              </div>
              <div>
                <h1 className="font-bold text-primary lg:text-2xl text-[1.5rem]">
                  {item.title}
                </h1>
                <p className="text-[#737373] text-[1.1rem]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
