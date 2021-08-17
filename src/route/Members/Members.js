import React from "react";
import {Link} from "react-router-dom";

import "./Members.css";

const Members = () => {
    return(
        <div>
            <p>Member Page</p>
            <Link to={"/"}>Home</Link>
            <Link to={"/privacy"}>Privacy</Link>
        </div>
    )
}

export default Members;