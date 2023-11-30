import { ActionIcon, Burger, Divider, Group, Image, Text, useComputedColorScheme, useMantineColorScheme } from '@mantine/core';
import {
  IconSettings,
  IconLogout,
  IconHome2,
  IconLayoutDashboard,
  IconUsersGroup,
  IconNews,
  IconCarCrane,
  IconLadder,
  IconArchive,
  IconKey,
  IconListSearch,
  IconSun,
  IconMoon,
} from '@tabler/icons-react';
import cx from "clsx";
import classes from './AdminSidenav.module.css';
import { IconCalendarEvent } from '@tabler/icons-react';
import { IconUsers } from '@tabler/icons-react';
import NextLink from 'next/link';

const allgemein = [
  { link: '/admin', label: 'Startseite', icon: IconHome2 },
  { link: '/admin/dashboard', label: 'Dashboard', icon: IconLayoutDashboard }
];
const taetigkeiten = [
  { link: '/admin/beitraege', label: 'Beiträge', icon: IconNews },
  { link: '/admin/termine', label: 'Termine & Events', icon: IconCalendarEvent },
  { link: '/admin/archiv', label: 'Archiv', icon: IconArchive },
];
const feuerwehr = [
  { link: '/admin/kommando', label: 'Kommando', icon: IconUsersGroup },
  { link: '/admin/mannschaft', label: 'Mannschaft', icon: IconUsers },
  { link: '/admin/fuhrpark', label: 'Fuhrpark', icon: IconCarCrane },
  { link: '/admin/ausruestung', label: 'Ausrüstung', icon: IconLadder },
];
const admin = [
  { link: '/admin/logs', label: 'Logs', icon: IconListSearch },
  { link: '/admin/accounts', label: 'Accounts', icon: IconKey },
];

export default function AdminSidenav({ mobile, opened }) {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  const allgemeinLinks = allgemein.map((item) => (
    <NextLink
      className={classes.link}
      href={item.link}
      key={item.label}

    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </NextLink>
  ));
  const taetigkeitenLinks = taetigkeiten.map((item) => (
    <NextLink
      className={classes.link}
      href={item.link}
      key={item.label}

    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </NextLink>
  ));
  const feuerwehrLinks = feuerwehr.map((item) => (
    <NextLink
      className={classes.link}
      href={item.link}
      key={item.label}

    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </NextLink>
  ));
  const adminLinks = admin.map((item) => (
    <NextLink
      className={classes.link}
      href={item.link}
      key={item.label}

    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </NextLink>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        <Group className={classes.header} justify="space-between">
          <Image visibleFrom="sm" src="/images/logo.png" w={"95%"} />
          <Burger opened={opened} onClick={mobile} hiddenFrom="sm" size="sm" />
        </Group>
        {allgemeinLinks}
        <Divider size={"1px"} mt={"md"} mb={"md"} color='red.9' label="Tätigkeiten" labelPosition="center" />
        {taetigkeitenLinks}
        <Divider size={"1px"} mt={"md"} mb={"md"} color='red.9' label="Die Feuerwehr" labelPosition="center" />
        {feuerwehrLinks}
        <Divider size={"1px"} mt={"md"} mb={"md"} color='red.9' label="Admin" labelPosition="center" />
        {adminLinks}
      </div>

      <div className={classes.footer}>

        <Group grow ta="left">
          <ActionIcon
            
            onClick={() =>
              setColorScheme(
                computedColorScheme === "light" ? "dark" : "light"
              )
            }
            variant="filled"
            color="red.7"
            size="xl"
            className={cx(classes.sideToggle, classes.link)}
          >
            <IconSun
              className={cx(classes.icon, classes.light)}
              stroke={1.5}
            />
            <Text pl={10} className={classes.light}>Light Mode</Text>
            <IconMoon
              className={cx(classes.icon, classes.dark)}
              stroke={1.5}
            />
            <Text pl={10} className={classes.dark}>Dark Mode</Text>
          </ActionIcon>
        </Group>

        <Divider size={"1px"} mt={"md"} mb={"md"} color='red.9' />

        <NextLink href="/admin/einstellungen" className={classes.link} >
          <IconSettings className={classes.linkIcon} stroke={1.5} />
          <span>Einstellungen</span>
        </NextLink>

        <NextLink href="/auth/logout" className={classes.link}>
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Abmelden</span>
        </NextLink>
      </div>
    </nav>
  );
}