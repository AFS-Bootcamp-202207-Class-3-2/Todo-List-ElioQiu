import React from 'react'
import TodoItem from "../TodoItem";

export default function TodoGroup(props) {
    const {todoList} = this.props
    return (
        <div>
            {
                todoList.map((item, index) => {
                    return <TodoItem value = {item} key = {index} />
                        })
            }
        </div>
    )
}