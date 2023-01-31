import {Text} from "@mantine/core";
import React from "react";
import MyTitle from "../../../../Utils/MyTitle";
import MyContent from "../../../../Utils/MyContent";
import TextToPicture from "../../../../FloatingElement/TextToPicture";

export default function IntroGojuRyu() {
    return (
        <div>
            <Text>
                <MyTitle content={
                    <TextToPicture
                        size="lg"
                        label={"Karate Geschichte Übersicht"}
                        text={"剛柔流 - Gōjū-Ryū"}
                        pic={
                            "https://raw.githubusercontent.com/RaphaeleL/karate_website/main/src/assets/KarateHistoryOverview.png"
                        }
                    />
                    }/>

                <MyContent dimmed={true} content={"Gōjū-Ryū ist ein Karate-Stil mit lang zurückreichender Tradition, der besonders viele Elemente des ursprünglichen chinesischen Boxens des 17. bis 19. Jahrhunderts enthält. Der Name Gōjū-Ryū wurde von Chōjun Miyagi (1888–1953) gewählt. Miyagi bezog sich bei der Auswahl des Stilnamens auf das lange Zeit geheim gehaltene Bubishi, in dem eine der „Acht Regeln des Faustkampfes“ (拳法之大要八句 kenpō no taiyō hakku) da lautet: „Alles im Universum atmet hart und weich“ (法剛柔呑吐 hō gōjū donto)."} />

                <MyContent dimmed={true} content={"Im Bugei Ryūha Daijiten, der Enzyklopädie der Kriegskunststile von Kyoshi Watatani und Yamada Tadashi (Tokio, 1978) wird Gōjū-Ryū unter anderem wie folgt charakterisiert: 古式の技であるという. (Koshiki no waza dearu toiu.) Das bedeutet: (Gōjū-Ryū wird) „Auch Koshiki no Waza genannt.“ Koshiki no Waza sind „antike Techniken“, „Techniken der alten Schule“, oder „antike Riten“. Dementsprechend handelt es sich beim Gōjū-Ryū um die Überlieferung traditioneller Kampfmethoden. Gōjū-Ryū Karate entwickelte sich aus der Erforschung und Systematisierung effektiver unbewaffneter Kampfbewegungen auf Okinawa. Die Entwicklung des Gōjū-Ryū Karate ist mit der Geschichte von China, Ryūkyū und Japan verbunden."} />


            </Text>
        </div>
);

}