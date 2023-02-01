// @ts-nocheck
import React, {useEffect} from 'react';
import './App.scss';
import {Affix, Button, MantineProvider, Transition} from "@mantine/core";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import {NotificationsProvider, showNotification} from "@mantine/notifications";
import Home from "./components/Pages/Home/Home";
import Training from "./components/Pages/Training/Training";
import UeberUns from "./components/Pages/UeberUns/UeberUns";
import News from "./components/Pages/News/News";
import Termine from "./components/Pages/Termine/Termine";
import {useWindowScroll} from "@mantine/hooks";
import {AiOutlineArrowUp} from "@react-icons/all-files/ai/AiOutlineArrowUp";
import {home} from "./components/Content/HomeContent";

export default function App() {
    const [scroll, scrollTo] = useWindowScroll();

    useEffect( () =>{
        let name = "";
        let title = "";
        let text = "";
        let show = false;
        if (window.location.href.split("/")[3] === "ja") {
            show = true;
            name = "jap-banner"
            title = "翻訳エラー";
            text = "翻訳に一部誤りがある可能性があります。不正確な情報がある場合は、申し訳ございません。誤記を発見された場合は、ご遠慮なく弊社までご連絡ください。";
        } else if (window.location.href.split("/")[3] === "un") {
            show = true;
            name = "hun-banner"
            title = "Fordítási hiba";
            text = "A fordítás részben hibás lehet. Elnézést kérünk az esetleges pontatlanságokért. Ha bármilyen hibát észlel, kérjük, ne habozzon kapcsolatba lépni velünk.";
        }
        if (show) {
            //show = false;
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
    }, []);

    let current_lang = window.location.href.split("/")[3] as String;

    return (
        <MantineProvider
            withGlobalStyles
            withNormalizeCSS
        >
            <NotificationsProvider>
                <Affix position={{ bottom: 20, right: 20 }}>
                    <Transition transition="slide-up" mounted={scroll.y > 0}>
                        {(transitionStyles) => (
                            <Button color="gray" compact uppercase
                                leftIcon={<AiOutlineArrowUp size={16} />}
                                style={transitionStyles}
                                onClick={() => scrollTo({ y: 0 })}
                            >
                                {home[current_lang][3]}
                            </Button>
                        )}
                    </Transition>
                </Affix>
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