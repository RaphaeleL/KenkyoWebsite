import Header from "../Header/Header";
import LandingPage from "../LandingPage/LandingPage";
import React from "react";
import WeiteresBody from "./Weiteres/WeiteresBody";

export default function Weiteres(props: any) {
    let current_lang = window.location.href.split("/")[3];
    let title1 = "Weiteres";

    if (current_lang === "en") {
        title1 = "Further";
    } else if (current_lang === "ja") {
        title1 = "さらに";
    } else if (current_lang === "un") {
        title1 = "További";
    }

    return (
        <>
            <Header
                show={props.show}
                toggle={props.toggle}
                toggleLang={props.toggleLang}
                currentLangString={props.currentLangString}
                currentLang={props.currentLang}
                setCurrentLang={props.setCurrentLang} />
            <LandingPage
                subtitle={title1}
                imgurl={"https://raw.githubusercontent.com/RaphaeleL/KenkyoWebsite/main/src/assets/LandingPage-3.jpeg"}/>
            <WeiteresBody />
        </>
    );
}