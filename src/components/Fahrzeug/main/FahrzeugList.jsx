"use client";
import FahrzeugCard from "./FahrzeugCard";
import FahrzeugLoading from "./FahrzeugLoading";
import {
  Center,
  Divider,
  Grid,
  GridCol,
  Text,
  Title,
} from "@mantine/core";
import axios from "axios";

import { server, token } from "@/database/connection";
import { useEffect, useState } from "react";
import classes from "./FahrzeugList.module.css";

export default function FahrzeugList() {
  const [aktiv, setAktiv] = useState(<FahrzeugLoading />);
  const [historisch, setHistorisch] = useState(<FahrzeugLoading />);
  const [inaktiv, setInaktiv] = useState(<FahrzeugLoading />);

  useEffect(() => {
    axios
      .get(
        `${server}/api/fahrzeuges?sort[0]=sort_order&filters[Status][$eq]=Aktiv&populate=*&bearer=${token}`
      )
      .then((fahrzeugRes) => {
        if (fahrzeugRes.data.data.length > 0) {
          const list = fahrzeugRes.data.data.map((fahrzeug) => {
            return (
              <FahrzeugCard
                key={fahrzeug.attributes.Fahrzeug_id}
                fahrzeug={fahrzeug.attributes}
              />
            );
          });
          setAktiv(list);
        } else {
          const list = (
            <GridCol span={{ xl: 12, lg: 12, md: 12, sm: 12, xs: 12 }}>
              <Center>
                <Text>Keine Fahrzeuge verfügbar!</Text>
              </Center>
            </GridCol>
          );
          setAktiv(list);
        }
      });

    axios
      .get(
        `${server}/api/fahrzeuges?sort[0]=sort_order&filters[Status][$eq]=Historisch&populate=*&bearer=${token}`
      )
      .then((fahrzeugRes) => {
        if (fahrzeugRes.data.data.length > 0) {
          const list = fahrzeugRes.data.data.map((fahrzeug) => {
            return (
              <FahrzeugCard
                key={fahrzeug.attributes.Fahrzeug_id}
                fahrzeug={fahrzeug.attributes}
              />
            );
          });
          setHistorisch(list);
        } else {
          const list = (
            <GridCol span={{ xl: 12, lg: 12, md: 12, sm: 12, xs: 12 }}>
              <Center>
                <Text>Keine Fahrzeuge verfügbar!</Text>
              </Center>
            </GridCol>
          );
          setHistorisch(list);
        }
      });

    axios
      .get(
        `${server}/api/fahrzeuges?sort[0]=sort_order&filters[Status][$eq]=Inaktiv&populate=*&bearer=${token}`
      )
      .then((fahrzeugRes) => {
        if (fahrzeugRes.data.data.length > 0) {
          const list = fahrzeugRes.data.data.map((fahrzeug) => {
            return (
              <FahrzeugCard
                key={fahrzeug.attributes.Fahrzeug_id}
                fahrzeug={fahrzeug.attributes}
              />
            );
          });
          setInaktiv(list);
        } else {
          const list = (
            <GridCol span={{ xl: 12, lg: 12, md: 12, sm: 12, xs: 12 }}>
              <Center>
                <Text>Keine Fahrzeuge verfügbar!</Text>
              </Center>
            </GridCol>
          );
          setInaktiv(list);
        }
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
            Aktive Fahrzeuge
          </Title>
        }
      />
      <Grid justify="center" align="stretch">
        {aktiv}
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
            Historische Fahrzeuge
          </Title>
        }
      />
      <Grid justify="center" align="stretch">
        {historisch}
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
            Ausgeschiedene Fahrzeuge
          </Title>
        }
      />
      <Grid justify="center" align="stretch">
        {inaktiv}
      </Grid>
    </>
  );
}
