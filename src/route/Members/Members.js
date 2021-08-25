import React, { useState } from "react";

import imgLR from "../../images/LR.png";
import imgHaren from "../../images/HarenKei.jpeg";
import imgCaret from "../../images/caret.png";
import imgV4bel from "../../images/v4bel.jpeg";
import CrabLogo from "../../images/Defcon_crab.svg";
import ProfileData from "./ProfileData.json";

import "./Members.css";

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

  
const Members=() => {
    const [MemberRecord, setMemberRecord]=useState(0);
    const viewLrRecord=() => {
        console.log(LrRecord);
    }
    const viewHrRecord=() => {
        console.log(HrRecord);
    }
    const viewCrRecord=() => {
        console.log(CrRecord);
    }
    const viewVbRecord=() => {
        console.log(VbRecord);
    }

    return(
        <div id="divMemberIntroduction">
            {/*멤버 페이지 제목 바를 위한 div*/}
            <div id="divMemberTitle">
                <p id="pMemberTitle">
                    <span id="spanMemberTitle">
                        Members
                    </span>
                </p>
            </div>

            {/*이 div는 자식요소들을 묶기 위한 flex-container로 작용함*/}
            <div id="divContainer">
                {/*멤버의 소개를 보여주는 div*/}
                <div id="divMember">
                    <div id="yym" onClick={viewLrRecord}>
                        <Profile
                            img={Lr}
                            nickname={"LR"}
                            name={"유용민"}
                            group={"중앙대학교 19학번 / 대한민국 공군 ROKAF "}
                            intro={"Android, Web"} />
                    </div>
                    <div id ="jsm" onClick={viewHrRecord}>
                        <Profile
                            img={Haren}
                            nickname={"HarenKei"}
                            name={"정승민"}
                            group={"대림대학교 19학번 / 대한민국 육군 ROKA "}
                            intro={"Python Chatbot, Design, Web, iOS"} />
                    </div>
                    <div id ="kyh" onClick={viewCrRecord}>
                        <Profile
                            img={Caret}
                            nickname={"Caret"}
                            name={"김영현"}
                            group={"안양대학교 19학번 / 대한민국 사회복무요원 ROK Social Agent "}
                            intro={"Android, Web"}/>
                    </div>
                    <div id="khw" onClick={viewVbRecord}>
                        <Profile
                            img={V4bel}
                            nickname={"V4BEL"}
                            name={"김현우"}
                            group={"Defnit"}
                            intro={"킹왕짱 해커"}/>
                    </div>
                </div>

                {/*게새기와 멤버들의 이력을 배치하기 위한 div*/}
                <div id="divCrab">
                    <img src={CrabLogo} />
                </div>
            </div>
        </div>
    )
}

export default Members;