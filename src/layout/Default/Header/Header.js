import React from "react";

import DefconLogo from "../../../images/Defcon_logo_default.svg";

import "./Header.css"

const Header = () => {
    
    return (
        <div className="Header">
            <div id="headerLogo">
                <img src={DefconLogo} />
            </div>

            <div id="headerNav">
                <Link to={"/"}>
                    <p>Home</p>
                </Link>
                <Link to={"/members"}>
                    <p>Members</p>
                </Link>
                <Link to={"/privacy"}>
                    <p>Privacy</p>
                </Link>
                <Link to={"/projects"}>
                    <p>Project</p>
                </Link>
            </div>
        </div>
    );
}

export default Header;