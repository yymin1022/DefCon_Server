import React from "react";

import DefconLogo from "../../images/Defcon_logo_default.svg";

import "./Header.css"

const Header = () => {
    
    return (
        <div className="Header">
            <div id="headerLogo">
                <img src={DefconLogo} />
            </div>
        </div>
    );
}

export default Header;