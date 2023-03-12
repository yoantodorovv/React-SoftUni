import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'

const baseUrl = 'https://swapi.dev/api';

const CharacterFilms = () => {
    const [films, setFilms] = useState([]);
    const { id } = useParams();

    // fetch something like /people/${id}/films from swapi. but there is no such thing
    useEffect(() => {
        fetch(`${baseUrl}/films`)
            .then(res => res.json())
            .then(data => {
                setFilms(data.results)
            })
    }, [id]);

    return (
        <>
            <h1>Films</h1>

            {films.map(x => {
                const id = x.url.split('/')[5];

                return <li key={id}><Link to={`/films/${id}`}>{x.title}</Link></li>
            })}
        </>
    );
}

export default CharacterFilms;