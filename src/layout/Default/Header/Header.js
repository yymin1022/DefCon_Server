import React from "react";
import {Link} from "react-router-dom";

import DefconLogo from "../../../images/Defcon_logo_default.svg";

import "./Header.css"

const Header = () => {
    
    return (
        <div className="Header">
            <div id="headerLogo">
                <Link to={"/"}>
                    <img src={DefconLogo} />
                </Link>
            </div>

            <div id="headerNav">
                <Link to={"/members"}>
                    <p>Members</p>
                </Link>
                <Link to={"/projects"}>
                    <p>Project</p>
                </Link>
            </div>
        </div>
    );
}

export default Header;