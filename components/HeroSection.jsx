const HeroSection = () => {
   var table = []
   for (var i = 0; i < 35; i++) {
      table = [...table, i]
   }

   return (
      <section className="sectionTop" id="home">
         <div className="sectionTop__container">
            <div className="sectionTop__containerTexte">
               <h1>Florian Fort<br/> Développeur Frontend</h1>

               <p>Je développe des plateformes, sites web, applications web pour des startups et des indépendants.</p>

               <a className="btn" href="#contact">Contactez-moi</a>

               <a className="btn" target="_blank" href="https://www.malt.fr/profile/florianfort">
                  <img src="/images/social/malt_color.svg" alt="Logo malt"/>
               </a>
               
            </div>
            
            <img src="/images/others/undraw_real-time_sync_o57k_1.svg" alt="Illustration d'un téléphone mobile, d'une tablette et d'un ordinateur."/>
         </div>

         <div className="sectionTop__background">
            { table.map( i => {
               return <div className={"sectionTop__line sectionTop__line--" + i} key={i} />
            }) }
         </div>
      </section>
   )
}

export default HeroSection
