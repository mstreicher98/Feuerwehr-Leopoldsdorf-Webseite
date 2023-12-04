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
import {
  IconCheck,
  IconPencil,
  IconSearch,
  IconTrash,
  IconX,
} from "@tabler/icons-react";
import axios from "axios";

import {
  MannschaftTableLoading,
  MannschaftTableLoadingSM,
} from "./MannschaftTableLoading";

import classes from "./MannschaftTable.module.css";
import { useEffect, useState } from "react";

const statusColors = {
  Aktiv: "lime.5",
  Reserve: "red.6",
  Jugend: "yellow.6",
};

export function MannschaftTable() {
  const [mannschaftRows, setMannschaftRows] = useState(
    <MannschaftTableLoading />
  );
  const [mannschaftSMRows, setMannschaftSMRows] = useState(
    <MannschaftTableLoadingSM />
  );

  useEffect(() => {
    axios
      .get(`${server}/api/mannschafts?populate=*&bearer=${token}&sort[0]=Nachname&sort[1]=Vorname`)
      .then((res) => {
        const list = res.data.data.map((mann) => {
          return (
            <TableTr key={mann.attributes.Standesbuchnummer}>
              <TableTd>
                <Group gap="sm">
                  <Avatar
                    size={30}
                    src={`${server}${mann.attributes.Profilbild.data.attributes.url}`}
                    radius={30}
                  />
                  <Text fz="sm" fw={500}>
                    {mann.attributes.Nachname} {mann.attributes.Vorname}
                  </Text>
                </Group>
              </TableTd>

              <TableTd>
                <UnstyledButton className={classes.dg}>
                  <Group
                    bg="var(--mantine-color-gray-light)"
                    className={classes.dgtext}
                  >
                    <Avatar
                      src={`/images/dienstgrade/${mann.attributes.Dienstgrad}.png`}
                      radius="sm"
                      size="sm"
                      alt={mann.attributes.Dienstgrad}
                    />
                    <div style={{ flex: 1 }}>
                      <Text size="sm" pr={10} mt={3} mb={3}>
                        {mann.attributes.EhrenDG ? "E" : ""}
                        {mann.attributes.Dienstgrad === "BR2"
                          ? "BR"
                          : mann.attributes.Dienstgrad}
                      </Text>
                    </div>
                  </Group>
                </UnstyledButton>
              </TableTd>

              <TableTd>
                <Badge
                  color={statusColors[mann.attributes.Dienststatus]}
                  variant="light"
                >
                  {mann.attributes.Dienststatus}
                </Badge>
              </TableTd>

              <TableTd>
                {mann.attributes.Chargen === true ? (
                  <ActionIcon
                    variant="transparent"
                    color="lime"
                    aria-label="Settings"
                  >
                    <IconCheck
                      style={{ width: "70%", height: "70%" }}
                      stroke={1.5}
                    />
                  </ActionIcon>
                ) : (
                  <ActionIcon
                    variant="transparent"
                    color="red.7"
                    aria-label="Settings"
                  >
                    <IconX
                      style={{ width: "70%", height: "70%" }}
                      stroke={1.5}
                    />
                  </ActionIcon>
                )}
              </TableTd>

              <TableTd>
                <Text fz="sm" mt="sm" c="red.7">
                  {mann.attributes.Funktion === "" ||
                  mann.attributes.Funktion === null
                    ? " "
                    : mann.attributes.Funktion}
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
        setMannschaftRows(list);

        const list2 = res.data.data.map((mann) => {
          return (
            <TableTr key={mann.attributes.Standesbuchnummer}>
              <TableTd>
                <Group gap="sm">
                  <Avatar
                    size={30}
                    src={`${server}${mann.attributes.Profilbild.data.attributes.url}`}
                    radius={30}
                  />
                  <Text fz="sm" fw={500}>
                    {mann.attributes.Nachname} {mann.attributes.Vorname}
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

        setMannschaftSMRows(list2);
      });
  }, []);

  function handleSearch(event) {
    if (event.target.value.trim() !== "") {
      setMannschaftRows(<MannschaftTableLoading />);
      setMannschaftSMRows(<MannschaftTableLoadingSM />);

      axios
        .get(
          `${server}/api/mannschafts?populate=*&filters[$or][1][Vorname][$contains]=${event.target.value}&filters[$or][0][Nachname][$contains]=${event.target.value}&bearer=${token}&sort[0]=Nachname&sort[1]=Vorname`
        )
        .then((res) => {
          if (res.data.data.length > 0) {
            const list = res.data.data.map((mann) => {
              return (
                <TableTr key={mann.attributes.Standesbuchnummer}>
                  <TableTd>s
                    <Group gap="sm">
                      <Avatar
                        size={30}
                        src={`${server}${mann.attributes.Profilbild.data.attributes.url}`}
                        radius={30}
                      />
                      <Text fz="sm" fw={500}>
                        {mann.attributes.Nachname} {mann.attributes.Vorname}
                      </Text>
                    </Group>
                  </TableTd>

                  <TableTd>
                    <UnstyledButton className={classes.dg}>
                      <Group
                        bg="var(--mantine-color-gray-light)"
                        className={classes.dgtext}
                      >
                        <Avatar
                          src={`/images/dienstgrade/${mann.attributes.Dienstgrad}.png`}
                          radius="sm"
                          size="sm"
                          alt={mann.attributes.Dienstgrad}
                        />
                        <div style={{ flex: 1 }}>
                          <Text size="sm" pr={10} mt={3} mb={3}>
                            {mann.attributes.EhrenDG ? "E" : ""}
                            {mann.attributes.Dienstgrad === "BR2"
                              ? "BR"
                              : mann.attributes.Dienstgrad}
                          </Text>
                        </div>
                      </Group>
                    </UnstyledButton>
                  </TableTd>

                  <TableTd>
                    <Badge
                      color={statusColors[mann.attributes.Dienststatus]}
                      variant="light"
                    >
                      {mann.attributes.Dienststatus}
                    </Badge>
                  </TableTd>

                  <TableTd>
                    {mann.attributes.Chargen === true ? (
                      <ActionIcon
                        variant="transparent"
                        color="lime"
                        aria-label="Settings"
                      >
                        <IconCheck
                          style={{ width: "70%", height: "70%" }}
                          stroke={1.5}
                        />
                      </ActionIcon>
                    ) : (
                      <ActionIcon
                        variant="transparent"
                        color="red.7"
                        aria-label="Settings"
                      >
                        <IconX
                          style={{ width: "70%", height: "70%" }}
                          stroke={1.5}
                        />
                      </ActionIcon>
                    )}
                  </TableTd>

                  <TableTd>
                    <Text fz="sm" mt="sm" c="red.7">
                      {mann.attributes.Funktion === "" ||
                      mann.attributes.Funktion === null
                        ? " "
                        : mann.attributes.Funktion}
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
            setMannschaftRows(list);

            const list2 = res.data.data.map((mann) => {
              return (
                <TableTr key={mann.attributes.Standesbuchnummer}>
                  <TableTd>
                    <Group gap="sm">
                      <Avatar
                        size={30}
                        src={`${server}${mann.attributes.Profilbild.data.attributes.url}`}
                        radius={30}
                      />
                      <Text fz="sm" fw={500}>
                        {mann.attributes.Nachname} {mann.attributes.Vorname}
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

            setMannschaftSMRows(list2);
          } else {
            const noContent = (
              <TableTr h={300}>
                <TableTd colSpan={6}>
                  <Center h={"100%"}>
                    <Box>Kein Mitglied gefunden...</Box>
                  </Center>
                </TableTd>
              </TableTr>
            );
            setMannschaftRows(noContent);
            setMannschaftSMRows(noContent);
          }
        });
    } else {
      axios
        .get(`${server}/api/mannschafts?populate=*&bearer=${token}&sort[0]=Nachname&sort[1]=Vorname`)
        .then((res) => {
          const list = res.data.data.map((mann) => {
            return (
              <TableTr key={mann.attributes.Standesbuchnummer}>
                <TableTd>
                  <Group gap="sm">
                    <Avatar
                      size={30}
                      src={`${server}${mann.attributes.Profilbild.data.attributes.url}`}
                      radius={30}
                    />
                    <Text fz="sm" fw={500}>
                      {mann.attributes.Nachname} {mann.attributes.Vorname}
                    </Text>
                  </Group>
                </TableTd>

                <TableTd>
                  <UnstyledButton className={classes.dg}>
                    <Group
                      bg="var(--mantine-color-gray-light)"
                      className={classes.dgtext}
                    >
                      <Avatar
                        src={`/images/dienstgrade/${mann.attributes.Dienstgrad}.png`}
                        radius="sm"
                        size="sm"
                        alt={mann.attributes.Dienstgrad}
                      />
                      <div style={{ flex: 1 }}>
                        <Text size="sm" pr={10} mt={3} mb={3}>
                          {mann.attributes.EhrenDG ? "E" : ""}
                          {mann.attributes.Dienstgrad === "BR2"
                            ? "BR"
                            : mann.attributes.Dienstgrad}
                        </Text>
                      </div>
                    </Group>
                  </UnstyledButton>
                </TableTd>

                <TableTd>
                  <Badge
                    color={statusColors[mann.attributes.Dienststatus]}
                    variant="light"
                  >
                    {mann.attributes.Dienststatus}
                  </Badge>
                </TableTd>

                <TableTd>
                  {mann.attributes.Chargen === true ? (
                    <ActionIcon
                      variant="transparent"
                      color="lime"
                      aria-label="Settings"
                    >
                      <IconCheck
                        style={{ width: "70%", height: "70%" }}
                        stroke={1.5}
                      />
                    </ActionIcon>
                  ) : (
                    <ActionIcon
                      variant="transparent"
                      color="red.7"
                      aria-label="Settings"
                    >
                      <IconX
                        style={{ width: "70%", height: "70%" }}
                        stroke={1.5}
                      />
                    </ActionIcon>
                  )}
                </TableTd>

                <TableTd>
                  <Text fz="sm" mt="sm" c="red.7">
                    {mann.attributes.Funktion === "" ||
                    mann.attributes.Funktion === null
                      ? " "
                      : mann.attributes.Funktion}
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
          setMannschaftRows(list);

          const list2 = res.data.data.map((mann) => {
            return (
              <TableTr key={mann.attributes.Standesbuchnummer}>
                <TableTd>
                  <Group gap="sm">
                    <Avatar
                      size={30}
                      src={`${server}${mann.attributes.Profilbild.data.attributes.url}`}
                      radius={30}
                    />
                    <Text fz="sm" fw={500}>
                      {mann.attributes.Nachname} {mann.attributes.Vorname}
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

          setMannschaftSMRows(list2);
        });
    }
  }

  return (
    <Card mah={"100%"}>
      <TextInput
        radius="xl"
        size="md"
        placeholder="Mitglieder durchsuchen"
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
        ta={"center"}
      >
        <Table stickyHeader highlightOnHover verticalSpacing="sm">
          <TableThead className={classes.thead}>
            <TableTr>
              <TableTh ta="center">Mitglied</TableTh>
              <TableTh ta="center">Dienstgrad</TableTh>
              <TableTh ta="center">Status</TableTh>
              <TableTh ta="center">Charge</TableTh>
              <TableTh ta="center">Funktion</TableTh>
              <TableTh />
            </TableTr>
          </TableThead>
          <TableTbody>{mannschaftRows}</TableTbody>
        </Table>
      </TableScrollContainer>
      <TableScrollContainer
        hiddenFrom="md"
        minWidth={100}
        h={10000}
        ta={"center"}
      >
        <Table stickyHeader highlightOnHover verticalSpacing="sm">
          <TableThead className={classes.thead}>
            <TableTr>
              <TableTh>Mitglied</TableTh>
              <TableTh />
            </TableTr>
          </TableThead>
          <TableTbody>{mannschaftSMRows}</TableTbody>
        </Table>
      </TableScrollContainer>
    </Card>
  );
}
