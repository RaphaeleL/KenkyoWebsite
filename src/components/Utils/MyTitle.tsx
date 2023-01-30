// @ts-nocheck
import {Title} from "@mantine/core";
import React from "react";

export default function MyTitle(props: any) {
    let order = 2;
    if (props.order) {
        order = props.order;
    }
    return (
        <div>
            <Title order={order}>{props.content}</Title>
        </div>
    );
}