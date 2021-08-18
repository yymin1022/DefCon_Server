import React from "react";
import {Link} from "react-router-dom";

import "./Home.css";

const Home = () => {
    return(
        <div>
            <p>Home Page</p>

            <Link to={"/members"}>
                <p>Members</p>
            </Link>
            <Link to={"/privacy"}>
                <p>Privacy</p>
            </Link>

            <div className="divHomeContents" id="divIntroduction">
                <div id="divIntroductionImage">
                    LOGO
                </div>

                <div id="divIntroductionText">
                    Introduction Text
                </div>
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
        </div>
    )
}

export default Home;