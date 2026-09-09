import { useParams } from "react-router-dom";
import BranchDetailsHeader from "../features/branchDetails/component/branchDetailsHeader";
import BranchDetailsMain from "../features/branchDetails/component/branchDetailsMain";
import MoreBranches from "../features/branchDetails/component/MoreBranches";
import { useFetchBranchById } from "../features/branchDetails/hook/useFetchBranchById";
import {
  useFetchBranchesGrid,
  useFetchBranchesPage,
} from "../features/ourBranches/hook/useFetchBranchesPage";
import { HelmetProvider } from "react-helmet-async";
import MetaHelmet from "../component/meta/metaHelemt";
import ScrollToTop from "../component/scrollToTop/scrollToTop";
import Loader from "../component/loader/loader";

const BranchDetails = () => {
  const { id } = useParams();
  const {
    data: branchDetailsData,
    isLaoding: branchDetailsDataLoading,
    error: branchDetailsDataError,
  } = useFetchBranchById(id);
  const {
    data: branchesData,
    isLoading: branchesDataLoading,
    error: branchesDataError,
  } = useFetchBranchesGrid();
  if (branchDetailsDataLoading || branchesDataLoading) {
    return <Loader />;
  }
  return (
    <div>
      <ScrollToTop />
      <HelmetProvider>
        <MetaHelmet
          title={branchDetailsData?.data?.name}
          description={branchDetailsData?.data?.name}
        />
        <div className="container1 mx-auto">
          <BranchDetailsHeader branchDetailsData={branchDetailsData} />
          <BranchDetailsMain branchDetailsData={branchDetailsData} />
        </div>
        <MoreBranches branchesData={branchesData} />
      </HelmetProvider>
    </div>
  );
};
export default BranchDetails;
