import React from "react";
import ContactList from "./ContactsList";
import Questions from "./Questions";

function Contacts() {
  return (
    <section className="contacts">
      <div className="contacts__container">
        <h1 className="contacts__title">Contact Me</h1>
        <ContactList></ContactList>
      </div>
      <div>
        <h2 className="questions__title title--full">Have a question?</h2>
        <Questions></Questions>
      </div>
    </section>
  );
}

export default Contacts;
