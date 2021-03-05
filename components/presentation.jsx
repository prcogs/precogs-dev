


const Presentation = () => {
   return (
      <section className="mid">
         <div className="mid__presentation">
            <img src="/images/business.png"/>
            <div className="container container--presentation">
               <p>Je m’appelle Florian, je suis développeur web Full-stask basé en Yvelines.<br/>
                  Après 4 années universitaires, je décide de changer de cursus afin de pouvoir pleinement m’épanouir. 
                  Je décide de suivre une formation de développeur web, puis de continuer de me former en autodidacte. 
                  Passionné par les techniques Web, je mets mes compétences à votre service pour répondre à vos besoins.
               </p>
            </div>
         </div>

         <div className="mid__competences">
            <div className="container container--competences">
               <p className="mid__title mid__title--competences">Mes compétences</p>
               <p>Mon expérience acquise au fil des projets me permet de mieux comprendre les attentes d'un client et de répondre précisément au besoin demandé en fonction du domaine d'activité.<br/>
                  Je propose un accompagnement personnalisé du début jusqu’à la fin de la conception du projet. 
                  Avec mes capacités d’analyse et vos idées, nous develepperons votre projet le plus efficacement possible.
               </p>
               <p>En savoirs plus</p>
            </div>
            <img src="/images/business.png" alt="Homme qui travaille sur une bureau"/>
         </div>

         <div className="mid__competencesPlus">
            <div className="graph">
               <div className="graph__line"></div>
               <div className="graph__pRond1"></div>
               <div className="graph__rond1"><img src="/images/file-signature-solid.svg" alt=""/></div>
               <div className="graph__rond2"><img src="/images/laptop-code-solid.svg" alt=""/></div>
               <div className="graph__rond3"><img src="/images/tasks-solid.svg" alt=""/></div>
               <div className="graph__pRond2"></div>
            </div>


            <div className="description">
               <h3>Préparation du projet</h3>
               <p>J’étudie vos besoins et votre cahier des charges afin de les traduire en proposition de solutions techniques.</p>

               <h3>Phase de devélopement</h3>
               <p>Je procède au développement technique du projet en fonction du cahier des charges.</p>

               <h3>Fin du projet</h3>
               <p>Mise en production, et hébergement de votre site. Je vous remets le code source qui deviendra votre propriété. J’assurai la maintenance / support technique du site.</p>
            </div>
         </div>

         <div className="mid__technos">
            <div className="logosTechnos">
               <div className="logosTechnos__JS"><img src="images/js_color.svg"/></div>
               <div className="logosTechnos__React"><img src="images/react_color.svg"/></div>
               <div className="logosTechnos__Redux"><img src="images/redux_color.svg"/></div>
               <div className="logosTechnos__Php"><img src="images/php_color.svg"/></div>
               <div className="logosTechnos__Sass"><img src="images/sass_color.svg"/></div>
               <div className="logosTechnos__NodeJS"><img src="images/nodeJS_color.svg"/></div>
            </div>
            <div className="container container--technos">
               <p className="mid__title mid__title--technos">Mes technos</p>
               <p>Mes compétences et connaissances des dernières technologies, me permettront de vous offrir un site ou une application performante, qui améliora l’expérience utilisateur et le référencement de votre site sur la toile.
                  Que ce soit côté front-end ou back-end, je recherche continuellement à me tenir à jour sur les nouveautés et pouvoir proposé les solutions les plus performantes.
               </p>
               <p>En savoirs plus</p>
            </div>
         </div>
         <div id="portfolio"></div>
      </section>
   )
}


export default Presentation