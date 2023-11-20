import "@mantine/core/styles.css";
import "../../style/styles.css";

import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import MainLayout from "@/components/Layouts/MainLayout";

export default function RootLayout({ children }) {

  return (
    <html lang="de">
      <head>
        <meta name="googlebot" content="notranslate" />
      	<meta name="google-site-verification" content="1rlxQj4-jGrXnv2P7LL9tyeoeHWXHocT55W0-1Ci-ds"></meta>
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
