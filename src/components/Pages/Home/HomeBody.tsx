import Seperator from "./Seperator";
import Success from "./Success";
import React from "react";
import FooterBody from "../Footer/FooterBody";

export default function HomeBody() {
    return (
        <div className={"HomeBody"}>
            <Seperator />
            <Success />
            <FooterBody />
        </div>
    );
}


