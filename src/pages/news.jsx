import { HelmetProvider } from "react-helmet-async";
import { useSearchParams } from "react-router-dom";
import NewsGrid from "../features/news/component/newsGrid";
import { usefetchNewsPage } from "../features/news/hook/useFetchNews";
import MetaHelmet from "../component/meta/metaHelemt";
import ScrollToTop from "../component/scrollToTop/scrollToTop";
import Loader from "../component/loader/loader";
import ErrorMessageNetwork from "../component/errorMessage/errorMessage";

const News = () => {
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get("page")) || 1; // ✅ READ PAGE FROM URL

  const {
    data: newsData,
    isLoading: newsDataLoading,
    error: newsDataError,
  } = usefetchNewsPage(page); // ✅ PASS PAGE TO HOOK

  if (newsDataLoading) {
    return <Loader />;
  }
  if (newsDataError) {
    return <ErrorMessageNetwork />;
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