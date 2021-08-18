import React from "react";
import {Link} from "react-router-dom";

import "./Home.css";

const Home = () => {
    return(
        <div>
            <p>Home Page</p>
            <div className="divHomeContents" id="divIntroduction">
                Introduction Zone
            </div>
            <div className="divHomeContents" id="divAward">
                Award Zone
            </div>
            <div className="divHomeContents" id="divWork">
                Work Zone
            </div>
            <div className="divHomeContents" id="divProject">
                Project Zone
            </div>
            <div className="divHomeContents" id="divContact">
                Contact Us
            </div>
            <Link to={"/members"}>Members</Link>
            <Link to={"/privacy"}>Privacy</Link>
        </div>
    )
}

export default Home;