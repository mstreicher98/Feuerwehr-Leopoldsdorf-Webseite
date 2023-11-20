import "@mantine/core/styles.css";
import "../../style/styles.css";

import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import MainLayout from "@/components/Layouts/MainLayout";

export default function RootLayout({ children }) {

  return (
    <html lang="de">
      <head>
        <link rel="icon" href="/images/icon.png" sizes="any" />
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>
          <MainLayout> {children}</MainLayout>
        </MantineProvider>
      </body>
    </html>
  );
}
