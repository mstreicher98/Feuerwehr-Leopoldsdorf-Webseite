import { IconBookmark, IconHeart, IconShare } from '@tabler/icons-react';
import {
  Card,
  Image,
  Text,
  ActionIcon,
  Badge,
  Group,
  Center,
  Avatar,
  rem,
  CardSection,
} from '@mantine/core';
import classes from './MainBeitrag.module.css';
import NextLink from 'next/link';

export function MainBeitrag() {
  const linkProps = { href: 'https://mantine.dev', target: '_blank', rel: 'noopener noreferrer' };

  return (
    <Card withBorder radius="md" className={classes.card} pt={0}>
      <CardSection>
        <NextLink {...linkProps}>
          <Image src="/images/beitraege/test/test.jpg" height={"auto"} width={100} />
        </NextLink>
      </CardSection>

      <Badge className={classes.rating} variant="gradient" gradient={{ from: 'red.6', to: 'red.9' }}>
        Neu
      </Badge>
      <Text className={classes.title} fw={500} component={NextLink} {...linkProps}>
        Resident Evil Village review
      </Text>

      <Text fz="sm" c="dimmed" lineClamp={4}>
        Resident Evil Village is a direct sequel to 2017’s Resident Evil 7, but takes a very
        different direction to its predecessor, namely the fact that this time round instead of
        fighting against various mutated zombies, you’re now dealing with more occult enemies like
        werewolves and vampires.
      </Text>

      <Group justify="space-between" className={classes.footer}>
        <Center>
          <Avatar
            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png"
            size={24}
            radius="xl"
            mr="xs"
          />
          <Text fz="sm" inline>
            Bill Wormeater
          </Text>
        </Center>

        <Group gap={8} mr={0}>
          <ActionIcon className={classes.action}>
            <IconHeart style={{ width: rem(16), height: rem(16) }}  />
          </ActionIcon>
          <ActionIcon className={classes.action}>
            <IconBookmark
              style={{ width: rem(16), height: rem(16) }}
            />
          </ActionIcon>
          <ActionIcon className={classes.action}>
            <IconShare style={{ width: rem(16), height: rem(16) }} />
          </ActionIcon>
        </Group>
      </Group>
    </Card>
  );
}