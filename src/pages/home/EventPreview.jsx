import React from "react"
import { Link } from "react-router-dom";

function EventPreview({ title, date, description, id }) {
    const formattedDate = date.toLocaleString("en-us", {
        day: "2-digit",
        month: "long",
        year: "numeric",
    });
    return (
        <li className="event-preview">
            <Link to={"/events/" + id} className="no-button event-preview__button">
                <i className="bi bi-box-arrow-in-right"></i>
            </Link>
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