"use client";
import { server, token } from "@/database/connection";
import { SimpleGrid } from "@mantine/core";
import axios from "axios";

import { useEffect, useState } from "react";
import KommandoCard from "./KommandoCard";
import KommandoLoading from "./KommandoLoading";

const KommandoList = () => {
  const [data, setData] = useState(<KommandoLoading />);

  useEffect(() => {
    axios
      .get(`${server}/api/kommandos?populate=*&bearer=${token}`)
      .then((kommandoRes) => {
        const list = (
          <>
            <KommandoCard
              person={kommandoRes.data.data[2].attributes}
              visibleFrom="sm"
            />
            <KommandoCard person={kommandoRes.data.data[0].attributes} />
            <KommandoCard person={kommandoRes.data.data[1].attributes} />
            <KommandoCard
              person={kommandoRes.data.data[2].attributes}
              hiddenFrom="sm"
            />
          </>
        );
        setData(list);
      });
  }, []);

  return (
    <SimpleGrid
      cols={{ base: 1, sm: 3, lg: 3 }}
      spacing={{ base: "lg", sm: "lg" }}
      verticalSpacing={{ base: "lg", sm: "xl" }}
    >
      {data}
    </SimpleGrid>
  );
}
export default  KommandoList;
