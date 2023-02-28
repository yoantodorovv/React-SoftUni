import Movie from "./Movie";

const MovieList = ({ movies, onMovieDelete, onMovieSelect }) => {
    const movieElements = movies.map((movie, i) => {
        movie.id = i;
        
        return (
            <li key={movie.id}>
                <Movie {...movie} id={movie.id} onMovieDelete={onMovieDelete} onMovieSelect={onMovieSelect} />
            </li>
        )
    });

    return (
        <ul>
            {movieElements}
        </ul>
    );
};
export default MovieList;