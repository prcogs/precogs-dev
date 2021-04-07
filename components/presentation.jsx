import { useState } from "react"
import Infograph from "./infograph"


const Presentation = ({ changeView, view, height, offset }) => {
   const [classExit, setClassExit] = useState("")

   const exit = () => {
      if(view) {
         setClassExit("wrapperStacks--close")

         const timerExit = setTimeout(() => {
            setClassExit("")
         }, 800)

         return () => {clearTimeout(timerExit)}
      }
   }


   return (
      <section className="mid">
         <div className="mid__presentation">
            <img src="/images/photo-de-profil-florian.jpg" alt="Photo de profil"/> 
            <div className="container container--presentation">
               <p>Je m’appelle Florian, je suis développeur web Full-stack basé dans les Yvelines.<br/>
                  Après 4 années universitaires, je décide de changer de cursus afin de pouvoir pleinement m’épanouir. 
                  Je décide donc de suivre une formation de développeur web, puis de continuer de me former en autodidacte. 
                  Passionné par les techniques Web, je mets mes compétences à votre service pour répondre à vos besoins.
               </p>
            </div>
         </div>

         <div className="mid__competences">
            <div className="container container--competences">
               <p className="mid__title mid__title--competences">Mes compétences</p>
               <p>Mes expériences acquises au fil des projets me permet de mieux comprendre les attentes d'un client et de répondre précisément au besoin demandé en fonction du domaine d'activité.<br/>
                  Je propose un accompagnement personnalisé du début jusqu’à la fin de la conception du projet. 
                  Avec mes capacités d’analyse et vos idées, nous développerons votre projet le plus efficacement possible.
               </p>
               {/* <p>En savoirs plus</p> */}
            </div>
            <img src="/images/business-5840872_640_1.svg" alt="Illustration d'un homme qui travaille dans un bureau."/>
         </div>

        

         <div className="mid__technos">
            <div className="logosTechnos">
               <div className="logosTechnos__JS"><img src="images/js_color.svg" alt="Logo JavaScript"/></div>
               <div className="logosTechnos__React"><img src="images/react_color.svg" alt="Logo React"/></div>
               <div className="logosTechnos__Redux"><img src="images/redux_color.svg" alt="Logo Redux"/></div>
               <div className="logosTechnos__Php"><img src="images/php_color.svg" alt="Logo PHP"/></div>
               <div className="logosTechnos__Sass"><img src="images/sass_color.svg" alt="Logo Sass"/></div>
               <div className="logosTechnos__NodeJS"><img src="images/nodeJS_color.svg" alt="Logo NodeJS"/></div>
            </div>
            <div className="container container--technos">
               <p className="mid__title mid__title--technos">Mes stacks techniques</p>
               <p>Mes compétences et connaissances des dernières technologies me permettront de vous offrir un site ou une application performante, qui améliora l’expérience utilisateur et le référencement de votre site sur la toile.
                  Que ce soit côté front-end ou back-end, je recherche continuellement à me tenir à jour sur les nouveautés et pouvoir proposer les solutions les plus performantes.
               </p>
               {!view && <p onClick={() => {changeView()}}>En savoirs plus</p>}
            </div>
         </div>

         {view && <div className={"wrapperStacks " + classExit}>
            <div className="wrapperStacks__wrapper">
            <div className="wrapperStacks__container wrapperStacks__container--front">
               <p className="title">Front-end</p>
               <p className="wrapperStacks__card">Javascript</p>
               <div>
                  <p className="wrapperStacks__card">React</p>
                  <p className="wrapperStacks__card">Redux</p>
               </div>
               <p className="wrapperStacks__card">NextJS</p>

            </div>

            <div className="wrapperStacks__container wrapperStacks__container--back">
               <p className="title">Back-end</p>
               <p className="wrapperStacks__card">PHP</p>
               <div>
                  <p className="wrapperStacks__card">Slim 4</p>
                  <p className="wrapperStacks__card">Symfony</p>
               </div>
               
               <div>
                  <p className="wrapperStacks__card">NodeJS</p>
                  <p className="wrapperStacks__card">Express</p>
               </div>
               
            </div>

            <div className="wrapperStacks__container wrapperStacks__container--style">
               <p className="title">Style</p>
               <div>
                  <p className="wrapperStacks__card">CSS</p>
                  <p className="wrapperStacks__card">SASS</p>
               </div>
               <p className="wrapperStacks__card">Responsive Design</p>
               <p className="wrapperStacks__card">Animation CSS</p>
            </div>

            
            <div className="wrapperStacks__wrapperDB-CMS">
               <div className="wrapperStacks__container wrapperStacks__container--db">
                  <p className="title">Data Base</p>
                  <div className="wrapperStacks__card__wrapper">
                     <p className="wrapperStacks__card">MySql</p>
                     <p className="wrapperStacks__card">MongoDB</p>
                  </div>
               </div>

               <div className="wrapperStacks__container wrapperStacks__container--cms">
                  <p className="title">CMS</p>
                  <div className="wrapperStacks__card__wrapper">
                     <p className="wrapperStacks__card">Wordpress</p>
                     <p className="wrapperStacks__card">Shopify</p>
                  </div>
               </div>
            </div>
            <img className="wrapperStacks__exit" src="images/times-solid_1.svg" alt="Croix" onClick={() => {exit();changeView();}}/>
            </div>
         </div>}

         <Infograph height={height} 
                    view={view}
                    offset={offset}/>
                    
      </section>
   )
}


export default Presentation