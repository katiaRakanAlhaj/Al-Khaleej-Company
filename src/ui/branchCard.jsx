import { FaMapMarkerAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const BranchCard = ({ branch, onClick }) => {
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  const handleCardClick = () => {
    if (onClick) {
      onClick(branch.id);
    } else {
      // Default navigation behavior if no onClick provided
      const currentLang = i18n.language;
      navigate(`/${currentLang}/branch/${branch.id}`);
    }
  };

  return (
    <div
      className="bg-white h-[26rem] rounded-[1.5rem] overflow-hidden shadow-lg cursor-pointer group border border-gray-100"
      onClick={handleCardClick}
    >
      {/* Branch Image Container with Glassy Primary Cover Overlay */}
      <div className="w-full h-[15rem] relative overflow-hidden">
        <img
          src={branch.image}
          alt={branch.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Glassmorphic & Primary Color Blended Cover on Hover */}
        <div className="absolute inset-0 bg-primary/30 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
      </div>

      {/* Branch Content */}
      <div className="px-[1.5rem]">
        <h3 className="text-primary font-bold text-xl mb-2 mt-2">
          {branch.title}
        </h3>
        <p className="text-[#777777] text-lg leading-relaxed line-clamp-2">
          {branch.description}
        </p>
        <div className="flex items-center gap-2 text-md text-[#000000] pt-3 border-t border-gray-100">
          <FaMapMarkerAlt className="text-red-500 text-[1.1rem] shrink-0" />
          <span>{branch.address}</span>
        </div>
      </div>
    </div>
  );
};

export default BranchCard;
