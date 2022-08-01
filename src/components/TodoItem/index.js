import React from 'react'

export default function TodoItem(props) {
    const {name} = props;
    return (
        <div>
            <input type="text" value={name} disabled/>
        </div>
    )
}