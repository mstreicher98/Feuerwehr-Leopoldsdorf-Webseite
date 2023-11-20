import Main from "../../../../../components/Main/Main";
import { Text, TypographyStylesProvider } from "@mantine/core";

import { notFound } from "next/navigation";

import { FUHRPARK_DATA } from "/public/data/feuerwehr.js";

export function generateMetadata({ params }) {
  const fahrzeug = findFahrzeug(params.id);

  if (fahrzeug === undefined) {
    notFound();
  }

  return {
    title: `${fahrzeug.kurzbezeichnung} | Freiwillige Feuerwehr Leopoldsdorf`,
    description: `${fahrzeug.beschreibung}`,
  };
}

function findFahrzeug(fahrzeugid) {
  return FUHRPARK_DATA.find(({ id }) => id === fahrzeugid);
}

export default function Fahrzeug({ params }) {
  const fahrzeug = findFahrzeug(params.id);
  if (fahrzeug === undefined) {
    notFound();
  }

  return (
    <Main>
      <Text component="div" ta="center" mb={30}>
        <TypographyStylesProvider pl={0}>
          <h1>{fahrzeug.kurzbezeichnung}</h1>
          <p>Der Fuhrpark der Freiwilligen Feuerwehr Leopoldsdorf</p>
        </TypographyStylesProvider>
      </Text>
    </Main>
  );
}
