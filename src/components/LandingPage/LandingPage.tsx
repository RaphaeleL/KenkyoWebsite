import {SlArrowDown} from "react-icons/sl";
import React from "react";
import Logo from "../Header/Logo";

export default function LandingPage() {
    let page = window.location.href.split("/")[4] as String;
    let url = "";

    if (page === "home") {
        url = "https://raw.githubusercontent.com/RaphaeleL/KenkyoWebsite/main/src/assets/LandingPage-5.jpeg";
    } else if (page === "training") {
        url = "https://raw.githubusercontent.com/RaphaeleL/KenkyoWebsite/main/src/assets/LandingPage-8.jpeg";
    } else if (page === "ueber-uns") {
        url = "https://raw.githubusercontent.com/RaphaeleL/KenkyoWebsite/main/src/assets/LandingPage-1.jpeg";
    } else if (page === "termine") {
        url = "https://raw.githubusercontent.com/RaphaeleL/KenkyoWebsite/main/src/assets/LandingPage-3.jpeg";
    } else if (page === "news") {
        url = "https://raw.githubusercontent.com/RaphaeleL/KenkyoWebsite/main/src/assets/LandingPage-7.jpeg";
    }

    return (
        <div className={"LandingPage"}>
            <div className={"BackgroundImage"} style={{backgroundImage: `url(${url})`}} />

            <Logo />

            <div  className={"scrollHint"} >
                <SlArrowDown size={40}/>
            </div>
        </div>
    );
}