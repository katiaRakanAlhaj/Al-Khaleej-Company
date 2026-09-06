import OurBranchesBanner from "../features/ourBranches/component/ourBranchesBanner";
import OurBranchesGrid from "../features/ourBranches/component/ourBranchesGrid";
import {
  useFetchBranchesGrid,
  useFetchBranchesPage,
} from "../features/ourBranches/hook/useFetchBranchesPage";

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

  return (
    <div>
      <OurBranchesBanner branchesData={branchesData} />
      <OurBranchesGrid branchesGridData={branchesGridData} />
    </div>
  );
};
export default OurBranches;
