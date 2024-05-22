import Main from "../../../../components/Main/Main";
import {
  Anchor,
  Table,
  TableTbody,
  TableTd,
  TableTh,
  TableThead,
  TableTr,
  Text,
  TypographyStylesProvider,
} from "@mantine/core";

import classes from "./page.module.css";

export const metadata = {
  title: "Abschnitt Schwechat Land | Freiwillige Feuerwehr Leopoldsdorf",
  description: "Alle Feuerwehren im Abschnitt Schwechat Land",
};

const FEUERWEHREN_DATA = [
  {
    name: "Feuerwehr Ebergassing",
    link: "https://www.ffebergassing.at/",
  },
  {
    name: "Feuerwehr Fischamend",
    link: "https://www.feuerwehr-fischamend.at/",
  },
  {
    name: "Feuerwehr Gramatneusiedl",
    link: "https://www.ff-gramatneusiedl.at/",
  },
  {
    name: "Feuerwehr Kleinneusiedl",
    link: "https://ff-kleinneusiedl.jimdofree.com/",
  },
  {
    name: "Feuerwehr Lanzendorf",
    link: "https://fflanzendorf.at/",
  },
  {
    name: "Feuerwehr Maria Lanzendorf",
    link: "https://www.facebook.com/ffmala/",
  },
  {
    name: "Feuerwehr Moosbrunn",
    link: "https://www.ff-moosbrunn.at/",
  },
  {
    name: "Feuerwehr Pellendorf",
    link: "https://www.ff-pellendorf.at/",
  },
  {
    name: "Feuerwehr Rauchenwarth",
    link: "https://www.ff-rauchenwarth.at/",
  },
  {
    name: "Feuerwehr Schwadorf",
    link: "https://www.ff-schwadorf.at/",
  },
  {
    name: "Feuerwehr Zwölfaxing",
    link: "https://www.facebook.com/ffzwoelfaxing/",
  },
  {
    name: "Feuerwehr Wienerherberg",
    link: "http://www.ff-wienerherberg.hietz.at/",
  },
  {
    name: "Feuerwehr Himberg",
    link: "https://www.feuerwehr-himberg.at/",
  },
];

const Abschnitt = () => {
  const feuerwehren = FEUERWEHREN_DATA.map((feuerwehr) => {
    return (
      <TableTr key={feuerwehr.name}>
        <TableTd>
          <Anchor
            className={classes.link}
            href={feuerwehr.link}
            target="_blank"
          >
            {feuerwehr.name}
          </Anchor>
        </TableTd>
      </TableTr>
    );
  });
  return (
    <Main>
      <Text component="div" ta="center" mb={30}>
        <TypographyStylesProvider pl={0}>
          <h1>Abschnitt Schwechat Land</h1>
          <p>Alle Feuerwehren im Abschnitt Schwechat Land</p>
        </TypographyStylesProvider>
      </Text>

      <Table horizontalSpacing="xl" verticalSpacing="md">
        <TableThead>
          <TableTr>
            <TableTh></TableTh>
          </TableTr>
        </TableThead>
        <TableTbody>{feuerwehren}</TableTbody>
      </Table>
    </Main>
  );
}
export default Abschnitt;