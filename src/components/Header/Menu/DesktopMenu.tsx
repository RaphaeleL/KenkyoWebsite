import React, {useEffect, useState} from "react";
import {Container, Flex, SimpleGrid} from "@mantine/core";
import Logo from "../Logo";
import LogoName from "../LogoName";
import MenuItems from "./Utils/MenuItems";
import { Image } from '@mantine/core';
import {hideNotification, showNotification} from "@mantine/notifications";


export default function DesktopMenu(props: any) {
    const [offset, setOffset] = useState(0);
    const [currentLangString, setCurrentLangString] = useState("https://raw.githubusercontent.com/RaphaeleL/KenkyoWebsite/main/src/assets/GER.png");

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

    function toggleLang() {
        let ger = "https://raw.githubusercontent.com/RaphaeleL/KenkyoWebsite/main/src/assets/GER.png";
        let eng = "https://raw.githubusercontent.com/RaphaeleL/KenkyoWebsite/main/src/assets/ENG.png";
        let jap = "https://raw.githubusercontent.com/RaphaeleL/KenkyoWebsite/main/src/assets/JAP.png";
        let ung = "https://raw.githubusercontent.com/RaphaeleL/KenkyoWebsite/main/src/assets/UNG.png";

        props.setCurrentLang(props.currentLang + 1);

        if (props.currentLang === 2) {
            hideNotification("jap-banner");
            setCurrentLangString(ung);
        } else if (props.currentLang === 0) {
            hideNotification("jap-banner");
            setCurrentLangString(eng);
        } else if (props.currentLang === 1) {
            showNotification({
                className: 'jap-banner',
                id: 'jap-banner',
                title: "備考",
                disallowClose: false,
                color: 'red',
                autoClose: false,
                message:
                    <div>
                        <Container>
                            また、日本語の翻訳が一部間違っている可能性があります。ぜひ教えてください。
                        </Container>
                    </div>,
            });
            setCurrentLangString(jap);
        } else if (props.currentLang === 3) {
            props.setCurrentLang(0);
            hideNotification("jap-banner");
            setCurrentLangString(ger);
        }
    }

    return (
        <div className={"DesktopHeader"} id={"DesktopHeader"}>
            <Flex
                mih={50}
                bg="rgba(0, 0, 0, .3)"
                gap="md"
                justify="center"
                align="center"
                direction="row"
                wrap="wrap"
            >
                <SimpleGrid cols={2} >
                    <SimpleGrid cols={2} >
                        <Logo />
                        <LogoName />
                    </SimpleGrid>
                    <MenuItems />
                </SimpleGrid>
                <div className={"Language"}>
                    <Image
                        onClick={toggleLang}
                        className={"Language"}
                        radius="md"
                        src={currentLangString}
                        alt="Flag"
                    />
                </div>
            </Flex>
        </div>
    );
}
