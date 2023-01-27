import Menu from "./Menu/Menu";

export default function Header(props: any) {
    return (
        <div className={"HeaderMobile"} id="HeaderMobile">
            <Menu currentLang={props.currentLang} setCurrentLang={props.setCurrentLang} />
        </div>
    );
}