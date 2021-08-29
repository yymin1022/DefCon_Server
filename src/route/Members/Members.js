import React, {useState} from "react";
import { Link } from "react-router-dom";
import {If, Then} from "react-if";

import CrabLogo from "../../images/Defcon_crab.svg";
import imgLR from "../../images/LR.png";
import imgHaren from "../../images/HarenKei.jpeg";
import imgCaret from "../../images/caret.png";
import imgV4bel from "../../images/v4bel.jpeg";
import ProfileData from "./ProfileData.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { fab, faGithub, faInstagram, faFacebook, faTwitter, faGooglePlay, faGit } from "@fortawesome/free-brands-svg-icons";

import "./Members.css";

const Profile = (props) => {
    return (
        <>
            {/*프로필 이미지와 소개 내용을 묶어주는 div*/}
            <div id="divIntro">
                <div id="divMemberImage">
                    <img src={props.img}/>
                </div>

                <div id="divMemberInfo">
                    {/*멤버 소개글을 묶어주는 div*/}
                    <div id="divMemberIntro">
                        <h2>{props.nickname}  |  <span id="spanName">{props.name}</span></h2>
                        <p><span>{props.group}</span></p>
                        <p>{props.intro}</p>
                    </div>

                    {/* 멤버별 SNS URL div */}
                    <NavSNS 
                        urlBlog={props.urlBlog}
                        urlFacebook={props.urlFacebook}
                        urlGithub={props.urlGithub}
                        urlInstagram={props.urlInstagram}
                        urlTwitter={props.urlTwitter} />
                </div>
            </div>
        </>
    );
}

const NavSNS = (props) => {
    return(
        <div id="divMemberSocial">
            <If condition={props.urlBlog !== ""}>
                <Then>
                    <a href={props.urlBlog} target="_sub"><FontAwesomeIcon icon={faHome} color="black" size="2x"/></a>
                </Then>
            </If>
            <If condition={props.urlFacebook !== ""}>
                <Then>
                    <a href={props.urlFacebook} target="_sub"><FontAwesomeIcon icon={faFacebook} color="black" size="2x"/></a>
                </Then>
            </If>
            <If condition={props.urlGithub !== ""}>
                <Then>
                    <a href={props.urlGithub} target="_sub"><FontAwesomeIcon icon={faGithub} color="black" size="2x"/></a>
                </Then>
            </If>
            <If condition={props.urlInstagram !== ""}>
                <Then>
                    <a href={props.urlInstagram} target="_sub"><FontAwesomeIcon icon={faInstagram} color="black" size="2x"/></a>
                </Then>
            </If>
            <If condition={props.urlTwitter !== ""}>
                <Then>
                    <a href={props.urlTwitter} target="_sub"><FontAwesomeIcon icon={faTwitter} color="black" size="2x"/></a>
                </Then>
            </If>
        </div>
    )
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

                            let urlBlog;
                            let urlFacebook;
                            let urlGithub;
                            let urlInstagram
                            let urlTwitter;

                            item.sns.map(snsItem => {
                                urlBlog = snsItem.blog;
                                urlFacebook = snsItem.facebook;
                                urlGithub = snsItem.github;
                                urlInstagram = snsItem.instagram;
                                urlTwitter = snsItem.twitter;
                            })

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
                                <div id="divProfile" onClick={profileOnClick}>
                                    <Profile
                                        group={item.group}
                                        img={profileImage}
                                        name={item.name}
                                        nickname={item.nickname}
                                        urlBlog={urlBlog}
                                        urlFacebook={urlFacebook}
                                        urlGithub={urlGithub}
                                        urlInstagram={urlInstagram}
                                        urlTwitter={urlTwitter}  />
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