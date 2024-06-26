import { Burger, Divider, Group, Image, ScrollArea } from "@mantine/core";
import {
  IconSettings,
  IconLogout,
  IconLayoutDashboard,
  IconUsersGroup,
  IconNews,
  IconCarCrane,
  IconLadder,
  IconKey,
} from "@tabler/icons-react";
import classes from "./AdminSidenav.module.css";
import { IconCalendarEvent } from "@tabler/icons-react";
import { IconUsers } from "@tabler/icons-react";
import NextLink from "next/link";

const allgemein = [
  { link: "/admin/dashboard", label: "Dashboard", icon: IconLayoutDashboard },
];
const taetigkeiten = [
  { link: "/admin/beitraege", label: "Beiträge", icon: IconNews },
  {
    link: "/admin/termine",
    label: "Termine & Events",
    icon: IconCalendarEvent,
  },
];
const feuerwehr = [
  { link: "/admin/kommando", label: "Kommando", icon: IconUsersGroup },
  { link: "/admin/mannschaft", label: "Mannschaft", icon: IconUsers },
  { link: "/admin/fuhrpark", label: "Fuhrpark", icon: IconCarCrane },
  { link: "/admin/ausruestung", label: "Ausrüstung", icon: IconLadder },
];
const admin = [{ link: "/admin/accounts", label: "Accounts", icon: IconKey }];

const AdminSidenav = ({ mobile, opened }) => {
  const allgemeinLinks = allgemein.map((item) => (
    <NextLink className={classes.link} href={item.link} key={item.label}>
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </NextLink>
  ));
  const taetigkeitenLinks = taetigkeiten.map((item) => (
    <NextLink className={classes.link} href={item.link} key={item.label}>
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </NextLink>
  ));
  const feuerwehrLinks = feuerwehr.map((item) => (
    <NextLink className={classes.link} href={item.link} key={item.label}>
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </NextLink>
  ));
  const adminLinks = admin.map((item) => (
    <NextLink className={classes.link} href={item.link} key={item.label}>
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </NextLink>
  ));

  return (
    <nav className={classes.navbar}>
      <ScrollArea h={"100vh"}>
        <div className={classes.navbarMain}>
          <Group className={classes.header} justify="space-between">
            <Image visibleFrom="sm" src="/images/logo.png" w={"95%"} />
            <Burger
              opened={opened}
              onClick={mobile}
              hiddenFrom="sm"
              size="sm"
              style={{ "--__burger-color": "var(--mantine-color-white)" }}
            />
          </Group>
          {allgemeinLinks}
          <Divider
            size={"1px"}
            mt={"md"}
            mb={"md"}
            color="red.9"
            label="Tätigkeiten"
            labelPosition="center"
          />
          {taetigkeitenLinks}
          <Divider
            size={"1px"}
            mt={"md"}
            mb={"md"}
            color="red.9"
            label="Die Feuerwehr"
            labelPosition="center"
          />
          {feuerwehrLinks}
          <Divider
            size={"1px"}
            mt={"md"}
            mb={"md"}
            color="red.9"
            label="Admin"
            labelPosition="center"
          />
          {adminLinks}
        </div>
      </ScrollArea>

      <div className={classes.footer}>
        <NextLink href="/admin/einstellungen" className={classes.link}>
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
export default AdminSidenav;
