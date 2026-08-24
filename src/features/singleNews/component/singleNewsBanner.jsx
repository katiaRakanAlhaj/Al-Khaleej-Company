import rightIcon from "../../../assets/images/rightIcon.svg";
import user from "../../../assets/images/user.svg";
import date from "../../../assets/images/date.svg";
import singleNewsBanner from "../../../assets/images/singleNewsBanner.jpg";
const SingleNewsBanner = () => {
  return (
    <div className="mt-[3rem]">
      <div className="flex gap-x-2">
        <p className="text-[#505F76] text-md">Home</p>
        <img src={rightIcon} />
        <p className="text-[#505F76] text-md">News</p>
        <img src={rightIcon} />
        <p className="text-[#131B2E] text-md">
          The Reality of Insurance in Iraq
        </p>
      </div>
      <h1 className="font-bold text-[3rem] w-[90%] leading-[4rem] text-[#00348A] mt-[2rem]">
        The Reality of Insurance in Iraq and the Draft Law for Compulsory
        Insurance
      </h1>
      <div className="flex mt-[2rem] gap-x-[2rem] items-center">
        <div className="flex gap-x-2 items-center">
          <img className="w-[1rem]" src={user} />
          <p className="text-[#505F76] text-md">
            Alaa Saeed Abdul Hamid (Authorized Manager)
          </p>
        </div>
        <div className="flex gap-x-2 items-center">
          <img className="w-[1rem]" src={date} />
          <p className="text-[#505F76] text-md">July 2, 2019</p>
        </div>
      </div>
      <img className = "w-full h-[32rem] mt-[2rem] rounded-md object-cover" src= {singleNewsBanner}/>
    </div>
  );
};
export default SingleNewsBanner;
