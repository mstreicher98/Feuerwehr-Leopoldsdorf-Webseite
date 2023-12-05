"use client";
import { server, token } from "@/database/connection";
import {
  Avatar,
  Badge,
  Table,
  Group,
  Text,
  ActionIcon,
  UnstyledButton,
  TableThead,
  TableScrollContainer,
  TableTr,
  TableTbody,
  TableTh,
  TableTd,
  Card,
  TextInput,
  rem,
  Center,
  Box,
} from "@mantine/core";
import { IconPencil, IconSearch, IconTrash } from "@tabler/icons-react";
import axios from "axios";

import {
  FahrzeugTableLoading,
  FahrzeugTableLoadingSM,
} from "./FahrzeugTableLoading";

import classes from "./FahrzeugTable.module.css";
import { useEffect, useState } from "react";

const statusColors = {
  Aktiv: "lime.5",
  Reserve: "red.6",
  Jugend: "yellow.6",
};

export function FahrzeugTable() {
  const [fahrzeugRows, setFahrzeugRows] = useState(<FahrzeugTableLoading />);
  const [fahrzeugSMRows, setFahrzeugSMRows] = useState(
    <FahrzeugTableLoadingSM />
  );

  useEffect(() => {
    axios
      .get(`${server}/api/Fahrzeuges?populate=*&bearer=${token}`)
      .then((res) => {
        const list = res.data.data.map((fahrzeug) => {
          return (
            <TableTr key={fahrzeug.attributes.Fahrzeug_id} h={50}>
              <TableTd>
                <Group gap="sm">
                  <Avatar
                    size={80}
                    src={`${server}${fahrzeug.attributes.Titelbild.data.attributes.url}`}
                    radius={0}
                    h={80}
                    w={"auto"}
                  />
                  <Text fz="sm" fw={500}>
                    {fahrzeug.attributes.Bezeichnung}
                  </Text>
                </Group>
              </TableTd>

              <TableTd>
                <Text fz="sm" mt="sm">
                  {fahrzeug.attributes.Kurzbezeichnung}
                </Text>
              </TableTd>
              <TableTd>
                <Text fz="sm" mt="sm" c="red.7">
                  {fahrzeug.attributes.Funkname}
                </Text>
              </TableTd>

              <TableTd>
                <Group gap={10} justify="flex-end">
                  <ActionIcon variant="subtle" size={"md"} color="gray">
                    <IconPencil
                      style={{ width: "90%", height: "90%" }}
                      stroke={1.5}
                    />
                  </ActionIcon>
                  <ActionIcon variant="subtle" color="red">
                    <IconTrash
                      style={{ width: "90%", height: "90%" }}
                      stroke={1.5}
                    />
                  </ActionIcon>
                </Group>
              </TableTd>
            </TableTr>
          );
        });
        setFahrzeugRows(list);

        const list2 = res.data.data.map((fahrzeug) => {
          return (
            <TableTr key={fahrzeug.attributes.Fahrzeug_id}>
              <TableTd>
                <Group gap="sm">
                  <Avatar
                    size={40}
                    src={`${server}${fahrzeug.attributes.Titelbild.data.attributes.url}`}
                    radius={0}
                    h={40}
                    w={"auto"}
                  />
                  <Text fz="sm" fw={500}>
                  {fahrzeug.attributes.Kurzbezeichnung}
                  </Text>
                </Group>
              </TableTd>

              <TableTd>
                <Group gap={10} justify="flex-end">
                  <ActionIcon variant="subtle" size={"md"} color="gray">
                    <IconPencil
                      style={{ width: "90%", height: "90%" }}
                      stroke={1.5}
                    />
                  </ActionIcon>
                  <ActionIcon variant="subtle" color="red">
                    <IconTrash
                      style={{ width: "90%", height: "90%" }}
                      stroke={1.5}
                    />
                  </ActionIcon>
                </Group>
              </TableTd>
            </TableTr>
          );
        });

        setFahrzeugSMRows(list2);
      });
  }, []);

  function handleSearch(event) {
    if (event.target.value.trim() !== "") {
      axios
        .get(
          `${server}/api/Fahrzeuges?populate=*&filters[$or][1][Bezeichnung][$contains]=${event.target.value}&filters[$or][0][Kurzbezeichnung][$contains]=${event.target.value}&bearer=${token}`
        )
        .then((res) => {
          if (res.data.data.length > 0) {
            const list = res.data.data.map((fahrzeug) => {
              return (
                <TableTr key={fahrzeug.attributes.Fahrzeug_id} h={50}>
                  <TableTd>
                    <Group gap="sm">
                      <Avatar
                        size={80}
                        src={`${server}${fahrzeug.attributes.Titelbild.data.attributes.url}`}
                        radius={0}
                        h={80}
                        w={"auto"}
                      />
                      <Text fz="sm" fw={500}>
                        {fahrzeug.attributes.Bezeichnung}
                      </Text>
                    </Group>
                  </TableTd>

                  <TableTd>
                    <Text fz="sm" mt="sm">
                      {fahrzeug.attributes.Kurzbezeichnung}
                    </Text>
                  </TableTd>
                  <TableTd>
                    <Text fz="sm" mt="sm" c="red.7">
                      {fahrzeug.attributes.Funkname}
                    </Text>
                  </TableTd>

                  <TableTd>
                    <Group gap={10} justify="flex-end">
                      <ActionIcon variant="subtle" size={"md"} color="gray">
                        <IconPencil
                          style={{ width: "90%", height: "90%" }}
                          stroke={1.5}
                        />
                      </ActionIcon>
                      <ActionIcon variant="subtle" color="red">
                        <IconTrash
                          style={{ width: "90%", height: "90%" }}
                          stroke={1.5}
                        />
                      </ActionIcon>
                    </Group>
                  </TableTd>
                </TableTr>
              );
            });
            setFahrzeugRows(list);

            const list2 = res.data.data.map((fahrzeug) => {
              return (
                <TableTr key={fahrzeug.attributes.Fahrzeug_id}>
                  <TableTd>
                    <Group gap="sm">
                      <Avatar
                        size={40}
                        src={`${server}${fahrzeug.attributes.Titelbild.data.attributes.url}`}
                        radius={0}
                        h={40}
                        w={"auto"}
                      />
                      <Text fz="sm" fw={500}>
                        {fahrzeug.attributes.Kurzbezeichnung}
                      </Text>
                    </Group>
                  </TableTd>

                  <TableTd>
                    <Group gap={10} justify="flex-end">
                      <ActionIcon variant="subtle" size={"md"} color="gray">
                        <IconPencil
                          style={{ width: "90%", height: "90%" }}
                          stroke={1.5}
                        />
                      </ActionIcon>
                      <ActionIcon variant="subtle" color="red">
                        <IconTrash
                          style={{ width: "90%", height: "90%" }}
                          stroke={1.5}
                        />
                      </ActionIcon>
                    </Group>
                  </TableTd>
                </TableTr>
              );
            });

            setFahrzeugSMRows(list2);
          } else {
            const noContent = (
              <TableTr h={300}>
                <TableTd colSpan={6}>
                  <Center h={"100%"}>
                    <Box>Kein Fahrzeug gefunden...</Box>
                  </Center>
                </TableTd>
              </TableTr>
            );
            setFahrzeugRows(noContent);
            setFahrzeugSMRows(noContent);
          }
        });
    } else {
      axios
        .get(`${server}/api/Fahrzeuges?populate=*&bearer=${token}`)
        .then((res) => {
          const list = res.data.data.map((fahrzeug) => {
            return (
              <TableTr key={fahrzeug.attributes.Fahrzeug_id} h={50}>
                <TableTd>
                  <Group gap="sm">
                    <Avatar
                      size={80}
                      src={`${server}${fahrzeug.attributes.Titelbild.data.attributes.url}`}
                      radius={0}
                      h={80}
                      w={"auto"}
                    />
                    <Text fz="sm" fw={500}>
                      {fahrzeug.attributes.Bezeichnung}
                    </Text>
                  </Group>
                </TableTd>

                <TableTd>
                  <Text fz="sm" mt="sm">
                    {fahrzeug.attributes.Kurzbezeichnung}
                  </Text>
                </TableTd>
                <TableTd>
                  <Text fz="sm" mt="sm" c="red.7">
                    {fahrzeug.attributes.Funkname}
                  </Text>
                </TableTd>

                <TableTd>
                  <Group gap={10} justify="flex-end">
                    <ActionIcon variant="subtle" size={"md"} color="gray">
                      <IconPencil
                        style={{ width: "90%", height: "90%" }}
                        stroke={1.5}
                      />
                    </ActionIcon>
                    <ActionIcon variant="subtle" color="red">
                      <IconTrash
                        style={{ width: "90%", height: "90%" }}
                        stroke={1.5}
                      />
                    </ActionIcon>
                  </Group>
                </TableTd>
              </TableTr>
            );
          });
          setFahrzeugRows(list);

          const list2 = res.data.data.map((fahrzeug) => {
            return (
              <TableTr key={fahrzeug.attributes.Fahrzeug_id}>
                <TableTd>
                  <Group gap="sm">
                    <Avatar
                      size={40}
                      src={`${server}${fahrzeug.attributes.Titelbild.data.attributes.url}`}
                      radius={0}
                      h={40}
                      w={"auto"}
                    />
                    <Text fz="sm" fw={500}>
                    {fahrzeug.attributes.Kurzbezeichnung}
                    </Text>
                  </Group>
                </TableTd>

                <TableTd>
                  <Group gap={10} justify="flex-end">
                    <ActionIcon variant="subtle" size={"md"} color="gray">
                      <IconPencil
                        style={{ width: "90%", height: "90%" }}
                        stroke={1.5}
                      />
                    </ActionIcon>
                    <ActionIcon variant="subtle" color="red">
                      <IconTrash
                        style={{ width: "90%", height: "90%" }}
                        stroke={1.5}
                      />
                    </ActionIcon>
                  </Group>
                </TableTd>
              </TableTr>
            );
          });

          setFahrzeugSMRows(list2);
        });
    }
  }

  return (
    <Card mah={"100%"}>
      <TextInput
        radius="xl"
        size="md"
        placeholder="Fahrzeuge durchsuchen"
        rightSectionWidth={42}
        onChange={handleSearch}
        leftSection={
          <IconSearch
            style={{ width: rem(18), height: rem(18) }}
            stroke={1.5}
          />
        }
      />
      <TableScrollContainer
        visibleFrom="md"
        mt={16}
        minWidth={800}
        h={10000}
      >
        <Table stickyHeader highlightOnHover verticalSpacing="sm">
          <TableThead className={classes.thead}>
            <TableTr>
              <TableTh>Fahrzeug</TableTh>
              <TableTh>Kurz</TableTh>
              <TableTh>Funkname</TableTh>
              <TableTh />
            </TableTr>
          </TableThead>
          <TableTbody>{fahrzeugRows}</TableTbody>
        </Table>
      </TableScrollContainer>
      <TableScrollContainer
        hiddenFrom="md"
        minWidth={100}
        h={10000}
      >
        <Table stickyHeader highlightOnHover verticalSpacing="sm">
          <TableThead className={classes.thead}>
            <TableTr>
              <TableTh>Fahrzeug</TableTh>
              <TableTh />
            </TableTr>
          </TableThead>
          <TableTbody>{fahrzeugSMRows}</TableTbody>
        </Table>
      </TableScrollContainer>
    </Card>
  );
}
