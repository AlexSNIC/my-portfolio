import React from "react";
import { useParams } from "react-router-dom";

import TwiChess from "./list/TwiChess"
import PathFinder from "./list/PathFinder"

function ProjectRouter(){
    const { projectId } = useParams();
    
    let Page;
    switch(projectId){
      case "twichess": Page = TwiChess; break;
      case "pathfinder": Page = PathFinder; break;
      
    }
    
    return <Page />
}

export default ProjectRouter;