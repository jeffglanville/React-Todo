import React from 'react'

const task = props => {
console.log(props);
    return (
        <div
            className={`task${props.task.complete ? "complete" : ""}`}
            onClick={() => props.clearComplete(props.task.id)}>

            <p>{props.task.task}</p>


        </div>
    )
}



export default task;