import {useEffect, useState} from "react";
import MobileMenu from "./MobileMenu";
import OpenButton from "./Utils/OpenButton";
import DesktopMenu from "./DesktopMenu";
export default function Menu() {
    const [show, setShow] = useState(false);

    function toggle() {
        setShow(!show);
    }

    if (show) {
        return <MobileMenu toggle={toggle}/>;
    }

    if (window.innerWidth < 1100) {
        return <OpenButton toggle={toggle} />
    } else {
        return <DesktopMenu />
    }
}
