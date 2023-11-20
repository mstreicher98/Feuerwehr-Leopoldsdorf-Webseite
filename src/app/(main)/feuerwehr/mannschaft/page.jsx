import Main from "../../../../components/Main/Main";
import { Text, TypographyStylesProvider } from "@mantine/core";

export const metadata = {
  title: "Mannschaft | Freiwillige Feuerwehr Leopoldsdorf",
  description: "Die Mannschaft der Freiwilligen Feuerwehr Leopoldsdorf",
};

export default function Mannscahft() {
  return (
    <Main>
      <Text component="div" ta="center" mb={30}>
        <TypographyStylesProvider pl={0}>
          <h1>Mannscahft</h1>
          <p>Die Mannschaft der Freiwilligen Feuerwehr Leopoldsdorf</p>
        </TypographyStylesProvider>
      </Text>
    </Main>
  );
}
