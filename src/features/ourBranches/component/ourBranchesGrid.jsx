import BranchCard from "../../../ui/branchCard";

const OurBranchesGrid = ({branchesGridData}) => {
  return (
    <div className="container5 mx-auto">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-[2rem] mt-[3rem]">
        {branchesGridData?.data?.map((branch) => (
          <BranchCard key={branch.id} branch={branch} />
        ))}
      </div>
    </div>
  );
};

export default OurBranchesGrid;