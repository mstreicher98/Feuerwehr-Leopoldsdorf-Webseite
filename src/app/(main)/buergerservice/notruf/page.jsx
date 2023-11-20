import Main from "../../../../components/Main/Main";
import { Text, TypographyStylesProvider } from "@mantine/core";

import classes from "./page.module.css";

export const metadata = {
  title: "Notruf | Freiwillige Feuerwehr Leopoldsdorf",
  description: "Das richtige Vorgehen beim absetzten eines Notrufs",
};

export default function Notruf() {
  return (
    <Main>
      <Text component="div" ta="center" mb={30}>
        <TypographyStylesProvider pl={0}>
          <h1>Notruf</h1>
          <p>Das richtige Vorgehen beim absetzten eines Notrufs</p>
        </TypographyStylesProvider>
      </Text>


      <Text component="div" ta="center" mb={30}>
        <TypographyStylesProvider pl={0}>
          <h3>122 | 133 | 144 | 112</h3>
          <p className={classes.block}>
            Notrufe sind kostenlos und funktionieren sowohl aus der Telefonzelle ohne Münzen als auch vom Handy (auch ohne eingelegter Simkarte) aus.
          </p>
          <p className={classes.block}>
            Wichtig beim Absenden eines Notrufs sind die <span className={classes.highlight}>fünf W's</span>. Nur dadurch kann Ihnen die richtige Hilfe rasch geschickt werden. Der Notruf wird durch einen Diensthabenden an der Leitstelle entgegengenommen.
          </p>
        </TypographyStylesProvider>
      </Text>








      <Text component="div" ta="center" mb={30}>
        <TypographyStylesProvider pl={0}>
          <h3 className={classes.highlight}>Was ist passiert?</h3>
          <p className={classes.block}>
            Beschreibe die Art des Notfalls so detailliert wie möglich. Dies könnte beinhalten, ob es sich um einen Verkehrsunfall handelt, ob jemand bewusstlos ist, ob es Brände gibt, ob Verletzungen vorliegen oder ob es sich um eine andere Art von medizinischem Notfall handelt. Je mehr Informationen du zu dieser Frage liefern kannst, desto besser können die Rettungsdienste sich auf die Situation vorbereiten. 
          </p>
          <p className={classes.block}>
            Zum Beispiel: "Es hat einen Verkehrsunfall gegeben, bei dem zwei Autos zusammengestoßen sind. Es gibt Verletzte, und eine Person hat Rückenschmerzen gemeldet. Keine Anzeichen von Bränden."
          </p>
        </TypographyStylesProvider>
      </Text>

      <Text component="div" ta="center" mb={30}>
        <TypographyStylesProvider pl={0}>
          <h3 className={classes.highlight}>Wo ist es passiert?</h3>
          <p className={classes.block}>
            Gib so präzise wie möglich den genauen Ort des Geschehens an. Dies kann die Adresse, Kreuzung, Straßenname, Hausnummer oder andere identifizierende Informationen umfassen. Falls vorhanden, nenne auch besondere Merkmale, die die Lokalisierung erleichtern könnten, wie markante Gebäude, Farben oder Wegbeschreibungen.
          </p>
          <p className={classes.block}>
            Ein Beispiel könnte lauten: "Der Notfall hat sich an der Kreuzung von Mainstraße und Nebenweg ereignet, direkt vor dem Supermarkt XYZ. Die genaue Adresse ist Mainstraße 123. Das ist in der Innenstadt von [Stadt]."
          </p>
        </TypographyStylesProvider>
      </Text>

      <Text component="div" ta="center" mb={30}>
        <TypographyStylesProvider pl={0}>
          <h3 className={classes.highlight}>Wieviele verletzte Personen?</h3>
          <p className={classes.block}>
          Gib die Anzahl der verletzten Personen an und schildere kurz die Art ihrer Verletzungen. Dies hilft den Rettungsdiensten, die Schwere des Notfalls zu verstehen und die benötigten Ressourcen entsprechend einzuschätzen.
          </p>
          <p className={classes.block}>
            Zum Beispiel: "Es hat einen Verkehrsunfall gegeben, bei dem zwei Autos zusammengestoßen sind. Es gibt drei verletzte Personen: Eine Person hat Rückenschmerzen, eine andere klagt über Kopfschmerzen, und die dritte hat Schnittverletzungen am Arm."          
          </p> 
        </TypographyStylesProvider>
      </Text>

      <Text component="div" ta="center" mb={30}>
        <TypographyStylesProvider pl={0}>
          <h3 className={classes.highlight}>Wer meldet das Ereignis?</h3>
          <p className={classes.block}>
            Gib deinen vollen Namen an und kläre, ob du direkt von der Situation betroffen bist oder ob du nur Zeuge bist. Wenn du direkt betroffen bist, teile auch wichtige persönliche Informationen mit, die für die Rettungsdienste relevant sein könnten, wie etwa etwaige Gesundheitszustände oder Allergien.          
          </p>
          <p className={classes.block}>
          Beispiel: "Mein Name ist [Vorname Nachname]. Ich bin direkt an der Situation beteiligt. Ich habe keine bekannten gesundheitlichen Probleme. Die verletzte Person ist [falls unterschiedlich] [Name der verletzten Person]."
          </p>        
        </TypographyStylesProvider>
      </Text>

      <Text component="div" ta="center" mb={30}>
        <TypographyStylesProvider pl={0}>
          <h3 className={classes.highlight}>Warten auf Rückfragen</h3>
          <p className={classes.block}>
          Nachdem du die grundlegenden Informationen im Notruf bereitgestellt hast, bleibe am Telefon und warte auf eventuelle Rückfragen des Notrufdisponenten. Diese können dazu dienen, weitere Details zu klären oder spezifische Anweisungen zu geben. Bleibe ruhig und beantworte die Fragen so präzise wie möglich. Sei darauf vorbereitet, den Standort erneut zu bestätigen, zusätzliche Informationen über den Notfall zu geben oder Anweisungen zur Ersten Hilfe entgegenzunehmen. Die Zusammenarbeit mit dem Notrufdisponenten ist entscheidend, um eine effiziente und zielgerichtete Hilfeleistung zu gewährleisten.
          </p>
        </TypographyStylesProvider>
      </Text>
    </Main>
  );
}
