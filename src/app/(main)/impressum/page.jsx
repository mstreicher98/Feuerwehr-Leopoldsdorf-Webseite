import Main from "../../../components/Main/Main";
import {
  Text,
  TypographyStylesProvider,
} from "@mantine/core";
import classes from "./page.module.css";

import Maps from "@/components/Maps/Maps";

export const metadata = {
  title: "Impressum | Freiwillige Feuerwehr Leopoldsdorf",
  description: "Impressum der Freiwilligen Feuerwehr Leopoldsdorf",
};


export default function Impressum() {
  return (
    <Main>
      <Text component="div" ta="center" mb={30}>
        <TypographyStylesProvider pl={0}>
          <h1>Impressum</h1>
          <p>Impressum der Freiwilligen Feuerwehr Leopoldsdorf</p>
        </TypographyStylesProvider>
      </Text>

      <Maps />
    </Main>
  );
}
