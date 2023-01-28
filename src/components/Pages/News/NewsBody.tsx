import FooterBody from "../Footer/FooterBody";
import React from "react";
import Seperator from "../Home/Seperator";
import {Flex, Title, Text, Space} from "@mantine/core";
import FloatingElement from "../../FloatingElement/FloatingElement";
import MyTitle from "../../Utils/MyTitle";

function NewsBox(props: any) {
    return (
        <div className={"NewsBox"}>
            <div style={{ width: 240, marginLeft: 'auto', marginRight: 'auto' }}>
                <FloatingElement label={props.title} pic={props.url} size={"xl"} full_content={props.full_content}/>
                <Space h={"md"} />
                <Title order={2}>{props.title}</Title>
                <Text c="dimmed">
                    {props.text}
                </Text>
            </div>

        </div>
    );
}

export default function NewsBody() {
    let current_lang = window.location.href.split("/")[3];

    let pagetitle = "News";

    if (current_lang === "de") {
        pagetitle = "News";
    } else if (current_lang === "ja") {
        pagetitle = "ニュース";
    } else if (current_lang === "un") {
        pagetitle = "Hírek";
    }

    let image_url = "https://raw.githubusercontent.com/RaphaeleL/KenkyoWebsite/main/src/assets/LandingPage-1.jpeg";
    let title1 = "Titel"
    let text1 = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. "
    let fulltext1 = text1 + text1 + text1;

    return (
        <div className={"NewsBody"}>
            <Seperator />

            <MyTitle content={pagetitle} />

            <Flex
                mih={50}
                gap="md"
                justify="center"
                align="center"
                direction="row"
                wrap="wrap"
            >
                <NewsBox
                    url={image_url}
                    title={title1}
                    text={text1}
                    full_content={fulltext1}
                />
                <NewsBox
                    url={image_url}
                    title={title1}
                    text={text1}
                    full_content={fulltext1}
                />
                <NewsBox
                    url={image_url}
                    title={title1}
                    text={text1}
                    full_content={fulltext1}
                />
            </Flex>
            <FooterBody />
        </div>
    );
}