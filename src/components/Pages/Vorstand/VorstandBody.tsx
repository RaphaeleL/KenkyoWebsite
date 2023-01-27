import FooterBody from "../Footer/FooterBody";
import React from "react";

export default function VorstandBody(props: any) {
    return (
        <div className={"VorstandBody"}>
            Vorstand
            <FooterBody
                toggleLang={props.toggleLang}
                currentLangString={props.currentLangString}/>
        </div>
    );
}