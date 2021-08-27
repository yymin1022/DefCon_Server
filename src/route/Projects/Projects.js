import React from "react";

import ProjectData from "./ProjectData.json";

import "./Projects.css";

const Projects = () => {
    return(
        <>
            <dl>
                {
                    ProjectData.map(item => {
                        <>
                            <dt><h2>&gt;_{item.type}</h2></dt>

                            {item.projects.map(projectItem => {
                                <dd><p>&gt;_{projectItem.title} ({projectItem.year}) - {projectItem.user}</p></dd>
                            })}

                            <dd><p>&gt;_More...</p></dd>
                            <br/><br/>
                        </>
                    })
                }
            </dl>
        </>
    )
}

export default Projects;