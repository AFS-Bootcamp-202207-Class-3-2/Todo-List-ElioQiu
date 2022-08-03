import React from 'react'
import DoneGroup from "./DoneGroup";
import './index.css'

export default function DonePage() {
    return (
        <div className="DoneList">
            <h2>Done List</h2>
            <DoneGroup />
        </div>
    )
}