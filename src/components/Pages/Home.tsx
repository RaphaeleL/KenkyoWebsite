import Header from "../Header/Header";
import LandingPage from "../LandingPage/LandingPage";
import React from "react";
import HomeBody from "./Home/HomeBody";

export default function Home(props: any) {
    let current_lang = window.location.href.split("/")[3];
    let title1 = "Karate Rheinzabern";

    if (current_lang === "en") {
        title1 = "Karate Rheinzabern";
    } else if (current_lang === "ja") {
        title1 = "空手ラインツァーベルン";
    } else if (current_lang === "un") {
        title1 = "Karate Club Rheinzabern";
    }

    return (
        <div className={"Home"}>
            <Header
                toggle={props.toggle}
                lang={props.lang}
                show={props.show} />
            <LandingPage
                subtitle={title1}
                imgurl={"https://raw.githubusercontent.com/RaphaeleL/KenkyoWebsite/main/src/assets/LandingPage-1.jpeg"}/>
            <HomeBody />
        </div>
    );
}