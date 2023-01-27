import Header from "../Header/Header";
import LandingPage from "../LandingPage/LandingPage";
import Body from "../Body/Body";
import React from "react";

export default function Home() {
    return (
        <>
            <Header />
            <LandingPage
                subtitle={"Karate"}
                imgurl={"https://raw.githubusercontent.com/RaphaeleL/KenkyoWebsite/main/src/assets/LandingPage-1.jpeg"}/>
            <Body />
        </>
    );
}