"use client";
import {
  HoverCard,
  Group,
  UnstyledButton,
  Text,
  SimpleGrid,
  ThemeIcon,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  rem,
  useMantineTheme,
  Image,
  ActionIcon,
  useMantineColorScheme,
  useComputedColorScheme,
} from "@mantine/core";

import { useDisclosure } from "@mantine/hooks";

import {
  IconUrgent,
  IconArchive,
  IconFireExtinguisher,
  IconFiretruck,
  IconChevronDown,
  IconUsersGroup,
  IconLadder,
  IconBackpack,
  IconFireHydrant,
  IconPhone,
  IconSpeakerphone,
  IconRoad,
  IconDirections,
  IconMicrophone2,
  IconSun,
  IconMoon,
  IconCalendarEvent,
} from "@tabler/icons-react";

import NextImage from "next/image";
import NextLink from "next/link";
import { usePathname } from "next/navigation";

import cx from "clsx";
import classes from "./Header.module.css";
import Logo from "/public/images/logo.png";

const taetigkeitenData = [
  {
    icon: IconUrgent,
    title: "Einsätze",
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
    link: "/taetigkeiten/einsaetze",
  },
  {
    icon: IconFireHydrant,
    title: "Übungen",
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
    link: "/taetigkeiten/uebungen",
  },
  {
    icon: IconBackpack,
    title: "Jugend",
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
    link: "/taetigkeiten/jugend",
  },
  {
    icon: IconCalendarEvent,
    title: "Termine & Events",
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
    link: "/taetigkeiten/termine",
  },
  {
    icon: IconArchive,
    title: "Archiv",
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
    link: "/taetigkeiten/archiv",
  },
];

const buergerserviceData = [
  {
    icon: IconSpeakerphone,
    title: "Sirenensignale",
    description: "Alle Sirenensignale des österreichischen Zivilschutzsystems",
    link: "/buergerservice/sirenensignale",
  },
  {
    icon: IconPhone,
    title: "Notruf",
    description: "Das richtige Vorgehen beim absetzten eines Notrufs",
    link: "/buergerservice/notruf",
  },
  {
    icon: IconRoad,
    title: "Rettungsgasse",
    description: "Helfen Sie mit um Leben zu retten, Rettungsgasse bilden",
    link: "/buergerservice/rettungsgasse",
  },
  {
    icon: IconFireExtinguisher,
    title: "Richtig Löschen",
    description: "Der richtige Umgang mit einem Feuerlöscher im Fall eines Brandes",
    link: "/buergerservice/richtig-loeschen",
  },
  {
    icon: IconDirections,
    title: "Abschnitt Schwechat Land",
    description: "Alle Feuerwehren im Abschnitt Schwechat Land",
    link: "/buergerservice/abschnitt-schwechat-land",
  },
];

const feuerwehrData = [
  {
    icon: IconMicrophone2,
    title: "Kommando",
    description:
      "Unser Feuerwehrkommando besteht aus den besten Führungskräften.",
    link: "/feuerwehr/kommando",
  },
  {
    icon: IconUsersGroup,
    title: "Mannschaft",
    description:
      "Unsere Mannschaft besteht aus den besten und fähigsten Personen.",
    link: "/feuerwehr/mannschaft",
  },
  {
    icon: IconFiretruck,
    title: "Fuhrpark",
    description:
      "Unser Fuhrpark umfasst eine vielzahl verschiedener Feuerwehr Fahrzeuge.",
    link: "/feuerwehr/fuhrpark",
  },
  {
    icon: IconLadder,
    title: "Ausrüstung",
    description:
      "Unsere Ausrüstung umfasst eine vielzahl von Werkzeugen / Geräten.",
    link: "/feuerwehr/ausruestung",
  },
];

