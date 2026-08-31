import aboutBanner from "../../../assets/images/aboutBanner.png";
import Banner from "../../../ui/banner";

const AboutBanner = () => {
  return (
    <Banner
      image={aboutBanner}
      title="About Us"
      description="Gulf Insurance Company is a leader in life and general insurance in Iraq since 2004."
      altText="about banner"
    />
  );
};

export default AboutBanner;