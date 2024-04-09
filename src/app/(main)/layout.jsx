import "@mantine/core/styles.css";
import "../../style/styles.css";

import { MantineProvider, ColorSchemeScript } from "@mantine/core";

import MainLayout from "@/components/Layouts/MainLayout";

const RootLayout = ({ children }) => {
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
          <MainLayout>{children}</MainLayout>
        </MantineProvider>
      </body>
    </html>
  );
}
export default RootLayout;