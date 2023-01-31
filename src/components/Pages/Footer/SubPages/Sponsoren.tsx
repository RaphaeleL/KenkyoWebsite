// @ts-nocheck
import MyContent from "../../../Utils/MyContent";
import {sponsor} from "../../../Content/FooterContent";

export default function Sponsoren() {
    let current_lang = window.location.href.split("/")[3] as String;
    return (
        <>
            <MyContent content={sponsor[current_lang][0]} />
            <MyContent content={<a href={"mailto: todo@todo.de"}>todo@todo.de</a>} />
            <MyContent content={sponsor[current_lang][1]} />
        </>
    );
}