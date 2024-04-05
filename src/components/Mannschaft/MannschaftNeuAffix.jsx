"use client";
import { ActionIcon, Affix, Tooltip } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import { modals } from '@mantine/modals';
import MannschaftNeu from "@/components/Mannschaft/MannschaftNeu";


export default function MannschaftNeuAffix() {

  const newMemberModal = () => {
    modals.open({
      title: 'Neues Miglied hinzufügen',
      children: (
        <>
          <MannschaftNeu />
        </>
      ),
    });
  };

  return (
    <> 
      <Tooltip label="Neues Mitglied hinzufügen" arrowPosition="side" arrowOffset={0} arrowSize={8} withArrow>
        <Affix position={{ bottom: 30, right: 30 }}>
          <ActionIcon
            onClick={newMemberModal}
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
