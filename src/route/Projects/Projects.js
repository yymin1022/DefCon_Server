import React from "react";
import {If, Then} from "react-if";

import ProjectData from "./ProjectData.json";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab, faGithub, faGooglePlay} from "@fortawesome/free-brands-svg-icons";

import CrabLogo from "../../images/Defcon_crab.svg";

import "./Projects.css";

const ProjectItem = (props) => {
    
        return(
            <dd><p>&gt;_{props.title} ({props.year}) - {props.user} / <NavUrl url = {props.url} store = {props.store}/></p></dd>)
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

const NavUrl = (props) => {

    return(
        <div id="divMemberSocial">
            <If condition={props.url !== ""}>
                <Then>
                    <a href={props.url} target="_sub"><FontAwesomeIcon icon={faGithub} color="black" size="1x"/></a>
                </Then>
            </If>
            <If condition={props.store !== ""}>
                <Then>
                    <a href={props.store} target="_sub"><FontAwesomeIcon icon={faGooglePlay} color="black" size="lg"/></a>
                </Then>
            </If>
        </div>
    )
}

export default Projects;