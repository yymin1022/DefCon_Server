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
          <h2>{ props.nickname }  |  <span id="spanName">{ props.name }</span></h2>
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
                <Profile img = {Lr} nickname = {"LR"} name = {"유용민"} group = {"중앙대학교 19학번 / 대한민국 공군 ROKAF "} intro = {"Android, Web"}/>
                <Profile img = {Haren} nickname = {"HarenKei"} name = {"정승민"} group = {"대림대학교 19학번 / 대한민국 육군 ROKA "} intro = {"Python Chatbot, Design, Web, iOS"}/>
                <Profile img = {Caret} nickname = {"Caret"} name = {"김영현"} group = {"안양대학교 19학번 / 대한민국 사회복무요원 ROK Social Agent "} intro = {"Android, Web"}/>
                <Profile img = {V4bel} nickname = {"V4BEL"} name = {"김현우"} group = {"Defnit"} intro = {"킹왕짱 해커"}/>
            </div>
        </div>
    )
}

export default Members;