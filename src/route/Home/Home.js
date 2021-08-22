import React from "react";

import CrabLogo from "../../images/Defcon_crab.svg";
import DefconLogoDefault from "../../images/Defcon_logo_default.svg";
import DefconLogoSplit from "../../images/Defcon_logo_split.svg";
import SeoulRestLogo from "../../images/SeoulRest_Icon.png";

import "./Home.css";

const Home = () => {
    return(
        <>
            <div className="divHomeContents" id="divIntroduction">
                <div id="divIntroductionImage">
                    <img src={CrabLogo} />
                </div>

                <div id="divIntroductionText">
                    <p id="pIntroductionTextTitle">
                        이거 님이 만드신 거였군요!
                    </p>
                    <p id="pIntroductionTextContent">
                        <br/>
                        대학생 프로그래밍팀 DEF:CON은 서울 성보고등학교에서<br/>
                        프로그래밍 동아리로 시작되었습니다.<br/>
                        우리는 사용자가 우리가 만든 애플리케이션임을 알았을 때<br/>
                        견고한 신뢰를 가질 수 있는 애플리케이션을 만들고자 힘씁니다.<br/>
                        <br/>
                        2021년, DEF:CON이 새로운 도약을 하려 합니다!
                    </p>
                </div>
            </div>
            <div className="divHomeContents" id="divAward">
                <div id="divAwardImage">
                    <img src={SeoulRestLogo} />
                </div>

                <div id="divAwardText">
                    <p id="pAwardTextTitle">
                        2019 스마트서울 모바일 앱공모전<br/>
                        장려상 수상
                    </p>
                    <p id="pAwardTextContent">
                        SOUL REST : Seoul에서 Soul을 힐링하다.
                    </p>
                </div>
            </div>
            <div className="divHomeContents" id="divWork">
                <div id="divWorkTitle">
                    <p id="pWorkTitle">
                        Def:Con's Works
                    </p>
                </div>
                <div id="divWorkContent">
                    <div className="divWorkWrapper">
                        <div className="divWorkItem" id="divWorkAndroid">
                            <div className="divWorkItemImage">
                                <img src={SeoulRestLogo} />
                            </div>
                            <div className="divWorkItemText">
                                <p id="pWorkItemText">
                                    Android
                                </p>
                            </div>
                        </div>
                        <div className="divWorkItem" id="divWorkIos">
                            <div className="divWorkItemImage">
                                <img src={SeoulRestLogo} />
                            </div>
                            <div className="divWorkItemText">
                                <p id="pWorkItemText">
                                    iOS
                                </p>
                            </div>
                        </div>
                        <div className="divWorkItem" id="divWorkWeb">
                            <div className="divWorkItemImage">
                                <img src={SeoulRestLogo} />
                            </div>
                            <div className="divWorkItemText">
                                <p id="pWorkItemText">
                                    Web
                                </p>
                            </div>
                        </div>
                        <div className="divWorkItem" id="divWorkRepair">
                            <div className="divWorkItemImage">
                                <img src={SeoulRestLogo} />
                            </div>
                            <div className="divWorkItemText">
                                <p id="pWorkItemText">
                                    Self Repair
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="divWorkWrapper">
                        <div className="divWorkItem" id="divWorkSecurity">
                            <div className="divWorkItemImage">
                                <img src={SeoulRestLogo} />
                            </div>
                            <div className="divWorkItemText">
                                <p id="pWorkItemText">
                                    CTF / Security
                                </p>
                            </div>
                        </div><div className="divWorkItem" id="divWorkChatbot">
                            <div className="divWorkItemImage">
                                <img src={SeoulRestLogo} />
                            </div>
                            <div className="divWorkItemText">
                                <p id="pWorkItemText">
                                    Chat Bot
                                </p>
                            </div>
                        </div><div className="divWorkItem" id="divWorkYoutube">
                            <div className="divWorkItemImage">
                                <img src={SeoulRestLogo} />
                            </div>
                            <div className="divWorkItemText">
                                <p id="pWorkItemText">
                                    Youtube
                                </p>
                            </div>
                        </div><div className="divWorkItem" id="divWorkOther">
                            <div className="divWorkItemImage">
                                <img src={SeoulRestLogo} />
                            </div>
                            <div className="divWorkItemText">
                                <p id="pWorkItemText">
                                    And Other..!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="divHomeContents" id="divInfo">
                Info / Contact Us
            </div>
        </>
    )
}

export default Home;