// @ts-nocheck
import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet'
import {Container, Space, Text} from "@mantine/core";
import MyTitle from "../../Utils/MyTitle";
import MyContent from "../../Utils/MyContent";
import FooterBody from "../Footer/FooterBody";
import React from "react";
import Seperator from "../Home/Seperator";
import {dojo, times} from "../../Content/TrainerContent";
import {items} from "../../Content/MenuContent";
import Header from "../../Header/Header";
import LandingPage from "../../LandingPage/LandingPage";
import Language from "../Footer/Language";

export default function Training() {
    let current_lang = window.location.href.split("/")[3] as String;

    return (
        <>
            <Header />
            <LandingPage />
            <div className={"TrainerBody"}>
                <Language />
                <Space h={"xl"} />
                <MyTitle order={1} content={items[current_lang][1]}/>

                <Seperator />

                <Container>
                    <MyTitle content={dojo[current_lang][0]} />
                    <MyContent content={dojo[current_lang][1]} />
                    <MyContent content={dojo[current_lang][2]} />
                    <MapContainer center={[49.105648, 8.281833]} zoom={18} scrollWheelZoom={false}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[49.105648, 8.281833]}>
                            <Popup>{dojo[current_lang][0]}</Popup>
                        </Marker>
                    </MapContainer>

                    <Seperator />

                    <MyTitle content={times[current_lang][0]} />
                    <MyContent content={times[current_lang][1]} />
                    <MyContent content={<Text fs="italic">{times[current_lang][2]}</Text>}/>
                    <MyContent content={<Text fs="italic">{times[current_lang][3]}</Text>}/>
                    <MyContent content={<Text fs="italic">{times[current_lang][4]}</Text>}/>
                    <MyContent content={<Text td="line-through" fs="italic">{times[current_lang][5]}</Text>}/>


                </Container>
                <FooterBody />
            </div>
        </>
    );
}