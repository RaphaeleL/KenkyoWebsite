import Header from "../Header/Header";
import LandingPage from "../LandingPage/LandingPage";
import React from "react";

export default function Trainer() {
    return (
        <>
            <Header />
            <LandingPage
                subtitle={"Trainer"}
                imgurl={"https://raw.githubusercontent.com/RaphaeleL/KenkyoWebsite/main/src/assets/LandingPage-8.jpeg"}/>
            Trainer
        </>
    );
}