import React from 'react';
import Task from '../TodoComponents/Todo';

const TodoList = props => {
    return(
        <div>
            {props.Task.map(item => {
                <Task key={item.id} item={item}/>
            })}

        </div>
    )
}


export default TodoList;