import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet'
import {Container, Text} from "@mantine/core";
import MyTitle from "../../Utils/MyTitle";
import MyContent from "../../Utils/MyContent";
import FooterBody from "../Footer/FooterBody";
import React from "react";
import Seperator from "../Home/Seperator";
import {dojo, times} from "./Content";

export default function TrainerBody() {
    let current_lang = window.location.href.split("/")[3];

    let dojo_title = dojo.de.title;
    let dojo_text = dojo.de.text;
    let time_title = times.de.title;
    let time_text = times.de.title;
    let times1 = times.de.time1;
    let times2 = times.de.time2;
    let times3 = times.de.time3;
    let times4 = times.de.time4;

    if (current_lang === "en") {
        dojo_title = dojo.en.title;
        dojo_text = dojo.en.text;
        time_title = times.en.title;
        time_text = times.en.title;
        times1 = times.en.time1;
        times2 = times.en.time2;
        times3 = times.en.time3;
        times4 = times.en.time4;
    } else if (current_lang === "ja") {
        dojo_title = dojo.ja.title;
        dojo_text = dojo.ja.text;
        time_title = times.ja.title;
        time_text = times.ja.text;
        times1 = times.ja.time1;
        times2 = times.ja.time2;
        times3 = times.ja.time3;
        times4 = times.ja.time4;
    } else if (current_lang === "un") {
        dojo_title = dojo.un.title;
        dojo_text = dojo.un.text;
        time_title = times.un.title;
        time_text = times.un.text;
        times1 = times.un.time1;
        times2 = times.un.time2;
        times3 = times.un.time3;
        times4 = times.un.time4;
    }

    return (
        <div className={"TrainerBody"}>
            <Seperator />
            <Container>
                <MyTitle content={dojo_title} />
                <MyContent content={dojo_text} />

                <MapContainer center={[49.105648, 8.281833]} zoom={18} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[49.105648, 8.281833]}>
                        <Popup>Dojo</Popup>
                    </Marker>
                </MapContainer>

                <Seperator />

                <MyTitle content={time_title} />
                <MyContent content={time_text} />
                <MyContent content={<Text fs="italic">{times1}</Text>}/>
                <MyContent content={<Text fs="italic">{times2}</Text>}/>
                <MyContent content={<Text fs="italic">{times3}</Text>}/>
                <MyContent content={<Text td="line-through" fs="italic">{times4}</Text>}/>
            </Container>
            <FooterBody />
        </div>
    );
}