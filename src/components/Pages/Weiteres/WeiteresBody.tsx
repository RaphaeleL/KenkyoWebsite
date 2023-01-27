import FooterBody from "../Footer/FooterBody";
import React from "react";

export default function WeiteresBody(props: any) {
    return (
        <div className={"WeiteresBody"}>
            Weitere Informationen
            <FooterBody
                toggleLang={props.toggleLang}
                currentLangString={props.currentLangString}/>
        </div>
    );
}