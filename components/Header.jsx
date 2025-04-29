import { useEffect, useState } from "react";


function goTo(name) {
   const elm = document.querySelector(name)

   console.log(elm)

   if (!elm) return;

   window.scrollTo({ top: elm.getBoundingClientRect().top + window.scrollY - 100, behavior: 'smooth' });
}

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
      if(offset > (position.posSkills - tierScreen) && offset < (position.posPortfolio - tierScreen)) {
         setActive("skills")
      } else if (offset > (position.posPortfolio - tierScreen) && offset < (position.posContact - tierScreen)) {
         setActive("portfolio")
      } else if (offset > position.posContact - tierScreen) {
         setActive("contact")
      } else {
         setActive("accueil")
      }
   },[offset])


   return (
      <header className={"header--" + classHeader}>
         <ul>
            <li className={active === "accueil" ? "active" : ""} onClick={() => goTo('#home')}>
               Accueil
            </li>

            <li className={active === "skills" ? "active" : ""} onClick={() => goTo('#skills')}>
               Compétences
            </li>

            <li className={active === "portfolio" ? "active" : ""} onClick={() => goTo('#portfolio')}>
               Portfolio
            </li>

            <li className={active === "contact" ? "active" : ""} onClick={() => goTo('#contact')}>
               Contact
            </li>
         </ul>
      </header>
   )
}

export default Header
