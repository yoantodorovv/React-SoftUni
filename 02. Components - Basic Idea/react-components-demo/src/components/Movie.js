const Movie = (props) => {
    console.log(props.movie);

    return (
        <article>
            <h2>{props.movie.title}</h2>
            <p>{props.movie.year}</p>
            <ul>
                <li>{props.movie.cast[0]}</li>
                <li>{props.movie.cast[1]}</li>
            </ul>
        </article>
    );
}

export default Movie;