const Keys = () => {
    return (
        <div className="keys">
            <div className="row">
                <div className="number">
                    <button className="key" onClick={() => btnHandler()}>7</button>
                    <button className="key" onClick={() => btnHandler()}>8</button>
                    <button className="key" onClick={() => btnHandler()}>9</button>
                </div>
                <div className="symbol">
                    <button className="key-special" onClick={() => btnHandler()}>÷</button>
                </div>
            </div>
            <div className="row">
                <div className="number">
                    <button className="key" onClick={() => btnHandler()}>4</button>
                    <button className="key" onClick={() => btnHandler()}>5</button>
                    <button className="key" onClick={() => btnHandler()}>6</button>
                </div>
                <div className="symbol">
                    <button className="key-special" onClick={() => btnHandler()}>-</button>
                </div>
            </div>
            <div className="row">
                <div className="number">
                    <button className="key" onClick={() => btnHandler()}>1</button>
                    <button className="key" onClick={() => btnHandler()}>2</button>
                    <button className="key" onClick={() => btnHandler()}>3</button>
                </div>
                <div className="symbol">
                    <button className="key-special" onClick={() => btnHandler()}>+</button>
                </div>
            </div>
            <div className="row">
                <div className="number">
                    <button className="key dull" onClick={() => btnHandler()}>AC</button>
                    <button className="key" onClick={() => btnHandler()}>0</button>
                    <button className="key" onClick={() => btnHandler()}>,</button>
                </div>
                <div className="symbol action">
                    <button className="key-vip" onClick={() => btnHandler()}>=</button>
                </div>
            </div>
        </div>
    );
}

export default Keys;