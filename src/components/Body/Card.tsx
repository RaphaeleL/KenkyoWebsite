import {Space, Text} from "@mantine/core";

export default function Card(props: any) {
    return (
        <div className={"Card"}>
            <div className={"CardTitle"}>
                <Text tt="uppercase" fz="xl" fs="italic">{props.title}</Text>
            </div>
            <Space h="md" />
            <div className={"CardLogo"}>{props.logo}</div>
            <Space h="md" />
            <div className={"CardCount"}>
                <Text fw={700} fs="italic">{props.count}</Text>
            </div>
        </div>
    );
}