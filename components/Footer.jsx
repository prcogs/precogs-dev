import Link from 'next/link'

const Footer = () => {
   return (
      <footer>
         <div className="footer-social">
            <a ittle="Linkedin - Florian Fort" target="_blank" href="https://linkedin.com/in/florian-fort-9537421b9">
               <img src="/images/social/linkedin_color.svg" alt="Logo linkedin"/>
            </a> 

            <a title="GitHub - Prcogs" target="_blank" href="https://github.com/prcogs">
               <img src="/images/social/github_color.svg" alt="Logo github"/>
            </a> 

            <button title="contact@florianfort-dev.fr" onClick={() => { copyEmail() }}> 
               <img src="/images/social/email.svg" alt="Logo email" />
            </button>

            <a title="Malt - Florian Fort" target="_blank" href="https://www.malt.fr/profile/florianfort">
               <img src="/images/social/malt_picto_color.svg" alt="Logo malt" />
            </a> 
         </div>

         <p>
            { new Date().getFullYear() } © Florian Fort - Yvelines, FRANCE<br/>

            <Link href="/mentions-legales">Mentions légales</Link>
         </p>
      </footer>
   )
}


const copyEmail = () => {
   navigator.clipboard.writeText("contact@florianfort-dev.fr")

   alert("Email (contact@florianfort-dev.fr) copier dans le presse-papier.")   
}

export default Footer
