import { useEffect, useState } from 'react';
import MovieList from './components/MovieList';

function App() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5173/movies.json`)
            .then(res => res.json())
            .then(moviesData => {
                setMovies(moviesData);
            });
    }, []);

    const onMovieDelete = (id) => {
        setMovies(state => state.filter(x => x.id !== id));
    }

    const onMovieSelect = (id) => {
        setMovies(state => state.map(x => ({...x, selected: x.id === id})))
    }

    return (
        <div className="App">
            <h1>Movie List</h1>

            <MovieList movies={movies} onMovieDelete={onMovieDelete} onMovieSelect={onMovieSelect} />
        </div>
    )
}

export default App
