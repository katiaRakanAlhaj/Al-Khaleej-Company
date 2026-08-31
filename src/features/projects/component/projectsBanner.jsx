import image from "../../../assets/images/projectBanner.png";

const ProjectsBanner = () => {
  return (
    <div className="relative w-full h-[33rem] overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute w-full h-full overflow-hidden">
        <img src={image} className="w-full h-full object-cover" />
        {/* Gradient Overlay - Applied on top of image */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(250, 248, 255, 0.95) 0%, rgba(250, 248, 255, 0.8) 50%, rgba(250, 248, 255, 0) 100%)",
          }}
        />
      </div>

      {/* Content Overlay - Centered */}
      <div className="absolute inset-0 flex left-[15rem] flex-col top-[7rem]">
        {/* Your content here */}
        <h1 className="font-bold leading-[3.5rem] text-5xl w-[40%] text-[#00348A]">
          Our Work & Major Contracts
        </h1>
        <p className="text-xl text-[#434652] leading-relaxed w-[60%] mt-[2rem]">
          Over the past decade, Gulf Insurance Company has successfully secured
          robust contracts with major commercial and service institutions across
          Iraq. From national infrastructure to premier commercial developments,
          our portfolio reflects unwavering reliability and clinical precision
          in risk management.
        </p>
      </div>
    </div>
  );
};

export default ProjectsBanner;
