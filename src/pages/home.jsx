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
const Home = () => {
  const {
    data: homePageData,
    isLoading: homePageDataLoading,
    error: homePageDataError,
  } = usefetchHomePage();
  return (
    <div>
      <SliderHome homePageData={homePageData} />
      <About homePageData={homePageData} />
      <Services homePageData={homePageData} />
      <WorkProcess homePageData={homePageData} />
      <Client homePageData={homePageData}/>
      <Protection homePageData={homePageData} />
      <ChooseUs homePageData = {homePageData}/>
      <OurBranches homePageData = {homePageData}/>
      <Contact />
    </div>
  );
};

export default Home;
