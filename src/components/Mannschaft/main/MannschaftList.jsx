"use client";
import {
  Avatar,
  Card,
  Divider,
  Grid,
  GridCol,
  Group,
  Skeleton,
  Text,
  Title,
  UnstyledButton,
} from "@mantine/core";
import axios from "axios";
import { server, token } from "@/database/connection";

import classes from "./MannschaftList.module.css";
import cardClasses from "./MannschaftCard.module.css";

import { useEffect, useState } from "react";

const MannschaftLoading = () => {
  const xl = 2.4;
  const lg = 2.4;
  const md = 3;
  const sm = 4;
  const xs = 6;
  return (
    <>
      <GridCol span={{ xs, sm, md, lg, xl }}>
        <Skeleton height={375}></Skeleton>
      </GridCol>
      <GridCol span={{ xs, sm, md, lg, xl }}>
        <Skeleton height={375}></Skeleton>
      </GridCol>
      <GridCol span={{ xs, sm, md, lg, xl }}>
        <Skeleton height={375}></Skeleton>
      </GridCol>
      <GridCol span={{ xs, sm, md, lg, xl }}>
        <Skeleton height={375}></Skeleton>
      </GridCol>
      <GridCol span={{ xs, sm, md, lg, xl }}>
        <Skeleton height={375}></Skeleton>
      </GridCol>
      <GridCol span={{ xs, sm, md, lg, xl }}>
        <Skeleton height={375}></Skeleton>
      </GridCol>
      <GridCol span={{ xs, sm, md, lg, xl }}>
        <Skeleton height={375}></Skeleton>
      </GridCol>
      <GridCol span={{ xs, sm, md, lg, xl }}>
        <Skeleton height={375}></Skeleton>
      </GridCol>
      <GridCol span={{ xs, sm, md, lg, xl }}>
        <Skeleton height={375}></Skeleton>
      </GridCol>
      <GridCol span={{ xs, sm, md, lg, xl }}>
        <Skeleton height={375}></Skeleton>
      </GridCol>
    </>
  );
};
const ChargenLoading = () => {
  const xl = 3;
  const lg = 3;
  const md = 4;
  const sm = 6;
  const xs = 12;
  return (
    <>
      <GridCol span={{ xs, sm, md, lg, xl }}>
        <Skeleton height={600}></Skeleton>
      </GridCol>
      <GridCol span={{ xs, sm, md, lg, xl }}>
        <Skeleton height={600}></Skeleton>
      </GridCol>
      <GridCol span={{ xs, sm, md, lg, xl }}>
        <Skeleton height={600}></Skeleton>
      </GridCol>
      <GridCol span={{ xs, sm, md, lg, xl }}>
        <Skeleton height={600}></Skeleton>
      </GridCol>
      <GridCol span={{ xs, sm, md, lg, xl }}>
        <Skeleton height={600}></Skeleton>
      </GridCol>
      <GridCol span={{ xs, sm, md, lg, xl }}>
        <Skeleton height={600}></Skeleton>
      </GridCol>
      <GridCol span={{ xs, sm, md, lg, xl }}>
        <Skeleton height={600}></Skeleton>
      </GridCol>
      <GridCol span={{ xs, sm, md, lg, xl }}>
        <Skeleton height={600}></Skeleton>
      </GridCol>
    </>
  );
};
const MannschaftCard = ({ mann, xl, lg, md, sm, xs, ...props }) => {
  return (
    <GridCol span={{ xs, sm, md, lg, xl }}>
      <Card radius="md" p="xl" {...props}>
        <Avatar
          src={`${server}${mann.Profilbild.data.attributes.url}`}
          size={" 100%"}
          radius={360}
          mx="auto"
        />
        <Text ta="center" fz="lg" fw={500} mt="md" h={50} visibleFrom="sm">
          {mann.Nachname} {mann.Vorname}
        </Text>
        <Text ta="center" fz="sm" fw={500} mt="md" h={50} hiddenFrom="sm">
          {mann.Nachname} {mann.Vorname}
        </Text>
        <UnstyledButton className={cardClasses.dg}>
          <Group
            bg="var(--mantine-color-gray-light)"
            className={cardClasses.dgtext}
          >
            <Avatar
              src={`/images/dienstgrade/${mann.Dienstgrad}.png`}
              radius="sm"
              size="sm"
              alt={mann.Dienstgrad}
            />
            <div style={{ flex: 1 }}>
              <Text size="md" pr={10} mt={3} mb={3}>
                {mann.EhrenDG ? "E" : ""}
                {mann.Dienstgrad === "BR2" ? "BR" : ""}
                {mann.Dienstgrad === "JFM1" ||
                mann.Dienstgrad === "JFM2" ||
                mann.Dienstgrad === "JFM3" ||
                mann.Dienstgrad === "JFM4"
                  ? "JFM"
                  : ""}
                {(mann.Dienstgrad !== "JFM1") &
                (mann.Dienstgrad !== "JFM2") &
                (mann.Dienstgrad !== "JFM3") &
                (mann.Dienstgrad !== "JFM4") &
                (mann.Dienstgrad !== "BR2")
                  ? mann.Dienstgrad
                  : ""}
              </Text>
            </div>
          </Group>
        </UnstyledButton>
        {mann.Chargen ? (
          <>
            <Divider my="sm" />
            <Text
              ta="center"
              fz="md"
              mt="sm"
              c="red.7"
              mih={50}
              visibleFrom="sm"
            >
              {mann.Funktion === "" || mann.Funktion === null ? (
                <br />
              ) : (
                mann.Funktion
              )}
            </Text>
            <Text
              ta="center"
              fz="xs"
              mt="sm"
              c="red.7"
              mih={50}
              hiddenFrom="sm"
            >
              {mann.Funktion === "" || mann.Funktion === null ? (
                <br />
              ) : (
                mann.Funktion
              )}
            </Text>
          </>
        ) : null}
      </Card>
    </GridCol>
  );
};

