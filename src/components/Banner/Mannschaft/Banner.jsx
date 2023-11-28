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

              Unsere Mannschaft
            </Title>
            <Title className={classes.title2} tt="uppercase" >
              Chargen | Aktiv | Reserve | Jugend
            </Title>
          </Box>
        </Center>

      </div>
    </div>
  );
}