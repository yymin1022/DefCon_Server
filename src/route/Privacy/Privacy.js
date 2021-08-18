import React from "react";
import {Link} from "react-router-dom";

import "./Privacy.css";

const Privacy = () => {
    return(
        <>
            <p>Privacy Page</p>

            <Link to={"/"}>
                <p>Home</p>
            </Link>
            <Link to={"/members"}>
                <p>Members</p>
            </Link>

            <div id="divPrivacy">
                Privacy Zone
            </div>
        </>
    )
}

export default Privacy;