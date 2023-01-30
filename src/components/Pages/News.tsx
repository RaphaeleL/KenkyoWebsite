// @ts-nocheck
import Header from "../Header/Header";
import LandingPage from "../LandingPage/LandingPage";
import React from "react";
import NewsBody from "./News/NewsBody";
import {items} from "../Content/MenuContent";

export default function News(props: any) {
    let current_lang = window.location.href.split("/")[3] as String;

    return (
        <>
            <Header
                toggle={props.toggle}
                lang={props.lang}
                show={props.show} />
            <LandingPage
                subtitle={items[current_lang][4]}
                imgurl={"https://raw.githubusercontent.com/RaphaeleL/KenkyoWebsite/main/src/assets/LandingPage-8.jpeg"}/>
            <NewsBody />
        </>
    );
}