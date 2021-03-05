

const SectionTop = () => {
   const numberLine = 35

   var table = []
   for (var i = 0; i < numberLine; i++) {
      table = [...table, i]
   }

   return (
      <section className="sectionTop" id="top">

         <div className="sectionTop__container">
            <div className="sectionTop__containerTexte">
               <h1>Florian Fort<br/> Devellopeur Full-stack Freelance</h1>
               <p>Je développe des plateformes, sites web, applications web pour des sartups et des indépendants.</p>
               <button className="btn"><a href="#contact">Contactez-moi</a></button>
               <button className="btn">
                  <a target="_blank" href="https://stackoverflow.com/">
                     <img src="/images/malt_color.svg" alt="Logo malt"/>
                  </a>
               </button>
            </div>
            <img src="/images/undraw_real-time_sync_o57k 1.svg" alt="Illustatrion d'un téléphone mobile, d'une tablette et d'un ordinateur."/>
         </div>

         <div className="sectionTop__background">
            { table.map( i => {
               return <div className={"sectionTop__line sectionTop__line--" + i} key={i}></div>
            })}
         </div>
      </section>
   )
}

export default SectionTop