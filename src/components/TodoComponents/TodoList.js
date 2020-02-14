import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return(
        <div>
            {props.task.map(item => (
                <Todo key = {Todo.id} Todo={Todo} toggleTask={props.toggleTodo} />
            ))}
            <button className='clearcomp' onClick={props.clearTask}>
                Clear Complete
            </button>
        </div>
    )
}


export default TodoList;