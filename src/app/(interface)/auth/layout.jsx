import "@mantine/core/styles.css";
import "../../../style/auth.css";

import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import AuthLayout from "@/components/Layouts/AuthLayout";
import AuthToggleButton from "@/components/Auth/AuthToggleButton";

const RootLayout = ({ children }) => {
  return (
    <html lang="de">
      <head>
        <link rel="icon" href="/images/icon.png" sizes="any" />
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>
          <AuthLayout>
            {children}
            <AuthToggleButton />
          </AuthLayout>
        </MantineProvider>
      </body>
    </html>
  );
}
export default RootLayout;