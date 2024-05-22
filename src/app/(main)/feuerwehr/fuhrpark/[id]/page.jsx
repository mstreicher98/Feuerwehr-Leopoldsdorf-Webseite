import FahrzeugSide from "@/components/Fahrzeug/FahrzeugSide";
import Main from "../../../../../components/Main/Main";
import axios from "axios";
import { server, token } from "@/database/connection";
import { notFound } from "next/navigation";


export async function generateMetadata({ params }) {
  await axios
  .get(
    `${server}/api/fahrzeuges?filters[Fahrzeug_id][$eq]=${params.id}&populate=*&bearer=${token}`
  )
  .then((res) => {
    if (!res.data.data.length > 0) {
      notFound();
    }
  }); 
  return {
    title: `${params.id.toUpperCase()} | Freiwillige Feuerwehr Leopoldsdorf`,
    description: `Unser ${params.id.toUpperCase()} Fahrzeug`,
  };
}

export default function Fahrzeug({ params }) {


  return (
    <Main>
      <FahrzeugSide fahrzeugId={params.id} />
    </Main>
  );
}
