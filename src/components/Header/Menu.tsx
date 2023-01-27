import {useEffect, useState} from "react";
import {HiBars3} from "react-icons/hi2";
import {GrClose} from "@react-icons/all-files/gr/GrClose";
import {SimpleGrid} from "@mantine/core";
import Logo from "./Logo";
import LogoName from "./LogoName";

export default function Menu() {
    const [show, setShow] = useState(false);

    function toggle() {
        setShow(!show);
    }

    if (show) {
        return <MobileMenu toggle={toggle}/>;
    }

    if (window.innerWidth < 1100) {
        return <OpenButton toggle={toggle}/>
    } else {
        return <DesktopMenu />
    }

}

function DesktopMenu() {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        // @ts-ignore
        let header = document.getElementById("DesktopHeader");
        if (offset > 0) {
            // @ts-ignore
            header.classList.add("Header-fade-in");
            // @ts-ignore
            header.classList.remove("Header-fade-out");
        }
        if (offset === 0) {
            // @ts-ignore
            header.classList.add("Header-fade-out");
            // @ts-ignore
            header.classList.remove("Header-fade-in");
        }
        return () => window.removeEventListener('scroll', onScroll);
    }, [offset]);

    return (
        <div className={"DesktopHeader"} id={"DesktopHeader"}>
            <SimpleGrid cols={2} >
                <SimpleGrid cols={2} >
                    <Logo />
                    <LogoName />
                </SimpleGrid>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Training</a></li>
                    <li><a href="#">Vorstand</a></li>
                    <li><a href="#">Weitere Informationen</a></li>
                </ul>
            </SimpleGrid>


        </div>
    );
}

function OpenButton(props: any) {
    return (
        <HiBars3 size={50} className={"OpenMenu"} onClick={props.toggle} />
    );
}

function MobileMenu(props: any) {
    return (
        <div className={"Menu"} id="toggle" >
            <GrClose size={50}  className={"toggle"} onClick={props.toggle}/>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Training</a></li>
                <li><a href="#">Vorstand</a></li>
                <li><a href="#">Weitere Informationen</a></li>
            </ul>
        </div>
    );
}
