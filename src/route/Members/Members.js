import React from "react";
import "./Members.css";
import CrabLogo from "../../images/Defcon_crab.svg";

function Profile(props) {
    return (
      <div id="divIntro">
          <div id="divIntroductionImage">
              <img src={CrabLogo} />
          </div>
          <div id="divMemberIntroduction">
          <h2>{ props.name }</h2>
          <p><span>{ props.school }</span></p>
          <p>{ props.intro }</p>
          </div>
      </div>
        
    );
  }
const Members = () => {
    return(
        <div id="divMemberIntroduction">
            <p><span id="spanMembersBar">Members</span></p>
            <div id="divMember">
                <Profile name = {"LR"} school = {"중앙대학교"} intro = {"누구보다 보라매를 사랑하는 남자"}/>
                <Profile name = {"HarenKei"} school = {"대림대학교"} intro = {"땅개"}/>
                <Profile name = {"Caret"} school = {"안양대학교"} intro = {"킹익"}/>
                <Profile name = {"V4BEL"} school = {"NULL"} intro = {"확대범"}/>
            </div>
        </div>
    )
}

export default Members;