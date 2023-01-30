import {GrClose} from "@react-icons/all-files/gr/GrClose";
import MenuItems from "./Utils/MenuItems";
import React from "react";
import Logo from "../Logo";

export default function MobileMenu(props: any) {

    return (
        <div className={"Menu"} id="toggle" >
            <GrClose size={50}  className={"toggle"} onClick={props.toggle}/>
            <MenuItems />
            <div className={"MobileLogo"}>
                <Logo />
            </div>
        </div>
    );
}
