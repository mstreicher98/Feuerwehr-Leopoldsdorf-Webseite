import Main from "../../../../components/Main/Main";
import { Divider, List, ListItem, Text, TypographyStylesProvider } from "@mantine/core";

import classes from "./page.module.css";

export const metadata = {
  title: "Sirenensignale | Freiwillige Feuerwehr Leopoldsdorf",
  description: "Alle Sirenensignale des österreichischen Zivilschutzsystems",
};

export default function Notruf() {
  return (
    <Main>
      <Text component="div" ta="center" mb={30}>
        <TypographyStylesProvider pl={0}>
          <h1>Sirenensignale</h1>
          <p>Alle Sirenensignale des österreichischen Zivilschutzsystems</p>
        </TypographyStylesProvider>
      </Text>


      <Text component="div" ta="center" mb={30}>
        <TypographyStylesProvider pl={0}>
          <p className={classes.block}>
          Diese Sirenensignale sind Teil des österreichischen Zivilschutzsystems und dienen dazu, die Bevölkerung schnell und effektiv über Gefahren zu informieren sowie die Einsatzkräfte zu mobilisieren. Es ist ratsam, die Bedeutung dieser Signale zu kennen, um im Ernstfall angemessen reagieren zu können.
          </p>
          <p className={classes.block}>
            Es ist wichtig, dass die Bevölkerung dieses Signal ernst nimmt und darauf vorbereitet ist, im Notfall angemessen zu handeln. Das Ziel dieses Signals ist es, Leben zu schützen und die Menschen rechtzeitig über Gefahren zu informieren.          
          </p>
        </TypographyStylesProvider>
      </Text>
      <Text component="div" ta="center" mb={30}>
        <TypographyStylesProvider pl={0}>
          <h3 className={classes.highlight}>Alarmierung der Feuerwehr<br /><small>(3 x 15 Sekunden auf- und absteigender Ton)</small></h3>
          <p className={classes.block}>
            Dieses Signal informiert die örtlichen Feuerwehren über einen Einsatz. Es soll sicherstellen, dass die Feuerwehrleute rechtzeitig am Einsatzort eintreffen können. Die Bevölkerung sollte während dieses Signals den Notruf nicht blockieren, um den Einsatz der Feuerwehr nicht zu behindern.
          </p>
        </TypographyStylesProvider>
      </Text>
      <Text component="div" ta="center" mb={30}>
        <TypographyStylesProvider pl={0}>
          <h3 className={classes.highlight}>Warnung vor Gefahr<br /><small>(1 Minute Dauerton)</small></h3>
          <p className={classes.block}>
            Dieses Signal warnt vor unmittelbarer Gefahr, wie beispielsweise Naturkatastrophen, Unfällen oder anderen Bedrohungen. Die Bevölkerung wird aufgefordert, Schutzräume aufzusuchen und sich über aktuelle Informationen über Radio oder Fernsehen zu informieren. Es ist wichtig, Anweisungen der Behörden zu befolgen.
          </p>
        </TypographyStylesProvider>
      </Text>      

      <Text component="div" ta="center" mb={30}>
        <TypographyStylesProvider pl={0}>
          <h3 className={classes.highlight}>Unmittelbare Gefahr<br /><small>(1 Minute auf- und absteigender Ton)</small></h3>
          <p className={classes.block}>
            Das Signal mit einem kontinuierlichen, auf- und abschwellenden Ton von einer Minute Dauer warnt die Bevölkerung vor unmittelbarer Gefahr. Dieses Signal wird in Situationen eingesetzt, in denen schnelles Handeln erforderlich ist, beispielsweise bei Naturkatastrophen wie Hochwasser, Erdbeben, Sturm oder anderen akuten Bedrohungen.
          </p>
          <List withPadding className={classes.block}>
            <ListItem>Die Bevölkerung sollte Ruhe bewahren und sofort aufmerksam auf diese Warnung reagieren.</ListItem>
            <ListItem>Es wird empfohlen, sich in geschützte Bereiche zu begeben, die je nach Art der Gefahr variieren können. Dies können Schutzräume, höher gelegene Gebiete oder andere sicherere Orte sein.</ListItem>
            <ListItem>Weiterhin sollten die Menschen aufmerksam die Medien (Radio, Fernsehen) verfolgen, um aktuelle Informationen und Anweisungen der Behörden zu erhalten.</ListItem>
            <ListItem>Anweisungen der örtlichen Einsatzkräfte und Behörden sollten unverzüglich befolgt werden.</ListItem>
          </List>
        </TypographyStylesProvider>
      </Text>   

      <Text component="div" ta="center" mb={30}>
        <TypographyStylesProvider pl={0}>
          <h3 className={classes.highlight}>Entwarnung<br /><small>(1 Minute Dauerton)</small></h3>
          <p className={classes.block}>
            Dieses Signal gibt an, dass die Gefahr vorüber ist. Die Bevölkerung kann in ihre normalen Aktivitäten zurückkehren. Es ist wichtig, dennoch auf weitere Anweisungen der Behörden zu achten, da sich die Situation ändern kann.
          </p>
        </TypographyStylesProvider>
      </Text>  
    </Main>
  );
}
