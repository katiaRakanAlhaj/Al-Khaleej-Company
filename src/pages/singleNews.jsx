import LastNews from "../features/singleNews/component/lastNews";
import SingleNewsBanner from "../features/singleNews/component/singleNewsBanner";
import SingleNewsDescription from "../features/singleNews/component/singleNewsDescription";
import { useParams } from "react-router-dom"; // If using React Router
import { useFetchNewsPageById } from "../features/singleNews/hook/usefetchNewsPageById";
import { useFetchLatestNews } from "../features/singleNews/hook/usefetchNewsPageById";
import { HelmetProvider } from "react-helmet-async";
import MetaHelmet from "../component/meta/metaHelemt";
import ScrollToTop from "../component/scrollToTop/scrollToTop";
import Loader from "../component/loader/loader";
import ErrorMessageNetwork from "../component/errorMessage/errorMessage";

const SingleNews = () => {
  const { id } = useParams();
  const {
    data: newsPageByIdData,
    isLoading: newsPageByIdDataLoading,
    error: newsPageByIdDataError,
  } = useFetchNewsPageById(id);
  const {
    data: LatestNewsData,
    isLoading: LatestNewsDataLoading,
    error: LatestNewsDataError,
  } = useFetchLatestNews();
  if (newsPageByIdDataLoading || LatestNewsDataLoading) {
    return <Loader />;
  }
  if (newsPageByIdDataError || LatestNewsDataError) {
    return <ErrorMessageNetwork />;
  }
  return (
    <>
      <ScrollToTop />
      <HelmetProvider>
        <MetaHelmet
          title={newsPageByIdData?.data?.title}
          description={newsPageByIdData?.data?.description}
        />
        <div className="container4 mx-auto">
          <SingleNewsBanner newsPageByIdData={newsPageByIdData} />
          <div className="grid lg:grid-cols-12 grid-cols-1 gap-[2rem] mt-[3rem]">
            <div className="lg:col-span-8 col-span-1">
              <SingleNewsDescription newsPageByIdData={newsPageByIdData} />
            </div>
            <div className="lg:col-span-4 col-span-1">
              <LastNews LatestNewsData={LatestNewsData} />
            </div>
          </div>
        </div>
      </HelmetProvider>
    </>
  );
};
export default SingleNews;
