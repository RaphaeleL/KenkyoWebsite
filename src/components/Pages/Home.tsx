import Header from "../Header/Header";
import LandingPage from "../LandingPage/LandingPage";
import React from "react";
import HomeBody from "./Home/HomeBody";

export default function Home(props: any) {
    let title1 = "Karate Rheinzabern";

    if (props.lang === "en") {
        title1 = "Karate Rheinzabern";
    } else if (props.lang === "ja") {
        title1 = "空手ラインツァーベルン";
    } else if (props.lang === "un") {
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
            <HomeBody lang={props.lang} />
        </div>
    );
}