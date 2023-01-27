import {Space, Text} from "@mantine/core";
import React from "react";

export default function MyTitle(props: any) {
    return (
        <div>
            <Text fw={700} fz="md">{props.content}</Text>
            <Space h="xs" />
        </div>
    );
}