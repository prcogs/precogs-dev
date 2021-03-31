import { useState } from "react"


const Prestation = ({ width }) => {
   const [view, setView] = useState("vitrine")
   
   return (
      <section className="prestation">
         <h2>Prestations</h2>

         {width <= 768 && 
            <ul className="prestation__nav">
               <li className={view ==="vitrine" ? "prestation__nav--active" : undefined} onClick={() => {setView("vitrine")}}>Site vitrine</li>
               <li className={view ==="commerce" ? "prestation__nav--active" : undefined} onClick={() => {setView("commerce")}}>E-commerce</li>
               <li className={view ==="sur-mesure" ? "prestation__nav--active" : undefined} onClick={() => {setView("sur-mesure")}}>Site sur-mesure</li>
            </ul>}

         <div className="container">
            
           {width > 768 ? 
               <>
                  <Card_one/>
                  <Card_two/>
                  <Card_three/>
               </> :

               <>
                  

                  {view === "vitrine" ? <Card_one/> : view === "commerce" ? <Card_two/> : <Card_three/>}
               
               
               </>}
               <img src="/images/undraw_File_searching_re_3evy 1.svg" alt="Illustration d'une feuille avec des tasks"/>
      
         </div>
         <div id="contact"></div>
      </section>
   )
}

const Card_one = () => {
   return (
      <div className="prestation__card">
         <div className="prestation__cardTop">
            <h3>Site vitrine</h3>
            <p>Présentation de votre entreprise ou de vos produits</p>
         </div>
         <ul>
            <li>Intégration sur-mesure, responsive design</li>
            <li>Réfèrecement naturel (balise html, etc...)</li>
            <li>Déployement personnalisée</li>
         </ul>
      </div>
   )
}

const Card_two = () => {
   return (
      <div className="prestation__card">
         <div className="prestation__cardTop">
            <h3>E-commerce</h3>
            <p>Boutique en ligne où seront exposés vos produits destinés à la vente</p>
         </div>
         <ul>
            <li>Intégration sur-mesure, responsive design</li>
            <li>Authentification client et payement sécurisée</li>
            <li>Dashboard personnalisé, contenu personnalisable</li>
            <li>Fonctionnalité personnalisées</li>
            <li>Clean code, respect les bonnes pratiques, minimal</li>
            <li>Développement d’une API RestFull, lien entre le client et la base de donnée</li>
         </ul>
      </div>
   )
}

const Card_three = () => {
   return (
      <div className="prestation__card">
         <div className="prestation__cardTop">
            <h3>Site sur mesure</h3>
            <p>Site spécifique à vos besoins</p>
         </div>
         <ul>
            <li>Intégration sur-mesure, responsive design</li>
            <li>Authentification client et payement sécurisée</li>
            <li>Fonctionnalité personnalisées</li>
            <li>Clean code, respect les bonnes pratiques, minimal</li>
            <li>Optimisation des performances</li>
            <li>Maitenance du site</li>
         </ul>
      </div>
   )
}

export default Prestation