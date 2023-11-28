import MannschaftCard from "./MannschaftCard";
import { Divider, SimpleGrid, Title } from "@mantine/core";
import axios from "axios";

import { server, token } from "@/database/connection";

import classes from "./MannschaftList.module.css";

export default async function MannschaftList() {
  const mannschaftChargenRes = await axios.get(
    `${server}/api/mannschafts?populate=*&bearer=${token}&filters[Chargen][$eq]=true`
  );
  const mannschaftChargenListe = mannschaftChargenRes.data.data.map((mann) => {
    return (
      <MannschaftCard
        key={mann.attributes.Standesbuchnummer}
        mann={mann.attributes}
      />
    );
  });


  const mannschaftAktivRes = await axios.get(
    `${server}/api/mannschafts?populate=*&bearer=${token}&filters[Dienststatus][$eq]=Aktiv&filters[Chargen][$eq]=false`
  );
  const mannschaftAktivListe = mannschaftAktivRes.data.data.map((mann) => {
    return (
      <MannschaftCard
        key={mann.attributes.Standesbuchnummer}
        mann={mann.attributes}
      />
    );
  });

  const mannschaftReserveRes = await axios.get(
    `${server}/api/mannschafts?populate=*&bearer=${token}&filters[Dienststatus][$eq]=Reserve`
  );
  const mannschaftReserveListe = mannschaftReserveRes.data.data.map((mann) => {
    return (
      <MannschaftCard
        key={mann.attributes.Standesbuchnummer}
        mann={mann.attributes}
      />
    );
  });

  const mannschaftJugendRes = await axios.get(
    `${server}/api/mannschafts?populate=*&bearer=${token}&filters[Dienststatus][$eq]=Jugend`
  );
  const mannschaftJugendListe = mannschaftJugendRes.data.data.map((mann) => {
    return (
      <MannschaftCard
        key={mann.attributes.Standesbuchnummer}
        mann={mann.attributes}
      />
    );
  });
  return (
    <>
        <Divider label={<Title tt="uppercase" className={classes.highlight} size={40} mb={40} mt={40}>
           Chargen 
        </Title>} />
      <SimpleGrid
        cols={{ base: 1, sm: 2, lg: 4 }}
        spacing={{ base: "sm", sm: "sm" }}
        verticalSpacing={{ base: "md", sm: "xl" }}
      >
        {mannschaftChargenListe}
      </SimpleGrid>

      <Divider label={<Title tt="uppercase" className={classes.highlight} size={40} mb={40} mt={40}>
           Aktiv Mannschaft 
        </Title>} />
      <SimpleGrid
        cols={{ base: 1, sm: 2, lg: 4 }}
        spacing={{ base: "sm", sm: "sm" }}
        verticalSpacing={{ base: "md", sm: "xl" }}
      >
        {mannschaftAktivListe}
      </SimpleGrid>

      <Divider label={<Title tt="uppercase" className={classes.highlight} size={40} mb={40} mt={40}>
        Reservisten 
      </Title>} />
      <SimpleGrid
        cols={{ base: 1, sm: 2, lg: 4 }}
        spacing={{ base: "sm", sm: "sm" }}
        verticalSpacing={{ base: "md", sm: "xl" }}
      >
        {mannschaftReserveListe}
      </SimpleGrid>

      <Divider label={<Title tt="uppercase" className={classes.highlight} size={40} mb={40} mt={40}>
        Jugend 
      </Title>} />
      <SimpleGrid
        cols={{ base: 1, sm: 2, lg: 4 }}
        spacing={{ base: "sm", sm: "sm" }}
        verticalSpacing={{ base: "md", sm: "xl" }}
      >
        {mannschaftJugendListe}
      </SimpleGrid>
    </>
  );
}
