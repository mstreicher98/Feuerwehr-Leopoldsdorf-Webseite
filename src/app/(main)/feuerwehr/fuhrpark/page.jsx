import Main from "../../../../components/Main/Main";
import FahrzeugCard from "@/components/Fahrzeug/FahrzeugCard";

import { SimpleGrid, Text, TypographyStylesProvider } from "@mantine/core";

import { FUHRPARK_DATA } from "/public/data/feuerwehr.js";

export const metadata = {
  title: "Fuhrpark | Freiwillige Feuerwehr Leopoldsdorf",
  description: "Der Fuhrpark der Freiwilligen Feuerwehr Leopoldsdorf",
};

function findFahrzeug(fahrzeugid) {
  return FUHRPARK_DATA.find(({ id }) => id === fahrzeugid);
}

export default function Fuhrpark() {
  const fahrzeugListe = FUHRPARK_DATA.map((fahrzeug) => {
    return <FahrzeugCard key={fahrzeug.id} fahrzeug={fahrzeug} />;
  });


  return (
    <Main>
      <Text component="div" ta="center" mb={30}>
        <TypographyStylesProvider pl={0}>
          <h1>Fuhrpark</h1>
          <p>Der Fuhrpark der Freiwilligen Feuerwehr Leopoldsdorf</p>
        </TypographyStylesProvider>
      </Text>

      <SimpleGrid
        cols={{ base: 1, sm: 2, lg: 3 }}
        spacing={{ base: "sm", sm: "sm" }}
        verticalSpacing={{ base: "md", sm: "xl" }}
      >
        {fahrzeugListe}
      </SimpleGrid>
    </Main>
  );
}
