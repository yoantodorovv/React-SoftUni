import { useState } from 'react';
import movieData from '../movies';
import MovieList from './components/MovieList';

function App() {
    const [movies, setMovies] = useState(movieData);

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
