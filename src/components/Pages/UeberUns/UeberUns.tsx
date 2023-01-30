// @ts-nocheck
import FooterBody from "../Footer/FooterBody";
import React from "react";
import Seperator from "../Home/Seperator";
import {Divider, Space} from "@mantine/core";
import MyTitle from "../../Utils/MyTitle";
import {items} from "../../Content/MenuContent";
import Header from "../../Header/Header";
import LandingPage from "../../LandingPage/LandingPage";

export default function UeberUns() {
    let current_lang = window.location.href.split("/")[3] as String;

    return (
        <>
            <Header />
            <LandingPage />
            <div className={"VorstandBody"}>
                <Space h={"xl"} />
                <MyTitle order={1} content={items[current_lang][2]} />
                <Divider my="sm" />

                <Seperator />
                TODO
                <Space h={"xl"} />

                <FooterBody />
            </div>
        </>
    );
}