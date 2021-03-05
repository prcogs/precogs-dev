// import { yupResolver } from '@hookform/resolvers/dist/yup';
import { useForm } from "react-hook-form";

const Contact = () => {
   const { register, handleSubmit, errors } = useForm({
      mode: "onTouched",
      // resolver: yupResolver(schemaAuth)
  })

   return (
      <section className="contact" >
         <h2>Contact</h2>
         
         <p>N’hésitez pas à me contacter ! Pour une demande de devis, 
            une question ou bien d’autres information, 
            vous pouvez utilisés le formulaire ci-dessous.</p>
         
         <form className="contact__form">

            <label htmlFor="prenom"/>
            {/* <img src="/images/user-solid.svg" alt="Logo user"/> */}
            <input type="text" name="prenom" ref={register} className="contact__prenom" placeholder="Prénom"></input>

            <label htmlFor="nom"/>
            {/* <img src="/images/user-solid.svg" alt="Logo user"/> */}
            <input type="text" name="nom" ref={register} className="contact__nom" placeholder="Nom"></input><br/>

            <label htmlFor="email"/>
            {/* <img src="/images/at-solid.svg" alt="Logo email"/> */}
            <input type="email" name="email" ref={register} className="contact__email" placeholder="Email"></input><br/>

            <label htmlFor="sujet"/>
            {/* <img src="/images/comments-solid.svg" alt="Logo bulle message"/> */}
            <input type="text" name="sujet" ref={register} className="contact__sujet" placeholder="Sujet"></input><br/>

            <label htmlFor="message"/>
            {/* <img src="/images/envelope-solid.svg" alt="Logo enveloppe"/> */}
            <textarea type="text" name="message" ref={register} className="contact__message" placeholder="Message"></textarea><br/>

            <button className="btn contact__btn">Envoyez</button>
         </form>

      </section>
   )
}

export default Contact