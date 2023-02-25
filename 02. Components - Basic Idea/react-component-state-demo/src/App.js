import './App.css';
import Timer from './components/Timer';

function App() {
  return (
     <div className="App">
        <h1>State Demo</h1>

        <Timer start={50} />
        <Timer start={0} />
        <Timer start={150} />
     </div>
  );
}

export default App;
