// @ts-nocheck
import {Flex, Space, Text, Title} from "@mantine/core";
import React from "react";
import {footer} from "../../Content/FooterContent";

export default function Language() {

    function handle(lang: any) {
        let url = window.location.href;
        let current_lang = url.split("/")[3];
        if (current_lang !== lang) {
            let new_url = url.replace(current_lang, lang)
            window.location.replace(new_url);
        }
    }
    function handleGer() { handle("de") }
    function handleEng() { handle("en") }
    function handleJap() { handle("ja") }
    function handleUng() { handle("un") }
    let current_lang = window.location.href.split("/")[3] as String;

    return (
        <>
            <Space h={"xl"} />
            <Title order={4}>{footer[current_lang][0]}</Title>
            <Flex
                mih={50}
                gap="md"
                justify="center"
                align="center"
                direction="row"
                wrap="wrap"
            >
                <Text className={"languageChooser"} onClick={handleGer}>Deutsch</Text>
                <Text className={"languageChooser"} onClick={handleEng}>Englisch</Text>
                <Text className={"languageChooser"} onClick={handleJap}>やまと</Text>
                <Text className={"languageChooser"} onClick={handleUng}>Magyar</Text>
            </Flex>
        </>
    );
}