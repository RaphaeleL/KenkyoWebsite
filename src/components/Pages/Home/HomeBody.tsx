import Seperator from "./Seperator";
import Success from "./Success";
import React from "react";

export default function HomeBody(props: any) {
    return (
        <div className={"HomeBody"}>
            <Seperator />
            <Success currentLang={props.currentLang}/>
        </div>
    );
}


