import ContactGrid from "../features/contact/component/contactGrid";
import ContactHeader from "../features/contact/component/contactHeader";
const Contact = ()=> {
    return(
        <div className = "container1 mx-auto">
            <ContactHeader/>
            <ContactGrid/>
        </div>
    )
}
export default Contact;