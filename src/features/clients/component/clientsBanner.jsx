import clientBanner from "../../../assets/images/clientBanner.png";
import Banner from "../../../ui/banner";
const ClientsBanner = () => {
  return (
    <div>
      <Banner
        image={clientBanner}
        title="Our Clients"
        description="Providing comprehensive and reliable insurance solutions across Iraq, tailored to protect your future."
      />
    </div>
  );
};
export default ClientsBanner;
