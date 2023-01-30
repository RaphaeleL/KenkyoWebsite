import {AiOutlineCopyrightCircle} from "@react-icons/all-files/ai/AiOutlineCopyrightCircle";
import React from "react";
import Seperator from "../Home/Seperator";

export default function Copyright() {
    return (
        <>
            <Seperator />
            <AiOutlineCopyrightCircle />
            &shy;
            Copyright by Karateverein Kenkyo Rheinzabern e.V.
            <Seperator />
        </>
    );
}