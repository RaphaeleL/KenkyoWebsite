import Seperator from "./Seperator";
import Success from "./Success";
import React from "react";
import FooterBody from "../Footer/FooterBody";

export default function HomeBody(props: any) {
    return (
        <div className={"HomeBody"}>
            <Seperator />
            <Success currentLang={props.currentLang}/>
            <FooterBody
                toggleLang={props.toggleLang}
                currentLangString={props.currentLangString}/>
        </div>
    );
}


