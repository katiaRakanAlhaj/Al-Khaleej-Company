import AboutBanner from "../features/about/component/aboutBanner";
import AboutCompany from "../features/about/component/aboutCompany";
import AboutVission from "../features/about/component/aboutVission";
import { usefetchAboutPage } from "../features/about/hook/useFetchAbout";

const About = ()=> {
    const {data:aboutPageData , isLoading:aboutPageDataLoading,error:aboutPageDataError} = usefetchAboutPage();
    return(
        <div>
            <AboutBanner aboutPageData = {aboutPageData}/>
            <AboutCompany aboutPageData ={aboutPageData}/>
            <AboutVission aboutPageData = {aboutPageData}/>
        </div>
    )
}
export default About;