import React from "react"

function EventPreview({ title, date, description }) {
    const formattedDate = date.toLocaleString("en-us", {
        day: "2-digit",
        month: "long",
        year: "numeric",
    });
    return (
        <li className="event-preview">
            <button className="no-button event-preview__button">
                <i className="bi bi-box-arrow-in-right"></i>
            </button>
            <div className="event-preview__data">
                <h3 className="event-preview__title">
                    {title}
                    <span className="event-preview__date"> - {formattedDate}</span>
                </h3>
                <p className="event-preview__description">{description}</p>
            </div>
        </li>
    )
}

export default EventPreview;