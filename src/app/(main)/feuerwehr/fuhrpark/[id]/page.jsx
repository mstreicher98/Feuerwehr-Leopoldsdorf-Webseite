import Main from "../../../../../components/Main/Main";
import { Text, TypographyStylesProvider } from "@mantine/core";
import { notFound } from "next/navigation";
import axios from "axios";
import { server, token } from "@/database/connection";

export const generateMetadata = ({ params }) => {
  const fahrzeug = findFahrzeug(params.id);
  return {
    title: `${fahrzeug.Kurzbezeichnung} | Freiwillige Feuerwehr Leopoldsdorf`,
    description: `${fahrzeug.Bezeichnung}`,
  };
};

const findFahrzeug = async (fahrzeugid) => {
  await axios
    .get(
      `${server}/api/fahrzeuges?populate=*&bearer=${token}&filters[Fahrzeug_id][$eq]=${fahrzeugid}`
    )
    .then((fahrzeugRes) => {
      console.log(fahrzeugRes.data.data[0].attributes)
      return fahrzeugRes.data.data[0].attributes;
    });
};

const Fahrzeug = ({ params }) => {
  const fahrzeug = findFahrzeug(params.id);
  if (fahrzeug === undefined) {
    notFound();
  }
  return (
    <Main>
      <Text component="div" ta="center" mb={30}>
        <TypographyStylesProvider pl={0}>
          <h1>{fahrzeug.Kurzbezeichnung}</h1>
          <p>Das {fahrzeug.Bezeichnung}</p>
        </TypographyStylesProvider>
      </Text>
    </Main>
  );
};
export default Fahrzeug;
