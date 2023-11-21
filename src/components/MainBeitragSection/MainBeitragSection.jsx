import {
    Card,
    Image,
    Text,
    Badge,
    Center,
    CardSection,
    Title,
    Button,
    Divider,
    SimpleGrid,
} from '@mantine/core';
import classes from './MainBeitragSection.module.css';
import NextLink from 'next/link';

export function MainBeitragSection({section, test}) {
    const linkProps = { href: 'https://mantine.dev', target: '_blank', rel: 'noopener noreferrer' };

    return (
        <>
            <Divider label={<Title tt="uppercase" className={classes.highlight} size={40} mb={40} mt={40}>
                {section}
            </Title>} />

            <SimpleGrid
        cols={{ base: 1, sm: 3, lg: 3 }}
        spacing={{ base: "sm", sm: "sm" }}
        verticalSpacing={{ base: "md", sm: "xl" }}
      >
                <div>
                    <Card withBorder radius="md" className={classes.card} pt={0}>
                        <CardSection>
                            <NextLink {...linkProps}>
                                <Image src={test.bild} height={"auto"} width={100} />
                            </NextLink>
                        </CardSection>

                        <Text className={classes.title} component={NextLink} {...linkProps}>
                            <Title order={3}>{test.title}</Title>
                        </Text>

                        <Divider my="xs" label="14. August 2023" labelPosition="center" mb={20} />

                        <Text lineClamp={4} className={classes.block}>
                            {test.text}
                        </Text>
                        <Divider mt={20} mb={20} />
                        <Center>
                            <Button size='md' color={"red.7"} variant="light" fullWidth>Weiter lesen</Button>
                        </Center>
                    </Card>
                </div>
                <div>
                    <Card withBorder radius="md" className={classes.card} pt={0}>
                        <CardSection>
                            <NextLink {...linkProps}>
                                <Image src={test.bild} height={"auto"} width={100} />
                            </NextLink>
                        </CardSection>

                        <Text className={classes.title} component={NextLink} {...linkProps}>
                            <Title order={3}>{test.title}</Title>
                        </Text>

                        <Divider my="xs" label="14. August 2023" labelPosition="center" mb={20} />

                        <Text lineClamp={4} className={classes.block}>
                            {test.text}
                        </Text>
                        <Divider mt={20} mb={20} />
                        <Center>
                            <Button size='md' color={"red.7"} variant="light" fullWidth>Weiter lesen</Button>
                        </Center>
                    </Card>
                </div>
                <div>
                    <Card withBorder radius="md" className={classes.card} pt={0}>
                        <CardSection>
                            <NextLink {...linkProps}>
                                <Image src={test.bild} height={"auto"} width={100} />
                            </NextLink>
                        </CardSection>

                        <Text className={classes.title} component={NextLink} {...linkProps}>
                            <Title order={3}>{test.title}</Title>
                        </Text>

                        <Divider my="xs" label="14. August 2023" labelPosition="center" mb={20} />

                        <Text lineClamp={4} className={classes.block}>
                            {test.text}
                        </Text>
                        <Divider mt={20} mb={20} />
                        <Center>
                            <Button size='md' color={"red.7"} variant="light" fullWidth>Weiter lesen</Button>
                        </Center>
                    </Card>
                </div>
                
            </SimpleGrid>


        </>
    );
}