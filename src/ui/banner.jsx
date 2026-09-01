const Banner = ({ image, title, description, altText = "Banner image" }) => {
  return (
    <div className="relative w-full lg:h-[33rem] h-[20rem] overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute w-full h-full overflow-hidden">
        <img
          src={image}
          alt={altText}
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-[#22293b99]" />
      </div>

      {/* Content Overlay - Centered */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-white lg:text-5xl text-4xl font-bold mb-4">{title}</h1>
        <p className="text-white lg:text-2xl text-xl max-w-3xl">{description}</p>
      </div>
    </div>
  );
};

export default Banner;