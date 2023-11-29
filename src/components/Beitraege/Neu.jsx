import {
  Card,
  Image,
  Text,
  Badge,
  Center,
  CardSection,
  Title,
  Button,
  Divider,
} from '@mantine/core';
import classes from './Neu.module.css';
import NextLink from 'next/link';

export function Neu() {
  const linkProps = { href: 'https://mantine.dev', target: '_blank', rel: 'noopener noreferrer' };

  return (
    <>
      <Divider label={<Title tt="uppercase" className={classes.highlight} size={40} mb={40} mt={40}>
          Aktuelles
      </Title>} />
      <Card radius="md" className={classes.card} pt={0}>
        <CardSection>
          <NextLink {...linkProps}>
            <Image src="/images/beitraege/test/test.jpg" height={"auto"} width={100} />
          </NextLink>
        </CardSection>


        <Badge className={classes.rating} variant="gradient" gradient={{ from: 'red.5', to: 'red.9' }}  size="lg">
          Neu
        </Badge>

        <Text className={classes.title} fw={500} component={NextLink} {...linkProps}>
          <Title order={1}>TE-T1 - Türöffnung</Title>
        </Text>

        <Divider my="xs" label="14. August 2023" labelPosition="center" mb={20} />

        <Text fz="lg" lineClamp={4} className={classes.block}>
        Am 14. August um 11:25 Uhr wurde die Feuerwehr Leopoldsdorf zu einer Türöffnung in der Rebengasse alarmiert. Eine ältere Person stürzte in einem Haus und konnte nicht mehr selbstständig aufstehen. Durch die Einsatzkräfte der Feuerwehr Leopoldsdorf wurde die Eingangstüre geöffnet und bis zum Eintreffen des Rettungsdienstes die Dame sanitätsdienstlich erstversorgt.
        </Text>
        <Divider mt={20} mb={20} />
          <Center>
            <Button size='md' color={"red.7"} variant="light" fullWidth>Weiter lesen</Button>
          </Center>
      </Card>
    </>
  );
}