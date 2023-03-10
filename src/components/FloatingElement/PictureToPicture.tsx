import React, {useState} from "react";
import {Text, Group, Image, Modal, Space, ScrollArea} from "@mantine/core";

export default function PictureToPicture(props: any) {
    const [opened, setOpened] = useState(false);
    return (
        <div>
            <Modal
                size={props.size}
                overlayOpacity={0.55}
                overlayBlur={3}
                opened={opened}
                title={props.label}
                withCloseButton={true}
                onClose={() => setOpened(false)}
            >

                <ScrollArea style={{ height: 600 }}>
                    <Image
                        radius="md"
                        src={props.pic}
                        alt="Hier sollte ein Bild sein ..."
                        withPlaceholder
                    />
                    <Space h={"xl"} />
                    <Text c="dimmed">{props.full_content}</Text>
                </ScrollArea>
            </Modal>

            <Group>
                <Image className={"NewsImage"}
                       onClick={() => setOpened(true)}
                       radius="md"
                       src={props.pic}
                       alt="Hier sollte ein Bild sein ..."
                       withPlaceholder
                />
            </Group>
        </div>
    );
}