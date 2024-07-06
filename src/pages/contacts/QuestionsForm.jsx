import React from 'react'

function QuestionsForm() {
  return (
    <div className="u-full-width">
      <form className="form u-fit u-center-x-block">
        <div>
          <label className="form__label" htmlFor="questions-name">
            Name:
          </label>
          <input
            className="form__field"
            type="text"
            name="name"
            id="questions-name"
            required
          />
        </div>
        <div>
          <label className="form__label" htmlFor="questions-message">
            Message:
          </label>
          <textarea
            className="form__textarea"
            name="message"
            id="questions-message"
            required
          ></textarea>
        </div>
        <button className='form__button button'>Send</button>
      </form>
    </div>
  );
}

export default QuestionsForm