import React from "react";
import {Link} from "react-router-dom";

import DefconLogoSplit from "../../../images/Defcon_logo_split.svg";

import "./Footer.css"

const Footer = () => {
    
    return (
        <div className="Footer">
            <div id="footerLogo">
                <img src={DefconLogoSplit} />
            </div>
        </div>
    );
}

export default Footer;