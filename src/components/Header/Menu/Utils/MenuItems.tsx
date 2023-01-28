import React from "react";
import {items} from "./Content";

export default function MenuItems() {
    let current_lang = window.location.href.split("/")[3];

    let title1 = items.de.home;
    let title2 = items.de.training;
    let title3 = items.de.vorstand;
    let title4 = items.de.weiteres;
    let title5 = items.de.news;

    if (current_lang === "en") {
        title1 = items.en.home;
        title2 = items.en.training;
        title3 = items.en.vorstand;
        title4 = items.en.weiteres;
        title5 = items.en.news;
    } else if (current_lang === "ja") {
        title1 = items.ja.home;
        title2 = items.ja.training;
        title3 = items.ja.vorstand;
        title4 = items.ja.weiteres;
        title5 = items.ja.news;
    } else if (current_lang === "un") {
        title1 = items.un.home;
        title2 = items.un.training;
        title3 = items.un.vorstand;
        title4 = items.un.weiteres;
        title5 = items.un.news;
    }

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