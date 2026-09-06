import ClientsBanner from "../features/clients/component/clientsBanner";
import ClientsGrid from "../features/clients/component/clientsGrid";
import { usefetchClientsPage } from "../features/clients/hook/useFetchClientsPage";

const Clients = ()=> {
    const {data:clinetsDataPage,isLoading:clinetsDataPageLoading,error:clinetsDataPageError} = usefetchClientsPage();
    return(
        <div>
            <ClientsBanner clinetsDataPage = {clinetsDataPage}/>
            <ClientsGrid clinetsDataPage = {clinetsDataPage}/>
        </div>
    )
}
export default Clients;