import Main from "../../../../components/Main/Main";
import Banner from "@/components/Banner/Fuhrpark/Banner";
import FahrzeugList from "../../../../components/Fahrzeug/main/FahrzeugList";

export const metadata = {
  title: "Fuhrpark | Freiwillige Feuerwehr Leopoldsdorf",
  description: "Der Fuhrpark der Freiwilligen Feuerwehr Leopoldsdorf",
};


const Fuhrpark = () => {
  return (
    <>
    <Banner />
    <Main >
    <FahrzeugList />
    </Main>
  </>
  );
}
export default Fuhrpark;