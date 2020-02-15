import React from 'react'

const task = props => {

    return (
        <div
            className={`task${props.task.complete ? "complete" : ""}`}
            onClick={() => props.toggleTask(props.task.id)}>

            <p>{props.task.name}</p>


        </div>
    )
}



export default task;