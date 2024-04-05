import MannschaftTable from "@/components/Mannschaft/MannschaftTable";
import MannschaftNeuAffix from "@/components/Mannschaft/MannschaftNeuAffix";

export const metadata = {
  title: "Admin | Freiwillige Feuerwehr Leopoldsdorf",
  description: "Admin Interface Freiwilligen Feuerwehr Leopoldsdorf",
};


export default function Mannschaft() {

  return (
    <> 
      <MannschaftTable />
      <MannschaftNeuAffix />
    </>
  );
}
