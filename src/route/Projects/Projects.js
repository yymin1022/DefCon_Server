import React from "react";
import {Link} from "react-router-dom";

import "./Projects.css";

const Projects = () => {
    return(
        <>
            <Link to={"/"}>
                <p>Home</p>
            </Link>
            <Link to={"/members"}>
                <p>Member</p>
            </Link>
            <Link to={"/privacy"}>
                <p>Privacy</p>
            </Link>

            <div id="divProject">
                Project Zone
            </div>
        </>
    )
}

export default Projects;