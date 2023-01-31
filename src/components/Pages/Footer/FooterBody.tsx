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
import Begrifflichkeiten from "./SubPages/Begrifflichkeiten";
import Pruefungsordnung from "./SubPages/Pruefungsordnung";
import Wettkampfregeln from "./SubPages/Wettkampfregeln";
import Kontakt from "./SubPages/Kontakt";
import History from "./SubPages/History/History";

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
                    <TextToPage
                        size="xl"
                        openingText={footer[current_lang][4]}
                        title={<Title order={1}>{footer[current_lang][4]}</Title>}
                        content={<Kontakt />} />
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
                </Stack>
                <Stack>
                    <Title order={4}>{footer[current_lang][18]}</Title>
                    <TextToPage
                        size="xl"
                        openingText={footer[current_lang][9]}
                        title={<Title order={1}>{footer[current_lang][9]}</Title>}
                        content={<Begrifflichkeiten />}
                    />
                    <Text c={"dimmed"}>{footer[current_lang][10]}</Text>
                    <TextToPage
                        size="xl"
                        openingText={footer[current_lang][11]}
                        title={<Title order={1}>{footer[current_lang][11]}</Title>}
                        content={<History />} />
                </Stack>
                <Stack>
                    <Title order={4}>{footer[current_lang][16]}</Title>
                    <Flex
                        mih={50}
                        gap="md"
                        justify="center"
                        align="flex-start"
                        direction="row"
                        wrap="wrap"
                    >
                        <Stack>
                            <Text c={"dimmed"}>{footer[current_lang][12]}</Text>
                            <Text c={"dimmed"}>{footer[current_lang][13]}</Text>
                            <Text c={"dimmed"}>{footer[current_lang][14]}</Text>
                        </Stack>
                        <Stack>
                            <Pruefungsordnung title={footer[current_lang][15]} />
                            <Wettkampfregeln title={footer[current_lang][17]} />
                            <Satzung title={footer[current_lang][8]} />
                        </Stack>
                    </Flex>
                </Stack>
            </Flex>
            <Copyright />
        </div>
    );
}