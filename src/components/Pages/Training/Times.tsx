// @ts-nocheck
import MyTitle from "../../Utils/MyTitle";
import {times} from "../../Content/TrainerContent";
import {Container, Space, Text} from "@mantine/core";
import MyContent from "../../Utils/MyContent";
import React from "react";

export default function Times() {
    let current_lang = window.location.href.split("/")[3] as String;
    return (
        <Container>
            <MyTitle content={times[current_lang][0]} />
            <Space h="xl" />
            <MyContent content={times[current_lang][1]} />
            <MyContent content={<Text fs="italic">{times[current_lang][2]}</Text>}/>
            <MyContent content={<Text fs="italic">{times[current_lang][3]}</Text>}/>
            <MyContent content={<Text fs="italic">{times[current_lang][4]}</Text>}/>
            <MyContent content={<Text c="dimmed" td="line-through" fs="italic">{times[current_lang][5]}</Text>}/>
        </Container>
    );
}