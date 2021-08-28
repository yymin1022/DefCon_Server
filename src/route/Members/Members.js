import React, {useState} from "react";
import { Link } from "react-router-dom";
import CrabLogo from "../../images/Defcon_crab.svg";
import imgLR from "../../images/LR.png";
import imgHaren from "../../images/HarenKei.jpeg";
import imgCaret from "../../images/caret.png";
import imgV4bel from "../../images/v4bel.jpeg";
import ProfileData from "./ProfileData.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { fab, faGithub, faInstagram, faFacebook, faTwitter, faGooglePlay } from "@fortawesome/free-brands-svg-icons";

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
    const [historyData, setHistoryData] = useState([{
                                                        "date": "",
                                                        "content": ""
                                                    }]);

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
                            let githubPath;
                            let fabookPath;
                            let twitterPath;
                            let instaPath;
                            let blogPath;

                            switch(item.name){
                                case "김영현":
                                    profileImage = imgCaret;
                                    githubPath = "https://github.com/rdg1029";
                                    break;
                                case "김현우":
                                    profileImage = imgV4bel;
                                    githubPath = "https://github.com/v4bel";
                                    break;
                                case "유용민":
                                    profileImage = imgLR;
                                    githubPath = "https://github.com/yymin1022"
                                    break;
                                case "정승민":
                                    profileImage = imgHaren;
                                    githubPath = "https://github.com/harenkei";
                                    break;
                            }

                            const profileOnClick = () => {
                                setHistoryData(item.history);
                            }

                            return(
                                <div id="divProfile" onClick={profileOnClick}>
                                    <Profile
                                        group={item.group}
                                        img={profileImage}
                                        name={item.name}
                                        nickname={item.nickname} />
                                    <div id="divSocial">
                                    <a href={githubPath} target="_sub"><FontAwesomeIcon icon={faGithub} color="black" size="2x"/></a>
                                    <a href={fabookPath} target="_sub"><FontAwesomeIcon icon={faFacebook} color="black" size="2x"/></a>
                                    <a href={twitterPath} target="_sub"><FontAwesomeIcon icon={faTwitter} color="black" size="2x"/></a>
                                    <a href={instaPath} target="_sub"><FontAwesomeIcon icon={faInstagram} color="black" size="2x"/></a>
                                    <a href={blogPath} target="_sub"><FontAwesomeIcon icon={faHome} color="black" size="2x"/></a>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

                {/*게새기와 멤버들의 이력을 배치하기 위한 div*/}
                <div id="divHistory"> {/*게새기와 멤버 이력의 부모 div 요소*/}
                    <div id="divHistoryContent">
                        {
                            historyData.map(item => {
                                console.log(item);

                                return(
                                    <div id="divHistoryItem">
                                        <p id="pHistoryItemDate">{item["date"]}</p>
                                        <p id="pHistoryItemContent">{item["content"]}</p>
                                    </div>
                                )
                            })
                        }
                        <div id="divCrab">
                            <img src={CrabLogo} />
                        </div>
                    </div>
                
                </div>
            </div>
        </div>
    )
}

export default Members;