import Main from "../../../../components/Main/Main";
import FahrzeugList from "../../../../components/Fahrzeug/FahrzeugList";

import { Text, TypographyStylesProvider } from "@mantine/core";

export const metadata = {
  title: "Fuhrpark | Freiwillige Feuerwehr Leopoldsdorf",
  description: "Der Fuhrpark der Freiwilligen Feuerwehr Leopoldsdorf",
};


const Fuhrpark = () => {
  return (
    <Main>
      <Text component="div" ta="center" mb={30}>
        <TypographyStylesProvider pl={0}>
          <h1>Fuhrpark</h1>
          <p>Der Fuhrpark der Freiwilligen Feuerwehr Leopoldsdorf</p>
        </TypographyStylesProvider>
      </Text>
      <FahrzeugList />
    </Main>
  );
}
export default Fuhrpark;