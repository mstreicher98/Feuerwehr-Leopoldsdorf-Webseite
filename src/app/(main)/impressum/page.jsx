import Main from "../../../components/Main/Main";
import {
  Card,
  SimpleGrid,
  Text,
  TypographyStylesProvider,
  rem,
} from "@mantine/core";
import classes from "./page.module.css";

import Maps from "@/components/Maps/Maps";
import { IconMapPin } from "@tabler/icons-react";

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

      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
        <Card shadow="md" radius="md" padding="xl">
          <IconMapPin
            style={{ width: rem(50), height: rem(50) }}
            stroke={2}
            color="red.7"
      
          />
          <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
            Standort
          </Text>
          <Text fz="sm" c="dimmed" mt="sm">
            Leopoldsdorf
          </Text>
        </Card>

      </SimpleGrid>

      <Maps />
    </Main>
  );
}
