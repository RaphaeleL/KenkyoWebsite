import FooterBody from "../Footer/FooterBody";
import React from "react";
import Seperator from "../Home/Seperator";
import {Flex, Title, Text, Space, Container} from "@mantine/core";
import FloatingElement from "../../FloatingElement/FloatingElement";
import {news1, news2} from "../../Content/NewsContent";

function NewsBox(props: any) {
    let current_lang = window.location.href.split("/")[3] as String;
    // @ts-ignore
    let title = props.news_id[current_lang][1];
    // @ts-ignore
    let text = props.news_id[current_lang][2];
    // @ts-ignore
    let url = props.news_id[current_lang][0];
    // @ts-ignore
    let full_content = props.news_id[current_lang][3];

    return (
        <div className={"NewsBox"}>
            <div style={{ width: 240, marginLeft: 'auto', marginRight: 'auto' }}>
                <FloatingElement label={title} pic={url} size={"xl"} full_content={full_content}/>
                <Space h={"md"} />
                <Title order={2}>{title}</Title>
                <Text c="dimmed">
                    {text}
                </Text>
            </div>

        </div>
    );
}

export default function NewsBody() {

    return (
        <div className={"NewsBody"}>
            <Seperator />
            <Container>
                <Flex
                    mih={50}
                    gap="xl"
                    justify="center"
                    align="center"
                    direction="row"
                    wrap="wrap"
                >
                    <NewsBox news_id={news1} />
                    <NewsBox news_id={news2} />
                    <NewsBox news_id={news1} />
                    <NewsBox news_id={news2} />
                    <NewsBox news_id={news1} />
                    <NewsBox news_id={news2} />
                    <NewsBox news_id={news1} />
                    <NewsBox news_id={news2} />
                    <NewsBox news_id={news1} />
                </Flex>
            </Container>
            <FooterBody />
        </div>
    );
}