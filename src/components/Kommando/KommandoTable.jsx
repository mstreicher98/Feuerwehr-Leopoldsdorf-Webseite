"use client";
import { server, token } from "@/database/connection";
import {
  Avatar,
  Button,
  Card,
  Center,
  Divider,
  Group,
  ScrollArea,
  SimpleGrid,
  Text,
  UnstyledButton,
} from "@mantine/core";
import axios from "axios";

import { useEffect, useState } from "react";
import KommandoLoading from "./KommandoLoading";

import classes from "./KommandoTable.module.css";
import { IconEdit } from "@tabler/icons-react";

export function KommandoTable() {
  const [data, setData] = useState(<KommandoLoading />);

  useEffect(() => {
    axios
      .get(`${server}/api/kommandos?populate=*&bearer=${token}`)
      .then((res) => {
        const list = res.data.data.map((person) => {
          return (
            <div
              key={`${person.attributes.Nachname} ${person.attributes.Vorname}`}
            >
              <Card radius="md" pl="xl" pr="xl" pt="xl" m="xl" withBorder>
                <Avatar
                  src={`${server}${person.attributes.Profilbild.data.attributes.url}`}
                  size={"85%"}
                  radius={360}
                  mx={"auto"}
                />
                <Text ta="center" fz="lg" fw={500} mt="md">
                  {person.attributes.Nachname} {person.attributes.Vorname}
                </Text>
                <UnstyledButton className={classes.dg}>
                  <Group
                    bg="var(--mantine-color-gray-light)"
                    className={classes.dgtext}
                  >
                    <Avatar
                      src={`/images/dienstgrade/${person.attributes.Dienstgrad}.png`}
                      radius="sm"
                      size="sm"
                      alt={person.attributes.Dienstgrad}
                    />
                    <div style={{ flex: 1 }}>
                      <Text size="sm" pr={10} mt={3} mb={3}>
                        {person.attributes.Dienstgrad}
                      </Text>
                    </div>
                  </Group>
                </UnstyledButton>
                <Divider my="sm" />
                <Text ta="center" fz="md" mt="sm" c="red.7">
                  {person.attributes.Funktion}
                </Text>
                <Text ta="center" c="dimmed" fz="sm" mt="md">
                  {person.attributes.Beschreibung}
                </Text>
                <Center mt={25}>
                  <Button size="md" color={"red.7"} variant="light" fullWidth>
                    <IconEdit /> Bearbeiten
                  </Button>
                </Center>
              </Card>
            </div>
          );
        });
        setData(list);
      });
  }, []);

  return (
    <Card mih={"100%"} mah={"100%"}>
      <ScrollArea h={"100vh"}>
        <SimpleGrid
          mt={25}
          cols={{ base: 1, sm: 1, lg: 3 }}
          spacing={{ base: "lg", sm: "lg" }}
          verticalSpacing={{ base: "lg", sm: "xl" }}
        >
          {data}
        </SimpleGrid>
      </ScrollArea>
    </Card>
  );
}
