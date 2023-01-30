import React, {useState} from 'react';
import './App.scss';
import {MantineProvider} from "@mantine/core";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Home from "./components/Pages/Home";
import Trainer from "./components/Pages/Trainer";
import Vorstand from "./components/Pages/Vorstand";
import Weiteres from "./components/Pages/Weiteres";
import {NotificationsProvider} from "@mantine/notifications";
import News from "./components/Pages/News";

export default function App() {
    const [show, setShow] = useState(false);

    function toggle() {
        setShow(!show);
    }

    return (
        <MantineProvider
            withGlobalStyles
            withNormalizeCSS
        >
            <NotificationsProvider>
                <div className="App" id="App">
                    <BrowserRouter>
                        <Routes>
                            <Route path="/">
                                <Route path="/" element={
                                    <Navigate to="/de/home" />
                                }>
                                </Route>
                                {/* GERMAN */}
                                <Route index path="/de/home" element={
                                    <Home show={show} lang={"de"} toggle={toggle}/>
                                } />
                                <Route index path="/de/training" element={
                                    <Trainer show={show} lang={"de"} toggle={toggle}/>
                                } />
                                <Route index path="/de/vorstand" element={
                                    <Vorstand show={show} lang={"de"} toggle={toggle}/>
                                } />
                                <Route index path="/de/weiteres" element={
                                    <Weiteres show={show} lang={"de"} toggle={toggle}/>
                                } />
                                <Route index path="/de/news" element={
                                    <News show={show} lang={"de"} toggle={toggle}/>
                                } />
                                {/* ENGLISCH */}
                                <Route index path="/en/home" element={
                                    <Home show={show} lang={"en"} toggle={toggle}/>
                                } />
                                <Route index path="/en/training" element={
                                    <Trainer show={show} lang={"en"} toggle={toggle}/>
                                } />
                                <Route index path="/en/vorstand" element={
                                    <Vorstand show={show} lang={"de"} toggle={toggle}/>
                                } />
                                <Route index path="/en/weiteres" element={
                                    <Weiteres show={show} lang={"de"} toggle={toggle}/>
                                } />
                                <Route index path="/en/news" element={
                                    <News show={show} lang={"en"} toggle={toggle}/>
                                } />
                                {/* JAPAN */}
                                <Route index path="/ja/home" element={
                                    <Home show={show} lang={"en"} toggle={toggle}/>
                                } />
                                <Route index path="/ja/training" element={
                                    <Trainer show={show} lang={"en"} toggle={toggle}/>
                                } />
                                <Route index path="/ja/vorstand" element={
                                    <Vorstand show={show} lang={"de"} toggle={toggle}/>
                                } />
                                <Route index path="/ja/weiteres" element={
                                    <Weiteres show={show} lang={"de"} toggle={toggle}/>
                                } />
                                <Route index path="/ja/news" element={
                                    <News show={show} lang={"ja"} toggle={toggle}/>
                                } />
                                {/* HUNGARY */}
                                <Route index path="/un/home" element={
                                    <Home show={show} lang={"en"} toggle={toggle}/>
                                } />
                                <Route index path="/un/training" element={
                                    <Trainer show={show} lang={"en"} toggle={toggle}/>
                                } />
                                <Route index path="/un/vorstand" element={
                                    <Vorstand show={show} lang={"de"} toggle={toggle}/>
                                } />
                                <Route index path="/un/weiteres" element={
                                    <Weiteres show={show} lang={"de"} toggle={toggle}/>
                                } />
                                <Route index path="/un/news" element={
                                    <News show={show} lang={"un"} toggle={toggle}/>
                                } />
                            </Route>
                                {/*<Route path="/training" element={
                                    <Trainer
                                        lang={lang}
                                        show={show}
                                        toggle={toggle}
                                        toggleLang={toggleLang}
                                        currentLangString={currentLangString}
                                        currentLang={currentLang}
                                        setCurrentLang={setCurrentLang} />
                                } />
                                <Route path="/vorstand" element={
                                    <Vorstand
                                        lang={lang}
                                        show={show}
                                        toggle={toggle}
                                        toggleLang={toggleLang}
                                        currentLangString={currentLangString}
                                        currentLang={currentLang}
                                        setCurrentLang={setCurrentLang}/>
                                } />
                                <Route path="/weiteres" element={
                                    <Weiteres
                                        lang={lang}
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
                            </Route>*/}
                        </Routes>
                    </BrowserRouter>
                </div>
            </NotificationsProvider>
        </MantineProvider>
    );
}
