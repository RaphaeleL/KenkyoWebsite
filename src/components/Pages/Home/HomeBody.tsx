// @ts-nocheck
import Seperator from "./Seperator";
import Success from "./Success";
import React from "react";
import FooterBody from "../Footer/FooterBody";
import {Blockquote, Divider, Text} from "@mantine/core";
import {succ} from "../../Content/HomeContent";

export default function HomeBody() {
    let current_lang = window.location.href.split("/")[3] as String;
    return (
        <div className={"HomeBody"}>
            <Seperator />
            <Success />
            <Seperator />
            <Divider my="sm" />

            <Blockquote cite={"– " + succ[current_lang][5]} icon={null}>
                <Text fs="italic">
                    {succ[current_lang][4]}
                </Text>
            </Blockquote>

            <FooterBody />
        </div>
    );
}


