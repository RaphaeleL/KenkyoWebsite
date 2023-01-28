import Header from "../Header/Header";
import LandingPage from "../LandingPage/LandingPage";
import React from "react";
import HomeBody from "./Home/HomeBody";
import {items} from "../Content/MenuContent";

export default function Home(props: any) {
    let current_lang = window.location.href.split("/")[3] as String;
    // @ts-ignore
    let title1 = items[current_lang][0];

    return (
        <div className={"Home"}>
            <Header
                toggle={props.toggle}
                lang={props.lang}
                show={props.show} />
            <LandingPage
                subtitle={title1}
                imgurl={"https://raw.githubusercontent.com/RaphaeleL/KenkyoWebsite/main/src/assets/LandingPage-1.jpeg"}/>
            <HomeBody />
        </div>
    );
}