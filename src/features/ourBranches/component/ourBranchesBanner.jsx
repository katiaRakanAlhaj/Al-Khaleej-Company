import bgBranch from "../../../assets/images/bgBranch.png";
import Banner from "../../../ui/banner";
const OurBranchesBanner = () => {
  return (
    <div>
      <Banner
      image = {bgBranch}
        title={"Our Branches"}
        description={
          "Providing comprehensive and reliable insurance solutions across Iraq, tailored to protect your future."
        }
      />
    </div>
  );
};
export default OurBranchesBanner;
