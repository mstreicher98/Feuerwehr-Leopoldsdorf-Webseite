import { server, token } from "@/database/connection";
import { SimpleGrid } from "@mantine/core";
import axios from "axios";
import KommandoCard from "./KommandoCard";

export default async function KommandoList() {
    const kommando1Res = await axios.get(
        `${server}/api/kommandos/1?populate=*&bearer=${token}`
      );
      const kommando2Res = await axios.get(
        `${server}/api/kommandos/2?populate=*&bearer=${token}`
      );
      const kommando3Res = await axios.get(
        `${server}/api/kommando/3?populate=*&bearer=${token}`
      );
    console.log(kommando1Res.data.data.Profilbild);
    return (
        <SimpleGrid
        cols={{ base: 1, sm: 3, lg: 3 }}
        spacing={{ base: "lg", sm: "lg" }}
        verticalSpacing={{ base: "lg", sm: "xl" }}
      >
        <KommandoCard person={kommandoRes.data.data[3]} visibleFrom="sm" />
        <KommandoCard person={kommandoRes.data.data[1]} />
        <KommandoCard person={kommandoRes.data.data[2]} />
        <KommandoCard person={kommandoRes.data.data[3]} hiddenFrom="sm" />
      </SimpleGrid>
    );
}