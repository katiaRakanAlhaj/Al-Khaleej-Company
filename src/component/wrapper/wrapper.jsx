// src/component/wrapper/wrapper.jsx
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./footer";
import NavbarMobile from "./NavbarMobile";
import { usefetchContactPage } from "../../features/contact/hook/useFetchContact";
import { usefetchHomePage } from "../../features/home/hook/useFetchHome";

function Wrapper() {
  const {
    data: contactData,
    isLoading: contactDataLoading,
    error: contactDataError,
  } = usefetchContactPage();
  const {
    data: homePageData,
    isLoading: homePageDataLoading,
    error: homePageDataError,
  } = usefetchHomePage();
  return (
    <div className="size-full relative">
      {/* <ScrollToTop /> */}
      <div className="hidden lg:flex">
        <Navbar contactData = {contactData}/>
      </div>
      <div className="lg:hidden md:block">
        <NavbarMobile contactData = {contactData}/>
      </div>
      {/* This is where your Home component should render */}
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer contactData = {contactData} homePageData = {homePageData}/>
    </div>
  );
}

export default Wrapper;
