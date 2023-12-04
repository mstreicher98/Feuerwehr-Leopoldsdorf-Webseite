import { MannschaftTable } from "@/components/Mannschaft/MannschaftTable";
import { ActionIcon, Affix, Tooltip } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import NextLink from "next/link";

export const metadata = {
  title: "Admin | Freiwillige Feuerwehr Leopoldsdorf",
  description: "Admin Interface Freiwilligen Feuerwehr Leopoldsdorf",
};


export default function Mannschaft() {
  return (
    <>
      <MannschaftTable />
      <Tooltip label="Neues Mitglied hinzufügen" arrowPosition="side" arrowOffset={0} arrowSize={8} withArrow>
        <Affix position={{ bottom: 30, right: 30 }}>
          <ActionIcon
            component={NextLink} 
            href="/admin/mannschaft/neu"
            variant="filled"
            size={50}
            radius={360}
            color={"red.7"}
          >
            <IconPlus stroke={1.5} />

          </ActionIcon>
        </Affix>
      </Tooltip>
    </>
  );
}
