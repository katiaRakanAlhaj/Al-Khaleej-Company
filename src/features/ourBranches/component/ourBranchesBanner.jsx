import i18next from "i18next";
import bgBranch from "../../../assets/images/bgBranch.png";
import Banner from "../../../ui/banner";
const OurBranchesBanner = ({ branchesData }) => {
  return (
    <div>
      <Banner
        image={branchesData?.data?.banner}
        title={i18next.t("branches.branches_title")}
        description={branchesData?.data?.description}
      />
    </div>
  );
};
export default OurBranchesBanner;
