import serviesBanner from "../../../assets/images/aboutBanner.png";
import Banner from "../../../component/ux/banner";

const ServicesBanner = () => {
  return (
    <div>
      <Banner
        image={serviesBanner}
        title="Our Insurance Services"
        description="Providing comprehensive and reliable insurance solutions across Iraq, tailored to
protect your future."
        altText="services banner"
      />
    </div>
  );
};
export default ServicesBanner;