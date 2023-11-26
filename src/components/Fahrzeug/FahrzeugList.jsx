import FahrzeugCard from "./FahrzeugCard";
import { SimpleGrid } from "@mantine/core";
import axios from "axios";

import { server, token } from "@/database/connection"

export default async function FahrzeugList() {
  const fahrzeugRes = await axios.get(`${server}/api/fahrzeuges?populate=*&bearer=${token}`);
 
  console.log(fahrzeugRes.data.data)
  const fahrzeugListe = fahrzeugRes.data.data.map((fahrzeug) => {
    return <FahrzeugCard key={fahrzeug.attributes.Fahrzeug_id} fahrzeug={fahrzeug.attributes} />;
  });

  return (

      <SimpleGrid
        cols={{ base: 1, sm: 2, lg: 3 }}
        spacing={{ base: "sm", sm: "sm" }}
        verticalSpacing={{ base: "md", sm: "xl" }}
      >
        {fahrzeugListe}
      </SimpleGrid>
  );
}
