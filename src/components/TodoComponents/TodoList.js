import React from 'react'
import Todo from '../TodoComponents/Todo';

const TodoList = props => {
    return (
        <div className='todolist'>
            {props.task.map(task => (
            <Todo toggleTask={props.toggleTask} key={task.name} task={task} />
            ))}
            <button className='clearcomplete' onClick={props.clearComplete}>
                Clear Complete
            </button>
        </div>
    );
};




export default TodoList;