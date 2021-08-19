import React from "react";
import {Link} from "react-router-dom";

import "./Privacy.css";

const Privacy = () => {
    return(
        <>
            <Link to={"/"}>
                <p>Home</p>
            </Link>
            <Link to={"/members"}>
                <p>Members</p>
            </Link>
            <Link to={"/projects"}>
                <p>Project</p>
            </Link>

            <div id="divPrivacy">
                Privacy Zone
            </div>
        </>
    )
}

export default Privacy;