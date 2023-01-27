import Header from "../Header/Header";
import LandingPage from "../LandingPage/LandingPage";
import React from "react";
import VorstandBody from "./Vorstand/VorstandBody";

export default function Vorstand(props: any) {
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
                subtitle={"Vorstand"}
                imgurl={"https://raw.githubusercontent.com/RaphaeleL/KenkyoWebsite/main/src/assets/LandingPage-5.jpeg"}/>
            <VorstandBody />
        </>
    );
}