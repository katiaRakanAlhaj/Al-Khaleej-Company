import sharing from "../../../assets/images/sharing.svg";
import mail from "../../../assets/images/mail.svg";

const SingleNewsDescription = ({ newsPageByIdData }) => {
  // Reusable classes to avoid repetition
  const bodyTextStyles =
    "text-[#131B2E] lg:text-xl text-lg leading-relaxed mt-4 flex text-justify";
  const headingStyles = "text-[#00348A] font-bold lg:text-3xl text-[1.5rem] mt-4";
  const buttonStyles =
    "w-[2.5rem] h-[2.5rem] flex justify-center items-center rounded-full bg-[#E2E7FF]";
  
  const buttons = ["Insurance", "Legislation", "Iraq"];

  // Extract sections from the response data
  const sections = newsPageByIdData?.data?.sections || [];

  return (
    <div>
      {/* Render all sections dynamically */}
      {sections.map((section, index) => {
        // Check if section has a title or note to determine rendering style
        const hasTitle = section.title && section.title.trim() !== "";
        const hasNote = section.note && section.note.trim() !== "";
        
        // If section has a note, render it as a quote block
        if (hasNote) {
          return (
            <div key={index}>
              {/* If there's a title before the note, render it */}
              {hasTitle && <h1 className={headingStyles}>{section.title}</h1>}
              
              {/* Render description if it exists */}
              {section.description && section.description.trim() !== "" && (
                <p className={bodyTextStyles}>{section.description}</p>
              )}
              
              {/* Render the note as a quote block */}
              <div className="w-full h-auto bg-[#F2F3FF] mt-4 flex justify-center items-center p-8 relative">
                <div className="absolute h-full left-0 top-0 w-[0.3em] bg-[#00348A]"></div>
                <p className="w-full lg:text-xl text-lg leading-relaxed text-[#434652]">
                  "{section.note}"
                </p>
              </div>
            </div>
          );
        }
        
        // If section has a title but no note, render as heading + description
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
        
        // If section has no title but has description (first section typically)
        if (!hasTitle && section.description) {
          return (
            <p key={index} className="text-[#131B2E] flex text-justify lg:text-xl text-lg leading-relaxed">
              {section.description}
            </p>
          );
        }
        
        // Fallback: just render description if nothing else
        if (section.description) {
          return (
            <p key={index} className="text-[#131B2E] flex text-justify lg:text-xl text-lg leading-relaxed">
              {section.description}
            </p>
          );
        }
        
        return null;
      })}

      {/* Divider line */}
      <div className="w-full h-[0.1rem] mt-[4rem] bg-[#C4C6D4]"></div>
      
      {/* Tags and share buttons */}
      <div className="mt-[2rem] flex justify-between items-center flex-wrap">
        {/* <div className="flex gap-x-2 text-lg text-[#505F76] flex-wrap">
          {buttons?.map((button, index) => (
            <div 
              key={index} 
              className="w-fit p-2 h-[2.4rem] bg-[#E2E7FF] rounded"
            >
              {button}
            </div>
          ))}
        </div> */}
        {/* Uncomment if you want to show share buttons */}
        {/* <div className="flex items-center gap-x-2">
          <p className="text-md text-[#505F76]">Share News:</p>
          <div className={buttonStyles}>
            <img className="w-[1rem]" src={sharing} alt="Share" />
          </div>
          <div className={buttonStyles}>
            <img className="w-[1rem]" src={mail} alt="Email" />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default SingleNewsDescription;