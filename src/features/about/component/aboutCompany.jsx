import mainCompany from "../../../assets/images/mainCompany.svg";
import company1 from "../../../assets/images/company1.svg";
import company2 from "../../../assets/images/company2.svg";
import company3 from "../../../assets/images/company3.svg";
import company4 from "../../../assets/images/company4.svg";

const AboutCompany = () => {
  const items = [
    {
      image: company1,
      title: "REGISTERED COMPANY NAME",
      desc: "Gulf Insurance Company (Private Shareholding)",
    },
    {
      image: company2,
      title: "CERTIFICATE OF INCORPORATION NO.",
      desc: "M.SH / 16074",
    },
    {
      image: company3,
      title: "INSURANCE PRACTICE LICENSE",
      desc: "5/2004 on 7/12/2004",
    },
    { image: company4, title: "TAX NUMBER", desc: "900357977" },
  ];

  return (
    <div className="container1 mx-auto lg:py-[4rem] py-[3rem]">
      <div className="grid lg:grid-cols-12 grid-cols-1 gap-[2rem]">
        {/* first column */}
        <div className="lg:col-span-8 col-span-1">
          <div
            style={{ boxShadow: "0px 0px 8px 0px #00000040" }}
            className="w-full h-auto pb-[3.5rem] bg-white p-[2rem] rounded-xl"
          >
            <div className="flex gap-x-2 items-center-safe">
              <img className="w-[2rem]" src={mainCompany} alt="Company" />
              <h1 className="text-primary lg:text-4xl text-[1.5rem] font-bold">
                Company Overview
              </h1>
            </div>
            <p className="leading-[2rem] whitespace-pre-line text-lg mt-[1rem] text-[#434652]">
              Gulf Insurance Company is one of the leading companies providing
              life and general insurance services in Iraq, where we are
              committed to providing comprehensive, reliable, and customized
              insurance solutions. Since the company's establishment in 2004, we
              have achieved steady growth to become one of the most trusted
              names in the insurance industry in the region. Our journey began
              in difficult circumstances, and yet we managed to achieve
              remarkable growth from the beginning.
              <br />
              In our first year, we generated strong profits from insurance
              premiums and investments, paving the way for the continuous
              success we experience today. Over the years, our commitment to
              providing exceptional insurance coverage has contributed to
              achieving financial stability and gaining the trust of our
              clients.
            </p>
          </div>
        </div>
        {/* second column */}
        <div className="lg:col-span-4 col-span-1">
          <div className="flex flex-col space-y-[1rem]">
            {items.map((item, index) => (
              <div
                key={index}
                style={{ boxShadow: "0px 0px 8px 0px #00000040" }}
                className="w-full h-auto p-[1rem] bg-white rounded-xl"
              >
                <div className="flex gap-x-[1rem]">
                  <div>
                    <img className="w-[1.2rem] lg:mt-0 mt-[0.6rem]" src={item.image} alt={item.title} />
                  </div>
                  <div className="flex flex-col">
                    <h1 className="text-lg text-[#505F76]">{item.title}</h1>
                    <p className="text-lg text-[#131B2E]">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;