// @ts-nocheck
import {Divider, Grid, Space, Stack, Text, Title} from "@mantine/core";
import React from "react";
import {footer} from "../../Content/FooterContent";
import Copyright from "./Copyright";
import TextToPage from "../../FloatingElement/TextToPage";
import Verbaende from "./Verbaende";
import Sponsoren from "./Sponsoren";
import Imprint from "./Imprint";
import Privacy from "./Privacy";

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

    let current_lang = window.location.href.split("/")[3] as String;

    return (
        <div className={"Footer"}>

            <Divider my="sm" />
            <Space h={"xl"} />
            <Grid grow>
                <Grid.Col span="auto">
                    <Stack>
                        <Title order={4}>{footer[current_lang][0]}</Title>
                        <Text className={"languageChooser"} onClick={handleGer}>Deutsch</Text>
                        <Text className={"languageChooser"} onClick={handleEng}>Englisch</Text>
                        <Text className={"languageChooser"} onClick={handleJap}>やまと</Text>
                        <Text className={"languageChooser"} onClick={handleUng}>Magyar</Text>
                    </Stack>
                </Grid.Col>
                <Grid.Col span="auto">
                    <Stack>
                        <Title order={4}>{footer[current_lang][1]}</Title>
                        <TextToPage
                            size="xl"
                            openingText={footer[current_lang][2]}
                            title={<Title order={1}>{footer[current_lang][2]}</Title>}
                            content={<Imprint />} />
                        <TextToPage
                            size="xl"
                            openingText={footer[current_lang][3]}
                            title={<Title order={1}>{footer[current_lang][3]}</Title>}
                            content={<Privacy />} />
                        <Text td="line-through" c={"dimmed"}>{footer[current_lang][4]}</Text>
                    </Stack>
                </Grid.Col>
                <Grid.Col span="auto">
                    <Stack>
                        <Title order={4}>{footer[current_lang][5]}</Title>
                        <TextToPage
                            size="xl"
                            openingText={footer[current_lang][6]}
                            title={<Title order={1}>{footer[current_lang][6]}</Title>}
                            content={<Verbaende />}
                        />
                        <TextToPage
                            size="xl"
                            openingText={footer[current_lang][7]}
                            title={<Title order={1}>{footer[current_lang][7]}</Title>}
                            content={<Sponsoren />}
                        />
                        <Text td="line-through" c={"dimmed"}>{footer[current_lang][8]}</Text>
                    </Stack>
                </Grid.Col>
                <Grid.Col span="auto">
                    <Stack>
                        <Title order={4}>{footer[current_lang][9]}</Title>
                        <Text td="line-through" c={"dimmed"}>{footer[current_lang][10]}</Text>
                        <Text td="line-through" c={"dimmed"}>{footer[current_lang][11]}</Text>
                        <Text td="line-through" c={"dimmed"}>{footer[current_lang][12]}</Text>
                    </Stack>
                </Grid.Col>
            </Grid>

            <Copyright />
        </div>
    );
}