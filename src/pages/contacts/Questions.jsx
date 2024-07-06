import React from "react";
import QuestionsForm from "./QuestionsForm";

function Questions() {
  return (
    <section className="questions after-title-section">
      <h2 className="questions__title title--full">Have a question?</h2>
      <QuestionsForm></QuestionsForm>
      <div className="answers">
        
      </div>
    </section>
  );
}

export default Questions;
