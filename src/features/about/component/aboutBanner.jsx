import aboutBanner from "../../../assets/images/aboutBanner.png";
import Banner from "../../../ui/banner";
import i18next from "i18next"
const AboutBanner = ({aboutPageData}) => {
  return (
    <Banner
      image={aboutPageData?.data?.banner}
      title={i18next.t("aboutUs.about_us")}
      description={aboutPageData?.data?.description}
      altText="about banner"
    />
  );
};

export default AboutBanner;