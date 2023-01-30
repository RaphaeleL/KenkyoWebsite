// @ts-nocheck
import {Divider, Flex, Space, Stack, Text, Title} from "@mantine/core";
import React from "react";
import {footer} from "../../Content/FooterContent";
import Copyright from "./Copyright";
import TextToPage from "../../FloatingElement/TextToPage";
import Verbaende from "./Verbaende";
import Sponsoren from "./Sponsoren";
import Imprint from "./Imprint";
import Privacy from "./Privacy";
import Language from "./Language";

export default function FooterBody() {
    let current_lang = window.location.href.split("/")[3] as String;

    return (
        <div className={"Footer"}>
            <Divider my="sm" />
            <Space h={"xl"} />

            <Flex
                mih={50}
                gap="xl"
                justify="center"
                align="center"
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
                    <Text td="line-through" c={"dimmed"}>{footer[current_lang][4]}</Text>
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
                    <Text td="line-through" c={"dimmed"}>{footer[current_lang][8]}</Text>
                </Stack>
                <Stack>
                    <Title order={4}>{footer[current_lang][9]}</Title>
                    <Text td="line-through" c={"dimmed"}>{footer[current_lang][10]}</Text>
                    <Text td="line-through" c={"dimmed"}>{footer[current_lang][11]}</Text>
                    <Text td="line-through" c={"dimmed"}>{footer[current_lang][12]}</Text>
                </Stack>
            </Flex>
            <Language />
            <Copyright />
        </div>
    );
}