import React from "react";
import {Link} from "react-router-dom";

import DefconLogo from "../../../images/Defcon_logo_default.svg";

import "./Footer.css"

const Footer = () => {
    
    return (
        <div className="Footer">
            <div id="footerLogo">
                <img src={DefconLogo} />
            </div>
        </div>
    );
}

export default Footer;