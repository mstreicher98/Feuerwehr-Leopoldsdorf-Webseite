import Main from "../../../../components/Main/Main";
import {
  Anchor,
  Center,
  Image,
  List,
  ListItem,
  Text,
  TypographyStylesProvider,
} from "@mantine/core";
import NextImage from "next/image";

import classes from "./page.module.css";

import RettungsgasseLogo from "/public/images/buergerservice/rettungsgasse.png";

export const metadata = {
  title: "Rettungsgasse | Freiwillige Feuerwehr Leopoldsdorf",
  description:
    "Helfen Sie mit um Leben zu retten, Rettungsgasse bilden",
};

export default function Rettungsgasse() {
  return (
    <Main>
      <Text component="div" ta="center" mb={30}>
        <TypographyStylesProvider pl={0}>
          <h1>Rettungsgasse</h1>
        </TypographyStylesProvider>
      </Text>
      <Text component="div" ta="center" mb={30}>
        <TypographyStylesProvider pl={0}>
          <p className={classes.block}>
            Die Rettungsgasse ist auf den österreichischen Autobahnen- und
            Schnellstraßen rasch und mit geringem wirtschaftlichem Aufwand
            umsetzbar um ab 01.01.2012 Pflicht auf den Autobahnen. Die rasche
            Unfallbetreuung durch die Einsatzorganisationen hilft nicht nur
            Unfallfolgen zu mildern und trägt zur Erhöhung der
            Verkehrssicherheit bei, die Aufräumarbeiten können rascher beginnen
            und der Verkehr kann wieder schneller fließen.
          </p>
          <h3>Helfen Sie mit um Leben zu retten!</h3>
        </TypographyStylesProvider>
      </Text>
      <Center>
        <Image
          h="auto"
          w="100%"
          component={NextImage}
          src={RettungsgasseLogo}
          alt="Rettungsgasse"
          radius="md"
        />
      </Center>
      <Text component="div" ta="center" mb={30}>
        <TypographyStylesProvider pl={0}>
          <h3>Welche Vorteile bringt die Rettungsgasse?</h3>
        </TypographyStylesProvider>
      </Text>
      <Text component="div" ta="left" mb={30}>
        <TypographyStylesProvider pl={0}>
          <h4>Helfen sie mit um Leben zu retten!</h4>
          <List withPadding>
            <ListItem>
              rascheres Eintreffen und Vorankommen der Einsatzfahrzeuge
            </ListItem>
            <ListItem>
              breitere Zufahrtsmöglichkeit für schwerere Einsatz- und
              Bergefahrzeuge
            </ListItem>

            <ListItem>
              breitere Zufahrtsmöglichkeit für schwerere Einsatz- und
              Bergefahrzeuge
            </ListItem>
          </List>
          <h4>Schnellere Versorgung von Verletzten</h4>
          <List withPadding>
            <ListItem>
              Zeitgewinn von bis zu 4 Minuten (Erfahrungen aus dem Nachbarland
              Deutschland)
            </ListItem>
            <ListItem>
              1 Min = 10% mehr Überlebenschance, die Rettungsgasse steigert die
              Überlebenschancen um 40%
            </ListItem>
          </List>

          <h4>Weitere Informationen</h4>
          <List withPadding>
            <ListItem>
              <Anchor className={classes.link} href="https://www.asfinag.at/verkehr-sicherheit/verkehrsmanagement/rettungsgasse/" target="_blank" underline="never">Website zur Rettungsgasse Asfinag</Anchor>
            </ListItem>
            <ListItem>
              <Anchor className={classes.link} href="https://www.oeamtc.at/thema/verkehr/rettungsgasse-bilden-wie-funktioniert-sie-16185270" target="_blank" underline="never">Website zur Rettungsgasse ÖAMTC</Anchor>
            </ListItem>
            <ListItem>
              <Anchor className={classes.link} href="https://www.youtube.com/watch?v=ZoNUsfD1OEg&ab_channel=ASFINAG" target="_blank" underline="never">Schemavideo Rettungsgasse Asfinag</Anchor>
            </ListItem>
          </List>
        </TypographyStylesProvider>
      </Text>
    </Main>
  );
}
