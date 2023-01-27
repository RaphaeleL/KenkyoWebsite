import Header from "../Header/Header";
import LandingPage from "../LandingPage/LandingPage";
import React from "react";
import TrainerBody from "./Trainer/TrainerBody";

export default function Trainer(props: any) {
    let title1 = "Training";

    if (props.currentLang === 1) {
        title1 = "Training";
    } else if (props.currentLang === 2) {
        title1 = "トレーニング";
    } else if (props.currentLang === 3) {
        title1 = "Kepzes";
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
                imgurl={"https://raw.githubusercontent.com/RaphaeleL/KenkyoWebsite/main/src/assets/LandingPage-8.jpeg"}/>
            <TrainerBody
                lang={props.lang}
                toggleLang={props.toggleLang}
                currentLangString={props.currentLangString}
                currentLang={props.currentLang} />
        </>
    );
}