import { Banner } from "@/components/Banner/Banner";
import Main from "@/components/Main/Main";
import { MainBeitrag } from "@/components/MainBeitrag/MainBeitrag";
import { Image } from "@mantine/core";

export const metadata = {
  title: "Freiwillige Feuerwehr Leopoldsdorf",
  description:
    "Willkommen auf der Webseite der Freiwilligen Feuerwehr Leopoldsdorf",
};

export default function Startseite() {
  return (<>
    <Banner />
    <Main>
      <MainBeitrag />
    </Main></>);
}
