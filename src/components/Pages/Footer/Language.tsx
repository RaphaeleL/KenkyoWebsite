// @ts-nocheck
import {Image} from "@mantine/core";
import React from "react";

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

    return (
        <>
            <div onClick={handleJap} style={{cursor: "pointer", width: 50, position: "fixed", bottom: 0, margin: 10}}>
                <Image
                    radius={"md"}
                    src={"https://raw.githubusercontent.com/RaphaeleL/KenkyoWebsite/main/src/assets/JAP.png"}
                />
            </div>
            <div onClick={handleUng} style={{cursor: "pointer", width: 50, position: "fixed", bottom: 40, margin: 10}}>
                <Image
                    radius={"md"}
                    src={"https://raw.githubusercontent.com/RaphaeleL/KenkyoWebsite/main/src/assets/UNG.png"}
                />
            </div>
            <div onClick={handleEng} style={{cursor: "pointer", width: 50, position: "fixed", bottom: 80, margin: 10}}>
                <Image
                    radius={"md"}
                    src={"https://raw.githubusercontent.com/RaphaeleL/KenkyoWebsite/main/src/assets/ENG.png"}
                />
            </div>
            <div onClick={handleGer} style={{cursor: "pointer", width: 50, position: "fixed", bottom: 120, margin: 10}}>
                <Image
                    radius={"md"}
                    src={"https://raw.githubusercontent.com/RaphaeleL/KenkyoWebsite/main/src/assets/GER.png"}
                />
            </div>
        </>
        /*<>
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
        </>*/
    );
}