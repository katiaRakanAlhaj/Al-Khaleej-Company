import BranchDetailsHeader from "../features/branchDetails/component/branchDetailsHeader";
import BranchDetailsMain from "../features/branchDetails/component/branchDetailsMain";
import MoreBranches from "../features/branchDetails/component/MoreBranches";

const BranchDetails = ()=> {
    return(
        <div className = "container1 mx-auto">
            <BranchDetailsHeader/>
            <BranchDetailsMain/>
            <MoreBranches/>
        </div>
    )
}
export default BranchDetails;