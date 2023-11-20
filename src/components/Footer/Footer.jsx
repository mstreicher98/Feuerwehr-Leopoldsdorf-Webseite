import {
  Text,
  Container,
  ActionIcon,
  Group,
  rem,
  Anchor,
  Image,
  SimpleGrid,
  Center,
} from "@mantine/core";
import {
  IconBrandX,
  IconBrandFacebook,
  IconBrandInstagram,
  IconKey,
  IconBrandYoutube,
} from "@tabler/icons-react";

import NextLink from "next/link";

import classes from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <SimpleGrid
          cols={{ base: 1, sm: 1, lg: 3 }}
          spacing={{ base: 10, sm: "xl" }}
          verticalSpacing={{ base: "md", sm: "xl" }}
        >
          <div className={classes.wrapper}>
            <Text className={classes.title}>Social Media</Text>
            <Center>
              <Group gap="xs" mt={20}>
                <Anchor href="https://x.com/ffleopoldsdorf" target="_blank">
                  <ActionIcon
                    size="xl"
                    variant="gradient"
                    radius="xl"
                    gradient={{ from: "gray", to: "rgba(0, 0, 0, 1)", deg: 135 }}
                  >
                    <IconBrandX
                      style={{ width: rem(28), height: rem(28) }}
                      stroke={1.5}
                    />
                  </ActionIcon>
                </Anchor>
                <Anchor
                  href="https://www.facebook.com/ffleopoldsdorf"
                  target="_blank"
                >
                  <ActionIcon
                    size="xl"
                    variant="gradient"
                    radius="xl"
                    gradient={{ from: "indigo", to: "blue", deg: 135 }}
                  >
                    <IconBrandFacebook
                      style={{ width: rem(28), height: rem(28) }}
                      stroke={1.5}
                    />
                  </ActionIcon>
                </Anchor>
                <Anchor
                  href="https://www.instagram.com/feuerwehr_leopoldsdorf/"
                  target="_blank"
                >
                  <ActionIcon
                    size="xl"
                    variant="gradient"
                    radius="xl"
                    gradient={{ from: "grape", to: "orange", deg: 135 }}
                  >
                    <IconBrandInstagram
                      style={{ width: rem(28), height: rem(28) }}
                      stroke={1.5}
                    />
                  </ActionIcon>
                </Anchor>
                <Anchor
                  href="https://www.youtube.com/@freiwilligefeuerwehrleopol7658"
                  target="_blank"
                >
                  <ActionIcon
                    size="xl"
                    variant="gradient"
                    radius="xl"
                    gradient={{ from: "red.5", to: "red.7", deg: 135 }}
                  >
                    <IconBrandYoutube
                      style={{ width: rem(28), height: rem(28) }}
                      stroke={1.5}
                    />
                  </ActionIcon>
                </Anchor>
              </Group>
              </Center>
          </div>
          <div className={classes.wrapper}>
            <Text className={classes.title}>Kontodaten</Text>
            <Text className={classes.link}>
              IBAN:<br />
              <Text className={classes.admin} span>
                AT95 3225 0000 0030 0830
              </Text>
            </Text>
            <Text className={classes.link}>
              BIC:<br />
              <Text className={classes.admin} span>
                RLNWATWWGTD
              </Text>
            </Text>
            <Text className={classes.link}>
              Bei Spenden an die Feuerwehr bitte als Zahlungsreferenz {'"'}Spende{'"'}
              anführen.
            </Text>
          </div>
          <div className={classes.wrapper}>
            <Text className={classes.title}>Kontakt</Text>
            <Text className={classes.link}>
              E-Mail:<br />
              <Anchor
                className={classes.admin}
                component="a"
                href="mailto:leopoldsdorf.2333@feuerwehr.gv.at"
              >
                leopoldsdorf.2333@feuerwehr.gv.at
              </Anchor>
            </Text>
            <Text className={classes.link}>
              Telefon: (nicht ständig besetzt) <br />
              <Anchor
                className={classes.admin}
                component="a"
                href="callto:+43223547202"
              >
                +43 2235 47202
              </Anchor>
            </Text>
            <Text className={classes.link}>
              Notruf:<br />
              <Anchor className={classes.admin} component="a" href="callto:122">
                122
              </Anchor>
            </Text>
          </div>
        </SimpleGrid>
      </Container>
      <Container className={classes.afterFooter}>
        <Text c="dimmed" size="sm">
          © Feuerwehr Leopoldsdorf
        </Text>

        <Group
          gap={0}
          className={classes.social}
          justify="flex-end"
          wrap="nowrap"
        >
          <NextLink href="/auth" className={classes.admin}>
            <ActionIcon
              size="md"
              variant="default"
              radius="xl"
              className={classes.login}
            >
              <IconKey
                style={{ width: rem(17), height: rem(17) }}
                stroke={1.5}
              />
            </ActionIcon>
          </NextLink>
        </Group>
      </Container>
    </footer>
  );
}
