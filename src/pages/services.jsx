import { HelmetProvider } from "react-helmet-async";
import ServicesBanner from "../features/services/component/servicesBanner";
import ServicesGrid from "../features/services/component/servicesGrid";
import { usefetchServicesPage } from "../features/services/hook/useFetchServices";
import MetaHelmet from "../component/meta/metaHelemt";
import ScrollToTop from "../component/scrollToTop/scrollToTop";
import Loader from "../component/loader/loader";
import ErrorMessageNetwork from "../component/errorMessage/errorMessage";

const Services = () => {
  const {
    data: servicesData,
    isLoading: servicesDataLoading,
    error: servicesDataError,
  } = usefetchServicesPage();
  if (servicesDataLoading) {
    return <Loader />;
  }
  if (servicesDataError) {
    return <ErrorMessageNetwork />;
  }
  return (
    <div>
      <ScrollToTop />
      <HelmetProvider>
        <MetaHelmet
          title={servicesData?.data?.meta_title}
          description={servicesData?.data?.meta_description}
        />
        <ServicesBanner servicesData={servicesData} />
        <ServicesGrid servicesData={servicesData} />
      </HelmetProvider>
    </div>
  );
};
export default Services;
