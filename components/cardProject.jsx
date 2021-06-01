

const CardProject = ({ img, dev, little_descr, stack, url}) => {
    return (
        <div className="cardProject">
            <img src={`/images/${img}.jpg`} alt="Screen page d'accueil du projet"/>
            <div className="container">
                <p>{dev}</p>
                <p>{little_descr}</p>
                <ul>
                    {stack.map((item, i) => {
                        return (
                            <li key={i}><div className="imgContainer"><img src={`/images/${item[1]}.svg`} alt="Logo de la techno"/></div> {item[0]}</li>
                        )
                    })}
                </ul>
                {/* <button>Plus d'infos</button> */}
                <a href={`${url}`} target="_blank">Voir le site</a>
            </div>
        </div>
    )
}


export default CardProject