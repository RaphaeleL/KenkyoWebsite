import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet'
import {Container, Text} from "@mantine/core";
import MyTitle from "../../Utils/MyTitle";
import MyContent from "../../Utils/MyContent";
import FooterBody from "../Footer/FooterBody";
import React from "react";
import Seperator from "../Home/Seperator";
import {dojo, times} from "../../Content/TrainerContent";

export default function TrainerBody() {
    let current_lang = window.location.href.split("/")[3] as String;
    // @ts-ignore
    let dojo_title = dojo[current_lang][0];
    // @ts-ignore
    let dojo_text = dojo[current_lang][1];

    // @ts-ignore
    let time_title = times[current_lang][0];
    // @ts-ignore
    let time_text = times[current_lang][1];
    // @ts-ignore
    let times1 = times[current_lang][2];
    // @ts-ignore
    let times2 = times[current_lang][3];
    // @ts-ignore
    let times3 = times[current_lang][4];
    // @ts-ignore
    let times4 = times[current_lang][5];

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
                        <Popup>{dojo_title}</Popup>
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