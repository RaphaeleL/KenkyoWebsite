import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet'
import {Container, Text} from "@mantine/core";
import MyTitle from "../../Utils/MyTitle";
import MyContent from "../../Utils/MyContent";
import FooterBody from "../Footer/FooterBody";
import React from "react";

export default function TrainerBody(props: any) {
    let current_lang = window.location.href.split("/")[3];

    let title1 = "Unser Dojo";
    let text1 = "Wir freuen uns darauf, Sie in unserer Karate-Sparte begrüßen zu dürfen. Unsere Sporthalle befindet sich in einer günstigen Lage und ist leicht zu erreichen. Bitte zögern Sie nicht uns zu kontaktieren, falls Sie Hilfe bei der Anfahrt benötigen.";
    let title2 = "Unsere Trainingszeiten";
    let text2 = "Unsere Karate-Sparte bietet regelmäßige Trainingseinheiten an drei Tagen in der Woche an. Dienstags und Donnerstags finden die Trainings von 18:00 Uhr bis 20:30 Uhr statt, während Freitags von 18:00 Uhr bis 20:30 Uhr spezielles Training für Fortgeschrittene  angeboten wird. Für diejenigen, die ihre Fähigkeiten auf die nächste Stufe bringen möchten, bieten wir auch ein Spezialtraining am Samstag von 8:00 Uhr bis 12:00 Uhr an.";

    let times1 = "Di: 18:00 - 20:30";
    let times2 = "Do: 18:00 - 20:30";
    let times3 = "Fr: 18:00 - 20:30";
    let times4 = "Sa: 08:00 - 12:00";
    let place = "Dojo";
    if (current_lang === "en") {
        title1 = "Our Dojo";
        text1 = "We look forward to welcoming you to our karate division. Our gym is conveniently located and easy to get to. Please do not hesitate to contact us if you need any help with directions.";
        title2 = "Our training times";
        text2 = "Our karate division offers regular training sessions on three days in the week. On Tuesdays and Thursdays, training sessions are held from 18:00 to 20:30 while on Fridays from 18:00 to 20:30 special training for advanced students  is offered. For those who want to take their skills to the next level, we also offer special training on Saturdays from 8:00 am to 12:00 noon.";
        times1 = "Tu: 18:00 - 20:30";
        times2 = "Th: 18:00 - 20:30";
        times3 = "Fr: 18:00 - 20:30";
        times4 = "Sa: 08:00 - 12:00";
        place = "Dojo";
    } else if (current_lang === "ja") {
        title1 = "私たちの道場";
        text1 = "空手部へのご参加をお待ちしております。 私たちのスポーツホールは、便利な場所にあり、簡単にアクセスできます。案内が必要な場合は、ご遠慮なくお問い合わせください。";
        title2 = "トレーニング時間";
        text2 = "空手部では週3日、定期的に練習を行っています。火曜日と木曜日は18時から20時30分まで、金曜日は18時から20時30分まで、上級者向けの特別なトレーニングが行われます。さらにレベルアップしたい方のために、土曜日の8:00～12:00に特別講習も行っています。";
        times1 = "火曜日 : 18:00 - 20:30";
        times2 = "木曜日: 18:00 - 20:30";
        times3 = "金曜日: 18:00 - 20:30";
        times4 = "土曜日: 08:00 - 12:00";
        place = "挌技場";
    } else if (current_lang === "un") {
        title1 = "A mi Dojo-nk";
        text1 = "Szeretettel várjuk Önt karate részlegünkben. Edzőtermünk kényelmes helyen található és könnyen megközelíthető. Kérjük, ne habozzon kapcsolatba lépni velünk, ha segítségre van szüksége az útbaigazítással kapcsolatban.";
        title2 = "Edzésidőpontjaink";
        text2 = "Karate szakosztályunk a hét három napján rendszeres edzéseket tart. Kedden és csütörtökön 18:00 és 20:30 között tartjuk az edzéseket, míg pénteken 18:00 és 20:30 között speciális edzéseket kínálunk a haladóknak. Azok számára, akik szeretnék tudásukat a következő szintre emelni, szombatonként 8:00 és 12:00 óra között speciális edzéseket is kínálunk.";
        times1 = "Kedd: 18:00 - 20:30";
        times2 = "Csütörtök: 18:00 - 20:30";
        times3 = "Péntek : 18:00 - 20:30";
        times4 = "Szombat\n: 08:00 - 12:00";
        place = "Dojo";
    }

    return (
        <div className={"TrainerBody"}>
            <Container>
                <MyTitle content={title1} />
                <MyContent content={text1} />

                <MapContainer center={[49.105648, 8.281833]} zoom={18} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[49.105648, 8.281833]}>
                        <Popup>{place}</Popup>
                    </Marker>
                </MapContainer>

                <MyTitle content={title2} />
                <MyContent content={text2} />
                <MyContent content={<Text fs="italic">{times1}</Text>}/>
                <MyContent content={<Text fs="italic">{times2}</Text>}/>
                <MyContent content={<Text fs="italic">{times3}</Text>}/>
                <MyContent content={<Text td="line-through" fs="italic">{times4}</Text>}/>
            </Container>
            <FooterBody />
        </div>
    );
}