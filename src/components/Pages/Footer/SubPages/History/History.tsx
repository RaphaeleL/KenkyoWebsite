import React from "react";
import {Container} from "@mantine/core";
import MyTimeline from "./MyTimeline";
import IntroGojuRyu from "./IntroGojuRyu";
import IntroKenkyo from "./IntroKenkyo";

export default function History() {
    return(
        <Container>
            <IntroGojuRyu />
            <MyTimeline />
            <IntroKenkyo />
        </Container>
    );
}