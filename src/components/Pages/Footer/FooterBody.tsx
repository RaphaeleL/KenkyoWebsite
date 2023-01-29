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
    // @ts-ignore
    let title1 = footer[current_lang][0];
    // @ts-ignore
    let title2 = footer[current_lang][1];
    // @ts-ignore
    let title3 = footer[current_lang][2];
    // @ts-ignore
    let title4 = footer[current_lang][3];
    // @ts-ignore
    let title5 = footer[current_lang][4];
    // @ts-ignore
    let title6 = footer[current_lang][5];
    // @ts-ignore
    let title7 = footer[current_lang][6];
    // @ts-ignore
    let title8 = footer[current_lang][7];
    // @ts-ignore
    let title9 = footer[current_lang][8];
    // @ts-ignore
    let title10 = footer[current_lang][9];
    // @ts-ignore
    let title11 = footer[current_lang][10];
    // @ts-ignore
    let title12 = footer[current_lang][11];
    // @ts-ignore
    let title13 = footer[current_lang][12];

    return (
        <>
            <Space h={"xl"} />

            <div className={"Footer"}>

                <Divider my="sm" />
                <Space h={"xl"} />
                <Grid grow>
                    <Grid.Col span="auto">
                        <Stack>
                            <Title order={4}>{title1}</Title>
                            <Text className={"languageChooser"} onClick={handleGer}>Deutsch</Text>
                            <Text className={"languageChooser"} onClick={handleEng}>Englisch</Text>
                            <Text className={"languageChooser"} onClick={handleJap}>やまと</Text>
                            <Text className={"languageChooser"} onClick={handleUng}>Magyar</Text>
                        </Stack>
                    </Grid.Col>
                    <Grid.Col span="auto">
                        <Stack>
                            <Title order={4}>{title2}</Title>
                            <TextToPage
                                size="xl"
                                openingText={title3}
                                title={<Title order={1}>{title3}</Title>}
                                content={<Imprint />} />
                            <TextToPage
                                size="xl"
                                openingText={title4 + " (wip)"}
                                title={<Title order={1}>{title4}</Title>}
                                content={<Privacy />} />
                            <Text td="line-through" c={"dimmed"}>{title5}</Text>
                        </Stack>
                    </Grid.Col>
                    <Grid.Col span="auto">
                        <Stack>
                            <Title order={4}>{title6}</Title>
                            <TextToPage
                                size="xl"
                                openingText={title7}
                                title={<Title order={1}>{title7}</Title>}
                                content={<Verbaende />}
                            />
                            <TextToPage
                                size="xl"
                                openingText={title8}
                                title={<Title order={1}>{title8}</Title>}
                                content={<Sponsoren />}
                            />
                            <Text td="line-through" c={"dimmed"}>{title9}</Text>
                        </Stack>
                    </Grid.Col>
                    <Grid.Col span="auto">
                        <Stack>
                            <Title order={4}>{title10}</Title>
                            <Text td="line-through" c={"dimmed"}>{title11}</Text>
                            <Text td="line-through" c={"dimmed"}>{title12}</Text>
                            <Text td="line-through" c={"dimmed"}>{title13}</Text>
                        </Stack>
                    </Grid.Col>
                </Grid>

                <Copyright />
            </div>
        </>
    );
}