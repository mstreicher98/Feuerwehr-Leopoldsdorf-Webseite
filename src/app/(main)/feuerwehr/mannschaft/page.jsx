import MannschaftList from "@/components/Mannschaft/main/MannschaftList";
import Main from "@/components/Main/Main";
import { Banner } from "@/components/Banner/Mannschaft/Banner";

export const metadata = {
  title: "Mannschaft | Freiwillige Feuerwehr Leopoldsdorf",
  description: "Die Mannschaft der Freiwilligen Feuerwehr Leopoldsdorf",
};

const Mannschaft = () => {
  return (
    <>
      <Banner />
      <Main nomargin>
        <MannschaftList />
      </Main>
    </>
  );
}
