import TitleSection from "../../../ui/titleSection";
import download from "../../../assets/images/download.svg";
import i18next from "i18next";
import { useState } from "react";

const Protection = ({ homePageData }) => {
  // State to track which protection item is selected (index)
  const [selectedIndex, setSelectedIndex] = useState(0);
  // State for loading
  const [isDownloading, setIsDownloading] = useState(false);

  // Get protection data from homePageData or use default
  const protectionData = homePageData?.data?.home_page?.protection || [];

  // If no data, return null or fallback UI
  if (protectionData.length === 0) {
    return null;
  }

  // Get the currently selected protection item
  const currentProtection = protectionData[selectedIndex] || protectionData[0];

  // Handle subtitle click
  const handleSubtitleClick = (index) => {
    setSelectedIndex(index);
  };

  // Handle download
  const handleDownload = () => {
    const fileUrl = currentProtection.file;
    if (fileUrl) {
      setIsDownloading(true);

      // Simulate loading or actual download process
      setTimeout(() => {
        const link = document.createElement("a");
        link.href = fileUrl;
        link.download = currentProtection.title + ".pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        setIsDownloading(false);
      }, 1500); // Adjust timing as needed
    }
  };

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
              src={currentProtection.image}
              alt={currentProtection.title}
            />
            <div className="absolute bottom-[3rem] left-[3rem] w-[17rem] h-[6rem] bg-white flex justify-between items-center px-4">
              <p className="lg:text-xl text-lg text-[#5B5B5B]">
                {currentProtection.image_text}
              </p>
            </div>
          </div>

          {/* second column */}
          <div className="lg:ml-[-2rem] mt-[1rem]">
            <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-[4rem] gap-[2rem]">
              {protectionData.map((item, index) => (
                <div
                  key={index}
                  className="cursor-pointer"
                  onClick={() => handleSubtitleClick(index)}
                >
                  <h1
                    className={`font-bold lg:text-2xl text-[1.5rem] flex text-center transition-colors duration-300 ${
                      selectedIndex === index
                        ? "text-primary"
                        : "text-[#5E5E5E]"
                    }`}
                  >
                    {item.sub_title || item.title || `Protection ${index + 1}`}
                  </h1>
                  {selectedIndex === index && (
                    <div className="w-full h-[0.01rem] bg-primary mt-4"></div>
                  )}
                </div>
              ))}
            </div>

            <h1 className="font-bold text-primary lg:text-5xl text-[1.5rem] mt-[2rem]">
              {currentProtection.title}
            </h1>

            <p className="text-[#777777] text-lg mt-2">
              {currentProtection.description}
            </p>

            <button
              className={`w-full cursor-pointer h-[3.5rem] gap-x-2 mt-[1.5rem] flex justify-center items-center rounded-b-2xl transition-all duration-300 ${
                isDownloading
                  ? "bg-primary/70 cursor-not-allowed"
                  : "bg-primary hover:bg-primary/90"
              }`}
              onClick={handleDownload}
              disabled={isDownloading}
            >
              {isDownloading ? (
                <>
                  {/* Loader spinner */}
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  <p className="text-white">
                    {i18next.t("Protection.downloading")}
                  </p>
                </>
              ) : (
                <>
                  <p className="text-white">
                    {i18next.t("Protection.donwload_pdf")}
                  </p>
                  <img src={download} alt="Download" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Protection;
