import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet'

export default function TrainerBody() {
    return (
        <div className={"TrainerBody"}>
            <MapContainer center={[49.105648, 8.281833]} zoom={18} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[49.105648, 8.281833]}>
                    <Popup>Trainings- und Veranstaltungshalle</Popup>
                </Marker>
            </MapContainer>
            {/*<Container>
                <Space h={"xl"} />
                <Title order={1}>Trainigszeiten</Title>
                <Space h={"xs"} />
                <MyContent content={"Dienstag: 18 - 21 Uhr"}/>
                <MyContent content={"Donnerstag: 18 - 21 Uhr"}/>

                <Space h={"xl"} />
                <Title order={1}>Anfahrt</Title>
                <Space h={"xs"} />
                Schulsporthalle IGS Rheinzabern
                <Space h={"lg"} />
                <MapContainer center={[49.105648, 8.281833]} zoom={18} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[49.105648, 8.281833]}>
                        <Popup>
                            Trainings- und Veranstaltungshalle
                        </Popup>
                    </Marker>
                </MapContainer>
                <Title order={1}>Ausrüstung</Title>
                <Space h={"xs"} />
                <MyContent content={"Die erforderliche Ausrüstung kann auf Wunsch über den Verein bei Kaiten / Kamikaze üblicherweise nach dem Einsteigerkurs und nach den Prüfungen bestellt werden"}/>
                <MyContent content={"Ein Karateanzug und Faustschützer sind Pflicht"}/>
                <MyContent content={"Wir empfehlen bei Partnerübungen, Selbstverteidigung und Kumitetraining zusätzlich das Tragen von Zahn-/Tief- und Schienbeinschutz. Bei Wettkampfvorbereitung und -teilnahme sind auch diese Schützer verpflichtend zu tragen. Mädchen und Frauen sollten evtl. auch einen Brustschutz verwenden"}/>

                <Space h={"xl"} />
                <Title order={1}>Dojo Regeln</Title>
                <Space h={"xs"} />
                <MyContent content={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr"}/>
                <MyContent content={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr"}/>
                <MyContent content={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr"}/>
                <MyContent content={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr"}/>
            </Container>*/}
        </div>
    );
}