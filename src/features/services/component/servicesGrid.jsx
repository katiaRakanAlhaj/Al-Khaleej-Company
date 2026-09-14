const ServicesGrid = ({ servicesData }) => {
  return (
    <div className="container2 mx-auto lg:mt-[5rem] mt-[3rem]">
      {/* Header Section */}
      <div className="flex flex-col items-center justify-center mt-[2rem]">
        <h1 className="font-bold text-[#131B2E] lg:text-4xl text-[1.5rem] text-nowrap">
          {servicesData?.data?.title}
        </h1>
        <p className="text-[#434652] text-lg lg:px-[15rem] mt-3 text-center">
          {servicesData?.data?.description}
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[2rem] lg:mt-[4rem] mt-[2rem]">
        {servicesData?.data?.services.map((service) => (
          <div
            key={service.id}
            className="w-full h-[15rem] bg-white border border-[#C4C6D4] rounded-lg p-[1.5rem]"
          >
            <div className="flex flex-col space-y-2">
              <div className="w-[3rem] h-[3rem] bg-[#204CA91A] rounded-sm flex justify-center items-center">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-[1.5rem] h-[1.5rem]"
                />
              </div>
              <h1 className="text-primary font-bold text-[1.4rem]">
                {service.title}
              </h1>
              <p className="text-[#434652] leading-relaxed text-md line-clamp-3">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesGrid;
