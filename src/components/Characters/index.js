import CharCard from "../CharCard"
import "./characters.css"
import {useState} from "react"
const Characters = ({characterList}) => {
   

const [selectedCharacterId, setSelectedCharacterId] = useState([]);
const handleFlip = (id) =>{
  setSelectedCharacterId([...selectedCharacterId, id])
}

return (
    <main>  
        <header className = "head-title">
            <h1>Rick and Morty Cards</h1>  
            <p>Cartas verdes indicam personagens vivos e cartas vermelhas indicam personagens mortos</p>  
        </header>
    <section>
        {
            characterList.map((character) => (
                <div className = "characterList" key = {character.id}>
                    <CharCard name = {character.name} 
                              img = {character.image} 
                              status = {character.status}
                              handleFlip = {() => handleFlip (character.id)}
                              giro = { selectedCharacterId.includes(character.id)}
                              />
                </div>
            ))
        }
    </section>
</main>

)

}


export default Characters;



