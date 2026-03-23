import React from "react";
import { useParams } from "react-router-dom";

import data from "./projects_data.js";

function ProjectRouter(){
    const { projectId } = useParams();
    let Page = data[projectId]?.page;
    return <Page />
}

export default ProjectRouter;