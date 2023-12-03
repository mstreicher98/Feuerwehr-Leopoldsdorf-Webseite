"use client";
import MannschaftCard from "./MannschaftCard";
import MannschaftLoading from "./MannschaftLoading";
import ChargenLoading from "./ChargenLoading";
import { Divider, SimpleGrid, Title } from "@mantine/core";
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
      <SimpleGrid
        cols={{ base: 2, sm: 3, lg: 4 }}
        spacing={{ base: "sm", sm: "sm" }}
        verticalSpacing={{ base: "md", sm: "xl" }}
      >
        {mannschaftChargen}
      </SimpleGrid>

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
      <SimpleGrid
        cols={{ base: 2, sm: 3, lg: 5 }}
        spacing={{ base: "sm", sm: "sm" }}
        verticalSpacing={{ base: "md", sm: "xl" }}
      >
        {mannschaftAktiv}
      </SimpleGrid>

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
      <SimpleGrid
        cols={{ base: 2, sm: 3, lg: 5 }}
        spacing={{ base: "sm", sm: "sm" }}
        verticalSpacing={{ base: "md", sm: "xl" }}
      >
        {mannschaftReserve}
      </SimpleGrid>

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
      <SimpleGrid
        cols={{ base: 2, sm: 3, lg: 5 }}
        spacing={{ base: "sm", sm: "sm" }}
        verticalSpacing={{ base: "md", sm: "xl" }}
      >
        {mannschaftJugend}
      </SimpleGrid>
    </>
  );
}
