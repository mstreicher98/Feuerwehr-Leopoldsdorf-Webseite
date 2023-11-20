import Main from "../../../../components/Main/Main";
import {
  SimpleGrid,
  Text,
  TypographyStylesProvider,
} from "@mantine/core";

import KommandoCard from "../../../../components/KommandoCard/KommandoCard";
import { KOMMANDO_DATA } from "/public/data/feuerwehr.js";

export const metadata = {
  title: 'Kommando | Freiwillige Feuerwehr Leopoldsdorf',
  description: 'Das Kommando der Freiwilligen Feuerwehr Leopoldsdorf',
};

export default function Kommando() {
  return (
    <Main>
      <Text component="div" ta="center" mb={30}>
        <TypographyStylesProvider pl={0}>
          <h1>Kommando</h1>
          <p>Das Kommando der Freiwilligen Feuerwehr Leopoldsdorf</p>
        </TypographyStylesProvider>
      </Text>

      <SimpleGrid
        cols={{ base: 1, sm: 3, lg: 3 }}
        spacing={{ base: "sm", sm: "sm" }}
        verticalSpacing={{ base: "md", sm: "xl" }}
      >
        <KommandoCard person={KOMMANDO_DATA.verwaltung} visibleFrom="sm" />
        <KommandoCard person={KOMMANDO_DATA.kommandant} />
        <KommandoCard person={KOMMANDO_DATA.stellvertreter} />
        <KommandoCard person={KOMMANDO_DATA.verwaltung} hiddenFrom="sm" />
      </SimpleGrid>
    </Main>
  );
}
