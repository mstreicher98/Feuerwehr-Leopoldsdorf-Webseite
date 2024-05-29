import {
  Card,
  Image,
  Text,
  Group,
  Button,
  CardSection,
  Divider,
  GridCol,
} from "@mantine/core";
import { server } from "@/database/connection";
import classes from "./FahrzeugCard.module.css";
import NextLink from "next/link";
import { IconZoomIn } from "@tabler/icons-react";

export default function Fahrzeug({ fahrzeug, ...props }) {
  const xl = 4;
  const lg = 4;
  const md = 6;
  const sm = 6;
  const xs = 12;
  return (
    <GridCol span={{ xs, sm, md, lg, xl }}>
      <Card radius="md" p="md">
        <CardSection>
          <Image
            src={`${server}${fahrzeug.Titelbild.data.attributes.url}`}
            alt={fahrzeug.Kurzbezeichnung}
            height="auto"
            width="90%"
          />
        </CardSection>
        <Divider />
        <CardSection className={classes.section} mt="md">
          <Group justify="apart">
            <Text fz="lg" fw={500}>
              {fahrzeug.Bezeichnung}
              <br />({fahrzeug.Kurzbezeichnung})
            </Text>
          </Group>
          <Text fz="sm" mt="xs" lineClamp={4}>
            {fahrzeug.Beschreibung}
          </Text>
        </CardSection>
        <Group mt="xs">
          <Button
            variant="outline"
            component={NextLink}
            href={`/feuerwehr/fuhrpark/${fahrzeug.Fahrzeug_id}`}
            radius="md"
            color="red.7"
            style={{ flex: 1 }}
            leftSection={<IconZoomIn size={16} />}
          >
            Mehr anzeigen
          </Button>
        </Group>
      </Card>
    </GridCol>
  );
}
