import FahrzeugSide from "@/components/Fahrzeug/main/FahrzeugSide";
import Main from "../../../../../components/Main/Main";
import { notFound } from "next/navigation";
import axios from "axios";
import { server, token } from "@/database/connection";


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

 const Fahrzeug = ({ params }) => {


  return (
    <Main>
      <FahrzeugSide fahrzeugId={params.id} />
    </Main>
  );
};
export default Fahrzeug;
