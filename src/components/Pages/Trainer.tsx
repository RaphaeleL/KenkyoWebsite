import Header from "../Header/Header";
import LandingPage from "../LandingPage/LandingPage";
import React from "react";
import TrainerBody from "./Trainer/TrainerBody";

export default function Trainer(props: any) {
    let current_lang = window.location.href.split("/")[3];

    let title1 = "Training";

    if (current_lang === "de") {
        title1 = "Training";
    } else if (current_lang === "ja") {
        title1 = "トレーニング";
    } else if (current_lang === "un") {
        title1 = "Kepzes";
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
            <TrainerBody lang={props.lang}/>
        </>
    );
}