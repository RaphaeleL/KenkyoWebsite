import Menu from "./Menu";
import LogoName from "./LogoName";
import Logo from "./Logo";
import { SimpleGrid } from "@mantine/core";

export default function Header() {
    return (
        <div className={"Header"} id={"Header"}>
            <SimpleGrid cols={2} >
                <SimpleGrid cols={2} >
                    <Logo />
                    <LogoName />
                </SimpleGrid>
                <Menu />
            </SimpleGrid>
        </div>
    );
}