export default function Header() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [taetigkeitenOpened, { toggle: toggleTaetigkeiten }] =
    useDisclosure(false);

  const [buergerserviceOpened, { toggle: toggleBuergerservice }] =
    useDisclosure(false);

  const [feuerwehrOpened, { toggle: toggleFeuerwehr }] = useDisclosure(false);
  const theme = useMantineTheme();

  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });
  const pathname = usePathname();

  function mapLinks(data) {
    const link = data.map((item) => (
      <NextLink
        href={item.link}
        className={
          pathname === item.link
            ? `${classes.subActive} ${classes.subLink}`
            : classes.subLink
        }
        key={item.title}
        style={{ textDecoration: "none" }}
      >
        <Group
          wrap="nowrap"
          align="flex-start"
          className={classes.subLinkWrapper}
        >
          <ThemeIcon size={34} variant="light" color="red" radius="md">
            <item.icon
              style={{ width: rem(22), height: rem(22) }}
              color={theme.colors.red[7]}
            />
          </ThemeIcon>
          <div>
            <Text size="sm" fw={500}>
              {item.title}
            </Text>
            <Text size="xs" c="dimmed" visibleFrom="sm">
              {item.description}
            </Text>
          </div>
        </Group>
      </NextLink>
    ));

    return link;
  }
  const taetigkeitenLinks = mapLinks(taetigkeitenData);
  const buergerserviceLinks = mapLinks(buergerserviceData);
  const feuerwehrLinks = mapLinks(feuerwehrData);

  return (
    <Box pb={120} className={classes.fixed}>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <NextLink href="/">
            <Image
              h={50}
              w="auto"
              fit="contain"
              component={NextImage}
              quality={80}
              src={Logo}
              className={classes.headerlogo}
              alt="Feuerwehr Leopoldsdorf Logo"
            />{" "}
          </NextLink>

          <Group h="100%" gap={0} visibleFrom="md">
            <NextLink
              href="/"
              className={
                pathname === "/"
                  ? `${classes.active} ${classes.link}`
                  : classes.link
              }
            >
              Startseite
            </NextLink>
            <HoverCard
              width={600}
              position="bottom"
              radius="md"
              shadow="md"
              withinPortal
            >
              <HoverCard.Target>
                <a
                  href="#"
                  className={
                    pathname.includes("/taetigkeiten")
                      ? `${classes.active} ${classes.link}`
                      : classes.link
                  }
                >
                  <Center inline>
                    <Box component="span" mr={5}>
                      Tätigkeiten
                    </Box>
                    <IconChevronDown
                      style={{ width: rem(16), height: rem(16) }}
                      color="white"
                    />
                  </Center>
                </a>
              </HoverCard.Target>

              <HoverCard.Dropdown
                className={classes.dropdown}
                style={{ overflow: "hidden" }}
              >
                <Group justify="space-between" px="md">
                  <Text fw={500}>Tätigkeiten der Feuerwehr</Text>
                </Group>

                <Divider my="sm" />

                <SimpleGrid cols={2} spacing={0}>
                  {taetigkeitenLinks}
                </SimpleGrid>
              </HoverCard.Dropdown>
            </HoverCard>

            <HoverCard
              width={600}
              position="bottom"
              radius="md"
              shadow="md"
              withinPortal
            >
              <HoverCard.Target>
                <a
                  href="#"
                  className={
                    pathname.includes("/buergerservice")
                      ? `${classes.active} ${classes.link}`
                      : classes.link
                  }
                >
                  <Center inline>
                    <Box component="span" mr={5}>
                      Bürgerservice
                    </Box>
                    <IconChevronDown
                      style={{ width: rem(16), height: rem(16) }}
                      color="white"
                    />
                  </Center>
                </a>
              </HoverCard.Target>

              <HoverCard.Dropdown
                className={classes.dropdown}
                style={{ overflow: "hidden" }}
              >
                <Group justify="space-between" px="md">
                  <Text fw={500}>Bürgerservice</Text>
                </Group>

                <Divider my="sm" />

                <SimpleGrid cols={2} spacing={0}>
                  {buergerserviceLinks}
                </SimpleGrid>
              </HoverCard.Dropdown>
            </HoverCard>

            <HoverCard
              width={600}
              position="bottom"
              radius="md"
              shadow="md"
              withinPortal
            >
              <HoverCard.Target>
                <a
                  href="#"
                  className={
                    pathname.includes("/feuerwehr")
                      ? `${classes.active} ${classes.link}`
                      : classes.link
                  }
                >
                  <Center inline>
                    <Box component="span" mr={5}>
                      Feuerwehr
                    </Box>
                    <IconChevronDown
                      style={{ width: rem(16), height: rem(16) }}
                      color="white"
                    />
                  </Center>
                </a>
              </HoverCard.Target>

              <HoverCard.Dropdown
                className={classes.dropdown}
                style={{ overflow: "hidden" }}
              >
                <Group justify="space-between" px="md">
                  <Text fw={500}>Unsere Feuerwehr</Text>
                </Group>

                <Divider my="sm" />

                <SimpleGrid cols={2} spacing={0}>
                  {feuerwehrLinks}
                </SimpleGrid>
              </HoverCard.Dropdown>
            </HoverCard>
            <NextLink
              href="/impressum"
              className={
                pathname === "/impressum"
                  ? `${classes.active} ${classes.link}`
                  : classes.link
              }
            >
              Impressum
            </NextLink>
          </Group>

          <Group visibleFrom="md">
            <ActionIcon
              onClick={() =>
                setColorScheme(
                  computedColorScheme === "light" ? "dark" : "light"
                )
              }
              variant="filled"
              size="xl"
              color={theme.colors.red[7]}
            >
              <IconSun
                className={cx(classes.icon, classes.light)}
                stroke={1.5}
              />
              <IconMoon
                className={cx(classes.icon, classes.dark)}
                stroke={1.5}
              />
            </ActionIcon>
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            hiddenFrom="md"
            color="white"
          />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Menü"
        hiddenFrom="md"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />

          <NextLink
            href="/"
            className={
              pathname === "/"
                ? `${classes.active} ${classes.link}`
                : classes.link
            }
            onClick={toggleDrawer}
          >
            Startseite
          </NextLink>
          <UnstyledButton
            className={
              pathname.includes("/taetigkeiten")
                ? `${classes.active} ${classes.link}`
                : classes.link
            }
            onClick={toggleTaetigkeiten}
          >
            <Center inline>
              <Box component="span" ml={15} mr={5}>
                Tätigkeiten
              </Box>
              <IconChevronDown style={{ width: rem(16), height: rem(16) }} />
            </Center>
          </UnstyledButton>
          <Collapse in={taetigkeitenOpened} ml={15} onClick={toggleDrawer}>
            {taetigkeitenLinks}
          </Collapse>

          <UnstyledButton
            className={
              pathname.includes("/buergerservice")
                ? `${classes.active} ${classes.link}`
                : classes.link
            }
            onClick={toggleBuergerservice}
          >
            <Center inline>
              <Box component="span" ml={15} mr={5}>
                Bürgerservice
              </Box>
              <IconChevronDown style={{ width: rem(16), height: rem(16) }} />
            </Center>
          </UnstyledButton>
          <Collapse in={buergerserviceOpened} ml={15} onClick={toggleDrawer}>
            {buergerserviceLinks}
          </Collapse>

          <UnstyledButton
            className={
              pathname.includes("/feuerwehr")
                ? `${classes.active} ${classes.link}`
                : classes.link
            }
            onClick={toggleFeuerwehr}
          >
            <Center inline>
              <Box component="span" ml={15} mr={5}>
                Feuerwehr
              </Box>
              <IconChevronDown style={{ width: rem(16), height: rem(16) }} />
            </Center>
          </UnstyledButton>
          <Collapse in={feuerwehrOpened} ml={15} onClick={toggleDrawer}>
            {feuerwehrLinks}
          </Collapse>
          <NextLink
            href="/impressum"
            className={
              pathname === "/impressum"
                ? `${classes.active} ${classes.link}`
                : classes.link
            }
            onClick={toggleDrawer}
          >
            Impressum
          </NextLink>

          <Divider my="sm" />

          <Group justify="center" grow pb="xl" px="md">
            <ActionIcon
              onClick={() =>
                setColorScheme(
                  computedColorScheme === "light" ? "dark" : "light"
                )
              }
              variant="outline"
              color="red.7"
              size="xl"
              className={classes.sideToggle}
            >
              <IconSun
                className={cx(classes.icon, classes.light)}
                stroke={1.5}
              />
              <IconMoon
                className={cx(classes.icon, classes.dark)}
                stroke={1.5}
              />
            </ActionIcon>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
