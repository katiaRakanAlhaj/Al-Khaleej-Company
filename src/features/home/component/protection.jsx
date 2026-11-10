import TitleSection from "../../../ui/titleSection";
import download from "../../../assets/images/download.svg";
import i18next from "i18next";
import { useState } from "react";
import { motion } from "framer-motion";

const Protection = ({ homePageData }) => {
  // index of the item currently downloading (null = none)
  const [downloadingIndex, setDownloadingIndex] = useState(null);

  const protectionData = homePageData?.data?.home_page?.protection || [];
  if (protectionData.length === 0) return null;

  const handleDownload = (item, index) => {
    if (!item.file) return;
    setDownloadingIndex(index);
    setTimeout(() => {
      const link = document.createElement("a");
      link.href = item.file;
      link.download = item.title + ".pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setDownloadingIndex(null);
    }, 1500);
  };

  return (
    <section className="w-full py-[4rem] bg-[#F4F7FF]">
      <div className="flex justify-center items-center">
        <TitleSection title={homePageData?.data?.home_page?.protection_title} />
      </div>

      <div className="container1 mx-auto mt-[3rem] flex flex-col gap-y-[4rem] lg:gap-y-[6rem]">
        {protectionData.map((item, index) => {
          const isDownloading = downloadingIndex === index;
          const reversed = index % 2 !== 0;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className={`grid lg:grid-cols-2 grid-cols-1 gap-x-[5rem] gap-y-[2rem] items-center`}
            >
              {/* ===== Image ===== */}
              <div className={`relative ${reversed ? "lg:order-2" : ""}`}>
                {/* decorative back shape */}
                <div
                  className={`hidden lg:block absolute -z-0 top-6 w-full h-full rounded-3xl bg-primary/10 ${
                    reversed ? "-end-6" : "-start-6"
                  }`}
                />
                <img
                  className="relative z-10 w-full md:h-[30rem] h-[22rem] object-cover rounded-3xl shadow-xl"
                  src={item.image}
                  alt={item.title}
                />

                {item.image_text && (
                  <div className="absolute z-20 bottom-6 start-6 max-w-[17rem] bg-white/95 backdrop-blur rounded-2xl shadow-lg px-5 py-4 border-s-4 border-primary">
                    <p className="lg:text-lg text-base text-[#5B5B5B]">
                      {item.image_text}
                    </p>
                  </div>
                )}
              </div>

              {/* ===== Content ===== */}
              <div className={`text-start ${reversed ? "lg:order-1" : ""}`}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-10 h-10 rounded-full bg-primary text-white font-bold flex items-center justify-center shadow-lg shadow-primary/30">
                    {index + 1}
                  </span>
                  {item.sub_title && (
                    <span className="px-4 py-1 rounded-full bg-primary/10 text-primary text-sm lg:text-base font-semibold">
                      {item.sub_title}
                    </span>
                  )}
                </div>

                <h2 className="font-bold text-primary lg:text-4xl text-2xl leading-tight">
                  {item.title}
                </h2>

                <div className="w-16 h-1 rounded-full bg-primary/40 my-5" />

                <p className="text-[#777777] text-lg leading-relaxed">
                  {item.description}
                </p>

                {item.file && (
                  <button
                    onClick={() => handleDownload(item, index)}
                    disabled={isDownloading}
                    className={`mt-8 w-full sm:w-auto sm:min-w-[16rem] px-8 h-[3.5rem] gap-x-2 flex justify-center items-center rounded-xl font-semibold text-white transition-all duration-300 ${
                      isDownloading
                        ? "bg-primary/70 cursor-not-allowed"
                        : "bg-primary hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30 cursor-pointer"
                    }`}
                  >
                    {isDownloading ? (
                      <>
                        <svg
                          className="animate-spin h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        <span>{i18next.t("Protection.downloading")}</span>
                      </>
                    ) : (
                      <>
                        <span>{i18next.t("Protection.donwload_pdf")}</span>
                        <img src={download} alt="" className="w-5 h-5" />
                      </>
                    )}
                  </button>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Protection;