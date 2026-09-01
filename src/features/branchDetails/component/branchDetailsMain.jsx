import branchLocation from "../../../assets/images/branchLocation.svg";
import branchService1 from "../../../assets/images/branchService1.svg";
import branchService2 from "../../../assets/images/branchService2.svg";
import branchService3 from "../../../assets/images/branchService3.svg";
import branchService4 from "../../../assets/images/branchService4.svg";
import branchService5 from "../../../assets/images/branchService5.svg";
import LineStyle from "../../../ui/lineStyle";
const BranchDetailsMain = () => {
  const hours = [
    { day: "Sun - Thu", hour: "08:00 - 18:00" },
    { day: "Fri - Sat", hour: "Closed" },
  ];
  const services = [
    { image: branchService1, name: "Claims Support" },
    { image: branchService2, name: "Policy Consultation" },
    { image: branchService3, name: "Auto Insurance" },
    { image: branchService4, name: "Health Insurance" },
    { image: branchService5, name: "Life Insurance" },
  ];
  return (
    <div className="grid lg:grid-cols-12 gap-y-[2rem] grid-cols-1 gap-x-[2rem] mt-[4rem]">
      {/* first column */}
      <div className="lg:col-span-8 col-span-1">
        <div className="w-full lg:h-[43rem] h-[38rem] p-[2rem] rounded-lg border border-[#C4C6D4]">
          <div className="flex gap-x-2">
            <img className="w-[1.2rem]" src={branchLocation} />
            <h1 className="text-[#111C2D] font-bold text-2xl">Location</h1>
          </div>
          <LineStyle />
          <p className="text-[#434652] mt-[1rem] text-lg">
            100 Tech Square, Innovation District, Sector 4
          </p>
          <div className="w-full lg:h-[32rem] h-[25rem] border border-[#F9F9FF33] mt-[1rem] rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509419!2d144.9537353153167!3d-37.81627997975159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df1f2f8e3%3A0x5045675218ce6e0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1647044532148!5m2!1sen!2sus"
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
            Hours
          </h1>
          <LineStyle />
          {hours.map((item, index) => (
            <div key={index}>
              <div className="flex justify-between mt-[1rem]">
                <p className="text-[#434652] text-lg">{item.day}</p>
                <p className="text-[#111C2D] text-lg font-[600]">{item.hour}</p>
              </div>
              {index < hours.length - 1 && <LineStyle />}
            </div>
          ))}
        </div>
        <div className="w-full h-auto border border-[#C4C6D4] rounded-lg p-[2rem]">
          <h1 className="text-[#111C2D] lg:text-2xl text-[1.5rem] font-bold">
            Contact
          </h1>
          <LineStyle />
          <p className="text-[#00348A] font-[600] mt-[1rem] text-[1.3rem]">
            +1 (555) 012-3456
          </p>
        </div>
        <div className="w-full h-auto border border-[#C4C6D4] rounded-lg p-[2rem]">
          <h1 className="text-[#111C2D] lg:text-2xl text-[1.5rem] font-bold">
            Services
          </h1>
          <LineStyle />
          <div className="flex flex-wrap gap-2 mt-[1rem]">
            {services.map((service, index) => (
              <button
                key={index}
                className="w-fit h-[2rem] flex items-center gap-x-2 bg-[#F0F3FF] px-[1rem] rounded"
              >
                <img
                  className="w-[1rem]"
                  src={service.image}
                  alt={service.name}
                />
                <p className="text-[#505F76] text-md whitespace-nowrap">
                  {service.name}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default BranchDetailsMain;
