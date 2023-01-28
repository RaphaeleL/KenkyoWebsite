import Header from "../Header/Header";
import LandingPage from "../LandingPage/LandingPage";
import React from "react";
import NewsBody from "./News/NewsBody";

export default function News(props: any) {
    return (
        <>
            <Header
                toggle={props.toggle}
                lang={props.lang}
                show={props.show} />
            <LandingPage
                subtitle={"News"}
                imgurl={"https://raw.githubusercontent.com/RaphaeleL/KenkyoWebsite/main/src/assets/LandingPage-8.jpeg"}/>
            <NewsBody />
        </>
    );
}