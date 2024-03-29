import Link from 'next/link'

const Footer = () => {

   return (
      <footer>
         <div className="reseaux">
            <strong title="Linkedin - Florian Fort"> 
                  <a target="_blank" href="https://linkedin.com/in/florian-fort-9537421b9">
                     <img src="/images/linkedin_color.svg"   alt="Logo linkedin"/>
                  </a> 
            </strong>

            <strong title="GitHub - Prcogs"> 
                  <a target="_blank" href="https://github.com/prcogs">
                     <img src="/images/github_color.svg"     alt="Logo github"/>
                  </a> 
            </strong>

            <strong title="Gmail - prcogs.contact@gmail.com" onClick={() => {copyEmail()}}> 
                  <img src="/images/google_color.svg"     alt="Logo google" />
            </strong>

            <strong title="Malt - Florian Fort"> 
                  <a target="_blank" href="https://www.malt.fr/profile/florianfort">
                     <img src="/images/malt_picto_color.svg" alt="Logo malt" />
                  </a> 
            </strong>
         </div>

         <p>{new Date().getFullYear()} © Florian Fort - Yvelines, FRANCE <br/>
         {/* - SIRET <br/>
                        n°79439712500012<br/> */}
            <i><Link href="/mentions_legales">Mentions légales</Link> </i>
             {/* - <i>Conditions générales de vente</i> */}
         </p>

      </footer>
   )
}


const copyEmail = () => {
   navigator.clipboard.writeText("prcogs.contact@gmail.com")
   alert("Email (prcogs.contact@gmail.com) copier dans le presse-papier.")   
}

export default Footer