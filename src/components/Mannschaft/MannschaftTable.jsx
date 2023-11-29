import { server, token } from '@/database/connection';
import { Avatar, Badge, Table, Group, Text, ActionIcon, Anchor, rem, UnstyledButton, TableThead, TableScrollContainer, TableTr, TableTbody, TableTh, TableTd, Center, Card, TextInput } from '@mantine/core';
import { IconCheck, IconPencil, IconSearch, IconTrash, IconX } from '@tabler/icons-react';
import axios from 'axios';

import classes from "./MannschaftTable.module.css";

const statusColors = {
    Aktiv: 'lime.5',
    Reserve: 'red.6',
    Jugend: 'yellow.6',
};

export async function MannschaftTable() {
    const mannschaftRes = await axios.get(
        `${server}/api/mannschafts?populate=*&bearer=${token}`
    );
    const mannschaftRows = mannschaftRes.data.data.map((mann) => {
        return (<TableTr key={mann.attributes.Standesbuchnummer}>
            <TableTd>
                <Group gap="sm">
                    <Avatar size={30} src={`${server}${mann.attributes.Profilbild.data.attributes.url}`} radius={30} />
                    <Text fz="sm" fw={500}>
                        {mann.attributes.Nachname} {mann.attributes.Vorname}
                    </Text>
                </Group>
            </TableTd>

            <TableTd  >
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
                                {mann.attributes.Dienstgrad === "BR2" ? "BR" : mann.attributes.Dienstgrad}
                            </Text>
                        </div>
                    </Group>
                </UnstyledButton>
            </TableTd>

            <TableTd  >
                <Badge color={statusColors[mann.attributes.Dienststatus]} variant="light">
                    {mann.attributes.Dienststatus}
                </Badge>
            </TableTd>

            <TableTd  >
                {mann.attributes.Chargen === true ?
                    <ActionIcon variant="transparent" color="lime" aria-label="Settings">
                        <IconCheck style={{ width: '70%', height: '70%' }} stroke={1.5} />
                    </ActionIcon>
                    :
                    <ActionIcon variant="transparent" color="red.7" aria-label="Settings">
                        <IconX style={{ width: '70%', height: '70%' }} stroke={1.5} />
                    </ActionIcon>
                }
            </TableTd>

            <TableTd  >
                <Text fz="sm" mt="sm" c="red.7">
                    {mann.attributes.Funktion === "" || mann.attributes.Funktion === null ? " " : mann.attributes.Funktion}
                </Text>
            </TableTd>

            <TableTd>
                <Group gap={10} justify="flex-end">
                    <ActionIcon variant="subtle" size={"md"} color="gray">
                        <IconPencil style={{ width: "90%", height: "90%" }} stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon variant="subtle" color="red">
                        <IconTrash style={{ width: "90%", height: "90%" }} stroke={1.5} />
                    </ActionIcon>
                </Group>
            </TableTd>
        </TableTr>);
    });

    const mannschaftSMRows = mannschaftRes.data.data.map((mann) => {
        return (<TableTr key={mann.attributes.Standesbuchnummer}>
            <TableTd>
                <Group gap="sm">
                    <Avatar size={30} src={`${server}${mann.attributes.Profilbild.data.attributes.url}`} radius={30} />
                    <Text fz="sm" fw={500}>
                        {mann.attributes.Nachname} {mann.attributes.Vorname}
                    </Text>
                </Group>
            </TableTd>
            <TableTd>
                <Group gap={10} justify="flex-end">
                    <ActionIcon variant="subtle" size={"md"} color="gray">
                        <IconPencil style={{ width: "90%", height: "90%" }} stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon variant="subtle" color="red">
                        <IconTrash style={{ width: "90%", height: "90%" }} stroke={1.5} />
                    </ActionIcon>
                </Group>
            </TableTd>
        </TableTr>);
    });


    return (
        <Card mah={"100%"}>
            <TableScrollContainer visibleFrom="md" minWidth={800} h={10000} ta={"center"}>
                <Table stickyHeader highlightOnHover verticalSpacing="sm">
                    <TableThead className={classes.thead}>
                        <TableTr>
                            <TableTh ta="center">Mitglied</TableTh>
                            <TableTh ta="center"  >Dienstgrad</TableTh>
                            <TableTh ta="center"  >Status</TableTh>
                            <TableTh ta="center"  >Charge</TableTh>
                            <TableTh ta="center"  >Funktion</TableTh>
                            <TableTh />
                        </TableTr>
                    </TableThead>
                    <TableTbody>{mannschaftRows}</TableTbody>
                </Table>
            </TableScrollContainer>
            <TableScrollContainer hiddenFrom="md" minWidth={100} h={10000} ta={"center"}>
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