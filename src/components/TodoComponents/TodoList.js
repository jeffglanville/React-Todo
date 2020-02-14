import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return(
        <div>
            {props.task.map(item => (
                <Todo key = {item.id} item={item} toggleItem={props.toggleItem} />
            ))}
            <button className='clearcomp' onClick={props.clearComplete}>
                Clear Complete
            </button>
        </div>
    )
}


export default TodoList;