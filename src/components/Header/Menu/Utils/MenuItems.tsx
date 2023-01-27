import React from "react";

export default function MenuItems() {
    let current_lang = window.location.href.split("/")[3];

    return (
        <ul>
            <li><a href={"/" + current_lang + "/home"}>Home</a></li>
            <li><a href={"/" + current_lang + "/training"}>Training</a></li>
            <li><a href={"/" + current_lang + "/vorstand"}>Vorstand</a></li>
            <li><a href={"/" + current_lang + "/weiteres"}>Weitere Informationen</a></li>
        </ul>
    );
}