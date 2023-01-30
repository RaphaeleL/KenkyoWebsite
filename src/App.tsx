import React, {useEffect, useState} from 'react';
import './App.scss';
import {MantineProvider} from "@mantine/core";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import {NotificationsProvider, showNotification} from "@mantine/notifications";
import Home from "./components/Pages/Home/Home";
import Training from "./components/Pages/Training/Training";
import UeberUns from "./components/Pages/UeberUns/UeberUns";
import News from "./components/Pages/News/News";
import Termine from "./components/Pages/Termine/Termine";

export default function App() {
    const [show, setShow] = useState(false);

    useEffect( () =>{
        let name = "";
        let title = "";
        let text = "";
        if (window.location.href.split("/")[3] === "ja") {
            setShow(true);
            name = "jap-banner"
            title = "翻訳エラー";
            text = "翻訳に一部誤りがある可能性があります。不正確な情報がある場合は、申し訳ございません。誤記を発見された場合は、ご遠慮なく弊社までご連絡ください。";
        } else if (window.location.href.split("/")[3] === "un") {
            setShow(true);
            name = "hun-banner"
            title = "Fordítási hiba";
            text = "A fordítás részben hibás lehet. Elnézést kérünk az esetleges pontatlanságokért. Ha bármilyen hibát észlel, kérjük, ne habozzon kapcsolatba lépni velünk.";
        }
        if (show) {
            setShow(false);
            showNotification({
                className: name,
                id: name,
                title: title,
                disallowClose: false,
                color: 'red',
                loading: false,
                autoClose: false,
                message: text,
            });
        }
    }, [show, setShow]);

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
                                <Route path="/" element={<Navigate to="/de/home" />}></Route>
                                {/* GERMAN */}
                                <Route index path="/de/home" element={<Home />} />
                                <Route index path="/de/training" element={<Training />} />
                                <Route index path="/de/ueber-uns" element={<UeberUns />} />
                                <Route index path="/de/termine" element={<Termine />} />
                                <Route index path="/de/news" element={<News />} />
                                {/* ENGLISCH */}
                                <Route index path="/en/home" element={<Home />} />
                                <Route index path="/en/training" element={<Training />} />
                                <Route index path="/en/ueber-uns" element={<UeberUns />} />
                                <Route index path="/en/termine" element={<Termine />} />
                                <Route index path="/en/news" element={<News />} />
                                {/* JAPANESE */}
                                <Route index path="/ja/home" element={<Home />} />
                                <Route index path="/ja/training" element={<Training />} />
                                <Route index path="/ja/ueber-uns" element={<UeberUns />} />
                                <Route index path="/ja/termine" element={<Termine />} />
                                <Route index path="/ja/news" element={<News />} />
                                {/* HUNGARY */}
                                <Route index path="/un/home" element={<Home />} />
                                <Route index path="/un/training" element={<Training />} />
                                <Route index path="/un/ueber-uns" element={<UeberUns />} />
                                <Route index path="/un/termine" element={<Termine />} />
                                <Route index path="/un/news" element={<News />} />
                            </Route>
                        </Routes>
                    </BrowserRouter>
                </div>
            </NotificationsProvider>
        </MantineProvider>
    );
}