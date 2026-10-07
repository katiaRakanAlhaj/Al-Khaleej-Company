const BranchDetailsHeader = ({ branchDetailsData }) => {
  const branch = branchDetailsData?.data;

  return (
    <div className="grid lg:grid-cols-12 grid-cols-1 gap-y-[2rem] gap-x-[2rem] lg:mt-[6rem] mt-[5rem]">
      {/* First column */}
      <div className="lg:col-span-5 col-span-1 flex flex-col justify-center">
        <h1 className="font-bold text-[#111C2D] lg:text-5xl text-[2rem]">
          {branch?.name}
        </h1>
        <p className="text-[#434652] lg:text-xl whitespace-break-spaces text-lg leading-relaxed w-[90%] lg:mt-[2rem] mt-[1rem]">
          {branch?.description}
        </p>

        {/* Info Row: Address / Phone / Email */}
        <div className="space-y-[0.75rem] lg:mt-[2rem] mt-[1.5rem]">
          {/* Address */}
          {branch?.address && (
            <div className="flex items-start gap-[0.75rem]">
              <div className="w-[2.25rem] h-[2.25rem] rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[1rem] h-[1rem] text-primary"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
                </svg>
              </div>
              <span className="text-[#434652] text-lg pt-[0.375rem]">
                {branch.address}
              </span>
            </div>
          )}

          {/* Phone */}
          {branch?.number && branch.number !== "00000000000" && (
            <div className="flex items-center gap-[0.75rem]">
              <div className="w-[2.25rem] h-[2.25rem] rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[1rem] h-[1rem] text-primary"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.36 11.36 0 003.57.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.01l-2.2 2.21z" />
                </svg>
              </div>
              <a
                href={`tel:${branch.number}`}
                className="text-[#434652] text-lg pt-[0.375rem] hover:text-primary transition-colors"
                dir="ltr"
              >
                {branch.number}
              </a>
            </div>
          )}

          {/* Email */}
          {branch?.email && (
            <div className="flex items-center gap-[0.75rem]">
              <div className="w-[2.25rem] h-[2.25rem] rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[1rem] h-[1rem] text-primary"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </div>
              <a
                href={`mailto:${branch.email}`}
                className="text-[#434652] text-lg pt-[0.375rem] hover:text-primary transition-colors break-all"
                dir="ltr"
              >
                {branch.email}
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Second column */}
      <div className="lg:col-span-7 col-span-1">
        <div className="lg:h-[36rem] h-[23rem] w-full">
          <img
            className="h-full w-full rounded-lg shadow-xl object-cover"
            src={branch?.image}
            alt="Branch"
          />
        </div>
      </div>
    </div>
  );
};

export default BranchDetailsHeader;
