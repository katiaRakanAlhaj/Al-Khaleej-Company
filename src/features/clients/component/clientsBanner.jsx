import Banner from "../../../ui/banner";
import i18next from "i18next";
const ClientsBanner = ({ clinetsDataPage }) => {
  return (
    <div>
      <Banner
        image={clinetsDataPage?.data?.banner}
        title={i18next.t("clients.our_clients")}
        description={clinetsDataPage?.data?.description}
      />
    </div>
  );
};
export default ClientsBanner;
