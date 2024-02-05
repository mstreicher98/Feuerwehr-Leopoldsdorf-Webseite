import { useDisclosure } from "@mantine/hooks";
import AdminSidenav from "../AdminSidenav/AdminSidenav";
import {
  ActionIcon,
  AppShell,
  AppShellHeader,
  AppShellMain,
  AppShellNavbar,
  Burger,
  Group,
  Text,
  useComputedColorScheme,
  useMantineColorScheme,
} from "@mantine/core";
import { usePathname } from "next/navigation";
import cx from "clsx";
import classes from "./AdminLayout.module.css";
import { IconMoon, IconSun } from "@tabler/icons-react";

export default function AdminLayout({ children }) {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure(false);
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  const pathname = usePathname();
  let Name = "";
  switch (pathname) {
    case "/admin/dashboard":
      Name = "Dashboard";
      break;
    case "/admin/beitraege":
      Name = "Beiträge";
      break;
    case "/admin/termine":
      Name = "Termine & Events";
      break;
    case "/admin/beitraege":
      Name = "Beiträge";
      break;    
      case "/admin/beitraege/neu":
      Name = "Neuen Beitrag erstellen";
      break;
    case "/admin/kommando":
      Name = "Kommando";
      break;
    case "/admin/mannschaft":
      Name = "Mannschaft";
      break;
    case "/admin/mannschaft/neu":
      Name = "Neues Mitglied hinzufügen";
      break;
    case "/admin/fuhrpark":
      Name = "Fuhrpark";
      break;
    case "/admin/ausruestung":
      Name = "Ausrüstung";
      break;
    case "/admin/accounts":
      Name = "Admin Accounts";
      break;
    case "/admin/einstellungen":
      Name = "Einstellungen";
      break;
    default:
      Name = "Admin Interface";
  }

  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("dark", {
    getInitialValueInEffect: true,
  });

  return (
    <AppShell
      layout="alt"
      header={{ height: 60 }}
      footer={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
      padding="md"
    >
      <AppShellHeader w={"auto"}>
        <Group h="100%" px="md" justify="space-between">
          <Group>
            <Burger
              opened={mobileOpened}
              onClick={toggleMobile}
              hiddenFrom="sm"
              size="sm"
            />
            <Burger
              opened={desktopOpened}
              onClick={toggleDesktop}
              visibleFrom="sm"
              size="sm"
            />
            <Text fw={700} size={"xl"}>
              {Name}
            </Text>
          </Group>
          <Group ml="xl" gap={0}>
            <ActionIcon
              variant="default"
              onClick={() =>
                setColorScheme(
                  computedColorScheme === "light" ? "dark" : "light"
                )
              }
              size="xl"
              className={cx(classes.sideToggle, classes.link)}
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
        </Group>

        <Group justify="center" grow px="md"></Group>
      </AppShellHeader>
      <AppShellNavbar>
        <AdminSidenav opened={mobileOpened} mobile={toggleMobile} />
      </AppShellNavbar>
      <AppShellMain pb={16} h={100}>
        {children}
      </AppShellMain>
    </AppShell>
  );
}
