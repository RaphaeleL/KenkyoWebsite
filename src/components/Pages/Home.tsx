import Header from "../Header/Header";
import LandingPage from "../LandingPage/LandingPage";
import React from "react";
import HomeBody from "./Home/HomeBody";

export default function Home(props: any) {
    let title1 = "Karate Rheinzabern";

    if (props.currentLang === 1) {
        title1 = "Karate Rheinzabern";
    } else if (props.currentLang === 2) {
        title1 = "空手ラインツァーベルン";
    } else if (props.currentLang === 3) {
        title1 = "Karate Club Rheinzabern";
    }

    return (
        <div className={"Home"}>
            <Header
                show={props.show}
                toggle={props.toggle}
                toggleLang={props.toggleLang}
                currentLangString={props.currentLangString}
                currentLang={props.currentLang}
                setCurrentLang={props.setCurrentLang} />
            <LandingPage
                subtitle={title1}
                imgurl={"https://raw.githubusercontent.com/RaphaeleL/KenkyoWebsite/main/src/assets/LandingPage-1.jpeg"}/>
            <HomeBody
                toggleLang={props.toggleLang}
                currentLangString={props.currentLangString}
                currentLang={props.currentLang} />
        </div>
    );
}