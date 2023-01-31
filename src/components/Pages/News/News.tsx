// @ts-nocheck
import FooterBody from "../Footer/FooterBody";
import React from "react";
import Seperator from "../Home/Seperator";
import {Flex, Space, Divider} from "@mantine/core";
import PictureToPicture from "../../FloatingElement/PictureToPicture";
import {news1, news2} from "../../Content/NewsContent";
import MyTitle from "../../Utils/MyTitle";
import MyContent from "../../Utils/MyContent";
import {items} from "../../Content/MenuContent";
import Header from "../../Header/Header";
import LandingPage from "../../LandingPage/LandingPage";

function NewsBox(props: any) {
    let current_lang = window.location.href.split("/")[3] as String;

    return (
        <div className={"NewsBox"}>
            <div style={{ width: 400, marginLeft: 'auto', marginRight: 'auto' }}>
                <PictureToPicture label={props.news_id[current_lang][1]} pic={props.news_id[current_lang][0]} size={"xl"} full_content={props.news_id[current_lang][3]}/>
                <Space h={"md"} />
                <MyTitle content={props.news_id[current_lang][1]} />
                <MyContent content={props.news_id[current_lang][2]} />
            </div>
            <Divider />
            <Space h={"xl"} />
        </div>
    );
}

export default function News() {
    let current_lang = window.location.href.split("/")[3] as String;

    return (
        <>
            <Header />
            <LandingPage />
            <div className={"NewsBody"}>
                <Space h={"xl"} />
                <MyTitle order={1} content={items[current_lang][4]} />
                
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
        </>
    );
}