const Todo = ({
    todo,
    toggleTodoStatusHandler,
}) => {
    return (
        <tr className={`todo ${todo.isCompleted ? 'is-completed' : ''}`.trim()}>
            <td>{todo.text}</td>
            <td>{todo.isCompleted ? 'Completed' : 'InComplete'}</td>
            <td className="todo-action">
                <button className="btn todo-btn" onClick={() => toggleTodoStatusHandler(todo._id)} >Change status</button>
            </td>
        </tr>
    );
}

export default Todo;