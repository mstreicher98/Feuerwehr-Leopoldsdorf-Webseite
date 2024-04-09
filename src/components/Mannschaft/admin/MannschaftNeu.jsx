"use client";
import { useRef, useState } from "react";
import {
  ActionIcon,
  Affix,
  Checkbox,
  CloseButton,
  Group,
  Image,
  InputWrapper,
  Menu,
  MenuDropdown,
  MenuItem,
  MenuTarget,
  Paper,
  ScrollArea,
  Text,
  TextInput,
  Tooltip,
  UnstyledButton,
  rem,
  useMantineTheme,
} from "@mantine/core";
import {
  IconChevronDown,
  IconPhoto,
  IconPlus,
  IconUpload,
  IconX,
} from "@tabler/icons-react";
import classes from "./MannschaftNeu.module.css";
import {
  Dropzone,
  DropzoneAccept,
  DropzoneIdle,
  DropzoneReject,
  IMAGE_MIME_TYPE,
} from "@mantine/dropzone";
import { modals } from '@mantine/modals';

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
const MannschaftNeuModal = () => {
  const theme = useMantineTheme();
  const openRef = useRef(null);

  const [vorname, setVorname] = useState("");
  const [nachname, setNachname] = useState("");
  const [stbNr, setStbNr] = useState();
  const [valueDg, setValueDg] = useState("PFM");
  const [ehrenDg, setEhrenDg] = useState(false);
  const [funktion, setFunktion] = useState("");
  const [titleImg, setTitleImg] = useState(null);

  const [openedDg, setOpenedDg] = useState(false);
  const [selectedDg, setSelectedDg] = useState(dataDg[5]);

  const handleFileDrop = (files) => {
    if (files.length > 0 && files.length < 2) {
      setTitleImg(files[0]);
    } else {
      notifications.show({
        id: "title-image-error",
        withCloseButton: true,
        withBorder: true,
        autoClose: 10000,
        title: "Zu viele Bilder ausgewählt!",
        message: "Du kannst nur ein Bild als Titelbild auswählen!",
        color: "red",
        loading: false,
      });
    }
  };

  const handleImageDelete = () => {
    setTitleImg(null);
  };

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
      <div>
        <InputWrapper size="md" label="Standesbuchnummer">
          <TextInput variant="filled" placeholder="123" h={46} />
        </InputWrapper>
      </div>
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
      <div style={{ marginTop: "8px" }}>
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
      <div style={{ marginTop: "16px" }}>
        {titleImg ? (
          <Paper
            style={{ position: "relative", padding: "16px" }}
            mb={34}
            withBorder
          >
            <Image
              src={URL.createObjectURL(titleImg)}
              height={300}
              fit="contain"
              alt="Uploaded"
            />
            <CloseButton
              color="red"
              size="lg"
              onClick={handleImageDelete}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                fontWeight: "bold",
              }}
            />
          </Paper>
        ) : (
          <Dropzone
            onDrop={handleFileDrop}
            onReject={(files) => console.log("rejected files", files)}
            accept={IMAGE_MIME_TYPE}
            mb={34}
            h={332}
          >
            <Group
              justify="center"
              gap="xl"
              mih={300}
              style={{ pointerEvents: "none" }}
            >
              <DropzoneAccept>
                <IconUpload
                  style={{
                    width: rem(52),
                    height: rem(52),
                    color: "var(--mantine-color-blue-6)",
                  }}
                  stroke={1.5}
                />
              </DropzoneAccept>
              <DropzoneReject>
                <IconX
                  style={{
                    width: rem(52),
                    height: rem(52),
                    color: "var(--mantine-color-red-6)",
                  }}
                  stroke={1.5}
                />
              </DropzoneReject>
              <DropzoneIdle>
                <IconPhoto
                  style={{
                    width: rem(52),
                    height: rem(52),
                    color: "var(--mantine-color-dimmed)",
                  }}
                  stroke={1.5}
                />
              </DropzoneIdle>
              <div>
                <Text size="xl" inline>
                  Bild hineinziehen oder hier klicken
                </Text>
                <Text size="sm" c="dimmed" inline mt={7}>
                  Max. 1 Bild erlaubt im format 1x1
                </Text>
              </div>
            </Group>
          </Dropzone>
        )}
      </div>
    </>
  );
}

const MannschaftNeu = () => {

  const newMemberModal = () => {
    modals.open({
      title: 'Neues Miglied hinzufügen',
      children: (
        <>
          <MannschaftNeuModal />
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
export default MannschaftNeu;