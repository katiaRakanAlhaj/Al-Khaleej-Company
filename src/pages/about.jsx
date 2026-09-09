import { HelmetProvider } from "react-helmet-async";
import MetaHelmet from "../component/meta/metaHelemt";
import AboutBanner from "../features/about/component/aboutBanner";
import AboutCompany from "../features/about/component/aboutCompany";
import AboutVission from "../features/about/component/aboutVission";
import { usefetchAboutPage } from "../features/about/hook/useFetchAbout";
import ScrollToTop from "../component/scrollToTop/scrollToTop";
import Loader from "../component/loader/loader";

const About = () => {
  const {
    data: aboutPageData,
    isLoading: aboutPageDataLoading,
    error: aboutPageDataError,
  } = usefetchAboutPage();
  if (aboutPageDataLoading) {
    return <Loader />;
  }
  return (
    <div>
      <ScrollToTop />
      <HelmetProvider>
        <MetaHelmet
          title={aboutPageData?.data?.meta_title}
          description={aboutPageData?.data?.meta_description}
        />
        <AboutBanner aboutPageData={aboutPageData} />
        <AboutCompany aboutPageData={aboutPageData} />
        <AboutVission aboutPageData={aboutPageData} />
      </HelmetProvider>
    </div>
  );
};
export default About;
