import { Banner } from "@/components/Banner/Kommando/Banner";
import Main from "../../../../components/Main/Main";
import KommandoList from "@/components/Kommando/main/KommandoList";


export const metadata = {
  title: "Kommando | Freiwillige Feuerwehr Leopoldsdorf",
  description: "Das Kommando der Freiwilligen Feuerwehr Leopoldsdorf",
};

const Kommando = () => {
  return (
    <>
      <Banner />
      <Main>
        <KommandoList />
      </Main>
    </>
  );
}
export default Kommando;