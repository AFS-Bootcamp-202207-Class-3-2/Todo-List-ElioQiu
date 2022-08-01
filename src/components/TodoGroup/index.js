import React from 'react'
import TodoItem from "../TodoItem";

export default function TodoGroup(props) {
    const {todoList} = props
    return (
        <div>
            {
                todoList.map( todo => {
                        return <TodoItem key = {todo.id} {...todo} />
                    }
                )
            }
        </div>
    )
}