import { useState } from 'react'

const getTitle = (count) => {
    switch (count) {
        case 1: 
            return 'First Blood';
        case 2: 
            return 'Double Kill';
        case 3: 
            return 'Triple Kill';
        case 4: 
            return 'Multi Kill';
        case 5: 
            return 'Unstoppable';
        default:
            return 'Counter';
    }
};

const Counter = (props) => {
    const [counter, setCounter] = useState(0);

    const incrementCounterHandler = () => {
        setCounter(state => state + 1);
    }

    const decrementCounterHandler = () => {
        setCounter(state => state - 1);
    }

    const clearCounterHandler = () => {
        setCounter(0);
    }

    return (
        <div>
            <h3 style={{color: counter > 0 ? 'green' : 'red'}}>{counter <= 5 ? getTitle(counter) : 'Godlike'}: {counter}</h3>
            {
                counter > -10
                ? <button onClick={decrementCounterHandler}>-</button>
                : <button onClick={decrementCounterHandler} disabled>-</button>
            }
            {props.isResetable && <button onClick={clearCounterHandler}>Clear</button>}
            {
                counter < 10
                ? <button onClick={incrementCounterHandler}>+</button>
                : <button onClick={incrementCounterHandler} disabled>+</button>
            }
        </div>
    );
}

export default Counter;