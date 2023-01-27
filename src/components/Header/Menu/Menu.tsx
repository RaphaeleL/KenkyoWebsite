import React from "react";
import MobileMenu from "./MobileMenu";
import OpenButton from "./Utils/OpenButton";
import DesktopMenu from "./DesktopMenu";
export default function Menu(props: any) {

    if (props.show) {
        return <MobileMenu
            show={props.show}
            toggle={props.toggle}
            toggleLang={props.toggleLang}
            currentLangString={props.currentLangString}
            currentLang={props.currentLang}
            setCurrentLang={props.setCurrentLang} />;
    }

    if (window.innerWidth < 1100) {
        return <OpenButton toggle={props.toggle} />
    } else {
        return <DesktopMenu
            toggleLang={props.toggleLang}
            currentLangString={props.currentLangString}
            currentLang={props.currentLang}
            setCurrentLang={props.setCurrentLang} />
    }
}

