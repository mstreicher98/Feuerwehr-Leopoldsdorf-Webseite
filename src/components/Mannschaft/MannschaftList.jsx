import MannschaftCard from "./MannschaftCard";
import { SimpleGrid, Text, TypographyStylesProvider } from "@mantine/core";
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
      <Text component="div" ta="center" mb={30}>
        <TypographyStylesProvider pl={0}>
          <h1 className={classes.highlight}>
            Chargen
          </h1>
        </TypographyStylesProvider>
      </Text>
      <SimpleGrid
        cols={{ base: 1, sm: 2, lg: 3 }}
        spacing={{ base: "sm", sm: "sm" }}
        verticalSpacing={{ base: "md", sm: "xl" }}
      >
        {mannschaftChargenListe}
      </SimpleGrid>

      <Text component="div" ta="center" mb={30}>
        <TypographyStylesProvider pl={0}>
          <h1 className={classes.highlight}>
            Mannschaft
          </h1>
        </TypographyStylesProvider>
      </Text>
      <SimpleGrid
        cols={{ base: 1, sm: 2, lg: 3 }}
        spacing={{ base: "sm", sm: "sm" }}
        verticalSpacing={{ base: "md", sm: "xl" }}
      >
        {mannschaftAktivListe}
      </SimpleGrid>

      <Text component="div" ta="center" mb={30}>
        <TypographyStylesProvider pl={0}>
          <h1 className={classes.highlight}>
            Reservisten
          </h1>
        </TypographyStylesProvider>
      </Text>
      <SimpleGrid
        cols={{ base: 1, sm: 2, lg: 3 }}
        spacing={{ base: "sm", sm: "sm" }}
        verticalSpacing={{ base: "md", sm: "xl" }}
      >
        {mannschaftReserveListe}
      </SimpleGrid>

      <Text component="div" ta="center" mb={30}>
        <TypographyStylesProvider pl={0}>
          <h1 className={classes.highlight}>
            Jugend
          </h1>
        </TypographyStylesProvider>
      </Text>
      <SimpleGrid
        cols={{ base: 1, sm: 2, lg: 3 }}
        spacing={{ base: "sm", sm: "sm" }}
        verticalSpacing={{ base: "md", sm: "xl" }}
      >
        {mannschaftJugendListe}
      </SimpleGrid>
    </>
  );
}
