import Header from "../Header/Header";
import LandingPage from "../LandingPage/LandingPage";
import React from "react";
import NewsBody from "./News/NewsBody";

export default function News(props: any) {
    let current_lang = window.location.href.split("/")[3];

    let title1 = "News";

    if (current_lang === "de") {
        title1 = "News";
    } else if (current_lang === "ja") {
        title1 = "ニュース";
    } else if (current_lang === "un") {
        title1 = "Hírek";
    }

    return (
        <>
            <Header
                toggle={props.toggle}
                lang={props.lang}
                show={props.show} />
            <LandingPage
                subtitle={title1}
                imgurl={"https://raw.githubusercontent.com/RaphaeleL/KenkyoWebsite/main/src/assets/LandingPage-8.jpeg"}/>
            <NewsBody />
        </>
    );
}