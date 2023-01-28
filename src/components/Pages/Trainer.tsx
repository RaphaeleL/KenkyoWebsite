import Header from "../Header/Header";
import LandingPage from "../LandingPage/LandingPage";
import React from "react";
import TrainerBody from "./Trainer/TrainerBody";
import {items} from "../Header/Menu/Utils/Content";

export default function Trainer(props: any) {
    let current_lang = window.location.href.split("/")[3];

    let title1 = items.de.training;

    if (current_lang === "en") {
        title1 = items.en.training;
    } else if (current_lang === "ja") {
        title1 = items.ja.training;
    } else if (current_lang === "un") {
        title1 = items.un.training;
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
            <TrainerBody />
        </>
    );
}