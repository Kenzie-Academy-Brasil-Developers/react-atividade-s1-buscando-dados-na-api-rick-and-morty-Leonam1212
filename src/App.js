import './App.css';
import Characters from './components/Characters'
import {useState, useEffect} from "react"

function App() {
  
  const [isFlip, setIsFlip] = useState(false)
  const [characterList, setCharacterList] = useState([])
  
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
    .then((response) => response.json())
    .then((response) => setCharacterList(response.results))
    .catch((e) => console.log(e))
    
  },[])

  return (

    <div className="App">
      <Characters characterList={characterList}/>
    </div>
  );
}
export default App;
