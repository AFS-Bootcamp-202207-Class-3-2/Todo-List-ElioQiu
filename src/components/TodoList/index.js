import {useState} from 'react'
import './index.css'
import TodoGroup from "../TodoGroup";
import TodoGenerator from "../TodoGenerator";

export default function TodoList() {
    const [todoList, setTodoList] = useState([])

    const addTodo = (todoObj) => {
        const newTodos = [todoObj,...todoList]
        setTodoList(newTodos)
    }

    return (
        <div>
            <span>Todo List</span>
            <TodoGroup todoList = {todoList} />
            <TodoGenerator addTodo = {addTodo} />
        </div>
    )
}