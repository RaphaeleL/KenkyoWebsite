import React from 'react';
import './App.scss';
import {MantineProvider} from "@mantine/core";
import LandingPage from "./components/LandingPage/LandingPage";
import Body from "./components/Body/Body";
import Header from "./components/Header/Header";

export default function App() {
    return (
        <MantineProvider
            withGlobalStyles
            withNormalizeCSS
        >
            <div className="App">
                <Header />
                <LandingPage />
                <Body />
            </div>
        </MantineProvider>
    );
}