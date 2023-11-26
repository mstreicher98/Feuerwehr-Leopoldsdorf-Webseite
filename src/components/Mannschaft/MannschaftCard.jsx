import {
  Text,
  Group,
  Divider,
  Paper,
  Avatar,
  UnstyledButton,
} from "@mantine/core";

import classes from "./MannschaftCard.module.css";

export default function MannschaftCard({ mann, ...props }) {
  return (
    <div>
      <Paper
        withBorder
        radius="md"
        p="xl"
        bg="var(--mantine-color-body)"
        {...props}
      >
        <Avatar
          src={`http://localhost:4000${mann.Profilbild.data.attributes.url}`}
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
                {mann.Dienstgrad === "BR2" ? "BR" : mann.Dienstgrad}
              </Text>
            </div>
          </Group>
        </UnstyledButton>
        <Divider my="sm" />
        <Text ta="center" fz="md" mt="sm" c="red.7">
          {mann.Funktion}
        </Text>
      </Paper>
    </div>
  );
}
