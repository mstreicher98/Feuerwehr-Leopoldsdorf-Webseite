import {
  Avatar,
  Divider,
  Group,
  Paper,
  Text,
  UnstyledButton,
} from "@mantine/core";

import classes from "./KommandoCard.module.css";

export default function KdoPerson({ person, ...props }) {
  return (
    <div>
      <Paper
        withBorder
        radius="md"
        p="xl"
        bg="var(--mantine-color-body)"
        {...props}
      >
        <Avatar src={person.bild} size={"100%"} radius={360} mx="auto" />
        <Text ta="center" fz="lg" fw={500} mt="md">
          {person.nachname} {person.vorname}
        </Text>
        <UnstyledButton className={classes.dg}>
          <Group
            bg="var(--mantine-color-gray-light)"
            className={classes.dgtext}
          >
            <Avatar
              src={`/images/dienstgrade/${person.dienstgrad}.png`}
              radius="sm"
              size="sm"
              alt={person.dienstgrad}
            />
            <div style={{ flex: 1 }}>
              <Text size="sm" pr={10} mt={3} mb={3}>
                {person.dienstgrad}
              </Text>
            </div>
          </Group>
        </UnstyledButton>
        <Divider my="sm" />
        <Text ta="center" fz="md" mt="sm" c="red.7">
          {person.position}
        </Text>
        <Text ta="center" c="dimmed" fz="sm" mt="md">
          {person.beschreibung}
        </Text>
      </Paper>
    </div>
  );
}
