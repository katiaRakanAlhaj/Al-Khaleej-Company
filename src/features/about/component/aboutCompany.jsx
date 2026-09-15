const AboutCompany = ({ aboutPageData }) => {
  // Extract data from the response
  const sections = aboutPageData?.data?.sections || [];

  // The first section is the company overview
  const overviewSection = sections[0] || {};

  // The remaining sections are the company details (items)
  const items = sections.slice(1).map((section) => ({
    image: section.icon, // Use the icon URL from the response
    title: section.title,
    desc: section.description,
  }));

  return (
    <div className="container1 mx-auto lg:py-[4rem] py-[3rem]">
      <div className="grid lg:grid-cols-12 grid-cols-1 gap-[2rem]">
        {/* first column - Company Overview */}
        <div className="lg:col-span-8 col-span-1">
          <div
            style={{ boxShadow: "0px 0px 8px 0px #00000040" }}
            className="w-full h-auto pb-[3.5rem] bg-white p-[2rem] rounded-xl"
          >
            <div className="flex gap-x-2 items-center-safe">
              <img
                className="w-[2rem]"
                src={overviewSection.icon}
                alt="Company"
              />
              <h1 className="text-primary lg:text-4xl text-[1.5rem] font-bold">
                {overviewSection.title}
              </h1>
            </div>
            <p className="leading-[2rem] whitespace-break-spaces  text-lg mt-[1rem] text-[#434652]">
              {overviewSection.description}
            </p>
          </div>
        </div>

        {/* second column - Company Details */}
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
                    <img
                      className="w-[1.2rem] lg:mt-0 mt-[0.6rem]"
                      src={item.image}
                      alt={item.title}
                    />
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
