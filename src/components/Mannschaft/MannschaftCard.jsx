import {
  Text,
  Group,
  Divider,
  Avatar,
  UnstyledButton,
  Card,
  GridCol,
} from "@mantine/core";
import { server } from  '@/database/connection'
import classes from "./MannschaftCard.module.css";

export default function MannschaftCard({ mann, xl, lg, md, sm, xs, ...props }) {
  return (
    <GridCol span={{xs, sm, md, lg, xl}}>
      <Card
        radius="md"
        p="xl"
        {...props}
      >
        <Avatar
          src={`${server}${mann.Profilbild.data.attributes.url}`}
          size={"100%"}
          radius={360}
          mx="auto"
        />
        <Text ta="center" fz="lg" fw={500} mt="md" h={50} visibleFrom="sm">
          {mann.Nachname} {mann.Vorname}
        </Text>
        <Text ta="center" fz="sm" fw={500} mt="md" h={50} hiddenFrom="sm">
          {mann.Nachname} {mann.Vorname}
        </Text>
        <UnstyledButton className={classes.dg}>
          <Group
            bg="var(--mantine-color-gray-light)"
            className={classes.dgtext}
          >
            <Avatar
              src={`/images/dienstgrade/${mann.Dienstgrad}.png`}
              radius="sm"
              size="sm"
              alt={mann.Dienstgrad}
            />
            <div style={{ flex: 1 }}>
              <Text size="md" pr={10} mt={3} mb={3}>
                {mann.EhrenDG ? "E" : ""}
                {mann.Dienstgrad === "BR2" ? "BR" : ""}
                {mann.Dienstgrad === "JFM1" || mann.Dienstgrad === "JFM2" || mann.Dienstgrad === "JFM3" || mann.Dienstgrad === "JFM4" ? "JFM" : ""}
                {mann.Dienstgrad !== "JFM1" & mann.Dienstgrad !== "JFM2" & mann.Dienstgrad !== "JFM3" & mann.Dienstgrad !== "JFM4" & mann.Dienstgrad !== "BR2" ? mann.Dienstgrad : ""}
              </Text>
            </div>
          </Group>
        </UnstyledButton>
        {mann.Chargen ?
        <>
          <Divider my="sm" />
          <Text ta="center" fz="md" mt="sm" c="red.7" mih={50} visibleFrom="sm">
            {mann.Funktion === "" || mann.Funktion === null ? <br /> : mann.Funktion}
          </Text>
          <Text ta="center" fz="xs" mt="sm" c="red.7" mih={50} hiddenFrom="sm">
            {mann.Funktion === "" || mann.Funktion === null ? <br /> : mann.Funktion}
          </Text>
          </>
        :
        null
        }
      </Card>
    </GridCol>
  );
}
