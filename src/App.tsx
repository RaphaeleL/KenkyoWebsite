// @ts-nocheck
import React, {useEffect, useState} from 'react';
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
import Header from "./components/Header/Header";
import LandingPage from "./components/LandingPage/LandingPage";

function Body(props: any) {
    return (
        <>
            <Header
                showHome={props.setShowHome}
                showTraining={props.setShowTraining}
                showUeberUns={props.setShowUeberUns}
                showTermine={props.setShowTermine}
                showNews={props.setShowNews}/>
            <LandingPage
                showHome={props.showHome}
                showTraining={props.showTraining}
                showUeberUns={props.showUeberUns}
                showTermine={props.showTermine}
                showNews={props.showNews}/>
            {props.showHome && <Home />}
            {props.showTraining && <Training />}
            {props.showUeberUns && <UeberUns />}
            {props.showTermine && <Termine />}
            {props.showNews && <News />}
        </>
    );
}

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
            title = "???????????????";
            text = "?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????";
        } else if (window.location.href.split("/")[3] === "un") {
            show = true;
            name = "hun-banner"
            title = "Ford??t??si hiba";
            text = "A ford??t??s r??szben hib??s lehet. Eln??z??st k??r??nk az esetleges pontatlans??gok??rt. Ha b??rmilyen hib??t ??szlel, k??rj??k, ne habozzon kapcsolatba l??pni vel??nk.";
        } else if (window.location.href.split("/")[3] === "uk") {
            show = true;
            name = "hun-banner"
            title = "?????????????? ??????????????????";
            text = "???????????????? ???????? ???????? ???????????????? ????????????????????????. ?????????????????? ?????????????????? ???? ?????????????? ????????????????????. ???????? ???? ???????????????? ????????-?????? ??????????????, ???????? ??????????, ????'?????????????? ?? ????????";
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

    const [showHome, setShowHome] = useState(true);
    const [showTraining, setShowTraining] = useState(false);
    const [showUeberUns, setShowUeberUns] = useState(false);
    const [showTermine, setShowTermine] = useState(false);
    const [showNews, setShowNews] = useState(false);

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
                                <Route path="/" element={<Navigate to="/de" />}></Route>
                                <Route index path="/de" element={
                                    <Body
                                        showHome={showHome}
                                        showTraining={showTraining}
                                        showUeberUns={showUeberUns}
                                        showTermine={showTermine}
                                        showNews={showNews}
                                        setShowHome={setShowHome}
                                        setShowTraining={setShowTraining}
                                        setShowUeberUns={setShowUeberUns}
                                        setShowTermine={setShowTermine}
                                        setShowNews={setShowNews}
                                    />
                                } />
                                <Route index path="/en" element={
                                    <Body
                                        showHome={showHome}
                                        showTraining={showTraining}
                                        showUeberUns={showUeberUns}
                                        showTermine={showTermine}
                                        showNews={showNews}
                                        setShowHome={setShowHome}
                                        setShowTraining={setShowTraining}
                                        setShowUeberUns={setShowUeberUns}
                                        setShowTermine={setShowTermine}
                                        setShowNews={setShowNews}
                                    />
                                } />
                                <Route index path="/ja" element={
                                    <Body
                                        showHome={showHome}
                                        showTraining={showTraining}
                                        showUeberUns={showUeberUns}
                                        showTermine={showTermine}
                                        showNews={showNews}
                                        setShowHome={setShowHome}
                                        setShowTraining={setShowTraining}
                                        setShowUeberUns={setShowUeberUns}
                                        setShowTermine={setShowTermine}
                                        setShowNews={setShowNews}
                                    />
                                } />
                                <Route index path="/un" element={
                                    <Body
                                        showHome={showHome}
                                        showTraining={showTraining}
                                        showUeberUns={showUeberUns}
                                        showTermine={showTermine}
                                        showNews={showNews}
                                        setShowHome={setShowHome}
                                        setShowTraining={setShowTraining}
                                        setShowUeberUns={setShowUeberUns}
                                        setShowTermine={setShowTermine}
                                        setShowNews={setShowNews}
                                    />
                                } />
                                <Route index path="/uk" element={
                                    <Body
                                        showHome={showHome}
                                        showTraining={showTraining}
                                        showUeberUns={showUeberUns}
                                        showTermine={showTermine}
                                        showNews={showNews}
                                        setShowHome={setShowHome}
                                        setShowTraining={setShowTraining}
                                        setShowUeberUns={setShowUeberUns}
                                        setShowTermine={setShowTermine}
                                        setShowNews={setShowNews}
                                    />
                                } />
                            </Route>
                        </Routes>
                    </BrowserRouter>
                </div>
            </NotificationsProvider>
        </MantineProvider>
    );
}
