import i18next from "i18next";
import bgBranch from "../../../assets/images/bgBranch.png";
import Banner from "../../../ui/banner";
const OurBranchesBanner = () => {
  return (
    <div>
      <Banner
      image = {bgBranch}
        title={i18next.t("branches.branches_title")}
        description={
          "Providing comprehensive and reliable insurance solutions across Iraq, tailored to protect your future."
        }
      />
    </div>
  );
};
export default OurBranchesBanner;
