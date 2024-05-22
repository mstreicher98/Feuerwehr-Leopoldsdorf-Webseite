"use client";
import {
  TextInput,
  PasswordInput,
  Anchor,
  Paper,
  Container,
  Button,
  Box,
  Center,
  Image,
  Divider,
  rem,
  createTheme,
  MantineThemeProvider,
  Input,
} from "@mantine/core";

import LogoLight from "/public/images/logo2-light.png";
import LogoDark from "/public/images/logo2-dark.png";

import classes from "./page.module.css";
import NextImage from "next/image";

import NextLink from "next/link";

import cx from "clsx";
import { IconArrowLeft } from "@tabler/icons-react";

const Login = () => {
  const themeLogin = createTheme({
    components: {
      Input: Input.extend({
        classNames: {
          input: classes.input,
        },
      }),

      InputWrapper: Input.Wrapper.extend({
        classNames: {
          label: classes.label,
        },
      }),
    },
  });

  return (
    <main className={classes.center}>
      <Container size={420}>
        <Paper withBorder shadow="md" p={30} mt={0} radius="md">
          <Center>
            <Image
              h="auto"
              w="70%"
              fit="contain"
              component={NextImage}
              quality={80}
              mb={10}
              src={LogoLight}
              className={cx(classes.dark)}
              alt="Feuerwehr Leopoldsdorf Logo"
            />
            <Image
              h="auto"
              w="70%"
              fit="contain"
              component={NextImage}
              quality={80}
              mb={10}
              src={LogoDark}
              className={cx(classes.light)}
              alt="Feuerwehr Leopoldsdorf Logo"
            />
          </Center>
          <form>
            <MantineThemeProvider theme={themeLogin}>
              <TextInput
                withAsterisk
                label="Username"
                placeholder="Dein Username"
                required
                autoComplete="false"
              />
              <PasswordInput
                label="Passwort"
                placeholder="Dein Passwort"
                required
                mt="md"
              />
            </MantineThemeProvider>
            <Button color="red.7" fullWidth mt="xl" mb={30} type="submit">
              Anmelden
            </Button>
          </form>
          <Divider
            my="sm"
            label={
              <Anchor component={NextLink} href="/" underline="never" c="red.7">
                <Center inline>
                  <IconArrowLeft style={{ width: rem(15), height: rem(15) }} />
                  <Box ml={5}>Zurück</Box>
                </Center>
              </Anchor>
            }
          />
        </Paper>
      </Container>
    </main>
  );
}
export default Login;