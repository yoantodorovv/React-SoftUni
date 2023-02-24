import "./App.css";
import MovieList from "./components/MovieList";

function App() {
    const movies= [
        { title: 'Man of Steel', year: 2015, cast: ['Henry Cavil', 'Russell Crowe']},
        { title: 'Harry Poter', year: 2015, cast: ['Daniel', 'Ema Watson']},
        { title: 'Lord of the Rings', year: 2015, cast: ['Orlando Bloom']}
    ];

    return (
        <div className="App">
            <MovieList movies={movies} />
        </div>
    );
}

export default App;
