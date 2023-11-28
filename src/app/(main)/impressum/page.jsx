import Main from "../../../components/Main/Main";
import {
  ActionIcon,
  Anchor,
  Card,
  SimpleGrid,
  Text,
  rem,
} from "@mantine/core";
import classes from "./page.module.css";

import Maps from "@/components/Maps/Maps";
import { IconBuilding, IconCertificate, IconMapPin, IconPhone, IconTextCaption } from "@tabler/icons-react";
import { Banner } from "@/components/Banner/Impressum/Banner";
import { IconNews } from "@tabler/icons-react";

export const metadata = {
  title: "Impressum | Freiwillige Feuerwehr Leopoldsdorf",
  description: "Impressum der Freiwilligen Feuerwehr Leopoldsdorf",
};


export default function Impressum() {
  return (
    <>
      <Banner />
      <Main nomargin>
        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl" mt={50} mb={50}>
          <Card shadow="sm" radius="md" padding="xl">
            <ActionIcon variant="transparent" color="red.7" style={{ width: rem(50), height: rem(50) }}>
              <IconBuilding
                style={{ width: '100%', height: '100%' }}
                stroke={2}
              />
            </ActionIcon>
            <Text fz="xl" fw={500} className={classes.cardTitle} mt="md">
              Unternehmensgegenstand
            </Text>
            <Text fz="lg" c="dimmed" mt="sm">
              Wahrnehmung der Aufgaben im Sinn des NÖFG samt Dienstordnung und Dienstanweisungen des NÖLFV.
            </Text>
          </Card>
          <Card shadow="sm" radius="md" padding="xl">
            <ActionIcon variant="transparent" color="red.7" style={{ width: rem(50), height: rem(50) }}>
              <IconNews
                style={{ width: '100%', height: '100%' }}
                stroke={2}
              />
            </ActionIcon>
            <Text fz="xl" fw={500} className={classes.cardTitle} mt="md">
              Blattlinie
            </Text>
            <Text fz="lg" c="dimmed" mt="sm">
              Elektronisches Informationsmedium über den Aufbau, Organisation, Geschehnisse der Feuerwehren im Bezirk Bruck an der Leitha.
            </Text>
          </Card>
          <Card shadow="sm" radius="md" padding="xl">
            <ActionIcon variant="transparent" color="red.7" style={{ width: rem(50), height: rem(50) }}>
              <IconCertificate
                style={{ width: '100%', height: '100%' }}
                stroke={2}
              />
            </ActionIcon>
            <Text fz="xl" fw={500} className={classes.cardTitle} mt="md">
              Organe
            </Text>
            <Text fz="lg" c="dimmed" mt="sm">
              Organe laut §38 NÖFG:<br />
              Kommandant, Mitgliederversammlung.
            </Text>
          </Card>
          <Card shadow="sm" radius="md" padding="xl">
            <ActionIcon variant="transparent" color="red.7" style={{ width: rem(50), height: rem(50) }}>
              <IconTextCaption
                style={{ width: '100%', height: '100%' }}
                stroke={2}
              />
            </ActionIcon>
            <Text fz="xl" fw={500} className={classes.cardTitle} mt="md">
              Für den Inhalt Verantwortlich
            </Text>
            <Text fz="lg" c="dimmed" mt="sm">
              Für den Inhalt ist das Kommando der Freiwilligen Feuerwehr Leopoldsdorf Verantwortlich
            </Text>
          </Card>
          <Card shadow="sm" radius="md" padding="xl">
            <ActionIcon variant="transparent" color="red.7" style={{ width: rem(50), height: rem(50) }}>
              <IconPhone
                style={{ width: '100%', height: '100%' }}
                stroke={2}
              />
            </ActionIcon>
            <Text fz="xl" fw={500} className={classes.cardTitle} mt="md">
              Kontakt
            </Text>
            <Text fz="lg" c="dimmed" mt="sm">
              Notruf: <Anchor fz="lg" href="callto:122" c={"red.7"}>122</Anchor><br />
              Telon: <Anchor fz="lg" href="callto:+43223547202" c={"red.7"}>+43 2235 47202</Anchor> (nicht ständig besetzt)<br />
              E-Mail: <Anchor fz="lg" href="mailto:leopoldsdorf.2333@feuerwehr.gv.at" c={"red.7"}>leopoldsdorf.2333@feuerwehr.gv.at</Anchor>
            </Text>
          </Card>
          <Card shadow="sm" radius="md" padding="xl">
            <ActionIcon variant="transparent" color="red.7" style={{ width: rem(50), height: rem(50) }}>
              <IconMapPin
                style={{ width: '100%', height: '100%' }}
                stroke={2}
              />
            </ActionIcon>
            <Text fz="xl" fw={500} className={classes.cardTitle} mt="md">
              Adresse
            </Text>
            <Text fz="lg" c="dimmed" mt="sm">
              Achauerstraße 43, <br />
              2333 Leopoldsdorf<br />
              Österreich
            </Text>
          </Card>
        </SimpleGrid>
        <Maps />
      </Main>
    </>

  );
}
