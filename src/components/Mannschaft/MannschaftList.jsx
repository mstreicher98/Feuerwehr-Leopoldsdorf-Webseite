"use client";
import MannschaftCard from "./MannschaftCard";
import MannschaftLoading from "./MannschaftLoading";
import ChargenLoading from "./ChargenLoading";
import { Divider, Grid, SimpleGrid, Title } from "@mantine/core";
import axios from "axios";

import { server, token } from "@/database/connection";

import classes from "./MannschaftList.module.css";
import { useEffect, useState } from "react";

export default function MannschaftList() {
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
}
