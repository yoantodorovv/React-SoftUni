import { useState } from 'react'
import Counter from './assets/Counter';

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className="App">
            <Counter count={0} />
        </div>
    )
}

export default App;
