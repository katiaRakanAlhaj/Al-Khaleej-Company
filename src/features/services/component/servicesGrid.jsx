import serviceIcon1 from "../../../assets/images/serviceIcon1.svg";
import serviceIcon2 from "../../../assets/images/serviceIcon2.svg";
import serviceIcon3 from "../../../assets/images/serviceIcon3.svg";
import serviceIcon4 from "../../../assets/images/serviceIcon4.svg";
import serviceIcon5 from "../../../assets/images/serviceIcon5.svg";
import serviceIcon6 from "../../../assets/images/serviceIcon6.svg";
import serviceIcon7 from "../../../assets/images/serviceIcon7.svg";

const ServicesGrid = () => {
  const services = [
    {
      id: 1,
      icon: serviceIcon1,
      title: "Property Insurance",
      desc: "Coverage for fire, theft, floods, and natural disasters, ensuring your physical assets remain secure against unforeseen events.",
    },
    {
      id: 2,
      icon: serviceIcon2,
      title: "Engineering Insurance",
      desc: "Coverage for fire, theft, floods, and natural disasters, ensuring your physical assets remain secure against unforeseen events.",
    },
    {
      id: 3,
      icon: serviceIcon3,
      title: "Auto Insurance",
      desc: "Coverage for fire, theft, floods, and natural disasters, ensuring your physical assets remain secure against unforeseen events.",
    },
    {
      id: 4,
      icon: serviceIcon4,
      title: "Accident Insurance",
      desc: "Coverage for fire, theft, floods, and natural disasters, ensuring your physical assets remain secure against unforeseen events.",
    },
    {
      id: 5,
      icon: serviceIcon5,
      title: "Life Insurance",
      desc: "Coverage for fire, theft, floods, and natural disasters, ensuring your physical assets remain secure against unforeseen events.",
    },
    {
      id: 6,
      icon: serviceIcon6,
      title: "Marine Insurance",
      desc: "Coverage for fire, theft, floods, and natural disasters, ensuring your physical assets remain secure against unforeseen events.",
    },
    {
      id: 7,
      icon: serviceIcon7,
      title: "Health Insurance",
      desc: "Coverage for fire, theft, floods, and natural disasters, ensuring your physical assets remain secure against unforeseen events.",
    },
    {
      id: 8,
      icon: serviceIcon1,
      title: "Travel Insurance",
      desc: "Coverage for fire, theft, floods, and natural disasters, ensuring your physical assets remain secure against unforeseen events.",
    },
  ];

  return (
    <div className="container2 mx-auto lg:mt-[5rem] mt-[3rem]">
      {/* Header Section */}
      <div className="flex flex-col items-center justify-center mt-[2rem]">
        <h1 className="font-bold text-[#131B2E] lg:text-4xl text-[1.5rem] text-nowrap">
          Comprehensive Coverage
        </h1>
        <p className="text-[#434652] text-lg lg:px-[15rem] mt-3 text-center">
          Discover our range of specialized insurance products designed to offer
          peace of mind in every aspect of life and business.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[2rem] lg:mt-[4rem] mt-[2rem]">
        {services.map((service) => (
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
                {service.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesGrid;