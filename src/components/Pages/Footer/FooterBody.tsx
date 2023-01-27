import {Container, Divider, Image} from "@mantine/core";
import React from "react";

export default function FooterBody(props: any) {
    return (
        <div className={"Footer"}>
            <Divider my="sm" />
            <Container>
                <Image
                    onClick={props.toggleLang}
                    className={"Language"}
                    width={"8vw"}
                    radius="md"
                    src={props.currentLangString}
                    alt="Flag"
                />
            </Container>
        </div>
    );
}