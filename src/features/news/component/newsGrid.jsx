import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import readMoreArrow from "../../../assets/images/readMoreArrow.svg";
import i18next from "i18next";
import Pagination from "../../../ui/pagination";
import DOMPurify from "dompurify";

const NewsGrid = ({ newsData }) => {
  const navigate = useNavigate();
  const { lang } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  // Get page from URL (?page=2), default to 1
  const currentPage = Number(searchParams.get("page")) || 1;
  const lastPage = newsData?.meta?.last_page || 1;

  const handleCardClick = (id) => {
    navigate(`/${lang}/News/${id}`);
  };

  const handlePageChange = (page) => {
    if (page < 1 || page > lastPage) return;
    setSearchParams({ page: String(page) });
    // Scroll to top on page change
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="container3 mx-auto lg:mt-[4rem] mt-[6rem]">
      <div className="grid grid-cols-1 gap-10">
        {newsData?.data?.map((news) => (
          <div
            key={news.id}
            className="w-full lg:h-[20rem] border border-[#DAE2FD] rounded-md overflow-hidden cursor-pointer"
            onClick={() => handleCardClick(news.id)}
          >
            <div className="grid lg:grid-cols-2 gap-x-[2rem] h-full">
              <img
                className="w-full h-full object-cover"
                src={news.image}
                alt={news.title}
              />
              <div
                className={`flex flex-col space-y-4 py-[1.5rem] ${
                  i18next.language === "en"
                    ? "lg:pr-[2rem] lg:pl-0 pl-[1rem]"
                    : "lg:pl-[2rem] lg:pr-0 pr-[1rem]"
                }`}
              >
                <p className="text-[#505F76] text-lg">{news.date}</p>
                <h1 className="text-[#131B2E] w-[90%] font-bold lg:text-2xl  text-[1.2rem] line-clamp-2">
                  {news.title}
                </h1>
                <p
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(news.description),
                  }}
                  className="text-[#434652] text-lg line-clamp-3"
                />

                <div className="flex gap-x-2 cursor-pointer items-center">
                  <p className="text-primary text-md font-[400]">
                    {i18next.t("read_more")}
                  </p>
                  <img
                    className={`w-[1rem] ${
                      i18next.language === "ar" ? "rotate-180" : ""
                    }`}
                    src={readMoreArrow}
                    alt="arrow"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        lastPage={lastPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default NewsGrid;
