const Modale = ({ data, handleModale }) => {
   return (
      <div className="modale-container" onClick={() => {handleModale()}}>
         <div className="modale">
            <button onClick={() => {handleModale()}}>
               <i class="ri-close-line"></i>
            </button>

            { data.error && <i class="modale-icon--error ri-error-warning-line"/> }
            { data.success && <i class="modale-icon--success ri-checkbox-circle-line" /> }
            
            <p>{data.message}</p>
         </div>
      </div>
   )
}

export default Modale
