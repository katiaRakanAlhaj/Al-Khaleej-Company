import i18next from "i18next";
import { useNavigate, useParams } from "react-router-dom";
const LastNews = ({ LatestNewsData }) => {
  const { lang } = useParams();

  const navigate = useNavigate();
  const handleCardClick = (id) => {
    navigate(`/${lang}/News/${id}`);
  };

  return (
    <div className="w-full h-auto border border-[#C4C6D4] rounded-md p-[2rem]">
      <h1 className="text-[#131B2E] font-bold text-xl">
        {i18next.t("last_news")}
      </h1>
      <div className="w-full h-[0.1rem] bg-[#C4C6D4] mt-2"></div>
      <div className="flex flex-col space-y-[1rem] mt-[1rem]">
        {LatestNewsData?.data?.map((item, index) => (
          <div
            onClick={() => handleCardClick(item.id)}
            key={index}
            className="flex gap-x-2"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-[6rem] h-[5rem] object-cover shrink-0"
            />
            <div>
              <h1 className="text-[#131B2E] text-md font-bold line-clamp-2">
                {item.title}
              </h1>
              <p className="text-md text-[#505F76] mt-3">{item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LastNews;
