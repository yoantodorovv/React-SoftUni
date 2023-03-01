import TableHeader from "./TableHeader";
import Todo from "./Todo";

const TodoList = ({
    todoList,
    toggleTodoStatusHandler,
}) => {
    return (
        <table className="table">

            <TableHeader />

            <tbody>

                {todoList.map(todo => 
                    <Todo key={todo.id} todo={todo} toggleTodoStatusHandler={toggleTodoStatusHandler}/>)}

            </tbody>
        </table>
    );
}

export default TodoList;