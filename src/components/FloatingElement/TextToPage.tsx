import {Container, Group, Modal, ScrollArea, Text} from "@mantine/core";
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
                    <ScrollArea style={{ height: 600 }}>
                        {props.content}
                    </ScrollArea>
                </Modal>

                <Group position="center">
                    <Text
                        c={props.color}
                        className={"Button"}
                        onClick={() => {setOpened(true);}}
                    >
                        {props.openingText}
                    </Text>
                </Group>
            </Container>
        </div>
    );
}