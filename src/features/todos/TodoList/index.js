import {useSelector} from 'react-redux'
import './index.css'
import TodoGroup from "../TodoGroup";
import TodoGenerator from "../TodoGenerator";

export default function TodoList() {
    const todos = useSelector(state => state.todos)

    const addTodo = (todoObj) => {
        const newTodos = [todoObj,...todos]
        // setTodoList(newTodos)
    }

    return (
        <div>
            <span>Todo List</span>
            <TodoGroup todos = {todos} />
            <TodoGenerator addTodo = {addTodo} />
        </div>
    )
}