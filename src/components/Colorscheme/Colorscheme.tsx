import {Affix, ColorSchemeProvider} from "@mantine/core";
import ThemeSwitcher from "./ThemeSwitcher";
import React from "react";

export default function Colorscheme(props: any) {
    return (
        <Affix position={{ bottom: 20, right: 20 }}>
            <ColorSchemeProvider colorScheme={props.colorScheme} toggleColorScheme={props.toggleColorScheme}>
                <ThemeSwitcher />
            </ColorSchemeProvider>
        </Affix>
    );
}