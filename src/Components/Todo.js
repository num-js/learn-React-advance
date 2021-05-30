import { useState } from 'react';
import { addTodo, deleteTodo, deleteTodoAll } from '../Redux/actions/todoAction';
import { useDispatch, useSelector } from 'react-redux';
// import todoReducer from '../Redux/reducers/todoReducer';

const Todo = () => {
    const [todoText, setTodoText] = useState('');

    const allTodos = useSelector(state => state.todoReducer.allTodos);

    const dispatch = useDispatch();

    const saveTodo = (event) => {
        event.preventDefault();
        dispatch(addTodo(todoText));
    }

    return (
        <>
            <div align="center">
                <h1>Todo</h1>
                <hr />
                <form onSubmit={saveTodo}>
                    <input type="text"
                        value={todoText}
                        onChange={(event) => setTodoText(event.target.value)}
                    />
                    <button
                        type="submit"
                    >Add</button>
                </form>
                <hr />
                <div>
                    {
                        allTodos.map(currentTodo => (
                            <div key={currentTodo.id}>
                                <span>{currentTodo.data}</span>
                                <button
                                    onClick={() => dispatch(deleteTodo(currentTodo.id))}
                                >Delete</button>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
}

export default Todo;
