import TitleSection from "../../../ui/titleSection";
import protectionImage from "../../../assets/images/protectionImage.png";
import download from "../../../assets/images/download.svg";
import i18next from "i18next";
const Protection = () => {
  return (
    <div className="w-full h-auto py-[4rem] bg-[#F4F7FF]">
      <div className="flex justify-center items-center">
        <TitleSection title={i18next.t("Protection.prtection_title")} />
      </div>
      <div className="container1 mx-auto">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-[6rem] gap-y-[2rem] mt-[3rem]">
          {/* first column */}
          <div className="relative">
            <img
              className="w-full md:h-[32rem] h-[25rem] object-cover"
              src={protectionImage}
            />
            <div className="absolute bottom-[3rem] left-[3rem] w-[17rem] h-[6rem] bg-white flex justify-between items-center px-4">
              <h1 className="text-[#000000] font-bold text-4xl">7K</h1>
              <div className="w-[0.01rem] h-[4rem] bg-[#C4C4C4]"></div>
              <p className="text-xl text-[#5B5B5B]">Created insurance</p>
            </div>
          </div>
          {/* second column */}
          <div className="lg:ml-[-2rem] mt-[1rem]">
            <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-[4rem] gap-[2rem]">
              <div>
                <h1 className="font-bold text-primary lg:text-2xl text-[1.5rem] flex text-center">
                  Home and family protection insurance policy
                </h1>
                <div className="w-full h-[0.01rem] bg-primary mt-4"></div>
              </div>
              <h1 className="text-[#5E5E5E] flex text-center lg:text-2xl text-xl font-[400]">
                Professional Indemnity insurance policy
              </h1>
            </div>
            <h1 className="font-bold text-primary lg:text-5xl text-[1.5rem] mt-[2rem]">
              Home and family protection insurance policy
            </h1>
            <p className="text-[#777777] text-lg mt-2">
              We help you discover any protection inclusions that are ideal for
              you.We help you discover any protection inclusions that are ideal
              for you.We help you discover any protection inclusions that are
              ideal for you.We help you discover any protection inclusions that
              are ideal for you. We help you discover any protection inclusions
              that are ideal for you.We help you discover any protection
              inclusions that are ideal for you. We help you discover any
              protection inclusions that are ideal for you.We help you discover
              any protection inclusions that are ideal for you.
            </p>
            <button className="w-full cursor-pointer h-[3.5rem] gap-x-2 mt-[1.5rem] flex justify-center items-center bg-primary rounded-b-2xl">
              <p className="text-white">{i18next.t("Protection.donwload_pdf")}</p>
              <img src={download} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Protection;
