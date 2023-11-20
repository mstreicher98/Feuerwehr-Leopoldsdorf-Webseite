"use client";
import {
  Paper,
  Text,
  Container,
  Center,
  Image,
  Loader,
} from "@mantine/core";

import LogoLight from "/public/images/logo2-light.png";
import LogoDark from "/public/images/logo2-dark.png";

import classes from "./page.module.css";
import NextImage from "next/image";
import { useRouter } from 'next/navigation'
import cx from "clsx";

export default function Auth() {
  const router = useRouter();
  router.replace("/auth/login");
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
          <Center mt={30}>
            <Loader color="red.7" size="xl" type="dots" />
          </Center>
        </Paper>
      </Container>
    </main>
  );
}
