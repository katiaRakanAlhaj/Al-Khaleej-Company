import TitleSection from "../../../ui/titleSection";
import secure from "../../../assets/images/secure.svg";
import support from "../../../assets/images/support.svg";
import money from "../../../assets/images/money.svg";
import flexible from "../../../assets/images/flexible.svg";
import company from "../../../assets/images/company.svg";
import safe from "../../../assets/images/safe.svg";
const ChooseUs = () => {
  return (
    <div className="py-[4rem]">
      <div className="flex flex-col justify-center items-center">
        <TitleSection title={"why choose us"} />
        <p className="text-primary font-bold text-5xl mt-[2rem]">
          Most of the People Choose Us
        </p>
      </div>
       <div className="container2 mx-auto mt-[2rem]">
          <div className="grid grid-cols-3 gap-x-[2rem]">
            <div className="w-[5rem] h-[5rem] rounded-full bg-primary"></div>
          </div>
        </div>
    </div>
  );
};
export default ChooseUs;
