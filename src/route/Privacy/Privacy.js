import React from "react";
import {Link} from "react-router-dom";

import "./Privacy.css";

const Privacy = () => {
    return(
        <div>
            <p>Privacy Page</p>
            <Link to={"/"}>Home</Link>
            <Link to={"/members"}>Members</Link>
        </div>
    )
}

export default Privacy;