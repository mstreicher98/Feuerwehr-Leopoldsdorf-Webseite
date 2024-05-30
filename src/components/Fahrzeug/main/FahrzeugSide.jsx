"use client";
import { server, token } from "@/database/connection";
import { Carousel, CarouselSlide } from "@mantine/carousel";
import {
  Center,
  Image,
  Table,
  TableTbody,
  TableTd,
  TableTr,
  Text,
  TypographyStylesProvider,
} from "@mantine/core";
import axios from "axios";
import { useEffect, useState } from "react";

const FahrzeugSide = ({ fahrzeugId }) => {
  const [loading, setLoading] = useState(true);
  const [fahrzeug, setFahrzeug] = useState();

  useEffect(() => {
    axios
      .get(
        `/api/fuhrpark/${fahrzeugId}`
      )
      .then((res) => {
        if (res.data.data.length > 0) {
          setFahrzeug(res.data.data[0].attributes);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <>
      {!loading ? (
        <>
          <Center>
            <Carousel
              withIndicators
              w="60%"
              height={"auto"}
              slideGap="md"
              controlsOffset="xs"
              controlSize={30}
              loop
            >
              <CarouselSlide>
                <Image
                  src={`${process.env.NEXT_API_URL}${fahrzeug.Titelbild.data.attributes.url}`}
                  alt={fahrzeug.Kurzbezeichnung}
                />
              </CarouselSlide>
              <CarouselSlide>
                <Image
                  src={`${process.env.NEXT_API_URL}${fahrzeug.Titelbild2.data.attributes.url}`}
                  alt={fahrzeug.Kurzbezeichnung}
                />
              </CarouselSlide>
            </Carousel>
          </Center>
          <Text component="div" ta="center" mb={30}>
            <TypographyStylesProvider pl={0}>
              <h1>
                {fahrzeug.Bezeichnung} ({fahrzeug.Kurzbezeichnung})
              </h1>
              <p style={{ textAlign: "justify" }}>{fahrzeug.Beschreibung}</p>
            </TypographyStylesProvider>
          </Text>
          {fahrzeug.Fahrzeugdaten !== null && (
            <Table striped>
              <TableTbody>
                <TableTr>
                  <TableTd>Funkname</TableTd>
                  <TableTd>{fahrzeug.Funkname}</TableTd>
                </TableTr>
                <TableTr>
                  <TableTd>Typ</TableTd>
                  <TableTd>{fahrzeug.Fahrzeugdaten.typ}</TableTd>
                </TableTr>
                <TableTr>
                  <TableTd>Aufbau</TableTd>
                  <TableTd>{fahrzeug.Fahrzeugdaten.aufbau}</TableTd>
                </TableTr>
                <TableTr>
                  <TableTd>Baujahr</TableTd>
                  <TableTd>{fahrzeug.Fahrzeugdaten.baujahr}</TableTd>
                </TableTr>
                <TableTr>
                  <TableTd>Leistung</TableTd>
                  <TableTd>{fahrzeug.Fahrzeugdaten.leistung}</TableTd>
                </TableTr>
                <TableTr>
                  <TableTd>Verwendung</TableTd>
                  <TableTd>{fahrzeug.Fahrzeugdaten.verwendung}</TableTd>
                </TableTr>
                <TableTr>
                  <TableTd>Beladung</TableTd>
                  <TableTd>{fahrzeug.Fahrzeugdaten.beladung}</TableTd>
                </TableTr>
              </TableTbody>
            </Table>
          )}
        </>
      ) : (
        <></>
      )}
    </>
  );
};
export default FahrzeugSide;
