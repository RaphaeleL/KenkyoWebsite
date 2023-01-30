import {Container, Group, Modal, Text} from "@mantine/core";
import React, {useState} from "react";

export default function TextToPage(props: any) {
    const [opened, setOpened] = useState(false);

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
                    {props.content}
                </Modal>

                <Group position="center">
                    <Text className={"Button"} onClick={() => {setOpened(true);}}>
                        {props.openingText}
                    </Text>
                </Group>
            </Container>
        </div>
    );
}