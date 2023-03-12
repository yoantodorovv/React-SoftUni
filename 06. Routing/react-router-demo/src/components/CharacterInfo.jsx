import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const baseUrl = 'https://swapi.dev/api/people';

const CharacterInfo = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        fetch(`${baseUrl}/${id}`)
            .then(res => res.json())
            .then(data => setCharacter(data))
    }, [id]);

    // Redirect
    const onHomeBtnClick = () => {
        navigate('/');
    }

    // Go back
    const onBackBtnClick = () => {
        navigate(-1);
    }

    return (
        <>
            <h1>Character Page</h1>
            <h2>{character.name}</h2>
            <button onClick={onHomeBtnClick}>Home</button>
            <button onClick={onBackBtnClick}>Back</button>
        </>
    )
}

export default CharacterInfo;