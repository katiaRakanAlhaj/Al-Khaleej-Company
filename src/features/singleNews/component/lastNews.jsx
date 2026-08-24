import last1 from "../../../assets/images/last1.jpg";
import last2 from "../../../assets/images/last2.jpg";

const LastNews = () => {
  const items = [
    {
      image: last1,
      title: "The Importance of Comprehensive Health…",
      date: "April 22, 2023",
    },
    {
      image: last2,
      title: "The Importance of Comprehensive Health…",
      date: "April 22, 2023",
    },
    {
      image: last1,
      title: "The Importance of Comprehensive Health…",
      date: "April 22, 2023",
    },
    {
      image: last2,
      title: "The Importance of Comprehensive Health…",
      date: "April 22, 2023",
    },
    {
      image: last1,
      title: "The Importance of Comprehensive Health…",
      date: "April 22, 2023",
    },
  ];

  return (
    <div className="w-full h-auto border border-[#C4C6D4] rounded-md p-[2rem]">
      <h1 className="text-[#131B2E] font-bold text-xl">Latest News</h1>
      <div className="w-full h-[0.1rem] bg-[#C4C6D4] mt-2"></div>
      <div className="flex flex-col space-y-[1rem] mt-[1rem]">
        {items.map((item, index) => (
          <div key={index} className="flex gap-x-2">
            <img
              src={item.image}
              alt={item.title}
              className="w-[6rem] h-[5rem] object-cover"
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
