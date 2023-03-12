import { useEffect, useState } from "react"; 
import Character from "./Character";

const baseUrl = 'https://swapi.dev/api/people';

const CharacterList = () => {
    let [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch(baseUrl)
            .then(res => res.json())
            .then(data => setCharacters(data.results))
    }, []);
    
    characters = characters.map(x => ({...x, id: x.url.split('/')[5]}));

    return (
        <div>
            <h1>Star Wars Characters</h1>
            <ul>
                {characters.map(x => <Character key={x.id} character={x} />)}
            </ul>
        </div>
    );
}

export default CharacterList;