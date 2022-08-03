import {useSelector} from 'react-redux'
import './index.css'
import TodoGroup from "../TodoGroup";
import React from "react";

export default function TodoList() {
    const todos = useSelector(state => state.todos)

    return (
        <div className="TodoList">
            <h2>Todo List</h2>
            <TodoGroup todos = {todos} />
        </div>
    )
}