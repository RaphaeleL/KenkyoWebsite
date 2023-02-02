import React from "react";
import Logo from "../Header/Logo";

export default function LandingPage(props: any) {
    let url = "";

    if (props.showHome) {
        url = "https://raw.githubusercontent.com/RaphaeleL/KenkyoWebsite/main/src/assets/LandingPage-5.jpeg";
    } else if (props.showTraining) {
        url = "https://raw.githubusercontent.com/RaphaeleL/KenkyoWebsite/main/src/assets/LandingPage-8.jpeg";
    } else if (props.showUeberUns) {
        url = "https://raw.githubusercontent.com/RaphaeleL/KenkyoWebsite/main/src/assets/LandingPage-1.jpeg";
    } else if (props.showTermine) {
        url = "https://raw.githubusercontent.com/RaphaeleL/KenkyoWebsite/main/src/assets/LandingPage-3.jpeg";
    } else if (props.showNews) {
        url = "https://raw.githubusercontent.com/RaphaeleL/KenkyoWebsite/main/src/assets/LandingPage-7.jpeg";
    }

    return (
        <div className={"LandingPage"}>
            <div className={"BackgroundImage"} style={{backgroundImage: `url(${url})`}} />

            <Logo />

        </div>
    );
}