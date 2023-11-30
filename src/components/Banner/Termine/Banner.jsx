import { Title, Overlay, Center, Box } from '@mantine/core';
import classes from './Banner.module.css';

export function Banner() {
  return (
    <div className={classes.wrapper}>
      <Overlay className={classes.overlay} opacity={0.4} zIndex={1} />
      <div className={classes.inner}>
        <Center>
          <Box>
            <Title className={classes.title} tt="uppercase" >
              Termine & Events
            </Title>
            <Title className={classes.title2} tt="uppercase" >
              Die kommenden Termine auf einen Blick
            </Title>
          </Box>
        </Center>

      </div>
    </div>
  );
}