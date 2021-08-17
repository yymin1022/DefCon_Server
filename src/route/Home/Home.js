import React from "react";

import "./Home.css";

const Home = () => {
    return(
        <div>
            <p>Home Page</p>
            <Link to={"/members"}>Members</Link>
            <Link to={"/privacy"}>Privacy</Link>
        </div>
    )
}

export default Home;