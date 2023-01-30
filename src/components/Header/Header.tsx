import React, {useEffect, useState} from "react";
import {Flex} from "@mantine/core";
import MenuItems from "./Menu/MenuItems";

export default function Header(props: any) {
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
            <Flex
                mih={50}
                gap="md"
                justify="center"
                align="center"
                direction="row"
                wrap="wrap"
            >
                <MenuItems />
            </Flex>
        </div>
    );
}
