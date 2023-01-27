import Header from "../Header/Header";
import LandingPage from "../LandingPage/LandingPage";
import React from "react";
import WeiteresBody from "./Weiteres/WeiteresBody";

export default function Weiteres(props: any) {
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
                subtitle={"Weiteres"}
                imgurl={"https://raw.githubusercontent.com/RaphaeleL/KenkyoWebsite/main/src/assets/LandingPage-3.jpeg"}/>
            <WeiteresBody />
        </>
    );
}