import React from 'react';
import Todo from '../TodoComponents/Todo';

const TodoList = props => {
    return(
        <div>
            {props.Task.map(item => (
                <Todo key = {item.id} item={item} />
            ))}

        </div>
    )
}


export default TodoList;