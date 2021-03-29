import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";

import config from '../lib/config.json';
import Modal from './modal';

const schema = yup.object().shape({
   prenom: yup.string().required(),
   nom: yup.string().required(),
   email: yup.string().email().required(),
   sujet: yup.string().required(),
   message: yup.string().required(),
 });

const Contact = () => {
   const [error, setError] = useState(null);
   const [isLoading, setIsLoading] = useState(false);
   const [resp, setResp] = useState([]);
   const [modal, setModal] = useState(false)

   const { register, handleSubmit, errors, reset } = useForm({
      mode: "onTouched",
      resolver: yupResolver(schema)
   })


   const onSubmit = (data, e) => {
      setIsLoading(true);
      fetch(`${config.domaine}/contact`, {
                                       method: 'POST',
                                       headers: {
                                          'Accept': 'application/json',
                                          'Content-Type': 'application/json'
                                          },
                                       body: JSON.stringify({
                                                      nom : data.nom, 
                                                      prenom : data.prenom,
                                                      email : data.email,
                                                      sujet : data.sujet,
                                                      message : data.message})
                                    })
      .then(res => res.json())
      .then(
         (result) => {
         setResp(JSON.parse(result));
         setIsLoading(false)
         setModal(true)
         
         if(resp.check === true) {
            e.target.reset()
         }

         },
         (error) => {
         setError(error);
         setIsLoading(false)
         setModal(true)
         setResp({"check":false, "msg" : "Erreur serveur. Veuillez réessayer dans quelques minutes."})
         // console.log('Erreur de connexion : ', error)
         }
      )
   }

   const changeView = useCallback(() => {
      setModal(false)
   },[modal])


   return (
      <section className="contact">
         <h2>Contact</h2>
         
         <p className="contact__intro">N’hésitez pas à me contacter ! Pour une demande de devis, 
            une question ou bien d’autres information, 
            vous pouvez utilisés le formulaire ci-dessous.</p>
         
         <form className="contact__form" id="contact_form" onSubmit={handleSubmit(onSubmit)}>

            <label htmlFor="prenom"/>
            {/* <img src="/images/user-solid.svg" alt="Logo user"/> */}
            <input type="text" name="prenom" ref={register} className={`contact__prenom  ${errors.prenom ? "invalid" : ""}`} placeholder="Prénom"></input>
            {/* {errors.prenom && <span className="inputErrors">{errors.prenom.message}</span>} */}

            <label htmlFor="nom"/>
            {/* <img src="/images/user-solid.svg" alt="Logo user"/> */}
            <input type="text" name="nom" ref={register} className={`contact__nom  ${errors.nom ? "invalid" : ""}`} placeholder="Nom"></input><br/>

            <label htmlFor="email"/>
            {/* <img src="/images/at-solid.svg" alt="Logo email"/> */}
            <input type="email" name="email" ref={register} className={`contact__email  ${errors.email ? "invalid" : ""}`} placeholder="Email"></input><br/>

            <label htmlFor="sujet"/>
            {/* <img src="/images/comments-solid.svg" alt="Logo bulle message"/> */}
            <input type="text" name="sujet" ref={register} className={`contact__sujet  ${errors.sujet ? "invalid" : ""}`} placeholder="Sujet"></input><br/>

            <label htmlFor="message"/>
            {/* <img src="/images/envelope-solid.svg" alt="Logo enveloppe"/> */}
            <textarea type="text" name="message" ref={register} className={`contact__message  ${errors.message ? "invalid" : ""}`} placeholder="Message"></textarea><br/>

            <button disabled={isLoading ? true : false} className="btn contact__btn">{isLoading ? <img src="/images/Dual Ring-1s-40px.svg"/> : "Envoyez" }</button>
         </form>

         {modal && <Modal resp={resp} changeView={changeView}/>}
      </section>
   )
}


export default Contact