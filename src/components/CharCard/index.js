import "./charcard.css"
import Flip from "../Flip/flip"
const CharCard = ({name, img, status, handleFlip, giro, id}) => {

const isAlive = {
        background: "#1d8a61", 
}
const isDeadOrUndefined = {
        background: "#e2aebe",   
}

return ( 
    <div  onClick = {() => handleFlip(id)} className= {giro ? "card flip" : "card" } >

        <div id = "front" className = "charCard" style = { {background : status === "Alive" ? isAlive.background : isDeadOrUndefined.background}}>
                <h2>{name}</h2>
                <img src = {img} alt = {name}/>
        </div>

        <div id = "back" className = "charCard">
                Clique para girar
        </div>
    </div>
    
    )
    
}

export default CharCard








