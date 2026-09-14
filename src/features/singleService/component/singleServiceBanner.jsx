import Banner from "../../../ui/banner";

const SingleServiceBanner = ({ serviceByIdData }) => {
  return (
    <div>
      <Banner
        title={serviceByIdData?.data?.title}
        image={serviceByIdData?.data?.banner}
      />
    </div>
  );
};
export default SingleServiceBanner;
