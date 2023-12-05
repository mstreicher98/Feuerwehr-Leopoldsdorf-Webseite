"use client";
import { useRef, useState } from "react";
import {
  Button,
  Card,
  Checkbox,
  Group,
  Image,
  InputWrapper,
  Menu,
  MenuDropdown,
  MenuItem,
  MenuTarget,
  ScrollArea,
  SimpleGrid,
  Text,
  TextInput,
  Title,
  UnstyledButton,
  rem,
  useMantineTheme,
} from "@mantine/core";
import {
  IconChevronDown,
  IconCloudUpload,
  IconDownload,
  IconX,
} from "@tabler/icons-react";
import classes from "./MannschaftNeu.module.css";
import dropzoneImg from "./MannschaftNeuDropzone.module.css";
import {
  Dropzone,
  DropzoneAccept,
  DropzoneIdle,
  DropzoneReject,
  MIME_TYPES,
} from "@mantine/dropzone";

const dataDg = [
  {
    label: "Jugendfeuerwehrmann",
    value: "JFM",
    image: "/images/dienstgrade/JFM.png",
  },
  {
    label: "Jugendfeuerwehrmann (1. Erprobung)",
    value: "JFM1",
    image: "/images/dienstgrade/JFM1.png",
  },
  {
    label: "Jugendfeuerwehrmann (2. Erprobung)",
    value: "JFM2",
    image: "/images/dienstgrade/JFM2.png",
  },
  {
    label: "Jugendfeuerwehrmann (3. Erprobung)",
    value: "JFM3",
    image: "/images/dienstgrade/JFM3.png",
  },
  {
    label: "Jugendfeuerwehrmann (Gruppenkommandant)",
    value: "JFM4",
    image: "/images/dienstgrade/JFM4.png",
  },
  {
    label: "Probefeuerwehrmann",
    value: "PFM",
    image: "/images/dienstgrade/PFM.png",
  },
  { label: "Feuerwehrmann", value: "FM", image: "/images/dienstgrade/FM.png" },
  {
    label: "Oberfeuerwehrmann",
    value: "OFM",
    image: "/images/dienstgrade/OFM.png",
  },
  {
    label: "Hauptfeuerwehrmann",
    value: "HFM",
    image: "/images/dienstgrade/HFM.png",
  },
  { label: "Löschmeister", value: "LM", image: "/images/dienstgrade/LM.png" },
  {
    label: "Oberlöschmeister",
    value: "OLM",
    image: "/images/dienstgrade/OLM.png",
  },
  {
    label: "Hauptlöschmeister",
    value: "HLM",
    image: "/images/dienstgrade/HLM.png",
  },
  { label: "Brandmeister", value: "BM", image: "/images/dienstgrade/BM.png" },
  {
    label: "Oberbrandmeister",
    value: "OBM",
    image: "/images/dienstgrade/OBM.png",
  },
  {
    label: "Hauptbrandmeister",
    value: "HBM",
    image: "/images/dienstgrade/HBM.png",
  },
  { label: "Sachbearbeiter", value: "SB", image: "/images/dienstgrade/SB.png" },
  {
    label: "Abschnittssachbearbeiter",
    value: "ASB",
    image: "/images/dienstgrade/ASB.png",
  },
  {
    label: "Bezirkssachbearbeiter",
    value: "BSB",
    image: "/images/dienstgrade/BSB.png",
  },
  { label: "Brandinspektor", value: "BI", image: "/images/dienstgrade/BI.png" },
  {
    label: "Oberbrandinspektor",
    value: "OBI",
    image: "/images/dienstgrade/OBI.png",
  },
  {
    label: "Hauptbrandinspektor",
    value: "HBI",
    image: "/images/dienstgrade/HBI.png",
  },
  {
    label: "Abschnittsbrandinspektor",
    value: "ABI",
    image: "/images/dienstgrade/ABI.png",
  },
  { label: "Brandrat", value: "BR", image: "/images/dienstgrade/BR.png" },
  { label: "Brandrat", value: "BR2", image: "/images/dienstgrade/BR2.png" },
  { label: "Oberbrandrat", value: "OBR", image: "/images/dienstgrade/OBR.png" },
  {
    label: "Verwaltungsmeister",
    value: "VM",
    image: "/images/dienstgrade/VM.png",
  },
  {
    label: "Oberverwaltungsmeister",
    value: "OVM",
    image: "/images/dienstgrade/OVM.png",
  },
  {
    label: "Hauptverwaltungsmeister",
    value: "HVM",
    image: "/images/dienstgrade/HVM.png",
  },
  { label: "Verwalter", value: "V", image: "/images/dienstgrade/V.png" },
  { label: "Oberverwalter", value: "OV", image: "/images/dienstgrade/OV.png" },
  { label: "Hauptverwalter", value: "HV", image: "/images/dienstgrade/HV.png" },
];

