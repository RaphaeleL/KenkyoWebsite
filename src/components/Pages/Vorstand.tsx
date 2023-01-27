import Header from "../Header/Header";
import LandingPage from "../LandingPage/LandingPage";
import React from "react";
import VorstandBody from "./Vorstand/VorstandBody";

export default function Vorstand() {
    return (
        <>
            <Header />
            <LandingPage
                subtitle={"Vorstand"}
                imgurl={"https://raw.githubusercontent.com/RaphaeleL/KenkyoWebsite/main/src/assets/LandingPage-5.jpeg"}/>
            <VorstandBody />
        </>
    );
}