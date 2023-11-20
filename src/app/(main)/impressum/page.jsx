"use client";
import Main from "../../../components/Main/Main";
import {
  Card,
  Text,
  ThemeIcon,
  TypographyStylesProvider,
  rem,
} from "@mantine/core";
import classes from "./page.module.css";

import { APIProvider, AdvancedMarker, Map } from "@vis.gl/react-google-maps";

/*export const metadata = {
  title: "Impressum | Freiwillige Feuerwehr Leopoldsdorf",
  description: "Impressum der Freiwilligen Feuerwehr Leopoldsdorf",
};*/


export default function Impressum() {
  return (
    <Main>
      <Text component="div" ta="center" mb={30}>
        <TypographyStylesProvider pl={0}>
          <h1>Impressum</h1>
          <p>Impressum der Freiwilligen Feuerwehr Leopoldsdorf</p>
        </TypographyStylesProvider>
      </Text>
      <Card shadow="sm" padding="0" radius="md" h={500} withBorder>
        <APIProvider apiKey={"AIzaSyBG9eqdJceI1n-Bh9-NZb1UVYcwyDx-OOY"}>
          <Map
            zoom={14}
            center={{ lat: 48.11116157184281, lng: 16.398092849267385 }}
            gestureHandling={"greedy"}
            disableDefaultUI={true}
            mapId={"Adresse"}
          >
            <AdvancedMarker
              position={{ lat: 48.11116157184281, lng: 16.398092849267385 }}
            >
              <div className={classes.pin}>
                Freiwillige Feuerwehr
                <br />
                Leopoldsdorf
              </div>
            </AdvancedMarker>
          </Map>
        </APIProvider>
      </Card>
    </Main>
  );
}
