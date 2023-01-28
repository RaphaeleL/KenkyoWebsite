import FooterBody from "../Footer/FooterBody";
import React from "react";
import Seperator from "../Home/Seperator";
import {Flex, Space, Divider} from "@mantine/core";
import FloatingElement from "../../FloatingElement/FloatingElement";
import {news1, news2} from "../../Content/NewsContent";
import MyTitle from "../../Utils/MyTitle";
import MyContent from "../../Utils/MyContent";

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
            <div style={{ width: 400, marginLeft: 'auto', marginRight: 'auto' }}>
                <FloatingElement label={title} pic={url} size={"xl"} full_content={full_content}/>
                <Space h={"md"} />
                <MyTitle content={title} />
                <MyContent content={text} />
            </div>
            <Divider />
            <Space h={"xl"} />
        </div>
    );
}

export default function NewsBody() {

    return (
        <div className={"NewsBody"}>
            <Seperator />
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
            <FooterBody />
        </div>
    );
}