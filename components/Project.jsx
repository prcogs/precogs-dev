import Link from 'next/link'

const Project = ({ project }) => {
   const { img, dev, description, stack, link } = project

   return (
      <Link href={`/projects/${link}`} className="project">
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
      </Link>
   )
}

export default Project
