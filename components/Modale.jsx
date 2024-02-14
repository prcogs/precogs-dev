const Modale = ({ data, handleModale }) => {
   return (
      <div className="modale-container" onClick={() => {handleModale()}}>
         <div className="modale">
            <button onClick={() => {handleModale()}}>
               <i className="ri-close-line"></i>
            </button>

            { data.error && <i className="modale-icon--error ri-error-warning-line"/> }
            { data.success && <i className="modale-icon--success ri-checkbox-circle-line" /> }
            
            <p>{data.message}</p>
         </div>
      </div>
   )
}

export default Modale
