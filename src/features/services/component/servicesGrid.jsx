import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Pagination from "../../../ui/pagination";
import DOMPurify from "dompurify";

const ServicesGrid = ({
  servicesData,
  allServicesData,
  currentPage,
  lastPage,
  onPageChange,
}) => {
  const navigate = useNavigate();
  const { lang } = useParams(); // assumes your route is like /:lang/services

  // Scroll to top whenever the page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const handleCardClick = (serviceId) => {
    // If lang exists in params, keep it; otherwise fallback
    const language = lang || "en";
    navigate(`/${language}/service/${serviceId}`);
  };

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
        {allServicesData?.data?.map((service) => (
          <div
            key={service.id}
            onClick={() => handleCardClick(service.id)}
            className="w-full h-[15rem] bg-white border border-[#C4C6D4] rounded-lg p-[1.5rem] cursor-pointer hover:shadow-md transition-shadow"
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
              <p
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(service.description),
                }}
                className="text-[#434652] leading-relaxed md:text-lg text-md line-clamp-3"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        lastPage={lastPage}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default ServicesGrid;
