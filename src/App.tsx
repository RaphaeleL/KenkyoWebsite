import React, {useEffect, useState} from 'react';
import './App.scss';
import {ColorScheme, MantineProvider} from "@mantine/core";
import {useLocalStorage} from "@mantine/hooks";
import LandingPage from "./components/LandingPage/LandingPage";
import Body from "./components/Body/Body";
import Header from "./components/Header/Header";

export default function App() {

    const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
        key: 'mantine-color-scheme',
        defaultValue: "light",
        getInitialValueInEffect: true,
    });

    return (
        <MantineProvider
            withGlobalStyles
            withNormalizeCSS
            theme={{
                colorScheme,
                loader: 'bars',
            }}
        >
            <div className="App">
                <Header />
                <LandingPage />
                <Body />
            </div>
        </MantineProvider>
    );
}