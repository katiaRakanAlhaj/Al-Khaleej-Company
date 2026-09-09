import { HelmetProvider } from "react-helmet-async";
import OurBranchesBanner from "../features/ourBranches/component/ourBranchesBanner";
import OurBranchesGrid from "../features/ourBranches/component/ourBranchesGrid";
import {
  useFetchBranchesGrid,
  useFetchBranchesPage,
} from "../features/ourBranches/hook/useFetchBranchesPage";
import MetaHelmet from "../component/meta/metaHelemt";
import ScrollToTop from "../component/scrollToTop/scrollToTop";
import Loader from "../component/loader/loader";

const OurBranches = () => {
  const {
    data: branchesData,
    isLoading: branchesDataLoading,
    error: branchesDataError,
  } = useFetchBranchesPage();
  const {
    data: branchesGridData,
    isLoading: branchesGridDataLoading,
    error: branchesGridDataError,
  } = useFetchBranchesGrid();
  if (branchesGridDataLoading || branchesDataLoading) {
    return <Loader />;
  }
  return (
    <div>
      <ScrollToTop />
      <HelmetProvider>
        <MetaHelmet
          title={branchesData?.data?.meta_title}
          description={branchesData?.data?.meta_description}
        />

        <OurBranchesBanner branchesData={branchesData} />
        <OurBranchesGrid branchesGridData={branchesGridData} />
      </HelmetProvider>
    </div>
  );
};
export default OurBranches;
