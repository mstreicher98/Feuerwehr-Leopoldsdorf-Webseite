import { server, token } from "@/database/connection";
import { SimpleGrid } from "@mantine/core";
import axios from "axios";
import KommandoCard from "./KommandoCard";

export default async function KommandoList() {
  const kommandoRes = await axios.get(`${server}/api/kommandos?populate=*&bearer=${token}`);
  return (
    <SimpleGrid
      cols={{ base: 1, sm: 3, lg: 3 }}
      spacing={{ base: "lg", sm: "lg" }}
      verticalSpacing={{ base: "lg", sm: "xl" }}
    >
      <KommandoCard person={kommandoRes.data.data[2].attributes} visibleFrom="sm" />
      <KommandoCard person={kommandoRes.data.data[0].attributes} />
      <KommandoCard person={kommandoRes.data.data[1].attributes} />
      <KommandoCard person={kommandoRes.data.data[2].attributes} hiddenFrom="sm" />
    </SimpleGrid>
  );
}