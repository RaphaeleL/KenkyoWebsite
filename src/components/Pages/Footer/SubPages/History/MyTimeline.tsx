import { Text, Timeline } from "@mantine/core";
import React from "react";
import TextToPicture from "../../../../FloatingElement/TextToPicture";

export default function myTimeline() {
    return (
        <Timeline bulletSize={24} lineWidth={2}>
            <Timeline.Item lineVariant="dashed"
                title={
                    <TextToPicture label={"Sanzan Jidai"} size="md" text={"三山時代"}
                                   pic={"https://raw.githubusercontent.com/RaphaeleL/KenkyoWebsite/main/src/assets/sanzan.jpeg"} />
                }
            >
                <Text color="dimmed" size="sm">
                    In der Zeit der Drei Königreiche (Sanzan Jidai) kämpften drei
                    Feudalfürsten (Anji) um die Macht in Okinawa, wobei die üblichen
                    militärischen Mittel, Maßnahmen, Taktiken und Strategien zum Einsatz
                    kamen.
                </Text>
                <Text size="xs" mt={4}> 1314 bis 1429 </Text>
            </Timeline.Item>

            <Timeline.Item
                title={
                    <TextToPicture label={"Sakugawa Kanga"} size="lg" text={"佐久川 寛賀"}
                                   pic={"https://raw.githubusercontent.com/RaphaeleL/KenkyoWebsite/main/src/assets/Kanga_Sakugawa.jpeg"} />
                }
            >
                <Text color="dimmed" size="sm">
                    Sakugawa Kanga war der bekannteste und wichtigste Meister des frühen okinawanischen Tōde, einem Vorläufer des modernen Karate.
                </Text>
                <Text size="xs" mt={4}> 1733 - 1815 </Text>
            </Timeline.Item>

            <Timeline.Item
                title={
                    <TextToPicture label={"Matsumura Sōkon"} size="lg" text={"松村 宗棍"}
                                   pic={"https://raw.githubusercontent.com/RaphaeleL/KenkyoWebsite/main/src/assets/Sokon_Matsumura.jpg"} />
                }
            >
                <Text color="dimmed" size="sm">
                    Er war Schüler von Sakugawa Kanga. Matsumura Sōkon wurde in Yamagawa, Shuri im Königreich Ryūkyū (heute: Yamagawa, Shuri, Naha, Präfektur Okinawa) geboren. Sein erster Karatelehrer war Sakukawa Kanga, der ihn fünf Jahre lang – bis zu seinem Tod – unterrichtete. Bevor Matsumura selbst in Shuri starb, unterrichtete er Karateka, wie z. B. Ankō Asato, Ankō Itosu, Motobu Chōyū, Motobu Chōki, Kentsu Yabu, Nabe Matsumura, Chōtoku Kyan, Kiyuna Pechin, Ryosei Kuwae und Sakihara Pechin, die es später zu Bekanntheit gebracht haben.
                </Text>
                <Text size="xs" mt={4}> 1809–1901 </Text>
            </Timeline.Item>

            <Timeline.Item
                title={
                    <TextToPicture label={"Kanryo Higaonna"} size="lg" text={"松村 宗棍"}
                                   pic={"https://raw.githubusercontent.com/RaphaeleL/KenkyoWebsite/main/src/assets/Kanryo-Higaonna.jpg"} />
                }
            >
                <Text color="dimmed" size="sm">
                    Er war Schüler von Matsumura Sōkon. Zu seiner Zeit wurde Higaonna Sensei zusammen mit Itosu Anko als "der führende Karate-Ka in Okinawa" angesehen. Er starb im Oktober 1910, im Alter von 62 Jahren, in Anwesenheit von Miyagi Chojun. Viele der Schüler von Higaonna Sensei entwickelten ihre eigenen Stile, die auf seinen Lehren basierten. Sein Vermächtnis wird durch die Errungenschaften dieser Schüler und derer, die ihnen später folgten, fortgesetzt. Die bekanntesten von ihnen waren Miyagi Chojun.
                </Text>
                <Text size="xs" mt={4}> 1853 - 1916 </Text>
            </Timeline.Item>

            <Timeline.Item
                title={
                    <TextToPicture label={"Itosu Ankō"} size="lg" text={"糸洲安恒"}
                                   pic={"https://raw.githubusercontent.com/RaphaeleL/KenkyoWebsite/main/src/assets/ItosuAnko.png"} />
                }
            >
                <Text color="dimmed" size="sm">
                    Er war Schüler von Matsumura Sōkon. Itosu Ankō war Großmeister des Karate und einer der wichtigsten Karate-Meister der vergangenen 100 Jahre und Lehrer der meisten späteren Stilgrnder, wie z. B. Chibana Choshin (Shorin-Ryū), Mabuni Kenwa (Shitō-Ryū) oder Funakoshi Gichin (Shōtōkan-Ryū). Itosu reformierte das Karate Okinawas und machte aus der einstigen geheimen Kampfkunst ein System, das zum Zwecke der körperlichen Ertüchtigung und geistigen Erziehung (im Sinne des Dō) sogar an Schulen gelehrt werden konnte.
                </Text>
                <Text size="xs" mt={4}> 1832 - 1915 </Text> </Timeline.Item>

            <Timeline.Item
                title={
                    <TextToPicture label={"Auszug aus dem Bubishi"} size="xl" text={"武備志"}
                                   pic={"https://raw.githubusercontent.com/RaphaeleL/KenkyoWebsite/main/src/assets/bubishi.webp"} />
                }
            >
                <Text color="dimmed" size="sm">
                    Das Dokument Bubishi gilt als Beweis für die Übertragung des
                    chinesischen Boxens nach Okinawa. Es ist das einzig bekannte Dokument
                    dieser Art und diesen Umfangs, und es handelt von chinesischen
                    Box-Stilen, aus denen die Kata des Gōju-ryū stammten (Weißer Kranich
                    und Arhat-Boxen)
                </Text>
                <Text size="xs" mt={4}> 19. Jahrhundert </Text>
            </Timeline.Item>

            <Timeline.Item
                title={
                    <TextToPicture label={"Dainippon Butokukai"} size="xl" text={"大日本武徳会"}
                                   pic={"https://raw.githubusercontent.com/RaphaeleL/KenkyoWebsite/main/src/assets/Butokukai_Kyoto.jpg"} />
                }
            >
                <Text color="dimmed" size="sm">
                    Unter anderem durch Miyagis Wirken wurde das Gōjū-Ryū der erste
                    Karate-Stil, der offiziell vom Dainippon Butokukai 大日本武徳会 1933
                    anerkannt und registriert wurde.
                </Text>
                <Text size="xs" mt={4}> 1933 </Text>
            </Timeline.Item>

            <Timeline.Item
                title={
                    <TextToPicture label={"Chōjun Miyagi"} size="md" text={"宮城 長順"}
                                   pic={"https://raw.githubusercontent.com/RaphaeleL/KenkyoWebsite/main/src/assets/Miyagi_Chojun.jpg"} />
                }
            >
                <Text color="dimmed" size="sm">
                    Chōjun Miyagi schrieb ein Überblick über das Karate-do: 'Eine
                    Stilrichtung des Kungfu wurde 1828 von Fuzhou nach Okinawa gebracht
                    und diente als Quelle und Inspiration für das Gōjū-ryū Karate Kempō'.
                    Bis heute ist nicht klar, wen oder was er damit meinte.
                </Text>
                <Text size="xs" mt={4}> 1934 </Text>
            </Timeline.Item>

            <Timeline.Item
                title={
                    <TextToPicture label={"Yamaguchi Gōgen"} size="md" text={"山口 剛玄"}
                                   pic={"https://raw.githubusercontent.com/RaphaeleL/KenkyoWebsite/main/src/assets/Gogen_Yamaguchi.jpeg"} />
                }
            >
                <Text color="dimmed" size="sm">
                    Yamaguchi Gōgen war ein bekannter Meister des Karate.
                    Yamaguchi lernte früh Jūdō und Kendō und gelangte über einen japanischen Zimmermann zum Karate, der ihn heimlich
                    trainierte. Um 1932 wurde er Schüler von Chōjun Miyagi, der die Stilrichtung Gōjū-Ryū begründete.
                    Yamaguchi galt ab 1952 als offizieller Nachfolger von Miyagi. Wegen seiner geschmeidigen Bewegungen
                    erhielt er den Spitznamen die Katze.
                </Text>
                <Text size="xs" mt={4}> 1909 - 1989 </Text>
            </Timeline.Item>

            <Timeline.Item
                lineVariant="dashed"
                title={
                    <TextToPicture label={"Yushinkan Stempel (von Fritz Nöpel)"} size="md" text={"唯心舘"}
                                   pic={"https://raw.githubusercontent.com/RaphaeleL/KenkyoWebsite/main/src/assets/Yuishinkan-2.png"} />
                }
            >
                <Text color="dimmed" size="sm">
                    1954 unternahm Fritz Nöpel nach seiner Berufsausbildung zum Bergmann
                    eine Fahrradreise durch Asien mit dem Ziel, die Olympischen
                    Sommerspiele 1956 in Melbourne, Australien, zu besuchen. Auf Java kam
                    er das erste Mal mit Karate in Kontakt. Den ersten intensiven
                    Karateunterricht nahm er in Taiwan. Fritz Nöpel ist der Wegbereiter
                    des Gōjū-Ryū-Karate in Deutschland. Er war Träger des 10. Dan und des
                    Ehrentitels Hanshi und damit höchstgraduierter Dan-Träger im Deutschen
                    Karate Verband.
                </Text>
                <Text size="xs" mt={4}> 1954 - 2020 </Text>
            </Timeline.Item>

            <Timeline.Item
                title={
                    <TextToPicture label={"Karateverein Kenkyo Rheinzabern e.v."} size="xl" text={"Karateverein Kenkyo Rheinzabern e.v."}
                                   pic={"https://raw.githubusercontent.com/RaphaeleL/KenkyoWebsite/main/src/assets/Logo.png"} />
                }
            >
                <Text color="dimmed" size="sm">
                    Am 06.01.2023 gründeten 7 Kampfsportbegeisterte den Karateverein Kenkyo.
                </Text>
                <Text size="xs" mt={4}> 2023 - heute </Text>
            </Timeline.Item>
        </Timeline>
    );
}
