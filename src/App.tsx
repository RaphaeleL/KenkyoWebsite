// @ts-nocheck
import React, {useEffect} from 'react';
import './App.scss';
import {MantineProvider} from "@mantine/core";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import {NotificationsProvider, showNotification} from "@mantine/notifications";
import Header from "./components/Header/Header";
import HomeBody from "./components/Pages/Home/HomeBody";
import TrainerBody from "./components/Pages/Trainer/TrainerBody";
import VorstandBody from "./components/Pages/Vorstand/VorstandBody";
import WeiteresBody from "./components/Pages/Weiteres/WeiteresBody";
import NewsBody from "./components/Pages/News/NewsBody";
import LandingPage from "./components/LandingPage/LandingPage";
import {useSetState} from "@mantine/hooks";

export default function App() {
    const [show, setShow] = useSetState(false);

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
    }, [show]);

    return (
        <MantineProvider
            withGlobalStyles
            withNormalizeCSS
        >
            <NotificationsProvider>
                <div className="App" id="App">
                    <Header />
                    <LandingPage />
                    <BrowserRouter>
                        <Routes>
                            <Route path="/">
                                <Route path="/" element={<Navigate to="/de/home" />}>
                                </Route>
                                <Route index path={"/" + window.location.href.split("/")[3] as String + "/home"} element={<HomeBody />} />
                                <Route index path={"/" + window.location.href.split("/")[3] as String + "/training"} element={<TrainerBody />} />
                                <Route index path={"/" + window.location.href.split("/")[3] as String + "/vorstand"} element={<VorstandBody />} />
                                <Route index path={"/" + window.location.href.split("/")[3] as String + "/weiteres"} element={<WeiteresBody />} />
                                <Route index path={"/" + window.location.href.split("/")[3] as String + "/news"} element={<NewsBody />} />
                            </Route>
                        </Routes>
                    </BrowserRouter>
                </div>
            </NotificationsProvider>
        </MantineProvider>
    );
}
