import React, {useState} from "react";

import CrabLogo from "../../images/Defcon_crab.svg";
import imgLR from "../../images/LR.png";
import imgHaren from "../../images/HarenKei.jpeg";
import imgCaret from "../../images/caret.png";
import imgV4bel from "../../images/v4bel.jpeg";
import ProfileData from "./ProfileData.json";

import "./Members.css";

const Profile = (props) => {
    return (
        <>
            {/*프로필 이미지와 소개 내용을 묶어주는 div*/}
            <div id="divIntro">
                <div id="divMemberImage">
                    <img src={props.img}/>
                </div>

                {/*멤버 소개글을 묶어주는 div*/}
                <div id="divMemberIntro">
                    <h2>{props.nickname}  |  <span id="spanName">{props.name}</span></h2>
                    <p><span>{props.group}</span></p>
                    <p>{props.intro}</p>
                </div>
            </div>
        </>
    );
  }

  
const Members = () => {
    const [historyData, setHistoryData] = useState([{"DATA": "Before Click"}]);

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
                    {
                        ProfileData.map(item => {
                            let profileImage;

                            switch(item.name){
                                case "김영현":
                                    profileImage = imgCaret;
                                    break;
                                case "김현우":
                                    profileImage = imgV4bel;
                                    break;
                                case "유용민":
                                    profileImage = imgLR;
                                    break;
                                case "정승민":
                                    profileImage = imgHaren;
                                    break;
                            }

                            const profileOnClick = () => {
                                setHistoryData(item.history);
                            }

                            return(
                                <div onClick={profileOnClick}>
                                    <Profile
                                        group={item.group}
                                        img={profileImage}
                                        intro={item.intro}
                                        name={item.name}
                                        nickname={item.nickname} />
                                </div>
                            )
                        })
                    }
                </div>

                {/*게새기와 멤버들의 이력을 배치하기 위한 div*/}
                <div id="divHistory">
                    <div id="divHistoryContent">
                        {
                            historyData.map(item => {
                                console.log(item);
                            })
                        }
                    </div>
                    <div id="divCrab">
                        <img src={CrabLogo} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Members;