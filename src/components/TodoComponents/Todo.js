import React from 'react'
import "./Todo.css";

const Task = props => {
    return (
        <div
            className={`task${props.task.complete ? " complete " : ""}`}
            onClick={() => props.clearComplete(props.task.id)}
        >

            <p>{props.task.task}</p>


        </div>
    )
}



export default Task;