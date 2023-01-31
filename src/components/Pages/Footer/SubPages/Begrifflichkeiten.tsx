// @ts-nocheck
import {Container, Space, Table, Title} from "@mantine/core";
import MyContent from "../../../Utils/MyContent";
import {begrifflichkeiten, footer} from "../../../Content/FooterContent";
import React from "react";
import TextToPage from "../../../FloatingElement/TextToPage";

export default function Begrifflichkeiten() {
    let current_lang = window.location.href.split("/")[3] as String;

    let grusformeln = [
        { japan: "musubi-dachi",        deutsch: begrifflichkeiten[current_lang][3],                     hinweis: "-" },
        { japan: "seiza",               deutsch: begrifflichkeiten[current_lang][4],                         hinweis: "-" },
        { japan: "mokesu",              deutsch: begrifflichkeiten[current_lang][5],                 hinweis: "Auf das Training/Ende vorbereiten; " },

        { japan: "shomen-ni .... rei",  deutsch: begrifflichkeiten[current_lang][6],                 hinweis: "-" },

        { japan: "sempai-ni ... rei",   deutsch: begrifflichkeiten[current_lang][7],                hinweis: "3.-1. Kyu" },
        { japan: "sensei-ni .... rei",  deutsch: begrifflichkeiten[current_lang][8],                hinweis: "ab 1. Dan" },

        { japan: "-o-tagai-ni .... rei",deutsch: begrifflichkeiten[current_lang][9],            hinweis: "-" },

        { japan: "onegai shimasu",      deutsch: begrifflichkeiten[current_lang][10],    hinweis: "Wird auf den Trainergruß gewantwortet" },
        { japan: "arigato gozaimashita",deutsch: begrifflichkeiten[current_lang][11],   hinweis: "Wird auf den Trainergruß gewantwortet" },
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
            {/*<td>{grusformel.hinweis}</td>*/}
        </tr>
    ));

    const zahlenRow = zahlen.map((zahl) => (
        <tr>
            <td>{zahl.japan}</td>
            <td>{zahl.deutsch}</td>
            {/*<td>{zahl.hinweis}</td>*/}
        </tr>
    ));

    return(
        <TextToPage
            size="xl"
            openingText={footer[current_lang][9]}
            title={<Title order={1}>{footer[current_lang][9]}</Title>}
            content={
        <Container>
            <Title order={1}>{begrifflichkeiten[current_lang][0]}</Title>
            <Space h={"xs"} />
            <MyContent content={begrifflichkeiten[current_lang][1]} />
            <Table highlightOnHover>
                <thead>
                <tr>
                    <th>Karate</th>
                    <th>{current_lang}</th>
                    {/*<th>Hinweiß</th>*/}
                </tr>
                </thead>
                <tbody>{grusformelRow}</tbody>
            </Table>
            <Space h={"xs"} />
            <MyContent content={begrifflichkeiten[current_lang][2]} />
            <Table highlightOnHover>
                <thead>
                <tr>
                    <th>Karate</th>
                    <th>{current_lang}</th>
                    {/*<th>Aussprache</th>*/}
                </tr>
                </thead>
                <tbody>{zahlenRow}</tbody>
            </Table>
        </Container>
            }/>
    );
}