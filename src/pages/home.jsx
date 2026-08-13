// src/pages/home.jsx
import slide from "../assets/images/slide1.png";
import { useEffect } from "react";
import SliderHome from "../features/home/component/sliderHome";
import About from "../features/home/component/about";
import Services from "../features/home/component/services";
import WorkProcess from "../features/home/component/workProcess";
import Client from "../features/home/component/client";
const Home = () => {
  return (
    <div>
      <SliderHome />
      <About />
      <Services/>
      <WorkProcess/>
      <Client/>
    </div>
  );
};

export default Home;
