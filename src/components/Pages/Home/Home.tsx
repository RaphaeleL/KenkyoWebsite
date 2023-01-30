// @ts-nocheck
import React from "react";
import FooterBody from "../Footer/FooterBody";
import {Space} from "@mantine/core";
import MyTitle from "../../Utils/MyTitle";
import Header from "../../Header/Header";
import LandingPage from "../../LandingPage/LandingPage";
import Quote from "./Quote";
import {succ} from "../../Content/HomeContent";
import Language from "../Footer/Language";

export default function Home() {
    let current_lang = window.location.href.split("/")[3] as String;

    return (
        <>
            <Header />
            <LandingPage />
            <div className={"HomeBody"}>
                <Language />
                <Space h={"xl"}/>
                <MyTitle order={1} content={"Karateverein Kenkyo Rheinzabern e.V."}/>

                {/*<Success/>*/}

                <Quote author={succ[current_lang][5]} text={succ[current_lang][4]}/>

                TODO

                <FooterBody/>
            </div>
        </>
    );
}


