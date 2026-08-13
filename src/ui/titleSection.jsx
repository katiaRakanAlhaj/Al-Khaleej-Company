const TitleSection = ({title})=> {
    return(
         <div className="flex items-center gap-x-6">
          <div className="relative w-[1.2rem] h-[1.2rem]">
            <div className="absolute inset-0 rounded-full bg-[#072463]"></div>
            <div className="absolute left-[0.9rem] w-[1.2rem] h-[1.2rem] rounded-full bg-[#062F87]"></div>
          </div>
          <div>
            <h1 className="text-[#252525] font-[400] text-lg">{title}</h1>
          </div>
        </div>
    )
}
export default TitleSection