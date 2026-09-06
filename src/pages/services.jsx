import ServicesBanner from "../features/services/component/servicesBanner"
import ServicesGrid from "../features/services/component/servicesGrid"
import { usefetchServicesPage } from "../features/services/hook/useFetchServices"

const Services = ()=> {
    const {data:servicesData , isLoading:servicesDataLoading,error:servicesDataError} = usefetchServicesPage();
    return(
        <div>
            <ServicesBanner servicesData = {servicesData}/>
            <ServicesGrid servicesData = {servicesData}/>
        </div>
    )
}
export default Services;