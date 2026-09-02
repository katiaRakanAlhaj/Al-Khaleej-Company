import clientBanner from "../../../assets/images/clientBanner.png";
import Banner from "../../../ui/banner";
import i18next from "i18next"
const ClientsBanner = () => {
  return (
    <div>
      <Banner
        image={clientBanner}
        title={i18next.t("clients.our_clients")}
        description="Providing comprehensive and reliable insurance solutions across Iraq, tailored to protect your future."
      />
    </div>
  );
};
export default ClientsBanner;
