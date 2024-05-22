import { ActionIcon, Affix, Tooltip } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import NextLink from "next/link";

export const metadata = {
  title: "Admin | Freiwillige Feuerwehr Leopoldsdorf",
  description: "Admin Interface Freiwilligen Feuerwehr Leopoldsdorf",
};

const Beitraege = () => {
  return (
    <>
      <Tooltip
        label="Neuen Beitrag erstellen"
        arrowPosition="side"
        arrowOffset={0}
        arrowSize={8}
        withArrow
      >
        <Affix position={{ bottom: 30, right: 30 }}>
          <ActionIcon
            component={NextLink}
            href="/admin/beitraege/neu"
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
};
export default Beitraege;
