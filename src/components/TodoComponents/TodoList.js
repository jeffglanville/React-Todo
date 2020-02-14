import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return(
        <div>
            {props.task.map(item = (
                <Todo key={Todo.id} Todo={Todo} toggleItem={props.toggleItem} />
            ))}
            <button className="clearcomplete" onClick={props.clearComplete}>
                Clear Complete
            </button>
        </div>
    )
}


export default TodoList;