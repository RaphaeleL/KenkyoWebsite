// @ts-nocheck
import {
    Title,
    Text,
    Badge,
    Button,
    Card,
    Flex,
    Group,
    Image,
    Blockquote,
    Space,
    ScrollArea,
} from "@mantine/core";
import React from "react";
import TextToPage from "../../FloatingElement/TextToPage";
import {personsContent} from "../../Content/PersonsContent";

function MyCard(props: any) {
    let current_lang = window.location.href.split("/")[3] as String;
    return (
        <Card shadow="sm" p="lg" radius="md" withBorder className={"MyCard"}>
            <Card.Section>
                <Image
                    height={600}
                    src={props.url}
                    alt={props.title}
                />
            </Card.Section>

            <Group position="apart" mt="md" mb="xs">
                <Title order={3} weight={500}>{props.title}</Title>
                <Group>
                    {props.grade && (
                        <Badge
                            variant="gradient"
                            gradient={{ from: props.color, to: props.color, deg: 0 }}
                        >
                            {props.grade}
                        </Badge>
                    )}
                    {props.title === "Zsolt Penderik" && (
                        <Badge
                            variant="gradient"
                            gradient={{ from: props.color, to: props.color, deg: 0 }}
                        >
                            Sensei
                        </Badge>
                    )}
                </Group>
            </Group>
            <Text ta="left" c="dimmed">{props.position}</Text>

            {props.quote && (
                <Blockquote>
                    <Text size="lg" color="dimmed">
                        {props.quote}
                    </Text>
                </Blockquote>
            )}

            <TextToPage
                className={"PersonInfoButton"}
                size="xl"
                openingText={
                    <Button
                        variant="gradient"
                        gradient={{ from: props.color, to: props.color, deg: 0 }}
                        fullWidth
                        mt="md"
                        radius="md"
                    >
                        {personsContent[current_lang][9]}
                    </Button>
                }
                title={<Title order={1}>{props.title}</Title>}
                content={
                    <ScrollArea style={{ height: 700 }}>
                        <Image
                            fit="contain"
                            radius="md"
                            src={props.url}
                            alt={props.title}
                        />
                        <Space h="xl" />
                        {props.fulltext}
                    </ScrollArea>
                } />
        </Card>
    );
}

export default function Persons() {
    let current_lang = window.location.href.split("/")[3] as String;
    return (
        <>
            <Flex
                mih={50}
                gap="xl"
                justify="center"
                align="flex-start"
                direction="row"
                wrap="wrap"
            >
                <MyCard
                    title={"Zsolt Penderik"}
                    color={"dark"}
                    grade={"5. Dan"}
                    position={personsContent[current_lang][0] + ", " + personsContent[current_lang][2] + ", " + personsContent[current_lang][3]}
                    quote={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."}
                    url={"https://raw.githubusercontent.com/RaphaeleL/KenkyoWebsite/main/src/assets/Zsolt.jpg"}
                    fulltext={"TODO"}
                />
                <MyCard
                    title={"Raphaele Salvatore  Licciardo"}
                    color={"dark"}
                    grade={"1. Dan"}
                    position={personsContent[current_lang][0] + ", " + personsContent[current_lang][10] + ", " + personsContent[current_lang][4]}
                    quote={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."}
                    url={"https://raw.githubusercontent.com/RaphaeleL/KenkyoWebsite/main/src/assets/Raphaele-2.jpg"}
                    fulltext={"TODO"}
                />
            </Flex>

            <Space h="xl" />

            <Flex
                mih={50}
                gap="xl"
                justify="center"
                align="flex-start"
                direction="row"
                wrap="wrap"
            >
                <MyCard
                    title={"Michael Kupper"}
                    color={"dark"}
                    grade={"1. Dan"}
                    position={personsContent[current_lang][0] + ", " + personsContent[current_lang][6] + ", (?)"}
                    quote={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."}
                    url={"https://raw.githubusercontent.com/RaphaeleL/KenkyoWebsite/main/src/assets/LandingPage-2.jpeg"}
                    fulltext={"TODO"}
                />
                <MyCard
                    title={"Dr. Evi Gleibs"}
                    color={"#6D4326"}
                    grade={"1. Kyu"}
                    position={personsContent[current_lang][1] + ", " + personsContent[current_lang][7] + ", (?)"}
                    quote={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."}
                    url={"https://raw.githubusercontent.com/RaphaeleL/KenkyoWebsite/main/src/assets/LandingPage-4.jpeg"}
                    fulltext={"TODO"}
                />
                <MyCard
                    title={"Monika Penderik"}
                    color={"dark"}
                    grade={"1. Dan"}
                    position={personsContent[current_lang][1] + ", " + personsContent[current_lang][5]}
                    quote={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."}
                    url={"https://raw.githubusercontent.com/RaphaeleL/KenkyoWebsite/main/src/assets/LandingPage-7.jpeg"}
                    fulltext={personsContent[current_lang][11]}
                />
                <MyCard
                    title={"Darja"}
                    color={"#6D4326"}
                    grade={"1. Kyu"}
                    position={personsContent[current_lang][1]}
                    quote={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."}
                    url={"https://raw.githubusercontent.com/RaphaeleL/KenkyoWebsite/main/src/assets/LandingPage-9.jpeg"}
                    fulltext={"TODO"}
                />

                <MyCard
                    title={"Maria Licciardo"}
                    color={"grape"}
                    position={personsContent[current_lang][1] + ", " + personsContent[current_lang][8]}
                    quote={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."}
                    url={"https://raw.githubusercontent.com/RaphaeleL/KenkyoWebsite/main/src/assets/LandingPage-3.jpeg"}
                    fulltext={"TODO"}
                />
            </Flex>
        </>
    );
}
