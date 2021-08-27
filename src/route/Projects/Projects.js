import React from "react";

import ProjectData from "./ProjectData.json";

import "./Projects.css";

const ProjectItem = (props) => {
    if(props.url !== "None"){
        return(
            <dd><p>&gt;_{props.title} ({props.year}) - {props.user} / <a href={props.url}>Github</a></p></dd>
        )
    }else{
        return(
            <dd><p>&gt;_{props.title} ({props.year}) - {props.user}</p></dd>
        )
    }
    
}

const Projects = () => {
    return(
        <>
            <dl>
                {
                    ProjectData.map(item => {
                        return(
                            <>
                                <dt><h2>&gt;_{item.type}</h2></dt>

                                {item.projects.map(projectItem => {
                                    return(
                                        <ProjectItem 
                                            title={projectItem.title}
                                            url={projectItem.url}
                                            user={projectItem.user}
                                            year={projectItem.year}
                                        />
                                    );
                                })}

                                <dd><p>&gt;_More...</p></dd>
                                <br/><br/>
                            </>
                        );
                    })
                }
            </dl>
        </>
    )
}

export default Projects;