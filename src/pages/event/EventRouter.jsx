import React from "react";
import { useParams } from "react-router-dom";

import MediaCamp2024 from "./list/MediaCamp2024"

function EventRouter(){
    const { eventId } = useParams();
    
    let Page;
    switch(eventId){
        case "mdc24": Page = MediaCamp2024; break;

    }
    
    return <Page />
}

export default EventRouter;