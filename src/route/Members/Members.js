import React from "react";
import "./Members.css";

function profile(name, school,intro) {
    return (
      <div>
          <h2>name</h2>
          <p><span>school</span></p>
          <p>intro</p>
      </div>
        
    );
  }
const Members = () => {
    return(
        <>
            <div id="divMember">
                { profile('yymin1022', '중앙대학교', '황제')}
                
            </div>
        </>
    )
}

export default Members;