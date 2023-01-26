import {Skeleton} from "@mantine/core";

export default function Logo() {
    return (
        <div className={"Logo"}>
            <Skeleton height={50} circle mb="xl" />
        </div>
    );
}