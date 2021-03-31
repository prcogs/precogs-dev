import Carousel from 'react-elastic-carousel'
import CardProject from "./cardProject"

import projects from '../lib/data_portfolio.json'
import { useState, useLayoutEffect, useEffect, useRef } from 'react'


const Portfolio = () => {
   const [width, height] = useWindowSize();
   const [numberItems, setNumberItems] = useState(1)

   useEffect(() => {
      if (width > 1260) {
         setNumberItems(3)
      } else if (width > 860 && width < 1260) {
         setNumberItems(2)
      } else {
         setNumberItems(1)
      }
   },[width])


   return (
      <section className="portfolio" > 
            <h2>Portfolio</h2>
            <div className="portfolio__cards">
               <Carousel itemsToShow={numberItems} showArrows={false} itemsToScroll={1}>
                  {projects.map((project, i) => {
                     return (
                           <CardProject key={i} 
                                       img={project.img}
                                       dev={project.dev}
                                       little_descr={project.little_descr}
                                       stack={project.stack}/>
                     )
                  })}
               </Carousel>
            </div>
         <div id="prestation"></div>
      </section>
   )
}

function useWindowSize() {
   const [size, setSize] = useState([0, 0]);
   useLayoutEffect(() => {
     function updateSize() {
       setSize([window.innerWidth, window.innerHeight]);
     }
     window.addEventListener('resize', updateSize);
     updateSize();
     return () => window.removeEventListener('resize', updateSize);
   }, []);
   return size;
}


export default Portfolio
