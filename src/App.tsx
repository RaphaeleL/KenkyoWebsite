import React, {useState} from 'react';
import './App.scss';
import {MantineProvider} from "@mantine/core";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import Trainer from "./components/Pages/Trainer";
import Vorstand from "./components/Pages/Vorstand";
import Weiteres from "./components/Pages/Weiteres";
import NoPage from "./components/Pages/NoPage";
import {NotificationsProvider} from "@mantine/notifications";

export default function App() {
    const [currentLang, setCurrentLang] = useState(0);

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
                                <Route index path="/" element={<Home currentLang={currentLang} setCurrentLang={setCurrentLang} />} />
                                <Route path="/training" element={<Trainer currentLang={currentLang} setCurrentLang={setCurrentLang} />} />
                                <Route path="/vorstand" element={<Vorstand />} />
                                <Route path="/weiteres" element={<Weiteres />} />
                                <Route path="*" element={<NoPage />} />
                            </Route>
                        </Routes>
                    </BrowserRouter>
                </div>
            </NotificationsProvider>
        </MantineProvider>
    );
}
