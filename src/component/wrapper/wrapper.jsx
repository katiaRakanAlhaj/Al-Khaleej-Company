// src/component/wrapper/wrapper.jsx
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./footer";

function Wrapper() {


  return (
    <div className="size-full relative">
      {/* <ScrollToTop /> */}
       <div className="hidden lg:flex">
        <Navbar/>
      </div>
      <div className="lg:hidden md:block">
        {/* <NavbarMobile servicesData = {servicesData} companyData={companyData}/>  */}
      </div>
      {/* This is where your Home component should render */}
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Wrapper;