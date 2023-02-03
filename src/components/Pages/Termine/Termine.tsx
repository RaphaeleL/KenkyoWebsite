// @ts-nocheck
import FooterBody from "../Footer/FooterBody";
import React from "react";
import Seperator from "../Home/Seperator";
import {Center, Space, Table} from "@mantine/core";
import MyTitle from "../../Utils/MyTitle";
import {items} from "../../Content/MenuContent";
import Language from "../Footer/Language";

export default function Termine() {
    let current_lang = window.location.href.split("/")[3] as String;

    const elements = [
        { event: "Lehrgang", date: "01.01.1970", location: "Schifferstadt (GER)", organizer: "Hoffmann", info: "-" },
        { event: "Wettkampf", date: "01.01.1970", location: "Lissabon (POR)", organizer: "JKF", info: "-" },
        { event: "C-Trainer Ausbildung", date: "01.01.1970", location: "Frankfurt a. M. (GER)", organizer: "DKV", info: "Mindestens 1. Dan" },
        { event: "Kyu Prüfungen", date: "01.01.1970", location: "Karate Kenkyo (GER)", organizer: "Kenkyo", info: "-" },
        { event: "Dan Prüfung", date: "01.01.1970", location: "Walldürn (GER)", organizer: "DKV", info: "-" },
    ];

    const rows = elements.map((element) => (
        <tr key={element.name}>
            <td><Center>{element.event}</Center></td>
            <td><Center>{element.date}</Center></td>
            <td><Center>{element.location}</Center></td>
            <td><Center>{element.organizer}</Center></td>
            <td><Center>{element.info}</Center></td>
        </tr>
    ));

    return (
        <>
            <div className={"WeiteresBody"}>
                <Space h={"xl"} />
                <MyTitle order={1} content={items[current_lang][3]} />

                <Seperator />
                <Table verticalSpacing="xs">
                    <thead>
                    <tr>
                        <th><Center>Event</Center></th>
                        <th><Center>Datum</Center></th>
                        <th><Center>Ort</Center></th>
                        <th><Center>Ausrichter</Center></th>
                        <th><Center>Info"s</Center></th>
                    </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                </Table>

                <FooterBody/>
                <Language />
            </div>
        </>
    );
}