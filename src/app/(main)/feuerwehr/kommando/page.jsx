import Main from "../../../../components/Main/Main";
import {
  Text,
  TypographyStylesProvider,
} from "@mantine/core";

import KommandoList from "@/components/Kommando/KommandoList";

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
      <KommandoList />
    </Main>
  );
}
