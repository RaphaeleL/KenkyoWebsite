import Header from "../Header/Header";
import LandingPage from "../LandingPage/LandingPage";
import React from "react";
import HomeBody from "./Home/HomeBody";
import {items} from "../Header/Menu/Utils/Content";

export default function Home(props: any) {
    let current_lang = window.location.href.split("/")[3];

    let title1 = items.de.home;

    if (current_lang === "en") {
        title1 = items.en.home;
    } else if (current_lang === "ja") {
        title1 = items.ja.home;
    } else if (current_lang === "un") {
        title1 = items.un.home;
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