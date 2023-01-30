// @ts-nocheck
import Header from "../Header/Header";
import LandingPage from "../LandingPage/LandingPage";
import React from "react";
import WeiteresBody from "./Weiteres/WeiteresBody";
import {items} from "../Content/MenuContent";

export default function Weiteres(props: any) {
    let current_lang = window.location.href.split("/")[3] as String;

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
                subtitle={items[current_lang][3]}
                imgurl={"https://raw.githubusercontent.com/RaphaeleL/KenkyoWebsite/main/src/assets/LandingPage-3.jpeg"}/>
            <WeiteresBody />
        </>
    );
}