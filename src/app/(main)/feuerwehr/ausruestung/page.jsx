import Main from "../../../../components/Main/Main";
import { Text, TypographyStylesProvider } from "@mantine/core";

export const metadata = {
  title: "Ausrüstung | Freiwillige Feuerwehr Leopoldsdorf",
  description: "Die Ausrüstung der Freiwilligen Feuerwehr Leopoldsdorf",
};

export default function Fuhrpark() {
  return (
    <Main>
      <Text component="div" ta="center" mb={30}>
        <TypographyStylesProvider pl={0}>
          <h1>Ausrüstung</h1>
          <p>Die Ausrüstung der Freiwilligen Feuerwehr Leopoldsdorf</p>
        </TypographyStylesProvider>
      </Text>
    </Main>
  );
}
