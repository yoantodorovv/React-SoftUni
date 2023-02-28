import { useEffect } from "react";
import styles from './Movie.module.css';

const Movie = ({
    id,
    selected,
    title,
    year,
    plot,
    poster,
    director,
    onMovieDelete,
    onMovieSelect,
}) => {
    useEffect(() => {
        console.log(`Movie ${title} - mounted!`);

        return () => {
            console.log(`Movie ${title} - unmounted!`);
        }
    }, []);

    useEffect(() => {
        console.log(`Movie ${title} - updated!`);
    }, [selected]);

    return (
        <article className={styles['movie-article']}>
            <h3>{title}, {year}</h3>
            {selected && <h4>Selected</h4>}
            <main>
                <img src={poster} alt={title} />
                <p>{plot}</p>
            </main>
            <footer>
                <p>{director}</p>
                <button onClick={() => onMovieDelete(id)}>Delete</button>
                <button onClick={() => onMovieSelect(id)}>Select</button>
            </footer>
        </article>
    );
}

export default Movie;