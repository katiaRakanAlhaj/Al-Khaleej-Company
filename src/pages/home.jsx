import SliderHome from "../features/home/component/sliderHome";
import About from "../features/home/component/about";
import Services from "../features/home/component/services";
import WorkProcess from "../features/home/component/workProcess";
import Client from "../features/home/component/client";
import Protection from "../features/home/component/protection";
import ChooseUs from "../features/home/component/chooseUs";
import OurBranches from "../features/home/component/ourBranches";
import Contact from "../features/home/component/contact";
import { usefetchHomePage } from "../features/home/hook/useFetchHome";
import { HelmetProvider } from "react-helmet-async";
import MetaHelmet from "../component/meta/metaHelemt";
import ScrollToTop from "../component/scrollToTop/scrollToTop";
import Loader from "../component/loader/loader";
import ErrorMessageNetwork from "../component/errorMessage/errorMessage";
import { usefetchContactPage } from "../features/contact/hook/useFetchContact";
const Home = () => {
  const {
    data: homePageData,
    isLoading: homePageDataLoading,
    error: homePageDataError,
  } = usefetchHomePage();
  const {
    data: contactData,
    isLoading: contactDataLoading,
    error: contactDataError,
  } = usefetchContactPage();
  if (homePageDataLoading || contactDataLoading) {
    return <Loader />;
  }
  if (homePageDataError || contactDataError) {
    return <ErrorMessageNetwork />;
  }
  return (
    <div>
      <ScrollToTop />
      <HelmetProvider>
        <MetaHelmet
          title={homePageData?.data?.home_page?.meta_title}
          description={homePageData?.data?.home_page?.meta_description}
        />
        <SliderHome homePageData={homePageData} />
        <About homePageData={homePageData} />
        <Services homePageData={homePageData} />
        <WorkProcess homePageData={homePageData} />
        <Client homePageData={homePageData} />
        <Protection homePageData={homePageData} />
        <ChooseUs homePageData={homePageData} />
        <OurBranches homePageData={homePageData} />
        <Contact homePageData = {homePageData} contactData = {contactData}/>
      </HelmetProvider>
    </div>
  );
};

export default Home;
