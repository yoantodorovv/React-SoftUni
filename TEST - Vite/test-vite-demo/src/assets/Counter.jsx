import { useState } from 'react';

const Counter = (props) => {
    const [count, setCount] = useState(props.count);

    return (
        <div>
            <h2>Timer: <span style={{color: count >= 0 ? 'green' : 'red'}}>{count}</span></h2>
            <button onClick={() => {setCount(state => state - 1)}}>-</button>
            <button onClick={() => {setCount(0)}}>Clear</button>
            <button onClick={() => {setCount(state => state + 1)}}>+</button>
        </div>
    );
}

export default Counter;