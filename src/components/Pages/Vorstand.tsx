import Header from "../Header/Header";
import LandingPage from "../LandingPage/LandingPage";
import React from "react";
import VorstandBody from "./Vorstand/VorstandBody";
import {items} from "../Header/Menu/Utils/Content";

export default function Vorstand(props: any) {
    let current_lang = window.location.href.split("/")[3] as String;
    // @ts-ignore
    let title1 = items[current_lang][2];

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
                imgurl={"https://raw.githubusercontent.com/RaphaeleL/KenkyoWebsite/main/src/assets/LandingPage-5.jpeg"}/>
            <VorstandBody />
        </>
    );
}