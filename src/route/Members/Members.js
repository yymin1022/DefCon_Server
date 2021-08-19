import React from "react";
import {Link} from "react-router-dom";

import "./Members.css";

const Members = () => {
    return(
        <>
            <Link to={"/"}>
                <p>Home</p>
            </Link>
            <Link to={"/privacy"}>
                <p>Privacy</p>
            </Link>
            <Link to={"/projects"}>
                <p>Project</p>
            </Link>

            <div id="divMember">
                Member Zone
            </div>
        </>
    )
}

export default Members;