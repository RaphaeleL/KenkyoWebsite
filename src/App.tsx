import React from 'react';
import './App.scss';
import {MantineProvider} from "@mantine/core";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import Trainer from "./components/Pages/Trainer";
import Vorstand from "./components/Pages/Vorstand";
import Weiteres from "./components/Pages/Weiteres";
import NoPage from "./components/Pages/NoPage";

export default function App() {
    return (
        <MantineProvider
            withGlobalStyles
            withNormalizeCSS
        >
            <div className="App">
                <BrowserRouter>
                    <Routes>
                        <Route path="/">
                            <Route index path="/" element={<Home />} />
                            <Route path="/trainer" element={<Trainer />} />
                            <Route path="/vorstand" element={<Vorstand />} />
                            <Route path="/weiteres" element={<Weiteres />} />
                            <Route path="*" element={<NoPage />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </div>
        </MantineProvider>
    );
}
