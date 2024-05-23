import {
  Avatar,
  Card,
  Divider,
  Group,
  Paper,
  Text,
  UnstyledButton,
} from "@mantine/core";

import classes from "./KommandoCard.module.css";
import { server } from "@/database/connection";

export default function KommandoCard({ person, ...props }) {
  return (
    <div>
      <Card
        radius="md"
        p="xl"
        {...props}
      >
        <Avatar src={`${server}${person.Profilbild.data.attributes.url}`} size={"100%"} radius={360} mx="auto" />
        <Text ta="center" fz="lg" fw={500} mt="md">
          {person.Nachname} {person.Vorname}
        </Text>
        <UnstyledButton className={classes.dg}>
          <Group
            bg="var(--mantine-color-gray-light)"
            className={classes.dgtext}
          >
            <Avatar
              src={`/images/dienstgrade/${person.Dienstgrad}.png`}
              radius="sm"
              size="sm"
              alt={person.Dienstgrad}
            />
            <div style={{ flex: 1 }}>
              <Text size="sm" pr={10} mt={3} mb={3}>
                {person.Dienstgrad}
              </Text>
            </div>
          </Group>
        </UnstyledButton>
        <Divider my="sm" />
        <Text ta="center" fz="md" mt="sm" c="red.7">
          {person.Funktion}
        </Text>
        <Text ta="center" c="dimmed" fz="sm" mt="md">
          {person.Beschreibung}
        </Text>
      </Card>
    </div>
  );
}
