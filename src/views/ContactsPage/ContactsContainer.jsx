import { connect } from "react-redux";
import Contacts from "./Contacts.jsx";
import { PostFormSending } from "../../store/slice/FormSlice.js";
let mapStateToProps = (state) => {
  return {};
};

const ContactsContainer = connect(mapStateToProps, { PostFormSending })(
  Contacts
);
export default ContactsContainer;
