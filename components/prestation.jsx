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
               <img src="/images/undraw_File_searching_re_3evy_1.svg" alt="Illustration d'une feuille avec des tasks"/>
      
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
            <li>Référencement naturel (balise html, etc...)</li>
            <li>Déploiement personnalisé</li>
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
            <li>Authentification client et paiement sécurisé</li>
            <li>Dashboard personnalisé, contenu personnalisable</li>
            <li>Fonctionnalités personnalisées</li>
            <li>Clean code, respect des bonnes pratiques</li>
            <li>Développement d’une API RestFull</li>
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
            <li>Authentification client et paiement sécurisée</li>
            <li>Fonctionnalités personnalisées</li>
            <li>Clean code, respect des bonnes pratiques</li>
            <li>Optimisation des performances</li>
            <li>Maintenance du site</li>
         </ul>
      </div>
   )
}

export default Prestation