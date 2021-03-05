import { useEffect, useState } from "react";



const Header = ({ position, height }) => {
   const [offset, setOffset] = useState(0);
   const [classHeader, setClassHeader] = useState("top");
   const [active, setActive] = useState("accueil")

   const tierScreen = (1/3 * height)

   useEffect(() => {
      window.onscroll = () => {
         setOffset(window.pageYOffset)
      }

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

//   console.log(offset, tierScreen)


   return (
      <header className={"header--" + classHeader} >
         <ul>
            <a href="#"><li className={active === "accueil" ? "active" : ""}>Accueil</li></a>
            <a href="#portfolio"> <li className={active === "portfolio" ? "active" : ""}>Portfolio</li></a>
            <a href="#prestation"><li className={active === "prestation" ? "active" : ""}>Prestations</li></a>
            <a href="#contact"> <li className={active === "contact" ? "active" : ""}>Contact</li></a>
         </ul>
      </header>
   )
}

export default Header