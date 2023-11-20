import AuthNotFound from "@/components/Not-Found/AuthNotFound";

import classes from "./not-found.module.css"


export default function NotFound() {
  return (
    <main className={classes.center}><AuthNotFound /></main>
  );
}
