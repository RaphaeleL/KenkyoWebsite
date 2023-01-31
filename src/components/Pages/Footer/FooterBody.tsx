// @ts-nocheck
import {Flex, Stack, Text, Title} from "@mantine/core";
import React from "react";
import {footer} from "../../Content/FooterContent";
import Copyright from "./Copyright";
import TextToPage from "../../FloatingElement/TextToPage";
import Verbaende from "./SubPages/Verbaende";
import Sponsoren from "./SubPages/Sponsoren";
import Imprint from "./SubPages/Imprint";
import Privacy from "./SubPages/Privacy";
import Seperator from "../Home/Seperator";
import Satzung from "./SubPages/Satzung";

export default function FooterBody() {
    let current_lang = window.location.href.split("/")[3] as String;

    return (
        <div className={"Footer"}>
            <Seperator />

            <Flex
                mih={50}
                gap="xl"
                justify="center"
                align="flex-start"
                direction="row"
                wrap="wrap"
            >
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
                    <Text c={"dimmed"}>{footer[current_lang][4]}</Text>
                </Stack>
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
                    <Text c={"dimmed"}><Satzung title={footer[current_lang][8]} /></Text>
                </Stack>
                <Stack>
                    <Title order={4}>{footer[current_lang][9]}</Title>
                    <Text c={"dimmed"}>{footer[current_lang][10]}</Text>
                    <Text c={"dimmed"}>{footer[current_lang][11]}</Text>
                    <Text c={"dimmed"}>{footer[current_lang][12]}</Text>
                </Stack>
                <Stack>
                    <Title order={4}>Rund ums Training</Title>
                    <Text c={"dimmed"}>Prüfungsprogramm</Text>
                    <Text c={"dimmed"}>Verhaltensregeln</Text>
                    <Text c={"dimmed"}>Geschichte</Text>
                    {/*<Text c={"dimmed"}>Begrifflichkeiten</Text>*/}
                </Stack>
                <Stack>
                    <Title order={4}>Downloads</Title>
                    <Text c={"dimmed"}>Anmeldung</Text>
                    <Text c={"dimmed"}>Kündigungsvorlage</Text>
                    <Text c={"dimmed"}>Datenschutzformular</Text>
                </Stack>
            </Flex>
            <Copyright />
        </div>
    );
}