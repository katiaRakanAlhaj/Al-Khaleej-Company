import { HelmetProvider } from "react-helmet-async";
import ContactGrid from "../features/contact/component/contactGrid";
import ContactHeader from "../features/contact/component/contactHeader";
import { usefetchContactPage } from "../features/contact/hook/useFetchContact";
import MetaHelmet from "../component/meta/metaHelemt";
import ScrollToTop from "../component/scrollToTop/scrollToTop";
import Loader from "../component/loader/loader";
const Contact = () => {
  const {
    data: contactData,
    isLoading: contactDataLoading,
    error: contactDataError,
  } = usefetchContactPage();
  if (contactDataLoading) {
    return <Loader />;
  }
  return (
    <div className="container1 mx-auto">
      <ScrollToTop />
      <HelmetProvider>
        <MetaHelmet
          title={contactData?.data?.meta_title}
          description={contactData?.data?.meta_description}
        />
        <ContactHeader contactData={contactData} />
        <ContactGrid contactData={contactData} />
      </HelmetProvider>
    </div>
  );
};
export default Contact;
