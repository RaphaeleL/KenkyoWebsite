// @ts-nocheck
import {Space} from "@mantine/core";
import MyTitle from "../../Utils/MyTitle";
import FooterBody from "../Footer/FooterBody";
import React from "react";
import Seperator from "../Home/Seperator";
import {items} from "../../Content/MenuContent";
import Header from "../../Header/Header";
import LandingPage from "../../LandingPage/LandingPage";
import Language from "../Footer/Language";
import Offers from "./Offers";
import Times from "./Times";
import Location from "./Location";

export default function Training() {
    let current_lang = window.location.href.split("/")[3] as String;

    return (
        <>
            <Header />
            <LandingPage />
            <div className={"TrainerBody"}>
                <Space h={"xl"} />
                <MyTitle order={1} content={items[current_lang][1]}/>

                <Seperator />

                <Location />

                <Seperator />

                <Times />

                <Seperator />

                <Offers />

                <FooterBody />
                <Language />
            </div>
        </>
    );
}