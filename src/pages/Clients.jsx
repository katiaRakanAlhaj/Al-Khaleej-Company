import { HelmetProvider } from "react-helmet-async";
import ClientsBanner from "../features/clients/component/clientsBanner";
import ClientsGrid from "../features/clients/component/clientsGrid";
import { usefetchClientsPage } from "../features/clients/hook/useFetchClientsPage";
import MetaHelmet from "../component/meta/metaHelemt";
import ScrollToTop from "../component/scrollToTop/scrollToTop";
import Loader from "../component/loader/loader";

const Clients = () => {
  const {
    data: clinetsDataPage,
    isLoading: clinetsDataPageLoading,
    error: clinetsDataPageError,
  } = usefetchClientsPage();
  if (clinetsDataPageLoading) {
    return <Loader />;
  }
  return (
    <div>
      <ScrollToTop />
      <HelmetProvider>
        <MetaHelmet
          title={clinetsDataPage?.data?.meta_title}
          description={clinetsDataPage?.data?.meta_description}
        />
        <ClientsBanner clinetsDataPage={clinetsDataPage} />
        <ClientsGrid clinetsDataPage={clinetsDataPage} />
      </HelmetProvider>
    </div>
  );
};
export default Clients;
