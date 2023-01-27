import {Space, Text} from "@mantine/core";
import React from "react";

export default function MyContent(props: any) {
    return (
        <div>
            {!props.dimmed && (
                <Text fz="md">
                    {props.content}
                </Text>
            )}
            {props.dimmed && (
                <Text c="dimmed" fz="md">
                    {props.content}
                </Text>
            )}
            <Space h="md" />
        </div>
    );
}