import FooterBody from "../Footer/FooterBody";
import React from "react";
import Seperator from "../Home/Seperator";
import {Flex, Title, Text, Space} from "@mantine/core";
import FloatingElement from "../../FloatingElement/FloatingElement";
import {news1, news2,} from "./Content";

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

    return (
        <div className={"NewsBody"}>
            <Seperator />

            <Flex
                mih={50}
                gap="md"
                justify="center"
                align="center"
                direction="row"
                wrap="wrap"
            >
                <NewsBox
                    url={news1.image_url}
                    title={news1.de_title}
                    text={news1.de_text}
                    full_content={news1.de_fulltext}
                />
                <NewsBox
                    url={news2.image_url}
                    title={news2.de_title}
                    text={news2.de_text}
                    full_content={news2.de_fulltext}
                />
                <NewsBox
                    url={news1.image_url}
                    title={news1.de_title}
                    text={news1.de_text}
                    full_content={news1.de_fulltext}
                />
            </Flex>
            <FooterBody />
        </div>
    );
}