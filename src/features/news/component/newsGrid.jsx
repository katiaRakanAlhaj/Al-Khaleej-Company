import { useNavigate, useParams } from "react-router-dom";
import service1 from "../../../assets/images/servicegrid1.jpg";
import service2 from "../../../assets/images/servicegrid2.jpg";
import service3 from "../../../assets/images/servicegrid3.jpg";
import readMoreArrow from "../../../assets/images/readMoreArrow.svg";

const NewsGrid = () => {
  const navigate = useNavigate();
  const { lang } = useParams(); // Get the current language from URL

  // Array of news data
  const newsData = [
    {
      id: 1,
      date: "July 2, 2019",
      title:
        "The Reality of Insurance in Iraq and the Draft Law for Compulsory Insurance",
      description:
        "The Iraqi insurance sector suffers from many problems, some of which are inherited historically and others that have emerged in the past three decades. Some colleagues have written articles...",
      image: service1,
    },
    {
      id: 2,
      date: "July 2, 2019",
      title: "The Most Important Benefits of Getting Travel...",
      description:
        "The Iraqi insurance sector suffers from many problems, some of which are inherited historically and others that have emerged in the past three decades. Some colleagues have written articles...",
      image: service2,
    },
    {
      id: 3,
      date: "July 2, 2019",
      title: "Why You Might Need a Property Insurance Policy?",
      description:
        "The Iraqi insurance sector suffers from many problems, some of which are inherited historically and others that have emerged in the past three decades. Some colleagues have written articles...",
      image: service3,
    },
    {
      id: 4,
      date: "July 2, 2019",
      title: "6 Reasons That Will Change Your Perspective on...",
      description:
        "The Iraqi insurance sector suffers from many problems, some of which are inherited historically and others that have emerged in the past three decades. Some colleagues have written articles...",
      image: service1,
    },
  ];

  const handleCardClick = (id) => {
    // Navigate with the language parameter
    navigate(`/${lang}/News/${id}`);
  };

  return (
    <div className="container3 mx-auto mt-[4rem]">
      {/* Grid container for multiple cards */}
      <div className="grid grid-cols-1 gap-10">
        {newsData.map((news) => (
          <div
            key={news.id}
            className="w-full h-[20rem] border border-[#DAE2FD] rounded-md overflow-hidden cursor-pointer"
            onClick={() => handleCardClick(news.id)}
          >
            <div className="grid grid-cols-2 gap-x-[2rem] h-full">
              <img
                className="w-full h-full object-cover"
                src={news.image}
                alt={news.title}
              />
              <div className="flex flex-col space-y-4 py-[1.5rem] pr-[2rem]">
                <p className="text-[#505F76] text-lg">{news.date}</p>
                <h1 className="text-[#131B2E] w-[90%] font-bold text-2xl line-clamp-2">
                  {news.title}
                </h1>
                <p className="text-[#434652] text-lg line-clamp-3">
                  {news.description}
                </p>
                <div className="flex gap-x-2 cursor-pointer items-center">
                  <p className="text-primary text-md font-[400]">Read More</p>
                  <img className="w-[1rem]" src={readMoreArrow} alt="arrow" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsGrid;
