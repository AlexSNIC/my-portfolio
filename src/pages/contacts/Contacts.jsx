import React from "react";
import ContactList from "./ContactsList";
import Questions from "./Questions";

function Contacts() {
  return (
    <>
      <section className="contacts">
        <div className="contacts__container">
          <h1 className="contacts__title">Contacts</h1>
          <ContactList></ContactList>
        </div>
      </section>
      <Questions></Questions>
    </>
  );
}

export default Contacts;
