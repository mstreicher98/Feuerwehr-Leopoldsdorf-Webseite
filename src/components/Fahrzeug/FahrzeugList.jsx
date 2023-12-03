"use client";
import FahrzeugCard from "./FahrzeugCard";
import FahrzeugLoading from "./FahrzeugLoading";
import { SimpleGrid } from "@mantine/core";
import axios from "axios";

import { server, token } from "@/database/connection"
import { useEffect, useState } from "react";

export default function FahrzeugList() {
  const [data, setData] = useState(<FahrzeugLoading />)
  
  useEffect(() => {
    axios
      .get(`${server}/api/fahrzeuges?populate=*&bearer=${token}`)
      .then((fahrzeugRes) => {
        const list = fahrzeugRes.data.data.map((fahrzeug) => {
          return <FahrzeugCard key={fahrzeug.attributes.Fahrzeug_id} fahrzeug={fahrzeug.attributes} />;
        });
        setData(list);
      });
  }, []);

  return (

      <SimpleGrid
        cols={{ base: 1, sm: 2, lg: 3 }}
        spacing={{ base: "sm", sm: "sm" }}
        verticalSpacing={{ base: "md", sm: "xl" }}
      >
        {data}
      </SimpleGrid>
  );
}
