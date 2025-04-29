import Project from "./Project"

import projects from '../data/data-portfolio.json'

const Portfolio = () => {
   return (
      <section className="portfolio" id="portfolio"> 
         <h2>Portfolio</h2>

         <div className="portfolio-projects">
            { projects.map((project, i) => <Project key={i} project={project} />) }
         </div>
      </section>
   )
}

export default Portfolio
