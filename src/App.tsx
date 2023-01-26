import React from 'react';
import './App.scss';
import {ColorScheme, MantineProvider} from "@mantine/core";
import {useLocalStorage} from "@mantine/hooks";
import Colorscheme from "./components/Colorscheme/Colorscheme";
import LandingPage from "./components/LandingPage";

export default function App() {

    const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
        key: 'mantine-color-scheme',
        defaultValue: "light",
        getInitialValueInEffect: true,
    });
    const toggleColorScheme = (value?: ColorScheme) => setColorScheme(value ||
        (colorScheme === 'dark' ? 'light' : 'dark'));

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
                <Colorscheme colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}/>
                <LandingPage />
            </div>
        </MantineProvider>
    );
}