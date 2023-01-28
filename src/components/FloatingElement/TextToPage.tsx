import {Alert, Container, Group, Modal, Space, Text} from "@mantine/core";
import React, {useState} from "react";
import {IconAlertCircle} from "@tabler/icons";

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

export default function TextToPage(props: any) {
    const [opened, setOpened] = useState(false);
    const [alert, setAlert] = useState(false);
    const [windowDimensions, ] = useState(getWindowDimensions());

    return(
        <div>
            <Container>
                <Modal
                    centered
                    overlayOpacity={0.55}
                    overlayBlur={3}
                    opened={opened}
                    onClose={() => setOpened(false)}
                    title={props.title}
                    size={props.size}
                >
                    {alert && (
                        <Alert icon={<IconAlertCircle />} title="Darstellungs Probleme" color="yellow">
                            Das Gerät kann möglicherweiße nicht alles Korrekt darstellen. Halte es am besten quer!
                        </Alert>
                    )}
                    <Space h="md" />
                    {props.content}
                </Modal>

                <Group position="center">
                    <Text className={"Button"} onClick={() => {
                        // if (props.openingText === "Prüfungsprogramm" ||
                        //     props.openingText === "Vorstand seit Gründung") {
                        //     if (windowDimensions.width < 1200) {
                        //         setAlert(true);
                        //     }
                        // }
                        setOpened(true);
                    }}>{props.openingText}</Text>
                </Group>
            </Container>
        </div>
    );
}