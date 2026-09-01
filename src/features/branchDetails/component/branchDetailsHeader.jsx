import singleBranchImage from "../../../assets/images/singleBranchImage.png";

const BranchDetailsHeader = () => {
  return (
    <div className="grid lg:grid-cols-12 grid-cols-1 gap-y-[2rem] gap-x-[2rem] lg:mt-[6rem] mt-[3rem]">
      {/*first column */}
      <div className="lg:col-span-5 col-span-1 flex flex-col justify-center">
        <h1 className="font-bold text-[#111C2D] lg:text-5xl text-[2rem]">Al-Arsat branch</h1>
        <p className="text-[#434652] lg:text-xl text-lg leading-relaxed w-[90%] lg:mt-[2rem] mt-[1rem]">
          Our flagship location in the heart of the city, providing
          comprehensive coverage options and dedicated support for all your
          insurance needs.
        </p>
      </div>
      {/*second column */}
      <div className="lg:col-span-7 col-span-1">
        {/* Add wrapper div with fixed height */}
        <div className="lg:h-[36rem] h-[23rem] w-full">
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
