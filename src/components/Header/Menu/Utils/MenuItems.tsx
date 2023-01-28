import React from "react";

export default function MenuItems() {
    let current_lang = window.location.href.split("/")[3];

    let home = "Home";
    let training = "Training";
    let vorstand = "Vorstand";
    let weiteres = "Weiteres";
    let news = "News";

    if (current_lang === "en") {
        home = "Home";
        training = "Training";
        vorstand = "Board of Directors";
        weiteres = "Further";
        news = "News";
    } else if (current_lang === "ja") {
        home = "ホーム";
        training = "トレーニング";
        vorstand = "取締役会";
        weiteres = "さらに";
        news = "ニュース";
    } else if (current_lang === "un") {
        home = "Home";
        training = "Kepzes";
        vorstand = "Igazgatóság";
        weiteres = "További";
        news = "Hírek";
    }
    return (
        <ul>
            <li><a href={"/" + current_lang + "/home"}>{home}</a></li>
            <li><a href={"/" + current_lang + "/training"}>{training}</a></li>
            <li><a href={"/" + current_lang + "/vorstand"}>{vorstand}</a></li>
            <li><a href={"/" + current_lang + "/weiteres"}>{weiteres}</a></li>
            <li><a href={"/" + current_lang + "/news"}>{news}</a></li>
        </ul>
    );
}