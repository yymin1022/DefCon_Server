import React from "react";
import "./Members.css";
import CrabLogo from "../../images/Defcon_crab.svg";

function profile() {
    return (
      <div>
          <div id="divIntroductionImage">
              <img src={CrabLogo} />
          </div>
          <div id="divMemberIntroduction">
          <h2>name</h2>
          <p><span>school</span></p>
          <p>intro</p>
          </div>
      </div>
        
    );
  }
const Members = () => {
    return(
        <>
            <div id="divMember">
                { profile('yymin1022')}
            </div>
        </>
    )
}

export default Members;