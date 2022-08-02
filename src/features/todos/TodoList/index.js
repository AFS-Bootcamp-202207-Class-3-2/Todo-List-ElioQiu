import {useSelector} from 'react-redux'
import './index.css'
import TodoGroup from "../TodoGroup";
import TodoGenerator from "../TodoGenerator";

export default function TodoList() {
    const todos = useSelector(state => state.todos)

    return (
        <div>
            <span>Todo List</span>
            <TodoGroup todos = {todos} />
            <TodoGenerator />
        </div>
    )
}