import {useDispatch, useSelector} from 'react-redux'
import './index.css'
import TodoGroup from "../TodoGroup";
import React, {useEffect} from "react";
import {getTodos} from "../../../api/todos";
import {addTodos} from "../todosSlice";

export default function TodoList() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch();
    useEffect(()=>{
        getTodos().then(response => {
            dispatch(addTodos(response.data))
        })
    },[dispatch])

    return (
        <div className="TodoList">
            <h2>Todo List</h2>
            <TodoGroup todos = {todos} />
        </div>
    )
}