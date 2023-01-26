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
    const toggleColorScheme = (value?: ColorScheme) => setColorScheme(value ||
        (colorScheme === 'dark' ? 'light' : 'dark'));

    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        // @ts-ignore
        let header = document.getElementById("Header");
        if (offset > 0) {
            // @ts-ignore
            header.classList.add("Header-fade-in");
            // @ts-ignore
            header.classList.remove("Header-fade-out");
        }
        if (offset == 0) {
            // @ts-ignore
            header.classList.add("Header-fade-out");
            // @ts-ignore
            header.classList.remove("Header-fade-in");
        }
        return () => window.removeEventListener('scroll', onScroll);
    }, [offset]);

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
                <Header />
                <LandingPage />
                <Body />
            </div>
        </MantineProvider>
    );
}