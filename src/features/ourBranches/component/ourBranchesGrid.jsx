import branch1 from "../../../assets/images/branch1.png";
import branch2 from "../../../assets/images/branch2.jpg";
import BranchCard from "../../../ui/branchCard";
const OurBranchesGrid = () => {
  const branchesData = [
    {
      id: 1,
      title: "Al-Arsat branch",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      address: "Arasat Al-Hindia St., Al-Karrada, Baghdad, Iraq",
      image: branch1,
    },
    {
      id: 2,
      title: "Al-Arsat branch",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      address: "Arasat Al-Hindia St., Al-Karrada, Baghdad, Iraq",
      image: branch2,
    },
    {
      id: 3,
      title: "Al-Arsat branch",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      address: "Arasat Al-Hindia St., Al-Karrada, Baghdad, Iraq",
      image: branch1,
    },
    {
      id: 4,
      title: "Al-Arsat branch",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      address: "Arasat Al-Hindia St., Al-Karrada, Baghdad, Iraq",
      image: branch2,
    },
    {
      id: 5,
      title: "Al-Arsat branch",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      address: "Arasat Al-Hindia St., Al-Karrada, Baghdad, Iraq",
      image: branch2,
    },
    {
      id: 6,
      title: "Al-Arsat branch",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      address: "Arasat Al-Hindia St., Al-Karrada, Baghdad, Iraq",
      image: branch2,
    },
  ];

  return (
    <div className="container5 mx-auto">
      <div className="grid grid-cols-3 gap-[2rem] mt-[3rem]">
        {branchesData.map((branch) => (
          <BranchCard branch={branch} />
        ))}
      </div>
    </div>
  );
};
export default OurBranchesGrid;
