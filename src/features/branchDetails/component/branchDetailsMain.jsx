import i18next from "i18next";
import branchLocation from "../../../assets/images/branchLocation.svg";
import LineStyle from "../../../ui/lineStyle";

const BranchDetailsMain = ({ branchDetailsData }) => {
  // Helper function to format time from HH:MM:SS to HH:MM AM/PM
  const formatTime = (time) => {
    if (!time) return "";
    const [hours, minutes] = time.split(":");
    const h = parseInt(hours);
    const ampm = h >= 12 ? "PM" : "AM";
    const h12 = h % 12 || 12;
    return `${h12}:${minutes} ${ampm}`;
  };

  // Get working hours from response data
  const workingHours = branchDetailsData?.data?.working_hours || {};

  // Define day mapping with display names (translated)
  const dayMapping = {
    sunday: i18next.t("BranchDetailsMain.Sunday"),
    monday: i18next.t("BranchDetailsMain.Monday"),
    tuesday: i18next.t("BranchDetailsMain.Tuesday"),
    wednesday: i18next.t("BranchDetailsMain.Wednesday"),
    thursday: i18next.t("BranchDetailsMain.Thursday"),
    friday: i18next.t("BranchDetailsMain.Friday"),
    saturday: i18next.t("BranchDetailsMain.Saturday"),
  };

  // Generate hours array from response data for each individual day
  const hours = Object.keys(dayMapping).map((dayKey) => {
    const dayData = workingHours[dayKey];
    const dayName = dayMapping[dayKey];

    if (!dayData || dayData.closed === true) {
      return { day: dayName, hour: i18next.t("BranchDetailsMain.Closed") };
    }

    const { open, close } = dayData;
    return {
      day: dayName,
      hour: `${formatTime(open)} ${i18next.t("BranchDetailsMain.to")} ${formatTime(close)}`,
    };
  });

  return (
    <div className="grid lg:grid-cols-12 gap-y-[2rem] grid-cols-1 gap-x-[2rem] mt-[4rem]">
      {/* first column */}
      <div className="lg:col-span-8 col-span-1">
        <div className="w-full lg:h-[43rem] h-[38rem] p-[2rem] rounded-lg border border-[#C4C6D4]">
          <div className="flex gap-x-2">
            <img className="w-[1.2rem]" src={branchLocation} alt="location" />
            <h1 className="text-[#111C2D] font-bold text-2xl">
              {i18next.t("BranchDetailsMain.Location")}
            </h1>
          </div>
          <LineStyle />
          <p className="text-[#434652] mt-[1rem] text-lg">
            {branchDetailsData?.data?.address}
          </p>
          <div className="w-full lg:h-[32rem] h-[25rem] border border-[#F9F9FF33] mt-[1rem] rounded-lg overflow-hidden shadow-lg">
            <iframe
              src={branchDetailsData?.data?.location}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Location"
            />
          </div>
        </div>
      </div>
      {/*second column */}
      <div className="lg:col-span-4 col-span-1 space-y-[2rem]">
        <div className="w-full h-auto border border-[#C4C6D4] rounded-lg p-[2rem]">
          <h1 className="text-[#111C2D] lg:text-2xl text-[1.5rem] font-bold">
            {i18next.t("BranchDetailsMain.Hours")}
          </h1>
          <LineStyle />
          {hours.map((item, index) => (
            <div key={index}>
              <div className="flex justify-between mt-[1rem]">
                <p className="text-[#434652] text-lg">{item.day}</p>
                <p
                  className={`text-lg font-[600] ${item.hour === i18next.t("BranchDetailsMain.Closed") ? "text-red-500" : "text-[#111C2D]"}`}
                >
                  {item.hour}
                </p>
              </div>
              {index < hours.length - 1 && <LineStyle />}
            </div>
          ))}
        </div>
        <div className="w-full h-auto border border-[#C4C6D4] rounded-lg p-[2rem]">
          <h1 className="text-[#111C2D] lg:text-2xl text-[1.5rem] font-bold">
            {i18next.t("BranchDetailsMain.Contact")}
          </h1>
          <LineStyle />
          <p className="text-[#00348A] font-[600] mt-[1rem] text-[1.3rem]">
            {branchDetailsData?.data?.number}
          </p>
        </div>
        {branchDetailsData?.data?.services?.length > 0 ? (
          <div className="w-full h-auto border border-[#C4C6D4] rounded-lg p-[2rem]">
            <h1 className="text-[#111C2D] lg:text-2xl text-[1.5rem] font-bold">
              {i18next.t("BranchDetailsMain.Services")}
            </h1>
            <LineStyle />
            <div className="flex flex-wrap gap-2 mt-[1rem]">
              {branchDetailsData?.data?.services?.map((service, index) => (
                <button
                  key={index}
                  className="w-fit h-[2rem] flex items-center gap-x-2 bg-[#F0F3FF] px-[1rem] rounded"
                >
                  <img
                    className="w-[1rem]"
                    src={service.icon}
                    alt={service.service}
                  />
                  <p className="text-[#505F76] text-md whitespace-nowrap">
                    {service.service}
                  </p>
                </button>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default BranchDetailsMain;
