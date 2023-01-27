import Header from "../Header/Header";
import LandingPage from "../LandingPage/LandingPage";
import React from "react";
import HomeBody from "./Home/HomeBody";

export default function Home(props: any) {
    let title1 = "Karate Rheinzabern";

    if (props.lang === 1) {
        title1 = "Karate Rheinzabern";
    } else if (props.lang === 2) {
        title1 = "空手ラインツァーベルン";
    } else if (props.lang === 3) {
        title1 = "Karate Club Rheinzabern";
    }

    return (
        <div className={"Home"}>
            <Header
                lang={props.lang}
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
                lang={props.lang}
                toggleLang={props.toggleLang}
                currentLangString={props.currentLangString}
                currentLang={props.currentLang} />
        </div>
    );
}