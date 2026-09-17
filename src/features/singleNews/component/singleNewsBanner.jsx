import rightIcon from "../../../assets/images/rightIcon.svg";
import user from "../../../assets/images/user.svg";
import date from "../../../assets/images/date.svg";
import i18next from "i18next";
const SingleNewsBanner = ({newsPageByIdData}) => {
  return (
    <div className="lg:mt-[3rem] mt-[7rem]">
      <div className="flex items-center gap-x-2 flex-wrap">
        <p className="text-[#505F76] text-md">Home</p>
        <img className = {`${i18next.language == "ar"?'rotate-180':''}`} src={rightIcon} />
        <p className="text-[#505F76] text-md">News</p>
        <img className = {`${i18next.language == "ar"?'rotate-180':''}`} src={rightIcon} />
        <p className="text-[#131B2E] text-md">
          {newsPageByIdData?.data?.title}
        </p>
      </div>
      <h1 className="font-bold lg:text-[3rem] text-[1.5rem] lg:w-[90%] lg:leading-[4rem] text-[#00348A] mt-[2rem]">
        {newsPageByIdData?.data?.title}
      </h1>
      <div className="lg:flex mt-[2rem] gap-x-[2rem] items-center lg:space-y-0 space-y-[1rem]">
        <div className="flex gap-x-2 items-center">
          <img className="w-[1rem]" src={user} />
          <p className="text-[#505F76] text-md">
           {newsPageByIdData?.data?.author}
          </p>
        </div>
        <div className="flex gap-x-2 items-center">
          <img className="w-[1rem]" src={date} />
          <p className="text-[#505F76] text-md">{newsPageByIdData?.data?.date}</p>
        </div>
      </div>
      <img className = "w-full lg:h-[32rem] h-[22rem] mt-[2rem] rounded-md object-cover" src= {newsPageByIdData?.data?.image}/>
    </div>
  );
};
export default SingleNewsBanner;
