import {
  Text,
  Group,
  Divider,
  Avatar,
  UnstyledButton,
  Card,
} from "@mantine/core";
import { server } from  '@/database/connection'
import classes from "./MannschaftCard.module.css";

export default function MannschaftCard({ mann, ...props }) {
  return (
    <div>
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
        <Text ta="center" fz="lg" fw={500} mt="md">
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
              <Text size="sm" pr={10} mt={3} mb={3}>
                {mann.EhrenDG ? "E" : ""}
                {mann.Dienstgrad === "BR2" ? "BR" : ""}
                {mann.Dienstgrad === "JFM1" || mann.Dienstgrad === "JFM2" || mann.Dienstgrad === "JFM3" || mann.Dienstgrad === "JFM4" ? "JFM" : ""}
                {mann.Dienstgrad !== "JFM1" & mann.Dienstgrad !== "JFM2" & mann.Dienstgrad !== "JFM3" & mann.Dienstgrad !== "JFM4" & mann.Dienstgrad !== "BR2" ? mann.Dienstgrad : ""}
              </Text>
            </div>
          </Group>
        </UnstyledButton>
        <Divider my="sm" />
        <Text ta="center" fz="md" fw={700} mt="sm" c="red.7" h={40}>
          {mann.Funktion === "" || mann.Funktion === null ? <br /> : mann.Funktion}
        </Text>
      </Card>
    </div>
  );
}
