import {Space, Title} from "@mantine/core";
import React from "react";

export default function MyTitle(props: any) {
    return (
        <div>
            <Space h={"xl"} />
            <Title order={1}>{props.content}</Title>
            <Space h={"xl"} />
        </div>
    );
}