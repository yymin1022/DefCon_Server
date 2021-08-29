import React from "react";
import {Link} from "react-router-dom";

import DefconLogo from "../../../images/Defcon_logo_default.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faPencilAlt, faHome } from '@fortawesome/free-solid-svg-icons'
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
                <Link to={"/"} style={{ textDecoration: 'none' }}>
                    <div id="divRightMenu">
                        <FontAwesomeIcon icon={ faHome } color="#43C6AC" size="2x"/>
                        <p id="pTextLink">Home</p>
                    </div>
                </Link>
                <Link to={"/members"} style={{ textDecoration: 'none' }}>
                    <div id="divRightMenu">
                        <FontAwesomeIcon icon={ faUsers } color="#43C6AC" size="2x"/>
                        <p id="pTextLink">Members</p>
                    </div>
                </Link>
                <Link to={"/projects"} style={{ textDecoration: 'none' }}>
                    <div id="divRightMenu">
                        <FontAwesomeIcon icon={ faPencilAlt } color="#43C6AC" size="2x"/>
                        <p id="pTextLink">Project</p>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Header;