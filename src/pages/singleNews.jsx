import LastNews from "../features/singleNews/component/lastNews";
import SingleNewsBanner from "../features/singleNews/component/singleNewsBanner";
import SingleNewsDescription from "../features/singleNews/component/singleNewsDescription";

const SingleNews = () => {
  return (
    <div className="container4 mx-auto">
      <SingleNewsBanner />
      <div className="grid lg:grid-cols-12 grid-cols-1 gap-[2rem] mt-[3rem]">
        <div className="lg:col-span-8 col-span-1">
          <SingleNewsDescription /> 
        </div>
        <div className="lg:col-span-4 col-span-1">
          <LastNews />
        </div>
      </div>
    </div>
  );
};
export default SingleNews;
