import aboutBanner from "../../../assets/images/aboutBanner.png";
import Banner from "../../../ui/banner";
import i18next from "i18next"
const AboutBanner = () => {
  return (
    <Banner
      image={aboutBanner}
      title={i18next.t("aboutUs.about_us")}
      description="Gulf Insurance Company is a leader in life and general insurance in Iraq since 2004."
      altText="about banner"
    />
  );
};

export default AboutBanner;