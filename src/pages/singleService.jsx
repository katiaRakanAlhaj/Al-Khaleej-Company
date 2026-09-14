import { useParams } from "react-router-dom";
import SingleServiceBanner from "../features/singleService/component/singleServiceBanner";
import SingleServiceDescription from "../features/singleService/component/singleServiceDescription";
import { useFetchServiceById } from "../features/services/hook/useFetchServices";
import ScrollToTop from "../component/scrollToTop/scrollToTop";
import Loader from "../component/loader/loader";
import ErrorMessageNetwork from "../component/errorMessage/errorMessage";
import { HelmetProvider } from "react-helmet-async";
import MetaHelmet from "../component/meta/metaHelemt";

const SingleService = () => {
  const { id } = useParams();
  const {
    data: serviceByIdData,
    isLoading: serviceByIdDataLoading,
    error: serviceByIdDataError,
  } = useFetchServiceById(id);
  if (serviceByIdDataLoading) {
    return <Loader />;
  }
  if (serviceByIdDataError) {
    return <ErrorMessageNetwork />;
  }
  return (
    <>
      <div>
        <HelmetProvider>
          <MetaHelmet
            title={serviceByIdData?.data?.title}
            description={serviceByIdData?.data?.description}
          />
          <ScrollToTop />
          <SingleServiceBanner serviceByIdData = {serviceByIdData}/>
          <SingleServiceDescription serviceByIdData = {serviceByIdData}/>
        </HelmetProvider>
      </div>
    </>
  );
};
export default SingleService;
