// @ts-nocheck
import React from "react";
import {items} from "../Content/MenuContent";
import {Text} from "@mantine/core";
import NoPage from "../Pages/NoPage";

export default function MenuItems() {
    let current_lang = window.location.href.split("/")[3] as String;

    if (current_lang.length === 2) {
        return (
            <ul>
                <li>
                    <a href={"/" + current_lang + "/home"}>
                        <Text>{items[current_lang][0]}</Text>
                    </a>
                </li>
                <li>
                    <a href={"/" + current_lang + "/training"}>
                        <Text>{items[current_lang][1]}</Text>
                    </a>
                </li>
                <li>
                    <a href={"/" + current_lang + "/ueber-uns"}>
                        <Text>{items[current_lang][2]}</Text>
                    </a>
                </li>
                <li>
                    <a href={"/" + current_lang + "/termine"}>
                        <Text c={"dimmed"}>{items[current_lang][3]}</Text>
                    </a>
                </li>
                <li>
                    <a href={"/" + current_lang + "/news"}>
                        <Text>{items[current_lang][4]}</Text>
                    </a>
                </li>
            </ul>
        );
    }
    return (<NoPage />);

}