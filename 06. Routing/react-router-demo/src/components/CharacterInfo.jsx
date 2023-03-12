import { useEffect, useState } from 'react'

import { useParams, useNavigate, Link, Routes, Route } from 'react-router-dom'
import CharacterFilms from './CharacterFilms';

import styles from './Navigation.module.css'

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

            <nav className={styles.nav}>
                <ul>
                    <li><Link to="films">Films</Link></li>
                    <li><Link to="vehicles">Vehicles</Link></li>
                    <li><Link to="starships">Starships</Link></li>
                </ul>
            </nav>

            <Routes>
                <Route path="films" element={<CharacterFilms />} />
                <Route path="vehicles" element={<h5>Vehicles</h5>} />
                <Route path="starships" element={<h5>Starships</h5>} />
            </Routes>
        </>
    )
}

export default CharacterInfo;