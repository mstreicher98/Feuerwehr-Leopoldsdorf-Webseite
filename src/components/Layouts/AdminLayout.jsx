import { useDisclosure } from "@mantine/hooks";
import AdminSidenav from "../AdminSidenav/AdminSidenav";
import { AppShell, AppShellHeader, AppShellMain, AppShellNavbar, Burger, Group } from "@mantine/core";

export default function AdminLayout({ children }) {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure(false);
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  return (
    <AppShell
      layout="alt"
      header={{ height: 60 }}
      footer={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !mobileOpened, desktop: !desktopOpened }, }}
      padding="md"
    >
      <AppShellHeader>
        <Group h="100%" px="md">
          <Burger opened={mobileOpened} onClick={toggleMobile} hiddenFrom="sm" size="sm" />
          <Burger opened={desktopOpened} onClick={toggleDesktop} visibleFrom="sm" size="sm" />
        </Group>
      </AppShellHeader>
      <AppShellNavbar>
        <AdminSidenav opened={mobileOpened} mobile={toggleMobile} />
      </AppShellNavbar>
      <AppShellMain pb={16} h={100}>{children}</AppShellMain>
    </AppShell>
  );
}