// @ts-nocheck
import FooterBody from "../Footer/FooterBody";
import React from "react";
import Seperator from "../Home/Seperator";
import {Space} from "@mantine/core";
import MyTitle from "../../Utils/MyTitle";
import {items} from "../../Content/MenuContent";
import Persons from "./Persons";
import Language from "../Footer/Language";

export default function UeberUns() {
    let current_lang = window.location.href.split("/")[3] as String;

    return (
        <>
            <div className={"VorstandBody"}>
                <Space h={"xl"} />
                <MyTitle order={1} content={items[current_lang][2]} />

                <Seperator />

                <Persons />

                <FooterBody />
                <Language />
            </div>
        </>
    );
}