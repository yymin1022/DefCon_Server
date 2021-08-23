import React from "react";
import "./Members.css";
import Lr from "../../images/LR.png";
import Haren from "../../images/HarenKei.jpeg";
import Caret from "../../images/caret.png";
import V4bel from "../../images/v4bel.jpeg";

function Profile(props) {
    return (
      <div id="divIntro">
          <div id="divMemberImage">
              <img src={ props.img }/>
          </div>
          <div id="divMemberIntroduction">
          <h2>{ props.name }</h2>
          <p><span>{ props.group }</span></p>
          <p>{ props.intro }</p>
          </div>
          <br></br>
      </div>
        
    );
  }
const Members = () => {
    return(
        <div id="divMemberIntroduction">
            <p><span id="spanMembersBar">Members</span></p>
            <div id="divMember">
                <Profile img = {Lr} name = {"LR"} group = {"중앙대학교 19학번 / 대한민국 공군 ROKAF "} intro = {"집에가고싶겠다"}/>
                <Profile img = {Haren} name = {"HarenKei"} group = {"대림대학교 19학번 / 대한민국 육군 ROKA "} intro = {"코딩하십쇼 저누님..."}/>
                <Profile img = {Caret} name = {"Caret"} group = {"안양대학교 19학번 / 대한민국 사회복무요원 ROK Social Agent "} intro = {"Caret이 [ ] 하면 망한다"}/>
                <Profile img = {V4bel} name = {"V4BEL"} group = {"Defnit"} intro = {"킹왕짱 해커"}/>
            </div>
        </div>
    )
}

export default Members;