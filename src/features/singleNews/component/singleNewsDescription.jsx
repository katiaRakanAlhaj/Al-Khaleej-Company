import i18next from "i18next";
const SingleNewsDescription = ({ newsPageByIdData }) => {
  const bodyTextStyles =
    "text-[#131B2E] lg:text-xl text-lg leading-relaxed mt-4 flex text-justify";
  const headingStyles =
    "text-[#00348A] font-bold lg:text-3xl text-[1.5rem] mt-4";

  const sections = newsPageByIdData?.data?.sections || [];

  const isEmptySections =
    sections.length === 0 ||
    sections.every(
      (section) => !section.title && !section.description && !section.note,
    );

  return (
    <div>
      {isEmptySections ? (
        <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
          {/* Direct URL SVG */}
          <img
            src="https://api.iconify.design/lucide:file-question.svg?color=%2300348A"
            alt="No content available"
            className="w-30 h-30 mb-4"
          />
          <h3 className="text-[#00348A] font-bold text-2xl mb-2">
            {i18next.t("emptyNews.no_content")}
          </h3>
          <p className="text-[#505F76] text-lg text-base max-w-md">
            {i18next.t("emptyNews.no_news")}
          </p>
        </div>
      ) : (
        sections.map((section, index) => {
          const hasTitle = section.title && section.title.trim() !== "";
          const hasNote = section.note && section.note.trim() !== "";

          if (hasNote) {
            return (
              <div key={index}>
                {hasTitle && <h1 className={headingStyles}>{section.title}</h1>}
                {section.description && section.description.trim() !== "" && (
                  <p className={bodyTextStyles}>{section.description}</p>
                )}
                <div className="w-full h-auto bg-[#F2F3FF] mt-4 flex justify-center items-center p-8 relative">
                  <div className="absolute h-full left-0 top-0 w-[0.3em] bg-[#00348A]"></div>
                  <p className="w-full lg:text-xl text-lg leading-relaxed text-[#434652]">
                    "{section.note}"
                  </p>
                </div>
              </div>
            );
          }

          if (hasTitle && !hasNote) {
            return (
              <div key={index}>
                <h1 className={headingStyles}>{section.title}</h1>
                {section.description && section.description.trim() !== "" && (
                  <p className={bodyTextStyles}>{section.description}</p>
                )}
              </div>
            );
          }

          if (!hasTitle && section.description) {
            return (
              <p key={index} className={bodyTextStyles}>
                {section.description}
              </p>
            );
          }

          return null;
        })
      )}

      <div className="w-full h-[0.1rem] mt-[4rem] bg-[#C4C6D4]"></div>
    </div>
  );
};

export default SingleNewsDescription;
