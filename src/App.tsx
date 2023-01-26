import React from 'react';
import './App.scss';
import {ColorScheme, MantineProvider} from "@mantine/core";
import {useLocalStorage} from "@mantine/hooks";
import LandingPage from "./components/LandingPage/LandingPage";
import Body from "./components/Body/Body";

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
                {/*<Colorscheme colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}/>*/}
                <LandingPage />
                <Body />
            </div>
        </MantineProvider>
    );
}