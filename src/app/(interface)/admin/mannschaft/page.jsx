import Main from "@/components/Main/Main";
import { MannschaftTable } from "@/components/Mannschaft/MannschaftTable";

export const metadata = {
  title: "Dashboard | Freiwillige Feuerwehr Leopoldsdorf",
  description: "Impressum der Freiwilligen Feuerwehr Leopoldsdorf",
};


export default function Mannschaft() {
  return (
    <MannschaftTable />
  );
}
