import React, {useState} from 'react';
import './App.scss';
import {Container, MantineProvider} from "@mantine/core";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import Trainer from "./components/Pages/Trainer";
import Vorstand from "./components/Pages/Vorstand";
import Weiteres from "./components/Pages/Weiteres";
import NoPage from "./components/Pages/NoPage";
import {hideNotification, NotificationsProvider, showNotification} from "@mantine/notifications";

export default function App() {
    const [currentLang, setCurrentLang] = useState(0);
    const [currentLangString, setCurrentLangString] = useState("https://raw.githubusercontent.com/RaphaeleL/KenkyoWebsite/main/src/assets/GER.png");
    const [show, setShow] = useState(false);

    function toggleLang() {
        let ger = "https://raw.githubusercontent.com/RaphaeleL/KenkyoWebsite/main/src/assets/GER.png";
        let eng = "https://raw.githubusercontent.com/RaphaeleL/KenkyoWebsite/main/src/assets/ENG.png";
        let jap = "https://raw.githubusercontent.com/RaphaeleL/KenkyoWebsite/main/src/assets/JAP.png";
        let ung = "https://raw.githubusercontent.com/RaphaeleL/KenkyoWebsite/main/src/assets/UNG.png";

        setCurrentLang(currentLang + 1);

        if (currentLang === 2) {
            hideNotification("jap-banner");
            setCurrentLangString(ung);
        } else if (currentLang === 0) {
            hideNotification("jap-banner");
            setCurrentLangString(eng);
        } else if (currentLang === 1) {
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
        } else if (currentLang === 3) {
            setCurrentLang(0);
            hideNotification("jap-banner");
            setCurrentLangString(ger);
        }
    }

    function toggle() {
        setShow(!show);
    }

    return (
        <MantineProvider
            withGlobalStyles
            withNormalizeCSS
        >
            <NotificationsProvider>
                <div className="App">
                    <BrowserRouter>
                        <Routes>
                            <Route path="/">
                                <Route index path="/" element={
                                    <Home
                                        show={show}
                                        toggle={toggle}
                                        toggleLang={toggleLang}
                                        currentLangString={currentLangString}
                                        currentLang={currentLang}
                                        setCurrentLang={setCurrentLang} />
                                } />
                                <Route path="/training" element={
                                    <Trainer
                                        show={show}
                                        toggle={toggle}
                                        toggleLang={toggleLang}
                                        currentLangString={currentLangString}
                                        currentLang={currentLang}
                                        setCurrentLang={setCurrentLang} />
                                } />
                                <Route path="/vorstand" element={
                                    <Vorstand
                                        show={show}
                                        toggle={toggle}
                                        toggleLang={toggleLang}
                                        currentLangString={currentLangString}
                                        currentLang={currentLang}
                                        setCurrentLang={setCurrentLang}/>
                                } />
                                <Route path="/weiteres" element={
                                    <Weiteres
                                        show={show}
                                        toggle={toggle}
                                        toggleLang={toggleLang}
                                        currentLangString={currentLangString}
                                        currentLang={currentLang}
                                        setCurrentLang={setCurrentLang} />
                                } />
                                <Route path="*" element={
                                    <NoPage />
                                } />
                            </Route>
                        </Routes>
                    </BrowserRouter>
                </div>
            </NotificationsProvider>
        </MantineProvider>
    );
}
