import { Group, Code, Image } from '@mantine/core';
import {
  IconBellRinging,
  IconFingerprint,
  IconKey,
  IconSettings,
  Icon2fa,
  IconDatabaseImport,
  IconReceipt2,
  IconSwitchHorizontal,
  IconLogout,
  IconHome2,
  IconDeviceDesktopAnalytics,
  IconLayoutDashboard,
} from '@tabler/icons-react';
import classes from './AdminSidenav.module.css';

const data = [
  { link: '', label: 'Startseite', icon: IconHome2 },
  { link: '', label: 'Dashboard', icon: IconLayoutDashboard },
  { link: '', label: 'Security', icon: IconFingerprint },
  { link: '', label: 'SSH Keys', icon: IconKey },
  { link: '', label: 'Databases', icon: IconDatabaseImport },
  { link: '', label: 'Authentication', icon: Icon2fa },
  { link: '', label: 'Other Settings', icon: IconSettings },
];

export default function AdminSidenav() {

  const links = data.map((item) => (
    <a
      className={classes.link}
      href={item.link}
      key={item.label}

    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </a>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        <Group className={classes.header} justify="space-between">
            <Image src="/images/logo.png" w={"95%"} />
        </Group>
        {links}
      </div>

      <div className={classes.footer}>
        <a href="#" className={classes.link} >
          <IconSettings className={classes.linkIcon} stroke={1.5} />
          <span>Einstellungen</span>
        </a>

        <a href="#" className={classes.link}>
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Abmelden</span>
        </a>
      </div>
    </nav>
  );
}