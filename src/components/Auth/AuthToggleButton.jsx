"use client";
import "@mantine/core/styles.css";

import {
  useMantineTheme,
  useMantineColorScheme,
  useComputedColorScheme,
  Affix,
  ActionIcon,
} from "@mantine/core";
import cx from "clsx";
import { IconMoon, IconSun } from "@tabler/icons-react";

import classes from "./AuthToggleButton.module.css";

const AuthToggleButton = () => {
  const theme = useMantineTheme();

  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  return (
    <Affix position={{ bottom: 30, right: 30 }}>
      <ActionIcon
        onClick={() =>
          setColorScheme(computedColorScheme === "light" ? "dark" : "light")
        }
        variant="filled"
        size={50}
        radius={360}
        color={theme.colors.red[7]}
      >
        <IconSun className={cx(classes.icon, classes.light)} stroke={1.5} />
        <IconMoon className={cx(classes.icon, classes.dark)} stroke={1.5} />
      </ActionIcon>
    </Affix>
  );
}
export default AuthToggleButton;