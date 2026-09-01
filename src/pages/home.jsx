import slide from "../assets/images/slide1.png";
import { useEffect } from "react";
import SliderHome from "../features/home/component/sliderHome";
import About from "../features/home/component/about";
import Services from "../features/home/component/services";
import WorkProcess from "../features/home/component/workProcess";
import Client from "../features/home/component/client";
import Protection from "../features/home/component/protection";
import ChooseUs from "../features/home/component/chooseUs";
import OurBranches from "../features/home/component/ourBranches";
import Contact from "../features/home/component/contact";
const Home = () => {
  return (
    <div>
      <SliderHome />
      <About />
      <Services/>
       <WorkProcess/>
      <Client/>
      <Protection/>
      <ChooseUs/>
      <OurBranches/>
      <Contact/> 
    </div>
  );
};

export default Home;
