import i18next from "i18next";
import Banner from "../../../ui/banner";

const ServicesBanner = ({ servicesData }) => {
  return (
    <div>
      <Banner
        image={servicesData?.data?.banner}
        title={i18next.t("Services.our_services")}
        description={servicesData?.data?.banner_description}
      />
    </div>
  );
};
export default ServicesBanner;
