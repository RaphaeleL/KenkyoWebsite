import {useEffect, useState} from "react";
import {SimpleGrid} from "@mantine/core";
import Logo from "../Logo";
import LogoName from "../LogoName";
import MenuItems from "./Utils/MenuItems";

export default function DesktopMenu() {
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
                <MenuItems />
            </SimpleGrid>
        </div>
    );
}