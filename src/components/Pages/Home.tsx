import Header from "../Header/Header";
import LandingPage from "../LandingPage/LandingPage";
import React from "react";
import HomeBody from "./Home/HomeBody";

export default function Home() {
    return (
        <div className={"Home"}>
            <Header />
            <LandingPage
                subtitle={"Karate Rheinzabern" }
                imgurl={"https://raw.githubusercontent.com/RaphaeleL/KenkyoWebsite/main/src/assets/LandingPage-1.jpeg"}/>
            <HomeBody />
        </div>
    );
}