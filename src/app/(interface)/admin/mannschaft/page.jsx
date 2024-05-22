import MannschaftTable from "@/components/Mannschaft/admin/MannschaftTable";
import MannschaftNeu from "@/components/Mannschaft/admin/MannschaftNeu";

export const metadata = {
  title: "Admin | Freiwillige Feuerwehr Leopoldsdorf",
  description: "Admin Interface Freiwilligen Feuerwehr Leopoldsdorf",
};

const Mannschaft = () => {
  return (
    <>
      <MannschaftTable />
      <MannschaftNeu />
    </>
  );
};
export default Mannschaft;
