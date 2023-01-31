import {Flex} from "@mantine/core";
import Seperator from "../../Home/Seperator";

export default function Kontakt() {
    return (
        <>
            Bei Fragen, Anregungen oder Fehler der Webseite meldet euch gerne bei uns!
            <Seperator />
            <Flex
                mih={50}
                gap="md"
                direction="row"
                wrap="wrap">
                <Seperator />
                <div>
                    <div>Vorstand</div>
                    <div>Zsolt Penderik</div>
                    <div>Rappengasse 32</div>
                    <div>76764 Rheinzabern</div>
                    <a href="mailto:angenehm001@gmail.com">angenehm001@gmail.com</a>
                </div>
                <Seperator />
                <div>
                    <div>Stellvertretender Vorstand</div>
                    <div>Raphaele Salvatore Licciardo</div>
                    <div>Sparbenhecke 1</div>
                    <div>76744 Maximiliansau</div>
                    <a href="mailto:raphaele.salvatore@outlook.de">raphaele.salvatore@outlook.de</a>
                </div>
            </Flex>
            <Seperator />
        </>
    );
}