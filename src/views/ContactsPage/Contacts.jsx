import React from "react";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs.jsx";
import Title from "../../components/Title/Title.jsx";
import ContactText from "../../components/ContactsText/ContactText.jsx";
import ContactsForm from "../../components/ContactsForm/ContactsForm.jsx";

const Contacts = (props) => {
  return (
    <div className="block">
      <BreadCrumbs />
      <Title title="Мы рядом" />
      <ContactText />
      <ContactsForm PostFormSending={props.PostFormSending} />
    </div>
  );
};

export default Contacts;
