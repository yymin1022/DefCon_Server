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

            <div id="footerContent">
                <div id="footerPrivacy">
                    <Link to={"/privacy"}>
                        <p>Def:Con 개인정보 처리방침</p>
                    </Link>
                </div>
                <div id="footerCopyright">
                    <p>
                        ©2021<br/>
                        Def:Con<br/>
                        ALLRIGHTSRESERVED
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;