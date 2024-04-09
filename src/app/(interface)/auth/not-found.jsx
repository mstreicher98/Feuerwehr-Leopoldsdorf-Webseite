import AuthNotFound from "@/components/Not-Found/AuthNotFound";

import classes from "./not-found.module.css";

const NotFound = () => {
  return (
    <main className={classes.center}>
      <AuthNotFound />
    </main>
  );
};
export default NotFound;