const MannschaftList = () => {
  const [mannschaftChargen, setMannschaftChargen] = useState(
    <ChargenLoading />
  );
  const [mannschaftAktiv, setMannschaftAktiv] = useState(<MannschaftLoading />);
  const [mannschaftReserve, setMannschaftReserve] = useState(
    <MannschaftLoading />
  );
  const [mannschaftJugend, setMannschaftJugend] = useState(
    <MannschaftLoading />
  );

  useEffect(() => {
    axios
      .get(
        `${server}/api/mannschafts?populate=*&bearer=${token}&filters[Chargen][$eq]=true`
      )
      .then((res) => {
        const list = res.data.data.map((mann) => {
          return (
            <MannschaftCard
              key={mann.attributes.Standesbuchnummer}
              mann={mann.attributes}
              xl={3}
              lg={3}
              md={4}
              sm={6}
              xs={12}
            />
          );
        });
        setMannschaftChargen(list);
      });

    axios
      .get(
        `${server}/api/mannschafts?populate=*&bearer=${token}&filters[Dienststatus][$eq]=Aktiv&filters[Chargen][$eq]=false`
      )
      .then((res) => {
        const list = res.data.data.map((mann) => {
          return (
            <MannschaftCard
              key={mann.attributes.Standesbuchnummer}
              mann={mann.attributes}
              xl={2.4}
              lg={2.4}
              md={3}
              sm={4}
              sx={6}
            />
          );
        });
        setMannschaftAktiv(list);
      });

    axios
      .get(
        `${server}/api/mannschafts?populate=*&bearer=${token}&filters[Dienststatus][$eq]=Reserve&filters[Chargen][$eq]=false`
      )
      .then((res) => {
        const list = res.data.data.map((mann) => {
          return (
            <MannschaftCard
              key={mann.attributes.Standesbuchnummer}
              mann={mann.attributes}
              xl={2.4}
              lg={2.4}
              md={3}
              sm={4}
              xs={6}
            />
          );
        });
        setMannschaftReserve(list);
      });

    axios
      .get(
        `${server}/api/mannschafts?populate=*&bearer=${token}&filters[Dienststatus][$eq]=Jugend`
      )
      .then((res) => {
        const list = res.data.data.map((mann) => {
          return (
            <MannschaftCard
              key={mann.attributes.Standesbuchnummer}
              mann={mann.attributes}
              xl={2.4}
              lg={2.4}
              md={3}
              sm={4}
              xs={6}
            />
          );
        });
        setMannschaftJugend(list);
      });
  }, []);

  return (
    <>
      <Divider
        label={
          <Title
            tt="uppercase"
            className={classes.highlight}
            size={40}
            mb={40}
            mt={40}
          >
            Chargen / Sachbearbeiter
          </Title>
        }
      />
      <Grid justify="center" align="stretch">
        {mannschaftChargen}
      </Grid>

      <Divider
        label={
          <Title
            tt="uppercase"
            className={classes.highlight}
            size={40}
            mb={40}
            mt={40}
          >
            Aktiv Mannschaft
          </Title>
        }
      />
      <Grid justify="center" align="stretch">
        {mannschaftAktiv}
      </Grid>

      <Divider
        label={
          <Title
            tt="uppercase"
            className={classes.highlight}
            size={40}
            mb={40}
            mt={40}
          >
            Reservisten
          </Title>
        }
      />
      <Grid justify="center" align="stretch">
        {mannschaftReserve}
      </Grid>

      <Divider
        label={
          <Title
            tt="uppercase"
            className={classes.highlight}
            size={40}
            mb={40}
            mt={40}
          >
            Jugend
          </Title>
        }
      />
      <Grid justify="center" align="stretch">
        {mannschaftJugend}
      </Grid>
    </>
  );
};
export default MannschaftList;
