import { Button, Text } from "@mantine/core";
import { IconArrowBackUp } from "@tabler/icons-react";

import classes from "./MainNotFound.module.css";
import NextLink from "next/link";
import Main from "@/components/Main/Main";

export default function MainNotFound() {
  return (
    <Main centered>
      <Text
        fw={700}
        variant="gradient"
        gradient={{ from: "red.6", to: "red.9", deg: 128 }}
        className={classes.error}
      >
        404
      </Text>

      <Text
        fw={700}
        pb={30}
        variant="gradient"
        gradient={{ from: "red.6", to: "red.9", deg: 128 }}
        className={[classes.border, classes.subtext]}
      >
        Du hast einen geheimen Ort gefunden.
      </Text>

      <Text mt={30} size="xl">
        Leider ist dies nur eine Error 404 Seite. Möglicherweise hast du dich
        vertippt oder
        <br />
        die Adresse, die Seite wurde auf eine andere URL verschoben.
      </Text>

      <NextLink href="/">
        <Button
          mt={30}
          leftSection={<IconArrowBackUp size={14} />}
          variant="filled"
          color="red"
        >
          Zurück zu Startseite
        </Button>
      </NextLink>
    </Main>
  );
}