export default function MannschaftNeu() {
  const theme = useMantineTheme();
  const openRef = useRef(null);

  const [vorname, setVorname] = useState("");
  const [nachname, setNachname] = useState("");
  const [stbNr, setStbNr] = useState();
  const [valueDg, setValueDg] = useState("PFM");
  const [ehrenDg, setEhrenDg] = useState(false);
  const [funktion, setFunktion] = useState("");

  const [openedDg, setOpenedDg] = useState(false);
  const [selectedDg, setSelectedDg] = useState(dataDg[5]);

  const dg = dataDg.map((item) => (
    <MenuItem
      className={classes.menuItem}
      leftSection={<Image src={item.image} width={22} height={22} />}
      onClick={() => {
        setSelectedDg(item);
        setValueDg(item.value);
      }}
      key={item.value}
    >
      {item.label}
    </MenuItem>
  ));
  return (
    <>
      <Card mih={"100%"} mah={"100%"}>
        <Title order={3} ta={"center"}>
          Neues Miglied hinzufügen
        </Title>
        <SimpleGrid mt={16} cols={1}>
          <div>
            <InputWrapper size="md" label="Standesbuchnummer">
              <TextInput variant="filled" placeholder="123" h={46} />
            </InputWrapper>
          </div>
        </SimpleGrid>
        <SimpleGrid mt={16} cols={2}>
          <div>
            <InputWrapper size="md" label="Vorname">
              <TextInput variant="filled" placeholder="Maximillian" h={46} />
            </InputWrapper>
          </div>
          <div>
            <InputWrapper size="md" label="Nachname">
              <TextInput variant="filled" placeholder="Mustermann" h={46} />
            </InputWrapper>
          </div>
        </SimpleGrid>

        <SimpleGrid mt={16} cols={2}>
          <div>
            <InputWrapper size="md" label="Dienstgrad">
              <Menu
                onOpen={() => setOpenedDg(true)}
                onClose={() => setOpenedDg(false)}
                radius="md"
                width="target"
                withinPortal
              >
                <MenuTarget>
                  <UnstyledButton
                    className={classes.control}
                    data-expanded={openedDg || undefined}
                  >
                    <Group gap="xs">
                      <Image src={selectedDg.image} width={22} height={22} />
                      <span className={classes.label}>{selectedDg.label}</span>
                    </Group>
                    <IconChevronDown
                      size="1rem"
                      className={classes.icon}
                      stroke={1.5}
                    />
                  </UnstyledButton>
                </MenuTarget>
                <MenuDropdown className={classes.menu}>
                  <ScrollArea h={350}>{dg}</ScrollArea>
                </MenuDropdown>
              </Menu>
            </InputWrapper>
          </div>
          <div>
            <Text size="md" fw={500}>
              Ehrendienstgrad
            </Text>
            <Checkbox
              classNames={classes}
              label={ehrenDg ? "Ja" : "Nein"}
              color="red"
              h={42}
              checked={ehrenDg}
              onChange={(event) => setEhrenDg(event.currentTarget.checked)}
              wrapperProps={{
                onClick: () => setEhrenDg((c) => !c),
              }}
            />
          </div>
        </SimpleGrid>
        {/*}
        <SimpleGrid mt={50} cols={1}>
          <div>
            <div className={dropzoneImg.wrapper}>
              <Dropzone
                openRef={openRef}
                onDrop={() => {}}
                className={dropzoneImg.dropzone}
                radius="md"
                accept={[
                  MIME_TYPES.png,
                  MIME_TYPES.jpeg,
                  MIME_TYPES.jpg,
                  MIME_TYPES.gif,
                ]}
                maxSize={30 * 1024 ** 2}
              >
                <div style={{ pointerEvents: "none" }}>
                  <Group justify="center">
                    <DropzoneAccept>
                      <IconDownload
                        style={{ width: rem(50), height: rem(50) }}
                        color={theme.colors.blue[6]}
                        stroke={1.5}
                      />
                    </DropzoneAccept>
                    <DropzoneReject>
                      <IconX
                        style={{ width: rem(50), height: rem(50) }}
                        color={theme.colors.red[6]}
                        stroke={1.5}
                      />
                    </DropzoneReject>
                    <DropzoneIdle>
                      <IconCloudUpload
                        style={{ width: rem(50), height: rem(50) }}
                        stroke={1.5}
                      />
                    </DropzoneIdle>
                  </Group>

                  <Text ta="center" fw={700} fz="lg" mt="xl">
                    <DropzoneAccept>Drop files here</DropzoneAccept>
                    <DropzoneReject>Pdf file less than 30mb</DropzoneReject>
                    <DropzoneIdle>Upload resume</DropzoneIdle>
                  </Text>
                  <Text ta="center" fz="sm" mt="xs" c="dimmed">
                    Drag&apos;n&apos;drop files here to upload. We can accept
                    only <i>.pdf</i> files that are less than 30mb in size.
                  </Text>
                </div>
              </Dropzone>

              <Button
                className={dropzoneImg.control}
                size="md"
                radius="xl"
                color="red"
                onClick={() => openRef.current?.()}
              >
                Select files
              </Button>
            </div>
          </div>
        </SimpleGrid>{*/}
      </Card>
    </>
  );
}
