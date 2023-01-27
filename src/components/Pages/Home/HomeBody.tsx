import Seperator from "./Seperator";
import Success from "./Success";
import React from "react";
import FooterBody from "../Footer/FooterBody";

export default function HomeBody(props: any) {
    return (
        <div className={"HomeBody"}>
            <Seperator />
            <Success
                lang={props.lang} />
            <FooterBody
                lang={props.lang} />
        </div>
    );
}


