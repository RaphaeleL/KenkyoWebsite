import React from "react";
import MobileMenu from "./MobileMenu";
import OpenButton from "./Utils/OpenButton";
import DesktopMenu from "./DesktopMenu";
export default function Menu(props: any) {
    if (props.show) {
        return <MobileMenu
            toggle={props.toggle}
            lang={props.lang}
            show={props.show} />;
    }

    if (window.innerWidth < 1100) {
        return <OpenButton toggle={props.toggle} />
    } else {
        return <DesktopMenu
            lang={props.lang} />
    }
}

