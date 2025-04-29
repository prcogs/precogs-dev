const skills = [
   {
      icons: ['vuejs', 'reactjs'],
      title: "Frontend Vuejs & ReactJS",
      text: "Mes compétences en VueJS & ReactJS me permettent de créer des interfaces clientes dynamiques et performante."
   },
   {
      icons: ['nodejs', 'strapi'],
      title: "Backend Nodejs & Strapi",
      text: "Je développe des applications backend performantes et adaptées aux besoins des utilisateurs. "
   },
   {
      icons: ['docker'],
      title: "Docker",
      text: "Développement et déployement des applications avec Docker."
   },
]

const Skills = () => {
   return (
      <section className="skills" id="skills">
         <h2>Mes compétences</h2>

         <div>
            { skills.map((skill, index) => {
               return <Skill skill={skill} key={index} />
            }) }
         </div>
      </section>
   )
}

const Skill = ({ skill }) => {
   const { icons, title, text } = skill

   return (
      <div className="skill">
         <div>
            { icons.map((icon, index) => {
               return (
                  <span key={index}>
                     { icon === 'vuejs' && <i className="ri-vuejs-fill" style={{ fontSize: "24px", color: "#061529", fontWeight: "400" }}></i> }
                     { icon === 'reactjs' && <i className="ri-reactjs-line" style={{ fontSize: "24px", color: "#061529", fontWeight: "400" }}></i> }
                     { icon === 'nodejs' && <i className="ri-nodejs-line" style={{ fontSize: "24px", color: "#061529", fontWeight: "400" }}></i> }
                     { icon === 'strapi' && <img src="/images/stacks/strapi.svg" style={{ height: "24px", height: "24px", color: "#061529", fontWeight: "400" }} /> }
                     { icon === 'docker' && <img src="/images/stacks/docker.svg" style={{ height: "24px", height: "24px", color: "#061529", fontWeight: "400" }} /> }
                  </span>
               )
            }) }
         </div>

         <h3>{ title }</h3>

         <p>{ text }</p>
      </div>
   )
}

export default Skills
