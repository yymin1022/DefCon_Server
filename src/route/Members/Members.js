import React from "react";
import {Link} from "react-router-dom";

import "./Members.css";

const Members = () => {
    return(
        <div>
            <p>Member Page</p>

            <Link to={"/"}>
                <p>Home</p>
            </Link>
            <Link to={"/privacy"}>
                <p>Privacy</p>
            </Link>

            <div id="divMember">
                Member Zone
            </div>
        </div>
    )
}

export default Members;