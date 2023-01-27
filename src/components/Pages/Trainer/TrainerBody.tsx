import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet'
import {Container, Text} from "@mantine/core";
import MyTitle from "../../Utils/MyTitle";
import MyContent from "../../Utils/MyContent";

export default function TrainerBody() {
    return (
        <div className={"TrainerBody"}>
            <Container>
                <MyTitle content={"Unser Dojo"} />
                <MyContent content={"Wir freuen uns darauf, Sie in unserer Karate-Sparte begrüßen zu dürfen. " +
                    "Unsere Sporthalle befindet sich in einer günstigen Lage und ist leicht zu erreichen. " +
                    "Bitte zögern Sie nicht uns zu kontaktieren, falls Sie Hilfe bei der Anfahrt benötigen."} />

                <MapContainer center={[49.105648, 8.281833]} zoom={18} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[49.105648, 8.281833]}>
                        <Popup>Trainings- und Veranstaltungshalle</Popup>
                    </Marker>
                </MapContainer>

                <MyTitle content={"Unsere Trainingszeiten"} />
                <MyContent content={"Unsere Karate-Sparte bietet regelmäßige Trainingseinheiten an drei Tagen " +
                    "in der Woche an. Dienstags und Donnerstags finden die Trainings von 18:00 Uhr bis 20:30 Uhr " +
                    "statt, während Freitags von 18:00 Uhr bis 20:30 Uhr spezielles Training für Fortgeschrittene " +
                    "angeboten wird. Für diejenigen, die ihre Fähigkeiten auf die nächste Stufe bringen möchten, " +
                    "bieten wir auch ein Spezialtraining am Samstag von 8:00 Uhr bis 12:00 Uhr an."} />
                <MyContent content={<Text fs="italic">Di: 18:00 - 21:30</Text>}/>
                <MyContent content={<Text fs="italic">Do: 18:00 - 21:30</Text>}/>
                <MyContent content={<Text fs="italic">Fr: 18:00 - 21:30</Text>}/>
                <MyContent content={<Text td="line-through" fs="italic">Sa: 08:00 - 12:00</Text>}/>
            </Container>
        </div>
    );
}