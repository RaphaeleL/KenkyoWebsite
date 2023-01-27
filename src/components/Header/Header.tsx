import Menu from "./Menu/Menu";

export default function Header(props: any) {
    return (
        <div className={"HeaderMobile"} id="HeaderMobile">
            <Menu
                toggle={props.toggle}
                show={props.show}
                lang={props.lang} />
        </div>
    );
}