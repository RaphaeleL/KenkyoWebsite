import React from "react";
import {items} from "../../../Content/MenuContent";

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

    return (
        <ul>
            <li><a href={"/" + current_lang + "/home"}>{title1}</a></li>
            <li><a href={"/" + current_lang + "/training"}>{title2}</a></li>
            <li><a href={"/" + current_lang + "/vorstand"}>{title3}</a></li>
            <li><a href={"/" + current_lang + "/weiteres"}>{title4}</a></li>
            <li><a href={"/" + current_lang + "/news"}>{title5}</a></li>
        </ul>
    );
}