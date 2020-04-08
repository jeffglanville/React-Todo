import React from 'react'

const task = props => {
    return (
        <div
            className={props.task.complete ? {textDecoration: 'line-through' } : null}
            onClick={() => props.clearComplete(props.task.id)}>

            <p>{props.task.task}</p>


        </div>
    )
}



export default task;