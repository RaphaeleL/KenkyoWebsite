import React from "react";
import {items} from "../../../Content/MenuContent";
import {Text} from "@mantine/core";

export default function MenuItems() {
    let current_lang = window.location.href.split("/")[3] as String;
    // @ts-ignore
    let title1 = items[current_lang][0];
    // @ts-ignore
    let title2 = items[current_lang][1];
    // @ts-ignore
    let title3 = items[current_lang][2];
    // @ts-ignore
    let title4 = items[current_lang][3];
    // @ts-ignore
    let title5 = items[current_lang][4];
//<Text td="line-through" c={"dimmed"}>{title1}</Text>
    return (
        <ul>
            <li>
                <a href={"/" + current_lang + "/home"}>
                    <Text>{title1}</Text>
                </a>
            </li>
            <li>
                <a href={"/" + current_lang + "/training"}>
                    <Text>{title2}</Text>
                </a>
            </li>
            <li>
                <a href={"/" + current_lang + "/vorstand"}>
                    <Text td="line-through" c={"dimmed"}>{title3}</Text>
                </a>
            </li>
            <li>
                <a href={"/" + current_lang + "/weiteres"}>
                    <Text td="line-through" c={"dimmed"}>{title4}</Text>
                </a>
            </li>
            <li>
                <a href={"/" + current_lang + "/news"}>
                    <Text>{title5}</Text>
                </a>
            </li>
        </ul>
    );
}