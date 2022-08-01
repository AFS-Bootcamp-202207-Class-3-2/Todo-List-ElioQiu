import React from 'react'
import './index.css'

export default function TodoItem(props) {
    const {name} = props;
    return (
        <div>
            <input type="text" value={name} className={"TodoItem"} disabled />
        </div>
    )
}