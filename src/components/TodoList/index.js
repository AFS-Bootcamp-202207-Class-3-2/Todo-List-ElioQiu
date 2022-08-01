import React from 'react'
import TodoGroup from "../TodoGroup";
import TodoGenerator from "../TodoGenerator";

export default function TodoList() {
    return (
        <div>
            <TodoGroup />
            <br />
            <TodoGenerator />
        </div>
    )
}