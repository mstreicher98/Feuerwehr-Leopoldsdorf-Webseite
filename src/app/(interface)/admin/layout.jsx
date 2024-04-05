"use client";
import "@mantine/core/styles.css";
import "@mantine/tiptap/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/notifications/styles.css";
import "../../../style/admin.css";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import AdminLayout from "@/components/Layouts/AdminLayout";
import { Notifications } from "@mantine/notifications";
import { ModalsProvider } from "@mantine/modals";

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <head>
        <meta name="googlebot" content="notranslate" />
        <meta
          name="google-site-verification"
          content="1rlxQj4-jGrXnv2P7LL9tyeoeHWXHocT55W0-1Ci-ds"
        ></meta>
        <link rel="icon" href="/images/icon.png" sizes="any" />
        <ColorSchemeScript defaultColorScheme="light" />
      </head>
      <body>
        <MantineProvider defaultColorScheme="light">
          <ModalsProvider>
            <Notifications position="top-right" />
            <AdminLayout>{children}</AdminLayout>
          </ModalsProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
