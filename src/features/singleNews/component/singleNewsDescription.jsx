import sharing from "../../../assets/images/sharing.svg";
import mail from "../../../assets/images/mail.svg";
const SingleNewsDescription = () => {
  // Reusable classes to avoid repetition
  const bodyTextStyles =
    "text-[#131B2E] text-xl leading-relaxed mt-4 flex text-justify";
  const headingStyles = "text-[#00348A] font-bold text-3xl mt-4";
  const buttonStyles =
    "w-[2.5rem] h-[2.5rem] flex justify-center items-center rounded-full bg-[#E2E7FF]";
  const buttons = ["Insurance", "Legislation", "Iraq"];
  return (
    <div>
      <p className="text-[#131B2E] flex text-justify text-xl leading-relaxed">
        The Iraqi insurance sector has faced numerous challenges both
        historically and in recent times. Economic fluctuations, regulatory
        hurdles, and a lack of public awareness have contributed to a fragmented
        market. However, there is a growing recognition of the critical role
        that a robust insurance industry plays in national economic stability
        and development. Overcoming these challenges requires strategic
        legislative reforms and concerted efforts from all stakeholders.
      </p>

      <h1 className={headingStyles}>
        Current Challenges in the Insurance Sector
      </h1>

      <p className={bodyTextStyles}>
        To address these systemic issues, the proposal for a Compulsory
        Insurance Law has emerged as a viable solution. This draft legislation
        aims to mandate essential insurance coverage across various sectors,
        thereby mitigating risks and ensuring a safety net for businesses and
        individuals alike. The implementation of such a law is seen as a
        necessary step towards modernizing the Iraqi insurance landscape.
      </p>

      <div className="w-full h-auto bg-[#F2F3FF] mt-4 flex justify-center items-center p-8 relative">
        <div className="absolute h-full left-0 top-0 w-[0.3em] bg-[#00348A]"></div>
        <p className="w-full text-xl leading-relaxed text-[#434652]">
          "Enacting a compulsory insurance law will represent a qualitative leap
          in protecting individuals and properties, and will effectively
          contribute to the stability of the national economy."
        </p>
      </div>

      <h1 className={headingStyles}>Next Steps and Proposals</h1>

      <p className={bodyTextStyles}>
        Key provisions of the proposed law focus on critical areas such as Fire
        Insurance for commercial shops and warehouses, providing much-needed
        protection against unforeseen disasters. Furthermore, it advocates for
        compulsory insurance for car owners and imported active role of the
        Iraqi Insurance Association and the regulatory oversight of the Diwan of
        Insurance.
      </p>
      <div className="w-full h-[0.1rem] mt-[4rem] bg-[#C4C6D4]"></div>
      <div className="mt-[2rem] flex justify-between items-center">
        <div className="flex gap-x-2  text-lg text-[#505F76]">
          {buttons?.map((button) => (
            <div className="w-fit p-2 h-[2.4rem] bg-[#E2E7FF]">{button}</div>
          ))}
        </div>
        <div className="flex items-center gap-x-2">
          <p className="text-md text-[#505F76]">Share News:</p>
          <div className={buttonStyles}>
            <img className="w-[1rem]" src={sharing} />
          </div>
          <div className={buttonStyles}>
            <img className="w-[1rem]" src={mail} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleNewsDescription;
