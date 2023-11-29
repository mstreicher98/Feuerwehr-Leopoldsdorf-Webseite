import MannschaftList from "@/components/Mannschaft/MannschaftList";
import Main from "@/components/Main/Main";
import { Banner } from "@/components/Banner/Mannschaft/Banner";

export const metadata = {
  title: "Mannschaft | Freiwillige Feuerwehr Leopoldsdorf",
  description: "Die Mannschaft der Freiwilligen Feuerwehr Leopoldsdorf",
};

export default function Mannschaft() {
  return (
    <>
      <Banner />
      <Main nomargin>
        <MannschaftList />
      </Main>
    </>
  );
}
