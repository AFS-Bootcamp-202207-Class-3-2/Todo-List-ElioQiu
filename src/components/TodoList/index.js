import React, {useState} from 'react'
import TodoGroup from "../TodoGroup";
import TodoGenerator from "../TodoGenerator";

export default function TodoList() {
    const [todoList, setTodoList] = useState(Array(0))
    return (
        <div>
            <TodoGroup todoList = {todoList} />
            <br />
            <TodoGenerator />
        </div>
    )
}