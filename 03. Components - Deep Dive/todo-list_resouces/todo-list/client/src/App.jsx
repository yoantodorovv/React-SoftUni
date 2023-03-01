import { useEffect, useState } from 'react';

import Footer from "./assets/Footer";
import Header from "./assets/Header";
import Loader from "./assets/Loader";
import TodoList from "./assets/TodoList";

function App() {
    const [todoList, setTodoList] = useState([]);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:3030/jsonstore/todos`)
            .then(res => res.json())
            .then(data => {
                const result = Object.keys(data).map(id => ({id: id, ...data[id]}));
                setTodoList(result);
                setIsMounted(true);
            })
    }, []);

    const toggleTodoStatusHandler = (id) => {
        setTodoList(state => state.map(x => x._id === id ? ({...x, isCompleted: !x.isCompleted}) : x));
    }

    const addTodoHandler = () => {
        const prevId = Number(todoList[todoList.length - 1]._id.substring(5));
        const text = prompt('Todo text:');
        setTodoList(state => [{_id: `todo_${prevId + 1}`, text: text, isCompleted: false}, ...state])
    }

    return (
        <div className="App">

            <Header />

            <main className="main">

                <section className="todo-list-container">
                    <h1>Todo List</h1>

                    <div className="add-btn-container">
                        <button className="btn" onClick={() => addTodoHandler()}>+ Add new Todo</button>
                    </div>

                    <div className="table-wrapper">

                        {
                            isMounted
                            ? <TodoList todoList={todoList} toggleTodoStatusHandler={toggleTodoStatusHandler} />
                            : <Loader />
                        }

                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}

export default App;
