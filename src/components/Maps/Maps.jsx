"use client";
import { Card } from "@mantine/core";
import { APIProvider, AdvancedMarker, Map } from "@vis.gl/react-google-maps";

import classes from "./Maps.module.css";

export default function Maps() {
    return ( 
        <Card shadow="sm" padding="0" radius="md" h={500} withBorder>
        <APIProvider apiKey={"AIzaSyBG9eqdJceI1n-Bh9-NZb1UVYcwyDx-OOY"}>
          <Map
            zoom={15}
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
    );
}