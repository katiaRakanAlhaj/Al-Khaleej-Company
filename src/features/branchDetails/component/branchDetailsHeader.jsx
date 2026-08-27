import singleBranchImage from "../../../assets/images/singleBranchImage.png";

const BranchDetailsHeader = () => {
  return (
    <div className="grid grid-cols-12 gap-x-[2rem] mt-[6rem]">
      {/*first column */}
      <div className="col-span-5 flex flex-col justify-center">
        <h1 className="font-bold text-[#111C2D] text-5xl">Al-Arsat branch</h1>
        <p className="text-[#434652] text-xl leading-relaxed w-[90%] mt-[2rem]">
          Our flagship location in the heart of the city, providing
          comprehensive coverage options and dedicated support for all your
          insurance needs.
        </p>
      </div>
      {/*second column */}
      <div className="col-span-7">
        {/* Add wrapper div with fixed height */}
        <div className="h-[36rem] w-full">
          <img
            className="h-full w-full rounded-lg shadow-xl object-cover"
            src={singleBranchImage}
            alt="Branch"
          />
        </div>
      </div>
    </div>
  );
};
export default BranchDetailsHeader;
