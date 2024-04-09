import { notFound } from 'next/navigation';

export const metadata = {
    title: "Error 404 | Freiwillige Feuerwehr Leopoldsdorf",
    description:
      "Willkommen auf der Webseite der Freiwilligen Feuerwehr Leopoldsdorf",
  };

const NotFoundDummy = () => {
  notFound();
}
export default NotFoundDummy