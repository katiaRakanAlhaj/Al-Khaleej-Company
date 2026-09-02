import i18next from "i18next";
import serviesBanner from "../../../assets/images/aboutBanner.png";
import Banner from "../../../ui/banner";

const ServicesBanner = () => {
  return (
    <div>
      <Banner
        image={serviesBanner}
        title={i18next.t("Services.our_services")}
        description="Providing comprehensive and reliable insurance solutions across Iraq, tailored to
protect your future."
        altText="services banner"
      />
    </div>
  );
};
export default ServicesBanner;