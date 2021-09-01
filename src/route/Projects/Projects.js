import React from "react";
import {If, Then} from "react-if";

import ProjectData from "./ProjectData.json";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab, faGithub, faGooglePlay} from "@fortawesome/free-brands-svg-icons";
import CrabLogo from "../../images/Defcon_crab.svg";

import "./Projects.css";

const ProjectItem = (props) => {
    
        return(
            <div id="divContent">
                <div id="divPjct">
                    <dd><p>&gt;_{props.title} ({props.year}) - {props.user} </p></dd>
                </div> 
                
                <div id="divIcon">
                    <Url url = {props.url} store = {props.store}/>       
                </div>

                <div id="divCrab">
                    <img src={CrabLogo} />
                </div>
            </div>
        )
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
                                            store={projectItem.store}
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

const Url = (props) => {

    return(
        <div>
            <If condition={props.url !== "None"}>
                <Then>
                <dd> <a href={props.url} target="_sub"><FontAwesomeIcon icon={faGithub} color="black" size="1.5x"/> gitHub </a> </dd>
                </Then>
            </If>
            <If condition={props.store !== ""}>
                <Then>
                   <dd> <a href={props.store} target="_sub"><FontAwesomeIcon icon={faGooglePlay} color="black" size="1.5x"/> Google Paly </a> </dd>
                </Then>
            </If>
        </div>
    )
}

export default Projects;