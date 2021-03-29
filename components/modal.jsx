

const Modal = ({ resp, changeView }) => {
   
   return (
      <div className="modal__container" onClick={() => {changeView()}}>
         <div className={`modal ${resp.check ? "modal--succes" : "modal--failed"}`}>
            <p>{resp.msg}</p>
            <button className="btn--alert" onClick={() => {changeView()}}>Fermer</button>
         </div>
      </div>
   )
}

export default Modal