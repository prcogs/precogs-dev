import { useState, useEffect, useRef } from "react";

const Infograph = ({ height, view, offset }) => {
   const [startAnim, setStartAnim] = useState("")
   const [viewGraph, setViewGraph] = useState(false)
   const infoGraph = useRef()

   useEffect(() => {
      if(offset > infoGraph.current?.offsetTop) {
         setStartAnim("startAnimationInfoGraph")
         setViewGraph(true)
      } 
   }, [offset, height, view]);

   return (
      <div className={"infograph__container " + startAnim} >
         <p>Ensemble nous pouvons développer vos idées ! Le schéma ci-dessous représente les différentes étapes qui constituera notre collaboration.</p>

         <div className="infograph" ref={infoGraph}>
            
            <div className="infograph__container">
            {viewGraph && <div className="midLine"></div>}  

            {viewGraph && <div className="line line1"></div>}  
            {viewGraph && <div className="round round1"></div>}  
            <div className="description description--1">
               <h3>Préparation du projet</h3>
               <p>J’étudie vos besoins et votre cahier des charges afin de les traduire en proposition de solutions techniques.</p>
               <img src="/images/idea-1873540_1.svg" alt="Illustration d'une ampoule" />
            </div>

            {viewGraph && <div className="line line2"></div>}  
            {viewGraph && <div className="round round2"></div>}  
            <div className="description description--2">
               <h3>Phase de devélopement</h3>
               <p>Je procède au développement technique du projet en fonction du cahier des charges.
                  <img src="/images/laptop-2298286_1.svg" alt="Illustration d'un bureau" />
               </p>
               
            </div>
            
            {viewGraph && <div className="line line3"></div>}  
            {viewGraph && <div className="round round3"></div>}  
            <div className="description description--3">
               <h3>Fin du projet</h3>
               <p>Mise en production, et hébergement de votre site. Je vous remets le code source qui deviendra votre propriété.</p>
            </div>

            {viewGraph && <div className="line line4"></div>}  
            {viewGraph && <div className="round round4"></div>}  
            <div className="description description--4">
               <h3>Maintenance</h3>
               <p>J’assurai la maintenance / support technique du site.</p>
            </div>

            {viewGraph && <div className="round round5"></div>}  
         </div>
         </div>

         <div id="portfolio"></div>
      </div>
   )
}

export default Infograph