import TitleSection from "../../../ui/titleSection";
import secure from "../../../assets/images/secure.svg";
import support from "../../../assets/images/support.svg";
import money from "../../../assets/images/money.svg";
import flexible from "../../../assets/images/flexible.svg";
import company from "../../../assets/images/company.svg";
import safe from "../../../assets/images/safe.svg";

const ChooseUs = () => {
  const items = [
    {
      id: 1,
      image: secure,
      title: "100% Secure",
      description:
        "We help you discover any protection inclusions that are ideal for you.",
    },
    {
      id: 2,
      image: support,
      title: "24/7 Awesome Support",
      description:
        "We help you discover any protection inclusions that are ideal for you.",
    },
    {
      id: 3,
      image: money,
      title: "Save Money",
      description:
        "We help you discover any protection inclusions that are ideal for you.",
    },
    {
      id: 4,
      image: flexible,
      title: "Flexible Plans",
      description:
        "We help you discover any protection inclusions that are ideal for you.",
    },
    {
      id: 5,
      image: company,
      title: "Trusted Company",
      description:
        "We help you discover any protection inclusions that are ideal for you.",
    },
    {
      id: 6,
      image: safe,
      title: "Safe Investment",
      description:
        "We help you discover any protection inclusions that are ideal for you.",
    },
  ];

  return (
    <div className="py-[4rem]">
      <div className="flex flex-col justify-center items-center">
        <TitleSection title={"why choose us"} />
        <p className="text-primary font-bold text-4xl mt-[2rem]">
          Most of the People Choose Us
        </p>
      </div>
      <div className="container2 mx-auto mt-[3rem]">
        <div className="grid grid-cols-3 gap-x-[2rem] gap-y-[3rem]">
          {items.map((item) => (
            <div key={item.id} className="flex items-start gap-[1rem] group">
              <div className="w-[5rem] h-[5rem] flex-shrink-0 flex justify-center items-center rounded-full bg-primary transition-colors duration-500 group-hover:bg-[#1B2A4A] cursor-pointer">
                <img className="w-[2.5rem]" src={item.image} alt={item.title} />
              </div>
              <div>
                <h1 className="font-bold text-primary text-2xl">
                  {item.title}
                </h1>
                <p className="text-[#737373] text-[1.1rem]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
