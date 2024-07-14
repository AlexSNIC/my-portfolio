import React from "react"
import EventPreview from "./EventPreview";
const EVENT_PREVIEW_DATA = [
  {
    title: "Media Camp 2024",
    description: "I have learned video editing and social media marketing.",
    date: new Date(2024, 17, 10),
    id: "mdc24"
  }
];
function Events(){
    return (
      <div className="event-list">
        <h2 className="title--full">Events</h2>
        <ul>
          {EVENT_PREVIEW_DATA.map(({id, ...data}) => <EventPreview key={id} id={id} {...data} />)}
        </ul>
      </div>
    )
}

export default Events;