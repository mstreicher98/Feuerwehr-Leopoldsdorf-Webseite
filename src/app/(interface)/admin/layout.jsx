"use client";
import "@mantine/core/styles.css";
import { MantineProvider, ColorSchemeScript  } from "@mantine/core";
import AdminLayout from "@/components/Layouts/AdminLayout";


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
          <AdminLayout>{children}</AdminLayout>
        </MantineProvider>
      </body>
    </html>
  );
}