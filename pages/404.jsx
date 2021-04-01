import Head from "next/head";
import Link from "next/link";



export default function Custom404() {
   return (
      <div className="error404">
         <Head>
            <title>Erreur 404 - Page indisponible</title>
            <link rel="icon" href="images/favicon.ico" />
         </Head>

         <p>Oups !</p>
         <p>La page que vous cherchez semble introuvable.</p>
         <p>Code d'erreur: 404</p>
         <p>Voici un lien qui pourrait vous êtres utiles :</p><br/>

         <Link href="/">
            <a>Page d'accueil</a>
         </Link>
      </div>
   )
 }