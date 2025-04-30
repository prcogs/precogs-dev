import Link from 'next/link'

const Project = ({ project }) => {
   const { img, dev, description, stack, link } = project

   return (
      <>
         { project.link
            ? <Link href={`/projects/${project.link}`} className="project"><Content project={project} /></Link>
            : <div className="project"><Content project={project}/></div>
         }
      </>
   )
}

const Content = ({ project }) => {
   const { img, dev, description, stack, link } = project

   return (
      <>
         <img src={`/images/${img}`} alt="Screen page d'accueil du projet"/>

         <div className="project-container">
            <p>{ dev }</p>

            <p>{ description }</p>

            <ul>
               { stack.map((item, i) => {
                  return (
                     <li key={i}>
                        <span>
                           <img src={`/images/stacks/${item[1]}.svg`} alt={item[1]}  height="36" />
                        </span>

                        { item[0] }
                     </li>
                  )
               }) }
            </ul>
         </div>
      </>
   )
}

export default Project
