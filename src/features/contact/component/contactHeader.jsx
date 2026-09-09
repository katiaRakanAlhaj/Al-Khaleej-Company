import location from "../../../assets/images/locationContact.svg";
import callContact from "../../../assets/images/callContact.svg";
import emailContact from "../../../assets/images/emailContact.svg";
import hour from "../../../assets/images/hour.svg";
import i18next from "i18next";

const ContactHeader = ({ contactData }) => {
  // Helper function to format time from HH:MM:SS to HH:MM AM/PM
  const formatTime = (time) => {
    if (!time) return "";
    const [hours, minutes] = time.split(":");
    const h = parseInt(hours);
    const ampm = h >= 12 ? "PM" : "AM";
    const h12 = h % 12 || 12;
    return `${h12}:${minutes} ${ampm}`;
  };

  // Get all working hours as an array for display
  const getWorkingHoursArray = (workingHours) => {
    if (!workingHours) return [];

    const dayOrder = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const dayNames = {
      sunday: i18next.t("ContactHeader.Sunday"),
      monday: i18next.t("ContactHeader.Monday"),
      tuesday: i18next.t("ContactHeader.Tuesday"),
      wednesday: i18next.t("ContactHeader.Wednesday"),
      thursday: i18next.t("ContactHeader.Thursday"),
      friday: i18next.t("ContactHeader.Friday"),
      saturday: i18next.t("ContactHeader.Saturday") 
    };

    const hoursArray = [];

    dayOrder.forEach(dayKey => {
      const dayData = workingHours[dayKey];
      const dayName = dayNames[dayKey] || dayKey.charAt(0).toUpperCase() + dayKey.slice(1);

      if (!dayData || dayData.closed === true) {
        hoursArray.push({
          day: dayName,
          hours: i18next.t("ContactHeader.Closed") || "Closed",
          isClosed: true
        });
      } else {
        const { open, close } = dayData;
        hoursArray.push({
          day: dayName,
          hours: `${formatTime(open)} ${i18next.t("ContactHeader.to") || "to"} ${formatTime(close)}`,
          isClosed: false
        });
      }
    });

    return hoursArray;
  };

  const workingHoursList = getWorkingHoursArray(contactData?.data?.working_hours);

  const contactHeaderItems = [
    {
      image: location,
      title: i18next.t("ContactHeader.Headquarters") || "Headquarters",
      desc1: contactData?.data?.address || "N/A"
    },
    {
      image: callContact,
      title: i18next.t("ContactHeader.CustomerSupport") || "Customer Support",
      desc1: contactData?.data?.phone1 || "N/A",
      desc2: contactData?.data?.phone2 || "",
    },
    {
      image: emailContact,
      title: i18next.t("ContactHeader.GeneralInquiries") || "General Inquiries",
      desc1: contactData?.data?.email1 || "N/A",
      desc2: contactData?.data?.email2 || ""
    },
    {
      image: hour,
      title: i18next.t("ContactHeader.BusinessHours") || "Business Hours",
      // Instead of desc1, we'll render custom JSX
      isHours: true,
      hoursList: workingHoursList,
    },
  ];

  const descClasses = "text-[#43474F] text-md";

  return (
    <div className="lg:mt-[4rem] mt-[6rem]">
      <h1 className="lg:text-5xl text-3xl font-bold text-[#001E40]">
        {i18next.t("navbar.navLinks.contactUs")}
      </h1>
      <p className="text-[#43474F] lg:w-[60%] leading-relaxed lg:text-xl text-lg lg:mt-[2rem]">
        {contactData?.data?.description || "Get in touch with us"}
      </p>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[2rem] mt-[2rem]">
        {contactHeaderItems.map((item, index) => (
          <div
            key={index}
            style={{ boxShadow: "0px 0px 8px 0px #00000040" }}
            className="w-full h-[11rem] gap-x-2 flex px-[2rem] py-[2rem] rounded-md border border-[#C3C6D1] hover:shadow-lg transition-shadow duration-300 overflow-y-auto custom-scrollbar"
          >
            <div className="w-[2.5rem] h-[2.5rem] rounded-full bg-[#F0F3FF] flex justify-center items-center flex-shrink-0">
              <img className="w-[1rem]" src={item.image} alt={item.title} />
            </div>
            <div className="flex flex-col flex-1 min-w-0">
              <h1 className="text-[#001E40]  text-lg font-bold">
                {item.title}
              </h1>
              
              {/* Render hours list differently */}
              {item.isHours ? (
                <div className={`${descClasses} mt-[1rem] space-y-1`}>
                  {item.hoursList.map((hourItem, idx) => (
                    <div key={idx} className="flex justify-between text-md">
                      <span className="font-medium">{hourItem.day}:</span>
                      <span className={hourItem.isClosed ? "text-red-500" : "text-[#43474F]"}>
                        {hourItem.hours}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <>
                  <p className={`${descClasses} mt-[1rem] break-words`}>{item.desc1}</p>
                  {item.desc2 && <p className={`${descClasses} break-words`}>{item.desc2}</p>}
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactHeader;