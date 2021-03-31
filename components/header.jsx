import { useEffect, useState } from "react";



const Header = ({ position, height, offset }) => {
   const [classHeader, setClassHeader] = useState("top");
   const [active, setActive] = useState("accueil")

   const tierScreen = (1/3 * height)

   useEffect(() => {
      if(offset > 60) {
         setClassHeader("scroll slideDown")
      } else {
         setClassHeader("top")
      }
   }, [offset]);


  useEffect(() => {
   if(offset > (position.posPortfolio - tierScreen) && offset < (position.posPrestation - tierScreen)) {
      setActive("portfolio")
   } else if (offset > (position.posPrestation - tierScreen) && offset < (position.posContact - tierScreen)) {
      setActive("prestation")
   } else if (offset > position.posContact - tierScreen) {
      setActive("contact")
   } else {
      setActive("accueil")
   }

  },[offset])


   return (
      <header className={"header--" + classHeader} >
         <ul>
            <li className={active === "accueil" ? "active" : ""}><a href="#">Accueil</a></li>
            <li className={active === "portfolio" ? "active" : ""}><a href="#portfolio"> Portfolio</a></li>
            <li className={active === "prestation" ? "active" : ""}><a href="#prestation">Prestations</a></li>
            <li className={active === "contact" ? "active" : ""}><a href="#contact"> Contact</a></li>
         </ul>
      </header>
   )
}

export default Header