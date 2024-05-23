import { Title, Overlay, Center, Box } from "@mantine/core";
import classes from "./Banner.module.css";

const Banner = () => {
  return (
    <div className={classes.wrapper}>
      <Overlay className={classes.overlay} opacity={0.4} zIndex={1} />
      <div className={classes.inner}>
        <Center>
          <Box>
            <Title className={classes.title} tt="uppercase">
              Fuhrpark
            </Title>
            <Title className={classes.title2} tt="uppercase">
              Der Fuhrpark der Freiwilligen Feuerwehr Leopoldsdorf
            </Title>
          </Box>
        </Center>
      </div>
    </div>
  );
};
export default Banner;
