import LastNews from "../features/singleNews/component/lastNews";
import SingleNewsBanner from "../features/singleNews/component/singleNewsBanner";
import SingleNewsDescription from "../features/singleNews/component/singleNewsDescription";

const SingleNews = () => {
  return (
    <div className="container4 mx-auto">
      <SingleNewsBanner />
      <div className="grid grid-cols-12 gap-x-[2rem] mt-[3rem]">
        <div className="col-span-8">
          <SingleNewsDescription />
        </div>
        <div className="col-span-4">
          <LastNews />
        </div>
      </div>
    </div>
  );
};
export default SingleNews;
