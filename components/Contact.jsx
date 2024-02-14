import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";

import Modale from './Modale';

const schema = yup.object().shape({
   firstname: yup.string().required(),
   lastname: yup.string().required(),
   email: yup.string().email().required(),
   subject: yup.string().required(),
   message: yup.string().required(),
 });

const Contact = () => {
   const [isLoading, setIsLoading] = useState(false);
   const [modale, setModale] = useState({ isOpen: false, success: true, message: null });

   const { register, handleSubmit, formState: { errors }, reset } = useForm({
      mode: "onTouched",
      resolver: yupResolver(schema)
   })


   const onSubmit = (data, e) => {
      setIsLoading(true);

      fetch(`${process.env.NEXT_PUBLIC_API}/mail`, {
         method: 'POST',
         headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
         },
         body: JSON.stringify({
            firstname : data.firstname, 
            lastname : data.lastname,
            email : data.email,
            subject : data.subject,
            message : data.message
         })
      })
      .then(response => {
         if (!response.ok) throw Error(response)
         if (response.status !== 204) return response.json()

         return response
      })
      .then(() => {
         setModale({ success: true, message : "Votre demande de contact à bien été envoyé.", isOpen: true });
         e.target.reset()
      }).catch(() => {
         setModale({ error: true, message: "Erreur serveur. Veuillez réessayer dans quelques minutes.", isOpen: true })
      }).finally(() => {
         setIsLoading(false)
      })
   }

   const handleModale = useCallback(() => {
      setModale({ isOpen: false, message : null })
   },[modale])

   const invalid = (input) => input ? 'invalid' : ''

   return (
      <section className="contact">
         <h2>Contact</h2>
         
         <p className="contact__intro">
            N’hésitez pas à me contacter ! Pour une demande de devis, 
            une question ou bien d’autres informations, 
            vous pouvez utiliser le formulaire ci-dessous.
         </p>
         
         <form className="contact__form" id="contact_form" onSubmit={handleSubmit(onSubmit)}>
            <label>
               <input
                  type="text"
                  name="firstname"
                  {...register('firstname')}
                  className={`contact__firstname ${invalid(errors?.firstname)}`}
                  placeholder="Prénom"
               />
            </label>

            <label>
               <input
                  type="text"
                  name="lastname"
                  {...register('lastname')}
                  className={`contact__lastname ${invalid(errors?.lastname)}`}
                  placeholder="Nom"
               />
            </label>

            <label>
               <input
                  type="email"
                  name="email"
                  {...register('email')}
                  className={`contact__email ${invalid(errors?.email)}`}
                  placeholder="Email"
               />
            </label>

            <label>
               <input
                  type="text"
                  name="subject"
                  {...register('subject')}
                  className={`contact__subject ${invalid(errors?.subject)}`}
                  placeholder="Sujet"
               />
            </label>

            <label>
               <textarea
                  name="message"
                  {...register('message')}
                  className={`contact__message ${invalid(errors?.message)}`}
                  placeholder="Message"
               />
            </label>

            <button disabled={isLoading} className="btn contact__btn">
               { isLoading ? <img src="/images/Dual_Ring-1s-40px.svg" alt="Spin" /> : "Envoyez" }
            </button>
         </form>

         { modale.isOpen && <Modale data={modale} handleModale={handleModale} /> }
      </section>
   )
}


export default Contact
