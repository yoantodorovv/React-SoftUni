import Movie from './Movie';

const MovieList = (props) => {
    return (
        <div>
            <h1>Movie List</h1>
            <Movie
                movie={props.movies[0]}
            />
            <Movie 
                movie={props.movies[1]}
            />
            <Movie 
                movie={props.movies[2]}
            />
        </div>
    );
};

export default MovieList;