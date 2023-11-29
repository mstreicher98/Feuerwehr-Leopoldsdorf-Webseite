import { Banner } from "@/components/Banner/Startseite/Banner";
import { Neu } from "@/components/Beitraege/Neu";
import Main from "@/components/Main/Main";
import { MainBeitragSection } from "@/components/MainBeitragSection/MainBeitragSection";

export const metadata = {
  title: "Freiwillige Feuerwehr Leopoldsdorf",
  description:
    "Willkommen auf der Webseite der Freiwilligen Feuerwehr Leopoldsdorf",
  openGraph: {
    images: '/images/logo2-dark.png',
  },
};

const einsatz_data = {
  title: "Einsatz",
  text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
  bild: "/images/beitraege/test/test1.jpg"
};

const uebung_data = {
  title: "Übung",
  text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
  bild: "/images/beitraege/test/test2.jpg"
};

const jugend_data = {
  title: "Jugend",
  text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
  bild: "/images/beitraege/test/test3.jpg"
};


export default function Startseite() {
  return (
    <>
      <Banner />
      <Main nomargin>
        <Neu />
        <MainBeitragSection section="Einsätze" test={einsatz_data} />
        <MainBeitragSection section="Übungen" test={uebung_data} />
        <MainBeitragSection section="Jugend" test={jugend_data} />
      </Main>
    </>
  );
}
