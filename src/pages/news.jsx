import { HelmetProvider } from "react-helmet-async";
import NewsGrid from "../features/news/component/newsGrid";
import { usefetchNewsPage } from "../features/news/hook/useFetchNews";
import MetaHelmet from "../component/meta/metaHelemt";
import ScrollToTop from "../component/scrollToTop/scrollToTop";
import Loader from "../component/loader/loader";

const News = () => {
  const {
    data: newsData,
    isLoading: newsDataLoading,
    error: newsDataError,
  } = usefetchNewsPage();
  if (newsDataLoading) {
    return <Loader />;
  }
  return (
    <div>
      <ScrollToTop />
      <HelmetProvider>
        <MetaHelmet title={"News"} description={"News"} />
      </HelmetProvider>
      <NewsGrid newsData={newsData} />
    </div>
  );
};
export default News;
