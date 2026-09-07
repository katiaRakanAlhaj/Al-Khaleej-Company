import { useParams } from "react-router-dom";
import BranchDetailsHeader from "../features/branchDetails/component/branchDetailsHeader";
import BranchDetailsMain from "../features/branchDetails/component/branchDetailsMain";
import MoreBranches from "../features/branchDetails/component/MoreBranches";
import { useFetchBranchById } from "../features/branchDetails/hook/useFetchBranchById";
import {
  useFetchBranchesGrid,
  useFetchBranchesPage,
} from "../features/ourBranches/hook/useFetchBranchesPage";

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
  return (
    <div>
      <div className="container1 mx-auto">
        <BranchDetailsHeader branchDetailsData={branchDetailsData} />
        <BranchDetailsMain branchDetailsData={branchDetailsData} />
      </div>
      <MoreBranches branchesData={branchesData} />
    </div>
  );
};
export default BranchDetails;
