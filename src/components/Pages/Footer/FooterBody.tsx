import {Container, Divider, SimpleGrid, Text} from "@mantine/core";
import React from "react";

export default function FooterBody() {

    function handle(lang: any) {
        let url = window.location.href;
        let current_lang = url.split("/")[3];
        let new_url = url.replace(current_lang, lang)
        window.location.replace(new_url);
    }
    function handleGer() { handle("de") }
    function handleEng() { handle("en") }
    function handleJap() { handle("ja") }
    function handleUng() { handle("un") }

    return (
        <div className={"Footer"}>
            <Divider my="sm" />
            <Container>
                <SimpleGrid cols={3}>
                    <Text className={"languageChooser"} onClick={handleGer}>Deutsch</Text>
                    <Text className={"languageChooser"} onClick={handleEng}>Englisch</Text>
                    <Text className={"languageChooser"} onClick={handleJap}>やまと</Text>
                    <Text className={"languageChooser"} onClick={handleUng}>Magyar</Text>
                </SimpleGrid>
            </Container>
        </div>
    );
}