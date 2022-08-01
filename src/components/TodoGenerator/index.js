import React, { useState} from 'react'
import {nanoid} from 'nanoid'

export default function TodoGenerator(props) {
    const [item, setItem] = useState("");

    const onUpdateTodo = (event) => {
        setItem(event.target.value);
    }

    const onAddTodo = () => {
        if (item.trim() === '') {
            alert('输入不能为空')
            return
        }
        const todoObj = {id:nanoid(),name:item.trim()}
        props.addTodo(todoObj)
        setItem('')
    }
    return (
        <div>
            <input type="text" value={item} onChange={onUpdateTodo}  />
            <input type="button" value="add" onClick={onAddTodo} />
        </div>
    )
}