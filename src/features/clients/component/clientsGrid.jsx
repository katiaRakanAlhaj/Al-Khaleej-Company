const ClientsGrid = ({ clinetsDataPage }) => {
  return (
    <div className="flex flex-wrap mt-[5rem] px-[3.5rem] gap-x-[2rem] items-center justify-center">
      {clinetsDataPage?.data?.clients?.map((client) => (
        <div>
          <img
            className="w-[10rem] h-[10rem] object-contain mt-[-2rem]"
            src={client}
          />
        </div>
      ))}
    </div>
  );
};
export default ClientsGrid;
