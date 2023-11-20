import Main from "../../../../components/Main/Main";
import { Image, Text, TypographyStylesProvider } from "@mantine/core";
import NextImage from "next/image";

import Loeschen from "/public/images/buergerservice/loeschen.png";

export const metadata = {
  title: "Richtig Löschen | Freiwillige Feuerwehr Leopoldsdorf",
  description: "Der richtige Umgang mit einem Feuerlöscher im Fall eines Brandes",
};

export default function RichtigLoeschen() {
  return (
    <Main>
      <Text component="div" ta="center" mb={30}>
        <TypographyStylesProvider pl={0}>
          <h1>Richtig Löschen</h1>
          <p>Der richtige Umgang mit einem Feuerlöscher im Fall eines Brandes</p>
        </TypographyStylesProvider>
        <Image
              h="auto"
              w="100%"
              fit="contain"
              component={NextImage}
              quality={80}
              src={Loeschen}
              alt="Richtig Löschen"
            />
      </Text>
    </Main>
  );
}
