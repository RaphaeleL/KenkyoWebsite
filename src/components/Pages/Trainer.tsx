import Header from "../Header/Header";
import LandingPage from "../LandingPage/LandingPage";
import React from "react";
import TrainerBody from "./Trainer/TrainerBody";

export default function Trainer(props: any) {

    return (
        <>
            <Header
                toggle={props.toggle}
                lang={props.lang}
                show={props.show} />
            <LandingPage
                subtitle={"Training"}
                imgurl={"https://raw.githubusercontent.com/RaphaeleL/KenkyoWebsite/main/src/assets/LandingPage-8.jpeg"}/>
            <TrainerBody />
        </>
    );
}