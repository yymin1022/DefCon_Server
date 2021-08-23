import React from "react";
import "./Members.css";
import Lr from "../../images/LR.png";
import Haren from "../../images/HarenKei.jpeg";
import Caret from "../../images/caret.png";
import V4bel from "../../images/v4bel.jpeg";
import Gesaegi from "../../images/Defcon_crab.svg";


function Profile(props) { {/*프로필 컴포넌트 함수*/} 
    return (
      <div id="divIntro"> {/*프로필 이미지와 소개 내용을 묶어주는 div*/}
          <div id="divMemberImage">
              <img src={ props.img }/>
          </div>

          <div id="divMemberIntro"> {/*멤버 소개글을 묶어주는 div*/}
          <h2>{ props.nickname }  |  <span id="spanName">{ props.name }</span></h2>
          <p><span>{ props.group }</span></p>
          <p>{ props.intro }</p>
          </div>
      </div>
    );
  }


const Members = () => {
    return(
        <div id="divMemberIntroduction">
            <div id="divMemberTitle">{/*멤버 페이지 제목 바를 위한 div*/}
                    <p id="pMemberTitle"> <span id="spanMemberTitle">Members</span></p>
            </div>

            <div id="divMember"> {/*멤버의 소개를 보여주는 div*/}
                <Profile img = {Lr} nickname = {"LR"} name = {"유용민"} group = {"중앙대학교 19학번 / 대한민국 공군 ROKAF "} intro = {"Android, Web"}/>
                <Profile img = {Haren} nickname = {"HarenKei"} name = {"정승민"} group = {"대림대학교 19학번 / 대한민국 육군 ROKA "} intro = {"Python Chatbot, Design, Web, iOS"}/>
                <Profile img = {Caret} nickname = {"Caret"} name = {"김영현"} group = {"안양대학교 19학번 / 대한민국 사회복무요원 ROK Social Agent "} intro = {"Android, Web"}/>
                <Profile img = {V4bel} nickname = {"V4BEL"} name = {"김현우"} group = {"Defnit"} intro = {"킹왕짱 해커"}/>
            </div>

            <div class="divCrab"> {/*게새기를 배치하기 위한 div*/}
                <img src={ Gesaegi } />
            </div>
        </div>
    )
}

export default Members;