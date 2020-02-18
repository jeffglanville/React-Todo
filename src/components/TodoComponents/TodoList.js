import React from 'react'
import Todo from '../TodoComponents/Todo';

const TodoList = props => {
    return (
        <div className='todolist'>
            {props.task.map(task => (
            <Todo clearComplete={props.clearComplete} key={task.name} task={task} />
            ))}
            <button className='clearcomplete' onClick={props.clearComplete}>
                Clear Complete
            </button>
        </div>
    );
};




export default TodoList;