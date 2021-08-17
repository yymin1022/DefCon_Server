import React from "react";

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