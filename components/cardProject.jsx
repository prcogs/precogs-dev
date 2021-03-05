

const CardProject = ({ img, dev, little_descr, stack}) => {
    return (
        <div className="cardProject">
            <img src={`/images/${img}.png`}/>
            <div className="container">
                <p>{dev}</p>
                <p>{little_descr}</p>
                <ul>
                    {stack.map((item, i) => {
                        return (
                            <li key={i}><div className="imgContainer"><img src={`/images/${item[1]}.svg`}/></div> {item[0]}</li>
                        )
                    })}
                </ul>
                <button>Plus d'infos</button>
            </div>
        </div>
    )
}


export default CardProject