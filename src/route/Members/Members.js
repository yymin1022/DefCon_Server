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
          <p><span>{ props.school }</span></p>
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
                <Profile img = {Lr} name = {"LR"} school = {"중앙대학교 19학번"} intro = {"대한민국 공군 ROKAF"}/>
                <Profile img = {Haren} name = {"HarenKei"} school = {"대림대학교 19학번"} intro = {"대한민국 육군 ROKA"}/>
                <Profile img = {Caret} name = {"Caret"} school = {"안양대학교 19학번"} intro = {"대한민국 사회복무요원"}/>
                <Profile img = {V4bel} name = {"V4BEL"} school = {"NULL"} intro = {"Defnit팀 소속으로 CTF 참가"}/>
            </div>
        </div>
    )
}

export default Members;