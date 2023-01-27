import Menu from "./Menu/Menu";

export default function Header(props: any) {
    return (
        <div className={"HeaderMobile"} id="HeaderMobile">
            <Menu
                show={props.show}
                toggle={props.toggle}
                toggleLang={props.toggleLang}
                currentLangString={props.currentLangString}
                currentLang={props.currentLang}
                setCurrentLang={props.setCurrentLang} />
        </div>
    );
}