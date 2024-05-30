"use server";
import FahrzeugSide from "@/components/Fahrzeug/main/FahrzeugSide";
import Main from "../../../../../components/Main/Main";
import { notFound } from "next/navigation";
import axios from "axios";


export async function generateMetadata({ params }) {
  await axios
  .get(
    `${process.env.NEXT_API_URL}/api/fahrzeuges?filters[Fahrzeug_id][$eq]=${params.id}&populate=*&bearer=${process.env.NEXT_API_TOKEN}`
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

 const Fahrzeug = ({ params }) => {


  return (
    <Main>
      <FahrzeugSide fahrzeugId={params.id} />
    </Main>
  );
};
export default Fahrzeug;
