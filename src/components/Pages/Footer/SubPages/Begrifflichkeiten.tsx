import {Container, Space, Table, Title} from "@mantine/core";
import MyContent from "../../../Utils/MyContent";

export default function Begrifflichkeiten() {

    let grusformeln = [
        { japan: "musubi-dachi",        deutsch: "Aufstellung",                     hinweis: "-" },
        { japan: "seiza",               deutsch: "Abknien",                         hinweis: "-" },
        { japan: "mokesu",              deutsch: "Augen schließen",                 hinweis: "Auf das Training/Ende vorbereiten; " },

        { japan: "shomen-ni .... rei",  deutsch: "Gruß nach vorne",                 hinweis: "-" },

        { japan: "sempai-ni ... rei",   deutsch: "Gruß zum Trainer",                hinweis: "3.-1. Kyu" },
        { japan: "sensei-ni .... rei",  deutsch: "Gruß zum Trainer",                hinweis: "ab 1. Dan" },

        { japan: "-o-tagai-ni .... rei",deutsch: "Gegenseitiges Grüßen",            hinweis: "-" },

        { japan: "onegai shimasu",      deutsch: "allg. Bitte vor dem Training",    hinweis: "Wird auf den Trainergruß gewantwortet" },
        { japan: "arigato gozaimashita",deutsch: "allg. Danke nach dem Training",   hinweis: "Wird auf den Trainergruß gewantwortet" },
    ];

    let zahlen = [
        { japan: "ichi",    deutsch: "eins",    hinweis: "itsch" },
        { japan: "ni",      deutsch: "zwei",    hinweis: "-" },
        { japan: "san",     deutsch: "drei",    hinweis: "-" },
        { japan: "shi",     deutsch: "vier",    hinweis: "tschi" },
        { japan: "go",      deutsch: "fünf",    hinweis: "-" },
        { japan: "roku",    deutsch: "sechs",   hinweis: "rok" },
        { japan: "shichi",  deutsch: "sieben",  hinweis: "sitsch" },
        { japan: "hachi",   deutsch: "acht",    hinweis: "hatsch" },
        { japan: "kyû",     deutsch: "neuen",   hinweis: "qu" },
        { japan: "jû",      deutsch: "zehn",    hinweis: "tschu" },
    ];

    const grusformelRow = grusformeln.map((grusformel) => (
        <tr>
            <td>{grusformel.japan}</td>
            <td>{grusformel.deutsch}</td>
            <td>{grusformel.hinweis}</td>
        </tr>
    ));

    const zahlenRow = zahlen.map((zahl) => (
        <tr>
            <td>{zahl.japan}</td>
            <td>{zahl.deutsch}</td>
            <td>{zahl.hinweis}</td>
        </tr>
    ));

    return(
        <Container>
            <Title order={1}>Grußformeln im Karatetraining</Title>
            <Space h={"xs"} />
            <MyContent content={"Zu Beginn und zu Ende jedes Trainings gibt es ein Begrüßungsritual. Hier noch mal für alle, die sich die Formeln nicht merken können oder noch nie richtig verstanden haben was da vorne gesagt wird"} />
            <Table highlightOnHover>
                <thead>
                <tr>
                    <th>Japanisch</th>
                    <th>Deutsch</th>
                    <th>Hinweiß</th>
                </tr>
                </thead>
                <tbody>{grusformelRow}</tbody>
            </Table>
            <Space h={"xs"} />
            <MyContent content={"Innerhalb des Trainings werden viele Japanische Begrifflichkeiten verwendet, entsprechend wir auf Japanisch gezählt."} />
            <Table highlightOnHover>
                <thead>
                <tr>
                    <th>Japanisch</th>
                    <th>Deutsch</th>
                    <th>Aussprache</th>
                </tr>
                </thead>
                <tbody>{zahlenRow}</tbody>
            </Table>
        </Container>
    );
}