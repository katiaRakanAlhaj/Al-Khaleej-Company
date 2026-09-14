import { useState } from "react";
import { HelmetProvider } from "react-helmet-async";
import ServicesBanner from "../features/services/component/servicesBanner";
import ServicesGrid from "../features/services/component/servicesGrid";
import {
  usefetchAllServices,
  usefetchServicesPage,
} from "../features/services/hook/useFetchServices";
import MetaHelmet from "../component/meta/metaHelemt";
import ScrollToTop from "../component/scrollToTop/scrollToTop";
import Loader from "../component/loader/loader";
import ErrorMessageNetwork from "../component/errorMessage/errorMessage";

const Services = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const {
    data: servicesData,
    isLoading: servicesDataLoading,
    error: servicesDataError,
  } = usefetchServicesPage();

  const {
    data: allServicesData,
    isLoading: allServicesDataLoading,
    error: allServicesDataError,
    isFetching, // optional: to show subtle loading state on page change
  } = usefetchAllServices(currentPage);

  if (servicesDataLoading || allServicesDataLoading) {
    return <Loader />;
  }

  if (servicesDataError || allServicesDataError) {
    return <ErrorMessageNetwork />;
  }

  // Extract pagination info from API response (adjust paths to match your API)
  const lastPage =
    allServicesData?.data?.last_page ||
    allServicesData?.meta?.last_page ||
    1;

  const handlePageChange = (page) => {
    if (page < 1 || page > lastPage) return;
    setCurrentPage(page);
  };

  return (
    <div>
      <ScrollToTop />
      <HelmetProvider>
        <MetaHelmet
          title={servicesData?.data?.meta_title}
          description={servicesData?.data?.meta_description}
        />
        <ServicesBanner servicesData={servicesData} />
        <ServicesGrid
          servicesData={servicesData}
          allServicesData={allServicesData}
          currentPage={currentPage}
          lastPage={lastPage}
          onPageChange={handlePageChange}
        />
      </HelmetProvider>
    </div>
  );
};

export default Services;