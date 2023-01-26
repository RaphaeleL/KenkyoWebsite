import { ThemeIcon, Tooltip, useMantineColorScheme } from '@mantine/core';
import React from "react";
import {BsMoonStars, BsSun} from "react-icons/bs";

export default function ThemeSwitcher() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <div>
      {dark
        ?
        <Tooltip label={"Helles Thema"} position="left" withArrow>
          <ThemeIcon className={"click"} onClick={() => toggleColorScheme()} radius="xl" size="xl" color="yellow">
            <BsSun />
          </ThemeIcon>
        </Tooltip>
        :
        <Tooltip label={"Dunkles Thema"} position="left" withArrow>
          <ThemeIcon className={"click"} onClick={() => toggleColorScheme()} radius="xl" size="xl" color="dark">
            <BsMoonStars />
          </ThemeIcon>
        </Tooltip>}
    </div>
  );
}
