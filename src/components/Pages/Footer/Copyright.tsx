import {Divider, Space} from "@mantine/core";
import {AiOutlineCopyrightCircle} from "@react-icons/all-files/ai/AiOutlineCopyrightCircle";
import React from "react";

export default function Copyright() {
    return (
        <>
            <Space h={"xl"} />
            <Divider my="sm" />
            <AiOutlineCopyrightCircle />
            &shy;
            Copyright by Karateverein Kenkyo Rheinzabern e.V.
            <Divider my="sm" />
        </>
    );
}