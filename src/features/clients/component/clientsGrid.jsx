import step1 from "../../../assets/images/step1.png";
import step2 from "../../../assets/images/step2.png";
import step3 from "../../../assets/images/step3.png";
import step4 from "../../../assets/images/step4.png";
import step5 from "../../../assets/images/step5.png";
const ClientsGrid = () => {
  const array = [
    step1,
    step2,
    step3,
    step4,
    step5,
    step1,
    step2,
    step3,
    step4,
    step5,
    step1,
    step2,
    step3,
    step4,
    step5,
    step1,
    step2,
    step3,
    step4,
    step5,
    step1,
    step2,
  ];
  return (
    <div className="flex flex-wrap mt-[5rem] px-[3.5rem] gap-x-[2rem] items-center justify-center">
      {array?.map((array) => (
        <div>
          <img
            className="w-[10rem] h-[10rem] object-contain mt-[-2rem]"
            src={array}
          />
        </div>
      ))}
    </div>
  );
};
export default ClientsGrid;
